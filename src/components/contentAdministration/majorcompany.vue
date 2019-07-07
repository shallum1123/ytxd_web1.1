<template>
  <div class="con content">
    <!-- <div class="header">
      <img src="../../assets/img/image.png" alt>
      <p>远通信德</p>
    </div> -->
    <div class="box">
      <div class="left">
          <menu1></menu1>
        <!-- <router-link to="/price" tag="li">图片管理</router-link>
        <router-link to="/content" tag="li">内容管理</router-link>
        <router-link to="/honor" tag="li">客户垂询数据</router-link> -->
      </div>
      <div style="width:100%">
          <div class="flesRight">
            <el-breadcrumb separator-class="el-icon-arrow-right content-head">
              <el-breadcrumb-item :to="{ path: '/price' }">内容管理</el-breadcrumb-item>
              <el-breadcrumb-item style="color:white">公司重大事项</el-breadcrumb-item>
              <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
            </el-breadcrumb>
          </div>
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick" class="tab"> -->
          <!-- <el-tab-pane label="解决方案" name="one"> -->
            <el-button type="primary" style="float:right;margin:15px 15px 0 0 ;" @click="add()">添加</el-button>
            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
              <el-table-column type="index" label="序号" width="50"></el-table-column>
              <el-table-column prop="articleTitle" label="文章名称" width="270"></el-table-column>
              <el-table-column prop="abbreviation" label="简称" width="270"></el-table-column>
              <!-- <el-table-column prop="zip" label="主图名称" width="180"></el-table-column> -->
              <el-table-column prop="createTime" label="发布时间" :formatter="dateFormat" width="150"></el-table-column>
              <!-- <el-table-column prop="tag" label="显示顺序" width="200"></el-table-column> -->
              <el-table-column prop="tag" label="设置在首页" width="200">
                <template slot-scope="scope">
                  <span v-if="scope.row.status == 1">已在首页显示</span>
                  <el-button
                    size="mini"
                    @click="shezhi(scope.$index, scope.row)"
                    v-if="scope.row.status != 1"
                  >设置</el-button>
                  <el-button
                    size="mini"
                    v-if="scope.row.status == 1"
                    @click="chongzhi(scope.$index, scope.row)"
                  >重制</el-button>
                </template>
              </el-table-column>
              <el-table-column label="详情" width="200">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          <!-- </el-tab-pane> -->
          <!--  -->

        <!-- </el-tabs> -->
         <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-size="pageSize"
              layout="total, prev, pager, next"
              :total="totalSize"
            ></el-pagination>
          </div>
      </div>
    </div>
    <el-dialog title="详情页编写" :visible.sync="dialogVisible" :close-on-click-modal="false" width="80%">
      <div>
        <fwb :categoryId="this.categoryId" @par="par"></fwb>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="yes()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="详情修改" :visible.sync="dialog1" :close-on-click-modal="false" width="80%">
      <ueditor :mondify="this.mondifyForm"></ueditor>
      <!-- <el-form v-model="mondifyForm" class="demo-form-inline" label-width="100px"> -->
      <!-- <el-form-item label="文章名称:">
          <el-input v-model="mondifyForm.articleTitle"></el-input>
        </el-form-item>
        <el-form-item label="简称:">
          <el-input v-model="mondifyForm.abbreviation"></el-input>
      </el-form-item>-->
      <!-- <el-form-item label="主图名称:">
          <el-input v-model="mondifyForm.files.uploadName"></el-input>
      </el-form-item>-->
      <!-- </el-form> -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog1 = false">取 消</el-button>
        <el-button type="primary" @click="dialog1 = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="dialog2">
      <span>是否在首页展示</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fou()">否</el-button>
        <el-button type="primary" @click="shi()">是</el-button>
      </span>
    </el-dialog>
    <el-dialog :visible.sync="dialog3">
      <span>是否重制</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="fou1()">否</el-button>
        <el-button type="primary" @click="shi1()">是</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
import menu1 from '@/components/menu.vue'
import fwb from "@/components/honorAdminidtration/one";
import moment from "moment";
import ueditor from "./ueditor";
import content from "./content";
export default {
  data() {
    return {
      pary:{},
      currentPage4:1,
      totalSize:1,
      pageSize:8,
      page:1,
      mondifyForm: {},
      categoryId: "",
      activeName: "one",
      dialogVisible: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      she: {},
      she1: {},
      tabT: {},
      tableData: [{}],
      parmas1:[],
      businessId:'',
      imgCategory: ["220","240","230"]
    };
  },
  components: {
    menu1,
    fwb,
    content,
    ueditor
  },
  created() {
    this.getData(50);
  },
  methods: {
    par(data){
      this.pary=data
      console.log(data)
      // this.businessId = data.businessId
      console.log(data.businessId)
      var json =[]
    for(let i in this.pary.realName){
      var j={};
      j['businessId'] = this.pary.businessId;
      j['categoryId'] = this.imgCategory[i];
      j['realName'] = this.pary.realName[i];
      j['uploadName'] = this.pary.uploadName[i];
      j['url'] = this.pary.url[i];

      // j.businessId=this.pary.businessId;
      // j.categoryId=this.pary.categoryId;
      // j.realName=this.pary[i]
      // console.log(this.pary[i])
      json.push(j);
    }
     var a = json;  
     this.parmas1 =a      
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.getData()
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getData()
      console.log(`当前页: ${val}`);
    },
    // 转换获取时间
    dateFormat: function(row, column) {
      var data = row[column.property];
      if (data == undefined) {
        return "";
      }
      return moment(data).format("YYYY-MM-DD");
    },
    shezhi(index, row) {
      console.log(index, row);
      this.she = row.articleId;
      this.dialog2 = true;
    },
    fou() {
      this.dialog2 = false;
    },
    shi(index, row) {
      var that = this;
      axios
        .post("/plat/web/modifyArticle", {
          status: 1,
          articleId: this.she
        })
        .then(res => {
          this.getData()
        });
      this.dialog2 = false;
    },
    fou1() {
      this.dialog3 = false;
    },
    shi1() {
      axios
        .post("/plat/web/modifyArticle", {
          status: 0,
          articleId: this.she1
        })
        .then(res => {this.getData()});
      this.dialog3 = false;
    },
    chongzhi(index, row) {
      console.log(index, row);
      this.she1 = row.articleId;
      this.dialog3 = true;
    },
    yes() {
      axios.post('/plat/file/add',this.parmas1).then((res) => {
        console.log(res)
      })
      this.dialogVisible = false;
      this.getData()
    },
    add() {
      this.dialogVisible = true;
    },
    getData() {
      axios.get("/plat/web/queryArticle?categoryId="+100+"&rows=" +
            this.pageSize +
            "&page=" +
            this.page)
      // axios.get("/plat/web/queryArticle?categoryId=50")
      .then(res => {
        console.log(res);
        this.tableData = res.data.resultList;
          this.totalSize = res.data.totalSize;
          this.categoryId = 100;
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.tabT = tab;
      let name =tab.name;
      tab["one"] =50,
      tab["two"] =70,
      tab["three"] =60,
      tab["four"] =80,
      tab["five"] =90,
      tab["sex"] =100,
      tab["seven"] =110,
      tab["eight"] =120,
      tab["ten"] =130,
      tab["ten1"] =140,
      tab["ten2"] =150,
      tab["ten3"] =160,
      tab["ten4"] =170,
      tab["ten5"] =180,
      tab["ten6"] =190,
      tab["ten7"] =210,
      this.getData(tab[name])
    },
    indexMethod(index) {
      return index * 1;
    },
    handleEdit(index, row) {
      this.mondifyForm = row;
      console.log(this.mondifyForm);
      this.dialog1 = true;
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          axios
            .get("/plat/web/removeArticle?articleId=" + row.articleId, {
              // articleId:row.articleId
            })
            .then(res => {
              this.getData(row.categoryId)
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      } else if (rowIndex === 5) {
        return "warning-row";
      }
      return "";
    }
  }
};
</script>
<style scoped>
.block {
  float: right;
}
.xianshi {
  display: none;
}
.con {
  width: 100%;
}
.tab {
  width: 1150px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 10px;
}
.tab::-webkit-scrollbar {
  display: none;
}
.el-tabs__item {
  font-size: 16px;
  color: gray;
  padding: 0 40px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.left li {
  list-style: none;
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: aliceblue;
  margin-top: 20px;
}
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  /* background: linear-gradient(right,#1ba784, #45b787);  */
  background: #5698c3;
  color: aliceblue;
  display: flex;
}
.header img {
  width: 12%;
  padding: 3px;
}
.header p {
  width: 78%;
  text-align: center;
}
.nairong {
  height: 100%;
  padding: 20px;
}
.box {
  height: 100%;
  display: flex;
}
.content {
  width: 100%;
  height: 100%;
}
.left {
    height: 100%;
  /* min-width: 200px;
  height: calc(100vh - 60px);
  background: #5698c3; */
  /* height: 100%; */
  /* background: linear-gradient(top,#45b787, #1a6840);  */

  /* background: #1ba784; */
}
.left ul {
  height: 100%;
  /* list-style: none;
  text-align: center;
  height: 60px;
  line-height: 60px;
  color: aliceblue;
  margin-top: 20px; */
}
.left :hover {
  /* background: #2f90b9; */
}
</style>
