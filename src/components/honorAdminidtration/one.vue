<template>
  <div class="hello">
    <div>
      <el-form
        :model="ruleForm"
        ref="ruleFrom"
        :rules="rules"
        label-width="100px"
        class="demo-ruleFrom"
        :label-position="labelPosition"
      >
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="简称:" prop="jc">
              <el-input style="width:300px" v-model="ruleForm.jc"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="全称:" prop="qc">
              <el-input style="width:300px" v-model="ruleForm.qc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="显示顺序:">
              <el-input style="width:300px" v-model="ruleForm.sx"></el-input>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="12">
            <el-form-item label="文章类型:" prop="value">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col> -->
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="首页显示的主图:" label-width="120px">
              <el-upload
              :class="{hide:hideUpload}"
        :action="actions"
        list-type="picture-card"
        accept="image/*"
        :limit="imgLimit"
        :file-list="productImgs"
        :multiple="isMultiple"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :on-exceed="handleExceed"
        :on-error="imgUploadError">
        <i class="el-icon-plus"></i>
      </el-upload> 
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
                <!-- <el-button size="small" type="primary">点击上传</el-button> -->
                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="展示主图:" label-width="120px">
              <el-upload
              :class="{hide1:hideUpload1}"
        :action="actions"
        list-type="picture-card"
        accept="image/*"
        :limit="imgLimit"
        :file-list="productImgs"
        :multiple="isMultiple"
        :on-preview="handlePictureCardPreview1"
        :on-remove="handleRemove1"
        :on-success="handleAvatarSuccess1"
        :before-upload="beforeAvatarUpload1"
        :on-exceed="handleExceed1"
        :on-error="imgUploadError1">
        <i class="el-icon-plus"></i>
      </el-upload> 
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
                <!-- <el-button size="small" type="primary">点击上传</el-button> -->
                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="图标:" label-width="120px">
             <el-upload
             :class="{hide2:hideUpload2}"
        :action="actions"
        list-type="picture-card"
        accept="image/*"
        :limit="imgLimit"
        :file-list="productImgs"
        :multiple="isMultiple"
        :on-preview="handlePictureCardPreview2"
        :on-remove="handleRemove2"
        :on-success="handleAvatarSuccess2"
        :before-upload="beforeAvatarUpload2"
        :on-exceed="handleExceed2"
        :on-error="imgUploadError2">
        <i class="el-icon-plus"></i>
      </el-upload> 
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
                <!-- <el-button size="small" type="primary">点击上传</el-button>ss -->
                <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="简述" >
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="ruleForm.js"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- <button @click="showData" class="" v-html="msg">获取内容</button> -->
    <!-- 你不需要担心一个页面中过多vue-ueditor-wrap组件会导致混乱,或者重复引用JS(打开控制台瞄一眼),每个组件都保证拥有一个独立的UEditor实例,你可以尝试把数字改成99(根据自己电脑自行斟酌),但依然稳定可用 -->
    <vue-ueditor-wrap
      ref="ueditor"
      v-model="msg"
      :destroy="false"
      :config="config"
      @ready="ready"
      @beforeInit="addCustomUI"
    ></vue-ueditor-wrap>
    <el-button type="primary" @click="showData">保存内容</el-button>
  </div>
</template>

<script>
// 1、引入VueUeditorWrap组件
import axios from "axios";
import VueUeditorWrap from "vue-ueditor-wrap"; // ES6 Module
// const VueUeditorWrap = require('vue-ueditor-wrap') // CommonJS
export default {
  name: "HelloWorld",
  // 2、注册组件
  components: {
    VueUeditorWrap
  },
  created(){
console.log(this.categoryId)
  },
  props:['categoryId'],
  data() {
    return {
      hideUpload: false,
      hideUpload1: false,
      hideUpload2: false,
      limitCount:1,
      parmas:{
      realName: [],
      uploadName: [],
      url: [],
      businessId:'',
      categoryId:0
      },
      url:'',
      actions: '/plat/upload/uploadFile',
        dialogImageUrl: '',
        dialogVisible: false,
        productImgs: [],
        isMultiple: true,
        imgLimit: 1,
        rules:{
          jc: [
            { required: true, message: '请输入', trigger: 'blur' },
          ],
          qc: [
            { required: true, message: '请输入', trigger: 'blur' },
          ],
          value: [
            { required: true, message: '请输入', trigger: 'blur' },
          ],
          js: [
            { required: true, message: '请输入', trigger: 'blur' },
          ],
        },

      ruleForm: {
        jc: "",
        qc: "",
        sx: "",
        js:''
      },
  
      textarea: "",
      labelPosition: "left",
      // 3、v-model绑定数据
      msg: "",
      // 4、根据项目需求自行配置,具体配置参见ueditor.config.js源码或 http://fex.baidu.com/ueditor/#start-start
      config: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "http://192.144.192.2:6002/ueditor/config"
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        // UEDITOR_HOME_URL: '/static/UEditor/'
        // 配合最新编译的资源文件，你可以实现添加自定义Request Headers,详情https://github.com/HaoChuan9421/ueditor/commits/dev-1.4.3.3
        // headers: {
        //   access_token: '37e7c9e3fda54cca94b8c88a4b5ddbf3'
        // }
      }
    };
  },
  mounted() {
    console.log(this.msg);
    // console.log('%c注意：本Demo提供的serverUrl是为了方便小伙伴们体验图片文件等上传功能。\n请勿在生产环境使用此serverUrl！！！', 'background:#f33;color:#fff')
  },
  methods: {
    handleRemove(file, fileList) {//移除图片
      this.hideUpload = fileList.length >= this.limitCount;
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {//预览图片时调用
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
 
      beforeAvatarUpload(file) {//文件上传之前调用做一些拦截限制
        console.log(file);
        const isJPG = true;
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
 
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(res, file,fileList) {//图片上传成功
      this.hideUpload = fileList.length >= this.limitCount;
        (this.parmas.realName.push(res.fileOldName) ),
        
        (this.parmas.uploadName.push(res.fileUploadName)),
        
        (this.parmas.url.push(res.uploadUrl)),
        // console.log(res);
        // console.log(file.raw);  
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleExceed(files, fileList) {//图片上传超过数量限制
        this.$message.error('上传图片不能超过1张!');
        console.log(file, fileList);
      },
      imgUploadError(err, file, fileList){//图片上传失败调用
      this.hideUpload = fileList.length >= this.limitCount;
        console.log(err)
        this.$message.error('上传图片失败!');
      },



          handleRemove1(file, fileList) {//移除图片
      this.hideUpload1 = fileList.length >= this.limitCount;
        console.log(file, fileList);
      },
      handlePictureCardPreview1(file) {//预览图片时调用
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
 
      beforeAvatarUpload1(file) {//文件上传之前调用做一些拦截限制
        console.log(file);
        const isJPG = true;
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
 
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess1(res, file,fileList) {//图片上传成功
      this.hideUpload1 = fileList.length >= this.limitCount;
        (this.parmas.realName.push(res.fileOldName) ),
        
        (this.parmas.uploadName.push(res.fileUploadName)),
        
        (this.parmas.url.push(res.uploadUrl)),
        // console.log(res);
        // console.log(file.raw);  
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleExceed1(files, fileList) {//图片上传超过数量限制
        this.$message.error('上传图片不能超过1张!');
        console.log(file, fileList);
      },
      imgUploadError1(err, file, fileList){//图片上传失败调用
      this.hideUpload1 = fileList.length >= this.limitCount;
        console.log(err)
        this.$message.error('上传图片失败!');
      },
    
    

        handleRemove2(file, fileList) {//移除图片
      this.hideUpload2 = fileList.length >= this.limitCount;
        console.log(file, fileList);
      },
      handlePictureCardPreview2(file) {//预览图片时调用
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
 
      beforeAvatarUpload2(file) {//文件上传之前调用做一些拦截限制
        console.log(file);
        const isJPG = true;
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
 
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess2(res, file,fileList) {//图片上传成功
      this.hideUpload2 = fileList.length >= this.limitCount;
        (this.parmas.realName.push(res.fileOldName) ),
        
        (this.parmas.uploadName.push(res.fileUploadName)),
        
        (this.parmas.url.push(res.uploadUrl)),
        // console.log(res);
        // console.log(file.raw);  
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleExceed2(files, fileList) {//图片上传超过数量限制
        this.$message.error('上传图片不能超过1张!');
        console.log(file, fileList);
      },
      imgUploadError2(err, file, fileList){//图片上传失败调用
      this.hideUpload2 = fileList.length >= this.limitCount;
        console.log(err)
        this.$message.error('上传图片失败!');
      },


    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 5、 你可以在ready方法中拿到editorInstance实例,所有API和官方的实例是一样了。http://fex.baidu.com/ueditor/#api-common
    ready(editorInstance) {
      console.log(`实例${editorInstance.key}已经初始化:`, editorInstance);
    },
    // 6. 查看绑定的数据
    showData() {
      axios
        .post("/plat/web/addArticle", {
            content: this.msg,
            categoryId: this.value,
            abbreviation:this.ruleForm.jc,
            articleTitle:this.ruleForm.qc,
            sketch:this.ruleForm.js,
            categoryId:this.categoryId,
            // realName: this.fileOldName,
            // uploadName: this.fileUploadName,
            // url: this.uploadUrl
        })
        .then(res => {
          console.log(res);
          this.parmas.businessId = res.data
          console.log(this.parmas.businessId)
        });
      // alert(this.msg);
      console.log(this.msg);
      this.$emit('par',this.parmas)
    },
    // 7. 借助 beforeInit 钩子，你可以实现对 UEditor 的二次开发，会在 scripts 加载完毕之后、编辑器初始化之前触发，以 编辑器 id 和 配置参数 作为入参
    addCustomUI(editorId, editorConfig) {
      console.log(
        editorId + "的配置参数是:",
        JSON.stringify(editorConfig, null, 2)
      );

      // 1. 自定义按钮
      window.UE.registerUI(
        "test-button" + editorId,
        function(editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function() {
              editor.execCommand(
                "inserthtml",
                `<span style="color: #${editorId.substr(
                  -3
                )};">这是一段由自定义按钮添加的文字，你点击的编辑器ID是${editorId}</span>`
              );
            }
          });

          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: "鼠标悬停时的提示文字",
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules:
              "background-image: url('./static/test-button.png') !important;background-size: cover;",
            // 点击时执行的命令
            onclick: function() {
              // 这里可以不用执行命令，做你自己的操作也可
              editor.execCommand(uiName);
            }
          });

          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener("selectionchange", function() {
            var state = editor.queryCommandState(uiName);
            if (state === -1) {
              btn.setDisabled(true);
              btn.setChecked(false);
            } else {
              btn.setDisabled(false);
              btn.setChecked(state);
            }
          });

          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        },
        0 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */,
        editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      );

      // 2. 自定义表格居中按钮
      window.UE.registerUI(
        "table-center-button" + editorId,
        function(editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function() {
              var tables = editor.document.querySelectorAll("table");
              if (tables.length) {
                tables.forEach(table => {
                  table.style.margin = "0 auto";
                });
              } else {
                editor.trigger("showmessage", {
                  content: "没有表格",
                  timeout: 2000
                });
              }
            }
          });

          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: "点击设置表格居中",
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules:
              "background-image: url('./static/center.png') !important;background-size: cover;",
            // 点击时执行的命令
            onclick: function() {
              // 这里可以不用执行命令，做你自己的操作也可
              editor.execCommand(uiName);
            }
          });

          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener("selectionchange", function() {
            var state = editor.queryCommandState(uiName);
            if (state === -1) {
              btn.setDisabled(true);
              btn.setChecked(false);
            } else {
              btn.setDisabled(false);
              btn.setChecked(state);
            }
          });

          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        },
        1 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */,
        editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      );

      // 3. 自定义弹窗
      window.UE.registerUI(
        "test-dialog" + editorId,
        function(editor, uiName) {
          // 创建 dialog
          var dialog = new window.UE.ui.Dialog({
            // 指定弹出层中页面的路径，这里只能支持页面，路径参考常见问题 2
            iframeUrl: "/static/customizeDialogPage.html",
            // 需要指定当前的编辑器实例
            editor: editor,
            // 指定 dialog 的名字
            name: uiName,
            // dialog 的标题
            title: "这是一个自定义的 Dialog 浮层",
            // 指定 dialog 的外围样式
            cssRules: "width:600px;height:300px;",
            // 如果给出了 buttons 就代表 dialog 有确定和取消
            buttons: [
              {
                className: "edui-okbutton",
                label: "确定",
                onclick: function() {
                  dialog.close(true);
                }
              },
              {
                className: "edui-cancelbutton",
                label: "取消",
                onclick: function() {
                  dialog.close(false);
                }
              }
            ]
          });

          // 参考上面的自定义按钮
          var btn = new window.UE.ui.Button({
            name: "dialog-button",
            title: "鼠标悬停时的提示文字",
            cssRules: `background-image: url('./static/test-dialog.png') !important;background-size: cover;`,
            onclick: function() {
              // 渲染dialog
              dialog.render();
              dialog.open();
            }
          });

          return btn;
        },
        2 /* 指定添加到工具栏上的那个位置，默认时追加到最后 */,
        editorId /* 指定这个UI是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      );
    }
  }
};
</script>

<style>
.preview {
  min-height: 150px;
}
.hide .el-upload--picture-card {
  display: none;
}
.hide1 .el-upload--picture-card {
  display: none;
}
.hide2 .el-upload--picture-card {
  display: none;
}

</style>
