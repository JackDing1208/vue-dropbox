<template>
    <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="#D3DCE6">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>公司文档</span>
            </template>
            <el-submenu index="1-1">
                <template slot="title">研发部</template>
                <el-menu-item index="company" key="company-1">研发一部</el-menu-item>
                <el-menu-item index="company" key="company-2">研发二部</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="share" key="share">
            <i class="el-icon-menu"></i>
            <span slot="title">共享文档</span>
        </el-menu-item>
        <el-menu-item index="my" key="my">
            <i class="el-icon-setting"></i>
            <span slot="title">我的文档</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
  import {http,url} from "../lib"

  export default {
    mounted(){
      http.get(url.getGroupList).then((res)=>{
        console.log(res)
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect(index) {
        this.$router.push(`${index}`).catch(() => {})
      },
    },
  }

</script>

<style scoped>

    .el-menu {
        text-align: left;
    }

    .container {
        width: 100%;
        height: 100%;
    }

</style>
