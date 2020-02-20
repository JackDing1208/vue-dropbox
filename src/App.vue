<script>

  export default {
    name: "App",
    components: {},
  }
</script>

<template>
    <div id="app">
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-header height="60px">Header</el-header>
                <el-main>Main</el-main>
                <el-footer height="40px">Footer</el-footer>
            </el-container>
        </el-container>
    </div>
</template>


<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

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

    #app > .el-container {
        height: 100%;
        width:100%;
    }

    #app {
        width: 100vw;
        height: 100vh;
    }
</style>
