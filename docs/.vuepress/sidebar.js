/**
 * Sidebar configuration documention
 * https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
 */

module.exports = [


    {
        title: "Quickstart 🚀",
        collapsable: true,
        sidebarDepth: 1,
        path: "/quickstart/",
        children:[
            "/quickstart/",
            "/quickstart/bsc_account"
        ]
    },

    {
        title: "SDK 🥠",
        collapsable: true,
        sidebarDepth: 1,
        path: "/sdk/",
        children:[
            "/sdk/"
        ]
    },

    {
        title: "Blockchain",
        collapsable: true,
        sidebarDepth: 1,
        path: '/blockchain/',
        children: [
            "/blockchain/"
        ]
    },

    {
        title: "Effect Network 🎆",
        collapsable: true,
        sidebarDepth: 1,
        path: "/",
        children:[
            "/",
            "glossary",
            "contact",
            "about"
        ]
    },
]


/**
module.exports = {
        '/quickstart/': [
            '',
            'bsc_account'
        ],
    
        '/blockchain/': [
            ''
        ],
    
        '/sdk/': [
            ''
        ],
        
        '/': [
            '', 
            'about',
            'contact',
            'glossary',
        ]
    }
*/