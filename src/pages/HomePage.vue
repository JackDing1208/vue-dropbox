<template>
    <div class="container">
        <ul class="module-container">
            <li v-for="(item ,index) in moduleArray"
                :key="index.toString()"
                @click="goToModule(item.route)"
            >
                <div :data-route="index.route">
                    <div class="module-button">
                        <img :src="require('../assets/' + item.icon+'.png')" width="100px" height="100px">
                    </div>
                    <p>{{item.name}}</p>
                </div>

            </li>
        </ul>

    </div>
</template>

<script>
  import {http, url} from "../lib"

  export default {
    data() {
      return {
        moduleArray: [
          {name: "系统设置", icon: "setting", route: "system1", color: "blue"},
          {name: "部门管理", icon: "deps", route: "system2", color: "yellow"},
          {name: "用户管理", icon: "users", route: "system3", color: "blue"},
          {name: "统计报表", icon: "reports", route: "system4", color: "blue"},
          {name: "日志审计", icon: "audits", route: "system5", color: "pink"},
          {name: "我的文档", icon: "mydoc", route: "system6", color: "blue"},
          {name: "部门文档", icon: "depdoc", route: "system7", color: "blue"},
          {name: "知识管理", icon: "knowledge", route: "system8", color: "green"},
          {name: "我的报表", icon: "myreport", route: "system", color: "blue"},
          {name: "帮助中心", icon: "help", route: "system", color: "blue"},
        ]
      }
    },


    methods: {
      getUserGrid() {
        http.post(url.getGridJson, {
          "pagination": {
            "rows": 10,
            "page": 1,
            "sidx": "CreateTime",
            "sord": "desc",
            "record": "",
          },
          "Keyword": "",
        }).then((res) => {console.log(res)})
      },
      goToModule(route) {
        console.log(route)
      },
      geticonSrc(name) {
        return `../assets/${name}.png`
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
    }

    .module-container {
        /*border: 1px solid red;*/
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }

    .module-button {
        height: 120px;
        width: 120px;
        margin: 0 50px;
        border-radius: 20%;
        /*border: 1px solid red;*/
        flex-direction: column;
    }
</style>
