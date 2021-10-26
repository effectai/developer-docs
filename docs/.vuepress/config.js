module.exports = {
    title: 'Effect Developer',
    description: 'Vue-powered Static Site Generator',
    head: [
        ['link', { rel: 'icon', href: `/logo_icon.png` }],
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    host: '0.0.0.0',
    port: '8080',
    base: '/developer-docs/',
    plugins: [
        '@vuepress/active-header-links'
    ],
    theme: 'antdocs',
    themeConfig: {
        logo: '/logo_icon.png',
        // repo: 'https://github.com/effectai/developer-docs',
        repo: 'effectai/developer-docs',
        repoLabel: 'Contribute!',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        backtoTop: true,
        search: true,
        searchPlaceholder: 'Search...',
        lastUpdated: 'Last Updated',
        nextLinks: true,
        prevLinks: true,
        smoothScroll: true,

        displayAllHeaders: false,
        navbar: true,
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        // sidebarDepth: 3,
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'docs/.vuepress/public'
            }
        }
    }
}