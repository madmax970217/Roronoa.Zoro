<template>
<div>
  <avue-form ref="form" :option="option" v-model="obj" @submit="handleSubmit"></avue-form>
          <div>
            输入名称：<input type="text" id="chinaName"  onblur="ConvertName()" />  <br/>
            全写拼音：<input type="text" id="fullName" /> <br/>
            简写拼音：<input type="text" id="easyName" /> <br/>
        </div>
    <!-- <form>
      输入内容： <input type="text" onkeyup="pym.innerHTML = Pinyin.GetJP(this.value);allpym.innerHTML=Pinyin.GetQP(this.value);staffpym.innerHTML=Pinyin.GetHP(this.value);" /> <br /><br />
      拼 音 码： <span id="pym"></span><br /><br />
      拼音全码： <span id="allpym"></span><br /><br />
      混 拼 码： <span id="staffpym"></span>
    </form> -->
</div>
</template>
<script src="jquery.min.js"></script>
<script>
import { option } from "@/const/info";
import $ from  'jquery'
export default {
  name:"info",
  data() {
    return {
      obj: {
      },
      option:option,
    };
  },
  mounted() {
    // window.topy = this.topy;
  },
  methods: {
    handleSubmit() {
      this.$message.success(JSON.stringify(this.form));
    },
    // ConvertName(){
      Convert_Pinyin(){
      var chinaName = $('#chinaName').val();
      console.log($('#chinaName'))
      //获取全写拼音（调用js中方法）
      var fullName = pinyin.getFullChars(chinaName);
      console.log(fullName)
      //获取简写拼音（调用js中方法）
      var easyName = pinyin.getCamelChars(chinaName);
      //给两个文本框赋值
      $('#fullName').val(fullName);
      $('#easyName').val(easyName);
      },
  },
    // topy() {
    //   var name = $('name').val();
    //   //获取全写拼音（调用js中方法）
    //   var pinyin = pinyin.getFullChars(name);
    //   //给两个文本框赋值
    //   $('pinyin').val(pinyin);
    // }
};
</script>
