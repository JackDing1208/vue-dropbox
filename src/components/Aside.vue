<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      msg: String,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .logo {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #3273BA;
    }

</style>
