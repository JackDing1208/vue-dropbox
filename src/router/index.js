import Vue from "vue"
import Router from "vue-router"
import Dashboard from "../pages/DashboardPage"
import Login from "../pages/LoginPage"
import FileManagement from "../pages/FileManagementPage"
import FileShare from "../pages/FileSharePage"
import Home from "../pages/HomePage"
import Page404 from "../pages/404Page"

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
        component: FileManagement,
      }, {
        path: "share",
        component: FileShare,
      }],
    },
    {
      path: "*",
      component: Page404,
    },
  ],
})

export default router
