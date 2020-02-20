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
                <el-header>Header</el-header>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
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

    html {
    }

    ol, ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    #app {
        width: 100%;
        height: 100%;
        border: 1px solid red;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
