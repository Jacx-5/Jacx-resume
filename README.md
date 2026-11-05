# 曹锦翔 · 个人简历网站

东莞理工学院 · 经济与金融 · 个人简历网站（暗色系 · PC 优先）

**设计方向：「电蓝盘面」** — 近黑墨底 + 电光蓝家族强调色（浅天蓝 · 电蓝 · 深钴蓝），等宽字体做数据元素，全站鼠标互动。

## 技术栈

- **React 19**（Vite 8 驱动）
- **Tailwind CSS 4**
- **React Bits**（reactbits.dev 动画组件库，JS-TW 变体，位于 `src/components/reactbits/`）
- **GSAP 3**（ScrollTrigger 滚动驱动 / 粘性堆叠实习卡 / 入场时间轴）+ `@gsap/react`
- **motion**（React Bits 组件依赖的微交互动画）
- **@fontsource**（Space Grotesk + JetBrains Mono 自托管，国内可访问）
- **Lucide React**（图标）

## 鼠标互动（React Bits）

| 组件 | 位置 | 效果 |
|---|---|---|
| SplashCursor | 全局 | 蓝色墨水拖尾跟随鼠标，点击溅开 |
| Noise | 全局 | 胶片颗粒质感层 |
| Aurora | Hero 背景 | 蓝色极光，朝鼠标漂移 |
| Magnet | 导航 / CTA / 按钮 | 磁吸弹性跟随 |
| TiltedCard | Hero 身份卡 | 3D 倾斜 + 眩光跟随鼠标 |
| SpotlightCard | 各卡片 | 聚光跟随指针，邻近卡片联动 |
| CircularText | Hero 旋转徽章 | 环形文字，悬停加速 |
| BlurText | Hero 大标题 | 失焦渐显 |
| RotatingText | Hero 角色轮换 | 3D 翻转切换 |
| TrueFocus | About 焦点句 | 词序动态聚焦 |
| CountUp | 数据面板 | 等宽数字滚动 |
| DecryptedText | Contact 标题 | 乱码解密浮现 |

## 本地运行

```bash
npm install
npm run dev
```

## 部署

推送代码到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages。

首次使用需在仓库 **Settings → Pages → Source** 中选择 **GitHub Actions**（只需设置一次）。

## 目录结构

```
src/
├── data/resume.js          # 全站内容数据（改文案只动这里）
├── lib/gsap.js             # GSAP 统一入口（插件注册 / 默认值 / 无障碍开关）
├── components/
│   ├── Hero.jsx            # 首页（Aurora 极光 + BlurText + 身份卡 + 数据条）
│   ├── Marquee.jsx         # 唯一一条成绩单跑马灯
│   ├── About.jsx           # 关于我（TrueFocus 焦点句 + 身份面板）
│   ├── Experience.jsx      # 精选经历（家教大卡 + 粘性堆叠实习卡 + 奖项）
│   ├── Strengths.jsx       # 个人优势（数据面板 + Bento 卡片）
│   ├── Contact.jsx         # 联系收尾页（DecryptedText + 聚光卡片）
│   ├── Navbar.jsx          # 导航栏（磁吸链接）
│   ├── ScrollProgress.jsx  # 顶部阅读进度条（ScrollTrigger scrub）
│   ├── Reveal.jsx          # 滚动入场动画（ScrollTrigger / batch）
│   └── reactbits/          # React Bits 组件（16 个，JS-TW 变体）
└── index.css               # Tailwind 主题与全局样式
```
