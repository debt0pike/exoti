# 部署指南 / Deployment Guide

本项目已优化为Vercel部署，包含完整的SEO优化和移动端适配。

This project is optimized for Vercel deployment, including complete SEO optimization and mobile responsiveness.

## 部署步骤 / Deployment Steps

### 1. 准备工作 / Preparation

确保你已经安装了：
```bash
npm install
```

### 2. 连接Vercel / Connect to Vercel

#### 方法A：通过Vercel CLI（推荐）
```bash
npm install -g vercel
vercel login
vercel
```

#### 方法B：通过Vercel Dashboard
1. 登录 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入你的GitHub仓库
4. Vercel会自动检测Next.js配置

### 3. 环境变量 / Environment Variables

在Vercel项目设置中，添加以下环境变量（如果需要）：

```
NEXT_PUBLIC_BASE_URL=https://exoti.app
```

### 4. 自定义域名 / Custom Domain

1. 进入项目设置 → Domains
2. 添加你的域名（如 `exoti.app`）
3. 按照Vercel的指引配置DNS记录

## 文件结构优化 / File Structure Optimization

### SEO优化文件 / SEO Optimization Files

- `vercel.json` - Vercel部署配置
- `app/[locale]/layout.tsx` - 完整的metadata和OG标签
- `public/robots.txt` - 搜索引擎爬虫规则
- `app/api/sitemap/route.ts` - 动态sitemap生成
- `app/api/robots/route.ts` - 动态robots.txt生成
- `sitemap-template.xml` - 静态sitemap模板

### 移动端适配文件 / Mobile Optimization Files

- `app/[locale]/page.tsx` - 首页移动端适配
- `app/[locale]/quiz/page.tsx` - 答题页移动端适配
- `app/[locale]/result/[type]/page.tsx` - 结果页移动端适配
- `styles/globals.css` - 移动端样式优化

## 构建配置 / Build Configuration

### next.config.js 优化
```javascript
{
  output: 'standalone',              // 独立输出模式
  images: {
    formats: ['image/avif', 'image/webp'], // 现代图片格式
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // 响应式图片尺寸
  },
  compress: true,                    // 启用压缩
  poweredByHeader: false,           // 移除X-Powered-By头部
}
```

### vercel.json 配置
```json
{
  "framework": "nextjs",
  "regions": ["hkg1"],               // 香港区域部署（亚太优化）
  "headers": [                      // 安全头部
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

## SEO检查清单 / SEO Checklist

- ✅ Meta Title优化（模板化标题）
- ✅ Meta Description（多语言描述）
- ✅ Open Graph标签（社交媒体分享优化）
- ✅ Twitter Card标签
- ✅ Canonical URL（规范化链接）
- ✅ Sitemap.xml（站点地图）
- ✅ Robots.txt（爬虫规则）
- ✅ 多语言Alternates标签
- ✅ 响应式图片
- ✅ 移动端优化
- ✅ 性能优化（压缩、缓存）

## 移动端优化要点 / Mobile Optimization Highlights

- 响应式字体大小（`text-sm sm:text-base md:text-lg`）
- 触摸优化按钮（最小点击区域 44x44px）
- 移动端布局调整（flex-col on mobile）
- 进度条高度优化（移动端 2px，桌面端 1px）
- 触摸反馈（active:scale-95）
- 手势友好间距

## 部署后检查 / Post-Deployment Checklist

部署完成后，请检查：

### 1. 功能检查
- [ ] 首页正常加载
- [ ] 答题流程顺畅
- [ ] 结果页显示正确
- [ ] 多语言切换正常
- [ ] 分享图片生成正常

### 2. 性能检查
- [ ] Lighthouse分数 > 90
- [ ] 首屏加载时间 < 3s
- [ ] 图片优化正确

### 3. SEO检查
- [ ] meta tags 正确显示
- [ ] Open Graph 预览正常
- [ ] Sitemap 可访问：`https://exoti.app/sitemap.xml`
- [ ] Robots.txt 可访问：`https://exoti.app/robots.txt`
- [ ] 多语言canonical链接正确

### 4. 移动端检查
- [ ] 移动设备浏览正常
- [ ] 触摸交互流畅
- [ ] 布局无错位
- [ ] 字体大小合适

## 故障排查 / Troubleshooting

### 构建失败 / Build Failed
```bash
# 检查依赖
npm install

# 本地构建测试
npm run build
```

### 样式不正确 / Styling Issues
```bash
# 清除.next缓存
rm -rf .next

# 重新构建
npm run build
```

### SEO标签不显示 / SEO Tags Not Showing
- 检查 `app/[locale]/layout.tsx` 中的metadata配置
- 使用浏览器开发者工具查看生成的HTML
- 测试Open Graph：[https://opengraph.xyz](https://opengraph.xyz)

## 下一步 / Next Steps

如果需要添加更多功能：

1. **数据统计**：集成Google Analytics
2. **用户追踪**：实现结果分享统计
3. **内容管理**：添加CMS管理题目和人格描述
4. **A/B测试**：测试不同题目顺序对用户留存的影响

## 技术支持 / Technical Support

如有问题，请检查：
- [Vercel文档](https://vercel.com/docs)
- [Next.js部署指南](https://nextjs.org/docs/deployment)
- [SEO最佳实践](https://developers.google.com/search/docs)

---

## 🚀 即时部署方案

### 方案1：Vercel 部署（最快）
1. 推送到 GitHub：`git push origin main`
2. 访问 [vercel.com](https://vercel.com) 连接仓库
3. 一键自动部署

### 方案2：静态导出（适合其他平台）
```bash
# 修改 next.config.js
npm install next-export-i18n
# 配置静态导出
```

### 方案3：本地测试
```bash
npm run dev  # 开发模式
npm run build && npm start  # 生产模式
```

项目已完成Phase 2移动端适配和Phase 4 SEO优化，可以直接部署到Vercel。
Project completed Phase 2 mobile optimization and Phase 4 SEO optimization, ready for Vercel deployment.