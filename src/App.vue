<script>
  import Container from "./components/Container"

  export default {
    name: "App",
    components: {Container},
  }
</script>

<template>
    <div id="app">
        <Container/>
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
