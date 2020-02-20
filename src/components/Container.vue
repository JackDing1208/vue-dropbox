<template>
    <el-container>
        <el-aside width="200px">
            <Aside/>
        </el-aside>
        <el-container>
            <el-header height="60px">Header</el-header>
            <el-main>Main</el-main>
            <el-footer height="40px">Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
  import Aside from "./Aside"

  export default {
    name: "Container",
    components: {Aside},
  }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }

    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
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
