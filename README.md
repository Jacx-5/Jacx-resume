# 曹锦翔 · 个人简历网站

东莞理工学院 · 经济与金融 · 个人简历网站（暗色系 · PC 优先）

## 技术栈

- **React 19**（Vite 8 驱动）
- **Tailwind CSS 4**
- **Framer Motion**（滚动入场 / 数字滚动 / 流体背景 / 粒子网络）
- **Lucide React**（图标）

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
├── components/
│   ├── Hero.jsx            # 全屏首页（渐变流体 + 粒子 + 高斯模糊遮罩）
│   ├── About.jsx           # 个人介绍大卡片
│   ├── Experience.jsx      # 精选项目（英语家教）+ 实习 + 竞赛
│   ├── Strengths.jsx       # 个人优势（数据面板 + 能力卡片）
│   ├── Contact.jsx         # 整屏联系收尾页
│   ├── Navbar.jsx          # 导航栏
│   ├── ParticleField.jsx   # Canvas 粒子网络背景
│   ├── SpotlightCard.jsx   # 鼠标聚光卡片
│   ├── CountUp.jsx         # 数字滚动动画
│   └── Reveal.jsx          # 滚动入场动画
└── index.css               # Tailwind 主题与全局样式
```
