import Axios from "axios"

const URL= ""

export default class Http {
  static checkLogin (username,password,isRember,isAD){
    Axios.post("URL"+"",{username,password,isRember,iaAD}).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
}
