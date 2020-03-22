<template>
    <div class="container">
        <ul class="module-container"
        >
            <li v-for="(item ,index) in moduleArray"
                :key="index.toString()"
                @click="goToModule($event,item.route)"

            >
                <div :data-route="index.route">
                    <div class="module-button" :style="{background:item.color}">
                        <i class="el-icon-setting"></i>
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
          {name: "系统设置", icon: "haha", route: "system", color: "blue"},
          {name: "部门管理", icon: "haha", route: "system", color: "yellow"},
          {name: "用户管理", icon: "haha", route: "system", color: "blue"},
          {name: "统计报表", icon: "haha", route: "system", color: "blue"},
          {name: "日志审计", icon: "haha", route: "system", color: "pink"},
          {name: "我的文档", icon: "haha", route: "system", color: "blue"},
          {name: "部门文档", icon: "haha", route: "system", color: "blue"},
          {name: "知识管理", icon: "haha", route: "system", color: "green"},
          {name: "我的报表", icon: "haha", route: "system", color: "blue"},
          {name: "帮助中心", icon: "haha", route: "system", color: "blue"},
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
      goToModule(e,route) {
        console.log(route)
        // while (target.tagName.toLowerCase() !== "ul") {
        //   if (target.tagName.toLowerCase() === "li") {
        //     console.log(target)
        //     console.log(target.getAttribute("data-route"))
        //     break
        //   }
        //   target = target.parentNode
        // }
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
        border: 1px solid red;
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }

    .module-button {
        height: 150px;
        width: 150px;
        margin: 0 50px;
        border-radius: 20%;
        border: 1px solid red;
        flex-direction: column;
    }
</style>
