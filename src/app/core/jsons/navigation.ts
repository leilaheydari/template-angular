export let navigation: any[] = [
  {
    name: "داشبورد",
    type: "collapsable",
    icon: "bx-home-circle",
    url: '/',
    id: "dashboard",
    childern: [
      {
        name: "مدیریت کارها",
        type: "item",
        icon: "la-shopping-cart",
        url: '/work-management',
      },
      {
        name: "پیغام ها",
        type: "item",
        icon: "la-shopping-cart",
        url: '/notification',
      }
    ]
  },
 

  {
    name: "مکان ها",
    type: "collapsable",
    icon: "bx-map-alt",
    url: '/places',
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
          {
            name: "لیست قراردادها",
            type: "item",
            url: 'places/manage-panels/contract/list',
          },
        ]
      },
    ]
  },

  {
    name: "سفارشات",
    type: "collapsable",
    icon: "bx-store-alt",
    url: '/orders',
    id: "order",
    childern: [
      {
        name: "سفارشات",
        type: "collapsable",
        icon: "la-shopping-cart",
        url: 'orders/products',
        id: 1,
        childern: [
          {
            name: "ثبت سفارش",
            type: "item",
            url: 'orders/products',
          },
          {
            name: "لیست سفارشات",
            type: "item",
            url: 'orders/products/list',
          },
        ]
      },
    ]
  },

  {
    name: "تنظیمات",
    type: "collapsable",
    icon: "bx-cog",
    url: '/settings',
    id: "settings",
    childern: [
      {
        name: "کارمندان",
        type: "collapsable",
        icon: "la-shopping-cart",
        id: 1,
        childern: [
          {
            name: "ثبت کارمند",
            type: "item",
            url: 'settings/employees',
          },
          {
            name: "لیست کارمندان",
            type: "item",
            url: 'settings/employees/list',
          },
          {
            name: "گزارشات کارمندان",
            type: "item",
            url: 'settings/employees/employee-report',
          },
        ]
      },
      {
        name: "مشتریان",
        type: "collapsable",
        icon: "la-shopping-cart",
        id: 2,
        childern: [
          {
            name: "ثبت مشتری",
            type: "item",
            url: 'settings/customer',
          },
          {
            name: "لیست مشتریان",
            type: "item",
            url: 'settings/customer/list',
          },
        ]
      },
    ],
  },
  {
    name: "پشتیبانی",
    type: "collapsable",
    icon: "bx-support",
    url: '/support',
    id: "support",
    childern: [
      {
        name: " لیست تیکت ها",
        type: "item",
        icon: "la-shopping-cart",
        url: '/support',
      },
    ]
  },

]

