// QuickClass 视频教程播放列表
// 用事件委托挂在 document 上，兼容 MkDocs Material 的 instant 导航
// （instant 导航通过 AJAX 换页，页面内联 <script> 不会重新执行，故放全局 extra_javascript）
(function () {
  function loadEp(btn) {
    var bvid = btn.getAttribute('data-bvid');
    if (!bvid) return;
    var iframe = document.getElementById('qc-iframe');
    if (iframe) {
      iframe.src = 'https://player.bilibili.com/player.html?bvid=' + bvid +
        '&page=1&high_quality=1&danmaku=0';
    }
    var items = document.querySelectorAll('.qc-ep');
    for (var i = 0; i < items.length; i++) items[i].classList.remove('active');
    btn.classList.add('active');
  }
  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var link = e.target.closest('.ep-link');
    if (link) return; // 让「↗ B站」链接正常在新标签打开
    var btn = e.target.closest('.qc-ep');
    if (btn) { e.preventDefault(); loadEp(btn); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    if (!e.target.closest) return;
    var btn = e.target.closest('.qc-ep');
    if (btn) { e.preventDefault(); loadEp(btn); }
  });
})();
