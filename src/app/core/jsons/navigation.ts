export let navigation: any[] = [
  {
    name: "داشبورد",
    type: "item",
    icon: "bx-home-circle",
    url: '/',
    id: "dashboard",
  },






  {
    name: "مکان ها",
    type: "collapsable",
    icon: "bx-map-alt",
    url: 'places/manage-panels',
    id: "places",
    childern: [
      {
        name: "مدیریت پنل ها",
        type: "collapsable",
        icon: "la-shopping-cart",
        id: 1,
        childern: [
          {
            name: "لیست پنل ها",
            type: "item",
            url: 'places/manage-panels',
          },
          {
            name: "ثبت پنل جدید",
            type: "item",
            url: 'places/manage-panels/new-panel',
          },
        ]
      },
      {
        name: "ارسال قرارداد",
        type: "collapsable",
        icon: "la-shopping-cart",
        id: 2,
        childern: [
          {
            name: "قراردادها",
            type: "item",
            url: 'places/manage-panels/contract',
          },
        ]
      },
    ]
  },


]

