import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '学习资源',
    items: [
      {
        icon: 'https://developer.mozilla.org/favicon.ico',
        title: 'MDN',
        desc: 'Web 开发技术文档',
        link: 'https://developer.mozilla.org'
      },
      {
        icon: '/juejin.png',
        title: '掘金',
        desc: '开发者社区',
        link: 'https://juejin.cn'
      },
      {
        icon: 'https://www.bilibili.com/favicon.ico',
        title: 'Bilibili',
        desc: '学习视频网站',
        link: 'https://www.bilibili.com'
      }
    ]
  },
  {
    title: '开发工具',
    items: [
      {
        icon: 'https://code.visualstudio.com/favicon.ico',
        title: 'VS Code',
        desc: '强大的代码编辑器',
        link: 'https://code.visualstudio.com/'
      },
      {
        icon: 'https://www.postman.com/favicon.ico',
        title: 'Postman',
        desc: 'API 开发测试工具',
        link: 'https://www.postman.com/'
      }
    ]
  },
  {
    title: '在线工具',
    items: [
      {
        icon: 'https://caniuse.com/favicon.ico',
        title: 'Can I Use',
        desc: '浏览器特性兼容性查询',
        link: 'https://caniuse.com/'
      },
      {
        icon: 'https://tinypng.com/favicon.ico',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com/'
      },
      {
        icon: 'https://www.json.cn/favicon.ico',
        title: 'JSON.cn',
        desc: 'JSON 在线解析及格式化',
        link: 'https://www.json.cn/'
      }
    ]
  }
]
