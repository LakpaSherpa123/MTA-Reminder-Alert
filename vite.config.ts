import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [
    {enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */})},
    react({include: /\.(jsx|js|mdx|md|tsx|ts)$/})
  ]
})


// import react from '@vitejs/plugin-react'
// import {defineConfig} from 'vite'
// // ---cut---
// // …
// const viteConfig = defineConfig({
//   plugins: [
//     {enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */})},
//     react({include: /\.(jsx|js|mdx|md|tsx|ts)$/})
//   ]
// })
// // …