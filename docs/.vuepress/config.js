module.exports = {
    title: 'Effect Developer',
    description: 'Vue-powered Static Site Generator',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
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
        backtoTop: true,
        logo: '/logo_icon.png',
        nav: require('./nav'),
        // sidebar: require('./sidebar'),
        sidebar: {
            '/': [
                '',
                'config'
            ],
            'guide': [
                '/'
            ],
            'blockchain': [
                'bsc/',
                'eos/'
            ]
        },
        sidebarDepth: 2,
        repo: 'https://github.com/effectai/developer-docs'
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'docs/.vuepress/public'
            }
        }
    }
}