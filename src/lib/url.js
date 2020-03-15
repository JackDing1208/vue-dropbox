const host = "https://www.easy-mock.com/mock/5ce13bbdb98ae54df02ce862/youzan_copy"


//设置请求路径
let url = {
  hotLists: "/index/hotLists",
  hotShops: "/index/hotShop",
  banner: "/index/banner",
  topLists: "/category/topList",
  rankLists: "/category/rank",
  subLists: "/category/subList",
  searchLists: "/search/list",
  goods: "/goods/details",
  deal: "/goods/deal",
  cartList: "/cart/list",
  cartAdd: "/cart/add",
  cartMinus: "/cart/reduce",
  cartRemove: "/cart/remove",
  cartUpdate: "/cart/update",
  addressLists: "/address/list",
  addressAdd: "/address/add",
  addressRemove: "/address/remove",
  addressUpdate: "/address/update",
  addressSetDefault: "/address/setDefault"
}


for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
