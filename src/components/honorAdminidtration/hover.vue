<template>
  <div>
     <!-- <el-button class="buttonimg"> -->
     
       
      <!-- <img class="showimg" :cla="collapsed?imgsq:imgshow" @click="toggle(collapsed)"> -->
    <!-- </el-button> -->
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <!-- <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button> -->
<!-- </el-radio-group> -->

<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapsed">
   <div class="el-icon-s-fold" @click="toggle(collapsed)"></div>
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <!-- <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item> -->
</el-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        collapsed: true
      };
    },
    methods: {
      toggle(showtype) {
      this.collapsed = !showtype
      // this.$root.Bus.$emit('toggle', this.collapsed)
    },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.el-icon-s-fold {
  width: 100%;
 text-align: center;
  font-size: 20px;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>