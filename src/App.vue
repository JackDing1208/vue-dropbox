<script>
  import Layout from "./components/Layout"

  export default {
    name: "App",
    components: {Layout},
  }
</script>

<template>
    <div id="app">
        <Layout/>
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

    #app > .el-container {
        height: 100%;
        width: 100%;
    }

    #app {
        width: 100vw;
        height: 100vh;
    }
</style>
