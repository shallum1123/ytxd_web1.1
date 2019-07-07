<template>
  <div class="components-container">
    <div >
      <el-form ref="form" :model="form" :inline="true">
        <el-form-item label="简称:" label-width="100px">
          <el-input v-model="form.name" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="全称:" label-width="100px">
          <el-input v-model="form.name" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="首页显示的主图（如果不放到首页，可不上传）:" label-width="365px">
          <el-upload
            class="upload-demo"
            action="/plat/upload/uploadFile"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </el-form-item>
        <el-form-item label="首页显示的主图（如果不放到首页，可不上传）:" label-width="450px">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </el-form-item>
        <el-form-item label="图标（展示在首页的图标，如果不放在首页，可不上传）:" >
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
          </el-upload>
        </el-form-item>
        <el-form-item label="显示顺序（只能填数字）:">
          <el-input v-model="form.name" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="简述:" label-width="100px">
          <el-input type="textarea" v-model="form.name" style="width:930px"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style>
.info {
  border-radius: 10px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
</style>
<script>
import axios from "@/components/honorAdminidtration/honoe";
export default {
  components: { UE },
  data() {
    return {
      ff:{},
      form: {
        name: "",
        
      },
      defaultMsg:
        '<span style="orphans: 2; widows: 2; font-size: 22px; font-family: KaiTi_GB2312; background-color: rgb(229, 51, 51);"><strong>大荣哥，好帅的</strong></span>',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      ue1: "ue1", // 不同编辑器必须不同的id
      ue2: "ue2"
    };
  },

  methods: {
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
    getUEContent() {
      let content = this.$refs.ue.getUEContent(); // 调用子组件方法
      this.$notify({
        title: "获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
      this.ff=content,
      console.log(content);
      axios.add({
        zhi:this.ff, 
        // realName: this.fileOldName,
        // uploadName: this.fileUploadName,
        // url: this.uploadUrl
      }).then((res) => {
      console.log()
    })
    },
    
    getUEContentTxt() {
      let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
      this.$notify({
        title: "获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
      console.log(content);
    }
  }
};
</script>



