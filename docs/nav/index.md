---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# PurplePlanen

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

::: tip
本导航由 [PurplePlanen](https://github.com/purpleplanen) 开发维护，主题基于 [vitepress-nav-template](https://github.com/maomao1996/vitepress-nav-template)(模板)
:::
