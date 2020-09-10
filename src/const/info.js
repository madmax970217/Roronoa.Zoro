export const option = {
    emptyBtn: false,
    submitBtn: false,
    group: [
        {
            label: '基本信息',
            prop: 'visitorNo',
            column: [
                {
                    label: '姓名',
                    prop: 'name',
                    search: true,
                    // blur: () => {
                    //     abc()
                    // },
                    rules: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                    ]
                },
                {
                    label: '拼音',
                    prop: 'pinyin',
                    search: true,
                    display:false
                }
            ]
        }
    ]
}