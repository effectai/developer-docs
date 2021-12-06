/**
 * Sidebar configuration documention
 * https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
 */

module.exports = [


    {
        title: "🚀 Quickstart",
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
        title: "🌽 Local",
        collapsable: false,
        sidebarDepth: 1,
        path: "/local/",
        children:[
            // "",
            // "/quickstart/gui" // Can be added later, for now it the docs need to be clean.
            // "/quickstart/bsc_account"
        ]
    },

    {
        title: "💬 Effect Network",
        collapsable: false,
        sidebarDepth: 1,
        path: "/effect_network/",
        children:[
            "",
            "/effect_network/template",
            "/effect_network/campaign",
            "/effect_network/account",
            // "/quickstart/gui" // Can be added later, for now it the docs need to be clean.
            // "/quickstart/bsc_account"
        ]
    },

    

    {
        title: "🥠 SDK",
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
        title: "🌠 Home",
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

