<template>
  <div>
    <h3 style="color:#42b983">分割线</h3>
    <span>雨纷纷</span>
    <el-divider direction="vertical"></el-divider>
    <span>旧故里</span>
    <el-divider direction="vertical" content-position="right"></el-divider>
    <span>草木深</span>
    <br />
    <br />

    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪。</span>
    <!-- <el-divider></el-divider> -->
    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉。</span>
    <el-divider></el-divider>

    <div class="qrcode">
      <el-button class="qrbutton" @click="Show">二维码</el-button>
      <div class="qr" v-qr="options" v-if="options" v-show="show" />
    </div>

    <el-popconfirm title="这是一段内容确定删除吗？">
      <el-button slot="reference">气泡</el-button>
    </el-popconfirm>

    <div class="box">
      <div class="top">
        <el-tooltip
          class="item"
          effect="dark"
          content="Top Left 提示文字"
          placement="top-start"
        >
          <el-button>上左</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Top Center 提示文字"
          placement="top"
        >
          <el-button>上边</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Top Right 提示文字"
          placement="top-end"
        >
          <el-button>上右</el-button>
        </el-tooltip>
      </div>
      <div class="left">
        <el-tooltip
          class="item"
          effect="dark"
          content="Left Top 提示文字"
          placement="left-start"
        >
          <el-button>左上</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Left Center 提示文字"
          placement="left"
        >
          <el-button>左边</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Left Bottom 提示文字"
          placement="left-end"
        >
          <el-button>左下</el-button>
        </el-tooltip>
      </div>
      <div class="right">
        <el-tooltip
          class="item"
          effect="dark"
          content="Right Top 提示文字"
          placement="right-start"
        >
          <el-button>右上</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Right Center 提示文字"
          placement="right"
        >
          <el-button>右边</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Right Bottom 提示文字"
          placement="right-end"
        >
          <el-button>右下</el-button>
        </el-tooltip>
      </div>
      <div class="bottom">
        <el-tooltip
          class="item"
          effect="dark"
          content="Bottom Left 提示文字"
          placement="bottom-start"
        >
          <el-button>下左</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Bottom Center 提示文字"
          placement="bottom"
        >
          <el-button>下边</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Bottom Right 提示文字"
          placement="bottom-end"
        >
          <el-button>下右</el-button>
        </el-tooltip>
        <br />
        <br />
        <el-tooltip content="Top center" placement="left">
          <el-button>Dark</el-button>
        </el-tooltip>
        <el-tooltip content="Bottom center" placement="right" effect="light">
          <el-button>Light</el-button>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      options: {
        // text:'12345678910',
        text: "我是内容",
        // render: "canvas",
        render: "table",
        width: 256,
        height: 256,
        typeNumber: -1,
        correctLevel: 2,
        background: "#ffffff",
        foreground: "#000000",
      },
    };
  },
  methods: {
    Show() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/fun.scss";
</style>
