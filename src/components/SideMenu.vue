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
            <template v-for="item in groupMenu">
                <el-submenu v-if="item.Subset.length>0"
                            :index="getJsonIndex('groupFile',item.Id,item.GroupName)"
                            :key="item.Id">
                    <template slot="title">{{item.GroupName}}</template>
                    <template v-for="subItem in item.Subset">
                        <el-submenu v-if="subItem.Subset.length>0"
                                    :index="getJsonIndex('groupFile',subItem.Id,subItem.GroupName)"
                                    :key="subItem.Id">
                            <template slot="title">
                                {{subItem.GroupName}}
                            </template>
                            <el-menu-item v-for="thirdItem in subItem.Subset"
                                          :index="getJsonIndex('groupFile',thirdItem.Id,thirdItem.GroupName)"
                                          :key="thirdItem.Id">
                                {{thirdItem.GroupName}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else-if="subItem.Subset.length===0"
                                      :index="getJsonIndex('groupFile',subItem.Id,subItem.GroupName)"
                                      :key="subItem.Id">
                            {{subItem.GroupName}}
                        </el-menu-item>
                    </template>
                </el-submenu>
                <el-menu-item v-else-if="item.Subset.length===0"
                              :index="getJsonIndex('groupFile',item.Id,item.GroupName)"
                              :key="item.Id">
                    {{item.GroupName}}
                </el-menu-item>
            </template>


        </el-submenu>
        <el-menu-item :index="getJsonIndex('share')">
            <i class="el-icon-menu"></i>
            <span slot="title">共享文档</span>
        </el-menu-item>
        <el-menu-item :index="getJsonIndex('myFile')">
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

    mounted() {
      http.get(url.getGroupMenu).then((res) => {
        console.log("groupMenu", res.data.data[0].Subset)
        this.groupMenu = res.data.data[0].Subset
      })
    },
    computed: {},
    methods: {
      getJsonIndex(route="groupFile",id=0,name="file"){
        const obj = {route,id,name}
        return JSON.stringify(obj)
      },
      handleOpen(index) {
        console.log("open", index)
        if (index === "1")return
        this.goToFileList(index)
      },
      handleClose(index) {
        console.log("close", index)
      },
      handleSelect(key) {
        console.log("select", key)
        this.goToFileList(key)
      },
      goToFileList(key) {
        const obj =JSON.parse(key)
        this.$router.push({
          path: obj.route,
          query: {
            groupId: obj.id,
            name:obj.name
          }
        }).catch(()=>{})
      }
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
