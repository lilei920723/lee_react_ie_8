import {UserModel} from "../../model/userModel/user"
export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "GET_USER_INFO_FAIL";

export function getUserInfo() {
    let userInfo = {}
    if (localStorage.getItem("userInfo")) {
      userInfo = JSON.parse(localStorage.getItem("userInfo"))
    } else {

      UserModel.login().then(res=>{
        userInfo.type = res.data.cookie.value
      }).then(res=>{
        if (userInfo.type==1) {
          UserModel.getConsignorUserInfo().then(res=>{
            userInfo = Object.assign(userInfo,res.data)
            console.log(userInfo)
            localStorage.setItem("userInfo",JSON.stringify(userInfo))
          })
        }else{
          UserModel.getLogisticUserInfo().then(res=>{
            userInfo = Object.assign(userInfo,res.data)
            console.log(userInfo)
            localStorage.setItem("userInfo",JSON.stringify(userInfo))
          })
        }
      })
    }

    return {
        types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
        promise: ()=>{
          return new Promise((resolve, reject)=>{
            resolve({result:userInfo})
          })
        }
    }
}
