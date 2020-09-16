// 预约
import { rule } from "@/util/validate";

var DIC = {
  CER: [
    {
      label: "居民身份证",
      value: 1,
    },
    {
      label: "护照",
      value: 2,
    },
    {
      label: "港澳台通行证",
      value: 3,
    },
  ],
  SEX: [
    {
      label: " 未知",
      value: 0,
    },
    {
      label: " 男",
      value: 1,
    },
    {
      label: " 女",
      value: 2,
    },
  ],
  TEST: [
    {
      label: "测试数据1",
      value: 1,
    },
    {
      label: "测试数据2",
      value: 2,
    },
    {
      label: "测试数据3",
      value: 3,
    },
  ],
};

export const subOption = {
  emptyBtn: false,
  submitBtn: false,
  card: true,
  group: [
    {
      label: "访客信息",
      prop: "essential",
      arrow: false,
      column: [
        {
          label: "访客姓名",
          prop: "visitName",
          search: true,
          // blur:()=>{
          //     getCode()
          // },
          rules: [
            { required: true, message: "姓名不能为空", trigger: "blur" },
            { min: 2, max: 10, message: "长度在2到10个字符", trigger: "blur" },
            { validator: rule.validatorName, trigger: "blur" },
          ],
        },
        {
          label: "预约号",
          prop: "orderId",
          // readonly:'readonly',
          disabled: "disabled",
          placeholder: "自动生成",
          display:false
        },
        {
          label: "手机号码",
          prop: "visitPhone",
          rules: [
            { required: true, message: "手机号码不能为空", trigger: "blur" },
            { validator: rule.validatorPhoneNumber, trigger: "blur" },
          ],
        },
        {
          label: "证件类型",
          prop: "visitCertType",
          change: ({ value }) => {
            console.log(value);
          },
          type: "select",
          dicData: DIC.CER,
          mock: {
            type: "dic",
          },
          value: 1,
          rules: [
            { required: true, message: "证件类型不能为空", trigger: "blur" },
          ],
        },
        {
          label: "证件号码",
          prop: "visitCertNo",
          // blur:()=>{
          //     getbirthday()
          // },
          search: true,
          rules: [
            { required: true, message: "证件号码不能为空", trigger: "blur" },
            { validator: rule.validatorIdNumber, trigger: "blur" },
          ],
        },
        {
          label: "来访原因",
          prop: "visitReason",
        }
      ],
    },
    {
      label: "来访时间",
      prop: "visitingtime",
      arrow: false,
      column: [
        {
          label: "来访时间",
          prop: "startTime",
          type: "datetime",
          pickerOptions: {
            disabledDate(time) {
              return time.getTime() < Date.now();
            },
          },
          format: "yyyy-MM-dd  HH:mm",
          valueFormat: "yyyy-MM-dd  HH:mm",
          rules: [
            { required: true, message: "来访时间不能为空", trigger: "blur" },
          ],
        },
        {
          label: "结束时间",
          prop: "endTime",
          type: "datetime",
          pickerOptions: {
            disabledDate: (time) => {
              // let [disabledDate] = (time) =>  (return(返回值)
              // let {startTime} = this.prop;
              // return time.getTime() < startTime;
              // console.log(this);
              return time.getTime() < Date.now();
              // return time.getTime() < this.startTime;
            },
          },
          format: "yyyy-MM-dd  HH:mm",
          valueFormat: "yyyy-MM-dd  HH:mm",
          rules: [
            { required: true, message: "结束时间不能为空", trigger: "blur" },
          ],
        },
      ],
    },
    {
      label: "被访人信息",
      prop: "interviewee",
      arrow: false,
      column: [
        {
          label: "姓名",
          prop: "bevisitName",
          rules: [
            { required: true, message: "姓名不能为空", trigger: "blur" },
            { min: 2, max: 32, message: "长度在2到32个字符", trigger: "blur" },
            { validator: rule.validatorName, trigger: "blur" },
          ],
        },
        {
          label: "部门",
          prop: "bevisitDept",
          type: "select",
          dicData: DIC.TEST,
          mock: {
            type: "dic",
          },
          rules: [{ required: true, message: "部门不能为空", trigger: "blur" }],
        },
        {
          label: "固定电话",
          prop: "bevisitTel",
          rules: [
            { required: true, message: "固定电话不能为空", trigger: "blur" },
          ],
        },
        {
          label: "手机号码",
          prop: "bevisitPhone",
          // span:24,
          // type:'search',
          rules: [
            { required: true, message: "手机号码不能为空", trigger: "blur" },
            { validator: rule.validatorPhoneNumber, trigger: "blur" },
          ],
        },
      ],
    },
  ],
};
