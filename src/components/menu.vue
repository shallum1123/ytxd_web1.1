<template>
  <div class="content">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="collapsed"
      background-color="#475164"
      text-color="white"
    >
      <div class="el-icon-s-fold" @click="toggle(collapsed)" style="font-size:25px"></div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <router-link to="/price" tag="span">图片管理</router-link>
        </template>
        <el-menu-item-group>
                <span slot="title">二级菜单</span>
                <el-menu-item index="1-1">
                <router-link to="/price" tag="span">图片管理</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <router-link to="/Cooperativpartner" tag="span">合作伙伴</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                    <router-link to="/CorporateQualifications" tag="span">公司资质</router-link>                    
                </el-menu-item>
                <el-menu-item index="1-4">
                    <router-link to="/intellectualpropertyright" tag="span">知识产权</router-link>                    
                </el-menu-item>
              </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">内容管理</span>
          <!-- <router-link to="/content" tag="span">内容管理</router-link> -->
        </template>
        <el-menu-item-group>
          <span slot="title">二级菜单</span>
          <el-menu-item index="2-1">
            <router-link to="/solution" tag="span">解决方案</router-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <router-link to="/successfulcases" tag="span">成功案例</router-link>
          </el-menu-item>
          <el-menu-item index="2-3">
            <router-link to="/product" tag="span">产品</router-link>
          </el-menu-item>
          <el-submenu index="2-4">
            <span slot="title">技术中心</span>
            <el-menu-item index="2-4-1">
              <router-link to="/projectimplementation" tag="span">项目实施</router-link>
            </el-menu-item>
            <el-menu-item index="2-4-2">
              <router-link to="/technology" tag="span">技术</router-link>
            </el-menu-item>
            <el-menu-item index="2-4-3">
              <router-link to="/usertechnology" tag="span">服务能力-人员技术服务</router-link>
            </el-menu-item>
            <el-menu-item index="2-4-4">
              <router-link to="/optionsevers" tag="span">服务能力-人员技术服务</router-link>
            </el-menu-item>
            <el-menu-item index="2-4-5">
              <router-link to="/consultingservice" tag="span">服务能力-咨询服务</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2-5">
            <span slot="title">关于我们</span>
            <el-menu-item index="2-5-1">
              <router-link to="/companyprofile" tag="span">公司简介</router-link>
            </el-menu-item>
            <el-menu-item index="2-5-2">
              <router-link to="/corporateculture" tag="span">企业文化</router-link>
            </el-menu-item>
            <el-menu-item index="2-5-3">
              <router-link to="/companynews" tag="span">公司新闻</router-link>
            </el-menu-item>
            <el-menu-item index="2-5-4">
              <router-link to="/industrydynamics" tag="span">行业动态</router-link>
            </el-menu-item>
            <el-menu-item index="2-5-5">
              <router-link to="/majorcompany" tag="span">公司重大事项</router-link>
            </el-menu-item>
            <el-menu-item index="2-5-6">
              <router-link to="/joinus" tag="span">加入我们</router-link>
            </el-menu-item>
            <el-menu-item index="2-5-7">
              <router-link to="/talentdevelopment" tag="span">人才发展</router-link>
            </el-menu-item>
            <el-menu-item index="2-5-8">
              <router-link to="/employeecare" tag="span">员工关怀</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="2">
      </el-menu-item>-->
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <!-- <span slot="title">导航三</span> -->
        <router-link to="/honor" tag="span">客户垂询数据</router-link>
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
            collapsed: false,
        }
    },
    methods:{
        toggle(showtype) {
      this.collapsed = !showtype;
      // this.$root.Bus.$emit('toggle', this.collapsed)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    }
}
</script>
<style>
    .content {
  width: 100%;
  height: 100%;
}
</style>