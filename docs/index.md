---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: PurplePlanen
  text: 个人导航
  tagline: 记录分享有趣的发现
  image:
    src: /logo.png
    alt: PurplePlanen
  actions:
    - text: 导航
      link: /nav/
      theme: alt
    - text: 关于
      link: /about
      theme: alt

features:
  - icon: 📖
    title: 创意设计
    details: 收集优秀的设计资源和工具
  - icon: 💻
    title: 技术分享
    details: 分享编程开发相关资源
  - icon: 🎮
    title: 趣味发现
    details: 记录有趣的网站和工具
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
