export let navigation: any[] = [
  {
    name: "doshboard",
    type: "item",
    icon: "bx-home-circle",
    url: '/',
    id: "dashboard",
  },
  {
    name: "flash card",
    type: "collapsable",
    icon: "bx-link",
    url: 'flash-card',
    id: "flashCard",
    childern: [
      {
        name: "my flash card",
        type: "item",
        url: 'flash-card',
      },
      {
        name: "saved flash cards",
        type: "item",
        url: 'flash-card/saved-flash-cards',
      },
    ]
  },
  {
    name: "meeting",
    type: "item",
    icon: "bx-dollar-circle",
    url: '/marketing',
    id: "marketing",
  },
  {
    name: "partner",
    type: "item",
    icon: "bx-store-alt",
    url: '/invoice',
    id: "invoice",
  },
  {
    name: "quiz",
    type: "item",
    icon: "bx-support",
    url: '/support',
    id: "support",
  },
]
