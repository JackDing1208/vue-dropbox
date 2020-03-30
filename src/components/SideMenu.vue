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
            <el-submenu v-for="(item ,index) in secondClassMenu"
                        :index="item.Id.toString()" :key="index">
                <template slot="title">{{item.GroupName}}</template>
                <el-menu-item v-for="(subItem) in item.Subset" :index="subItem.Id.toString()" :key="subItem.Id">
                    {{subItem.GroupName}}
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-for="(item) in firstClassMenu" :index="item.Id.toString()" :key="item.Id">
                {{item.GroupName}}
            </el-menu-item>
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
  import {http, url} from "../lib"

  export default {
    data() {
      return {
        groupMenu: [],
      }
    },

    computed:{
      firstClassMenu(){
        return this.groupMenu.filter((item)=>{
          return item.Subset.length===0
        })
      },
      secondClassMenu(){
        return this.groupMenu.filter((item)=>{
          return item.Subset.length>0
        })
      }
    },
    mounted() {
      http.get(url.getGroupMenu).then((res) => {
        console.log("groupMenu", res.data.data[0].Subset)
        this.groupMenu = res.data.data[0].Subset
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log("open", key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log("close", key, keyPath)
      },
      handleSelect(index) {
        console.log("select", index)
        this.$router.push({path: "groupFile", query: {groupId: index}})
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
