<template>
    <uploader :options="options" class="uploader-example">
        <uploader-unsupport></uploader-unsupport>
            <uploader-btn>选择文件</uploader-btn>
            <uploader-btn :directory="true">选择文件夹</uploader-btn>
        <uploader-list></uploader-list>
    </uploader>
</template>

<script>
  export default {
    data () {
      return {
        options: {
          target: 'http://127.0.0.1:3000/upload',
          chunkSize: 2 * 1024 * 1024,
          testChunks: false // 是否开启服务器分片校验
        },
        attrs: {
          accept: 'image/*'
        },
        statusText: {
          success: '上传成功',
          error: '上传出错了',
          uploading: '正在上传',
          paused: '暂停中',
          waiting: '等待中'
        },
      }
    },
  }
</script>

<style>
    .uploader-example {
        width: 600px;
        min-height: 400px;
        padding: 15px;
        margin: 0 auto ;
        font-size: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    }
    .uploader-example .uploader-btn {
        margin-right: 4px;
    }
    .uploader-example .uploader-list {
        max-height: 440px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>
