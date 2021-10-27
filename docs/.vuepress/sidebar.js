/**
 * Sidebar configuration documention
 * https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
 */

module.exports = [


    {
        title: "Quickstart 🚀",
        collapsable: false,
        sidebarDepth: 1,
        path: "/quickstart/",
        children:[
            // "",
            // "/quickstart/gui" // Can be added later, for now it the docs need to be clean.
            // "/quickstart/bsc_account"
        ]
    },

    {
        title: "SDK 🥠",
        collapsable: false,
        sidebarDepth: 1,
        path: "/sdk/",
        children:[
            // "/sdk/"
        ]
    },

    // Can be added later, for now the docs need to be as clean as possible.
    // {
    //     title: "Blockchain",
    //     collapsable: false,
    //     sidebarDepth: 1,
    //     path: '/blockchain/',
    //     children: [
    //         // "/blockchain/"
    //     ]
    // },

    {
        title: "Effect Network 🎆",
        collapsable: false,
        sidebarDepth: 1,
        path: "/",
        children:[
            "",
            "glossary",
            "contact",
            "about"
        ]
    },
]

