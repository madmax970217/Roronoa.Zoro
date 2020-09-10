<template>
  <avue-tree
    :data="data"
    @node-click="nodeClick"
    @update="update"
    @save="save"
    @del="del"
    v-model="form"
  >
    <!-- <template slot-scope="scope" slot="menuBtn">
      <el-dropdown-item @click.native="tip(scope.node, scope.data)">自定义按钮123456789</el-dropdown-item>
    </template> -->
  </avue-tree>
</template>
<script>
export default {
    data () {
      return {
          form:{},
          data:[
            {
              id:0,
              label:'一级部门',
              value:0,
              children:[
                {
                  id:1,
                  label:'一级部门1',
                  value:0,
                },{
                  id:2,
                  label:'一级部门2',
                  value:0,
                }
              ]
            },{
              id:3,
              label:'二级部门',
              value:0,
              children:[
                {
                  id:4,
                  label:'二级部门1',
                  value:0,
                },{
                  id:5,
                  label:'二级部门2',
                  value:0,
                }
              ]
            }
          ],
      }
  },
  methods:{
    tip(node,data){
        this.$message.success(JSON.stringify(data))
    },
    del(data,node,done){
      this.$message.success('删除回调')
      done();
    },
    update(data,node,done){
      this.$message.success('更新回调')
      done();
    },
    save(data,node,done){
      this.$message.success('新增回调')
      this.form.id = new Date().getTime();
      this.form.value=new Date().getTime();
      this.form.children=[];
      done();
    },
    nodeClick(data){
      this.$message.success(JSON.stringify(data))
    }
  }
}
</script>
<style lang="css" scoped>
  .el-input-group__append{
    display: none;
  }
</style>