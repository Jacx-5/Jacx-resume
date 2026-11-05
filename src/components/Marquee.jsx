/** 全站唯一一条跑马灯：数据成绩单（等宽字体，暂停于悬停） */
const items = [
  'GPA 3.55',
  'CET-4 531',
  'IELTS SPEAKING 7.0',
  '东方财富杯 · 晋级省赛',
  '「工行杯」省级优秀奖',
  '「外教社杯」校赛一等奖',
  '日均外呼 350+',
  '实习成交额 50万+',
  '单条视频播放 30万+',
]

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((t) => (
        <span
          key={t}
          className="flex items-center whitespace-nowrap font-mono text-xs tracking-[0.25em] text-zinc-500"
        >
          <span className="px-6">{t}</span>
          <span className="text-blue-400/70">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-ink-900/60 py-4">
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </div>
  )
}
