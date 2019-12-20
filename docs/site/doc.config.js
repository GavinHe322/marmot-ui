
export default {
  header: {
    logo: {
      image: "xxx",
      title: "marmot-ui",
    },
  },
  nav: [
    {
      name: "开发指南",
      groups: [
        {
          list: [
            {
              path: "/intr",
              name: "介绍",
            },
          ],
        },
      ],
    },
    {
      name: "组件",
      showInMobile: true,
      groups: [
        {
          groupsName: "基础组件",
          list: [
            {
              path: "/backTop",
              name: "返回顶部",
            },
            {
              path: "/button",
              name: "按钮",
            },
          ],
        },
      ],
    },
  ],
}
