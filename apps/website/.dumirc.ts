import { defineConfig } from 'dumi'
import type { SiteThemeConfig } from 'dumi-theme-antd-style';
import path from 'node:path'

const themeConfig: SiteThemeConfig = {
  name: 'Nomo UI',
}

export default defineConfig({
  outputPath: 'docs-dist', // 输出路径
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: path.join(__dirname, '../../packages/ui/src/index.ts')
  },
  themeConfig
})
