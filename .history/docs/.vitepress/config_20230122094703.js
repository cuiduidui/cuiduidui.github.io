import { DefaultTheme,defineConfig } from 'vitepress'

const nav = [
    { text: '指南', link: '/guide/' },
    { text: '组件', link: '/components/basic-component1' },
];
export default defineConfig({
  title: 'YYG Admin UI',
  description: '基于 vite vue3 element-plus 组件库',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true
})