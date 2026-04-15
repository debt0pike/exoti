# 🚀 EXOTI 快速部署指南

## 一键部署脚本

### 方式一：使用脚本（推荐）

```bash
# 运行部署脚本
./deploy.sh
```

脚本会自动完成：
- ✅ 克隆项目（如果需要）
- ✅ 安装依赖
- ✅ 检查环境变量
- ✅ 提示登录 Vercel
- ✅ 一键部署

### 方式二：手动部署

```bash
# 1. 克隆项目
git clone https://github.com/yourusername/exoti.git
cd exoti

# 2. 安装依赖
npm install

# 3. 安装并登录 Vercel CLI
npm install -g vercel
vercel login

# 4. 一键部署
vercel --prod
```

## 📋 部署前准备

1. **创建 GitHub 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: EXOTI personality test"
   git remote add origin https://github.com/yourusername/exoti.git
   git push -u origin main
   ```

2. **环境变量（可选）**
   ```bash
   # 创建 .env.local
   echo "NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app" > .env.local
   ```

## 🌐 部署后配置

1. **访问 Vercel 控制台**
   - 访问 [vercel.com](https://vercel.com)
   - 选择项目
   - 配置自定义域名（可选）

2. **SEO 配置**
   - 已配置好 meta 标签
   - 自动生成 sitemap.xml
   - 支持 robots.txt

3. **多语言路由**
   - 中文：`/` 或 `/zh`
   - 韩文：`/ko`
   - 英文：`/en`

## ✅ 功能测试

部署完成后，请测试：
- [ ] 首页正常加载
- [ ] 27道答题流程顺畅
- [ ] 结果页显示正确
- [ ] 雷达图渲染正常
- [ ] 分享图片生成成功
- [ ] 多语言切换正常

## 🐛 常见问题

### 构建失败
```bash
# 清除缓存重新构建
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Vercel 部署失败
- 检查 GitHub 仓库权限
- 确保 Vercel CLI 已登录
- 查看构建日志排查问题

## 🔗 相关文档

- [Vercel 部署指南](https://vercel.com/docs)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [EXOTI 项目文档](./README.md)

---

开始部署您的 EXOTI 人格测试网站吧！🌟