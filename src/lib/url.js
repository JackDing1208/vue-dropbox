const host = "http://121.36.74.193:5000/api"

//设置请求路径
let url = {
  menuList: "/User/GetGroupList"
}


for (let key in url) {
  console.log(key)
  url[key] = host + url[key]
}

export default url
