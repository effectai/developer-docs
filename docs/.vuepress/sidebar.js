/**
 * Sidebar configuration documention
 * https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
 */

module.exports = [
    {
        title: "Quickstart 🚀",
        collapsable: true,
        sidebarDepth: 1,
        path: '/quickstart/',
        children:[
            // "/",
        ]
    },

    {
        title: "SDK 🥠",
        collapsable: true,
        sidebarDepth: 1,
        path: '/sdk/',
        children:[
        ]
    },

    // {
    //     title: "Blockchain",
    //     collapsable: true,
    //     sidebarDepth: 1,
    //     path: '/blockchain/',

    // },

    // Fallback, this needs to be last, otherwise it will catch everything
    {
        title: "Effect Network 🎆",
        collapsable: true,
        sidebarDepth: 1,
        path: '/',
        children:[
            "/",
            "glossary",
            "contact",
            "about"
        ]
    },
]

