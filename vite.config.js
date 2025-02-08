import { defineConfig } from "vite";

export default defineConfig({
  // 配置基本路径
  publicPath: "/",
  base: "/", // 你可以修改成部署的路径

  // 配置构建
  build: {
    outDir: "dist", // 输出目录
    minify: "esbuild", // 使用 esbuild 压缩
    target: "esnext", // 构建目标
  },

  // 配置开发服务器
  server: {
    host: "localhost", // 监听 localhost
    port: 1314, // 端口设置
    open: true, // 开启后自动打开浏览器
  },

  // 配置路径别名
  resolve: {
    alias: {
      "@": "/src", // '@' 别名指向 /src 目录
    },
  },
});
