<template>
  <div class="content">
    <div class="header">
      <img src="../assets/img/image.png" alt="">
      <p>远通信德</p>
      </div>
    <div class="box">
      <div class="left">
        <router-link to="/price" tag="li">图片管理</router-link>
        <router-link to="/content" tag="li">内容管理</router-link>
        <router-link to="/honor" tag="li">客户垂询数据</router-link>
        <!-- <router-link to="/fwb" tag="li">富文本</router-link> -->
      </div>
      <!-- <div class="nairong">
        <!-- <router-view></router-view> -->
      <!-- </div>  -->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
    }
  }
}
</script>
<style>
.left li{
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
  .header p{
    width: 78%;
    text-align: center;
  }
  .nairong {
    height: 100%;
    padding: 20px;
  }
  .box {
    display: flex;
  }
  .content {
    width: 100%;
    height: 100%;
  }
  .left {
    min-width: 200px;
    height:calc(100vh - 60px);
    background: #5698c3;
    /* height: 100%; */
    /* background: linear-gradient(top,#45b787, #1a6840);  */

    /* background: #1ba784; */
  }
  .left :hover {
    background: #2f90b9;
  }

</style>
