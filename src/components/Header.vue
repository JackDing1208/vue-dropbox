<template>
    <div class="container">
        <div class="title">
            <h1>云文档管理系统</h1>
        </div>
        <div class="search-wrapper">
            <el-input placeholder="搜索当前目录下的文件"
                      v-model="input1">
            </el-input>
            <div class="search-button-wrapper">
                <div class="search-all">全文搜索</div>
                <div class="search-line"></div>
                <div class="search-button" @click="searchInput">
                    <i class="el-icon-search"></i>
                </div>
            </div>
        </div>
        <div class="menu">
            <el-dropdown @command="handleCommand">
                <el-button type="primary">
                    <i class="el-icon-user"></i>
                    <span class="userName">用户名字</span>
                    <i class="el-icon-arrow-down"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="/dashboard">系统设置</el-dropdown-item>
                    <el-dropdown-item>个人资料</el-dropdown-item>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>用户管理</el-dropdown-item>
                    <el-dropdown-item>用户组管理</el-dropdown-item>
                    <el-dropdown-item>流程管理</el-dropdown-item>
                    <el-dropdown-item>角色管理</el-dropdown-item>
                    <el-dropdown-item>日志审计</el-dropdown-item>
                    <el-dropdown-item>用户报表</el-dropdown-item>
                    <el-dropdown-item>自定义报表</el-dropdown-item>
                    <hr>
                    <el-dropdown-item command="/login">退出登录</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Header",
    data: () => {
      return {
        input1: "",
      }
    },
    inject:['eventBus'],
    methods: {
      handleCommand(command) {
        command && this.$router.push({path: command})
      },
      searchInput(){
        this.eventBus.$emit('xxx',this.input1)
      }
    },
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }


    .search-wrapper {
        width: 350px;
        position: relative;
    }

    .search-button-wrapper {
        position: absolute;
        display: flex;
        align-items: center;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

    .search-line{
        margin: auto 5px;
        height: 20px;
        border-right: 1px solid #333;
    }

    .search-all {
        background: #8ab2de;
        padding: 5px 8px;
        border-radius: 8px;
        font-size: 12px;
        color: #fff;
    }

    .search-all:hover {
        cursor: default;
    }

    .title {
        color: #FFF;
    }

    .userName {
        font-size: 14px;
        font-weight: bold;
        margin: 4px
    }

    .el-button {
        background: #5791d0;
        border: 0px;
        padding-left: 8px;
        padding-right: 8px;
    }

    .el-dropdown {
        vertical-align: top;
    }

    .el-dropdown {
        margin-left: 15px;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>
