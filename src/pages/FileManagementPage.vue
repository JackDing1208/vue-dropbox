<template>
    <div class="container">
        <section class="toolBar">
            <el-button-group>
                <el-button type="primary" icon="el-icon-edit">上传</el-button>
                <el-button type="primary" icon="el-icon-share">下载</el-button>
                <el-button type="primary" icon="el-icon-delete">添加文件夹</el-button>
                <el-button type="primary" icon="el-icon-delete">预览</el-button>
            </el-button-group>

            <el-button-group>
                <el-button type="primary" icon="el-icon-edit">删除</el-button>
                <el-button type="primary" icon="el-icon-share">重命名</el-button>
                <el-button type="primary" icon="el-icon-delete">详情</el-button>
            </el-button-group>

            <el-button-group>
                <el-button type="primary" icon="el-icon-edit">共享</el-button>
                <el-button type="primary" icon="el-icon-share">分享</el-button>
                <el-button type="primary" icon="el-icon-delete">权限分配</el-button>
                <el-button type="primary" icon="el-icon-delete">刷新</el-button>
            </el-button-group>

        </section>
        <section class="content">
            <h2>部门名字</h2>
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
                        prop="name"
                        label="名称"
                        show-overflow-tooltip>
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
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: "2016-05-03",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄",
          size:2
        }, {
          date: "2016-05-02",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1518 弄",
          size:3

        }, {
          date: "2016-05-04",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1518 弄",
          size:4

        }, {
          date: "2016-05-01",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1518 弄",
          size:8

        }, {
          date: "2016-05-08",
          name: "王小虎5",
          address: "上海市普陀区金沙江路 1518 弄",
          size:4

        }, {
          date: "2016-05-06",
          name: "王小虎6",
          address: "上海市普陀区金沙江路 1518 弄",
          size:123412

        }, {
          date: "2016-05-07",
          name: "王小虎7",
          address: "上海市普陀区金沙江路 1518 弄",
          size:2

        }],
        multipleSelection: []
      }
    },
    methods: {
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
        }
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid red;
    }

    .el-button-group {
        margin-right: 20px;
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
