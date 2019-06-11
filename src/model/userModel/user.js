import {HTTP} from "../../util/http"


const UserModel = {

  getUserInfo(){
    return HTTP.request({
      url:"dirbnzy/login/currentConsignorUser",
      data:{},
      method:"GET"
    }).then(res=>{
      console.log(res)
    })

  },

  login(){
    return HTTP.request({
      url:"dirbnzy/login/web",
      data:{
        loginName: 13291283215,
        password: "e10adc3949ba59abbe56e057f20f883e",
        deviceId: 2,
      },
      method:"POST"
    })
  },
 loginOut(){
    return HTTP.request({
      url:"dirbnzy/login/logout.json",
      data:{},
      method:"POST"
    })
  },
  getConsignorUserInfo(){
    return HTTP.request({
      url:"dirbnzy/login/currentConsignorUser",
      data:{},
      method:"POST"
    })
  },
  getLogisticUserInfo(){
    return HTTP.request({
      url:"dirbnzy/login/currentLogisticUser",
      data:{},
      method:"POST"
    })
  }

}

export {
  UserModel
}
