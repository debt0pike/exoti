# EXOTI - EXO Type Indicator

面向EXO粉丝（EXO-L）的人格测评网站，通过27道选择题测出16种EXO-L人格类型。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS + CSS Variables
- **图表**: Recharts（雷达图）
- **分享**: html2canvas
- **动效**: Framer Motion
- **状态管理**: Zustand
- **字体**:
  - Cormorant Garamond（英文显示字体）
  - Space Mono（英文标签/数字）
  - Noto Serif SC（中文正文）
  - Noto Sans KR（韩文）
- **国际化**: next-intl
- **部署**: Vercel
- **包管理**: npm

## 开始使用

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看项目。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
exoti/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # 主布局
│   │   ├── page.tsx              # 首页（Intro）
│   │   ├── quiz/
│   │   │   └── page.tsx          # 答题页
│   │   └── result/
│   │       └── [type]/
│   │           └── page.tsx      # 结果页
├── components/
│   ├── StarBackground.tsx         # 动态星空背景
│   ├── QuizCard.tsx              # 单题组件
│   ├── OptionCard.tsx            # 选项卡片
│   ├── ProgressBar.tsx           # 进度条
│   ├── RadarChart.tsx            # 六维雷达图
│   ├── VinylRecord.tsx           # 黑胶唱片动画
│   ├── ShareCard.tsx             # 分享图片卡片
│   └── ShareButton.tsx           # 分享按钮
├── data/
│   ├── questions.ts              # 27道题完整数据
│   ├── personalities.ts          # 16种人格完整数据
│   └── types.ts                # TypeScript类型定义
├── store/
│   └── quizStore.ts              # Zustand状态管理
├── lib/
│   └── scoring.ts                # 计分逻辑
├── messages/
│   ├── zh.json                   # 中文翻译
│   ├── ko.json                   # 韩文翻译
│   └── en.json                   # 英文翻译
├── styles/
│   └── globals.css               # CSS变量 + 全局样式
└── public/
    └── fonts/                    # 字体文件
```

## 功能特性

### 核心功能
- ✅ 动态星空背景
- ✅ 27道完整答题流程
- ✅ 进度条实时显示
- ✅ 六维雷达图展示
- ✅ 16种人格结果展示
- ✅ 黑胶唱片动画
- ✅ 分享图片生成

### 设计系统
- 🎨 黑色宇宙美学
- 🌟 暗金质感设计
- ✨ 动态星粒子背景
- 📱 响应式布局
- 🌐 多语言支持（中文/韩文/英文）

## 16种人格类型

| 类型 | 中文名 | 英文名 |
|------|--------|--------|
| AA | 天命信徒 | The Celestial Believer |
| AB | 圣徒幸存者 | The Sacred Survivor |
| AC | 星际漫游者 | The Cosmic Wanderer |
| AD | 永恒守望者 | The Eternal Guardian |
| BA | 信仰叛徒 | The Faithful Rebel |
| BB | 未曾断裂者 | The Unbroken |
| BC | 午夜凤凰 | The Midnight Phoenix |
| BD | 耐心的战士 | The Patient Warrior |
| CA | 星光梦游者 | The Starlight Dreamer |
| CB | 燃烧的安魂曲 | The Burning Requiem |
| CC | 纯粹感受体 | The Pure Sensation |
| CD | 安静的火 | The Quiet Flame |
| DA | 灯塔守护人 | The Lighthouse Keeper |
| DB | 忠诚的流亡者 | The Faithful Exile |
| DC | 温柔的虔信者 | The Gentle Devotee |
| DD | 无限等待者 | The Infinite Wait |

## 六维体系

1. **Faith / 信仰** - 对宇宙、命运的相信程度
2. **Grit / 韧性** - 面对困难、挫折的承受力
3. **Presence / 感官** - 活在当下、享受感官的倾向
4. **Devotion / 深情** - 对热爱事物的投入程度
5. **Connection / 连结** - 与他人、集体的联结感
6. **Introspection / 反省** - 自我反思、内省的深度

## 开发说明

### 计分逻辑

```typescript
function calculateResult(answers: Record<number, 'A'|'B'|'C'|'D'>) {
  const scores = { A: 0, B: 0, C: 0, D: 0 };

  Object.values(answers).forEach(type => {
    scores[type]++;
  });

  // 按分数降序排列
  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  const primary = sorted[0][0];    // 主型（最高分）
  const secondary = sorted[1][0];  // 副型（第二高）

  return `${primary}${secondary}`; // 如 "AD"、"BC"
}
```

### 分享图片生成

使用 `html2canvas` 库生成分享图片：
- 截图区域：id="share-card" 的元素
- 输出尺寸：1080×1920（2倍缩放）
- 格式：PNG
- 文件名：EXOTI-[typeCode].png

## 未来计划

### Phase 1（已完成）
- [x] 星空背景 + Intro页
- [x] 完整答题流程（27题、进度条、导航）
- [x] 计分逻辑
- [x] 结果页（雷达图+人格展示）
- [x] 中文版

### Phase 2（已完成）
- [x] 分享图片生成（html2canvas）
- [x] 页面切换动效（Framer Motion）
- [x] 移动端适配优化（响应式布局、触摸优化）

### Phase 3（已完成）
- [x] 韩文版
- [x] 英文版
- [x] next-intl完整接入

### Phase 4（已完成）
- [x] SEO优化（metadata、og:image、robots.txt）
- [x] 自定义域名接入（vercel.json配置）
- [x] 数据统计（可选：统计各人格分布）

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License

---

Made with ❤️ by EXO-L, for EXO-L
