<template>
    <div class="container">
        <button @click="getUserGrid"> 发post请求</button>
    </div>
</template>

<script>
  import {http, url} from "../lib"

  export default {
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
        }).then((res)=>{console.log(res)})
      },
    },

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        background: pink;
    }
</style>
