# 视频教程 · QuickClass 入门到精通

精选 8 集实操视频，带你从零跑通 QuickClass 核心流程。**页面内直接播放，无需跳转到 B 站**：点击下方任意一集，即可在上方主播放器中加载观看；播放器右下角自带「网页全屏 / 全屏」按钮，想看原片可点每集的「↗ B站」。

<style>
/* ⛔ DO NOT REVERT: 播放器通栏置顶 + 下方选集网格。旧版「左播放器+右长列表」在 RTD 窄内容栏下
   右列被挤成长条、播放器下方大片空白（cc 09-24 反馈不协调），勿改回双栏。 */
#qc-player { position:relative; width:100%; aspect-ratio:16/9; background:#000; border-radius:12px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,.18); margin-top:.5rem; }
#qc-player iframe { position:absolute; inset:0; width:100%; height:100%; border:0; }
/* ⛔ DO NOT REVERT: 同域全屏按钮。iOS 不支持 iframe/div 全屏（平台限制），
   故不支持时降级为打开 B站原片（其移动端播放器有原生全屏）。见 qc-videos.js。 */
#qc-fs { position:absolute; top:.5rem; right:.5rem; z-index:5; display:inline-flex; align-items:center; gap:.3rem; padding:.35rem .6rem; font-size:.78rem; color:#fff; background:rgba(0,0,0,.5); border:0; border-radius:8px; cursor:pointer; transition:background .15s; }
#qc-fs:hover { background:rgba(0,0,0,.78); }
#qc-now { display:flex; align-items:center; gap:.55rem; margin:1rem 0 .9rem; font-size:.95rem; font-weight:600; color:var(--md-default-fg-color); }
#qc-now .dot { flex:0 0 auto; width:.55rem; height:.55rem; border-radius:50%; background:#e53935; box-shadow:0 0 0 3px rgba(229,57,53,.18); }
#qc-list { display:grid; grid-template-columns:repeat(auto-fill,minmax(225px,1fr)); gap:.6rem; margin:.25rem 0 1.25rem; }
.qc-ep { display:flex; align-items:center; gap:.65rem; padding:.65rem .75rem; border:1px solid var(--md-typeset-table-color,#e3e3e3); border-radius:10px; background:var(--md-default-bg-color); cursor:pointer; transition:border-color .15s, background .15s, transform .15s; }
.qc-ep:hover { border-color:var(--md-primary-fg-color,#5c6bc0); transform:translateY(-1px); }
.qc-ep.active { border-color:var(--md-primary-fg-color,#5c6bc0); background:rgba(92,107,192,.10); }
.qc-ep .num { flex:0 0 auto; width:1.7rem; height:1.7rem; line-height:1.7rem; text-align:center; border-radius:50%; background:var(--md-primary-fg-color,#5c6bc0); color:#fff; font-weight:700; font-size:.85rem; }
.qc-ep.active .num { background:#e53935; }
.qc-ep .meta { flex:1 1 auto; min-width:0; }
.qc-ep .ep-title { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; font-size:.88rem; line-height:1.35; }
.qc-ep .ep-sub { display:block; font-size:.72rem; opacity:.6; margin-top:.15rem; }
.qc-ep .ep-link { flex:0 0 auto; font-size:.76rem; opacity:.75; text-decoration:none; padding-left:.3rem; white-space:nowrap; }
.qc-ep .ep-link:hover { opacity:1; text-decoration:underline; }
@media (max-width:600px){ #qc-list { grid-template-columns:1fr; } }
</style>

<div id="qc-player">
  <button id="qc-fs" type="button" title="全屏播放（iOS 将打开 B站原片）">⛶ 全屏</button>
  <iframe id="qc-iframe" src="https://player.bilibili.com/player.html?bvid=BV1GXhb6EECw&amp;page=1&amp;high_quality=1&amp;danmaku=0" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true" allow="fullscreen; encrypted-media"></iframe>
</div>

<p id="qc-now"><span class="dot"></span><span id="qc-now-text">正在播放：EP01 · 课堂创建：3 分钟搭好你的第一节 AI 课</span></p>

<div id="qc-list">
  <div class="qc-ep active" data-bvid="BV1GXhb6EECw" data-now="EP01 · 课堂创建：3 分钟搭好你的第一节 AI 课" role="button" tabindex="0">
    <span class="num">1</span>
    <span class="meta"><span class="ep-title">课堂创建：3 分钟搭好你的第一节 AI 课</span><span class="ep-sub">EP01 · 创建课堂</span></span>
    <a class="ep-link" href="https://www.bilibili.com/video/BV1GXhb6EECw/" target="_blank" rel="noopener">↗ B站</a>
  </div>
  <div class="qc-ep" data-bvid="BV1GXhb6EEmj" data-now="EP02 · 班级创建与学生登录：一键把学生拉进课堂" role="button" tabindex="0">
    <span class="num">2</span>
    <span class="meta"><span class="ep-title">班级创建与学生登录：一键把学生拉进课堂</span><span class="ep-sub">EP02 · 班级与学生</span></span>
    <a class="ep-link" href="https://www.bilibili.com/video/BV1GXhb6EEmj/" target="_blank" rel="noopener">↗ B站</a>
  </div>
  <div class="qc-ep" data-bvid="BV1GXhb6EEVo" data-now="EP03 · 关联课程与学生上课：让 AI 课真正跑起来" role="button" tabindex="0">
    <span class="num">3</span>
    <span class="meta"><span class="ep-title">关联课程与学生上课：让 AI 课真正跑起来</span><span class="ep-sub">EP03 · 关联课程</span></span>
    <a class="ep-link" href="https://www.bilibili.com/video/BV1GXhb6EEVo/" target="_blank" rel="noopener">↗ B站</a>
  </div>
  <div class="qc-ep" data-bvid="BV1GXhb6EEtA" data-now="EP04 · 知识库 & 图库：给 AI 喂上你的专属教学素材" role="button" tabindex="0">
    <span class="num">4</span>
    <span class="meta"><span class="ep-title">知识库 &amp; 图库：给 AI 喂上你的专属教学素材</span><span class="ep-sub">EP04 · 知识库与图库</span></span>
    <a class="ep-link" href="https://www.bilibili.com/video/BV1GXhb6EEtA/" target="_blank" rel="noopener">↗ B站</a>
  </div>
  <div class="qc-ep" data-bvid="BV1GXhb6EEru" data-now="EP05 · 模板设置与使用：复用一套流程，省下十倍时间" role="button" tabindex="0">
    <span class="num">5</span>
    <span class="meta"><span class="ep-title">模板设置与使用：复用一套流程，省下十倍时间</span><span class="ep-sub">EP05 · 模板设置</span></span>
    <a class="ep-link" href="https://www.bilibili.com/video/BV1GXhb6EEru/" target="_blank" rel="noopener">↗ B站</a>
  </div>
  <div class="qc-ep" data-bvid="BV1GXhb6EEaG" data-now="EP06 · 系统设置使用手册：权限与配置一次搞懂" role="button" tabindex="0">
    <span class="num">6</span>
    <span class="meta"><span class="ep-title">系统设置使用手册：权限与配置一次搞懂</span><span class="ep-sub">EP06 · 系统设置</span></span>
    <a class="ep-link" href="https://www.bilibili.com/video/BV1GXhb6EEaG/" target="_blank" rel="noopener">↗ B站</a>
  </div>
  <div class="qc-ep" data-bvid="BV1GXhb6EEbQ" data-now="EP07 · 课堂数据分析：用数据看清每节课的效果" role="button" tabindex="0">
    <span class="num">7</span>
    <span class="meta"><span class="ep-title">课堂数据分析：用数据看清每节课的效果</span><span class="ep-sub">EP07 · 数据分析</span></span>
    <a class="ep-link" href="https://www.bilibili.com/video/BV1GXhb6EEbQ/" target="_blank" rel="noopener">↗ B站</a>
  </div>
  <div class="qc-ep" data-bvid="BV1XXhb6EEHh" data-now="EP08 · 教研论文 & 课题生成：AI 辅助写完结题材料" role="button" tabindex="0">
    <span class="num">8</span>
    <span class="meta"><span class="ep-title">教研论文 &amp; 课题生成：AI 辅助写完结题材料</span><span class="ep-sub">EP08 · 教研论文</span></span>
    <a class="ep-link" href="https://www.bilibili.com/video/BV1XXhb6EEHh/" target="_blank" rel="noopener">↗ B站</a>
  </div>
</div>

!!! tip "观看说明"
    - 视频托管在 B 站，页面已内嵌官方播放器，**直接点集数即可播放**。
    - **全屏**：播放器右上「⛶ 全屏」按钮（桌面/安卓有效）；iOS 因系统限制不支持网页内全屏，点它会自动打开该集 **B站原片**（移动端播放器有原生全屏）。
    - 弹幕默认关闭（`danmaku=0`），观感更干净；如需弹幕可在播放器内自行开启。
    - 建议按顺序 EP01 → EP08 学习；每集右上「↗ B站」可跳转到原视频（新标签页）。

!!! note "内容覆盖"
    本系列覆盖：课堂创建 → 班级与学生登录 → 关联课程上课 → 知识库与图库 → 模板设置 → 系统设置 → 课堂数据分析 → 教研论文与课题生成。
