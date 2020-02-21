import Vue from "vue"
import Router from "vue-router"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import CompanyFile from "../pages/CompanyFile"
import ShareFile from "../pages/ShareFile"
import Home from "../pages/Home"
import Page404 from "../pages/404"

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "login"
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/dashboard",
      component: Dashboard,
      //子路由路径开头不能加/
      children: [{
        path: "/",
        redirect: "home",
      }, {
        path: "home",
        component: Home,
      }, {
        path: "company",
        component: CompanyFile,
      }, {
        path: "share",
        component: ShareFile,
      }],
    },
    {
      path: "*",
      component: Page404,
    },
  ],
})

export default router
