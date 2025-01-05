import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',
  base: '/purpleplanen.github.io/',

  lang: 'zh-CN',
  title: 'PurplePlanen',
  description: '基于 VitePress 的个人导航网站',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/purpleplanen' }],

    footer: {
      message: 'Made with ❤️ by PurplePlanen',
      copyright: 'Copyright © 2024 PurplePlanen'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'purpleplanen.nav',
    },

    // 暂时注释掉评论配置
    // comment: {
    //   repo: 'purpleplanen/purpleplanen.github.io',
    //   repoId: 'R_kgDONKvM1A',
    //   category: 'Announcements',
    //   categoryId: 'DIC_kwDONKvM1M4Clt7j',
    // },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
