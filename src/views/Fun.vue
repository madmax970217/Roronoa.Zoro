<template>
  <div>
    <el-tree
      ref="expandMenuList"
      class="expand-tree"
      :data="setTree"
      highlight-current
      :props="defaultProps"
      :expand-on-click-node="true"
      :render-content="renderContent"
      @node-click="handleNodeClick"
    >
    </el-tree>
  </div>
</template>
<script>
import { list, setTree } from "@/js/fun.js";
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label",
      },
      setTree,
      list,
      datas: [
        // {
        //   id: 13,
        //   parentId: 0,
        //   order: 1,
        //   name: "truck",
        // },
        // {
        //   id: 16,
        //   pluginId: null,
        //   parentId: 0,
        //   order: 1,
        //   name: "sca",
        // },
        // {
        //   id: 17,
        //   pluginId: 6,
        //   parentId: 16,
        //   order: 1,
        //   name: "abcf",
        // },
      ],
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    // getDataList() {
    //   this.loading = true; //element loading加载
    //   list({}).then((res) => {
    //     this.loading = false;
    //     if (res.status) {
    //       this.setTree = res.data;
    //     } else {
    //       this.$alert(res.message, "错误", {
    //         confirmButtonText: "确定",
    //       });
    //     }
    //   });
    // },
    getListData() {
      let dataArray = [];
      this.datas.forEach(function(data) {
        if (data.enabled == true) {
          let parentId = data.parentId;
          if (parentId == 0) {
            let objTemp = {
              id: data.id,
              name: data.name,
              order: data.order,
              parentId: parentId,
            };
            dataArray.push(objTemp);
          }
        }
      });
      this.data2treeDG(this.datas, dataArray);
    },
    data2treeDG(datas, dataArray) {
      for (let j = 0; j < dataArray.length; j++) {
        let dataArrayIndex = dataArray[j];
        let childrenArray = [];
        let Id = dataArrayIndex.id;
        for (let i = 0; i < datas.length; i++) {
          let data = datas[i];
          if (data.enabled == true) {
            let parentId = data.parentId;
            if (parentId == Id) {
              //判断是否为儿子节点
              let objTemp = {
                id: data.id,
                name: data.name,
                order: data.order,
                parentId: parentId,
              };
              childrenArray.push(objTemp);
            }
          }
        }
        dataArrayIndex.children = childrenArray;
        if (childrenArray.length > 0) {
          //有儿子节点则递归
          this.data2treeDG(datas, childrenArray);
        }
      }
      this.setTree = dataArray;
      return dataArray;
    },
    showOrEdit(data) {
      // debugger;
      if (this.isEdit) {
        return (
          <input
            type="text"
            style="width:80px"
            value={data.Name}
            on-blur={(ev) => this.edit_sure(ev, data)}
          />
        );
      } else {
        return <span>{data.Name}</span>;
      }
    },
    // renderContent(h, { node, data, store }) {
    renderContent(h, { node, data }) {
      if (data.enabled == true && data.parentId == 0) {
        return (
          <span>
            <span>{this.showOrEdit(data)}</span>
            <span style="margin-left: 15px;">
              <i
                class="el-icon-plus"
                on-click={() => this.NodeAdd(node, data)}
              ></i>
            </span>
          </span>
        );
      } else if (data.enabled == true && data.parentId != 0) {
        return (
          <span>
            <span>{this.showOrEdit(data)}</span>
          </span>
        );
      } else {
        return (
          <span>
            <span style="color: red;">{this.showOrEdit(data)}</span>
          </span>
        );
      }
    },
  },
  mounted: function() {
    this.getListData();
    console.log(this.setTree);
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/fun.scss";
</style>
