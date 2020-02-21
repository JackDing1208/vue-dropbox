<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <el-button>返回首页</el-button>
        <div>
            <SideMenu/>
        </div>
    </div>
</template>

<script>
    import SideMenu from "./SideMenu"
  export default {
    data() {
      return {
      }
    },
    components:{SideMenu}
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .logo {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3273BA;
    }

    .el-tree {
        background: #D3DCE6;
        color: #333;
    }

</style>
