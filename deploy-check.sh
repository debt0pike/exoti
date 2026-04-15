#!/bin/bash

# EXOTI 部署前检查脚本
# 使用方法: chmod +x deploy-check.sh && ./deploy-check.sh

echo "🚀 EXOTI 项目部署前检查"
echo "========================"

# 1. 检查 Node.js 版本
echo "📦 检查 Node.js 版本..."
NODE_VERSION=$(node -v)
echo "✅ Node.js 版本: $NODE_VERSION"

if [[ "$NODE_VERSION" < v18 ]]; then
    echo "❌ 错误: 需要 Node.js v18 或更高版本"
    exit 1
fi

# 2. 检查 npm 版本
echo "📦 检查 npm 版本..."
NPM_VERSION=$(npm -v)
echo "✅ npm 版本: $NPM_VERSION"

# 3. 检查依赖
echo "📦 检查依赖完整性..."
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules 不存在，正在安装..."
    npm install
fi

# 4. 检查关键文件
echo "📁 检查关键文件..."
FILES=(
    "package.json"
    "next.config.js"
    "vercel.json"
    "app/[locale]/layout.tsx"
    "data/personalities.ts"
    "public/robots.txt"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ 缺失: $file"
        exit 1
    fi
done

# 5. 尝试构建项目
echo "🔨 检查项目构建..."
npm run build > build-test.log 2>&1
BUILD_RESULT=$?

if [ $BUILD_RESULT -eq 0 ]; then
    echo "✅ 构建成功"
    rm build-test.log
else
    echo "❌ 构建失败，请检查 build-test.log"
    exit 1
fi

echo ""
echo "🎉 所有检查通过！"
echo ""
echo "接下来运行部署命令："
echo ""
echo "1. 登录 Vercel:"
echo "   npm install -g vercel"
echo "   vercel login"
echo ""
echo "2. 部署项目:"
echo "   vercel"
echo ""
echo "3. 按照提示完成部署"
echo ""