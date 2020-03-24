const host = "http://121.36.74.193:5000/api"

//设置请求路径
let url = {
  login: "/Login/CheckLogin",
  logout: "/Login/OutLogin",
  getGroupList: "/User/GetGroupList",
  getUserInfo: "/User/GetFormJson",
  getSystemInfo: "/SystemSetting/GetSystemInfo",
  getGridJson: "/User/GetGridJson",
  getGroupMenu:"/File/GetGroupMenu",
}


for (let key in url) {
  // console.log(key)
  url[key] = host + url[key]
}

export default url
