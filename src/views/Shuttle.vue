<template>
  <div>
    <div class="crud1">
      <h4 style="float:left;margin-left:10px">人像门禁级别</h4>
      <avue-crud
        :data="data1"
        :option="option1"
        @row-click="handleRowClick"
        @search-change="searchChange"
      >
      </avue-crud>
    </div>
    <div class="crud2">
      <h4 style="float:left;margin-left:10px">设备列表</h4>
      <br />
      <span style="float:left;margin-left:10px">门禁级别名称：</span>
      <avue-crud :data="data2" :option="option2">
        <template slot="menuRight">
          <el-button type="primary" size="small">绑定设备</el-button>
        </template>
        <template slot="menuRight">
          <el-button size="small">解绑设备</el-button>
        </template>
      </avue-crud>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: [
        {
          Name: "张三",
          Id: "15974586",
          Type: "1",
          Remark: "测试数据",
        },
        {
          Name: "李四",
          Id: "78943156",
          Type: "1",
          Remark: "测试数据",
        },
      ],
      data2: [
        {
          faceId: "761298",
          faceName: "人脸一",
          IP: "1",
          address: "测试数据",
        },
        {
          faceId: "235615",
          faceName: "一天",
          IP: "101",
          address: "测试数据",
        },
      ],
      option1: {
        page: false,
        addBtn: false,
        align: "center",
        menuAlign: "center",
        searchMenuSpan: 10,
        searchBtnText: "查询",
        emptyBtnText: "重置",
        columnBtn: false,
        refreshBtn: false,
        menu: false,
        column: [
          {
            label: "门禁级别ID",
            prop: "Id",
          },
          {
            label: "级别名称",
            prop: "Name",
            search: true,
          },
          {
            label: "门禁级别类型",
            prop: "Type",
          },
          {
            label: "备注",
            prop: "Remark",
          },
        ],
      },
      option2: {
        page: false,
        addBtn: false,
        align: "center",
        menuAlign: "center",
        columnBtn: false,
        refreshBtn: false,
        searchBtn: false,
        // menu:false,
        column: [
          {
            label: "人像设备编号",
            prop: "faceId",
          },
          {
            label: "人像设备名称",
            prop: "faceName",
          },
          {
            label: "IP地址",
            prop: "IP",
          },
          {
            label: "安装地址",
            prop: "address",
          },
        ],
      },
    };
  },
  methods: {
    // handleRowClick(row, event, column) {
    handleRowClick(row) {
      this.$notify({
        showClose: true,
        message: "单击" + JSON.stringify(row),
        type: "success",
      });
    },
    searchChange(params, done) {
      done();
      this.$message.success(JSON.stringify(params));
    },
  },
};
</script>
<style lang="scss" scoped>
.crud1 {
  float: left;
  margin: 10px 10px;
  width: 45%;
  /deep/.avue-crud__search {
    float: left;
    margin-top: 20px;
    width: 100%;
    .el-icon-search:before,
    .el-icon-delete:before {
      content: "";
    }
  }
  /deep/.el-button--small.is-circle {
    display: none;
  }
  /deep/.avue-crud__menu {
    min-height: 0;
  }
  /deep/.el-table thead {
      height: 40px;
  }
//   /deep/.el-table tr {
//       height: 49px;
//   }
}
.crud2 {
  float: left;
  margin: 18px 10px;
  width: 40%;
  /deep/.el-icon-edit:before,
  /deep/.el-icon-delete:before {
    content: "";
  }
  /deep/.el-icon-delete:before {
    content: "|";
  }
}
</style>
