module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'vue3-img-input',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Welcome to vue3-img-input docs",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true,
    nav: [
      {
        text: 'Getting started',
        link: '/guide/',
      },
      {
        text: 'Github',
        link: 'https://github.com/heamongus/vue3-img-input/'
      }
    ],
    sidebar: [
      {
        title: 'Getting started',
        collapsable: false,
        path: '/guide/',
        children: [
          '/guide/',
          '/guide/use-cases',
        ]
      },
      {
        title: 'API',
        collapsable: false,
        path: '/api/',
        children: [
          '/api/',
          '/api/events',
          '/api/slots',
          '/api/sass',
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
