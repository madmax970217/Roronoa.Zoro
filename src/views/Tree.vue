<template>
    <div class="block">
        <p>使用 scoped slot</p>
        <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
        </el-input>
        <el-tree
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        node-key="id"
        default-expand-all
        :filter-node-method="filterNode"
        :expand-on-click-node="false"
        ref="tree"
        >

        <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <el-dropdown>
            <span class="el-dropdown-link">
                <i class="el-icon-more el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><el-button type="text" size="mini"  @click="() => append(data)">添加子部门</el-button></el-dropdown-item>
                <el-dropdown-item><el-button type="text" size="mini"  @click="() => remove(node, data)">删除部门</el-button></el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </span>
        </el-tree>

        <p style="color:#409eff">表格树</p>
        <avue-crud :option="option" :data="data1" >
        <!-- <template slot="icon" slot-scope="scope">
            <i :class="scope.row.icon" style="font-size:24px"></i>
        </template>
        <template slot="menu" slot-scope="scope">
        <el-button :size="scope.size" :type="scope.type">自定义内容</el-button>
        </template> -->
        </avue-crud>
        <p style="color:green">表格</p>
        <avue-crud :data="data2" :option="option2" v-model="obj"></avue-crud>

        <el-button @click="randomCODE1">CODE1</el-button>
        <el-button @click="randomCODE2">CODE2</el-button>
        <el-button @click="randomCODE3">CODE3</el-button>
        <el-button @click="uuid1">UUID1</el-button>
        <el-button @click="uuid2">UUID2</el-button>
        <el-button @click="uuid3">UUID3</el-button>

    </div>
</template>
<script>
    let id = 1000;
    export default {
        watch: {
            filterText(val) {
            this.$refs.tree.filter(val);
        }
    },
        data() {
            return {
                filterText: '',
                obj:{},
        data : [{
            id: 1,
            label: '部门 1',
            children: [{
            id: 4,
            label: '部门 1-1',
            children: [{
                id: 9,
                label: '部门 1-1-1'
            }, {
                id: 10,
                label: '部门 1-1-2'
            }]
            }]
        }, {
            id: 2,
            label: '部门 2',
            children: [{
            id: 5,
            label: '部门 2-1'
            }, {
            id: 6,
            label: '部门 2-2'
            }]
        }, {
            id: 3,
            label: '部门 3',
            children: [{
            id: 7,
            label: '部门 3-1'
            }, {
            id: 8,
            label: '部门 3-2'
            }]
        }],
        data1: [
        {
          id: 0,
          event: '事件0',
          timeLine: 50,
          comment: '无'
        },
        {
          id: 1,
          event: '事件1',
          timeLine: 100,
          comment: '无',
          children: [
            {
              id: 2,
              event: '事件2',
              timeLine: 10,
              comment: '无'
            },
            // {
            //   id: 3,
            //   event: '事件3',
            //   timeLine: 90,
            //   comment: '无',
            //   children: [
            //     {
            //       id: 4,
            //       event: '事件4',
            //       timeLine: 5,
            //       comment: '无'
            //     },
            //     {
            //       id: 5,
            //       event: '事件5',
            //       timeLine: 10,
            //       comment: '无'
            //     },
            //     {
            //       id: 6,
            //       event: '事件6',
            //       timeLine: 75,
            //       comment: '无',
            //       children: [
            //         {
            //           id: 7,
            //           event: '事件7',
            //           timeLine: 50,
            //           comment: '无',
            //           children: [
            //             {
            //               id: 71,
            //               event: '事件71',
            //               timeLine: 25,
            //               comment: 'xx'
            //             },
            //             {
            //               id: 72,
            //               event: '事件72',
            //               timeLine: 5,
            //               comment: 'xx'
            //             },
            //             {
            //               id: 73,
            //               event: '事件73',
            //               timeLine: 20,
            //               comment: 'xx'
            //             }
            //           ]
            //         },
            //         {
            //           id: 8,
            //           event: '事件8',
            //           timeLine: 25,
            //           comment: '无'
            //         }
            //       ]
            //     }
            //   ]
            // }
          ]
        }
      ],
      data2: [
          {
            id:1,
            name:'张三',
            sex:'男',
            date:'1994-02-23 00:00:00'
          }, {
            id:2,
            name:'李四',
            sex:'女',
            date:'1994-02-23 00:00:00'
          }, {
            id:3,
            name:'王五',
            sex:'女',
            date:'1994-02-23 00:00:00'
          }, {
            id:4,
            name:'赵六',
            sex:'男',
            date:'1994-02-23 00:00:00'
          }
        ],
        option2:{
          title:'表格的标题',
          page:false,
          align:'center',
          menuAlign:'center',
            selection: true,
  selectClearBtn: true,
  selectionFixed: true,
          column:[
             {
              label:'姓名',
              prop:'name'
            },
            {
              label:'性别',
              prop:'sex'
            },{
              label: "日期",
              prop: "date",
              type: "date",
              format: "yyyy-MM-dd hh:mm:ss",
              valueFormat: "yyyy-MM-dd hh:mm:ss",
            }
          ]
        },
        option: {
        expandAll: false,
        expandLevel: 2,
        border: true,
        index: true,
        tree:true,
        column: [
          {
            label: '事件',
            prop: 'event',
            align: 'left',
            width: 200
          },
          {
            label: 'ID',
            prop: 'id',
            dicData: [{
              label: '零',
              value: 0
            }, {
              label: '一',
              value: 1
            }, {
              label: '二',
              value: 2,
            }]
          },
          {
            label: '时间线',
            prop: 'timeLine'
          },
          {
            label: '备注',
            prop: 'comment'
          }
        ],
      },
        defaultProps: {
            children: 'children',
            label: 'label'
        }
        // return {
        //     data: JSON.parse(JSON.stringify(data))
        // }
        }
        },

    methods: {
        // handleSelection(selection) {},

        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        append(data) {
            const newChild = { id: id++, label: 'testtest', children: [] };
            if (!data.children) {
            this.$set(data, 'children', []);
            }
            data.children.push(newChild);
        },
        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
        // 生成随机字母加数字 方法一
        randomCODE1 : function(){
            var code1 = "";
            // var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var possible = "ABDEFGHJKLMNQRTYabdefghijkmnqrty23456789";  //去掉难以辨别的Cc、I1、Oo0、Ss、Uu、Vv、Xx、Zz、Pp、Ww
            for( var i=0; i < 10; i++ )
                code1 += possible.charAt(Math.floor(Math.random() * possible.length));
            // return text;
            console.log(code1)
        },
        // 生成随机字母加数字 方法二
        randomCODE2(L){
            L = 10;     //长度
            var code2= '';
            var randomchar=function(){
            var n= Math.floor(Math.random()*62);
            if(n<10)
                return n; //1-10
            if(n<36)
                return String.fromCharCode(n+55); //A-Z
                return String.fromCharCode(n+61); //a-z
                // return String.fromCharCode(n+55)
        }
        while(code2.length< L)
            code2+= randomchar();
        // return s;
        console.log(code2)
        },
        // 生成随机字母加数字 方法三
        randomCODE3(len, charSet) {
            len = 10,
            // charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            charSet = charSet || 'ABDEFGHJKLMNQRTYabdefghijkmnqrty23456789'; //去掉难以辨别的Cc、I1、Oo0、Ss、Uu、Vv、Xx、Zz、Pp、Ww
            // charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var code3 = '';
            for (var i = 0; i < len; i++) {
                var randomPoz = Math.floor(Math.random() * charSet.length);
                code3 += charSet.substring(randomPoz,randomPoz+1);
            }
            // return randomString;
            console.log(code3)
        },
        // 随机生成UUID 方法一
        uuid1() {
            var s = [];
            var hexDigits = "0123456789abcdef";
            for(var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random()* 0x10),1);
            }
            s[14] = "4";
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8,1);
            s[8] = s[13] = s[18] = s[23] = "-";
            var uuid = s.join("");
            console.log(uuid)
        },
        // 随机生成UUID 方法二   不可
        uuid2() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                // console.log(v.toString(16));
                var s = v.toString(16);
                console.log(s)
        })
    },
    // 随机生成UUID 方法三   不可
    uuid3() {
        let uuid = null;
            uuid = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        console.log(uuid + uuid + "-" + uuid + "-" + uuid + "-" + uuid + "-" + uuid + uuid + uuid);
    }
}
    }
</script>

<style lang="scss" scoped>
@import "@/style/tree.scss";
</style>
