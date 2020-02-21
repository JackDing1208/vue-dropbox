<template>
    <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#D3DCE6">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>公司文档</span>
            </template>


            <el-submenu index="1-1">
                <template slot="title">研发部</template>
                <el-menu-item index="1-1-1">研发一部</el-menu-item>
                <el-menu-item index="1-1-2">研发二部</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>

        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 100%;
        height: 100%;
    }

    .el-menu{
    }

    .el-submenu .el-menu-item{
        padding-left : 45px !important;
    }

</style>
