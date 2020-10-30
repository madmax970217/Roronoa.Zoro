<template>
  <!-- 预约界面 -->
  <div class="basic">
    <div class="subForm">
      <!-- 图像信息 -->
      <div class="photo">
        <span class="title">图像信息</span>
        <el-divider></el-divider>
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          :limit="1"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过1个
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
      <!-- 表单 -->
      <avue-form
        ref="form"
        v-model="obj0"
        :option="subOption"
        @change="Changeinfo"
        @reset-change="resetchange"
      >
        <template slot="startTime">
          <div class="block">
            <el-date-picker
              v-model="startTime"
              type="datetime"
              placeholder="请输入 来访时间"
              format="yyyy-MM-dd HH:mm:ss "
              value-format="timestamp"
              :picker-options="pickerOptionsStart"
            >
            </el-date-picker>
          </div>
        </template>
        <template slot="endTime">
          <div class="block">
            <el-date-picker
              v-model="endTime"
              type="datetime"
              placeholder="请输入 来访时间"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="timestamp"
              :picker-options="pickerOptionsEnd"
            >
            </el-date-picker>
          </div>
        </template>
      </avue-form>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import { subOption } from "@/js/subscribe.js";
import vPinyin from "@/js/vue-py.js";
export default {
  name: "subcsribe",
  data() {
    return {
      uuid,
      // 获取头像
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,

      obj0: {},
      subOption,
      imageUrl: "",
      pickerOptionsStart: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        },
      },
      pickerOptionsEnd: {
        disabledDate: (time) => {
          if (this.startTime) {
            return time.getTime() < this.startTime;
          }
        },
      },
      // visitedTime: Date.now(),
      startTime: "",
      endTime: "",
    };
  },
  mounted() {
    window.getCode = this.getCode;
    window.inputPY = this.inputPY;
  },
  created() {
    this.uuid = uuid.v1();
  },
  methods: {
    inputPY() {
      // let pinYin = this.form.pinyin;
      let hubName = this.obj0.name;
      this.obj0.pinyin = vPinyin.chineseToPinYin(hubName);
      // this.addTrafficHub.pinYin = vPinyin.chineseToPinYin(this.addTrafficHub.hubName);
    },
    resetchange() {
      this.$refs.form.resetForm();
      this.endTime = null;
      this.startTime = "";
    },
    handleSubmit() {
      this.$refs.form.validate((vaild) => {
        if (vaild) {
          this.$message.success(JSON.stringify(this.obj0));
        }
      });
    },
    Changeinfo() {
      this.$refs.form.clearValidate();
    },
    // 获取头像
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    getCode() {
      this.uuid = this.$uuid.v1().replace(/-/g, "");
      this.obj0.orderId = this.uuid;
      console.log(this.uuid);
    },
  },
  watch: {
    endTime: function(val) {
      this.obj0.endTime = val;
    },
    startTime: function(val) {
      this.obj0.startTime = val;
    },
    "obj0.name": {
      handler(val) {
        console.log(val);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/subscribe.scss";
</style>
