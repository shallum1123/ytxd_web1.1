<template>
  <div class="inp content">
    <!-- <div class="header">
      <img src="../../assets/img/image.png" alt="">
      <p>远通信德</p>
      </div> -->
      <div class="box">
      <div class="left">
        <!-- <router-link to="/price" tag="li">图片管理</router-link>
        <router-link to="/content" tag="li">内容管理</router-link>
        <router-link to="/honor" tag="li">客户垂询数据</router-link> -->
          <menu1></menu1>
      </div>
      <div style="width:100%">
      <div class="flesRight">
            <el-breadcrumb separator-class="el-icon-arrow-right content-head">
              <el-breadcrumb-item :to="{ path: '/price' }">内容管理</el-breadcrumb-item>
              <el-breadcrumb-item style="color:white">客户垂询数据</el-breadcrumb-item>
              <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
            </el-breadcrumb>
          </div>
      <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="margin-top:10px;margin-left:10px;">
      <el-form-item>
        <el-input placeholder="请输入公司名称" v-model="formInline.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="query()">查询</el-button>
      </el-form-item>
    </el-form>
    <div >
      <el-table :data="tableData" style="width: 100%;" :row-class-name="tableRowClassName">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="tel" label="联系电话" width="140"></el-table-column>
        <el-table-column prop="post" label="职位" width="120"></el-table-column>
        <el-table-column prop="company" label="公司" width="150"></el-table-column>
        <el-table-column prop="area" label="地区" width="120"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="200"></el-table-column>
        <el-table-column prop="createTime" label="日期" width="150" :formatter="dateFormat"></el-table-column>
        <el-table-column prop="problem" label="咨询与反馈问题" width="160"></el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="totalSize">
    </el-pagination>  
  </div>
  </div>
      </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios' 
import moment from "moment";
import menu1 from '@/components/menu.vue'
export default {
  data() {
    return {
      currentPage4:1,
      totalSize:1,
      pageSize:8,
      page:1,
      formInline:{
        name:'',
      },
      tableData: []
      
    };
  },
  created(){
    this.getData()
  },
  components:{
    menu1
  },
  methods: {
     // 转换获取时间
    dateFormat: function(row, column) {
      var data = row[column.property];
      if (data == undefined) {
        return "";
      }
      return moment(data).format("YYYY-MM-DD");
    },
   handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize= val;
        this.getData();
      },
      handleCurrentChange(val) {
        this.page= val;
        this.getData();
        console.log(`当前页: ${val}`);
      },
      getData(){
      axios.post('/plat/coop/selectAll',{
        rows:this.pageSize,
        page:this.page
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.resultList;
        this.totalSize = res.data.totalSize;
        
      })
    },
    query(){
      axios.post('/plat/coop/selectAll'
      ,{
        mohu:this.formInline.name
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.resultList;
      })
      this.getData()
    },
    
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      } else if(rowIndex === 5){
        return "warning-row";
      }
      return "";
    }
  }
};
</script>
<style scope>
.content-article {
    width: 100%;
    box-sizing: border-box;
}
.content-head {
  height: 60px;
  line-height: 60px;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
  margin-left: 20px;
  color: wheat;
} 
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: whitesmoke;
}
.el-breadcrumb {
  width: 100%;
  height: 60px;
  line-height: 60px;
}
.flesRight {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #475164;
}
.el-icon-s-fold {
  width: 100%;
  text-align: center;
  font-size: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* min-width: 200px; */
  height: calc(100vh - 0px);
  /* background: #5698c3; */
  width: 200px;
  /* min-height: 400px; */
}
.tabb {
  margin-left: 10px;
  margin-top: 10px;
}
.block {
  float: right;
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
  box-sizing: border-box;
}
.left {
  /* min-width: 200px;
  height: calc(100vh - 0px);
  background: #5698c3; */
  height: 100%;
  /* background: linear-gradient(top,#45b787, #1a6840);  */

  /* background: #1ba784; */
}
.left :hover {
  /* background: #2f90b9; */
}
.hide .el-upload--picture-card {
  display: none;
}
.right {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
}
.send {
  margin-top: 20px;
  float: right;
}
.tableEl {
  padding: 10px;
}
.upload-demo1 {
  text-align: left;
}
.el-table .warning-row {
  background: whitesmoke;
}

.el-table .success-row {
  background:whitesmoke;
}
</style>