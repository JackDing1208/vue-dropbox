<template>
    <el-container>
        <el-aside width="250px">
            <Aside/>
        </el-aside>
        <el-container>
            <el-header height="60px">
                <Header/>
            </el-header>
            <el-main>
                <Main/>
            </el-main>
            <el-footer height="40px">
                <p>Copyright © 2009 EdenSoft All Rights Reserved</p>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
  import Aside from "../components/Aside"
  import Header from "../components/Header"
  import Main from "../components/Main"
  import {http, url} from "../lib"
  import Vue from "vue"
  export default {
    name: "Container",
    data() {
      return {
        eventBus: new Vue()       //给自己使用的eventBus
      }
    },
    provide() {
      return {
        eventBus: this.eventBus    //给全部后代组件提供eventBus
      }
    },
    components: {Aside, Header, Main},
    mounted() {
      http.get(url.getUserInfo, {keyValue: 2}).then((res) => {
        this.$store.commit("saveUserInfo", res.data.data)
      })
    },
  }
</script>

<style scoped>
    .el-header {
        background: #5791d0;
    }

    .el-footer {
        color: #333;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        font-size: 12px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }
</style>
