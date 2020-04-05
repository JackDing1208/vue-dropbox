<template>
    <div class="container">
        <section class="toolBar">
            <el-button-group>
                <el-button type="primary" icon="el-icon-edit" @click="uploaderDialogVisible = true">上传</el-button>
                <el-button type="primary" icon="el-icon-share">下载</el-button>
                <el-button type="primary" icon="el-icon-delete">添加文件夹</el-button>
                <el-button type="primary" icon="el-icon-delete">预览</el-button>
            </el-button-group>

            <el-button-group>
                <el-button type="primary" icon="el-icon-edit">删除</el-button>
                <el-button type="primary" icon="el-icon-share">重命名</el-button>
                <el-button type="primary" icon="el-icon-delete" @click="detailDialogVisible = true">详情</el-button>
            </el-button-group>

            <el-button-group>
                <el-button type="primary" icon="el-icon-edit">共享</el-button>
                <el-button type="primary" icon="el-icon-share">分享</el-button>
                <el-button type="primary" icon="el-icon-delete">权限分配</el-button>
                <el-button type="primary" icon="el-icon-delete">刷新</el-button>
            </el-button-group>

        </section>
        <section class="content">
            <h2>{{groupName}}</h2>
            <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>

                <el-table-column
                        label="名称"
                        show-overflow-tooltip
                        class="table-name-cell"
                >
                    <template slot-scope="scope">
                        <div class="file-name-wrapper">
                            <img :src="require('../assets/fileType/'+`${scope.row.ExtensionName.slice(1).toUpperCase()}`+'.png')" alt="">
                            <div style="margin-left: 10px">{{ scope.row.name }}</div>
                        </div>
                    </template>
                </el-table-column>


                <el-table-column
                        prop="address"
                        label="文档标签"
                        width="150"
                        sortable
                        show-overflow-tooltip
                >
                </el-table-column>

                <el-table-column
                        prop="size"
                        label="大小"
                        sortable
                        width="150">
                </el-table-column>

                <el-table-column
                        prop="date"
                        label="修改时间"
                        sortable
                        width="150">
                    <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
                </el-table-column>

                <el-table-column
                        prop="name"
                        label="上传人"
                        width="150">
                </el-table-column>

                <el-table-column
                        prop="name"
                        label="版本号"
                        width="150">
                </el-table-column>


            </el-table>
        </section>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="100">
        </el-pagination>


        <el-dialog title="上传文件" :visible.sync="uploaderDialogVisible">
            <Uploader></Uploader>
        </el-dialog>

        <el-dialog title="文件详情" :visible.sync="detailDialogVisible">
            <div class="tag-wrapper">
                <div class="tag-title">文档标签</div>
                <div class="tag-container">
                    <div class="tag-group">
                        <div v-for="(name,index) in currentFileTag"
                             :key="index.toString()"
                             class="tag-span">
                            {{name}}
                            <div class="tag-x" @click="deleteFileTag(index)">
                                <img src="../assets/delete.png" alt="x" height="10px" width="10px">
                            </div>
                        </div>
                        <el-button @click="tagStatus=!tagStatus">
                            {{tagStatus?"隐藏":"编辑"}}
                        </el-button>
                    </div>
                    <div class="tag-input-wrapper" v-show="tagStatus">
                        <el-input v-model="tagInput"
                                  class="tag-input"
                                  placeholder="多个标签请用英文,隔开"
                        ></el-input>
                        <el-button @click="addFileTag">添加标签</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  import {http, url} from "../lib"
  import Uploader from "../components/Uploader"

  export default {
    data() {
      return {
        groupName: "部门名字",
        tagStatus: false,
        tagInput: "",
        uploaderDialogVisible: false,
        detailDialogVisible: false,
        currentFileTag: ["123", "222", "333"],
        tableData: [{
          date: "2016-05-03",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
          size: 2,
          ExtensionName:".zip"
        }, {
          date: "2016-05-02",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1518 弄",
          size: 3,
          ExtensionName:".png"
        }, {
          date: "2016-05-04",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1518 弄",
          size: 4,
          ExtensionName:".xlsx"
        }, {
          date: "2016-05-01",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1518 弄",
          size: 8,
          ExtensionName:".mp3"

        }, {
          date: "2016-05-08",
          name: "王小虎5",
          address: "上海市普陀区金沙江路 1518 弄",
          size: 4,
          ExtensionName:".doc"

        }, {
          date: "2016-05-06",
          name: "王小虎6",
          address: "上海市普陀区金沙江路 1518 弄",
          size: 123412,
          ExtensionName:".xlsx"

        }, {
          date: "2016-05-07",
          name: "王小虎7",
          address: "上海市普陀区金沙江路 1518 弄",
          size: 2,
          ExtensionName:".mp4"
        }],
        multipleSelection: [],
      }
    },
    mounted() {
      this.eventBus.$on("xxx", (value) => {
        console.log(value)
      })
      const {groupId, name} = this.$route.query
      console.log("groupId",groupId)
      this.groupName = name
      http.post(url.getPersonalFileList, {
        ParentId: 0,
        keyword:'',
        pagination: {
          rows: 10,
          page: 1,
          sidx: "CreateTime",
          sord:"desc",
          record:'',
        },
      }).then((res) => {
        console.log(res)
      })
    },
    inject: ["eventBus"],

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      addFileTag() {
        const tagArray = this.tagInput.split(",").filter(Boolean)
        this.currentFileTag = this.currentFileTag.concat(tagArray)
        this.tagInput = ""
      },
      deleteFileTag(index) {
        this.currentFileTag.splice(index, 1)
      },
    },
    components: {Uploader},
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tag-wrapper {
        display: flex;
        align-items: flex-start;
    }


    .tag-group {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .tag-span {
        background: #409eff;
        padding: 0px 8px;
        line-height: 25px;
        height: 25px;
        border-radius: 5px;
        margin-right: 20px;
        margin-bottom: 10px;
        margin-top: 10px;
        color: #fff;
        position: relative;
    }

    .tag-x {
        position: absolute;
        left: 100%;
        top: -15px;
        height: 10px;
        width: 10px;
        /*background: #475059;*/
        border-radius: 10px;
    }

    .tag-container {
        flex: 1;
        /*border: 1px solid red;*/
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .tag-title {
        height: 40px;
        margin-right: 10px;
        line-height: 40px;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .tag-input-wrapper {
        display: flex;
    }

    .tag-input {
        min-width: 400px;
        margin-right: 2px;
    }

    .tag-wrapper .el-button {
        background: #409eff;
        color: #fff
    }

    .file-name{
        display: inline-block;
    }

    .el-button-group {
        margin-right: 10px;
    }
    .file-name-wrapper{
        display: flex;
        align-items: center;
    }

    .toolBar {
        height: 60px;
        justify-content: flex-start;
        align-items: center;
        display: flex;
    }

    .content {
        text-align: left;
        flex: 1
    }
</style>
