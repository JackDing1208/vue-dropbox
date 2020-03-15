<template>
    <el-container>
        <el-header height="60px">
            <h1>文档管理系统</h1>
        </el-header>
        <el-main>
            <el-form ref="loginForm" class="login-form" autocomplete="on" label-position="left">
                <div class="title-container">
                    <h3 class="title">用户登录</h3>
                </div>
                <el-form-item prop="username">
                    <el-input
                            ref="username"
                            v-model="loginForm.username"
                            placeholder="账号"
                            name="username"
                            type="text"
                            tabindex="1"
                            autocomplete="on"
                            prefix-icon="el-icon-user-solid"
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            ref="password"
                            placeholder="密码"
                            v-model="loginForm.password"
                            name="password"
                            tabindex="2"
                            autocomplete="on"
                            @blur="capsTooltip = false"
                            @keyup.enter.native="handleLogin"
                            prefix-icon="el-icon-lock"
                    />
                </el-form-item>
                <el-button :loading="loading" type="primary"
                           style="width:100%;margin-bottom:30px;"
                           @click.native.prevent="handleLogin">
                    登录
                </el-button>
            </el-form>
        </el-main>
        <el-footer height="40px">
            <p>Copyright © 2020 Edensoft All Rights Reserved</p>
        </el-footer>
    </el-container>
</template>

<script>
  // import Http from "../lib/http"

  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: "",
          password: "",
        },
        passwordType: "password",
        capsTooltip: false,
        loading: false,
        showDialog: false,
        redirect: undefined,
        otherQuery: {},
      }
    },
    methods: {
      handleLogin() {
        // Http.checkLogin()
        this.$router.push({path: this.redirect || "/dashboard", query: this.otherQuery})
      },
    },
  }
</script>

<style scoped>
    .el-container {
        width: 100%;
        height: 100vh;
        margin: 0 auto;
        background-image: url(../assets/login-bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        overflow: auto;
    }

    .el-header {
        display: flex;
        align-items: center;
    }

    .el-main{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-form {
        width: 350px;
        max-width: 100%;
        padding: 35px 35px;
        margin: auto;
        overflow: hidden;
        background: #3273BA;
        border-radius: 10px;
        opacity: 0.9;
    }

    h1, h3 {
        color: #fff
    }

    .title-container {
        margin-bottom: 30px;
    }

    .el-footer {
        color: #333;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 10px;
        font-size: 12px;
    }


</style>
