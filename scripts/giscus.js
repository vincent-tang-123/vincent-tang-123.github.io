'use strict';

// 在文章页底部注入 Giscus 评论 (https://giscus.app)
// 配置见站点 _config.yml 中的 giscus 字段
hexo.extend.injector.register('body_end', function () {
  const cfg = hexo.config.giscus;
  if (!cfg || !cfg.enable) return '';
  // 仅在 post layout 上注入；用 CSS 选择器限制为有 #post 元素的页面
  return `
<div id="giscus-container" style="max-width:760px;margin:60px auto 80px;padding:0 24px;"></div>
<script>
(function(){
  var post = document.getElementById('post');
  var container = document.getElementById('giscus-container');
  if (!post || !container) { return; }
  var s = document.createElement('script');
  s.src = 'https://giscus.app/client.js';
  s.setAttribute('data-repo', '${cfg.repo || ''}');
  s.setAttribute('data-repo-id', '${cfg.repo_id || ''}');
  s.setAttribute('data-category', '${cfg.category || 'Announcements'}');
  s.setAttribute('data-category-id', '${cfg.category_id || ''}');
  s.setAttribute('data-mapping', '${cfg.mapping || 'pathname'}');
  s.setAttribute('data-strict', '0');
  s.setAttribute('data-reactions-enabled', '1');
  s.setAttribute('data-emit-metadata', '0');
  s.setAttribute('data-input-position', 'top');
  s.setAttribute('data-theme', '${cfg.theme || 'preferred_color_scheme'}');
  s.setAttribute('data-lang', '${cfg.lang || 'zh-CN'}');
  s.setAttribute('data-loading', 'lazy');
  s.crossOrigin = 'anonymous';
  s.async = true;
  container.appendChild(s);
})();
</script>
`;
});
