#!/bin/bash

# EXOTI 部署脚本
# EXOTI Deployment Script

echo "🚀 开始部署 EXOTI..."

# 1. 克隆项目
echo "📥 克隆项目..."
if [ ! -d "exoti" ]; then
    git clone https://github.com/yourusername/exoti.git
    cd exoti
else
    cd exoti
    echo "⚠️  项目已存在，使用现有目录"
fi

# 2. 安装依赖
echo "📦 安装依赖..."
npm install

# 3. 检查环境变量
echo "🔍 检查环境变量..."
if [ ! -f ".env.local" ]; then
    echo "创建 .env.local 文件..."
    cat > .env.local << EOF
# EXOTI 环境变量配置
NEXT_PUBLIC_BASE_URL=https://exoti.vercel.app
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
EOF
    echo "✅ 已创建默认 .env.local 文件"
fi

# 4. 登录 Vercel（如果需要）
echo "🔐 检查 Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo "安装 Vercel CLI..."
    npm install -g vercel
fi

echo "请确保您已登录 Vercel:"
echo "  vercel login"
read -p "是否已登录？(y/n): " login_status
if [ "$login_status" != "y" ]; then
    echo "请先运行: vercel login"
    exit 1
fi

# 5. 一键部署
echo "🚀 开始部署到 Vercel..."
vercel --prod

echo "✅ 部署完成！"
echo ""
echo "📝 后续步骤："
echo "1. 访问 Vercel 控制台配置自定义域名（可选）"
echo "2. 在 vercel.com 添加环境变量（如果需要）"
echo "3. 测试网站功能："
echo "   - 首页是否正常加载"
echo "   - 答题流程是否顺畅"
echo "   - 多语言切换是否正常"
echo "   - 分享图片是否生成成功"