/**
 * Sidebar configuration documention
 * https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
 */

module.exports = [
  {
    title: "🚀 Quickstart",
    collapsable: true,
    sidebarDepth: 0,
    path: "/quickstart/",
    children: [
      // "",
      // "/quickstart/gui" // Can be added later, for now it the docs need to be clean.
      // "/quickstart/bsc_account"
    ],
  },

  {
    title: "🌽 Local",
    collapsable: true,
    sidebarDepth: 0,
    path: "/local/",
    children: [
      // "",
      // "/quickstart/gui" // Can be added later, for now it the docs need to be clean.
      // "/quickstart/bsc_account"
    ],
  },

  {
    title: "💬 Effect Network",
    collapsable: true,
    sidebarDepth: 0,
    path: "/effect_network/",
    children: [
      "/effect_network/template",
      "/effect_network/campaign",
      "/effect_network/account",
      "/effect_network/migration",
      "/effect_network/register",
      // "/quickstart/gui" // Can be added later, for now it the docs need to be clean.
      // "/quickstart/bsc_account"
    ],
  },

  {
    title: "🥠 SDK",
    collapsable: true,
    sidebarDepth: 0,
    path: "/sdk/",
    children: [
      // "/sdk/"
    ],
  },

  // Can be added later, for now the docs need to be as clean as possible.
  // {
  //     title: "Blockchain",
  //     collapsable: true,
  //     sidebarDepth: 0,
  //     path: '/blockchain/',
  //     children: [
  //         // "/blockchain/"
  //     ]
  // },

  {
    title: "🌠 About",
    collapsable: true,
    sidebarDepth: 0,
    path: "/about/",
    children: ["glossary", "contact", "about"],
  },
  {
    title: "📚 Resources",
    collapsable: true,
    sidebarDepth: 0,
    path: "/resources/",
    children: ["/resources/2023", "/resources/2022"],
  },
];
