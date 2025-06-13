import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  splitting: false,
  sourcemap: false,
  minify: true,
  clean: true,
  format: ['esm'],
  outDir: 'es'
})
