import axios from 'axios';
import {config} from "./config"
import qs from 'qs';

axios.defaults.headers['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
function combineUrl(url,type) {
    return `${config.api_base_url}${url}`;
}
function handleResponse(res) {
    return new Promise((resolve, reject) => {
        if (res.status === 200) {
            //请求成功
            if(typeof res.data==="string"){
              res.data = JSON.parse(res.data)
            }

            if (res.data.success==true) {

              resolve(res.data);
            }
        } else {
            reject();
        }
    });
}


const HTTP = {
  request({url,data={},method='GET'}){
    return new Promise((resolve, reject)=>{
        this._request(url,resolve,reject,data, method)
    })
  },
  _request(url,resolve, reject, data={}, method='GET'){
    if(method=='GET') {
      axios.request({
        method: "GET",
        url: combineUrl(url),
        params:data
      }).then(res => {
          handleResponse(res).then(resolve, reject);
      }, reject);
    } else {
      axios.request({
        method: "POST",
        url: combineUrl(url),
        data:qs.stringify(data)
      }).then(res => {
          handleResponse(res).then(resolve, reject);
      }, reject);
    }

  }
}

export {
    HTTP
}
