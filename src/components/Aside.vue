<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <el-button>返回首页</el-button>
        <el-tree :data="tree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        tree: [{
          label: "公司文档",
          children: [{
            label: "研发部",
            children: [{
              label: "研发一部"
            }, {
              label: "研发二部"
            }]
          }]
        }, {
          label: "共享文档",
          children: [{
            label: "二级 2-1",
            children: [{
              label: "三级 2-1-1"
            }]
          }, {
            label: "二级 2-2",
            children: [{
              label: "三级 2-2-1"
            }]
          }]
        }, {
          label: "我的文档",
          children: [{
            label: "二级 3-1",
            children: [{
              label: "三级 3-1-1"
            }]
          }, {
            label: "二级 3-2",
            children: [{
              label: "三级 3-2-1"
            }]
          }]
        }],
        defaultProps: {
          children: "children",
          label: "label"
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
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
