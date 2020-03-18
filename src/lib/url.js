const host = "http://121.36.74.193:5000/api"

//设置请求路径
let url = {
  getGroupList: "/User/GetGroupList",
  login:"/Login/CheckLogin",
  getUserInfo:"/User/GetFormJson"
}


for (let key in url) {
  console.log(key)
  url[key] = host + url[key]
}

export default url
