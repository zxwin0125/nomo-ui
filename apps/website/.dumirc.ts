import { defineConfig } from 'dumi'
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig'
import path from 'node:path'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  mfsu: false,
  ssr: false,
  outputPath: 'docs-dist', // 输出路径
  npmClient: 'pnpm',
  apiParser: isProduction ? {} : false,
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: path.join(__dirname, '../../packages/ui/src/index.ts')
  },
  themeConfig: defineThemeConfig({
    name: 'Nomo UI',
    lastUpdated: true,
    nav: {
      'zh-CN': [
        { title: '指南', link: '/guide/introduce' },
        { title: '组件', link: '/components/button' }
      ]
    },
    footer: 'Made with<span style="color: rgb(255, 255, 255);">❤</span>by <span>zxwin0125 | Copyright © 2025-present</span>',
    github: 'https://github.com/zxwin0125/nomo-ui',
    sidebarGroupModePath: ['/components', '/guide'],
    title: 'Nomo UI',
    description: {
      'zh-CN': '致力于快速构建高质量、一致性的 Web 应用'
    },
    actions: {
      'zh-CN': [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guide/introduce'
        },
        {
          text: '在线体验',
          link: '/components/button'
        }
      ]
    },
    features: {
      'zh-CN': [
        {
          title: '内置全文搜索',
          details: '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。'
        },
        {
          title: '更好的编译性能',
          details: '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。'
        },
        {
          title: 'SSR',
          details: '全面支持 SSR，让文档具有更好的首屏加载速度、更好的SEO效果、更快的内容到达率。'
        },
        {
          title: '样式风格统一',
          details: '基于 antd 5.0 CSS-in-JS 样式加持，全面统一 dumi 内置样式，同时支持自定义主题加载。'
        },
        {
          title: '功能增强',
          details: '在 dumi 内置 markdown 增强基础上新增特有 FrontMatter 配置，并且内置多种组件，使文档展示效果得以提升。'
        },
        {
          title: '开箱即用',
          details: '接入简单，安装即使用，全面融入 Ant Design 风格，内置主题切换，紧凑模式等功能。'
        }
      ]
    }
  }),
  alias: {
    '@nomo/ui': path.join(__dirname, '../../packages/ui/src')
  }
})
