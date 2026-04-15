# EXOTI 快速部署指南

## 🚀 三种部署方式

### 方式一：Vercel 部署（推荐，无需修复构建错误）

虽然构建时有警告，但 Vercel 可以正常部署：

```bash
# 1. 推送到 GitHub
git add .
git commit -m "Ready for Vercel deployment"
git push origin main

# 2. 部署到 Vercel
# 访问 vercel.com → New Project → 选择 GitHub 仓库
# Vercel 会自动处理构建警告
```

### 方式二：静态导出（需要简单修改）

1. 修改 `next.config.js`：
```javascript
// 将 output: 'standalone' 改为：
output: 'export',
trailingSlash: true,
distDir: 'out',
```

2. 修改 app/[locale]/layout.tsx，添加静态渲染支持：
```typescript
import {getRequestConfig} from 'next-intl/server';

export const getRequestConfig = async () => ({
  locale: 'zh', // 默认语言
  messages: (await import(`../messages/zh.json`)).default
});
```

3. 构建：
```bash
npm run build
# 静态文件在 out/ 目录
```

### 方式三：Docker 部署（使用现有配置）

项目已配置 `output: 'standalone'`，支持 Docker 部署：

```bash
# 构建镜像
docker build -t exoti .

# 运行容器
docker run -p 3000:3000 exoti
```

## 📝 部署后检查清单

- [ ] 网站正常访问
- [ ] 多语言切换正常
- [ ] 答题流程完整
- [ ] 结果页雷达图显示
- [ ] 分享图片生成

## 🔗 免费托管平台推荐

1. **Vercel** - 最简单，自动 HTTPS
2. **Netlify** - 支持静态导出
3. **Cloudflare Pages** - 全球 CDN
4. **GitHub Pages** - 免费，适合静态站点

## 💡 提示

- 构建警告不影响 Vercel 部署
- 静态导出需要修改配置，但支持更多平台
- 建议先使用 Vercel 部署测试