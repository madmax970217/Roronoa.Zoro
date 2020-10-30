export const option = {
  column: [
    {
      label: "访客姓名",
      prop: "name",
      search: true,
      blur: () => {
        window.inputPY();
      },
    },
    {
      label: "拼音",
      prop: "pinyin",
    },
  ],
};
