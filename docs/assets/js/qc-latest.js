// QuickClass 文档站 · 页头右上「最新更新」徽标
// 作用：在所有页面顶部导航栏右侧注入一个 🆕 最新更新 徽标，点击跳转更新记录的「抢先体验版」区块。
// 兼容 MkDocs Material 的 instant 导航：每次换页会重新执行，需先判重避免重复注入。
// ⛔ DO NOT REVERT: 魔搭空间跑的是 dev 抢先体验版（版本号仍 10.22），需常驻提示用户文档有 dev 最新更新。
(function () {
  var TARGET = 'https://quickclass.readthedocs.io/zh-cn/latest/changelog/#dev-latest';
  var TEXT = '🆕 最新更新';

  function inject() {
    if (document.querySelector('.md-header__latest')) return; // 已注入则跳过
    var inner = document.querySelector('.md-header__inner');
    if (!inner) return;
    var badge = document.createElement('a');
    badge.className = 'md-header__latest';
    badge.href = TARGET;
    badge.textContent = TEXT;
    badge.setAttribute('title', 'dev 抢先体验版已更新（10-27）');
    // 插到搜索按钮之前，落在页头右侧
    var search = inner.querySelector('label[for="__search"], .md-search__icon');
    if (search) inner.insertBefore(badge, search);
    else inner.appendChild(badge);
  }

  // 初次加载
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  // instant 导航：DOM 被替换后重跑（Material 换页时 body 内容更新，但 header 通常保留；
  // 为防止极端情况，监听 document 的 DOMNodeInserted 太重，这里用定时器兜底一次）
  document.addEventListener('DOMContentLoaded', function () {
    setTimeout(inject, 50);
  });
  // 兜底：页面 load 后再确认一次
  window.addEventListener('load', function () { setTimeout(inject, 50); });
})();
