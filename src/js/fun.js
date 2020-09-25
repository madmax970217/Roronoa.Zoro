export const list = (flag,http) => {
  return http.post(`/Search/list`, flag).then((res) => res.data);
};

export const setTree = [
  // {
  //     "id":13,
  //     "parentId":0,
  //     "order":1,
  //     "name":"truck",
  // },
  // {
  //     "id":16,
  //     "pluginId":null,
  //     "parentId":0,
  //     "order":1,
  //     "name":"sca",
  // },
  // {
  //     "id":17,
  //     "pluginId":6,
  //     "parentId":16,
  //     "order":1,
  //     "name":"abcf",
  // }
  {
    id: 44,
    name: "扫描w2",
    order: 1,
    parentId: 0,
    children: [
      {
        id: 125,
        name: "plplupluppluplplupl",
        order: 2,
        parentId: 44,
        children: [
          {
          id: 44,
          name: "plplupluppluplplupl",
          order: 2,
          parentId: 44,
          }
        ],
      },
      {
        id: 124,
        name: "pluginplugin",
        order: 2,
        parentId: 44,
        children: [],
      },
    ],
  },
];
