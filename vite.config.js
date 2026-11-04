import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  // GitHub Pages 部署路径前缀（仅构建时生效，本地开发不受影响）
  base: command === 'build' ? '/Jacx-resume/' : '/',
  plugins: [react(), tailwindcss()],
}))
