import { rule } from "@/util/validate";
export const option = {
  emptyBtn: false,
  submitBtn: false,
  group: [
    {
      label: "基本信息",
      prop: "visitorNo",
      column: [
        {
          label: "姓名",
          prop: "name",
          search: true,
          rules: [
            { required: true, message: "请输入姓名", trigger: "blur" },
            { validator: rule.validatorName, trigger: "blur" },
          ],
        },
        {
          label: "拼音",
          prop: "pinyin",
          search: true,
        },
        {
          label: "单文本框",
          prop: "input",
          maxlength: 10,
        },
        {
          label: "多文本框",
          prop: "textarea",
          type: "textarea",
          minRows: 10,
          maxlength: 200,
          span: 24,
        },
      ],
    },
  ],
};
export const form = {
    input: "欢迎使用avue",
    textarea: "欢迎使用avue",
};
