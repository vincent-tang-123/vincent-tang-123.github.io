---
title: GitHub AI 开源项目 500 强与商业机会研究
subTitle: 500 个可产品化项目的全景、痛点与机会
date: 2026-07-11 20:26:05
categories:
  - AI
tags:
  - 开源
  - AI
  - 商业机会
  - GitHub
---

<p>基于 2026-07-11 的 GitHub 数据快照，对 5,641 个候选仓库进行筛选，整理出 500 个可产品化 AI 开源项目，并给出商业化规律、十大机会池与三个业务蓝图。</p>

<!-- more -->

<style>
.research-report {
  color-scheme: light;
  --bg: #f5f7fb;
  --paper: #ffffff;
  --ink: #172033;
  --muted: #60708a;
  --line: #dce3ee;
  --accent: #155eef;
  --accent-soft: #edf4ff;
  --code: #f2f5f9;
  --shadow: 0 8px 28px rgba(27, 39, 64, .08);
  color: var(--ink);
  background: var(--bg);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
  line-height: 1.72;
  overflow-wrap: anywhere;
}
.research-report, .research-report * { box-sizing: border-box; }
.research-report .skip-link { position: fixed; left: 1rem; top: -5rem; z-index: 20; padding: .55rem .85rem; color: #fff; background: var(--accent); border-radius: .4rem; }
.research-report .skip-link:focus { top: 1rem; }
.research-report .page-shell { width: min(1680px, calc(100% - 2rem)); margin: 1rem auto 3rem; display: grid; grid-template-columns: minmax(220px, 290px) minmax(0, 1fr); gap: 1.25rem; align-items: start; }
.research-report .toc { position: sticky; top: 1rem; max-height: calc(100vh - 2rem); overflow: auto; background: var(--paper); border: 1px solid var(--line); border-radius: .8rem; box-shadow: var(--shadow); padding: .75rem 1rem; }
.research-report .toc summary { cursor: pointer; font-weight: 700; font-size: 1.05rem; }
.research-report .toc ol { list-style: none; margin: .65rem 0 0; padding: 0; }
.research-report .toc li { margin: .2rem 0; }
.research-report .toc a { display: block; padding: .2rem .3rem; color: var(--muted); text-decoration: none; }
.research-report .toc a:hover, .research-report .toc a:focus { color: var(--accent); background: var(--accent-soft); }
.research-report .toc-level-3 a { padding-left: 1.15rem; font-size: .92rem; }
.research-report .toc-level-4 a { padding-left: 2rem; font-size: .86rem; }
.research-report .report { min-width: 0; padding: clamp(1rem, 3vw, 3rem); background: var(--paper); border: 1px solid var(--line); border-radius: .8rem; box-shadow: var(--shadow); }
.research-report h1, .research-report h2, .research-report h3, .research-report h4 { line-height: 1.3; color: #101828; scroll-margin-top: 1rem; }
.research-report h1 { margin-top: 0; font-size: clamp(1.8rem, 4vw, 3rem); letter-spacing: -.025em; }
.research-report h2 { margin-top: 2.5rem; padding-bottom: .45rem; border-bottom: 2px solid var(--line); }
.research-report h3 { margin-top: 1.8rem; }
.research-report a { color: var(--accent); text-underline-offset: .18em; }
.research-report a[target="_blank"]::after { content: " ↗"; font-size: .72em; }
.research-report p, .research-report li { max-width: 92ch; }
.research-report blockquote { margin: 1rem 0; padding: .7rem 1rem; color: #344054; background: var(--accent-soft); border-left: .3rem solid var(--accent); }
.research-report code { padding: .12rem .32rem; background: var(--code); border-radius: .3rem; font-family: "Cascadia Code", "SFMono-Regular", Consolas, monospace; font-size: .9em; }
.research-report pre { max-width: 100%; overflow: auto; padding: 1rem; background: #111827; color: #e5e7eb; border-radius: .55rem; }
.research-report pre code { padding: 0; color: inherit; background: transparent; }
.research-report .table-wrap { width: 100%; margin: 1.1rem 0; overflow-x: auto; border: 1px solid var(--line); border-radius: .55rem; -webkit-overflow-scrolling: touch; }
.research-report table { width: 100%; min-width: 760px; border-collapse: collapse; font-size: .9rem; }
.research-report th, .research-report td { padding: .58rem .68rem; text-align: left; vertical-align: top; border-bottom: 1px solid var(--line); }
.research-report th { position: sticky; top: 0; z-index: 1; background: #eef3fb; white-space: nowrap; }
.research-report tbody tr:nth-child(even) { background: #fafbfd; }
.research-report tbody tr:hover { background: var(--accent-soft); }
.research-report img { max-width: 100%; height: auto; }
.research-report hr { border: 0; border-top: 1px solid var(--line); margin: 2rem 0; }
@media (max-width: 900px) {
  .research-report .page-shell { width: min(100% - 1rem, 1000px); grid-template-columns: 1fr; }
  .research-report .toc { position: static; max-height: none; }
  .research-report .report { padding: 1rem; }
  .research-report table { font-size: .82rem; }
}
@media print {
  @page { size: A4 landscape; margin: 10mm; }
  .research-report { --bg: #fff; --paper: #fff; --ink: #000; --line: #bbb; font-size: 9.5pt; background: #fff; }
  .research-report .skip-link { display: none; }
  .research-report .page-shell { display: block; width: 100%; margin: 0; }
  .research-report .toc, .research-report .report { border: 0; box-shadow: none; padding: 0; }
  .research-report .toc { position: static; max-height: none; break-after: page; }
  .research-report .toc details { display: block; }
  .research-report .toc summary { list-style: none; }
  .research-report .table-wrap { overflow: visible; border: 0; break-inside: auto; }
  .research-report table { min-width: 0; width: 100%; font-size: 7.2pt; }
  .research-report thead { display: table-header-group; }
  .research-report tr, .research-report img, .research-report blockquote, .research-report pre { break-inside: avoid; }
  .research-report th { position: static; background: #eee !important; }
  .research-report a { color: inherit; text-decoration: none; }
  .research-report a[target="_blank"]::after { content: ""; }
  .research-report h1, .research-report h2, .research-report h3, .research-report h4 { break-after: avoid; }
}
</style>

<div class="research-report">
<a class="skip-link" href="#report-main">跳到正文</a>
  <div class="page-shell">
    <nav class="toc" aria-label="报告目录">
  <details open>
    <summary>目录</summary>
    <ol><li class="toc-level-2"><a href="#一-结论摘要">一、结论摘要</a></li>
<li class="toc-level-2"><a href="#二-数据方法-排名与局限">二、数据方法、排名与局限</a></li>
<li class="toc-level-3"><a href="#2-1-候选与筛选">2.1 候选与筛选</a></li>
<li class="toc-level-3"><a href="#2-2-综合热度">2.2 综合热度</a></li>
<li class="toc-level-3"><a href="#2-3-诚实边界">2.3 诚实边界</a></li>
<li class="toc-level-2"><a href="#三-500-项业务地图">三、500 项业务地图</a></li>
<li class="toc-level-3"><a href="#3-1-业务类别">3.1 业务类别</a></li>
<li class="toc-level-3"><a href="#3-2-产品形态">3.2 产品形态</a></li>
<li class="toc-level-3"><a href="#3-3-主要开发语言-前-12">3.3 主要开发语言（前 12）</a></li>
<li class="toc-level-3"><a href="#3-4-业务含义">3.4 业务含义</a></li>
<li class="toc-level-2"><a href="#四-痛点-商业化与许可证">四、痛点、商业化与许可证</a></li>
<li class="toc-level-3"><a href="#4-1-主要痛点分布">4.1 主要痛点分布</a></li>
<li class="toc-level-3"><a href="#4-2-业务类别-主要痛点">4.2 业务类别 × 主要痛点</a></li>
<li class="toc-level-3"><a href="#4-3-readme-商业化信号">4.3 README 商业化信号</a></li>
<li class="toc-level-3"><a href="#4-4-github-元数据许可证初筛">4.4 GitHub 元数据许可证初筛</a></li>
<li class="toc-level-3"><a href="#4-5-商业化规律">4.5 商业化规律</a></li>
<li class="toc-level-2"><a href="#五-20-个代表项目一手核验">五、20 个代表项目一手核验</a></li>
<li class="toc-level-3"><a href="#横向结论">横向结论</a></li>
<li class="toc-level-2"><a href="#六-十大可进入机会池">六、十大可进入机会池</a></li>
<li class="toc-level-2"><a href="#七-三个业务蓝图与主推荐">七、三个业务蓝图与主推荐</a></li>
<li class="toc-level-3"><a href="#主推荐-a-制造业询价单结构化与报价准备助手">主推荐 A：制造业询价单结构化与报价准备助手</a></li>
<li class="toc-level-3"><a href="#备选-b-投标文件合规矩阵与资质证据映射">备选 B：投标文件合规矩阵与资质证据映射</a></li>
<li class="toc-level-3"><a href="#备选-c-设备-软件售后工单回复助手">备选 C：设备/软件售后工单回复助手</a></li>
<li class="toc-level-3"><a href="#主推荐的-12-周发布路线">主推荐的 12 周发布路线</a></li>
<li class="toc-level-2"><a href="#八-持续发展纪律与核心指标">八、持续发展纪律与核心指标</a></li>
<li class="toc-level-2"><a href="#附录-a-500-项完整索引">附录 A：500 项完整索引</a></li>
<li class="toc-level-2"><a href="#附录-b-高于最终阈值但被排除的候选">附录 B：高于最终阈值但被排除的候选</a></li>
<li class="toc-level-2"><a href="#附录-c-审计说明">附录 C：审计说明</a></li></ol>
  </details>
</nav>
    <section class="report" id="report-main">
<blockquote>
<p>数据快照：2026-07-11T12:18:27.032290+00:00<br />
样本：5641 个候选、2656 个合格仓库、最终 500 个唯一 GitHub 仓库<br />
排名版本：综合热度 v1；数据 SHA-256：<code>3f29801e01539785856bfabb138d33da11659df35a6de405a81b11a3b41ae2bb</code><br />
研究对象：公开、非 Fork、未归档、AI 为核心且具有可运行交付物的模型、框架、平台或应用</p>
</blockquote>
<h2 id="一-结论摘要">一、结论摘要</h2>
<ol>
<li><strong>技术供给明显拥挤在 Agent与RAG 与 开发者工具。</strong> 两类分别有 115 项（23.0%）和 115 项（23.0%），合计 46.0%。直接复制通用 Agent、聊天 UI 或基础模型，很难形成小团队差异化。</li>
<li><strong>企业愿意购买的是“最后一公里”，不是仓库本身。</strong> 500 项中有 68 项出现云、企业版、商业支持或 API 计费信号；20 个一手核验案例反复把 SSO/RBAC/审计、托管/BYOC、评测、连接器、SLA 和支持放在付费层。</li>
<li><strong>许可证是产品边界，而不是脚注。</strong> GitHub 元数据层只有 368 项（73.6%）可直接识别为宽松 OSI 许可，108 项在自动初筛中属于高风险或待核验。Dify、Open WebUI、Phoenix 等案例明确证明“源码可见”不等于可白标、做多租户或提供同类托管。</li>
<li><strong>维护活跃度较高，但不能等同于商业需求。</strong> 最近 30/90/365 天有代码 Push 的项目分别为 427/463/494 项。Stars、Forks 和活跃度代表开发者注意力；付费意愿必须另用工作流频率、节时、错误成本和预算人验证。</li>
<li><strong>定制后的主推荐是“制造业询价单结构化与报价准备助手”。</strong> 它能在不接 ERP 的前提下形成完整结果，错误可在人审前暴露，价值可用处理时间和返工衡量，也能用目录别名、单位规则和纠错评测集形成复利资产。</li>
</ol>
<h2 id="二-数据方法-排名与局限">二、数据方法、排名与局限</h2>
<h3 id="2-1-候选与筛选">2.1 候选与筛选</h3>
<ul>
<li>使用 <a href="https://docs.github.com/en/rest/search/search" target="_blank" rel="noopener noreferrer">GitHub Search API</a>，固定 19 个 Topic 与 8 个中英文关键词；每个种子先读取完整 1,000 条窗口，命中数超过 1,000 时按榜尾 Stars 递归拆成不超过 1,000 条的闭区间，再按不可变仓库 ID 去重。</li>
<li>初始门槛为 <code>stars &gt;= 1000</code>。候选共 5641 个；README 和元数据筛选后 2656 个合格，取综合热度前 500。</li>
<li>排除纯课程、书/笔记、Awesome/资源列表、论文复现、静态提示词/数据集合、概念 Demo、通用工具的可选 AI 插件，以及缺少可运行证据的仓库。</li>
<li>所有请求缓存并断点续跑；匿名 API 串行限速，遵循 GitHub 的<a href="https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api?apiVersion=2022-11-28" target="_blank" rel="noopener noreferrer">限流最佳实践</a>。</li>
</ul>
<h3 id="2-2-综合热度">2.2 综合热度</h3>
<p><code>Heat = 100 × [0.55×Pct(log(1+Stars)) + 0.15×Pct(log(1+Forks)) + 0.15×Pct(log(1+Stars/项目年龄年)) + 0.15×exp(-距最后Push天数/180)]</code></p>
<ul>
<li><code>Pct</code> 是合格候选池中的分位数；项目年龄最少按 0.25 年计，避免刚创建仓库速度无限放大。</li>
<li>同时保留纯 Stars 排名。生命周期 Stars/年只是采用速度代理，不冒充 30/90 天真实增星。</li>
<li>最终第 500 名综合热度为 78.40；共有 302 个得分不低于该阈值但因资格规则被排除，详见附录 B。</li>
</ul>
<h3 id="2-3-诚实边界">2.3 诚实边界</h3>
<ul>
<li>这是固定 Topic/关键词和 <code>stars &gt;= 1000</code> 的可复现搜索窗口；Stars 区间拆分避免单查询 1,000 条上限，但仍不保证覆盖未打标签、描述模糊、搜索索引延迟或 GitHub 返回不完整的仓库。</li>
<li>Topic 由维护者自标；Stars 受项目年龄、传播、品牌和异常增长影响。GitHub 数据不能替代客户访谈、合同、收入或留存数据。</li>
<li>最终 500 项的纳入资格、业务类别、目标客户、核心任务、解决机制和主痛点均经过 README 人工复核；后四项仍属于研究者分析判断，不是项目方自述事实。商业收费只在 20 个代表案例中做了一手深核验。</li>
<li>许可证自动分类只用于机会初筛，不是法律意见；模型权重、数据、插件和企业目录可能采用不同许可证。</li>
</ul>
<h2 id="三-500-项业务地图">三、500 项业务地图</h2>
<h3 id="3-1-业务类别">3.1 业务类别</h3>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>业务类别</th>
<th style="text-align:right">项目数</th>
<th style="text-align:right">占比</th>
</tr>
</thead>
<tbody>
<tr>
<td>Agent与RAG</td>
<td style="text-align:right">115</td>
<td style="text-align:right">23.0%</td>
</tr>
<tr>
<td>开发者工具</td>
<td style="text-align:right">115</td>
<td style="text-align:right">23.0%</td>
</tr>
<tr>
<td>模型与训练</td>
<td style="text-align:right">77</td>
<td style="text-align:right">15.4%</td>
</tr>
<tr>
<td>企业效率</td>
<td style="text-align:right">49</td>
<td style="text-align:right">9.8%</td>
</tr>
<tr>
<td>内容生成</td>
<td style="text-align:right">39</td>
<td style="text-align:right">7.8%</td>
</tr>
<tr>
<td>推理部署</td>
<td style="text-align:right">36</td>
<td style="text-align:right">7.2%</td>
</tr>
<tr>
<td>垂直行业应用</td>
<td style="text-align:right">28</td>
<td style="text-align:right">5.6%</td>
</tr>
<tr>
<td>数据与MLOps</td>
<td style="text-align:right">27</td>
<td style="text-align:right">5.4%</td>
</tr>
<tr>
<td>安全评测治理</td>
<td style="text-align:right">10</td>
<td style="text-align:right">2.0%</td>
</tr>
<tr>
<td>机器人与边缘</td>
<td style="text-align:right">4</td>
<td style="text-align:right">0.8%</td>
</tr>
</tbody>
</table></div>
<h3 id="3-2-产品形态">3.2 产品形态</h3>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>产品形态</th>
<th style="text-align:right">项目数</th>
<th style="text-align:right">占比</th>
</tr>
</thead>
<tbody>
<tr>
<td>终端应用</td>
<td style="text-align:right">186</td>
<td style="text-align:right">37.2%</td>
</tr>
<tr>
<td>自托管平台</td>
<td style="text-align:right">165</td>
<td style="text-align:right">33.0%</td>
</tr>
<tr>
<td>API服务</td>
<td style="text-align:right">64</td>
<td style="text-align:right">12.8%</td>
</tr>
<tr>
<td>开发库/框架</td>
<td style="text-align:right">60</td>
<td style="text-align:right">12.0%</td>
</tr>
<tr>
<td>模型/权重</td>
<td style="text-align:right">17</td>
<td style="text-align:right">3.4%</td>
</tr>
<tr>
<td>命令行工具</td>
<td style="text-align:right">8</td>
<td style="text-align:right">1.6%</td>
</tr>
</tbody>
</table></div>
<h3 id="3-3-主要开发语言-前-12">3.3 主要开发语言（前 12）</h3>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>语言</th>
<th style="text-align:right">项目数</th>
<th style="text-align:right">占比</th>
</tr>
</thead>
<tbody>
<tr>
<td>Python</td>
<td style="text-align:right">247</td>
<td style="text-align:right">49.4%</td>
</tr>
<tr>
<td>TypeScript</td>
<td style="text-align:right">113</td>
<td style="text-align:right">22.6%</td>
</tr>
<tr>
<td>Rust</td>
<td style="text-align:right">30</td>
<td style="text-align:right">6.0%</td>
</tr>
<tr>
<td>Go</td>
<td style="text-align:right">23</td>
<td style="text-align:right">4.6%</td>
</tr>
<tr>
<td>JavaScript</td>
<td style="text-align:right">22</td>
<td style="text-align:right">4.4%</td>
</tr>
<tr>
<td>C++</td>
<td style="text-align:right">20</td>
<td style="text-align:right">4.0%</td>
</tr>
<tr>
<td>Jupyter Notebook</td>
<td style="text-align:right">12</td>
<td style="text-align:right">2.4%</td>
</tr>
<tr>
<td>Java</td>
<td style="text-align:right">9</td>
<td style="text-align:right">1.8%</td>
</tr>
<tr>
<td>HTML</td>
<td style="text-align:right">6</td>
<td style="text-align:right">1.2%</td>
</tr>
<tr>
<td>C#</td>
<td style="text-align:right">6</td>
<td style="text-align:right">1.2%</td>
</tr>
<tr>
<td>Shell</td>
<td style="text-align:right">3</td>
<td style="text-align:right">0.6%</td>
</tr>
<tr>
<td>未知</td>
<td style="text-align:right">2</td>
<td style="text-align:right">0.4%</td>
</tr>
</tbody>
</table></div>
<h3 id="3-4-业务含义">3.4 业务含义</h3>
<ul>
<li>Agent/RAG 与模型/训练的数量高，说明组件和平台选择已经充足；小团队再做横向编排层，获客、生态和可靠性投入会远大于编码本身。</li>
<li>企业效率、垂直应用和安全治理数量较少不代表市场更小，而是 GitHub 更偏开发者供给。真正适合中国中小企业的机会通常在“非结构化输入—业务规则—可审结果—系统落地”之间。</li>
<li>推理、解析、OCR、向量检索、观测和评测的成熟开源供给，使窄工作流产品无需训练基础模型；可把有限预算用于客户样本、回归评测、权限和交付体验。</li>
</ul>
<h2 id="四-痛点-商业化与许可证">四、痛点、商业化与许可证</h2>
<h3 id="4-1-主要痛点分布">4.1 主要痛点分布</h3>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>主要痛点</th>
<th style="text-align:right">项目数</th>
<th style="text-align:right">占比</th>
</tr>
</thead>
<tbody>
<tr>
<td>专业门槛</td>
<td style="text-align:right">101</td>
<td style="text-align:right">20.2%</td>
</tr>
<tr>
<td>系统集成与锁定</td>
<td style="text-align:right">79</td>
<td style="text-align:right">15.8%</td>
</tr>
<tr>
<td>流程效率</td>
<td style="text-align:right">78</td>
<td style="text-align:right">15.6%</td>
</tr>
<tr>
<td>成本与延迟</td>
<td style="text-align:right">62</td>
<td style="text-align:right">12.4%</td>
</tr>
<tr>
<td>数据准备与碎片</td>
<td style="text-align:right">61</td>
<td style="text-align:right">12.2%</td>
</tr>
<tr>
<td>部署与运维</td>
<td style="text-align:right">31</td>
<td style="text-align:right">6.2%</td>
</tr>
<tr>
<td>幻觉与可靠性</td>
<td style="text-align:right">27</td>
<td style="text-align:right">5.4%</td>
</tr>
<tr>
<td>隐私与合规</td>
<td style="text-align:right">24</td>
<td style="text-align:right">4.8%</td>
</tr>
<tr>
<td>安全治理</td>
<td style="text-align:right">17</td>
<td style="text-align:right">3.4%</td>
</tr>
<tr>
<td>评测与观测</td>
<td style="text-align:right">12</td>
<td style="text-align:right">2.4%</td>
</tr>
<tr>
<td>数据治理与实验复现</td>
<td style="text-align:right">8</td>
<td style="text-align:right">1.6%</td>
</tr>
</tbody>
</table></div>
<h3 id="4-2-业务类别-主要痛点">4.2 业务类别 × 主要痛点</h3>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>业务类别</th>
<th style="text-align:right">专业门槛</th>
<th style="text-align:right">系统集成与锁定</th>
<th style="text-align:right">流程效率</th>
<th style="text-align:right">成本与延迟</th>
<th style="text-align:right">数据准备与碎片</th>
<th style="text-align:right">部署与运维</th>
<th style="text-align:right">幻觉与可靠性</th>
<th style="text-align:right">隐私与合规</th>
<th style="text-align:right">安全治理</th>
<th style="text-align:right">评测与观测</th>
<th style="text-align:right">数据治理与实验复现</th>
</tr>
</thead>
<tbody>
<tr>
<td>Agent与RAG</td>
<td style="text-align:right">15</td>
<td style="text-align:right">34</td>
<td style="text-align:right">8</td>
<td style="text-align:right">4</td>
<td style="text-align:right">18</td>
<td style="text-align:right">8</td>
<td style="text-align:right">15</td>
<td style="text-align:right">7</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
<td style="text-align:right">0</td>
</tr>
<tr>
<td>开发者工具</td>
<td style="text-align:right">20</td>
<td style="text-align:right">28</td>
<td style="text-align:right">26</td>
<td style="text-align:right">13</td>
<td style="text-align:right">12</td>
<td style="text-align:right">4</td>
<td style="text-align:right">6</td>
<td style="text-align:right">2</td>
<td style="text-align:right">4</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
</tr>
<tr>
<td>模型与训练</td>
<td style="text-align:right">41</td>
<td style="text-align:right">5</td>
<td style="text-align:right">1</td>
<td style="text-align:right">17</td>
<td style="text-align:right">4</td>
<td style="text-align:right">4</td>
<td style="text-align:right">1</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">1</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>企业效率</td>
<td style="text-align:right">8</td>
<td style="text-align:right">4</td>
<td style="text-align:right">10</td>
<td style="text-align:right">0</td>
<td style="text-align:right">13</td>
<td style="text-align:right">1</td>
<td style="text-align:right">3</td>
<td style="text-align:right">10</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
</tr>
<tr>
<td>内容生成</td>
<td style="text-align:right">10</td>
<td style="text-align:right">4</td>
<td style="text-align:right">22</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">1</td>
<td style="text-align:right">0</td>
<td style="text-align:right">2</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
</tr>
<tr>
<td>推理部署</td>
<td style="text-align:right">1</td>
<td style="text-align:right">3</td>
<td style="text-align:right">0</td>
<td style="text-align:right">19</td>
<td style="text-align:right">0</td>
<td style="text-align:right">10</td>
<td style="text-align:right">1</td>
<td style="text-align:right">2</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
</tr>
<tr>
<td>垂直行业应用</td>
<td style="text-align:right">5</td>
<td style="text-align:right">0</td>
<td style="text-align:right">10</td>
<td style="text-align:right">0</td>
<td style="text-align:right">4</td>
<td style="text-align:right">0</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">5</td>
<td style="text-align:right">0</td>
<td style="text-align:right">2</td>
</tr>
<tr>
<td>数据与MLOps</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">7</td>
<td style="text-align:right">9</td>
<td style="text-align:right">2</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">3</td>
<td style="text-align:right">3</td>
</tr>
<tr>
<td>安全评测治理</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">5</td>
<td style="text-align:right">5</td>
<td style="text-align:right">0</td>
</tr>
<tr>
<td>机器人与边缘</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">2</td>
<td style="text-align:right">1</td>
<td style="text-align:right">1</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
<td style="text-align:right">0</td>
</tr>
</tbody>
</table></div>
<blockquote>
<p>该矩阵按项目机制映射主痛点，反映开源供给的价值主张，不是企业客户问卷。</p>
</blockquote>
<h3 id="4-3-readme-商业化信号">4.3 README 商业化信号</h3>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>信号</th>
<th style="text-align:right">项目数</th>
<th style="text-align:right">占比</th>
</tr>
</thead>
<tbody>
<tr>
<td>未发现明确商业化</td>
<td style="text-align:right">421</td>
<td style="text-align:right">84.2%</td>
</tr>
<tr>
<td>托管SaaS/企业版</td>
<td style="text-align:right">43</td>
<td style="text-align:right">8.6%</td>
</tr>
<tr>
<td>API/用量计费</td>
<td style="text-align:right">19</td>
<td style="text-align:right">3.8%</td>
</tr>
<tr>
<td>赞助/捐赠</td>
<td style="text-align:right">11</td>
<td style="text-align:right">2.2%</td>
</tr>
<tr>
<td>商业支持/实施</td>
<td style="text-align:right">6</td>
<td style="text-align:right">1.2%</td>
</tr>
</tbody>
</table></div>
<h3 id="4-4-github-元数据许可证初筛">4.4 GitHub 元数据许可证初筛</h3>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>许可证类别</th>
<th style="text-align:right">项目数</th>
<th style="text-align:right">占比</th>
</tr>
</thead>
<tbody>
<tr>
<td>OSI宽松许可</td>
<td style="text-align:right">368</td>
<td style="text-align:right">73.6%</td>
</tr>
<tr>
<td>未知/自定义</td>
<td style="text-align:right">80</td>
<td style="text-align:right">16.0%</td>
</tr>
<tr>
<td>强Copyleft</td>
<td style="text-align:right">49</td>
<td style="text-align:right">9.8%</td>
</tr>
<tr>
<td>其他许可</td>
<td style="text-align:right">2</td>
<td style="text-align:right">0.4%</td>
</tr>
<tr>
<td>弱Copyleft</td>
<td style="text-align:right">1</td>
<td style="text-align:right">0.2%</td>
</tr>
</tbody>
</table></div>
<h3 id="4-5-商业化规律">4.5 商业化规律</h3>
<ul>
<li><strong>最常见路径</strong>：宽松许可核心负责获客，托管、用量、团队协作、SSO/RBAC、审计、私有化、SLA 和支持负责收费。</li>
<li><strong>高风险路径</strong>：Fork 后换 Logo、直接做多租户托管、把带专有 EE 目录的仓库整体打包，或默认根 LICENSE 覆盖模型权重/数据。</li>
<li><strong>可持续路径</strong>：把通用组件藏在产品内部，付费对象是完整业务结果、可追溯证据、稳定上线和持续评测；同时保留至少一个宽松许可上游替代。</li>
</ul>
<h2 id="五-20-个代表项目一手核验">五、20 个代表项目一手核验</h2>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>赛道</th>
<th>项目</th>
<th>核验后的业务与痛点</th>
<th>商业模式 / 一手证据</th>
<th>许可证及关键风险</th>
</tr>
</thead>
<tbody>
<tr>
<td>Agent/RAG</td>
<td><a href="https://github.com/langchain-ai/langchain" target="_blank" rel="noopener noreferrer">LangChain</a></td>
<td>Agent/LLM 编排；解决模型、工具、观测和评测分散</td>
<td>开源获客 + <a href="https://www.langchain.com/pricing" target="_blank" rel="noopener noreferrer">LangSmith 订阅/用量费</a></td>
<td>MIT；商业服务另行计费</td>
</tr>
<tr>
<td>文档RAG</td>
<td><a href="https://github.com/run-llama/llama_index" target="_blank" rel="noopener noreferrer">LlamaIndex</a></td>
<td>文档摄取、解析、索引和文档 Agent；解决复杂 PDF/表格管道搭建慢</td>
<td>开源框架 + <a href="https://www.llamaindex.ai/pricing" target="_blank" rel="noopener noreferrer">LlamaParse/LlamaCloud</a></td>
<td>MIT；LlamaParse 是独立商业平台</td>
</tr>
<tr>
<td>Agent/RAG</td>
<td><a href="https://github.com/langgenius/dify" target="_blank" rel="noopener noreferrer">Dify</a></td>
<td>低代码 Agent、RAG、工作流和发布平台</td>
<td><a href="https://dify.ai/pricing" target="_blank" rel="noopener noreferrer">Cloud 订阅 + Enterprise</a></td>
<td><a href="https://github.com/langgenius/dify/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">修改版 Apache</a>；未经许可不得运营多租户环境或随意去品牌</td>
</tr>
<tr>
<td>Agent/RAG</td>
<td><a href="https://github.com/FlowiseAI/Flowise" target="_blank" rel="noopener noreferrer">Flowise</a></td>
<td>可视化 Agent、Chatflow、RAG、评测和人审</td>
<td><a href="https://flowiseai.com/" target="_blank" rel="noopener noreferrer">Cloud + Enterprise</a></td>
<td><a href="https://github.com/FlowiseAI/Flowise/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer">核心 Apache-2.0、enterprise 目录商业许可</a></td>
</tr>
<tr>
<td>Agent</td>
<td><a href="https://github.com/crewAIInc/crewAI" target="_blank" rel="noopener noreferrer">CrewAI</a></td>
<td>多 Agent 工作流、部署和监控</td>
<td>开源框架 + <a href="https://crewai.com/pricing" target="_blank" rel="noopener noreferrer">AMP/Enterprise</a></td>
<td>MIT；治理和企业连接器位于商业层</td>
</tr>
<tr>
<td>Agent/RAG</td>
<td><a href="https://github.com/deepset-ai/haystack" target="_blank" rel="noopener noreferrer">Haystack</a></td>
<td>RAG、检索和 Agent Pipeline</td>
<td>Apache 框架 + <a href="https://www.deepset.ai/pricing" target="_blank" rel="noopener noreferrer">deepset Enterprise</a></td>
<td>Apache-2.0，代码风险较低</td>
</tr>
<tr>
<td>企业效率</td>
<td><a href="https://github.com/open-webui/open-webui" target="_blank" rel="noopener noreferrer">Open WebUI</a></td>
<td>自托管多模型工作台；解决隐私、锁定和入口分散</td>
<td>企业授权、支持和白标收费</td>
<td><a href="https://docs.openwebui.com/license/" target="_blank" rel="noopener noreferrer">v0.6.6+ 非 OSI 且有品牌限制</a></td>
</tr>
<tr>
<td>文档RAG</td>
<td><a href="https://github.com/infiniflow/ragflow" target="_blank" rel="noopener noreferrer">RAGFlow</a></td>
<td>文档 ETL、混合检索、重排和 Agent 编排</td>
<td><a href="https://ragflow.io/" target="_blank" rel="noopener noreferrer">Cloud 订阅 + 私有化</a></td>
<td>Apache-2.0；模型、OCR 和连接器另核验</td>
</tr>
<tr>
<td>推理</td>
<td><a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">vLLM</a></td>
<td>高吞吐、显存高效的模型推理引擎</td>
<td>官方无一方 SaaS，生态参与者提供托管与支持</td>
<td>Apache-2.0；模型权重许可独立</td>
</tr>
<tr>
<td>推理</td>
<td><a href="https://github.com/ollama/ollama" target="_blank" rel="noopener noreferrer">Ollama</a></td>
<td>本地/云端开放模型运行时</td>
<td>本地免费 + <a href="https://ollama.com/pricing" target="_blank" rel="noopener noreferrer">Pro/Max/Team</a></td>
<td>MIT；每个模型权重仍需单独核验</td>
</tr>
<tr>
<td>推理</td>
<td><a href="https://github.com/bentoml/BentoML" target="_blank" rel="noopener noreferrer">BentoML</a></td>
<td>模型打包、部署、扩缩容和推理优化</td>
<td><a href="https://www.bentoml.com/pricing" target="_blank" rel="noopener noreferrer">云端按量 + Enterprise/BYOC</a></td>
<td>Apache-2.0</td>
</tr>
<tr>
<td>MLOps</td>
<td><a href="https://github.com/mlflow/mlflow" target="_blank" rel="noopener noreferrer">MLflow</a></td>
<td>实验、注册、评测、观测和治理</td>
<td>OSS + <a href="https://docs.databricks.com/aws/en/mlflow3/genai/overview/oss-managed-diff" target="_blank" rel="noopener noreferrer">Databricks Managed MLflow</a></td>
<td>Apache-2.0</td>
</tr>
<tr>
<td>LLMOps</td>
<td><a href="https://github.com/langfuse/langfuse" target="_blank" rel="noopener noreferrer">Langfuse</a></td>
<td>Trace、评测、提示词、数据集和实验</td>
<td><a href="https://langfuse.com/pricing" target="_blank" rel="noopener noreferrer">Cloud 订阅 + Enterprise</a></td>
<td><a href="https://github.com/langfuse/langfuse/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">核心 MIT、EE 目录专有</a></td>
</tr>
<tr>
<td>数据/MLOps</td>
<td><a href="https://github.com/HumanSignal/label-studio" target="_blank" rel="noopener noreferrer">Label Studio</a></td>
<td>多模态标注、人工评测和质检</td>
<td><a href="https://humansignal.com/pricing" target="_blank" rel="noopener noreferrer">Community + Cloud/Enterprise</a></td>
<td>Community Apache-2.0；企业镜像另授权</td>
</tr>
<tr>
<td>开发工具</td>
<td><a href="https://github.com/continuedev/continue" target="_blank" rel="noopener noreferrer">Continue</a></td>
<td>AI PR 检查、CLI 和规则化工程治理</td>
<td><a href="https://www.continue.dev/" target="_blank" rel="noopener noreferrer">官网公告被 Cursor 收购</a>；战略收购案例</td>
<td>Apache-2.0；收购后路线和维护连续性是主要风险</td>
</tr>
<tr>
<td>开发工具</td>
<td><a href="https://github.com/TabbyML/tabby" target="_blank" rel="noopener noreferrer">Tabby</a></td>
<td>自托管代码补全、问答和团队上下文</td>
<td><a href="https://www.tabbyml.com/pricing" target="_blank" rel="noopener noreferrer">Team/Enterprise</a></td>
<td><a href="https://github.com/TabbyML/tabby/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">核心 Apache-2.0、EE 专有</a></td>
</tr>
<tr>
<td>内容生成</td>
<td><a href="https://github.com/Comfy-Org/ComfyUI" target="_blank" rel="noopener noreferrer">ComfyUI</a></td>
<td>节点式图像、视频、音频和 3D 工作流</td>
<td>本地 OSS + <a href="https://docs.comfy.org/get_started/cloud" target="_blank" rel="noopener noreferrer">Comfy Cloud/算力信用点</a></td>
<td>GPL-3.0；节点和模型许可高度碎片化</td>
</tr>
<tr>
<td>内容生成</td>
<td><a href="https://github.com/invoke-ai/InvokeAI" target="_blank" rel="noopener noreferrer">InvokeAI</a></td>
<td>本地专业图像生成和图层/节点工作流</td>
<td><a href="https://invoke.ai/" target="_blank" rel="noopener noreferrer">官方说明</a>托管已关闭，团队加入 Adobe，OSS 由社区继续</td>
<td>Apache-2.0；商业主体退出和维护连续性风险</td>
</tr>
<tr>
<td>安全评测</td>
<td><a href="https://github.com/promptfoo/promptfoo" target="_blank" rel="noopener noreferrer">Promptfoo</a></td>
<td>LLM/Agent 评测、回归、红队和 CI</td>
<td><a href="https://www.promptfoo.dev/pricing/" target="_blank" rel="noopener noreferrer">Community + Enterprise/On-Prem</a></td>
<td>MIT；高级企业能力另收费</td>
</tr>
<tr>
<td>观测评测</td>
<td><a href="https://github.com/Arize-ai/phoenix" target="_blank" rel="noopener noreferrer">Arize Phoenix</a></td>
<td>Agent/LLM Trace、评测和故障排查</td>
<td>Phoenix + <a href="https://arize.com/pricing/" target="_blank" rel="noopener noreferrer">Arize AX SaaS</a></td>
<td><a href="https://github.com/Arize-ai/phoenix/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Elastic License 2.0</a>，禁止把主要功能作为第三方托管服务</td>
</tr>
</tbody>
</table></div>
<h3 id="横向结论">横向结论</h3>
<ul>
<li>20 项中有 17 项存在活跃的一方付费路径，主要是托管/按量、企业治理、私有化和支持，而不是售卖开源代码本身。</li>
<li>Flowise、Langfuse、Tabby 是“宽松核心 + 专有企业目录”；Dify、Open WebUI、Phoenix 则显示托管、白标或多租户存在明确边界。</li>
<li>vLLM 是中立基础设施案例；Continue 被收购、Invoke 托管关闭则说明高 Stars 不保证独立 SaaS 的持续性，上游连续性和替代方案必须进入硬门槛。</li>
</ul>
<h2 id="六-十大可进入机会池">六、十大可进入机会池</h2>
<p>这组分数是结合 500 项技术供给与用户资源约束形成的<strong>专家先验</strong>，不是客户需求调查。每列直接按表头权重计分：0 分表示不成立，半分值表示只有合理假设，满分表示已有客户、样本或可复现实证；分差 3 分以内视为同一梯队。用户尚未提供行业人脉，直销分是“前两周能接触目标客户”的条件分；具体依赖、模型权重和商业 API 条款尚未形成版本化清单，因此许可证列暂不打满分。</p>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th style="text-align:right">排名</th>
<th>机会池</th>
<th style="text-align:right">痛点</th>
<th style="text-align:right">ROI</th>
<th style="text-align:right">直销</th>
<th style="text-align:right">12周交付</th>
<th style="text-align:right">复制</th>
<th style="text-align:right">留存</th>
<th style="text-align:right">壁垒</th>
<th style="text-align:right">许可</th>
<th style="text-align:right">总分</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">1</td>
<td>制造业询价单结构化、缺项检查与报价草案</td>
<td style="text-align:right">18</td>
<td style="text-align:right">13</td>
<td style="text-align:right">12</td>
<td style="text-align:right">13</td>
<td style="text-align:right">9</td>
<td style="text-align:right">9</td>
<td style="text-align:right">7</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>84</strong></td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td>投标文件合规矩阵与资质证据映射</td>
<td style="text-align:right">18</td>
<td style="text-align:right">13</td>
<td style="text-align:right">12</td>
<td style="text-align:right">12</td>
<td style="text-align:right">9</td>
<td style="text-align:right">8</td>
<td style="text-align:right">7</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>82</strong></td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td>设备/软件售后工单诊断与回复草案</td>
<td style="text-align:right">17</td>
<td style="text-align:right">13</td>
<td style="text-align:right">10</td>
<td style="text-align:right">12</td>
<td style="text-align:right">8</td>
<td style="text-align:right">10</td>
<td style="text-align:right">8</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>81</strong></td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td>供应商资质完整性、归档与到期提醒</td>
<td style="text-align:right">16</td>
<td style="text-align:right">11</td>
<td style="text-align:right">12</td>
<td style="text-align:right">13</td>
<td style="text-align:right">9</td>
<td style="text-align:right">9</td>
<td style="text-align:right">7</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>80</strong></td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td>合同—订单—出货单履约要素一致性核对</td>
<td style="text-align:right">17</td>
<td style="text-align:right">12</td>
<td style="text-align:right">12</td>
<td style="text-align:right">13</td>
<td style="text-align:right">9</td>
<td style="text-align:right">7</td>
<td style="text-align:right">6</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>79</strong></td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td>现场质检/巡检记录转标准报告</td>
<td style="text-align:right">15</td>
<td style="text-align:right">11</td>
<td style="text-align:right">11</td>
<td style="text-align:right">13</td>
<td style="text-align:right">9</td>
<td style="text-align:right">8</td>
<td style="text-align:right">7</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>77</strong></td>
</tr>
<tr>
<td style="text-align:right">7</td>
<td>客服会话批量质检与规则违规定位</td>
<td style="text-align:right">15</td>
<td style="text-align:right">11</td>
<td style="text-align:right">10</td>
<td style="text-align:right">12</td>
<td style="text-align:right">9</td>
<td style="text-align:right">9</td>
<td style="text-align:right">7</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>76</strong></td>
</tr>
<tr>
<td style="text-align:right">8</td>
<td>SOP 受控问答与版本变更影响分析</td>
<td style="text-align:right">15</td>
<td style="text-align:right">10</td>
<td style="text-align:right">10</td>
<td style="text-align:right">11</td>
<td style="text-align:right">8</td>
<td style="text-align:right">9</td>
<td style="text-align:right">8</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>74</strong></td>
</tr>
<tr>
<td style="text-align:right">9</td>
<td>跨境产品资料翻译与术语一致性检查</td>
<td style="text-align:right">14</td>
<td style="text-align:right">11</td>
<td style="text-align:right">12</td>
<td style="text-align:right">13</td>
<td style="text-align:right">9</td>
<td style="text-align:right">7</td>
<td style="text-align:right">4</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>73</strong></td>
</tr>
<tr>
<td style="text-align:right">10</td>
<td>销售会议/聊天记录转 CRM 导入表和跟进清单</td>
<td style="text-align:right">14</td>
<td style="text-align:right">11</td>
<td style="text-align:right">11</td>
<td style="text-align:right">11</td>
<td style="text-align:right">8</td>
<td style="text-align:right">8</td>
<td style="text-align:right">5</td>
<td style="text-align:right">3</td>
<td style="text-align:right"><strong>71</strong></td>
</tr>
</tbody>
</table></div>
<p>硬门槛不参与加分，任一不满足即剔除：单次 12 周、现金不超过 10 万元、合计至少 20 人时/周且总工程投入不超过 240 人时、不训练基础模型或依赖独占数据、只有一个窄工作流、客户业务系统集成不超过两个、收到合规配置包后主动上线工时不超过 4 小时，并有可商用上游及替代。模型 API、对象存储等基础设施不计作客户业务集成。十项 v1 均限定为“文件上传或粘贴 → 一个标准化可审输出 → 人工确认”，不自动执行；SaaS 与单租户共用一套代码，单租户仅为标准 Docker Compose 配置。</p>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>机会</th>
<th>v1 唯一输入 → 唯一输出</th>
<th style="text-align:right">必要业务集成</th>
<th>≤4 小时标准配置包</th>
</tr>
</thead>
<tbody>
<tr>
<td>询报价</td>
<td>XLSX/可搜索 PDF → 报价准备 XLSX</td>
<td style="text-align:right">0</td>
<td>一份标准目录、一份无宏模板</td>
</tr>
<tr>
<td>投标矩阵</td>
<td>单一采购类标书 → 要求/证据/缺项表</td>
<td style="text-align:right">0</td>
<td>≤100 份资质、一份模板</td>
</tr>
<tr>
<td>售后工单</td>
<td>粘贴/CSV 工单 → 有引用回复草案</td>
<td style="text-align:right">0</td>
<td>一个产品系列、≤200 份知识文档</td>
</tr>
<tr>
<td>供应商资质</td>
<td>资质文件包 → 缺项/到期表与日历文件</td>
<td style="text-align:right">0</td>
<td>一套预置证件类型，不接审批流</td>
</tr>
<tr>
<td>履约核对</td>
<td>同类合同/订单/出货单 → 字段差异表</td>
<td style="text-align:right">0</td>
<td>一种合同类型；不作法律判断</td>
</tr>
<tr>
<td>巡检报告</td>
<td>照片和文字/语音文件 → 一类报告</td>
<td style="text-align:right">0</td>
<td>一份报告模板；不做实时、离线 App 或缺陷识别</td>
</tr>
<tr>
<td>客服质检</td>
<td>一种会话 CSV → 违规项及证据表</td>
<td style="text-align:right">0</td>
<td>一种渠道导出格式、一套规则</td>
</tr>
<tr>
<td>SOP</td>
<td>同部门两个文档版本 → 变更及引用清单</td>
<td style="text-align:right">0</td>
<td>一个部门、≤200 份文档</td>
</tr>
<tr>
<td>跨境资料</td>
<td>一类产品资料 → 双语文件及术语冲突表</td>
<td style="text-align:right">0</td>
<td>一种输入格式、一份术语表</td>
</tr>
<tr>
<td>销售跟进</td>
<td>文字/转写稿 → CRM 导入 CSV 与任务表</td>
<td style="text-align:right">0</td>
<td>一种 CSV schema；不直连 CRM</td>
</tr>
</tbody>
</table></div>
<h2 id="七-三个业务蓝图与主推荐">七、三个业务蓝图与主推荐</h2>
<h3 id="主推荐-a-制造业询价单结构化与报价准备助手">主推荐 A：制造业询价单结构化与报价准备助手</h3>
<p><strong>ICP 与购买触发</strong></p>
<ul>
<li>默认只做仪器仪表/工业标准件经销与轻制造这一个子行业：20–200 人、每月至少 200 份询价单、有 3 人以上报价团队，目录中的型号、规格和单位能够整理成平面表。买方是老板或销售负责人，使用者是报价员/内勤销售。</li>
<li>直销分成立的前提是第 1 周能列出 50 家同一子行业目标公司，第 2 周完成 10 次有效访谈并获得 3 家脱敏样本；否则按创始人已有行业关系重新排名，不继续默认推荐。首期排除非标工程核价、复杂 BOM、必须实时读库存成本和目录需要人工清洗的客户。</li>
<li>触发事件是旺季积压、回复跨天、规格缺项反复沟通、单位/数量抄错，以及新人依赖老员工记忆。</li>
<li>当前替代是人工复制 Excel、微信补问和搜索旧报价；ERP/CRM 只记录最终报价，通用聊天机器人缺少字段规则、来源定位和标准输出。</li>
</ul>
<p><strong>量化价值、v1 与验收</strong></p>
<p><code>月价值 = 月询价数 × 单份节省分钟 ÷ 60 × 完全人工时成本 + 减少返工数 × 单次返工成本</code>。演示假设 300 份/月、节省 8 分钟、60 元/小时，再减少两次各 500 元返工，约 3,400 元/月；必须用客户基线替换。</p>
<ul>
<li>默认 v1 只接收 XLSX 和可搜索 PDF，单文件不超过 20 页或 500 个行项目；目录不超过 5 万 SKU 且必须含 SKU、名称、型号/规格和单位；只支持一个无 VBA、无外链的单工作表报价模板。若第 2 周样本中扫描件占比 ≥30%，则加入 PNG/JPEG 与 OCR、同时推迟候选 SKU 匹配，二者不得一起扩大范围。</li>
<li>流程只做：抽取名称、型号、规格、数量、单位、交期和备注并保留页码/单元格；按客户规则标缺项；默认路径从平面目录给最多三个候选 SKU；生成待确认问题；套用模板；人工确认、更正并导出 XLSX/CSV。业务系统集成为 0，不做自动定价、库存承诺、折扣审批、ERP 回写或自动发送。</li>
<li>“≤4 小时上线”指收到合规目录、模板和 20 份样本后，工程师主动配置、验证和培训的总工时；自动索引可在后台运行，客户采购等待不计，但目录清洗不能作为定制服务绕过门槛。不合规配置包直接判定为非 ICP。</li>
<li>发布指标按三家客户分别计算后取宏平均：数量/单位行项目 exact match ≥98%，行项目边界召回 ≥98%，必填缺项召回 ≥90%，来源覆盖 100%，60 份锁定隐藏集中关键静默错误为 0。全流程节时从打开原文件计到成功导出，每家至少 20 份，中位数下降 ≥30%；“采纳”指无需修改 SKU、数量、单位或规格即可导出，采纳率 ≥70%。</li>
</ul>
<p><strong>组件与合规替代</strong></p>
<ul>
<li>文档解析首选 <a href="https://github.com/docling-project/docling/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Docling（MIT）</a>，替代为 Unstructured Community 或格式原生解析器；Docling 模型和 Excel 读写库分别核验。OCR 只在触发上述交换规则时启用 <a href="https://github.com/PaddlePaddle/PaddleOCR" target="_blank" rel="noopener noreferrer">PaddleOCR（Apache-2.0）</a>。</li>
<li>v1 目录匹配优先使用 PostgreSQL 的确定性/模糊检索；确需语义检索才启用 <a href="https://github.com/pgvector/pgvector/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">pgvector</a>，独立服务替代为 <a href="https://github.com/qdrant/qdrant" target="_blank" rel="noopener noreferrer">Qdrant</a>，不同时运维两套向量库。</li>
<li>服务层使用 <a href="https://github.com/fastapi/fastapi/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">FastAPI（MIT）</a> 和 <a href="https://github.com/open-telemetry/opentelemetry-python" target="_blank" rel="noopener noreferrer">OpenTelemetry（Apache-2.0）</a>。v1 仅接一个经合同确认“不用于训练、留存可控”的境内商用模型 API 和一个备用 API；SaaS、单租户都不承诺本地权重或 GPU。发布前生成包含代码、模型/API 条款、版本、SPDX、NOTICE 和上游替代的 SBOM；未完成前许可证分不得升到 5。</li>
</ul>
<p><strong>定价、毛利与直销</strong></p>
<ul>
<li>SaaS 含税展示价：入门版 999 元/月，3 用户、300 份且不超过 3,000 解析页；专业版 2,499 元/月，10 用户、1,500 份且不超过 15,000 页，以先到者为准；超量单价不得低于边际调用成本的 4 倍。毛利按不含税收入计算。</li>
<li>单租户仍是同一代码的 Ubuntu LTS x86_64 Docker Compose 包：部署 3–6 万元、年维护 1.8–3.6 万元，客户提供 VM、域名、存储和模型 API 凭证；不含 Kubernetes、HA、AD/SSO、离线模型、驻场或代码分叉。标准 SLA 为下一工作日响应，不提供 7×24 支持。</li>
<li>SaaS 月费不高于已验证月价值约三分之一；单租户首年总拥有成本（部署费、维护费和客户基础设施）不得超过已验证 12 个月价值的三分之一，否则只售 SaaS。以上述 3,400 元/月客户为例，只适合 SaaS，不适合私有化。</li>
<li><code>贡献毛利率 =（不含税收入 - 模型/OCR/存储/支付费用 - 支持工时×200元 - 部署工时摊销）÷ 不含税收入</code>。SaaS 目标 ≥75%、支持 ≤1 小时/账户/月；单租户目标 ≥55%、含支持 ≤2 小时/月，超出单独收费。</li>
<li>话术：“不换 ERP，也不自动报价格。拿 20 份已经结束的脱敏询价单做盲测，看能否把行项目、缺项和候选型号直接转成你现有 Excel；整理时间降不到 30% 就不部署。”</li>
</ul>
<p><strong>护城河、风险与停止条件</strong></p>
<ul>
<li>壁垒是型号别名、单位换算、目录匹配反馈、行业字段规则、失败样本和回归评测集，不是提示词。只有至少 30% 付费客户提出同一集成才开发连接器。</li>
<li>风险包括表格静默错行、目录过期、客户实际需要工程核价、商业秘密，以及私有化演变为驻场定制；用来源高亮、低置信度强制确认、数量/单位确定性双检和上述范围合同控制。</li>
<li>第 2 周少于 3 家各提供 40 份样本即停；120 份样本固定为 60 份开发集和每家 20 份的 60 份锁定隐藏集。第 4 周关键字段基线 &lt;95% 即缩格式或停；第 8 周未达到发布指标、标准上线 &gt;4 小时、或没有两位预算买家书面接受价格区间，任一成立即判本轮失败。第 8 周失败不能以临时转做 B/C 声称仍完成本轮 90 天目标。</li>
</ul>
<h3 id="备选-b-投标文件合规矩阵与资质证据映射">备选 B：投标文件合规矩阵与资质证据映射</h3>
<p>备选 B/C 是完整替代路线，不与 A 并行；选择任一备选都重新启动一轮 12 周。A 若在第 2 或第 4 周早停可重新规划，若第 8 周失败则本轮 90 天目标失败。</p>
<ul>
<li><strong>ICP/触发</strong>：只做工业设备供应商参与的产品采购类招标；客户 20–200 人、每月至少 4 标，有固定投标负责人。排除工程建设、政府涉密、加密文件和需要法律意见的项目。</li>
<li><strong>价值</strong>：<code>月投标数 × 每标节省小时 × 完全人工时薪</code>；例如 8 标/月、每标 8 小时、100 元/小时，约 6,400 元/月，不在无客户历史时货币化“避免废标”。</li>
<li><strong>产品边界/上线</strong>：输入一份可搜索 PDF/DOCX 标书（≤300 页）、≤100 份按预置类型命名的资质和一份模板，输出逐条要求/原文页/强制项/评分项/候选证据/缺项矩阵及时间节点；业务集成 0。收到合规包后主动配置工时 ≤4 小时。不写商务报价、不承诺不会废标、不替代法律判断。</li>
<li><strong>技术与许可</strong>：复用主方案的版本化 SBOM、两家模型 API、解析和来源定位栈；强制项逐条人审，不引入另一套平台。组件只选宽松许可或已签商业条款并保留替代。</li>
<li><strong>验收</strong>：至少 20 份锁定标书，强制项召回 ≥98%、精确率 ≥85%、原文定位覆盖 100%、资格否决条款关键静默遗漏为 0，人工复核时间中位数下降 ≥30%。任一不达即不发布。</li>
<li><strong>定价/毛利</strong>：含税 999 元/月含 4 标且 ≤1,200 页，2,999 元/月含 20 标且 ≤6,000 页；单租户沿用主方案 3–6 万/年维护 1.8–3.6 万、标准部署范围和 TCO≤年度价值三分之一规则；贡献毛利公式与阈值同主方案。</li>
<li><strong>直销/壁垒</strong>：用一份结束项目做要求矩阵和资质映射盲测；壁垒是垂直要求分类器、资质结构、遗漏案例和回归集。</li>
<li><strong>风险/停止</strong>：强制项假阴性、敏感材料、季节性和责任误解。10 次访谈后少于 3 家各给至少 10 份结束项目、未达到上述验收、首次配置 &gt;4 小时或每标都需代运营即停止。</li>
<li><strong>扩展</strong>：要求矩阵 → 证据库 → 版本差异 → 协作审批；最后才考虑正文草案。</li>
</ul>
<h3 id="备选-c-设备-软件售后工单回复助手">备选 C：设备/软件售后工单回复助手</h3>
<ul>
<li><strong>ICP/触发</strong>：只选工业设备或 B2B 软件中的一个产品系列；客户 20–200 人、5–20 名售后、每月至少 800 条工单，手册和已结工单有版本号。排除医疗、生命安全设备和需要实时值守的场景。</li>
<li><strong>价值</strong>：1,500 条/月、每条节省 4 分钟、70 元/小时，演示节时约 7,000 元/月；必须用工单时间戳重算。</li>
<li><strong>产品边界/上线</strong>：上传一个产品系列、≤200 份版本化手册/FAQ 和一种 CSV/粘贴工单，输出产品/版本/问题分类、补充问题、带引用草案、置信度和升级建议；业务集成 0，配置主动工时 ≤4 小时。时间测量包含导出、复制粘贴和人工复核。不自动回复、不承诺退款保修、不输出安全关键操作；PMF 后最多接一个标准工单系统。</li>
<li><strong>组件与许可</strong>：复用主方案的版本化 SBOM、解析、观测和两家模型 API；所有引用回到具体版本原文，客户书面确认有权使用知识文档和脱敏工单。</li>
<li><strong>验收</strong>：三家各提供至少 100 条已结工单，按每家 50/50 开发与隐藏拆分；草案采纳 ≥70%，全流程处理中位时间下降 ≥25%，引用支持率 ≥95%，应升级工单召回 ≥95%，隐藏集中危险建议和关键无来源事实为 0。</li>
<li><strong>定价/毛利</strong>：含税 999 元/月含 5 用户、800 工单；1,999 元/月含 5 用户、1,500 工单；4,999 元/月含 20 用户、6,000 工单，均设模型字符/音频分钟上限；单租户沿用主方案标准范围、毛利公式和 TCO≤年度价值三分之一规则。</li>
<li><strong>直销/壁垒</strong>：用 100 条脱敏已结工单离线回放；壁垒是产品—版本—故障 taxonomy、解决结果反馈、失败评测集和知识过期检测。</li>
<li><strong>风险/停止</strong>：手册过期、个人信息、危险建议和封闭渠道。少于 3 家提供规定样本、未达到上述验收、配置 &gt;4 小时，或必须同时接企业微信、电话和工单平台才有价值时停止。</li>
<li><strong>扩展</strong>：离线草案 → 知识缺口 → 版本化回复 → 一个标准工单连接器；不扩成通用客服机器人。</li>
</ul>
<h3 id="主推荐的-12-周发布路线">主推荐的 12 周发布路线</h3>
<p>路线按合计至少 20 人时/周、总投入不超过 240 人时设计：可以是 1 人每周 20 小时或 2 人各 10 小时，第 3 人只增加访谈/QA 容量。低于 20 人时/周即不承诺 90 天同时交付 SaaS 与标准单租户包；本轮现金上限 6 万元。</p>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th>周</th>
<th>交付与决策门</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>只选一个工业子行业，列出 50 家目标公司、完成 5 次访谈；同时确认经营主体、含税开票、境内云/域名及大陆公开 Web 服务所需备案条件，缺少则本周启动。</td>
</tr>
<tr>
<td>2</td>
<td>累计 10 次访谈；至少 3 家各提供 40 份脱敏样本；锁定“默认 SKU 匹配”或“扫描 OCR”二选一范围，未达即停。</td>
</tr>
<tr>
<td>3</td>
<td>完成人工真值和 60/60 开发/隐藏拆分；解析、统一行项目、来源定位的数据结构从第一天包含 tenant_id 和租户存储前缀；模型只定义主/备两个适配器。</td>
</tr>
<tr>
<td>4</td>
<td>完成上传—审阅—Excel 导出原型；开发集关键字段基线需 ≥95%，否则缩格式或停止。</td>
</tr>
<tr>
<td>5</td>
<td>完成数量、单位、重复行、必填字段等确定性校验，低置信度强制确认。</td>
</tr>
<tr>
<td>6</td>
<td>按第 2 周选择完成平面目录/候选 SKU，或完成扫描 OCR；不得同时新增另一分支。</td>
</tr>
<tr>
<td>7</td>
<td>完成客户 Excel 模板导出、待确认问题和回复草案。</td>
</tr>
<tr>
<td>8</td>
<td>三家设计伙伴端到端回放，按正式口径测节时、采纳、错误、成本和两位预算买家的书面价格接受；任一价值门未过则本轮失败。</td>
</tr>
<tr>
<td>9</td>
<td>对既有 tenant_id 架构做越权测试；完成两级角色、关键操作审计、传输/存储保护、删除和留存策略，不在此周首次改造成多租户。</td>
</tr>
<tr>
<td>10</td>
<td>实现用量限制和主/备模型故障演练；在受支持的干净 VM 上完成 Docker Compose 部署、健康检查、备份恢复，工程师主动工时 ≤4 小时。</td>
</tr>
<tr>
<td>11</td>
<td>完成含税价格、合同要点、数据/安全说明、支持边界、演示数据和上线清单；人工签约开票，不开发支付系统。</td>
</tr>
<tr>
<td>12</td>
<td>用 60 份锁定隐藏集发布验收；租户越权为 0、删除与恢复通过、主模型失败时不生成半成品报价、无未修复高危依赖，形成可演示、报价、部署和支持的标准版本。</td>
</tr>
</tbody>
</table></div>
<p>现金预算上限 6 万元：云与模型 1.2 万、经营主体/记账开票/合同隐私许可与基础安全咨询 1.5 万、客户走访和样本 1.2 万、域名备案/设计销售材料 0.5 万、备份监控 0.6 万、预备金 1 万。若已有主体，相应预算转为安全和销售验证；不要买 GPU 或提前招聘，第 8 周未过价值门槛不继续投入。</p>
<p>处理联系人、工单或销售记录时，需按<a href="https://www.npc.gov.cn/npc/c2/c30834/202202/t20220215_316122.html" target="_blank" rel="noopener noreferrer">《个人信息保护法》相关官方说明</a>落实最小必要、权限、删除和跨境条件。默认境内存储，原始文件导出后 30 天自动删除且客户可缩短；纠错反馈只有获得单独授权才用于跨客户评测，绝不训练公共模型。境内模型 API 必须有不训练和留存可控条款。如在中国大陆公开提供 Web 服务，第 1 周核验主体、域名和备案/许可条件；若未来形成面向境内公众的生成式 AI 服务，再按实际形态评估<a href="https://www.cac.gov.cn/2023-07/13/c_1690898326795531.htm" target="_blank" rel="noopener noreferrer">《生成式人工智能服务管理暂行办法》</a>。产品不承诺 7×24 服务，不进入实时生产或安全关键场景；本报告不构成法律意见。</p>
<h2 id="八-持续发展纪律与核心指标">八、持续发展纪律与核心指标</h2>
<ul>
<li>始终只开发一个垂直工作流；新客户沿用相同上传、审阅、导出和部署流程，禁止以“标准版”名义接无限定制。</li>
<li>新集成只有在至少 30% 付费客户提出同一需求时开发；单租户只改配置、模型和存储位置，不维护代码分叉。</li>
<li>每月跟踪：活跃账户、每账户处理量、端到端完成率、人工采纳率、关键静默错误、节时、变动成本、支持工时和续费意愿。</li>
<li>数据壁垒只来自合法取得的纠错反馈、行业字段规则和评测集；未经单独授权，不用客户数据训练公共模型。</li>
<li>任何增长若要求支持工时同比例增长，都不算可复制。任何模型或上游失效时，必须能在两周内切换替代。</li>
</ul>
<h2 id="附录-a-500-项完整索引">附录 A：500 项完整索引</h2>
<blockquote>
<p>仓库指标是快照事实；纳入资格和类别经人工复核，目标客户、任务、机制和痛点是规则化推断。“置信度”指类别证据置信度。许可证风险是初筛，商用前必须核验具体代码、模型和数据许可。</p>
</blockquote>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th style="text-align:right">排名</th>
<th>项目</th>
<th style="text-align:right">热度</th>
<th style="text-align:right">Stars / Forks</th>
<th>类别</th>
<th>目标客户</th>
<th>一句话业务</th>
<th>核心痛点</th>
<th>许可证风险</th>
<th>置信度</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">1</td>
<td><a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer">openclaw/openclaw</a></td>
<td style="text-align:right">100.00</td>
<td style="text-align:right">382,531 / 80,296</td>
<td>Agent与RAG</td>
<td>自托管个人助手用户、开发者与重度自动化用户</td>
<td>让个人AI助手跨设备和常用消息渠道持续执行任务；机制：以本地网关连接多模型、消息渠道、语音、工具与设备控制；Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">2</td>
<td><a href="https://github.com/obra/superpowers" target="_blank" rel="noopener noreferrer">obra/superpowers</a></td>
<td style="text-align:right">99.88</td>
<td style="text-align:right">251,930 / 22,484</td>
<td>开发者工具</td>
<td>使用AI编程助手的软件开发者与工程团队</td>
<td>将需求澄清、设计、实现和验证固化为可复用开发流程；机制：通过组合式技能和强制工作方法引导编码Agent分阶段执行；An agentic skills framework &amp; software development methodology that works.</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">3</td>
<td><a href="https://github.com/NousResearch/hermes-agent" target="_blank" rel="noopener noreferrer">NousResearch/hermes-agent</a></td>
<td style="text-align:right">99.86</td>
<td style="text-align:right">212,874 / 39,315</td>
<td>Agent与RAG</td>
<td>个人AI助手用户、Agent开发者与自托管团队</td>
<td>让个人Agent从历史任务学习并跨会话持续改进；机制：用内置学习循环沉淀技能与记忆，并兼容多模型和云端运行；The agent that grows with you</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">4</td>
<td><a href="https://github.com/affaan-m/ECC" target="_blank" rel="noopener noreferrer">affaan-m/ECC</a></td>
<td style="text-align:right">99.75</td>
<td style="text-align:right">228,320 / 35,021</td>
<td>开发者工具</td>
<td>AI编程重度用户、工程团队与Agent平台维护者</td>
<td>提升编码Agent的技能、记忆、安全和上下文使用效率；机制：用跨工具技能包、记忆压缩、安全防护和基准配置优化Agent；The agent harness performance optimization system. Skills, instincts, memory, security, and research-first develop…</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">5</td>
<td><a href="https://github.com/Significant-Gravitas/AutoGPT" target="_blank" rel="noopener noreferrer">Significant-Gravitas/AutoGPT</a></td>
<td style="text-align:right">99.60</td>
<td style="text-align:right">185,460 / 46,112</td>
<td>Agent与RAG</td>
<td>自动化创业团队、开发者和业务运营团队</td>
<td>可视化创建、部署并持续运行复杂业务自动化Agent；机制：用低代码构建器、Agent市场、执行监控和自托管平台串联流程；AutoGPT is the vision of accessible AI for everyone, to use and to build on. Our mission is to provide the tools,…</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">6</td>
<td><a href="https://github.com/f/prompts.chat" target="_blank" rel="noopener noreferrer">f/prompts.chat</a></td>
<td style="text-align:right">99.42</td>
<td style="text-align:right">165,350 / 21,394</td>
<td>企业效率</td>
<td>AI聊天用户、内容运营团队与企业知识管理员</td>
<td>搜集、检索和复用经过社区验证的提示词模板；机制：通过可搜索提示词库、多格式导出和私有部署集中管理模板；f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the community. Free and open source — self-host f…</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">7</td>
<td><a href="https://github.com/ollama/ollama" target="_blank" rel="noopener noreferrer">ollama/ollama</a></td>
<td style="text-align:right">99.40</td>
<td style="text-align:right">175,898 / 16,930</td>
<td>推理部署</td>
<td>本地模型开发者、隐私敏感用户与AI应用团队</td>
<td>在本机快速下载、运行并通过API调用开源模型；机制：用统一CLI和REST接口封装模型拉取、量化运行与硬件适配；Get up and running with Kimi-K2.6, GLM-5.1, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models.</td>
<td>部署与运维</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">8</td>
<td><a href="https://github.com/github/spec-kit" target="_blank" rel="noopener noreferrer">github/spec-kit</a></td>
<td style="text-align:right">99.38</td>
<td style="text-align:right">119,384 / 10,583</td>
<td>开发者工具</td>
<td>使用AI编码的产品经理与软件研发团队</td>
<td>以可执行规格驱动需求、设计、任务拆解和代码实现；机制：用模板化规范、命令和阶段产物约束编码Agent按规格交付；💫 Toolkit to help you get started with Spec-Driven Development</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">9</td>
<td><a href="https://github.com/google-gemini/gemini-cli" target="_blank" rel="noopener noreferrer">google-gemini/gemini-cli</a></td>
<td style="text-align:right">99.36</td>
<td style="text-align:right">105,903 / 14,240</td>
<td>开发者工具</td>
<td>终端开发者、运维工程师与技术研究人员</td>
<td>在终端完成编码、检索、文件操作和多步骤技术任务；机制：把Gemini推理与搜索、Shell、文件工具及MCP扩展集成进CLI；An open-source AI agent that brings the power of Gemini directly into your terminal.</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">10</td>
<td><a href="https://github.com/open-webui/open-webui" target="_blank" rel="noopener noreferrer">open-webui/open-webui</a></td>
<td style="text-align:right">99.34</td>
<td style="text-align:right">145,016 / 20,998</td>
<td>企业效率</td>
<td>企业内部AI用户、家庭实验者与私有化运维团队</td>
<td>统一访问本地和云端模型并开展聊天、检索与协作；机制：以可自托管Web界面接入多模型、RAG、权限和多用户能力；User-friendly AI Interface (Supports Ollama, OpenAI API, ...)</td>
<td>隐私与合规</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">11</td>
<td><a href="https://github.com/langgenius/dify" target="_blank" rel="noopener noreferrer">langgenius/dify</a></td>
<td style="text-align:right">99.32</td>
<td style="text-align:right">148,456 / 23,401</td>
<td>Agent与RAG</td>
<td>AI产品团队、企业数字化部门与低代码开发者</td>
<td>从原型到生产构建Agent、RAG和生成式应用工作流；机制：用可视化编排、知识库、模型管理、API和观测组件打通交付；Production-ready platform for agentic workflow development.</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">12</td>
<td><a href="https://github.com/firecrawl/firecrawl" target="_blank" rel="noopener noreferrer">firecrawl/firecrawl</a></td>
<td style="text-align:right">99.27</td>
<td style="text-align:right">149,001 / 8,524</td>
<td>开发者工具</td>
<td>Agent开发者、数据工程师与搜索产品团队</td>
<td>稳定抓取网页并转换成模型可消费的结构化内容；机制：代管浏览器渲染、代理、限流和反爬，输出Markdown或JSON；The API to search, scrape, and interact with the web at scale. 🔥</td>
<td>数据准备与碎片</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">13</td>
<td><a href="https://github.com/langchain-ai/langchain" target="_blank" rel="noopener noreferrer">langchain-ai/langchain</a></td>
<td style="text-align:right">99.20</td>
<td style="text-align:right">141,490 / 23,514</td>
<td>Agent与RAG</td>
<td>Agent应用开发者、AI平台团队与解决方案集成商</td>
<td>组合模型、工具、记忆和外部数据构建可维护Agent；机制：以标准组件、第三方集成和可替换编排接口连接Agent技术栈；The agent engineering platform.</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">14</td>
<td><a href="https://github.com/browser-use/browser-use" target="_blank" rel="noopener noreferrer">browser-use/browser-use</a></td>
<td style="text-align:right">99.19</td>
<td style="text-align:right">104,163 / 11,485</td>
<td>开发者工具</td>
<td>浏览器自动化开发者、运营团队与Agent工程师</td>
<td>让Agent完成网页浏览、点击、填表、采购和信息提取；机制：结合浏览器会话、页面状态理解和任意LLM执行自然语言任务；🌐 Make websites accessible for AI agents. Automate tasks online with ease.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">15</td>
<td><a href="https://github.com/langflow-ai/langflow" target="_blank" rel="noopener noreferrer">langflow-ai/langflow</a></td>
<td style="text-align:right">99.18</td>
<td style="text-align:right">151,607 / 9,644</td>
<td>Agent与RAG</td>
<td>低代码AI开发者、企业应用团队与方案顾问</td>
<td>可视化搭建、测试并部署Agent和业务工作流；机制：用节点画布连接模型、向量库和工具，并自动暴露API与MCP；Langflow is a powerful tool for building and deploying AI-powered agents and workflows.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">16</td>
<td><a href="https://github.com/Comfy-Org/ComfyUI" target="_blank" rel="noopener noreferrer">Comfy-Org/ComfyUI</a></td>
<td style="text-align:right">99.07</td>
<td style="text-align:right">120,276 / 14,136</td>
<td>内容生成</td>
<td>AI视觉创作者、设计师与生成管线开发者</td>
<td>以节点图组合图像、视频和音频生成及后处理流程；机制：通过模块化节点连接扩散模型、控制器、预处理器和输出后端；The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.</td>
<td>专业门槛</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">17</td>
<td><a href="https://github.com/huggingface/transformers" target="_blank" rel="noopener noreferrer">huggingface/transformers</a></td>
<td style="text-align:right">99.06</td>
<td style="text-align:right">162,469 / 33,861</td>
<td>模型与训练</td>
<td>模型研究人员、机器学习工程师与AI平台团队</td>
<td>加载、训练、微调并推理文本视觉音频等预训练模型；机制：集中维护模型定义、权重、训练器和管线以兼容上下游框架；🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">18</td>
<td><a href="https://github.com/tensorflow/tensorflow" target="_blank" rel="noopener noreferrer">tensorflow/tensorflow</a></td>
<td style="text-align:right">99.04</td>
<td style="text-align:right">196,287 / 75,475</td>
<td>模型与训练</td>
<td>机器学习研究人员、算法工程师与生产平台团队</td>
<td>开发、训练并部署跨环境的机器学习和深度学习模型；机制：用张量计算、自动微分、分布式训练和部署生态覆盖模型生命周期；An Open Source Machine Learning Framework for Everyone</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">19</td>
<td><a href="https://github.com/Graphify-Labs/graphify" target="_blank" rel="noopener noreferrer">Graphify-Labs/graphify</a></td>
<td style="text-align:right">99.03</td>
<td style="text-align:right">82,037 / 8,071</td>
<td>开发者工具</td>
<td>大型代码库维护者、架构师与AI编码用户</td>
<td>把代码、数据库和文档映射为可查询的项目知识图谱；机制：用本地AST解析和关系建图统一代码、模式与多媒体项目上下文；AI coding assistant skill (Claude Code, Codex, OpenCode, Cursor, Gemini CLI, and more). Turn any folder of code, SQL…</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">20</td>
<td><a href="https://github.com/nexu-io/open-design" target="_blank" rel="noopener noreferrer">nexu-io/open-design</a></td>
<td style="text-align:right">98.99</td>
<td style="text-align:right">77,181 / 8,813</td>
<td>内容生成</td>
<td>产品设计师、前端开发者与创意制作团队</td>
<td>用编码Agent制作原型、网页、演示文稿和视频素材；机制：在本地桌面端调度多种CLI Agent并导出HTML、PDF和PPTX；🎨 The open-source Claude Design alternative. 🖥️ Local-first desktop app. 🖼️ Your coding agent becomes the des…</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">21</td>
<td><a href="https://github.com/thedotmack/claude-mem" target="_blank" rel="noopener noreferrer">thedotmack/claude-mem</a></td>
<td style="text-align:right">98.89</td>
<td style="text-align:right">86,791 / 7,497</td>
<td>Agent与RAG</td>
<td>编码Agent用户、长期项目开发者与研发团队</td>
<td>跨会话保留项目历史、决策和工具执行上下文；机制：自动捕获工具活动、压缩为语义摘要并在后续会话检索注入；Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it wit…</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">22</td>
<td><a href="https://github.com/harry0703/MoneyPrinterTurbo" target="_blank" rel="noopener noreferrer">harry0703/MoneyPrinterTurbo</a></td>
<td style="text-align:right">98.86</td>
<td style="text-align:right">96,760 / 14,271</td>
<td>内容生成</td>
<td>短视频创作者、营销运营人员与小型内容团队</td>
<td>从主题自动生成脚本、素材、字幕、配音和高清短视频；机制：由大模型写稿和提炼素材词，再自动检索媒体并合成音画字幕；利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM.</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">23</td>
<td><a href="https://github.com/bytedance/deer-flow" target="_blank" rel="noopener noreferrer">bytedance/deer-flow</a></td>
<td style="text-align:right">98.83</td>
<td style="text-align:right">76,743 / 10,421</td>
<td>Agent与RAG</td>
<td>研究人员、开发者与需要长任务自动化的知识团队</td>
<td>委派需要数分钟到数小时的研究、编码和创作任务；机制：以子Agent、沙箱、记忆、技能和消息网关分解并持续执行任务；An open-source long-horizon SuperAgent harness that researches, codes, and creates. With the help of sandboxes, memor…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">24</td>
<td><a href="https://github.com/TauricResearch/TradingAgents" target="_blank" rel="noopener noreferrer">TauricResearch/TradingAgents</a></td>
<td style="text-align:right">98.77</td>
<td style="text-align:right">92,251 / 17,823</td>
<td>垂直行业应用</td>
<td>量化研究员、交易系统开发者与金融AI研究团队</td>
<td>模拟多角色投研流程完成市场分析、辩论和交易决策；机制：让基本面、技术面、情绪和风控Agent基于多源数据协作决策；TradingAgents: Multi-Agents LLM Financial Trading Framework</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">25</td>
<td><a href="https://github.com/vllm-project/vllm" target="_blank" rel="noopener noreferrer">vllm-project/vllm</a></td>
<td style="text-align:right">98.69</td>
<td style="text-align:right">85,944 / 19,256</td>
<td>推理部署</td>
<td>大模型推理平台团队、云服务商与AI应用后端工程师</td>
<td>以高吞吐和低显存占用提供大模型在线推理服务；机制：利用PagedAttention、连续批处理、缓存、量化和分布式执行提速；A high-throughput and memory-efficient inference and serving engine for LLMs</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">26</td>
<td><a href="https://github.com/earendil-works/pi" target="_blank" rel="noopener noreferrer">earendil-works/pi</a></td>
<td style="text-align:right">98.69</td>
<td style="text-align:right">69,548 / 8,552</td>
<td>开发者工具</td>
<td>Agent框架开发者、终端工具作者与AI平台工程师</td>
<td>构建终端编码Agent或嵌入式自定义工具调用Agent；机制：用统一多模型API、Agent循环、状态管理、TUI和CLI组件搭建；AI agent toolkit: unified LLM API, agent loop, TUI, coding agent CLI</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">27</td>
<td><a href="https://github.com/infiniflow/ragflow" target="_blank" rel="noopener noreferrer">infiniflow/ragflow</a></td>
<td style="text-align:right">98.66</td>
<td style="text-align:right">84,783 / 9,901</td>
<td>Agent与RAG</td>
<td>企业知识库团队、RAG开发者与文档密集型业务部门</td>
<td>把复杂企业文档转为高精度、可追溯的问答与Agent；机制：结合深度文档解析、模板切分、混合检索、重排和引用生成；RAGFlow is a leading open-source Retrieval-Augmented Generation (RAG) engine that fuses cutting-edge RAG with Agent ca…</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">28</td>
<td><a href="https://github.com/OpenHands/OpenHands" target="_blank" rel="noopener noreferrer">OpenHands/OpenHands</a></td>
<td style="text-align:right">98.65</td>
<td style="text-align:right">80,411 / 10,260</td>
<td>开发者工具</td>
<td>软件研发团队、平台工程师与编码自动化负责人</td>
<td>集中运行编码Agent并自动处理Issue、报告和日常研发任务；机制：用自托管控制台连接本地、容器、虚机和云端Agent执行后端；🙌 OpenHands: AI-Driven Development</td>
<td>部署与运维</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">29</td>
<td><a href="https://github.com/koala73/worldmonitor" target="_blank" rel="noopener noreferrer">koala73/worldmonitor</a></td>
<td style="text-align:right">98.63</td>
<td style="text-align:right">61,705 / 9,616</td>
<td>垂直行业应用</td>
<td>地缘政治分析师、安全运营中心、新闻室与投资机构</td>
<td>统一监测全球新闻、冲突、灾害、市场和关键基础设施；机制：聚合数百信息源，以AI简报、地图图层、跨流关联和预警呈现；Real-time global intelligence dashboard. AI-powered news aggregation, geopolitical monitoring, and infrastructure tra…</td>
<td>数据准备与碎片</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">30</td>
<td><a href="https://github.com/santifer/career-ops" target="_blank" rel="noopener noreferrer">santifer/career-ops</a></td>
<td style="text-align:right">98.61</td>
<td style="text-align:right">59,577 / 11,824</td>
<td>垂直行业应用</td>
<td>求职者、职业顾问与高校就业辅导人员</td>
<td>扫描职位、评估匹配度、定制简历并跟踪求职进度；机制：用本地Agent技能解析招聘信息、匹配个人资料并生成申请材料；Open-source AI job search: scan job portals, score listings A-F, tailor your CV, track applications — runs locally in…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">31</td>
<td><a href="https://github.com/hacksider/Deep-Live-Cam" target="_blank" rel="noopener noreferrer">hacksider/Deep-Live-Cam</a></td>
<td style="text-align:right">98.59</td>
<td style="text-align:right">94,794 / 13,828</td>
<td>内容生成</td>
<td>视频创作者、视觉特效人员与虚拟角色制作团队</td>
<td>用单张人脸图片实时替换摄像头或视频中的人物面孔；机制：结合人脸检测、身份特征迁移和实时视频管线完成一键换脸；real time face swap and one-click video deepfake with only a single image</td>
<td>专业门槛</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">32</td>
<td><a href="https://github.com/lobehub/lobehub" target="_blank" rel="noopener noreferrer">lobehub/lobehub</a></td>
<td style="text-align:right">98.55</td>
<td style="text-align:right">79,728 / 15,584</td>
<td>Agent与RAG</td>
<td>企业Agent运营团队、创业公司负责人和自动化管理者</td>
<td>全天候组织、排班、监督并汇报一组数字员工的工作；机制：以Chief Agent统一招聘、调度、运行监控和汇总多个Agent；🤯 LobeHub is your Chief Agent Operator, organizing your agents into 7×24 operations by hiring, scheduling, and r…</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">33</td>
<td><a href="https://github.com/DietrichGebert/ponytail" target="_blank" rel="noopener noreferrer">DietrichGebert/ponytail</a></td>
<td style="text-align:right">98.53</td>
<td style="text-align:right">80,272 / 4,324</td>
<td>开发者工具</td>
<td>编码Agent用户、精益研发团队与代码审查负责人</td>
<td>减少Agent过度设计产生的代码量、执行时间和模型费用；机制：通过最小实现技能约束Agent删除非必要抽象并保留安全检查；Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">34</td>
<td><a href="https://github.com/ZhuLinsen/daily_stock_analysis" target="_blank" rel="noopener noreferrer">ZhuLinsen/daily_stock_analysis</a></td>
<td style="text-align:right">98.52</td>
<td style="text-align:right">56,543 / 48,643</td>
<td>垂直行业应用</td>
<td>个人投资者、投顾研究员与跨市场交易团队</td>
<td>每日汇总行情新闻和技术指标并生成股票决策看板；机制：聚合多市场数据后用多策略大模型分析，并定时推送风险与点位；LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock analysis system with multi-source mark…</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">35</td>
<td><a href="https://github.com/code-yeongyu/oh-my-openagent" target="_blank" rel="noopener noreferrer">code-yeongyu/oh-my-openagent</a></td>
<td style="text-align:right">98.45</td>
<td style="text-align:right">65,513 / 5,344</td>
<td>开发者工具</td>
<td>复杂代码库开发者、编码Agent重度用户与研发团队</td>
<td>协调多角色编码Agent处理复杂项目中的规划与实现任务；机制：用跨Codex和OpenCode的Agent OS分配角色、上下文与工具调用；omo/lazycodex: The coding agent for tokenmaxxers;the one and only agent harness for complex codebases. F…</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">36</td>
<td><a href="https://github.com/ruvnet/ruflo" target="_blank" rel="noopener noreferrer">ruvnet/ruflo</a></td>
<td style="text-align:right">98.42</td>
<td style="text-align:right">63,930 / 7,555</td>
<td>Agent与RAG</td>
<td>企业研发平台、Agent基础设施团队与分布式协作组织</td>
<td>部署和协调可学习、可记忆的多Agent集群完成复杂工作；机制：以元级Harness提供角色Agent、群体编排、联邦通信和安全护栏；🌊 The leading agent meta-harness. Deploy intelligent multi-player swarms, coordinate autonomous workflows, a…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">37</td>
<td><a href="https://github.com/hiyouga/LlamaFactory" target="_blank" rel="noopener noreferrer">hiyouga/LlamaFactory</a></td>
<td style="text-align:right">98.30</td>
<td style="text-align:right">73,153 / 8,936</td>
<td>模型与训练</td>
<td>大模型微调工程师、研究实验室与企业算法团队</td>
<td>用少量代码或图形界面微调百余种语言和多模态模型；机制：统一封装LoRA、量化、分布式训练、数据配方和WebUI工作流；Unified Efficient Fine-Tuning of 100+ LLMs &amp; VLMs (ACL 2024)</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">38</td>
<td><a href="https://github.com/sansan0/TrendRadar" target="_blank" rel="noopener noreferrer">sansan0/TrendRadar</a></td>
<td style="text-align:right">98.30</td>
<td style="text-align:right">60,453 / 24,783</td>
<td>企业效率</td>
<td>品牌公关、市场运营、媒体研究与舆情分析团队</td>
<td>聚合多平台热点并筛选、分析和推送关注的舆情趋势；机制：结合RSS和平台数据，以关键词、AI摘要翻译、情感分析和多渠道告警处理；⭐AI-driven public opinion &amp; trend monitor with multi-platform aggregation, RSS, and smart alerts.🎯 告别信息过载，你的 AI…</td>
<td>数据准备与碎片</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">39</td>
<td><a href="https://github.com/JuliusBrussee/caveman" target="_blank" rel="noopener noreferrer">JuliusBrussee/caveman</a></td>
<td style="text-align:right">98.28</td>
<td style="text-align:right">87,825 / 5,043</td>
<td>开发者工具</td>
<td>AI编程助手用户、个人开发者与Token成本敏感团队</td>
<td>在不改变代码和错误内容的前提下压缩Agent回答篇幅；机制：用跨多种编码Agent的表达技能删除客套和冗余自然语言输出；🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">40</td>
<td><a href="https://github.com/rtk-ai/rtk" target="_blank" rel="noopener noreferrer">rtk-ai/rtk</a></td>
<td style="text-align:right">98.25</td>
<td style="text-align:right">70,177 / 4,361</td>
<td>开发者工具</td>
<td>AI编码Agent用户、软件团队与Token成本管理者</td>
<td>压缩常见开发命令输出以减少Agent上下文占用；机制：用Rust CLI按命令类型过滤、分组、截断和去重终端结果；CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, zero dependencies</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">41</td>
<td><a href="https://github.com/MemPalace/mempalace" target="_blank" rel="noopener noreferrer">MemPalace/mempalace</a></td>
<td style="text-align:right">98.17</td>
<td style="text-align:right">57,211 / 7,387</td>
<td>Agent与RAG</td>
<td>Agent开发者、隐私敏感团队与本地AI应用维护者</td>
<td>为Agent提供无需外部API的可追溯长期记忆；机制：以本地原文存储、可插拔后端和高召回检索保存并恢复记忆；The best-benchmarked open-source AI memory system. And it's free.</td>
<td>隐私与合规</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">42</td>
<td><a href="https://github.com/daytonaio/daytona" target="_blank" rel="noopener noreferrer">daytonaio/daytona</a></td>
<td style="text-align:right">98.10</td>
<td style="text-align:right">72,235 / 5,662</td>
<td>开发者工具</td>
<td>Agent平台工程师、云基础设施团队与安全研发人员</td>
<td>安全、弹性地运行Agent生成的代码和临时开发任务；机制：通过隔离工作区、按需计算、SDK和生命周期管理提供执行环境；Daytona is a Secure and Elastic Infrastructure for Running AI-Generated Code</td>
<td>安全治理</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">43</td>
<td><a href="https://github.com/unslothai/unsloth" target="_blank" rel="noopener noreferrer">unslothai/unsloth</a></td>
<td style="text-align:right">98.08</td>
<td style="text-align:right">68,011 / 6,123</td>
<td>模型与训练</td>
<td>本地模型爱好者、微调工程师与小型AI研发团队</td>
<td>在个人电脑搜索、运行、训练并导出多类开放模型；机制：以桌面WebUI整合模型下载、量化推理、微调、转换和代码沙箱；Unsloth Studio is a web UI for training and running open models like Gemma 4, Qwen3.6, DeepSeek, gpt-oss locally.</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">44</td>
<td><a href="https://github.com/pytorch/pytorch" target="_blank" rel="noopener noreferrer">pytorch/pytorch</a></td>
<td style="text-align:right">97.96</td>
<td style="text-align:right">101,720 / 28,468</td>
<td>模型与训练</td>
<td>深度学习研究人员、算法工程师与AI基础设施团队</td>
<td>使用GPU张量和动态计算图开发训练深度学习模型；机制：提供张量内核、自动微分、模型模块和分布式训练原语；Tensors and Dynamic neural networks in Python with strong GPU acceleration</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">45</td>
<td><a href="https://github.com/headroomlabs-ai/headroom" target="_blank" rel="noopener noreferrer">headroomlabs-ai/headroom</a></td>
<td style="text-align:right">97.94</td>
<td style="text-align:right">58,446 / 4,314</td>
<td>开发者工具</td>
<td>Agent开发者、RAG团队与大模型成本优化负责人</td>
<td>在工具日志和检索内容进入模型前压缩上下文；机制：通过类型感知压缩器、代理和MCP服务保留语义并删除冗余；Compress tool outputs, logs, files, and RAG chunks before they reach the LLM. 60-95% fewer tokens, same answers. Library,…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">46</td>
<td><a href="https://github.com/Fission-AI/OpenSpec" target="_blank" rel="noopener noreferrer">Fission-AI/OpenSpec</a></td>
<td style="text-align:right">97.92</td>
<td style="text-align:right">59,977 / 4,167</td>
<td>开发者工具</td>
<td>AI编码团队、跨仓库产品研发组织与技术负责人</td>
<td>在实现前统一规格变更、设计、任务和验收依据；机制：用制品驱动的提案、规格、设计和任务流程约束AI编码变更；Spec-driven development (SDD) for AI coding assistants.</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">47</td>
<td><a href="https://github.com/Panniantong/Agent-Reach" target="_blank" rel="noopener noreferrer">Panniantong/Agent-Reach</a></td>
<td style="text-align:right">97.86</td>
<td style="text-align:right">54,586 / 4,501</td>
<td>开发者工具</td>
<td>Agent用户、研究人员、内容分析师与数据采集团队</td>
<td>让Agent读取和搜索社交平台、视频站点及网页内容；机制：用统一CLI封装平台适配、登录认证、搜索、字幕和正文提取；Give your AI agent eyes to see the entire internet. Read &amp; search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHo…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">48</td>
<td><a href="https://github.com/HKUDS/nanobot" target="_blank" rel="noopener noreferrer">HKUDS/nanobot</a></td>
<td style="text-align:right">97.85</td>
<td style="text-align:right">45,232 / 7,985</td>
<td>Agent与RAG</td>
<td>个人AI助手用户、小型开发团队与轻量自托管者</td>
<td>以小体积运行具备聊天、工具、记忆和自动化的个人Agent；机制：用精简核心集成WebUI、消息渠道、MCP、模型路由和部署脚本；Lightweight, open-source AI agent for your tools, chats, and workflows.</td>
<td>部署与运维</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">49</td>
<td><a href="https://github.com/Mintplex-Labs/anything-llm" target="_blank" rel="noopener noreferrer">Mintplex-Labs/anything-llm</a></td>
<td style="text-align:right">97.84</td>
<td style="text-align:right">63,090 / 6,906</td>
<td>Agent与RAG</td>
<td>中小企业知识团队、个人知识工作者与私有AI管理员</td>
<td>在本地与企业文档对话并构建多用户Agent工作流；机制：用桌面或服务器应用整合文档摄取、向量检索、Agent和权限；Stop renting your intelligence. Own it with AnythingLLM. Everything you need for a powerful local-first agent experi…</td>
<td>隐私与合规</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">50</td>
<td><a href="https://github.com/docling-project/docling" target="_blank" rel="noopener noreferrer">docling-project/docling</a></td>
<td style="text-align:right">97.78</td>
<td style="text-align:right">62,987 / 4,440</td>
<td>开发者工具</td>
<td>RAG工程师、文档数据团队与生成式AI应用开发者</td>
<td>解析多格式文档并生成结构化、可供模型使用的内容；机制：统一处理PDF版面、表格、公式、OCR及多格式导出和生态集成；Get your documents ready for gen AI</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">51</td>
<td><a href="https://github.com/mem0ai/mem0" target="_blank" rel="noopener noreferrer">mem0ai/mem0</a></td>
<td style="text-align:right">97.75</td>
<td style="text-align:right">60,587 / 7,044</td>
<td>Agent与RAG</td>
<td>Agent产品团队、个性化助手开发者与客服平台</td>
<td>为Agent持续保存、检索并更新用户和任务记忆；机制：从对话提取关键事实，结合向量和图记忆按需召回与演化；Universal memory layer for AI Agents</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">52</td>
<td><a href="https://github.com/RVC-Boss/GPT-SoVITS" target="_blank" rel="noopener noreferrer">RVC-Boss/GPT-SoVITS</a></td>
<td style="text-align:right">97.73</td>
<td style="text-align:right">59,631 / 6,507</td>
<td>内容生成</td>
<td>配音创作者、游戏音频团队与语音应用开发者</td>
<td>用极少录音克隆声线并生成跨语言自然语音；机制：结合少样本微调、语音识别、切分降噪和可视化TTS流程；1 min voice data can also be used to train a good TTS model! (few shot voice cloning)</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">53</td>
<td><a href="https://github.com/mvanhorn/last30days-skill" target="_blank" rel="noopener noreferrer">mvanhorn/last30days-skill</a></td>
<td style="text-align:right">97.71</td>
<td style="text-align:right">51,508 / 4,449</td>
<td>企业效率</td>
<td>市场研究员、投资者、创作者与趋势分析人员</td>
<td>研究近三十天社交平台和网页中的最新观点与信号；机制：并行搜索多平台，以互动量和市场信号排序后生成有依据摘要；AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a gro…</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">54</td>
<td><a href="https://github.com/ultralytics/ultralytics" target="_blank" rel="noopener noreferrer">ultralytics/ultralytics</a></td>
<td style="text-align:right">97.61</td>
<td style="text-align:right">59,338 / 11,354</td>
<td>模型与训练</td>
<td>计算机视觉工程师、工业AI团队与研究人员</td>
<td>训练和部署检测、分割、分类、姿态与跟踪模型；机制：用统一YOLO模型、Python接口、CLI和多格式导出覆盖视觉任务；Ultralytics YOLO26, YOLO11, YOLOv8 — object detection, instance segmentation, semantic segmentation, image classif…</td>
<td>专业门槛</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">55</td>
<td><a href="https://github.com/crewAIInc/crewAI" target="_blank" rel="noopener noreferrer">crewAIInc/crewAI</a></td>
<td style="text-align:right">97.51</td>
<td style="text-align:right">55,326 / 7,794</td>
<td>Agent与RAG</td>
<td>Agent开发者、业务自动化团队与AI解决方案公司</td>
<td>编排角色化Agent和事件流程协作完成复杂业务任务；机制：以Crews组织自治协作，以Flows控制事件、状态和工具调用；Framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI e…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">56</td>
<td><a href="https://github.com/BerriAI/litellm" target="_blank" rel="noopener noreferrer">BerriAI/litellm</a></td>
<td style="text-align:right">97.39</td>
<td style="text-align:right">53,237 / 9,660</td>
<td>推理部署</td>
<td>AI平台团队、企业架构师与大模型成本治理人员</td>
<td>统一接入多家模型并管理路由、预算、密钥和调用策略；机制：以OpenAI兼容网关封装百余供应商，提供回退、限额、护栏和日志；Python SDK, Proxy Server (AI Gateway) to call 100+ LLM APIs in OpenAI (or native) format, with cost tracking, gua…</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">57</td>
<td><a href="https://github.com/aaif-goose/goose" target="_blank" rel="noopener noreferrer">aaif-goose/goose</a></td>
<td style="text-align:right">97.39</td>
<td style="text-align:right">51,054 / 5,654</td>
<td>开发者工具</td>
<td>软件开发者、知识工作者与本地自动化爱好者</td>
<td>在本机委派编码、研究、写作、分析和自动化任务；机制：以桌面、CLI和API提供工具Agent，并兼容多模型供应商与扩展；an open source, extensible AI agent that goes beyond code suggestions - install, execute, edit, and test with any…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">58</td>
<td><a href="https://github.com/zylon-ai/private-gpt" target="_blank" rel="noopener noreferrer">zylon-ai/private-gpt</a></td>
<td style="text-align:right">97.38</td>
<td style="text-align:right">57,331 / 7,597</td>
<td>Agent与RAG</td>
<td>企业本地AI团队、合规部门与私有应用开发者</td>
<td>在不依赖云模型API的前提下构建生产级私有AI应用；机制：用Claude兼容API连接本地推理，并提供RAG、工具、MCP和数据查询；Complete API layer for private AI applications on local models: RAG, skills, tools, MCP, text-to-sql, and m…</td>
<td>隐私与合规</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">59</td>
<td><a href="https://github.com/upstash/context7" target="_blank" rel="noopener noreferrer">upstash/context7</a></td>
<td style="text-align:right">97.21</td>
<td style="text-align:right">58,894 / 2,762</td>
<td>开发者工具</td>
<td>软件开发者、AI代码编辑器用户与技术支持团队</td>
<td>为编码LLM提供当前版本的官方文档和正确示例；机制：实时检索特定库版本的源文档，并把相关片段直接注入提示上下文；Context7 Platform -- Up-to-date code documentation for LLMs and AI code editors</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">60</td>
<td><a href="https://github.com/FlowiseAI/Flowise" target="_blank" rel="noopener noreferrer">FlowiseAI/Flowise</a></td>
<td style="text-align:right">97.13</td>
<td style="text-align:right">54,510 / 24,708</td>
<td>Agent与RAG</td>
<td>低代码AI开发者、企业自动化团队与系统集成商</td>
<td>通过可视化画布搭建聊天流、Agent和复杂AI流程；机制：用节点组件连接模型、知识库、工具与外部服务并部署为API；Build AI Agents, Visually</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">61</td>
<td><a href="https://github.com/opencv/opencv" target="_blank" rel="noopener noreferrer">opencv/opencv</a></td>
<td style="text-align:right">96.98</td>
<td style="text-align:right">89,816 / 56,683</td>
<td>开发者工具</td>
<td>计算机视觉开发者、机器人团队与科研工程师</td>
<td>实现图像视频处理、视觉分析和实时感知功能；机制：以跨平台C++和Python模块提供视觉算法、I/O与硬件加速；Open Source Computer Vision Library</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">62</td>
<td><a href="https://github.com/run-llama/llama_index" target="_blank" rel="noopener noreferrer">run-llama/llama_index</a></td>
<td style="text-align:right">96.97</td>
<td style="text-align:right">50,779 / 7,729</td>
<td>Agent与RAG</td>
<td>RAG开发者、企业数据团队与文档Agent产品团队</td>
<td>把私有数据接入索引、检索和文档智能Agent；机制：通过数据连接器、解析器、索引、检索器和Agent组件组装应用；LlamaIndex is the leading document agent and OCR platform</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">63</td>
<td><a href="https://github.com/usestrix/strix" target="_blank" rel="noopener noreferrer">usestrix/strix</a></td>
<td style="text-align:right">96.94</td>
<td style="text-align:right">40,244 / 4,218</td>
<td>垂直行业应用</td>
<td>应用安全团队、渗透测试人员与DevSecOps工程师</td>
<td>自主发现、验证并协助修复应用中的可利用漏洞；机制：让攻击Agent动态运行目标、构造真实利用证明并接入CI扫描；Open-source AI penetration testing tool to find and fix your app’s vulnerabilities.</td>
<td>安全治理</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">64</td>
<td><a href="https://github.com/PaddlePaddle/PaddleOCR" target="_blank" rel="noopener noreferrer">PaddlePaddle/PaddleOCR</a></td>
<td style="text-align:right">96.90</td>
<td style="text-align:right">85,209 / 11,002</td>
<td>开发者工具</td>
<td>文档AI工程师、RAG开发者与数据录入自动化团队</td>
<td>把PDF和图片转换为准确的Markdown或结构化数据；机制：用多语言OCR、版面和表格模型结合SDK与多硬件部署管线；Turn any PDF or image document into structured data for your AI. A powerful, lightweight OCR toolkit that bridges…</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">65</td>
<td><a href="https://github.com/Hmbown/CodeWhale" target="_blank" rel="noopener noreferrer">Hmbown/CodeWhale</a></td>
<td style="text-align:right">96.89</td>
<td style="text-align:right">39,680 / 3,418</td>
<td>Agent与RAG</td>
<td>开放模型用户、终端开发者与内网软件研发团队</td>
<td>使用任意云端或本地模型在终端读取、修改并测试代码；机制：以Rust TUI和CLI提供工具循环、模型适配、规划及自校正执行；Open-source, community-driven agent harness</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">66</td>
<td><a href="https://github.com/calesthio/OpenMontage" target="_blank" rel="noopener noreferrer">calesthio/OpenMontage</a></td>
<td style="text-align:right">96.88</td>
<td style="text-align:right">36,815 / 4,435</td>
<td>内容生成</td>
<td>视频制作人、内容机构与使用编码Agent的创作者</td>
<td>用多Agent编排从素材到成片的完整视频制作流程；机制：通过十二类管线、视频工具和数百技能协同脚本、剪辑与渲染；World's first open-source, agentic video production system. 12 pipelines, 52 tools, 500+ agent skills. Turn your AI co…</td>
<td>流程效率</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">67</td>
<td><a href="https://github.com/jamiepine/voicebox" target="_blank" rel="noopener noreferrer">jamiepine/voicebox</a></td>
<td style="text-align:right">96.88</td>
<td style="text-align:right">40,519 / 4,885</td>
<td>内容生成</td>
<td>配音创作者、语音输入用户与语音Agent开发者</td>
<td>在本地克隆声音、生成多语种语音并向任意应用听写；机制：整合多种本地TTS和ASR引擎、全局快捷键及Agent接口；The open-source AI voice studio. Clone, dictate, create.</td>
<td>隐私与合规</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">68</td>
<td><a href="https://github.com/ggml-org/whisper.cpp" target="_blank" rel="noopener noreferrer">ggml-org/whisper.cpp</a></td>
<td style="text-align:right">96.81</td>
<td style="text-align:right">51,690 / 5,888</td>
<td>推理部署</td>
<td>语音应用开发者、边缘设备团队与本地转写用户</td>
<td>在CPU、GPU和嵌入式设备高效运行Whisper转写；机制：用无依赖C++内核、量化、硬件后端和VAD降低资源消耗；Port of OpenAI's Whisper model in C/C++</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">69</td>
<td><a href="https://github.com/ultralytics/yolov5" target="_blank" rel="noopener noreferrer">ultralytics/yolov5</a></td>
<td style="text-align:right">96.78</td>
<td style="text-align:right">57,665 / 17,487</td>
<td>模型与训练</td>
<td>视觉算法工程师、研究人员与边缘部署团队</td>
<td>训练并导出目标检测、分割和分类视觉模型；机制：以PyTorch训练管线和ONNX、CoreML、TFLite等导出覆盖部署；Ultralytics YOLOv5 in PyTorch &gt; ONNX &gt; CoreML &gt; TFLite</td>
<td>专业门槛</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">70</td>
<td><a href="https://github.com/nanocoai/nanoclaw" target="_blank" rel="noopener noreferrer">nanocoai/nanoclaw</a></td>
<td style="text-align:right">96.68</td>
<td style="text-align:right">30,187 / 12,883</td>
<td>Agent与RAG</td>
<td>安全敏感的个人助手用户、小团队与自托管开发者</td>
<td>在隔离环境运行可连接消息渠道的轻量个人Agent；机制：用每Agent独立容器、精简代码和权限边界承载记忆与定时任务；A lightweight alternative to OpenClaw that runs in containers for security. Connects to WhatsApp, Telegram, Slack,…</td>
<td>安全治理</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">71</td>
<td><a href="https://github.com/zhayujie/CowAgent" target="_blank" rel="noopener noreferrer">zhayujie/CowAgent</a></td>
<td style="text-align:right">96.67</td>
<td style="text-align:right">45,917 / 10,261</td>
<td>Agent与RAG</td>
<td>个人助手用户、聊天机器人开发者与自动化运营团队</td>
<td>全天候规划任务、操作电脑和服务并积累个人知识；机制：以轻量Harness组合多模型、技能、长期记忆、知识库和多渠道；Open-source super AI assistant &amp; Agent Harness. Plans tasks, runs tools and skills, self-evolves with memory and kno…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">72</td>
<td><a href="https://github.com/Yeachan-Heo/oh-my-claudecode" target="_blank" rel="noopener noreferrer">Yeachan-Heo/oh-my-claudecode</a></td>
<td style="text-align:right">96.64</td>
<td style="text-align:right">37,656 / 3,400</td>
<td>开发者工具</td>
<td>Claude Code用户、研发团队与多Agent工作流负责人</td>
<td>无需学习复杂命令即可组织多个编码Agent协同开发；机制：通过预设角色、模式、命令和并行任务路由封装团队编排；Teams-first Multi-agent orchestration for Claude Code</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">73</td>
<td><a href="https://github.com/mudler/LocalAI" target="_blank" rel="noopener noreferrer">mudler/LocalAI</a></td>
<td style="text-align:right">96.57</td>
<td style="text-align:right">47,472 / 4,221</td>
<td>推理部署</td>
<td>本地AI开发者、边缘团队与私有化模型服务运维者</td>
<td>在任意硬件以统一接口运行语言、视觉、语音和生成模型；机制：按需拉取独立推理后端并以OpenAI兼容API组合多模态模型；LocalAI is the open-source AI engine. Run any model - LLMs, vision, voice, image, video - on any hardware. No GPU…</td>
<td>部署与运维</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">74</td>
<td><a href="https://github.com/roboflow/supervision" target="_blank" rel="noopener noreferrer">roboflow/supervision</a></td>
<td style="text-align:right">96.56</td>
<td style="text-align:right">47,782 / 4,449</td>
<td>开发者工具</td>
<td>计算机视觉应用工程师、研究人员与视频分析团队</td>
<td>快速构建模型无关的检测、跟踪、计数和可视化应用；机制：提供可复用的数据加载、标注、几何、跟踪和结果展示组件；We write your reusable computer vision tools. 💜</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">75</td>
<td><a href="https://github.com/HKUDS/LightRAG" target="_blank" rel="noopener noreferrer">HKUDS/LightRAG</a></td>
<td style="text-align:right">96.56</td>
<td style="text-align:right">37,547 / 5,292</td>
<td>Agent与RAG</td>
<td>RAG研究人员、知识应用团队与成本敏感开发者</td>
<td>以简单快速的方式构建图增强检索生成系统；机制：结合实体关系图、双层检索、灵活切分和缓存减少检索开销；[EMNLP2025] &quot;LightRAG: Simple and Fast Retrieval-Augmented Generation&quot;</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">76</td>
<td><a href="https://github.com/danny-avila/LibreChat" target="_blank" rel="noopener noreferrer">danny-avila/LibreChat</a></td>
<td style="text-align:right">96.48</td>
<td style="text-align:right">40,565 / 8,329</td>
<td>企业效率</td>
<td>企业内部AI用户、模型爱好者与自托管协作团队</td>
<td>在统一聊天界面使用多模型、Agent、工具和代码执行；机制：通过多用户自托管前端连接云端与本地供应商、RAG、MCP和沙箱；Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS, OpenAI, Responses API, Azure, Gr…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">77</td>
<td><a href="https://github.com/zeroclaw-labs/zeroclaw" target="_blank" rel="noopener noreferrer">zeroclaw-labs/zeroclaw</a></td>
<td style="text-align:right">96.47</td>
<td style="text-align:right">32,225 / 4,805</td>
<td>Agent与RAG</td>
<td>自托管个人助手用户、边缘开发者与资源受限团队</td>
<td>以低资源运行可接入多渠道和工具的自治个人Agent；机制：用单个Rust二进制和可替换提供商、渠道、工具及记忆插件运行；Fast, small, and fully autonomous AI personal assistant infrastructure, any OS, any platform — deploy anywhere, sw…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">78</td>
<td><a href="https://github.com/danielmiessler/Fabric" target="_blank" rel="noopener noreferrer">danielmiessler/Fabric</a></td>
<td style="text-align:right">96.42</td>
<td style="text-align:right">42,943 / 4,202</td>
<td>企业效率</td>
<td>知识工作者、AI爱好者与个人生产力工具开发者</td>
<td>把可复用AI提示模式嵌入日常分析、写作和决策任务；机制：通过众包Pattern库、CLI和模型连接器按任务调用标准化提示；Fabric is an open-source framework for augmenting humans using AI. It provides a modular system for solving speci…</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">79</td>
<td><a href="https://github.com/vercel-labs/agent-browser" target="_blank" rel="noopener noreferrer">vercel-labs/agent-browser</a></td>
<td style="text-align:right">96.34</td>
<td style="text-align:right">38,259 / 2,469</td>
<td>开发者工具</td>
<td>浏览器Agent开发者、测试自动化工程师与数据采集团队</td>
<td>让Agent通过命令行稳定执行网页导航、填写和提取；机制：用原生Rust CLI维护浏览器会话并暴露快照、选择器和交互命令；Browser automation CLI for AI agents</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">80</td>
<td><a href="https://github.com/tesseract-ocr/tesseract" target="_blank" rel="noopener noreferrer">tesseract-ocr/tesseract</a></td>
<td style="text-align:right">96.33</td>
<td style="text-align:right">75,234 / 10,684</td>
<td>开发者工具</td>
<td>OCR应用开发者、档案数字化团队与文档处理厂商</td>
<td>从扫描图像和文档中识别并导出多语言文本；机制：以LSTM和传统识别引擎、语言数据、命令行与库接口完成OCR；Tesseract Open Source OCR Engine (main repository)</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">81</td>
<td><a href="https://github.com/heygen-com/hyperframes" target="_blank" rel="noopener noreferrer">heygen-com/hyperframes</a></td>
<td style="text-align:right">96.27</td>
<td style="text-align:right">34,192 / 3,198</td>
<td>内容生成</td>
<td>动态设计师、视频开发者与使用Agent的内容团队</td>
<td>把HTML、CSS和可寻址动画确定性渲染为MP4视频；机制：通过本地渲染核心、CLI和Agent技能把网页式场景编译成视频；Write HTML. Render video. Built for agents.</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">82</td>
<td><a href="https://github.com/langchain-ai/langgraph" target="_blank" rel="noopener noreferrer">langchain-ai/langgraph</a></td>
<td style="text-align:right">96.02</td>
<td style="text-align:right">37,002 / 6,213</td>
<td>Agent与RAG</td>
<td>Agent后端开发者、平台团队与长任务应用架构师</td>
<td>构建可恢复、有状态且能长期运行的复杂Agent；机制：用图状态机、检查点、持久化、流式输出和人工介入保障执行；Build resilient agents.</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">83</td>
<td><a href="https://github.com/agno-agi/agno" target="_blank" rel="noopener noreferrer">agno-agi/agno</a></td>
<td style="text-align:right">95.96</td>
<td style="text-align:right">41,091 / 5,626</td>
<td>Agent与RAG</td>
<td>Agent平台开发者、企业AI工程团队与SaaS构建者</td>
<td>构建、运行并集中管理自有Agent平台和应用；机制：以SDK、运行时和控制平面整合存储、工具、权限、观测与部署；Build, run, and manage your own agent platform.</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">84</td>
<td><a href="https://github.com/janhq/jan" target="_blank" rel="noopener noreferrer">janhq/jan</a></td>
<td style="text-align:right">95.95</td>
<td style="text-align:right">43,496 / 2,895</td>
<td>企业效率</td>
<td>隐私敏感个人用户、本地模型爱好者与离线办公团队</td>
<td>在个人电脑运行可替代ChatGPT的本地对话助手；机制：用跨平台桌面应用下载模型、本地推理并按需连接云模型；Jan is an open source alternative to ChatGPT that runs 100% offline on your computer.</td>
<td>隐私与合规</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">85</td>
<td><a href="https://github.com/keras-team/keras" target="_blank" rel="noopener noreferrer">keras-team/keras</a></td>
<td style="text-align:right">95.90</td>
<td style="text-align:right">64,187 / 19,754</td>
<td>模型与训练</td>
<td>深度学习工程师、研究人员与教学团队</td>
<td>用统一高层接口快速构建和训练多类型深度学习模型；机制：在JAX、TensorFlow、PyTorch和OpenVINO之上提供一致模型API；Deep Learning for humans</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">86</td>
<td><a href="https://github.com/DayuanJiang/next-ai-draw-io" target="_blank" rel="noopener noreferrer">DayuanJiang/next-ai-draw-io</a></td>
<td style="text-align:right">95.73</td>
<td style="text-align:right">33,144 / 3,592</td>
<td>企业效率</td>
<td>产品经理、解决方案架构师与业务分析人员</td>
<td>通过自然语言创建、修改并美化流程图和架构图；机制：让大模型生成和编辑draw.io图形结构，并在Web界面交互预览；A next.js web application that integrates AI capabilities with draw.io diagrams. This app allows you to create, modi…</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">87</td>
<td><a href="https://github.com/OpenBMB/VoxCPM" target="_blank" rel="noopener noreferrer">OpenBMB/VoxCPM</a></td>
<td style="text-align:right">95.71</td>
<td style="text-align:right">33,062 / 3,771</td>
<td>模型与训练</td>
<td>语音模型研究员、配音产品团队与TTS应用开发者</td>
<td>生成多语言自然语音并设计或克隆可控声线；机制：以无分词扩散自回归模型、开放权重、API和微调流程实现TTS；VoxCPM2: Tokenizer-Free TTS for Multilingual Speech Generation, Creative Voice Design, and True-to-Life Cloning</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">88</td>
<td><a href="https://github.com/VectifyAI/PageIndex" target="_blank" rel="noopener noreferrer">VectifyAI/PageIndex</a></td>
<td style="text-align:right">95.59</td>
<td style="text-align:right">33,927 / 2,954</td>
<td>Agent与RAG</td>
<td>RAG工程师、法律金融文档团队与知识检索产品开发者</td>
<td>按文档结构推理检索内容而无需向量库和固定切块；机制：构建层级树索引并让Agent像人一样浏览目录、定位页段和证据；📑 PageIndex: Document Index for Vectorless, Reasoning-based RAG</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">89</td>
<td><a href="https://github.com/CopilotKit/CopilotKit" target="_blank" rel="noopener noreferrer">CopilotKit/CopilotKit</a></td>
<td style="text-align:right">95.58</td>
<td style="text-align:right">35,914 / 4,437</td>
<td>开发者工具</td>
<td>前端开发者、Agent产品团队与企业应用工程师</td>
<td>在Web、移动和协作界面嵌入Agent及生成式交互UI；机制：通过多框架SDK、AG-UI协议、共享状态和人工介入组件连接前后端；The Frontend Stack for Agents &amp; Generative UI. React, Angular, Mobile, Slack, and more. Makers of the AG-UI P…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">90</td>
<td><a href="https://github.com/bytedance/UI-TARS-desktop" target="_blank" rel="noopener noreferrer">bytedance/UI-TARS-desktop</a></td>
<td style="text-align:right">95.57</td>
<td style="text-align:right">37,909 / 3,811</td>
<td>Agent与RAG</td>
<td>多模态Agent研究员、桌面自动化开发者与产品团队</td>
<td>构建能理解屏幕并操作浏览器、桌面和工具的智能Agent；机制：结合视觉语言模型、GUI控制、MCP工具及CLI和WebUI执行任务；The Open-Source Multimodal AI Agent Stack: Connecting Cutting-Edge AI Models and Agent Infra</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">91</td>
<td><a href="https://github.com/upscayl/upscayl" target="_blank" rel="noopener noreferrer">upscayl/upscayl</a></td>
<td style="text-align:right">95.55</td>
<td style="text-align:right">46,822 / 2,313</td>
<td>内容生成</td>
<td>摄影师、设计师、电商运营与普通图片用户</td>
<td>在桌面端放大并增强低分辨率图片而保持视觉质量；机制：用预训练超分辨率模型和跨平台桌面界面完成批量图像增强；🆙 Upscayl - #1 Free and Open Source AI Image Upscaler for Linux, MacOS and Windows.</td>
<td>专业门槛</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">92</td>
<td><a href="https://github.com/deepfakes/faceswap" target="_blank" rel="noopener noreferrer">deepfakes/faceswap</a></td>
<td style="text-align:right">95.54</td>
<td style="text-align:right">55,339 / 13,374</td>
<td>内容生成</td>
<td>视觉特效创作者、研究人员与影视后期团队</td>
<td>训练人脸替换模型并批量转换图片和视频中的人物；机制：通过人脸提取、模型训练、身份转换和预览工具组成完整管线；Deepfakes Software For All</td>
<td>专业门槛</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">93</td>
<td><a href="https://github.com/continuedev/continue" target="_blank" rel="noopener noreferrer">continuedev/continue</a></td>
<td style="text-align:right">95.53</td>
<td style="text-align:right">34,805 / 5,015</td>
<td>开发者工具</td>
<td>软件开发者、企业研发团队与AI编码工具定制者</td>
<td>在IDE或终端中用Agent理解代码、修改项目和执行任务；机制：以CLI、VS Code和JetBrains插件连接模型、代码上下文与工具；open-source coding agent</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">94</td>
<td><a href="https://github.com/microsoft/graphrag" target="_blank" rel="noopener noreferrer">microsoft/graphrag</a></td>
<td style="text-align:right">95.52</td>
<td style="text-align:right">34,348 / 3,633</td>
<td>Agent与RAG</td>
<td>企业知识团队、RAG研究员与复杂文档分析人员</td>
<td>从非结构文本构建图索引并回答跨文档全局问题；机制：用大模型抽取实体关系、聚类生成摘要，再执行局部或全局检索；A modular graph-based Retrieval-Augmented Generation (RAG) system</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">95</td>
<td><a href="https://github.com/scikit-learn/scikit-learn" target="_blank" rel="noopener noreferrer">scikit-learn/scikit-learn</a></td>
<td style="text-align:right">95.39</td>
<td style="text-align:right">66,685 / 27,170</td>
<td>模型与训练</td>
<td>数据科学家、机器学习工程师、研究和教学人员</td>
<td>训练、评估和选择分类回归聚类等传统机器学习模型；机制：以一致Estimator API提供预处理、算法、验证、管线和模型选择；scikit-learn: machine learning in Python</td>
<td>专业门槛</td>
<td>BSD-3-Clause；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">96</td>
<td><a href="https://github.com/iOfficeAI/AionUi" target="_blank" rel="noopener noreferrer">iOfficeAI/AionUi</a></td>
<td style="text-align:right">95.39</td>
<td style="text-align:right">29,800 / 2,986</td>
<td>企业效率</td>
<td>知识工作者、远程Agent运营者与小型协作团队</td>
<td>在桌面全天运行和管理多个CLI Agent及自动化会话；机制：用本地跨平台GUI包装多种Agent，提供会话、远程访问和定时执行；Free, local, open-source 24/7 Cowork app for OpenClaw, Hermes Agent, Claude Code, Codex, OpenCode, Gemini CLI…</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">97</td>
<td><a href="https://github.com/sgl-project/sglang" target="_blank" rel="noopener noreferrer">sgl-project/sglang</a></td>
<td style="text-align:right">95.36</td>
<td style="text-align:right">30,166 / 7,078</td>
<td>推理部署</td>
<td>大模型推理平台工程师、云服务商与AI研究团队</td>
<td>高性能服务语言模型、多模态模型和生成式扩散模型；机制：通过Radix缓存、批调度、优化内核和分布式运行时提升吞吐；SGLang is a high-performance serving framework for large language models and multimodal models.</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">98</td>
<td><a href="https://github.com/RSSNext/Folo" target="_blank" rel="noopener noreferrer">RSSNext/Folo</a></td>
<td style="text-align:right">95.32</td>
<td style="text-align:right">38,630 / 2,099</td>
<td>企业效率</td>
<td>信息工作者、RSS重度用户、研究人员与内容策展者</td>
<td>聚合、筛选和阅读跨来源信息并减少订阅噪声；机制：将订阅源汇入统一时间线，结合列表、收藏、发现和AI辅助整理；🧡 Folo is the AI RSS Reader</td>
<td>数据准备与碎片</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">99</td>
<td><a href="https://github.com/pathwaycom/llm-app" target="_blank" rel="noopener noreferrer">pathwaycom/llm-app</a></td>
<td style="text-align:right">95.28</td>
<td style="text-align:right">59,076 / 1,432</td>
<td>Agent与RAG</td>
<td>企业搜索团队、RAG工程师与实时数据平台开发者</td>
<td>构建始终与业务数据同步的企业搜索和RAG应用；机制：用流式ETL、现成模板和多源连接器持续更新索引并部署云端或本地；Ready-to-run cloud templates for RAG, AI pipelines, and enterprise search with live data. 🐳Docker-friendly.⚡Always i…</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">100</td>
<td><a href="https://github.com/openai/openai-agents-python" target="_blank" rel="noopener noreferrer">openai/openai-agents-python</a></td>
<td style="text-align:right">95.26</td>
<td style="text-align:right">27,802 / 4,294</td>
<td>开发者工具</td>
<td>Python Agent开发者、AI产品团队与自动化平台工程师</td>
<td>构建包含工具、交接和护栏的多Agent工作流；机制：以轻量SDK抽象Agent、工具、Handoff、追踪和沙箱长任务执行；A lightweight, powerful framework for multi-agent workflows</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">101</td>
<td><a href="https://github.com/google/langextract" target="_blank" rel="noopener noreferrer">google/langextract</a></td>
<td style="text-align:right">95.25</td>
<td style="text-align:right">37,129 / 2,562</td>
<td>开发者工具</td>
<td>NLP开发者、临床数据团队与文档分析产品人员</td>
<td>从长篇非结构文本提取带原文定位的结构化字段；机制：按用户指令和示例驱动LLM抽取，并对齐来源跨度和可视化校验；A Python library for extracting structured information from unstructured text using LLMs with precise source grounding…</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">102</td>
<td><a href="https://github.com/simstudioai/sim" target="_blank" rel="noopener noreferrer">simstudioai/sim</a></td>
<td style="text-align:right">95.23</td>
<td style="text-align:right">29,030 / 3,696</td>
<td>Agent与RAG</td>
<td>企业自动化团队、Agent产品经理与系统集成商</td>
<td>构建、部署并运营连接业务系统的Agent和工作流；机制：用可视化或代码方式连接上千应用、模型、数据，并监控日志和调度；Build, deploy, and orchestrate AI agents. Sim is the central intelligence layer for your AI workforce.</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">103</td>
<td><a href="https://github.com/linshenkx/prompt-optimizer" target="_blank" rel="noopener noreferrer">linshenkx/prompt-optimizer</a></td>
<td style="text-align:right">95.20</td>
<td style="text-align:right">31,977 / 3,730</td>
<td>开发者工具</td>
<td>提示词使用者、内容创作者与AI应用开发者</td>
<td>改写和比较提示词以提高不同模型的输出质量；机制：通过多模型对照、自动优化、模板库和浏览器桌面入口迭代提示；An AI prompt optimizer for writing better prompts and getting better AI results.</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">104</td>
<td><a href="https://github.com/deepspeedai/DeepSpeed" target="_blank" rel="noopener noreferrer">deepspeedai/DeepSpeed</a></td>
<td style="text-align:right">95.14</td>
<td style="text-align:right">42,684 / 4,883</td>
<td>模型与训练</td>
<td>大模型训练团队、AI系统研究员与算力平台工程师</td>
<td>在多GPU集群高效训练和推理超大规模深度学习模型；机制：利用ZeRO、并行策略、显存卸载、优化器和融合内核节省资源；DeepSpeed is a deep learning optimization library that makes distributed training and inference easy, efficient, and…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">105</td>
<td><a href="https://github.com/meilisearch/meilisearch" target="_blank" rel="noopener noreferrer">meilisearch/meilisearch</a></td>
<td style="text-align:right">95.09</td>
<td style="text-align:right">58,491 / 2,607</td>
<td>数据与MLOps</td>
<td>产品搜索工程师、电商团队与SaaS应用开发者</td>
<td>为网站和应用快速加入关键词、语义及混合搜索；机制：提供易嵌入搜索API、索引、容错、过滤和向量混合查询；A lightning-fast search engine API bringing AI-powered hybrid search to your sites and applications.</td>
<td>成本与延迟</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">106</td>
<td><a href="https://github.com/huggingface/diffusers" target="_blank" rel="noopener noreferrer">huggingface/diffusers</a></td>
<td style="text-align:right">95.07</td>
<td style="text-align:right">34,038 / 7,142</td>
<td>模型与训练</td>
<td>生成模型研究员、创意AI开发者与模型微调团队</td>
<td>运行、训练和定制图像、视频、音频等扩散模型；机制：用模块化Pipeline、调度器、模型组件和训练脚本组合生成系统；🤗 Diffusers: State-of-the-art diffusion models for image, video, and audio generation in PyTorch.</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">107</td>
<td><a href="https://github.com/milvus-io/milvus" target="_blank" rel="noopener noreferrer">milvus-io/milvus</a></td>
<td style="text-align:right">95.06</td>
<td style="text-align:right">45,178 / 4,115</td>
<td>数据与MLOps</td>
<td>向量数据工程师、AI搜索平台与大规模RAG团队</td>
<td>在海量文本图像向量中提供低延迟相似性检索；机制：用分布式Kubernetes架构、索引和CPU或GPU加速扩展至十亿向量；Milvus is a high-performance, cloud-native vector database built for scalable vector ANN search</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">108</td>
<td><a href="https://github.com/ComposioHQ/composio" target="_blank" rel="noopener noreferrer">ComposioHQ/composio</a></td>
<td style="text-align:right">95.05</td>
<td style="text-align:right">29,169 / 4,653</td>
<td>开发者工具</td>
<td>Agent开发者、SaaS集成团队与企业自动化平台</td>
<td>让Agent安全调用上千业务应用并代表不同用户执行动作；机制：提供预认证工具包、用户会话、OAuth、触发器和沙箱工作台；Composio powers 1000+ toolkits, tool search, context management, authentication, and a sandboxed workbench to hel…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">109</td>
<td><a href="https://github.com/langchain-ai/deepagents" target="_blank" rel="noopener noreferrer">langchain-ai/deepagents</a></td>
<td style="text-align:right">94.87</td>
<td style="text-align:right">26,072 / 3,652</td>
<td>Agent与RAG</td>
<td>Agent开发者、企业AI团队与长流程自动化构建者</td>
<td>快速搭建能规划、委派并持续完成长程任务的Agent；机制：预置规划、文件系统、子Agent、记忆和检查点，同时允许替换组件；The batteries-included agent harness.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">110</td>
<td><a href="https://github.com/onyx-dot-app/onyx" target="_blank" rel="noopener noreferrer">onyx-dot-app/onyx</a></td>
<td style="text-align:right">94.68</td>
<td style="text-align:right">30,814 / 4,236</td>
<td>企业效率</td>
<td>企业知识工作者、内部搜索团队与IT平台管理员</td>
<td>在公司数据上自托管统一AI搜索、聊天和深度研究；机制：用五十余连接器、混合索引、Agent、代码执行和权限接入企业数据；Open Source AI Platform - AI Chat with advanced features that works with every LLM</td>
<td>数据准备与碎片</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">111</td>
<td><a href="https://github.com/SillyTavern/SillyTavern" target="_blank" rel="noopener noreferrer">SillyTavern/SillyTavern</a></td>
<td style="text-align:right">94.63</td>
<td style="text-align:right">30,528 / 5,770</td>
<td>内容生成</td>
<td>角色扮演创作者、LLM重度用户与交互故事社区</td>
<td>在高度可定制前端管理角色、世界观和多模型对话；机制：通过角色卡、Lorebook、扩展和多供应商连接组成高级聊天工作台；LLM Frontend for Power Users.</td>
<td>系统集成与锁定</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">112</td>
<td><a href="https://github.com/ageitgey/face_recognition" target="_blank" rel="noopener noreferrer">ageitgey/face_recognition</a></td>
<td style="text-align:right">94.61</td>
<td style="text-align:right">56,573 / 13,696</td>
<td>开发者工具</td>
<td>Python开发者、视觉应用原型团队与教学研究人员</td>
<td>以简单API识别、比对和操作图片中的人物面孔；机制：封装dlib人脸检测与特征向量，并提供Python库和命令行；The world's simplest facial recognition api for Python and the command line</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">113</td>
<td><a href="https://github.com/MadsLorentzen/ai-job-search" target="_blank" rel="noopener noreferrer">MadsLorentzen/ai-job-search</a></td>
<td style="text-align:right">94.60</td>
<td style="text-align:right">20,696 / 6,001</td>
<td>垂直行业应用</td>
<td>求职者、职业顾问与需要批量申请的专业人士</td>
<td>评估职位并定制简历、求职信和面试准备材料；机制：用本地Claude工作流匹配个人档案和职位描述后生成申请内容；The job search that runs on your machine. AI job application framework built on Claude Code: evaluate postings, tailor…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">114</td>
<td><a href="https://github.com/labring/FastGPT" target="_blank" rel="noopener noreferrer">labring/FastGPT</a></td>
<td style="text-align:right">94.55</td>
<td style="text-align:right">28,903 / 7,212</td>
<td>Agent与RAG</td>
<td>企业知识库、客服团队、AI解决方案商与低代码开发者</td>
<td>快速构建带知识检索的问答Agent和复杂业务流程；机制：用数据处理、RAG检索、可视化Flow、插件和模型管理实现应用；FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabiliti…</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">115</td>
<td><a href="https://github.com/jackwener/OpenCLI" target="_blank" rel="noopener noreferrer">jackwener/OpenCLI</a></td>
<td style="text-align:right">94.50</td>
<td style="text-align:right">26,445 / 2,608</td>
<td>开发者工具</td>
<td>Agent自动化开发者、数据采集人员与高级网站用户</td>
<td>把已登录网站、浏览器会话和桌面应用转换成CLI；机制：通过站点适配器、浏览器复用和确定性命令暴露登录后的页面操作；Make Any Website into CLI &amp; Use your logged-in browser by AI agent.</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">116</td>
<td><a href="https://github.com/AstrBotDevs/AstrBot" target="_blank" rel="noopener noreferrer">AstrBotDevs/AstrBot</a></td>
<td style="text-align:right">94.50</td>
<td style="text-align:right">36,180 / 2,514</td>
<td>Agent与RAG</td>
<td>聊天机器人开发者、社区运营者与企业客服团队</td>
<td>在多种即时通信平台部署个人助手、客服和知识Agent；机制：用IM适配器连接模型、插件、MCP、技能和知识库并统一运维；AI Agent Assistant &amp; development framework that integrates lots of IM platforms, LLMs, plugins and AI feature, and…</td>
<td>系统集成与锁定</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">117</td>
<td><a href="https://github.com/opendataloader-project/opendataloader-pdf" target="_blank" rel="noopener noreferrer">opendataloader-project/opendataloader-pdf</a></td>
<td style="text-align:right">94.49</td>
<td style="text-align:right">26,973 / 2,565</td>
<td>开发者工具</td>
<td>RAG数据团队、PDF处理厂商与无障碍文档工程师</td>
<td>把复杂PDF解析成Markdown、HTML和带坐标JSON；机制：结合确定性本地解析和AI混合模式识别版面、表格与阅读顺序；PDF Parser for AI-ready data. Automate PDF accessibility. Open-source.</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">118</td>
<td><a href="https://github.com/getzep/graphiti" target="_blank" rel="noopener noreferrer">getzep/graphiti</a></td>
<td style="text-align:right">94.49</td>
<td style="text-align:right">28,594 / 2,881</td>
<td>Agent与RAG</td>
<td>Agent记忆开发者、个性化应用团队与知识图谱工程师</td>
<td>为生产Agent构建可实时更新且理解时间的上下文图；机制：从事件抽取实体关系，维护时间有效性并用图和语义混合检索；Build Real-Time Knowledge Graphs for AI Agents</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">119</td>
<td><a href="https://github.com/ray-project/ray" target="_blank" rel="noopener noreferrer">ray-project/ray</a></td>
<td style="text-align:right">94.49</td>
<td style="text-align:right">43,191 / 7,784</td>
<td>模型与训练</td>
<td>机器学习平台团队、数据工程师与分布式Python开发者</td>
<td>把训练、调参、服务和数据任务扩展到计算集群；机制：用统一分布式任务与Actor运行时结合Train、Tune、Serve和Data库；Ray is an AI compute engine. Ray consists of a core distributed runtime and a set of AI Libraries for accel…</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">120</td>
<td><a href="https://github.com/gradio-app/gradio" target="_blank" rel="noopener noreferrer">gradio-app/gradio</a></td>
<td style="text-align:right">94.48</td>
<td style="text-align:right">43,116 / 3,546</td>
<td>开发者工具</td>
<td>机器学习研究员、模型演示团队与Python应用开发者</td>
<td>用少量Python代码为模型或函数创建并分享Web应用；机制：根据函数签名自动生成界面、事件和临时分享链接，无需前端开发；Build and share delightful machine learning apps, all in Python. 🌟 Star to support our work!</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">121</td>
<td><a href="https://github.com/volcengine/OpenViking" target="_blank" rel="noopener noreferrer">volcengine/OpenViking</a></td>
<td style="text-align:right">94.45</td>
<td style="text-align:right">26,562 / 2,078</td>
<td>数据与MLOps</td>
<td>Agent平台开发者、上下文工程师与企业知识团队</td>
<td>统一管理Agent记忆、知识库和技能所需的上下文；机制：以文件系统范式组织分层上下文，递归检索并从交互中持续演化；Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills.</td>
<td>数据准备与碎片</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">122</td>
<td><a href="https://github.com/langfuse/langfuse" target="_blank" rel="noopener noreferrer">langfuse/langfuse</a></td>
<td style="text-align:right">94.44</td>
<td style="text-align:right">30,905 / 3,255</td>
<td>安全评测治理</td>
<td>LLM工程团队、AI产品质量负责人和模型运营人员</td>
<td>追踪、调试、评测并协作改进生产中的大模型应用；机制：通过调用链、指标、数据集、实验、提示版本和OpenTelemetry集成观测；🪢 Open source AI engineering platform: LLM evals, observability, metrics, prompt management, playground, data…</td>
<td>评测与观测</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">123</td>
<td><a href="https://github.com/mindsdb/mindshub" target="_blank" rel="noopener noreferrer">mindsdb/mindshub</a></td>
<td style="text-align:right">94.40</td>
<td style="text-align:right">39,394 / 6,221</td>
<td>Agent与RAG</td>
<td>企业知识工作者、运营团队与内部AI平台管理员</td>
<td>把项目、研究和定时运营任务委派给可替换模型与Agent；机制：在统一工作区连接数据、模型和开源Agent并交付可分享应用结果；Make AI do actual work. Swap the model anytime — keep everything you've built.</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">124</td>
<td><a href="https://github.com/esengine/DeepSeek-Reasonix" target="_blank" rel="noopener noreferrer">esengine/DeepSeek-Reasonix</a></td>
<td style="text-align:right">94.35</td>
<td style="text-align:right">26,634 / 1,669</td>
<td>开发者工具</td>
<td>DeepSeek用户、终端开发者与成本敏感研发团队</td>
<td>用稳定前缀缓存的终端Agent持续处理编码任务；机制：以Go单文件Harness、插件配置和缓存友好提示组织模型工具调用；DeepSeek-native AI coding agent for your terminal. Engineered around prefix-cache stability — leave it running.</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">125</td>
<td><a href="https://github.com/microsoft/semantic-kernel" target="_blank" rel="noopener noreferrer">microsoft/semantic-kernel</a></td>
<td style="text-align:right">94.31</td>
<td style="text-align:right">28,294 / 4,673</td>
<td>开发者工具</td>
<td>企业应用开发者、架构师与多语言Agent平台团队</td>
<td>把大模型和多Agent编排快速集成到现有业务应用；机制：通过多语言SDK、模型提供商插件和跨运行时协议连接企业系统；Integrate cutting-edge LLM technology quickly and easily into your apps</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">126</td>
<td><a href="https://github.com/Kilo-Org/kilocode" target="_blank" rel="noopener noreferrer">Kilo-Org/kilocode</a></td>
<td style="text-align:right">94.31</td>
<td style="text-align:right">25,991 / 2,880</td>
<td>开发者工具</td>
<td>VS Code、JetBrains和终端中的软件研发团队</td>
<td>用同一编码Agent构建、修改、测试和交付软件；机制：在多IDE和CLI提供模型切换、模式、工具与项目上下文执行；Kilo is the all-in-one agentic engineering platform. Build, ship, and iterate faster with the most popular open sourc…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">127</td>
<td><a href="https://github.com/NVIDIA/NemoClaw" target="_blank" rel="noopener noreferrer">NVIDIA/NemoClaw</a></td>
<td style="text-align:right">94.26</td>
<td style="text-align:right">21,711 / 2,930</td>
<td>安全评测治理</td>
<td>Agent平台安全团队、企业AI工程师与基础设施管理员</td>
<td>在隔离环境中更安全地运行长期在线的AI Agent；机制：用OpenShell沙箱、网络策略、加固蓝图、推理路由和生命周期CLI防护；Run agents like Hermes, LangChain Deep Agents, and OpenClaw more securely inside NVIDIA OpenShell with mana…</td>
<td>安全治理</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">128</td>
<td><a href="https://github.com/alibaba/page-agent" target="_blank" rel="noopener noreferrer">alibaba/page-agent</a></td>
<td style="text-align:right">94.25</td>
<td style="text-align:right">25,880 / 2,379</td>
<td>开发者工具</td>
<td>Web产品开发者、测试工程师与页面自动化团队</td>
<td>让网页内置Agent通过自然语言理解并操作界面；机制：以单段JavaScript读取DOM并调用通用模型，无需扩展或无头浏览器；JavaScript in-page GUI agent. Control web interfaces with natural language.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">129</td>
<td><a href="https://github.com/decolua/9router" target="_blank" rel="noopener noreferrer">decolua/9router</a></td>
<td style="text-align:right">94.17</td>
<td style="text-align:right">21,664 / 3,646</td>
<td>推理部署</td>
<td>AI编码工具重度用户、独立开发者与预算敏感团队</td>
<td>在多个免费或低价模型间路由并避免额度和限流中断；机制：用本地网关聚合数十供应商，自动回退、配额管理并压缩Token；Unlimited FREE AI coding. Connect Claude Code, Codex, Cursor, Cline, Copilot, Antigravity to FREE Claude/GPT/Gemini…</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">130</td>
<td><a href="https://github.com/agentscope-ai/agentscope" target="_blank" rel="noopener noreferrer">agentscope-ai/agentscope</a></td>
<td style="text-align:right">94.12</td>
<td style="text-align:right">27,746 / 3,169</td>
<td>Agent与RAG</td>
<td>企业Agent开发者、平台团队与需要多租户服务的组织</td>
<td>构建、运行并理解具备权限控制的生产级Agent；机制：用事件总线、权限、多租户会话、服务化和可视化追踪提供运行框架；Build and run agents you can see, understand and trust.</td>
<td>评测与观测</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">131</td>
<td><a href="https://github.com/OthmanAdi/planning-with-files" target="_blank" rel="noopener noreferrer">OthmanAdi/planning-with-files</a></td>
<td style="text-align:right">94.10</td>
<td style="text-align:right">25,174 / 2,128</td>
<td>开发者工具</td>
<td>长任务编码Agent用户、团队负责人和自动化研究人员</td>
<td>让规划和进度在上下文清空、崩溃及多Agent间保持；机制：把计划、发现和进度写入Markdown，并用完成门禁和共享状态校验；Persistent file-based planning for AI coding agents and long-running agentic tasks. Crash-proof markdown plans…</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">132</td>
<td><a href="https://github.com/google-ai-edge/mediapipe" target="_blank" rel="noopener noreferrer">google-ai-edge/mediapipe</a></td>
<td style="text-align:right">94.08</td>
<td style="text-align:right">36,059 / 6,056</td>
<td>机器人与边缘</td>
<td>移动端、嵌入式和实时视觉产品开发团队</td>
<td>在手机和边缘设备部署实时视觉、音频和姿态ML功能；机制：用跨平台感知管线、预训练任务和硬件加速封装端侧推理；Cross-platform, customizable ML solutions for live and streaming media.</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">133</td>
<td><a href="https://github.com/ScrapeGraphAI/Scrapegraph-ai" target="_blank" rel="noopener noreferrer">ScrapeGraphAI/Scrapegraph-ai</a></td>
<td style="text-align:right">94.08</td>
<td style="text-align:right">28,259 / 2,728</td>
<td>开发者工具</td>
<td>数据工程师、Agent开发者与市场信息采集团队</td>
<td>用自然语言从网站和本地文档提取所需结构化信息；机制：通过LLM和图式抓取管线控制浏览、解析、多页搜索和结果格式；Python scraper based on AI</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">134</td>
<td><a href="https://github.com/Fosowl/agenticSeek" target="_blank" rel="noopener noreferrer">Fosowl/agenticSeek</a></td>
<td style="text-align:right">94.06</td>
<td style="text-align:right">26,614 / 2,979</td>
<td>Agent与RAG</td>
<td>隐私敏感个人用户、本地模型研究者与自主Agent开发者</td>
<td>在本机自主完成网页研究、编码、规划和语音交互；机制：让本地推理模型结合浏览器、工具、规划器和语音模块离线执行；Fully Local Manus AI. No APIs, No $200 monthly bills. Enjoy an autonomous agent that thinks, browses the web, and code…</td>
<td>隐私与合规</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">135</td>
<td><a href="https://github.com/charmbracelet/crush" target="_blank" rel="noopener noreferrer">charmbracelet/crush</a></td>
<td style="text-align:right">94.05</td>
<td style="text-align:right">26,443 / 2,095</td>
<td>开发者工具</td>
<td>终端软件开发者、开源模型用户与多模型研发团队</td>
<td>在终端维持项目会话并让所选模型协助编码；机制：以TUI结合LSP、代码工具、项目上下文和多供应商模型接口；Glamourous agentic coding for all 💘</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">136</td>
<td><a href="https://github.com/a2aproject/A2A" target="_blank" rel="noopener noreferrer">a2aproject/A2A</a></td>
<td style="text-align:right">93.83</td>
<td style="text-align:right">24,738 / 2,502</td>
<td>开发者工具</td>
<td>Agent平台厂商、企业架构师与跨组织集成团队</td>
<td>让不同框架和服务器上的Agent相互发现、通信与协作；机制：用开放协议定义Agent卡片、任务、消息、能力协商和异步交互；Agent2Agent (A2A) is an open protocol enabling communication and interoperability between opaque agentic applicat…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">137</td>
<td><a href="https://github.com/coleam00/Archon" target="_blank" rel="noopener noreferrer">coleam00/Archon</a></td>
<td style="text-align:right">93.80</td>
<td style="text-align:right">22,832 / 3,424</td>
<td>开发者工具</td>
<td>AI编码平台团队、软件工程负责人和流程治理人员</td>
<td>把规划、实现、验证、审查和PR固化为可重复流程；机制：使用YAML声明编码工作流并由引擎可靠调度各阶段Agent；The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">138</td>
<td><a href="https://github.com/rohitg00/agentmemory" target="_blank" rel="noopener noreferrer">rohitg00/agentmemory</a></td>
<td style="text-align:right">93.77</td>
<td style="text-align:right">24,965 / 2,064</td>
<td>开发者工具</td>
<td>编码Agent用户、研发团队与MCP工具开发者</td>
<td>让编码Agent跨项目和会话记住决策、知识与经验；机制：用置信度、知识生命周期、图谱和混合检索维护持久记忆；#1 Persistent memory for AI coding agents based on real-world benchmarks</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">139</td>
<td><a href="https://github.com/mastra-ai/mastra" target="_blank" rel="noopener noreferrer">mastra-ai/mastra</a></td>
<td style="text-align:right">93.77</td>
<td style="text-align:right">26,033 / 2,396</td>
<td>Agent与RAG</td>
<td>TypeScript开发者、AI创业团队与全栈产品工程师</td>
<td>从原型到生产构建可靠的AI应用和Agent；机制：用TypeScript框架整合工作流、RAG、记忆、评测、观测和部署；Mastra is the modern TypeScript framework for AI-powered applications and agents.</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">140</td>
<td><a href="https://github.com/assafelovic/gpt-researcher" target="_blank" rel="noopener noreferrer">assafelovic/gpt-researcher</a></td>
<td style="text-align:right">93.76</td>
<td style="text-align:right">28,246 / 3,817</td>
<td>Agent与RAG</td>
<td>研究人员、分析师、咨询顾问与内容研究团队</td>
<td>针对网页或本地资料生成事实充分且带引用的深度报告；机制：由规划和并行研究Agent检索多源证据，再综合校验并生成引文；An autonomous agent that conducts deep research on any data using any LLM providers</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">141</td>
<td><a href="https://github.com/topoteretes/cognee" target="_blank" rel="noopener noreferrer">topoteretes/cognee</a></td>
<td style="text-align:right">93.70</td>
<td style="text-align:right">27,557 / 2,726</td>
<td>Agent与RAG</td>
<td>Agent记忆开发者、RAG团队与知识图谱工程师</td>
<td>让Agent跨会话保留、连接并召回长期知识；机制：摄取多格式数据后持续构建自托管知识图，并按上下文检索；Cognee is the open-source AI memory platform for agents. Give your AI agents persistent long-term memory across sessions w…</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">142</td>
<td><a href="https://github.com/HKUDS/Vibe-Trading" target="_blank" rel="noopener noreferrer">HKUDS/Vibe-Trading</a></td>
<td style="text-align:right">93.70</td>
<td style="text-align:right">19,102 / 3,331</td>
<td>垂直行业应用</td>
<td>主动交易者、量化开发者与金融Agent构建团队</td>
<td>为Agent提供市场研究、因子、回测和模拟交易能力；机制：通过统一金融数据、因子库、回测、影子账户和MCP接口赋能；&quot;Vibe-Trading: Your Personal Trading Agent&quot;</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">143</td>
<td><a href="https://github.com/oraios/serena" target="_blank" rel="noopener noreferrer">oraios/serena</a></td>
<td style="text-align:right">93.62</td>
<td style="text-align:right">26,309 / 1,750</td>
<td>开发者工具</td>
<td>大型代码库开发者、编码Agent用户与重构团队</td>
<td>让Agent按符号语义检索、编辑、重构和调试代码；机制：利用语言服务器和关系结构通过MCP暴露高层代码操作；A powerful MCP toolkit for coding, providing semantic retrieval and editing capabilities - the IDE for your agent</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">144</td>
<td><a href="https://github.com/vercel/ai" target="_blank" rel="noopener noreferrer">vercel/ai</a></td>
<td style="text-align:right">93.58</td>
<td style="text-align:right">25,478 / 4,753</td>
<td>开发者工具</td>
<td>TypeScript全栈开发者、前端团队与AI产品创业者</td>
<td>构建流式聊天、工具调用、生成式界面和Agent应用；机制：以统一SDK抽象多模型供应商、流式协议、Hooks和工具调用；The AI Toolkit for TypeScript. From the creators of Next.js, the AI SDK is a free open-source library for building…</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">145</td>
<td><a href="https://github.com/google/adk-python" target="_blank" rel="noopener noreferrer">google/adk-python</a></td>
<td style="text-align:right">93.38</td>
<td style="text-align:right">20,559 / 3,677</td>
<td>开发者工具</td>
<td>Python Agent开发者、企业AI团队与解决方案工程师</td>
<td>以代码方式构建、评测并部署复杂的生产Agent；机制：通过Agent、Runner、会话、工具、评测和部署组件覆盖交付周期；An open-source, code-first Python toolkit for building, evaluating, and deploying sophisticated AI agents with f…</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">146</td>
<td><a href="https://github.com/chroma-core/chroma" target="_blank" rel="noopener noreferrer">chroma-core/chroma</a></td>
<td style="text-align:right">93.35</td>
<td style="text-align:right">28,759 / 2,376</td>
<td>数据与MLOps</td>
<td>RAG开发者、AI搜索创业团队与应用数据工程师</td>
<td>为AI应用提供向量、混合和全文搜索基础设施；机制：用简洁集合API、嵌入存储和托管无服务器索引实现快速检索；Search infrastructure for AI</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">147</td>
<td><a href="https://github.com/Pythagora-io/gpt-pilot" target="_blank" rel="noopener noreferrer">Pythagora-io/gpt-pilot</a></td>
<td style="text-align:right">93.29</td>
<td style="text-align:right">33,730 / 3,477</td>
<td>开发者工具</td>
<td>软件开发者、原型创业者与AI编码研究人员</td>
<td>由Agent逐步完成应用需求、架构、编码、审查和调试；机制：通过产品、架构、开发、评审和排障等角色迭代生成完整项目；The first real AI developer</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">148</td>
<td><a href="https://github.com/modular/modular" target="_blank" rel="noopener noreferrer">modular/modular</a></td>
<td style="text-align:right">93.23</td>
<td style="text-align:right">26,516 / 2,876</td>
<td>推理部署</td>
<td>模型服务团队、AI基础设施工程师与芯片平台开发者</td>
<td>跨CPU和GPU高性能编译、运行并扩展生成式模型服务；机制：通过MAX编译器和运行时抽象硬件差异，无需改代码优化模型；The Modular Platform (includes MAX &amp; Mojo)</td>
<td>成本与延迟</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">149</td>
<td><a href="https://github.com/onlook-dev/onlook" target="_blank" rel="noopener noreferrer">onlook-dev/onlook</a></td>
<td style="text-align:right">93.20</td>
<td style="text-align:right">26,165 / 2,034</td>
<td>内容生成</td>
<td>产品设计师、前端开发者与AI原生设计团队</td>
<td>在真实React代码上可视化设计、样式调整和生成界面；机制：用代码感知画布直接修改组件与Tailwind，并结合AI生成实现；The Cursor for Designers • An Open-Source AI-First Design tool • Visually build, style, and edit your React App…</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">150</td>
<td><a href="https://github.com/photoprism/photoprism" target="_blank" rel="noopener noreferrer">photoprism/photoprism</a></td>
<td style="text-align:right">93.17</td>
<td style="text-align:right">39,939 / 2,308</td>
<td>企业效率</td>
<td>摄影爱好者、家庭媒体管理员与隐私敏感组织</td>
<td>自托管整理、搜索、浏览和分享照片及视频资料；机制：用本地AI标签、人脸对象识别、元数据和全文搜索组织媒体库；AI-Powered Photos App 🌈💎✨</td>
<td>隐私与合规</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">151</td>
<td><a href="https://github.com/invoke-ai/InvokeAI" target="_blank" rel="noopener noreferrer">invoke-ai/InvokeAI</a></td>
<td style="text-align:right">93.16</td>
<td style="text-align:right">27,587 / 2,887</td>
<td>内容生成</td>
<td>专业视觉艺术家、设计机构与生成媒体制作团队</td>
<td>生成、编辑并迭代可控的高质量视觉创意资产；机制：以专业WebUI、画布、节点流程和扩散模型管理支持制作；Invoke is a leading creative engine for Stable Diffusion models, empowering professionals, artists, and enthusiasts to gen…</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">152</td>
<td><a href="https://github.com/blakeblackshear/frigate" target="_blank" rel="noopener noreferrer">blakeblackshear/frigate</a></td>
<td style="text-align:right">93.12</td>
<td style="text-align:right">34,248 / 3,350</td>
<td>垂直行业应用</td>
<td>家庭安防用户、智能家居集成商与摄像头运维人员</td>
<td>在本地监控IP摄像头并实时识别关键对象和事件；机制：用选择性帧分析、OpenCV、模型加速器和Home Assistant联动检测；NVR with realtime local object detection for IP cameras</td>
<td>隐私与合规</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">153</td>
<td><a href="https://github.com/yamadashy/repomix" target="_blank" rel="noopener noreferrer">yamadashy/repomix</a></td>
<td style="text-align:right">93.10</td>
<td style="text-align:right">27,055 / 1,430</td>
<td>开发者工具</td>
<td>编码Agent用户、代码审查人员与大型仓库维护者</td>
<td>把整个代码库打包成结构清晰且节省上下文的单一文件；机制：扫描、过滤并按目录组织代码，计算Token后输出模型友好格式；📦 Repomix is a powerful tool that packs your entire repository into a single, AI-friendly file. Perfect for when yo…</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">154</td>
<td><a href="https://github.com/dyad-sh/dyad" target="_blank" rel="noopener noreferrer">dyad-sh/dyad</a></td>
<td style="text-align:right">93.07</td>
<td style="text-align:right">20,892 / 2,519</td>
<td>开发者工具</td>
<td>非专业开发者、产品创始人与本地AI应用创作者</td>
<td>在本机通过自然语言快速创建和迭代Web应用；机制：用桌面应用调度自带密钥的模型生成代码、预览并持续编辑；Local, open-source AI app builder for power users ✨ v0 / Lovable / Replit / Bolt alternative 🌟 Star if you like it!</td>
<td>隐私与合规</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">155</td>
<td><a href="https://github.com/qdrant/qdrant" target="_blank" rel="noopener noreferrer">qdrant/qdrant</a></td>
<td style="text-align:right">92.97</td>
<td style="text-align:right">33,138 / 2,484</td>
<td>数据与MLOps</td>
<td>向量检索工程师、RAG平台与推荐搜索团队</td>
<td>在生产环境存储、过滤并低延迟搜索大规模向量；机制：以Rust引擎、量化、分片复制和混合查询支撑高负载检索；Qdrant - High-performance, massive-scale Vector Database and Vector Search Engine for the next generation of AI. Also ava…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">156</td>
<td><a href="https://github.com/TabbyML/tabby" target="_blank" rel="noopener noreferrer">TabbyML/tabby</a></td>
<td style="text-align:right">92.93</td>
<td style="text-align:right">33,687 / 1,763</td>
<td>开发者工具</td>
<td>企业软件团队、内网研发组织与隐私敏感开发者</td>
<td>自托管代码补全和对话助手以替代云端编程服务；机制：用本地模型服务、仓库索引、OpenAPI和IDE插件提供编码辅助；Self-hosted AI coding assistant</td>
<td>隐私与合规</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">157</td>
<td><a href="https://github.com/kortix-ai/suna" target="_blank" rel="noopener noreferrer">kortix-ai/suna</a></td>
<td style="text-align:right">92.83</td>
<td style="text-align:right">19,953 / 3,420</td>
<td>Agent与RAG</td>
<td>中小企业创始人、运营负责人和数字员工管理团队</td>
<td>把公司流程、Agent、技能和执行记录作为代码统一运行；机制：以仓库配置数字员工和技能，通过命令中心调度并交付工作结果；The Company AI Command Center</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">158</td>
<td><a href="https://github.com/Anil-matcha/Open-Generative-AI" target="_blank" rel="noopener noreferrer">Anil-matcha/Open-Generative-AI</a></td>
<td style="text-align:right">92.78</td>
<td style="text-align:right">23,051 / 3,944</td>
<td>内容生成</td>
<td>视觉内容创作者、营销团队与生成媒体开发者</td>
<td>自托管调用两百余模型生成不受平台限制的图片和视频；机制：用统一工作室和接口连接多种图像视频模型、队列与Agent技能；Unrestricted Open-source alternative to AI video platforms — Free AI image &amp; video generation studio with 200+ mode…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">159</td>
<td><a href="https://github.com/vxcontrol/pentagi" target="_blank" rel="noopener noreferrer">vxcontrol/pentagi</a></td>
<td style="text-align:right">92.70</td>
<td style="text-align:right">19,809 / 2,654</td>
<td>垂直行业应用</td>
<td>渗透测试团队、安全研究员与企业攻防平台</td>
<td>让自治Agent规划并执行复杂的安全测试和漏洞验证；机制：组合攻击角色、终端浏览器工具、知识库和实时监控完成测试；Fully autonomous AI Agents system capable of performing complex penetration testing tasks</td>
<td>安全治理</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">160</td>
<td><a href="https://github.com/Lightning-AI/pytorch-lightning" target="_blank" rel="noopener noreferrer">Lightning-AI/pytorch-lightning</a></td>
<td style="text-align:right">92.66</td>
<td style="text-align:right">31,232 / 3,757</td>
<td>模型与训练</td>
<td>深度学习研究员、模型训练团队与算力平台用户</td>
<td>把模型从单GPU训练扩展到大规模预训练和微调；机制：抽象训练循环、精度、反向传播和分布式基础设施并保留模型逻辑；Pretrain, finetune ANY AI model of ANY size on 1 or 10,000+ GPUs with zero code changes.</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">161</td>
<td><a href="https://github.com/karpathy/autoresearch" target="_blank" rel="noopener noreferrer">karpathy/autoresearch</a></td>
<td style="text-align:right">92.59</td>
<td style="text-align:right">90,783 / 13,055</td>
<td>模型与训练</td>
<td>机器学习研究员、小型实验室与单GPU模型团队</td>
<td>让Agent自动迭代nanochat训练实验并记录研究结果；机制：由编码Agent修改训练代码、运行单GPU实验、比较指标并循环改进；AI agents running research on single-GPU nanochat training automatically</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">162</td>
<td><a href="https://github.com/elizaOS/eliza" target="_blank" rel="noopener noreferrer">elizaOS/eliza</a></td>
<td style="text-align:right">92.59</td>
<td style="text-align:right">18,727 / 5,579</td>
<td>Agent与RAG</td>
<td>个人助手开发者、隐私敏感用户与智能设备团队</td>
<td>在桌面、移动和网页运行本地优先的个人Agent操作系统；机制：用统一运行时整合聊天、语音、消息、钱包、浏览器和端侧模型；Open source agentic operating system</td>
<td>隐私与合规</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">163</td>
<td><a href="https://github.com/conductor-oss/conductor" target="_blank" rel="noopener noreferrer">conductor-oss/conductor</a></td>
<td style="text-align:right">92.57</td>
<td style="text-align:right">31,990 / 953</td>
<td>Agent与RAG</td>
<td>平台工程师、分布式系统团队与Agent基础设施开发者</td>
<td>可靠编排需要重试、恢复和长期状态的Agent及微服务流程；机制：用事件驱动工作流引擎持久化状态并处理失败、重试和任务队列；Conductor is an event driven agentic workflow engine providing durable and highly resilient execution engine for…</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">164</td>
<td><a href="https://github.com/activepieces/activepieces" target="_blank" rel="noopener noreferrer">activepieces/activepieces</a></td>
<td style="text-align:right">92.55</td>
<td style="text-align:right">23,209 / 3,912</td>
<td>企业效率</td>
<td>中小企业运营、无代码自动化用户与集成开发者</td>
<td>可视化构建AI工作流、Agent和跨应用自动化；机制：用数百类型安全连接器组成流程并自动作为MCP服务提供给Agent；AI Agents &amp; MCPs &amp; AI Workflow Automation • (~400 MCP servers for AI agents) • AI Automation / AI Agent with MCPs…</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">165</td>
<td><a href="https://github.com/teng-lin/notebooklm-py" target="_blank" rel="noopener noreferrer">teng-lin/notebooklm-py</a></td>
<td style="text-align:right">92.52</td>
<td style="text-align:right">17,558 / 2,377</td>
<td>开发者工具</td>
<td>NotebookLM重度用户、研究自动化开发者与内容团队</td>
<td>以程序方式管理资料源、研究笔记、报告和音频内容；机制：通过非官方Python API、CLI和Agent技能调用网页未暴露的功能；Unofficial Python API and agentic skill for Google NotebookLM. Full programmatic access to NotebookLM's featu…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">166</td>
<td><a href="https://github.com/khoj-ai/khoj" target="_blank" rel="noopener noreferrer">khoj-ai/khoj</a></td>
<td style="text-align:right">92.51</td>
<td style="text-align:right">35,634 / 2,299</td>
<td>企业效率</td>
<td>知识工作者、研究人员、个人用户与自托管企业团队</td>
<td>建立能查询文档和网络并执行自动化的个人第二大脑；机制：索引本地与在线资料，通过RAG、Agent、定时任务和多端入口服务；Your AI second brain. Self-hostable. Get answers from the web or your docs. Build custom agents, schedule automat…</td>
<td>数据准备与碎片</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">167</td>
<td><a href="https://github.com/camel-ai/owl" target="_blank" rel="noopener noreferrer">camel-ai/owl</a></td>
<td style="text-align:right">92.50</td>
<td style="text-align:right">19,941 / 2,300</td>
<td>Agent与RAG</td>
<td>多Agent研究人员、业务自动化团队与通用助手开发者</td>
<td>协同多个专业Agent完成网页研究和现实世界复杂任务；机制：通过规划、浏览、工具调用和角色协作组成可评测的通用工作队；🦉 OWL: Optimized Workforce Learning for General Multi-Agent Assistance in Real-World Task Automation</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">168</td>
<td><a href="https://github.com/Tencent/WeKnora" target="_blank" rel="noopener noreferrer">Tencent/WeKnora</a></td>
<td style="text-align:right">92.41</td>
<td style="text-align:right">18,115 / 2,477</td>
<td>Agent与RAG</td>
<td>企业知识管理团队、RAG工程师与文档研究部门</td>
<td>把原始文档转为问答、复杂推理Agent和自维护Wiki；机制：通过文档理解、语义检索、ReAct工具编排和自动Wiki持续整理知识；Open-source LLM knowledge platform: turn raw documents into a queryable RAG, an autonomous reasoning agent,…</td>
<td>数据准备与碎片</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">169</td>
<td><a href="https://github.com/1Panel-dev/MaxKB" target="_blank" rel="noopener noreferrer">1Panel-dev/MaxKB</a></td>
<td style="text-align:right">92.41</td>
<td style="text-align:right">22,037 / 2,992</td>
<td>Agent与RAG</td>
<td>企业客服、内部知识库、教育机构与AI解决方案商</td>
<td>低门槛构建企业级知识问答和工具型Agent；机制：自动摄取切分文档，结合RAG、可视化工作流、MCP和多模型；🔥 MaxKB is an open-source platform for building enterprise-grade agents. 强大易用的开源企业级智能体平台。</td>
<td>专业门槛</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">170</td>
<td><a href="https://github.com/srbhr/Resume-Matcher" target="_blank" rel="noopener noreferrer">srbhr/Resume-Matcher</a></td>
<td style="text-align:right">92.37</td>
<td style="text-align:right">27,704 / 4,915</td>
<td>垂直行业应用</td>
<td>求职者、职业服务机构与专业简历撰写人员</td>
<td>针对每个职位定制简历、求职信和可交付PDF材料；机制：匹配职位描述与候选人经历，再用多种本地或云模型生成ATS内容；The #1 AI Harness for Building Resumes, PDFs, Cover Letters &amp; more, locally with 100+ LLMs support.</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">171</td>
<td><a href="https://github.com/hpcaitech/ColossalAI" target="_blank" rel="noopener noreferrer">hpcaitech/ColossalAI</a></td>
<td style="text-align:right">92.27</td>
<td style="text-align:right">41,409 / 4,504</td>
<td>模型与训练</td>
<td>大模型训练与推理基础设施团队</td>
<td>降低大模型分布式训练和推理的资源成本；机制：通过并行训练、显存优化和推理加速统一扩展大模型工作负载；Making large AI models cheaper, faster and more accessible</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">172</td>
<td><a href="https://github.com/Skyvern-AI/skyvern" target="_blank" rel="noopener noreferrer">Skyvern-AI/skyvern</a></td>
<td style="text-align:right">92.25</td>
<td style="text-align:right">22,186 / 2,079</td>
<td>企业效率</td>
<td>需要跨网站自动化的运营与技术团队</td>
<td>自动完成网页上的重复业务操作和数据录入；机制：结合视觉大模型与Playwright理解页面并执行可恢复工作流；Automate browser based workflows with AI</td>
<td>流程效率</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">173</td>
<td><a href="https://github.com/browserbase/stagehand" target="_blank" rel="noopener noreferrer">browserbase/stagehand</a></td>
<td style="text-align:right">92.21</td>
<td style="text-align:right">23,455 / 1,610</td>
<td>开发者工具</td>
<td>构建生产级浏览器自动化的开发团队</td>
<td>用自然语言和代码可靠控制网页浏览器；机制：在Playwright上融合确定性代码、AI动作预览和可缓存执行；The SDK For Browser Agents</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">174</td>
<td><a href="https://github.com/letta-ai/letta" target="_blank" rel="noopener noreferrer">letta-ai/letta</a></td>
<td style="text-align:right">92.19</td>
<td style="text-align:right">23,737 / 2,512</td>
<td>Agent与RAG</td>
<td>需要长期记忆的Agent应用开发者</td>
<td>构建能跨会话学习和保留状态的智能体；机制：用持久记忆、状态管理和Agent运行时维护长期上下文；Platform for stateful agents: AI with advanced memory that can learn and self-improve over time.</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">175</td>
<td><a href="https://github.com/wandb/openui" target="_blank" rel="noopener noreferrer">wandb/openui</a></td>
<td style="text-align:right">92.14</td>
<td style="text-align:right">22,463 / 2,058</td>
<td>内容生成</td>
<td>前端开发者和产品原型设计团队</td>
<td>从自然语言快速生成并迭代前端界面；机制：将描述实时渲染为HTML并转换为React等前端组件；OpenUI let's you describe UI using your imagination, then see it rendered live.</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">176</td>
<td><a href="https://github.com/microsoft/autogen" target="_blank" rel="noopener noreferrer">microsoft/autogen</a></td>
<td style="text-align:right">92.12</td>
<td style="text-align:right">59,647 / 8,979</td>
<td>Agent与RAG</td>
<td>多Agent应用研究与开发团队</td>
<td>构建可自主或人机协作的多智能体应用；机制：用可组合Agent、消息对话和工具调用编排多智能体协作；A programming framework for agentic AI</td>
<td>系统集成与锁定</td>
<td>CC-BY-4.0；中高：需逐条核验许可文本</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">177</td>
<td><a href="https://github.com/h4ckf0r0day/obscura" target="_blank" rel="noopener noreferrer">h4ckf0r0day/obscura</a></td>
<td style="text-align:right">92.12</td>
<td style="text-align:right">18,735 / 1,307</td>
<td>开发者工具</td>
<td>网页采集与浏览器Agent基础设施团队</td>
<td>以更低资源运行无头浏览器自动化任务；机制：用Rust和V8实现兼容CDP及Playwright的轻量浏览器引擎；The headless browser for AI agents and web scraping</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">178</td>
<td><a href="https://github.com/lyogavin/airllm" target="_blank" rel="noopener noreferrer">lyogavin/airllm</a></td>
<td style="text-align:right">92.09</td>
<td style="text-align:right">22,393 / 2,581</td>
<td>推理部署</td>
<td>显存受限的本地大模型开发者与研究者</td>
<td>在小显存GPU上运行超大参数语言模型；机制：按层从存储加载模型并控制显存峰值且无需量化；AirLLM 70B inference with single 4GB GPU</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">179</td>
<td><a href="https://github.com/agent0ai/agent-zero" target="_blank" rel="noopener noreferrer">agent0ai/agent-zero</a></td>
<td style="text-align:right">92.02</td>
<td style="text-align:right">18,388 / 3,680</td>
<td>Agent与RAG</td>
<td>需要本地工具执行能力的Agent开发者</td>
<td>构建可操作完整Linux环境的通用智能体；机制：以Docker桌面、浏览器、技能和插件提供可扩展工具运行时；Agent Zero AI framework</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">180</td>
<td><a href="https://github.com/RightNow-AI/openfang" target="_blank" rel="noopener noreferrer">RightNow-AI/openfang</a></td>
<td style="text-align:right">91.95</td>
<td style="text-align:right">17,996 / 2,278</td>
<td>Agent与RAG</td>
<td>部署长期自治Agent的个人与平台团队</td>
<td>持续运行、调度和管理多类自主智能体；机制：用Rust Agent操作系统统一调度、知识图谱、工具和监控面板；Open-source Agent Operating System</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">181</td>
<td><a href="https://github.com/nesquena/hermes-webui" target="_blank" rel="noopener noreferrer">nesquena/hermes-webui</a></td>
<td style="text-align:right">91.95</td>
<td style="text-align:right">15,820 / 2,095</td>
<td>企业效率</td>
<td>Hermes Agent的自托管个人用户</td>
<td>在浏览器和手机上使用并管理Hermes Agent；机制：用轻量Web界面复现终端会话、文件和模型配置能力；Hermes WebUI: The best way to use Hermes Agent from the web or from your phone!</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">182</td>
<td><a href="https://github.com/OtterMind/Chat2DB" target="_blank" rel="noopener noreferrer">OtterMind/Chat2DB</a></td>
<td style="text-align:right">91.93</td>
<td style="text-align:right">25,850 / 2,835</td>
<td>开发者工具</td>
<td>数据库开发、分析与运维人员</td>
<td>用自然语言查询、管理和理解多种数据库；机制：结合SQL客户端、数据库元数据和大模型生成解释及查询；AI-driven database tool and SQL client, The hottest GUI client, supporting MySQL, Oracle, PostgreSQL, DB2, SQL Server, DB2, S…</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">183</td>
<td><a href="https://github.com/HumanSignal/label-studio" target="_blank" rel="noopener noreferrer">HumanSignal/label-studio</a></td>
<td style="text-align:right">91.89</td>
<td style="text-align:right">27,808 / 3,616</td>
<td>数据与MLOps</td>
<td>机器学习数据与标注运营团队</td>
<td>标注并导出文本、图像、音频等训练数据；机制：用多模态标注界面、模板和模型辅助形成标准数据集；Label Studio is a multi-type data labeling and annotation tool with standardized output format</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">184</td>
<td><a href="https://github.com/promptfoo/promptfoo" target="_blank" rel="noopener noreferrer">promptfoo/promptfoo</a></td>
<td style="text-align:right">91.86</td>
<td style="text-align:right">23,139 / 2,068</td>
<td>安全评测治理</td>
<td>大模型应用质量与安全工程团队</td>
<td>测试提示词、Agent和RAG的质量与漏洞；机制：用声明式用例、模型对比、红队扫描及CI持续回归；Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude…</td>
<td>安全治理</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">185</td>
<td><a href="https://github.com/jundot/omlx" target="_blank" rel="noopener noreferrer">jundot/omlx</a></td>
<td style="text-align:right">91.86</td>
<td style="text-align:right">17,742 / 1,495</td>
<td>推理部署</td>
<td>Apple Silicon本地大模型用户与开发者</td>
<td>在macOS上高效托管和切换本地语言模型；机制：通过连续批处理、内存热层和SSD冷层持久化KV缓存；LLM inference server with continuous batching &amp; SSD caching for Apple Silicon — managed from the macOS menu bar</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">186</td>
<td><a href="https://github.com/danielmiessler/LifeOS" target="_blank" rel="noopener noreferrer">danielmiessler/LifeOS</a></td>
<td style="text-align:right">91.78</td>
<td style="text-align:right">16,589 / 2,265</td>
<td>企业效率</td>
<td>希望用AI管理生活与工作的个人知识工作者</td>
<td>汇总个人背景目标并辅助执行工作与生活任务；机制：建立个人上下文与目标状态，由统一AI工作台规划和协作；An General Purpose AI Harness for magnifying human capabilities. [CODING, BUILDING, CREATING, BUSINESS, LIFE, WORK, ...]</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">187</td>
<td><a href="https://github.com/fastai/fastai" target="_blank" rel="noopener noreferrer">fastai/fastai</a></td>
<td style="text-align:right">91.74</td>
<td style="text-align:right">28,075 / 7,655</td>
<td>模型与训练</td>
<td>深度学习学习者、研究者与应用开发者</td>
<td>用高层API快速训练实用深度学习模型；机制：在PyTorch上提供高层训练、数据处理和迁移学习组件；The fastai deep learning library</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">188</td>
<td><a href="https://github.com/mlflow/mlflow" target="_blank" rel="noopener noreferrer">mlflow/mlflow</a></td>
<td style="text-align:right">91.64</td>
<td style="text-align:right">26,972 / 5,980</td>
<td>数据与MLOps</td>
<td>机器学习与大模型应用工程团队</td>
<td>跟踪、评估、监控并治理生产AI应用；机制：统一Trace、实验、模型注册、评测、提示词和访问控制；The open source AI engineering platform for agents, LLMs, and ML models. MLflow enables teams of all sizes to debug, evaluate…</td>
<td>评测与观测</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">189</td>
<td><a href="https://github.com/can1357/oh-my-pi" target="_blank" rel="noopener noreferrer">can1357/oh-my-pi</a></td>
<td style="text-align:right">91.64</td>
<td style="text-align:right">17,215 / 1,544</td>
<td>开发者工具</td>
<td>使用终端编码Agent的软件开发者</td>
<td>在终端让Agent编辑、调试和执行复杂代码任务；机制：集成多模型、LSP、调试器、浏览器和子Agent工具链；⌥ AI Coding agent for the terminal — hash-anchored edits, optimized tool harness, LSP, Python, browser, subagents, and…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">190</td>
<td><a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" target="_blank" rel="noopener noreferrer">AUTOMATIC1111/stable-diffusion-webui</a></td>
<td style="text-align:right">91.63</td>
<td style="text-align:right">164,170 / 30,528</td>
<td>内容生成</td>
<td>Stable Diffusion图像创作者和模型玩家</td>
<td>在本地生成、编辑和扩展扩散模型图像；机制：以Gradio界面整合文生图、图生图、扩图和插件生态；Stable Diffusion web UI</td>
<td>专业门槛</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">191</td>
<td><a href="https://github.com/diegosouzapw/OmniRoute" target="_blank" rel="noopener noreferrer">diegosouzapw/OmniRoute</a></td>
<td style="text-align:right">91.61</td>
<td style="text-align:right">15,194 / 2,318</td>
<td>开发者工具</td>
<td>多模型编码工具用户与独立开发者</td>
<td>用单一端点低成本接入多家大模型服务；机制：聚合模型提供商并提供自动故障转移、协议兼容和上下文压缩；Never stop coding. Free AI gateway: one endpoint, 231+ providers (50+ free), connect Claude Code, Codex, Cursor, Cline &amp; Copi…</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">192</td>
<td><a href="https://github.com/screenpipe/screenpipe" target="_blank" rel="noopener noreferrer">screenpipe/screenpipe</a></td>
<td style="text-align:right">91.59</td>
<td style="text-align:right">19,754 / 1,924</td>
<td>企业效率</td>
<td>重视本地隐私的个人知识工作者与开发者</td>
<td>持续记录屏幕和语音并供AI检索和自动化；机制：在本地捕获、转写和索引活动数据并开放应用接口；YC (S26) | AI that knows what you've seen, said, or heard. Records everything you do, say, hear 24/7, local, private, secure. C…</td>
<td>隐私与合规</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">193</td>
<td><a href="https://github.com/mlc-ai/mlc-llm" target="_blank" rel="noopener noreferrer">mlc-ai/mlc-llm</a></td>
<td style="text-align:right">91.54</td>
<td style="text-align:right">22,933 / 2,085</td>
<td>推理部署</td>
<td>跨平台大模型部署与推理工程师</td>
<td>在不同硬件和操作系统上优化部署语言模型；机制：通过机器学习编译把模型优化为平台原生高性能运行时；Universal LLM Deployment Engine with ML Compilation</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">194</td>
<td><a href="https://github.com/AI4Finance-Foundation/FinGPT" target="_blank" rel="noopener noreferrer">AI4Finance-Foundation/FinGPT</a></td>
<td style="text-align:right">91.52</td>
<td style="text-align:right">20,837 / 2,960</td>
<td>模型与训练</td>
<td>金融大模型研究者与量化开发团队</td>
<td>训练和应用面向金融任务的开放语言模型；机制：提供金融数据管线、模型权重和指令微调方法；FinGPT: Open-Source Financial Large Language Models! Revolutionize 🔥 We release the trained model on HuggingFace.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">195</td>
<td><a href="https://github.com/pydantic/pydantic-ai" target="_blank" rel="noopener noreferrer">pydantic/pydantic-ai</a></td>
<td style="text-align:right">91.45</td>
<td style="text-align:right">18,383 / 2,343</td>
<td>Agent与RAG</td>
<td>Python生成式AI应用开发团队</td>
<td>构建类型安全的生产级Agent和AI工作流；机制：以Pydantic类型校验统一模型、工具、依赖注入和测试；AI Agent Framework, the Pydantic way</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">196</td>
<td><a href="https://github.com/browser-use/browser-harness" target="_blank" rel="noopener noreferrer">browser-use/browser-harness</a></td>
<td style="text-align:right">91.43</td>
<td style="text-align:right">15,872 / 1,481</td>
<td>Agent与RAG</td>
<td>需要完全控制真实浏览器的Agent开发者</td>
<td>让大模型直接操作并自我修复浏览器任务；机制：通过精简CDP连接让Agent动态编写缺失操作并持续改进；Browser Harness | Self-healing harness that enables LLMs to complete any task.</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">197</td>
<td><a href="https://github.com/huggingface/peft" target="_blank" rel="noopener noreferrer">huggingface/peft</a></td>
<td style="text-align:right">91.40</td>
<td style="text-align:right">21,385 / 2,385</td>
<td>模型与训练</td>
<td>资源受限的大模型微调研究与工程团队</td>
<td>低成本微调和适配大型预训练模型；机制：以LoRA等参数高效方法仅训练少量附加参数；🤗 PEFT: State-of-the-art Parameter-Efficient Fine-Tuning.</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">198</td>
<td><a href="https://github.com/trycua/cua" target="_blank" rel="noopener noreferrer">trycua/cua</a></td>
<td style="text-align:right">91.35</td>
<td style="text-align:right">19,552 / 1,283</td>
<td>Agent与RAG</td>
<td>计算机操作Agent研发与评测团队</td>
<td>训练、运行和评估可控制桌面的智能体；机制：提供隔离桌面沙箱、跨平台驱动、SDK和基准测试；Open-source infrastructure for Computer-Use Agents. Sandboxes, SDKs, and benchmarks to train and evaluate AI agents that can cont…</td>
<td>部署与运维</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">199</td>
<td><a href="https://github.com/Budibase/budibase" target="_blank" rel="noopener noreferrer">Budibase/budibase</a></td>
<td style="text-align:right">91.34</td>
<td style="text-align:right">28,106 / 2,177</td>
<td>企业效率</td>
<td>企业运营自动化与内部工具开发团队</td>
<td>构建运行日常运营的Agent、应用和自动化；机制：将数据源、界面、工作流与模型连接到低代码运营平台；AI agents, automations and apps that run your operations. Model agnostic.</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">200</td>
<td><a href="https://github.com/cft0808/edict" target="_blank" rel="noopener noreferrer">cft0808/edict</a></td>
<td style="text-align:right">91.29</td>
<td style="text-align:right">16,181 / 1,703</td>
<td>Agent与RAG</td>
<td>需要审计和干预多Agent流程的业务团队</td>
<td>分工编排并实时监督多智能体业务任务；机制：按三省六部角色划分审批与执行并提供全量审计看板；🏛️ 三省六部制 · OpenClaw Multi-Agent Orchestration System — 9 specialized AI agents with real-time dashboard, model config, and full a…</td>
<td>评测与观测</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">201</td>
<td><a href="https://github.com/deepset-ai/haystack" target="_blank" rel="noopener noreferrer">deepset-ai/haystack</a></td>
<td style="text-align:right">91.24</td>
<td style="text-align:right">25,865 / 2,911</td>
<td>Agent与RAG</td>
<td>构建生产RAG与Agent的Python开发团队</td>
<td>组合可控的检索、路由、记忆和生成流程；机制：用模块化组件与显式管线编排模型、数据源和工具；Open-source AI orchestration framework for building context-engineered, production-ready LLM applications. Design modular pipelin…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">202</td>
<td><a href="https://github.com/lm-sys/FastChat" target="_blank" rel="noopener noreferrer">lm-sys/FastChat</a></td>
<td style="text-align:right">91.18</td>
<td style="text-align:right">39,488 / 4,788</td>
<td>模型与训练</td>
<td>聊天大模型研究、服务与评测团队</td>
<td>训练、托管并对比评估大语言模型聊天服务；机制：统一训练脚本、分布式服务、网页交互和人类偏好竞技评测；An open platform for training, serving, and evaluating large language models. Release repo for Vicuna and Chatbot Arena.</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">203</td>
<td><a href="https://github.com/eosphoros-ai/DB-GPT" target="_blank" rel="noopener noreferrer">eosphoros-ai/DB-GPT</a></td>
<td style="text-align:right">91.14</td>
<td style="text-align:right">19,442 / 2,812</td>
<td>企业效率</td>
<td>企业数据分析师与数据应用开发团队</td>
<td>用自然语言查询数据并生成分析报告和行动；机制：连接数据库后由Agent生成SQL与代码并在沙箱执行；open-source agentic AI data assistant for the next generation of AI + Data products.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">204</td>
<td><a href="https://github.com/waooAI/waoowaoo" target="_blank" rel="noopener noreferrer">waooAI/waoowaoo</a></td>
<td style="text-align:right">91.06</td>
<td style="text-align:right">13,185 / 2,943</td>
<td>内容生成</td>
<td>短剧、漫画视频和影视内容制作团队</td>
<td>从小说自动生成分镜、角色、场景和完整视频；机制：以影视Agent工作流串联剧本解析、资产生成与镜头合成；首家工业级全流程 AI 影视生产平台。Industry-first professional AI Agent platform for controllable film &amp; video production. From shorts to…</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">205</td>
<td><a href="https://github.com/Zeyi-Lin/HivisionIDPhotos" target="_blank" rel="noopener noreferrer">Zeyi-Lin/HivisionIDPhotos</a></td>
<td style="text-align:right">91.05</td>
<td style="text-align:right">21,234 / 2,440</td>
<td>内容生成</td>
<td>证件照门店、摄影服务商与个人用户</td>
<td>自动制作合规尺寸和背景的标准证件照；机制：用人像抠图、背景替换、尺寸排版和美颜形成证件照；⚡️HivisionIDPhotos: a lightweight and efficient AI ID photos tools. 一个轻量级的AI证件照制作算法。</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">206</td>
<td><a href="https://github.com/stablyai/orca" target="_blank" rel="noopener noreferrer">stablyai/orca</a></td>
<td style="text-align:right">91.03</td>
<td style="text-align:right">16,048 / 1,254</td>
<td>开发者工具</td>
<td>并行使用多个编码Agent的软件开发者</td>
<td>同时运行、监控和远程干预多个编码智能体；机制：为每个Agent创建独立工作树并用桌面和手机统一管理；Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on d…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">207</td>
<td><a href="https://github.com/tirth8205/code-review-graph" target="_blank" rel="noopener noreferrer">tirth8205/code-review-graph</a></td>
<td style="text-align:right">91.00</td>
<td style="text-align:right">19,405 / 2,076</td>
<td>开发者工具</td>
<td>大型代码库中的开发与代码审查团队</td>
<td>向编码Agent提供精确的增量代码上下文；机制：用Tree-sitter构建持久代码图并经MCP检索相关变更；Local-first code intelligence graph for MCP and CLI. Builds a persistent map of your codebase so AI coding tools read o…</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">208</td>
<td><a href="https://github.com/iii-hq/iii" target="_blank" rel="noopener noreferrer">iii-hq/iii</a></td>
<td style="text-align:right">90.83</td>
<td style="text-align:right">18,432 / 1,229</td>
<td>Agent与RAG</td>
<td>Agent平台、后端与应用开发团队</td>
<td>组合并实时观察Agent所依赖的后端服务；机制：将函数注册为可触发服务并统一队列、状态、沙箱与观测；Effortlessly compose, extend, and observe every service in real-time for the first time ever.</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">209</td>
<td><a href="https://github.com/Anionex/banana-slides" target="_blank" rel="noopener noreferrer">Anionex/banana-slides</a></td>
<td style="text-align:right">90.74</td>
<td style="text-align:right">15,150 / 1,757</td>
<td>内容生成</td>
<td>商务演示、培训与内容制作人员</td>
<td>从想法、资料和模板生成可编辑演示文稿；机制：解析素材与页面要求，由图像模型生成并支持对话修改和PPTX导出；一个基于nano banana pro🍌的原生AI PPT生成应用，迈向＂Vibe PPT＂; 支持上传任意模板图片，上传任意素材&amp;智能解析，一句话/大纲/页面描述自动生成PPT，口头修改指定区域、一键导出可编辑ppt - An AI-na…</td>
<td>流程效率</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">210</td>
<td><a href="https://github.com/larksuite/cli" target="_blank" rel="noopener noreferrer">larksuite/cli</a></td>
<td style="text-align:right">90.69</td>
<td style="text-align:right">15,473 / 1,210</td>
<td>开发者工具</td>
<td>飞书管理员、开发者与企业Agent团队</td>
<td>从命令行或Agent自动操作飞书业务数据；机制：用统一CLI、两百余命令和Agent技能封装飞书开放接口；The official Lark/Feishu CLI tool, maintained by the larksuite team — built for humans and AI Agents. Covers core busines…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">211</td>
<td><a href="https://github.com/Cinnamon/kotaemon" target="_blank" rel="noopener noreferrer">Cinnamon/kotaemon</a></td>
<td style="text-align:right">90.68</td>
<td style="text-align:right">25,534 / 2,123</td>
<td>Agent与RAG</td>
<td>需要私有文档问答的知识工作者与开发者</td>
<td>上传文档并获得带检索依据的问答结果；机制：以可定制RAG界面连接解析器、向量检索和多模型；An open-source RAG-based tool for chatting with your documents.</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">212</td>
<td><a href="https://github.com/comet-ml/opik" target="_blank" rel="noopener noreferrer">comet-ml/opik</a></td>
<td style="text-align:right">90.66</td>
<td style="text-align:right">20,531 / 1,596</td>
<td>安全评测治理</td>
<td>LLM、RAG与Agent应用工程团队</td>
<td>调试、评估和监控生成式AI应用全生命周期；机制：记录调用链并运行自动评测、生产监控和提示词优化；Debug, evaluate, and monitor your LLM applications, RAG systems, and agentic workflows with comprehensive tracing, automated e…</td>
<td>评测与观测</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">213</td>
<td><a href="https://github.com/Zackriya-Solutions/meetily" target="_blank" rel="noopener noreferrer">Zackriya-Solutions/meetily</a></td>
<td style="text-align:right">90.62</td>
<td style="text-align:right">22,782 / 2,391</td>
<td>企业效率</td>
<td>重视数据主权的企业会议团队</td>
<td>在本地捕获、转写并总结线上和线下会议；机制：用本地ASR、说话人处理和Ollama生成会议纪要；Privacy first, AI meeting assistant with 4x faster Parakeet/Whisper live transcription, speaker diarization, and Ollama summar…</td>
<td>隐私与合规</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">214</td>
<td><a href="https://github.com/m-bain/whisperX" target="_blank" rel="noopener noreferrer">m-bain/whisperX</a></td>
<td style="text-align:right">90.61</td>
<td style="text-align:right">23,008 / 2,337</td>
<td>推理部署</td>
<td>会议、字幕与语音转写应用开发者</td>
<td>生成带词级时间戳和说话人区分的转写；机制：结合Whisper识别、强制对齐和说话人分离提升时间精度；WhisperX: Automatic Speech Recognition with Word-level Timestamps (&amp; Diarization)</td>
<td>幻觉与可靠性</td>
<td>BSD-2-Clause；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">215</td>
<td><a href="https://github.com/lutzroeder/netron" target="_blank" rel="noopener noreferrer">lutzroeder/netron</a></td>
<td style="text-align:right">90.58</td>
<td style="text-align:right">33,212 / 3,153</td>
<td>开发者工具</td>
<td>模型开发、转换与部署工程师</td>
<td>可视化检查多种格式的机器学习模型结构；机制：解析模型图、张量和算子并以浏览器或桌面界面展示；Visualizer for neural network, deep learning and machine learning models</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">216</td>
<td><a href="https://github.com/microsoft/qlib" target="_blank" rel="noopener noreferrer">microsoft/qlib</a></td>
<td style="text-align:right">90.53</td>
<td style="text-align:right">46,069 / 7,336</td>
<td>垂直行业应用</td>
<td>量化研究员与金融机器学习团队</td>
<td>从因子研究到回测生产构建量化策略；机制：提供金融数据、模型、回测流水线和自动化研发组件；Qlib is an AI-oriented Quant investment platform that aims to use AI tech to empower Quant Research, from exploring ideas to imple…</td>
<td>数据治理与实验复现</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">217</td>
<td><a href="https://github.com/toon-format/toon" target="_blank" rel="noopener noreferrer">toon-format/toon</a></td>
<td style="text-align:right">90.51</td>
<td style="text-align:right">24,831 / 1,102</td>
<td>开发者工具</td>
<td>为大模型传递结构化数据的开发者</td>
<td>以更少Token表示供大模型读取的结构化对象；机制：用面向Token的紧凑语法和模式约束替代冗长JSON；🎒 Token-Oriented Object Notation (TOON) – Compact, human-readable, schema-aware JSON for LLM prompts. Spec, benchmarks, T…</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">218</td>
<td><a href="https://github.com/jianchang512/pyvideotrans" target="_blank" rel="noopener noreferrer">jianchang512/pyvideotrans</a></td>
<td style="text-align:right">90.48</td>
<td style="text-align:right">18,261 / 2,262</td>
<td>内容生成</td>
<td>视频本地化、字幕与配音制作人员</td>
<td>转写、翻译视频并嵌入字幕和目标语言配音；机制：串联语音识别、机器翻译、配音合成和字幕烧录；Translate the video from one language to another and embed dubbing &amp; subtitles.</td>
<td>流程效率</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">219</td>
<td><a href="https://github.com/2noise/ChatTTS" target="_blank" rel="noopener noreferrer">2noise/ChatTTS</a></td>
<td style="text-align:right">90.46</td>
<td style="text-align:right">39,590 / 4,249</td>
<td>内容生成</td>
<td>对话语音应用开发者与内容创作者</td>
<td>为日常对话场景生成自然且可控的语音；机制：提供对话式语音生成模型权重、推理代码和韵律控制；A generative speech model for daily dialogue.</td>
<td>专业门槛</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">220</td>
<td><a href="https://github.com/rowboatlabs/rowboat" target="_blank" rel="noopener noreferrer">rowboatlabs/rowboat</a></td>
<td style="text-align:right">90.41</td>
<td style="text-align:right">16,089 / 1,598</td>
<td>企业效率</td>
<td>需要统一工作记忆的个人知识工作者</td>
<td>汇集邮件、会议和聊天并让AI协助完成工作；机制：将多源工作数据索引为知识图谱并提供协作工作台；Open-source AI coworker, with memory</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">221</td>
<td><a href="https://github.com/shap/shap" target="_blank" rel="noopener noreferrer">shap/shap</a></td>
<td style="text-align:right">90.35</td>
<td style="text-align:right">25,605 / 3,729</td>
<td>安全评测治理</td>
<td>机器学习研究、风控与模型验证团队</td>
<td>解释单次和整体机器学习模型预测依据；机制：用Shapley值计算特征贡献并生成局部与全局可视化；A game theoretic approach to explain the output of any machine learning model.</td>
<td>评测与观测</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">222</td>
<td><a href="https://github.com/NoFxAiOS/nofx" target="_blank" rel="noopener noreferrer">NoFxAiOS/nofx</a></td>
<td style="text-align:right">90.35</td>
<td style="text-align:right">12,544 / 3,015</td>
<td>垂直行业应用</td>
<td>自托管量化交易员与策略开发者</td>
<td>用语言模型持续分析市场并执行受控交易；机制：让模型决策交易，由Go运行时强制风险限额并记录推理；Your AI trading terminal assistant for US stocks, commodities, forex, and crypto.</td>
<td>安全治理</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">223</td>
<td><a href="https://github.com/PaddlePaddle/Paddle" target="_blank" rel="noopener noreferrer">PaddlePaddle/Paddle</a></td>
<td style="text-align:right">90.31</td>
<td style="text-align:right">24,020 / 6,009</td>
<td>模型与训练</td>
<td>企业机器学习工程师与模型研发团队</td>
<td>训练、部署和工业化管理深度学习模型；机制：提供分布式框架、模型库、开发套件和服务平台；PArallel Distributed Deep LEarning: Machine Learning Framework from Industrial Practice （『飞桨』核心框架，深度学习&amp;机器学习高性能单机、分布式训练和跨平台部署）</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">224</td>
<td><a href="https://github.com/memvid/memvid" target="_blank" rel="noopener noreferrer">memvid/memvid</a></td>
<td style="text-align:right">90.31</td>
<td style="text-align:right">15,741 / 1,358</td>
<td>Agent与RAG</td>
<td>Agent记忆与本地RAG应用开发者</td>
<td>以单文件保存并检索智能体长期记忆；机制：将文本和向量封装为可移植版本文件并提供即时检索；Memory layer for AI Agents. Replace complex RAG pipelines with a serverless, single-file memory layer. Give your agents instant re…</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">225</td>
<td><a href="https://github.com/emcie-co/parlant" target="_blank" rel="noopener noreferrer">emcie-co/parlant</a></td>
<td style="text-align:right">90.26</td>
<td style="text-align:right">18,163 / 1,535</td>
<td>Agent与RAG</td>
<td>客服和敏感B2C交互的Agent团队</td>
<td>构建一致、合规且可追踪的客户服务智能体；机制：用交互规则、会话控制和追踪约束大模型响应行为；Build reliable customer-facing AI agents with Parlant: an interaction control harness optimized for controlled, consistent, and…</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">226</td>
<td><a href="https://github.com/fathah/hermes-desktop" target="_blank" rel="noopener noreferrer">fathah/hermes-desktop</a></td>
<td style="text-align:right">90.23</td>
<td style="text-align:right">13,256 / 1,509</td>
<td>企业效率</td>
<td>Hermes Agent桌面端个人用户</td>
<td>安装、配置并在桌面与Hermes Agent聊天；机制：以原生桌面应用封装模型、会话、技能和消息渠道配置；Desktop Companion for Hermes Agent</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">227</td>
<td><a href="https://github.com/huggingface/datasets" target="_blank" rel="noopener noreferrer">huggingface/datasets</a></td>
<td style="text-align:right">90.19</td>
<td style="text-align:right">21,706 / 3,290</td>
<td>数据与MLOps</td>
<td>机器学习数据工程师与模型研究团队</td>
<td>获取、处理并复用多模态训练和评测数据集；机制：用统一加载器、流式处理和可复现变换连接数据中心；🤗 The largest hub of ready-to-use datasets for AI models with fast, easy-to-use and efficient data manipulation tools</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">228</td>
<td><a href="https://github.com/ogulcancelik/herdr" target="_blank" rel="noopener noreferrer">ogulcancelik/herdr</a></td>
<td style="text-align:right">90.19</td>
<td style="text-align:right">15,285 / 1,013</td>
<td>开发者工具</td>
<td>并行使用终端Agent的软件开发者</td>
<td>在一个终端中查看和切换多个Agent会话；机制：以终端多路复用器持久运行会话并展示阻塞与完成状态；agent multiplexer that lives in your terminal.</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">229</td>
<td><a href="https://github.com/op7418/guizang-ppt-skill" target="_blank" rel="noopener noreferrer">op7418/guizang-ppt-skill</a></td>
<td style="text-align:right">90.05</td>
<td style="text-align:right">20,934 / 1,498</td>
<td>内容生成</td>
<td>使用编码Agent制作网页演示的内容创作者</td>
<td>生成具有固定视觉体系的单文件网页演示；机制：用Agent Skill组合版式规范、图片提示和WebGL播放运行时；AI-agent Skill for generating polished HTML slide decks: editorial magazine and Swiss layouts, image prompts, social…</td>
<td>专业门槛</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">230</td>
<td><a href="https://github.com/modelscope/FunASR" target="_blank" rel="noopener noreferrer">modelscope/FunASR</a></td>
<td style="text-align:right">90.02</td>
<td style="text-align:right">19,140 / 1,922</td>
<td>推理部署</td>
<td>语音产品研发与呼叫处理工程团队</td>
<td>构建多语言实时语音识别和说话人分析；机制：集成高效ASR、流式处理、说话人分离和兼容API；Industrial-grade speech recognition toolkit: 170x realtime, 50+ languages, speaker diarization, emotion detection, streaming, an…</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">231</td>
<td><a href="https://github.com/Tencent/ncnn" target="_blank" rel="noopener noreferrer">Tencent/ncnn</a></td>
<td style="text-align:right">89.97</td>
<td style="text-align:right">23,518 / 4,462</td>
<td>推理部署</td>
<td>移动、桌面和嵌入式AI工程师</td>
<td>在资源受限设备上高性能运行神经网络；机制：用无第三方依赖的CPU与Vulkan引擎转换并执行模型；ncnn is a high-performance neural network inference framework optimized for the mobile platform</td>
<td>成本与延迟</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">232</td>
<td><a href="https://github.com/pyg-team/pytorch_geometric" target="_blank" rel="noopener noreferrer">pyg-team/pytorch_geometric</a></td>
<td style="text-align:right">89.95</td>
<td style="text-align:right">23,885 / 4,012</td>
<td>模型与训练</td>
<td>图神经网络研究者与图机器学习工程师</td>
<td>构建、训练和扩展图神经网络模型；机制：在PyTorch上提供稀疏图算子、数据加载和分布式训练组件；Graph Neural Network Library for PyTorch</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">233</td>
<td><a href="https://github.com/xming521/WeClone" target="_blank" rel="noopener noreferrer">xming521/WeClone</a></td>
<td style="text-align:right">89.90</td>
<td style="text-align:right">18,075 / 1,528</td>
<td>企业效率</td>
<td>希望创建个人数字分身的聊天用户与开发者</td>
<td>用历史聊天训练并部署具有个人风格的数字分身；机制：串联聊天导出、清洗、微调和聊天机器人绑定；🚀 One-stop solution for creating your AI twin from chat history 💡 Fine-tune LLMs with your chat logs to capture your unique styl…</td>
<td>数据准备与碎片</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">234</td>
<td><a href="https://github.com/ItzCrazyKns/Vane" target="_blank" rel="noopener noreferrer">ItzCrazyKns/Vane</a></td>
<td style="text-align:right">89.83</td>
<td style="text-align:right">35,631 / 3,918</td>
<td>企业效率</td>
<td>重视隐私的个人搜索与研究用户</td>
<td>在本机搜索互联网并获得带引用的答案；机制：聚合网络检索与本地或云模型生成可追溯回答；Vane is an AI-powered answering engine.</td>
<td>隐私与合规</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">235</td>
<td><a href="https://github.com/arc53/DocsGPT" target="_blank" rel="noopener noreferrer">arc53/DocsGPT</a></td>
<td style="text-align:right">89.81</td>
<td style="text-align:right">17,978 / 2,072</td>
<td>企业效率</td>
<td>企业知识管理、客服与内部Agent团队</td>
<td>基于私有文档构建搜索、助手和研究Agent；机制：通过文档解析、RAG、Agent构建器和多模型API连接知识；Private AI platform for agents, assistants and enterprise search. Built-in Agent Builder, Deep research, Document anal…</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">236</td>
<td><a href="https://github.com/googleapis/mcp-toolbox" target="_blank" rel="noopener noreferrer">googleapis/mcp-toolbox</a></td>
<td style="text-align:right">89.76</td>
<td style="text-align:right">15,927 / 1,634</td>
<td>Agent与RAG</td>
<td>企业数据库与Agent应用开发团队</td>
<td>让AI助手安全访问和操作企业数据库；机制：以预构建MCP工具统一数据库连接、鉴权和查询接口；MCP Toolbox for Databases is an open source MCP server for databases.</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">237</td>
<td><a href="https://github.com/eyaltoledano/claude-task-master" target="_blank" rel="noopener noreferrer">eyaltoledano/claude-task-master</a></td>
<td style="text-align:right">89.74</td>
<td style="text-align:right">27,822 / 2,621</td>
<td>开发者工具</td>
<td>使用AI IDE的软件产品与开发团队</td>
<td>将需求拆解为可跟踪的开发任务并驱动Agent执行；机制：通过PRD解析、任务依赖和IDE集成管理AI开发计划；An AI-powered task-management system you can drop into Cursor, Lovable, Windsurf, Roo, and others.</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">238</td>
<td><a href="https://github.com/iOfficeAI/OfficeCLI" target="_blank" rel="noopener noreferrer">iOfficeAI/OfficeCLI</a></td>
<td style="text-align:right">89.70</td>
<td style="text-align:right">14,639 / 997</td>
<td>企业效率</td>
<td>Office文档自动化与Agent开发团队</td>
<td>让Agent读取、编辑和验证Word、Excel及PPT；机制：用单文件CLI解析并高保真渲染Office文档形成视觉反馈环；OfficeCLI is the first and best Office suite purpose-built for AI agents to read, edit, and automate Word, Exce…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">239</td>
<td><a href="https://github.com/microsoft/onnxruntime" target="_blank" rel="noopener noreferrer">microsoft/onnxruntime</a></td>
<td style="text-align:right">89.68</td>
<td style="text-align:right">21,057 / 4,047</td>
<td>推理部署</td>
<td>跨平台模型推理与性能工程团队</td>
<td>在多硬件上加速运行不同框架训练的模型；机制：以统一运行时执行ONNX图并调用硬件加速和图优化；ONNX Runtime: cross-platform, high performance ML inferencing and training accelerator</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">240</td>
<td><a href="https://github.com/MemoriLabs/Memori" target="_blank" rel="noopener noreferrer">MemoriLabs/Memori</a></td>
<td style="text-align:right">89.65</td>
<td style="text-align:right">15,567 / 2,801</td>
<td>Agent与RAG</td>
<td>企业Agent平台和应用开发团队</td>
<td>把Agent会话和执行过程转为持久结构化状态；机制：以模型和数据库无关的记忆层接入现有数据基础设施；Memori is agent-native memory infrastructure. A LLM-agnostic layer that turns agent execution and conversation into structur…</td>
<td>数据准备与碎片</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">241</td>
<td><a href="https://github.com/BloopAI/vibe-kanban" target="_blank" rel="noopener noreferrer">BloopAI/vibe-kanban</a></td>
<td style="text-align:right">89.54</td>
<td style="text-align:right">27,331 / 2,903</td>
<td>开发者工具</td>
<td>同时管理多个编码Agent的软件开发团队</td>
<td>规划代码任务并审查多个智能体的执行结果；机制：用看板、隔离工作区、分支和开发服务器组织Agent并行工作；Get 10X more out of Claude Code, Codex or any coding agent</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">242</td>
<td><a href="https://github.com/Canner/WrenAI" target="_blank" rel="noopener noreferrer">Canner/WrenAI</a></td>
<td style="text-align:right">89.53</td>
<td style="text-align:right">15,782 / 1,807</td>
<td>企业效率</td>
<td>企业数据分析、BI与数据平台团队</td>
<td>将自然语言问题转成可信SQL、图表和仪表板；机制：用受治理语义上下文层约束Agent跨数据源生成分析；GenBI (Generative BI) for AI agents, an open-source, governed text-to-SQL through an open context layer that turns natural-…</td>
<td>幻觉与可靠性</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">243</td>
<td><a href="https://github.com/ag-ui-protocol/ag-ui" target="_blank" rel="noopener noreferrer">ag-ui-protocol/ag-ui</a></td>
<td style="text-align:right">89.51</td>
<td style="text-align:right">14,671 / 1,329</td>
<td>开发者工具</td>
<td>Agent前端与交互应用开发团队</td>
<td>标准化智能体与用户界面的实时双向交互；机制：用轻量事件协议传递Agent状态、工具调用和用户上下文；AG-UI: the Agent-User Interaction Protocol. Bring Agents into Frontend Applications.</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">244</td>
<td><a href="https://github.com/camel-ai/camel" target="_blank" rel="noopener noreferrer">camel-ai/camel</a></td>
<td style="text-align:right">89.50</td>
<td style="text-align:right">17,361 / 1,992</td>
<td>Agent与RAG</td>
<td>多Agent研究者与大规模协作系统开发者</td>
<td>构建并研究可演化的大规模多智能体系统；机制：提供角色、环境、通信、数据生成和强化学习组件；🐫 CAMEL: The first and the best multi-agent framework. Finding the Scaling Law of Agents. https://www.camel-ai.org</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">245</td>
<td><a href="https://github.com/jlcodes99/cockpit-tools" target="_blank" rel="noopener noreferrer">jlcodes99/cockpit-tools</a></td>
<td style="text-align:right">89.42</td>
<td style="text-align:right">13,114 / 1,208</td>
<td>开发者工具</td>
<td>多AI IDE账号的个人开发者与小团队</td>
<td>切换、监控并并行使用多个AI编程工具账号；机制：统一管理账号、配额、自动唤醒和多实例启动； 🚀 通用 AI IDE 账号管理工具：支持 Antigravity / Codex / GitHub Copilot / Windsurf / Kiro / Cursor / Gemini-cli / CodeBuddy，多账号切换、配额监控、自动唤醒与多…</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">246</td>
<td><a href="https://github.com/onnx/onnx" target="_blank" rel="noopener noreferrer">onnx/onnx</a></td>
<td style="text-align:right">89.28</td>
<td style="text-align:right">21,131 / 3,960</td>
<td>推理部署</td>
<td>模型框架、工具和部署平台开发者</td>
<td>在不同机器学习框架间交换和迁移模型；机制：定义可扩展模型图、算子和标准序列化格式；Open standard for machine learning interoperability</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">247</td>
<td><a href="https://github.com/MODSetter/SurfSense" target="_blank" rel="noopener noreferrer">MODSetter/SurfSense</a></td>
<td style="text-align:right">89.24</td>
<td style="text-align:right">15,219 / 1,462</td>
<td>企业效率</td>
<td>市场情报、品牌和竞品研究团队</td>
<td>持续监控竞争对手、排名和市场动态；机制：聚合搜索与社媒数据，由定时Agent生成带引用简报和告警；NotebookLM for Competitive Intelligence Research. Give your AI agents Competitive Intelligence. Join our Discord: https://dis…</td>
<td>数据准备与碎片</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">248</td>
<td><a href="https://github.com/binary-husky/gpt_academic" target="_blank" rel="noopener noreferrer">binary-husky/gpt_academic</a></td>
<td style="text-align:right">89.16</td>
<td style="text-align:right">71,058 / 8,350</td>
<td>企业效率</td>
<td>科研人员、学生与论文写作者</td>
<td>阅读、翻译、润色和分析论文及科研代码；机制：通过插件化界面并行调用多模型处理PDF、LaTeX和代码；为GPT/GLM等LLM大语言模型提供实用化交互接口，特别优化论文阅读/润色/写作体验，模块化设计，支持自定义快捷按钮&amp;函数插件，支持Python和C++等项目剖析&amp;自译解功能，PDF/LaTex论文翻译&amp;总结功能，支持并行问询多种LLM模型，支…</td>
<td>流程效率</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">249</td>
<td><a href="https://github.com/HBAI-Ltd/Toonflow-app" target="_blank" rel="noopener noreferrer">HBAI-Ltd/Toonflow-app</a></td>
<td style="text-align:right">89.14</td>
<td style="text-align:right">11,333 / 2,092</td>
<td>内容生成</td>
<td>动画短剧和网文视频内容创作团队</td>
<td>将小说或剧本批量转化为完整动画短剧；机制：串联AI编剧、分镜、角色生成和视频合成的桌面流程；Toonflow 是开源一站式 AI 短剧创作工具，将小说、剧本快速转化为动画短剧。集成 AI 编剧、智能分镜、角色与视频生成，跨平台桌面端轻量部署，助力创作者低成本批量产出视觉内容。Toonflow is an open-source AI tool t…</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">250</td>
<td><a href="https://github.com/NVIDIA/SkillSpector" target="_blank" rel="noopener noreferrer">NVIDIA/SkillSpector</a></td>
<td style="text-align:right">89.02</td>
<td style="text-align:right">12,800 / 1,050</td>
<td>安全评测治理</td>
<td>Agent开发、安全团队与Skill使用者</td>
<td>安装前检测Agent Skill的恶意行为和漏洞；机制：结合规则、AST污点分析、YARA、CVE与语义扫描；Security scanner for AI agent skills. Detect vulnerabilities, malicious patterns, and security risks.</td>
<td>安全治理</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">251</td>
<td><a href="https://github.com/FoundationAgents/MetaGPT" target="_blank" rel="noopener noreferrer">FoundationAgents/MetaGPT</a></td>
<td style="text-align:right">88.98</td>
<td style="text-align:right">69,299 / 8,837</td>
<td>Agent与RAG</td>
<td>多Agent软件开发与自动化研究团队</td>
<td>用多角色智能体协作完成软件需求到交付；机制：将产品、架构、编码和测试角色编码为标准操作流程；🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">252</td>
<td><a href="https://github.com/GLips/Figma-Context-MCP" target="_blank" rel="noopener noreferrer">GLips/Figma-Context-MCP</a></td>
<td style="text-align:right">88.90</td>
<td style="text-align:right">15,367 / 1,211</td>
<td>开发者工具</td>
<td>从Figma实现界面的前端和AI编码团队</td>
<td>向编码Agent提供精确的Figma布局上下文；机制：通过MCP提取设计节点、样式和资源供Agent生成代码；MCP server to provide Figma layout information to AI coding agents like Cursor</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">253</td>
<td><a href="https://github.com/Unity-Technologies/ml-agents" target="_blank" rel="noopener noreferrer">Unity-Technologies/ml-agents</a></td>
<td style="text-align:right">88.89</td>
<td style="text-align:right">19,549 / 4,470</td>
<td>模型与训练</td>
<td>游戏开发、仿真与强化学习研究团队</td>
<td>在Unity环境中训练和评估智能体行为；机制：将游戏场景封装为环境并提供强化与模仿学习算法；The Unity Machine Learning Agents Toolkit (ML-Agents) is an open-source project that enables games and simulations to serve as e…</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">254</td>
<td><a href="https://github.com/WEIFENG2333/VideoCaptioner" target="_blank" rel="noopener noreferrer">WEIFENG2333/VideoCaptioner</a></td>
<td style="text-align:right">88.83</td>
<td style="text-align:right">15,286 / 1,293</td>
<td>内容生成</td>
<td>视频字幕、翻译与本地化制作人员</td>
<td>自动生成、断句、校正并翻译视频字幕；机制：串联语音识别、大模型校正、翻译和桌面批处理界面；🎬 卡卡字幕助手 | VideoCaptioner - 基于 LLM 的智能字幕助手 - 视频字幕生成、断句、校正、字幕翻译全流程处理！- A powered tool for easy and efficient video subtitling.</td>
<td>流程效率</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">255</td>
<td><a href="https://github.com/langbot-app/LangBot" target="_blank" rel="noopener noreferrer">langbot-app/LangBot</a></td>
<td style="text-align:right">88.71</td>
<td style="text-align:right">16,828 / 1,486</td>
<td>Agent与RAG</td>
<td>企业即时通讯机器人和Agent开发团队</td>
<td>在多种聊天平台构建并运营生产级智能机器人；机制：统一模型、知识库、插件和消息渠道适配并支持工作流编排；Production-grade platform for building agentic IM bots - 生产级多平台智能机器人开发平台/ Agent、知识库编排、插件系统 / Bots for Discord / Slack / LIN…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">256</td>
<td><a href="https://github.com/XiaomiMiMo/MiMo-Code" target="_blank" rel="noopener noreferrer">XiaomiMiMo/MiMo-Code</a></td>
<td style="text-align:right">88.61</td>
<td style="text-align:right">11,782 / 1,163</td>
<td>开发者工具</td>
<td>使用终端AI编程的软件开发者</td>
<td>让编码Agent理解项目并执行跨会话开发任务；机制：结合代码读写、命令、Git、多模型和持久项目记忆；MiMo Code: Where Models and Agents Co-Evolve</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">257</td>
<td><a href="https://github.com/AsyncFuncAI/deepwiki-open" target="_blank" rel="noopener noreferrer">AsyncFuncAI/deepwiki-open</a></td>
<td style="text-align:right">88.56</td>
<td style="text-align:right">17,249 / 1,935</td>
<td>开发者工具</td>
<td>软件开发、维护和代码入职培训团队</td>
<td>自动为代码仓库生成可导航Wiki和架构图；机制：分析仓库结构并由大模型生成文档、关系说明和可视图；Open Source DeepWiki: AI-Powered Wiki Generator for GitHub/Gitlab/Bitbucket Repositories. Join the discord: https://discord.g…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">258</td>
<td><a href="https://github.com/micro/go-micro" target="_blank" rel="noopener noreferrer">micro/go-micro</a></td>
<td style="text-align:right">88.55</td>
<td style="text-align:right">22,958 / 2,411</td>
<td>Agent与RAG</td>
<td>使用Go构建Agent和服务的平台团队</td>
<td>构建带记忆、工具和可靠工作流的生产Agent；机制：在同一Go运行时统一模型、服务发现、MCP、A2A和持久流程；A Go agent harness and service framework</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">259</td>
<td><a href="https://github.com/microsoft/agent-framework" target="_blank" rel="noopener noreferrer">microsoft/agent-framework</a></td>
<td style="text-align:right">88.52</td>
<td style="text-align:right">12,023 / 2,021</td>
<td>Agent与RAG</td>
<td>.NET与Python企业Agent开发团队</td>
<td>构建、编排并部署生产级单Agent和多Agent流程；机制：用统一SDK连接模型、工具、工作流、托管和企业生态；A framework for building, orchestrating and deploying AI agents and multi-agent workflows with support for Python and…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">260</td>
<td><a href="https://github.com/NVIDIA/TensorRT-LLM" target="_blank" rel="noopener noreferrer">NVIDIA/TensorRT-LLM</a></td>
<td style="text-align:right">88.45</td>
<td style="text-align:right">14,089 / 2,546</td>
<td>推理部署</td>
<td>NVIDIA GPU大模型推理工程团队</td>
<td>在NVIDIA GPU上高吞吐低延迟运行大模型；机制：用TensorRT优化内核、量化、批处理和Python/C++运行时；TensorRT LLM provides users with an easy-to-use Python API to define Large Language Models (LLMs) and supports s…</td>
<td>成本与延迟</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">261</td>
<td><a href="https://github.com/NVIDIA-NeMo/Speech" target="_blank" rel="noopener noreferrer">NVIDIA-NeMo/Speech</a></td>
<td style="text-align:right">88.42</td>
<td style="text-align:right">17,754 / 3,499</td>
<td>模型与训练</td>
<td>语音模型研究者与PyTorch开发团队</td>
<td>创建、定制和训练语音识别、合成及语音大模型；机制：提供语音模型、训练配方、数据处理和分布式扩展组件；A scalable generative AI framework built for researchers and developers working on Large Language Models, Multimodal, and Sp…</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">262</td>
<td><a href="https://github.com/kyegomez/OpenMythos" target="_blank" rel="noopener noreferrer">kyegomez/OpenMythos</a></td>
<td style="text-align:right">88.42</td>
<td style="text-align:right">14,664 / 3,296</td>
<td>模型与训练</td>
<td>新型语言模型架构研究人员</td>
<td>研究和验证循环深度Transformer推理架构；机制：实现Prelude、循环块、Coda及可切换注意力和稀疏MoE；A theoretical reconstruction of the Claude Mythos architecture, built from first principles using the available re…</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">263</td>
<td><a href="https://github.com/AgriciDaniel/claude-seo" target="_blank" rel="noopener noreferrer">AgriciDaniel/claude-seo</a></td>
<td style="text-align:right">88.37</td>
<td style="text-align:right">10,993 / 1,611</td>
<td>垂直行业应用</td>
<td>SEO机构、企业SEO负责人和自由顾问</td>
<td>审计技术、内容、结构化数据和AI搜索优化；机制：并行运行专业Agent与确定性检查生成可验证整改计划；Universal SEO skill for Claude Code. 25 sub-skills + 18 sub-agents covering technical SEO, E-E-A-T, schema, GEO/AEO, backli…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">264</td>
<td><a href="https://github.com/superset-sh/superset" target="_blank" rel="noopener noreferrer">superset-sh/superset</a></td>
<td style="text-align:right">88.33</td>
<td style="text-align:right">12,374 / 1,070</td>
<td>开发者工具</td>
<td>并行使用编码Agent的软件工程团队</td>
<td>在本地并行编排多个编码智能体完成开发任务；机制：为各Agent创建工作树并集中展示终端、差异与任务状态；Code Editor for the AI Agents Era - Run an army of Claude Code, Codex, etc. on your machine</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">265</td>
<td><a href="https://github.com/pipecat-ai/pipecat" target="_blank" rel="noopener noreferrer">pipecat-ai/pipecat</a></td>
<td style="text-align:right">88.25</td>
<td style="text-align:right">13,340 / 2,293</td>
<td>Agent与RAG</td>
<td>实时语音和多模态Agent开发团队</td>
<td>构建低延迟语音助手与多智能体会话系统；机制：以流式管线编排音视频、模型服务、传输和Agent交接；Open Source framework for voice and multimodal conversational AI</td>
<td>系统集成与锁定</td>
<td>BSD-2-Clause；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">266</td>
<td><a href="https://github.com/Avaiga/taipy" target="_blank" rel="noopener noreferrer">Avaiga/taipy</a></td>
<td style="text-align:right">88.20</td>
<td style="text-align:right">19,254 / 1,982</td>
<td>数据与MLOps</td>
<td>数据科学家与机器学习应用工程师</td>
<td>将数据和AI算法快速转成生产级Web应用；机制：用Python封装数据管线、场景管理、可视界面和部署能力；Turns Data and AI algorithms into production-ready web applications in no time.</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">267</td>
<td><a href="https://github.com/naptha/tesseract.js" target="_blank" rel="noopener noreferrer">naptha/tesseract.js</a></td>
<td style="text-align:right">88.17</td>
<td style="text-align:right">38,186 / 2,361</td>
<td>开发者工具</td>
<td>Web与Node.js应用开发者</td>
<td>在浏览器和服务器中提取多语言图片文字；机制：通过JavaScript和WebAssembly封装Tesseract OCR引擎；Pure Javascript OCR for more than 100 Languages 📖🎉🖥</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">268</td>
<td><a href="https://github.com/BasedHardware/omi" target="_blank" rel="noopener noreferrer">BasedHardware/omi</a></td>
<td style="text-align:right">88.15</td>
<td style="text-align:right">12,965 / 2,109</td>
<td>机器人与边缘</td>
<td>个人知识工作者、可穿戴用户和助手开发者</td>
<td>持续记录屏幕与对话并生成可检索个人记忆；机制：跨桌面、手机和穿戴设备采集转写、摘要及行动项；AI that sees your screen, listens to your conversations and tells you what to do</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">269</td>
<td><a href="https://github.com/NVIDIA/Megatron-LM" target="_blank" rel="noopener noreferrer">NVIDIA/Megatron-LM</a></td>
<td style="text-align:right">88.13</td>
<td style="text-align:right">17,019 / 4,218</td>
<td>模型与训练</td>
<td>超大Transformer模型训练研究团队</td>
<td>在大规模GPU集群预训练和微调Transformer模型；机制：用张量、流水线、数据并行和高性能内核扩展训练；Ongoing research training transformer models at scale</td>
<td>成本与延迟</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">270</td>
<td><a href="https://github.com/coze-dev/coze-studio" target="_blank" rel="noopener noreferrer">coze-dev/coze-studio</a></td>
<td style="text-align:right">88.10</td>
<td style="text-align:right">21,147 / 3,080</td>
<td>Agent与RAG</td>
<td>企业Agent产品与低代码应用开发团队</td>
<td>可视化构建、调试并部署Agent应用；机制：集成提示词、RAG、插件、工作流、模型和应用模板；An AI agent development platform with all-in-one visual tools, simplifying agent creation, debugging, and deployment like never…</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">271</td>
<td><a href="https://github.com/explosion/spaCy" target="_blank" rel="noopener noreferrer">explosion/spaCy</a></td>
<td style="text-align:right">88.05</td>
<td style="text-align:right">33,736 / 4,688</td>
<td>模型与训练</td>
<td>生产NLP应用开发者与数据科学团队</td>
<td>构建命名实体、分类和文本处理等NLP流程；机制：提供预训练管线、高效语言组件和可训练Python API；💫 Industrial-strength Natural Language Processing (NLP) in Python</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">272</td>
<td><a href="https://github.com/andrewyng/aisuite" target="_blank" rel="noopener noreferrer">andrewyng/aisuite</a></td>
<td style="text-align:right">87.99</td>
<td style="text-align:right">14,917 / 1,578</td>
<td>Agent与RAG</td>
<td>需要多模型切换的生成式AI开发者</td>
<td>用统一接口调用不同生成式AI提供商；机制：以OpenAI风格API适配多家模型并允许配置级切换；Simple, unified interface to multiple Generative AI providers</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">273</td>
<td><a href="https://github.com/modelscope/ms-swift" target="_blank" rel="noopener noreferrer">modelscope/ms-swift</a></td>
<td style="text-align:right">87.97</td>
<td style="text-align:right">14,777 / 1,526</td>
<td>模型与训练</td>
<td>大语言及多模态模型微调工程团队</td>
<td>训练、微调和对齐数百种大模型与多模态模型；机制：统一PEFT、全参、SFT、DPO和GRPO训练配方；Use PEFT or Full-parameter to CPT/SFT/DPO/GRPO 600+ LLMs (Qwen3.6, DeepSeek-V4, GLM-5.1, InternLM3, Llama4, ...) and 300+ M…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">274</td>
<td><a href="https://github.com/CoplayDev/unity-mcp" target="_blank" rel="noopener noreferrer">CoplayDev/unity-mcp</a></td>
<td style="text-align:right">87.93</td>
<td style="text-align:right">12,328 / 1,308</td>
<td>开发者工具</td>
<td>使用AI助手开发Unity项目的游戏团队</td>
<td>让编码Agent控制Unity场景、资源和脚本；机制：通过MCP把编辑器操作封装为可调用工具并回传状态；Unity MCP acts as a bridge between AI assistants and your Unity Editor. Give your LLM tools to manage assets, control scen…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">275</td>
<td><a href="https://github.com/lightgbm-org/LightGBM" target="_blank" rel="noopener noreferrer">lightgbm-org/LightGBM</a></td>
<td style="text-align:right">87.87</td>
<td style="text-align:right">18,553 / 4,034</td>
<td>模型与训练</td>
<td>表格数据建模、排序与分类的数据科学家</td>
<td>快速训练高性能梯度提升树预测模型；机制：用直方图、叶节点生长和分布式算法加速树模型训练；A fast, distributed, high performance gradient boosting (GBT, GBDT, GBRT, GBM or MART) framework based on decision tree algorithms…</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">276</td>
<td><a href="https://github.com/huggingface/transformers.js" target="_blank" rel="noopener noreferrer">huggingface/transformers.js</a></td>
<td style="text-align:right">87.86</td>
<td style="text-align:right">16,171 / 1,165</td>
<td>推理部署</td>
<td>Web前端与浏览器端机器学习开发者</td>
<td>无服务器地在浏览器运行多模态预训练模型；机制：以JavaScript API加载Transformers模型并调用浏览器硬件加速；State-of-the-art Machine Learning for the web. Run 🤗 Transformers directly in your browser, with no need for…</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">277</td>
<td><a href="https://github.com/opensandbox-group/OpenSandbox" target="_blank" rel="noopener noreferrer">opensandbox-group/OpenSandbox</a></td>
<td style="text-align:right">87.85</td>
<td style="text-align:right">11,954 / 998</td>
<td>Agent与RAG</td>
<td>Agent平台、评测和强化学习基础设施团队</td>
<td>安全创建并管理Agent代码执行与桌面沙箱；机制：用统一SDK和协议调度Docker或Kubernetes隔离运行时；Secure, Fast, and Extensible Sandbox runtime for AI agents.</td>
<td>安全治理</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">278</td>
<td><a href="https://github.com/triggerdotdev/trigger.dev" target="_blank" rel="noopener noreferrer">triggerdotdev/trigger.dev</a></td>
<td style="text-align:right">87.82</td>
<td style="text-align:right">15,622 / 1,348</td>
<td>Agent与RAG</td>
<td>TypeScript AI工作流与Agent开发团队</td>
<td>部署可重试、长时间运行的AI任务和工作流；机制：提供队列、持久任务、重试、弹性伸缩和可观测托管；Trigger.dev – build and deploy fully‑managed AI agents and workflows</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">279</td>
<td><a href="https://github.com/InsForge/InsForge" target="_blank" rel="noopener noreferrer">InsForge/InsForge</a></td>
<td style="text-align:right">87.81</td>
<td style="text-align:right">12,177 / 1,055</td>
<td>开发者工具</td>
<td>使用编码Agent交付全栈应用的开发者</td>
<td>为编码Agent提供可直接使用的应用后端；机制：统一数据库、认证、存储、计算、托管与模型网关；The all-in-one, open-source backend platform for agentic coding. InsForge gives your coding agent database, auth, storage, comp…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">280</td>
<td><a href="https://github.com/web-infra-dev/midscene" target="_blank" rel="noopener noreferrer">web-infra-dev/midscene</a></td>
<td style="text-align:right">87.64</td>
<td style="text-align:right">14,035 / 1,070</td>
<td>开发者工具</td>
<td>Web、移动和桌面界面的测试自动化团队</td>
<td>用自然语言编写和执行跨平台UI自动化测试；机制：用视觉模型理解界面并生成可回放、可断言的交互步骤；AI-powered, vision-driven UI automation for every platform.</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">281</td>
<td><a href="https://github.com/browseros-ai/BrowserOS" target="_blank" rel="noopener noreferrer">browseros-ai/BrowserOS</a></td>
<td style="text-align:right">87.57</td>
<td style="text-align:right">11,814 / 1,212</td>
<td>企业效率</td>
<td>重视隐私的Agent浏览器个人用户与开发者</td>
<td>在浏览器本地运行可操作网页的AI智能体；机制：将Agent运行时集成进Chromium并支持自带密钥与本地模型；🌐 The open-source Agentic browser; alternative to ChatGPT Atlas, Perplexity Comet, Dia.</td>
<td>隐私与合规</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">282</td>
<td><a href="https://github.com/ggml-org/ggml" target="_blank" rel="noopener noreferrer">ggml-org/ggml</a></td>
<td style="text-align:right">87.54</td>
<td style="text-align:right">14,976 / 1,712</td>
<td>模型与训练</td>
<td>本地与边缘机器学习运行时开发者</td>
<td>构建跨平台低开销的机器学习张量计算；机制：用C语言实现量化、自动微分和CPU/GPU跨平台算子；Tensor library for machine learning</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">283</td>
<td><a href="https://github.com/StarTrail-org/LEANN" target="_blank" rel="noopener noreferrer">StarTrail-org/LEANN</a></td>
<td style="text-align:right">87.51</td>
<td style="text-align:right">12,664 / 1,141</td>
<td>Agent与RAG</td>
<td>需要本地个人搜索与RAG的知识工作者</td>
<td>在个人设备检索文件、邮件、聊天和浏览记录；机制：用图增强稀疏向量索引压缩存储并连接多类本地数据源；[MLsys2026]: RAG on Everything with LEANN. Enjoy 97% storage savings while running a fast, accurate, and 100% private RAG app…</td>
<td>隐私与合规</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">284</td>
<td><a href="https://github.com/cvat-ai/cvat" target="_blank" rel="noopener noreferrer">cvat-ai/cvat</a></td>
<td style="text-align:right">87.43</td>
<td style="text-align:right">16,258 / 3,740</td>
<td>数据与MLOps</td>
<td>计算机视觉数据标注与质检团队</td>
<td>标注、质检并协作管理图像视频和三维数据；机制：提供多模态标注界面、AI辅助、质量控制和团队工作流；Computer Vision Annotation Tool (CVAT) is a leading platform for building high-quality visual datasets for vision AI. It offe…</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">285</td>
<td><a href="https://github.com/microsoft/AirSim" target="_blank" rel="noopener noreferrer">microsoft/AirSim</a></td>
<td style="text-align:right">87.37</td>
<td style="text-align:right">18,296 / 4,902</td>
<td>机器人与边缘</td>
<td>无人机、自动驾驶与自主系统研究团队</td>
<td>在仿真环境开发和测试自主载具算法；机制：用Unreal或Unity、SIL/HIL和传感器API模拟真实载具；Open source simulator for autonomous vehicles built on Unreal Engine / Unity, from Microsoft AI &amp; Research</td>
<td>成本与延迟</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">286</td>
<td><a href="https://github.com/brokermr810/QuantDinger" target="_blank" rel="noopener noreferrer">brokermr810/QuantDinger</a></td>
<td style="text-align:right">87.33</td>
<td style="text-align:right">9,444 / 1,985</td>
<td>垂直行业应用</td>
<td>加密、股票和外汇量化交易开发者</td>
<td>回测、研究并受控执行多市场量化策略；机制：结合行情、Agent研究、回测、交易执行和强制风控开关；AI quantitative trading platform for crypto, stocks, and forex with backtesting, live trading, market data, and multi-agent r…</td>
<td>安全治理</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">287</td>
<td><a href="https://github.com/babysor/MockingBird" target="_blank" rel="noopener noreferrer">babysor/MockingBird</a></td>
<td style="text-align:right">87.32</td>
<td style="text-align:right">36,919 / 5,199</td>
<td>内容生成</td>
<td>中文语音克隆研究者与音频内容开发者</td>
<td>用短语音样本克隆音色并实时合成任意语音；机制：串联说话人编码、声学模型和声码器完成零样本合成；🚀Clone a voice in 5 seconds to generate arbitrary speech in real-time</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">288</td>
<td><a href="https://github.com/openai/CLIP" target="_blank" rel="noopener noreferrer">openai/CLIP</a></td>
<td style="text-align:right">87.28</td>
<td style="text-align:right">33,961 / 4,033</td>
<td>模型与训练</td>
<td>视觉语言模型研究者与多模态应用开发者</td>
<td>对齐图像与文本并执行零样本视觉分类；机制：用大规模图文对比预训练学习共享语义表示；CLIP (Contrastive Language-Image Pretraining), Predict the most relevant text snippet given an image</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">289</td>
<td><a href="https://github.com/browser-use/web-ui" target="_blank" rel="noopener noreferrer">browser-use/web-ui</a></td>
<td style="text-align:right">87.23</td>
<td style="text-align:right">16,184 / 2,716</td>
<td>企业效率</td>
<td>无代码使用浏览器Agent的个人与业务用户</td>
<td>通过网页界面让智能体执行浏览器任务；机制：用Gradio封装browser-use并接入多模型和现有浏览器会话；🖥️ Run AI Agent in your browser.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">290</td>
<td><a href="https://github.com/google/magika" target="_blank" rel="noopener noreferrer">google/magika</a></td>
<td style="text-align:right">87.22</td>
<td style="text-align:right">17,239 / 1,065</td>
<td>开发者工具</td>
<td>文件处理、安全扫描与内容路由开发团队</td>
<td>快速准确识别二进制和文本文件真实类型；机制：用大规模样本训练的轻量模型在CPU毫秒级分类文件；Fast and accurate AI powered file content types detection</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">291</td>
<td><a href="https://github.com/langchain4j/langchain4j" target="_blank" rel="noopener noreferrer">langchain4j/langchain4j</a></td>
<td style="text-align:right">87.19</td>
<td style="text-align:right">12,573 / 2,363</td>
<td>Agent与RAG</td>
<td>Java与JVM企业AI应用开发团队</td>
<td>在Java应用中构建RAG、工具调用和Agent；机制：统一模型与向量库API并集成Spring Boot和Quarkus；LangChain4j is an idiomatic, open-source Java library for building LLM-powered applications on the JVM. It offer…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">292</td>
<td><a href="https://github.com/Unstructured-IO/unstructured" target="_blank" rel="noopener noreferrer">Unstructured-IO/unstructured</a></td>
<td style="text-align:right">87.06</td>
<td style="text-align:right">15,101 / 1,267</td>
<td>数据与MLOps</td>
<td>企业RAG与文档数据工程团队</td>
<td>将复杂文档转换为可供语言模型使用的结构数据；机制：用分区、版面解析、清洗、切块和嵌入流水线处理文档；Convert documents to structured data effortlessly. Unstructured is open-source ETL solution for transforming complex documen…</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">293</td>
<td><a href="https://github.com/mlc-ai/web-llm" target="_blank" rel="noopener noreferrer">mlc-ai/web-llm</a></td>
<td style="text-align:right">86.94</td>
<td style="text-align:right">18,337 / 1,321</td>
<td>推理部署</td>
<td>浏览器端大模型应用开发者</td>
<td>在网页中直接高性能运行语言模型推理；机制：通过WebGPU和机器学习编译生成浏览器原生推理运行时；High-performance In-browser LLM Inference Engine</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">294</td>
<td><a href="https://github.com/livekit/agents" target="_blank" rel="noopener noreferrer">livekit/agents</a></td>
<td style="text-align:right">86.93</td>
<td style="text-align:right">11,314 / 3,311</td>
<td>Agent与RAG</td>
<td>实时语音和多模态交互应用开发团队</td>
<td>构建能听说看并实时响应的服务端智能体；机制：将实时媒体传输、语音管线、模型和工具编排为可编程参与者；A framework for building realtime voice AI agents 🤖🎙️📹</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">295</td>
<td><a href="https://github.com/RyanCodrai/turbovec" target="_blank" rel="noopener noreferrer">RyanCodrai/turbovec</a></td>
<td style="text-align:right">86.77</td>
<td style="text-align:right">12,643 / 1,118</td>
<td>数据与MLOps</td>
<td>RAG、向量搜索与AI基础设施工程师</td>
<td>以更少内存构建本地高速向量索引；机制：用TurboQuant量化与SIMD搜索支持免训练增量写入；A vector index built on TurboQuant, written in Rust with Python bindings</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">296</td>
<td><a href="https://github.com/cloudwego/eino" target="_blank" rel="noopener noreferrer">cloudwego/eino</a></td>
<td style="text-align:right">86.67</td>
<td style="text-align:right">12,243 / 1,017</td>
<td>Agent与RAG</td>
<td>使用Go构建大模型应用的开发团队</td>
<td>在Go中编排模型、工具、RAG和Agent流程；机制：以符合Go惯例的组件、图编排和回调统一应用开发；The ultimate LLM/AI application development framework in Go.</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">297</td>
<td><a href="https://github.com/Lightning-AI/litgpt" target="_blank" rel="noopener noreferrer">Lightning-AI/litgpt</a></td>
<td style="text-align:right">86.63</td>
<td style="text-align:right">13,473 / 1,468</td>
<td>模型与训练</td>
<td>大模型训练、微调与部署工程团队</td>
<td>预训练、微调并规模化部署主流语言模型；机制：用清晰模型实现和FSDP、LoRA、量化等训练配方；20+ high-performance LLMs with recipes to pretrain, finetune and deploy at scale.</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">298</td>
<td><a href="https://github.com/datalab-to/chandra" target="_blank" rel="noopener noreferrer">datalab-to/chandra</a></td>
<td style="text-align:right">86.62</td>
<td style="text-align:right">11,461 / 1,181</td>
<td>模型与训练</td>
<td>文档AI、财务和表单处理工程团队</td>
<td>将复杂PDF和图像识别为保留版面的结构数据；机制：用专用OCR模型解析表格、表单和手写内容并输出HTML等格式；OCR model that handles complex tables, forms, handwriting with full layout.</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">299</td>
<td><a href="https://github.com/alibaba/MNN" target="_blank" rel="noopener noreferrer">alibaba/MNN</a></td>
<td style="text-align:right">86.61</td>
<td style="text-align:right">15,631 / 2,382</td>
<td>机器人与边缘</td>
<td>移动端、嵌入式与IoT AI工程团队</td>
<td>在手机和边缘设备高效运行深度学习模型；机制：用轻量推理引擎和多硬件后端优化端侧模型执行；MNN: A blazing-fast, lightweight inference engine battle-tested by Alibaba, powering high-performance on-device LLMs and Edge AI.</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">300</td>
<td><a href="https://github.com/tracel-ai/burn" target="_blank" rel="noopener noreferrer">tracel-ai/burn</a></td>
<td style="text-align:right">86.59</td>
<td style="text-align:right">15,550 / 964</td>
<td>模型与训练</td>
<td>Rust机器学习研究与生产工程团队</td>
<td>用统一Rust框架训练并部署深度学习模型；机制：通过可插拔后端、自动微分和编译优化贯通训练推理；Burn is a next generation tensor library and Deep Learning Framework that doesn't compromise on flexibility, efficiency and po…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">301</td>
<td><a href="https://github.com/wkentaro/labelme" target="_blank" rel="noopener noreferrer">wkentaro/labelme</a></td>
<td style="text-align:right">86.51</td>
<td style="text-align:right">16,035 / 3,689</td>
<td>数据与MLOps</td>
<td>计算机视觉研究者和小型标注团队</td>
<td>为图像创建多形状标注和训练标签；机制：用Python桌面界面绘制多边形、框、线点并导出标签；Image annotation with Python. Supports polygon, rectangle, circle, line, point, and AI-assisted annotation.</td>
<td>数据准备与碎片</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">302</td>
<td><a href="https://github.com/abus-aikorea/voice-pro" target="_blank" rel="noopener noreferrer">abus-aikorea/voice-pro</a></td>
<td style="text-align:right">86.51</td>
<td style="text-align:right">11,136 / 1,626</td>
<td>内容生成</td>
<td>多语言视频、配音和语音内容创作者</td>
<td>转写、翻译、克隆并生成多语言语音内容；机制：在Gradio中整合TTS、语音克隆、Whisper和音频分离；Gradio WebUI for creators and developers, featuring key TTS (Edge-TTS, kokoro) and zero-shot Voice Cloning (E2 &amp; F5-TTS,…</td>
<td>流程效率</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">303</td>
<td><a href="https://github.com/Tencent-Hunyuan/HunyuanVideo" target="_blank" rel="noopener noreferrer">Tencent-Hunyuan/HunyuanVideo</a></td>
<td style="text-align:right">86.50</td>
<td style="text-align:right">12,326 / 1,275</td>
<td>模型与训练</td>
<td>视频生成研究者和AI内容应用开发者</td>
<td>生成高质量长时序视频并研究视频大模型；机制：提供视频生成模型权重、网络定义和推理采样代码；HunyuanVideo: A Systematic Framework For Large Video Generation Model</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">304</td>
<td><a href="https://github.com/guidance-ai/guidance" target="_blank" rel="noopener noreferrer">guidance-ai/guidance</a></td>
<td style="text-align:right">86.46</td>
<td style="text-align:right">21,656 / 1,190</td>
<td>开发者工具</td>
<td>需要可控输出的大模型应用开发者</td>
<td>约束语言模型生成结构、语法和工具调用流程；机制：用正则、CFG、条件循环和生成交错实现逐Token控制；A guidance language for controlling large language models.</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">305</td>
<td><a href="https://github.com/TencentCloud/CubeSandbox" target="_blank" rel="noopener noreferrer">TencentCloud/CubeSandbox</a></td>
<td style="text-align:right">86.43</td>
<td style="text-align:right">9,615 / 947</td>
<td>开发者工具</td>
<td>Agent代码执行与云基础设施团队</td>
<td>毫秒级创建硬件隔离的智能体执行沙箱；机制：基于RustVMM和KVM提供快照、克隆、SDK兼容及集群扩展；Instant, Concurrent, Secure &amp; Lightweight Sandbox for AI Agents.</td>
<td>安全治理</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">306</td>
<td><a href="https://github.com/microsoft/RD-Agent" target="_blank" rel="noopener noreferrer">microsoft/RD-Agent</a></td>
<td style="text-align:right">86.39</td>
<td style="text-align:right">13,850 / 1,760</td>
<td>数据与MLOps</td>
<td>量化研究、数据科学与模型研发团队</td>
<td>自动提出、实现和迭代数据模型研发方案；机制：由研究与开发Agent协同优化因子、模型和实验循环；Research and development (R&amp;D) is crucial for the enhancement of industrial productivity, especially in the AI era, where the…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">307</td>
<td><a href="https://github.com/alibaba/spring-ai-alibaba" target="_blank" rel="noopener noreferrer">alibaba/spring-ai-alibaba</a></td>
<td style="text-align:right">86.32</td>
<td style="text-align:right">10,281 / 2,276</td>
<td>Agent与RAG</td>
<td>Java企业Agent与工作流开发团队</td>
<td>构建可观测的人机协同多Agent应用；机制：在Spring生态提供Agent、工作流、上下文工程和管理平台；Agentic AI Framework for Java Developers</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">308</td>
<td><a href="https://github.com/mcp-use/mcp-use" target="_blank" rel="noopener noreferrer">mcp-use/mcp-use</a></td>
<td style="text-align:right">86.31</td>
<td style="text-align:right">10,278 / 1,358</td>
<td>Agent与RAG</td>
<td>MCP应用、服务器和Agent集成开发者</td>
<td>开发并调试ChatGPT和Claude使用的MCP应用；机制：以Python和TypeScript SDK、检查器及云服务覆盖全栈MCP；The fullstack MCP framework to develop MCP Apps for ChatGPT / Claude &amp; MCP Servers for AI Agents.</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">309</td>
<td><a href="https://github.com/EKKOLearnAI/hermes-studio" target="_blank" rel="noopener noreferrer">EKKOLearnAI/hermes-studio</a></td>
<td style="text-align:right">86.30</td>
<td style="text-align:right">9,027 / 1,114</td>
<td>企业效率</td>
<td>Hermes Agent自托管用户与管理员</td>
<td>本地聊天、配置并运营Hermes Agent任务；机制：用桌面运行时和Web控制台管理模型、会话、渠道与定时作业；Web dashboard for Hermes Agent — multi-platform AI chat, session management, scheduled jobs, usage analytics</td>
<td>部署与运维</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">310</td>
<td><a href="https://github.com/tensorflow/tfjs" target="_blank" rel="noopener noreferrer">tensorflow/tfjs</a></td>
<td style="text-align:right">86.28</td>
<td style="text-align:right">19,129 / 2,028</td>
<td>模型与训练</td>
<td>Web和JavaScript机器学习开发者</td>
<td>在浏览器或Node.js训练并部署机器学习模型；机制：通过WebGL等硬件加速和JavaScript API执行张量与模型；A WebGL accelerated JavaScript library for training and deploying ML models.</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">311</td>
<td><a href="https://github.com/EverMind-AI/EverOS" target="_blank" rel="noopener noreferrer">EverMind-AI/EverOS</a></td>
<td style="text-align:right">86.25</td>
<td style="text-align:right">10,769 / 852</td>
<td>Agent与RAG</td>
<td>需要跨应用长期记忆的Agent开发团队</td>
<td>为不同智能体提供可移植且用户自有的长期记忆；机制：用本地Markdown记忆层跨应用存储、检索并自我演化；One portable memory layer for every AI agent: local-first, Markdown-native, user-owned, and self-evolving across apps, to…</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">312</td>
<td><a href="https://github.com/microsoft/agent-lightning" target="_blank" rel="noopener noreferrer">microsoft/agent-lightning</a></td>
<td style="text-align:right">86.25</td>
<td style="text-align:right">17,375 / 1,521</td>
<td>模型与训练</td>
<td>Agent强化学习与优化研究工程团队</td>
<td>在不改框架的情况下训练和优化现有智能体；机制：采集提示、工具、奖励Trace并用强化学习形成训练循环；The absolute trainer to light up AI agents.</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">313</td>
<td><a href="https://github.com/codexu/note-gen" target="_blank" rel="noopener noreferrer">codexu/note-gen</a></td>
<td style="text-align:right">86.17</td>
<td style="text-align:right">12,281 / 927</td>
<td>企业效率</td>
<td>个人知识工作者、学生与研究人员</td>
<td>捕获零散信息并整理为结构化Markdown知识；机制：合并收件箱、编辑器、OCR、同步与AI整理问答；A cross-platform Markdown AI note-taking software.</td>
<td>数据准备与碎片</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">314</td>
<td><a href="https://github.com/dzhng/deep-research" target="_blank" rel="noopener noreferrer">dzhng/deep-research</a></td>
<td style="text-align:right">86.10</td>
<td style="text-align:right">19,328 / 1,972</td>
<td>Agent与RAG</td>
<td>研究人员、分析师与Agent开发学习者</td>
<td>自动迭代搜索并形成主题深度研究结果；机制：结合搜索、网页抓取和大模型反复调整研究方向；An AI-powered research assistant that performs iterative, deep research on any topic by combining search engines, web scraping, and…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">315</td>
<td><a href="https://github.com/langchain-ai/open-swe" target="_blank" rel="noopener noreferrer">langchain-ai/open-swe</a></td>
<td style="text-align:right">86.06</td>
<td style="text-align:right">10,222 / 1,167</td>
<td>开发者工具</td>
<td>希望定制内部编码Agent的软件工程组织</td>
<td>从Slack或Linear触发Agent完成代码并创建PR；机制：用云沙箱、子Agent、权限边界和LangGraph编排异步开发；An Open-Source Asynchronous Coding Agent</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">316</td>
<td><a href="https://github.com/dataelement/bisheng" target="_blank" rel="noopener noreferrer">dataelement/bisheng</a></td>
<td style="text-align:right">86.00</td>
<td style="text-align:right">11,508 / 1,882</td>
<td>数据与MLOps</td>
<td>大中型企业AI应用平台与知识工程团队</td>
<td>构建并运营复杂企业RAG、Agent和文档应用；机制：统一工作流、模型、数据集、微调、评测和企业权限观测；BISHENG is an open LLM devops platform for next generation Enterprise AI applications. Powerful and comprehensive feature…</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">317</td>
<td><a href="https://github.com/RasaHQ/rasa" target="_blank" rel="noopener noreferrer">RasaHQ/rasa</a></td>
<td style="text-align:right">85.76</td>
<td style="text-align:right">21,236 / 4,915</td>
<td>Agent与RAG</td>
<td>客服对话机器人和语音助手开发团队</td>
<td>构建可控的文本与语音业务对话流程；机制：结合NLU、对话管理、业务逻辑和多消息渠道连接器；💬 Open source machine learning framework to automate text- and voice-based conversations: NLU, dialogue management, connect to Sl…</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">318</td>
<td><a href="https://github.com/debpalash/OmniVoice-Studio" target="_blank" rel="noopener noreferrer">debpalash/OmniVoice-Studio</a></td>
<td style="text-align:right">85.70</td>
<td style="text-align:right">8,245 / 1,303</td>
<td>内容生成</td>
<td>重视隐私的配音、克隆与听写创作者</td>
<td>在本地克隆、设计、配音和听写多语言语音；机制：将多种本地语音模型封装为无账号无云的桌面工作台；The open-source ElevenLabs alternative for local voice cloning, design, create, dubbing and dictation Desktop App</td>
<td>隐私与合规</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">319</td>
<td><a href="https://github.com/casdoor/casdoor" target="_blank" rel="noopener noreferrer">casdoor/casdoor</a></td>
<td style="text-align:right">85.69</td>
<td style="text-align:right">13,922 / 1,734</td>
<td>开发者工具</td>
<td>企业身份、安全与Agent平台团队</td>
<td>统一管理用户、Agent和MCP服务的身份访问；机制：用OAuth、OIDC、SAML、RBAC、MFA和网关集中鉴权；An open-source Agent-first Identity and Access Management (IAM) /LLM MCP &amp; agent gateway and auth server with web…</td>
<td>安全治理</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">320</td>
<td><a href="https://github.com/TEN-framework/ten-framework" target="_blank" rel="noopener noreferrer">TEN-framework/ten-framework</a></td>
<td style="text-align:right">85.67</td>
<td style="text-align:right">10,876 / 1,318</td>
<td>Agent与RAG</td>
<td>实时多模态对话Agent开发团队</td>
<td>构建可插拔的实时语音和多模态智能体；机制：以扩展系统编排音视频流、模型、工具和传输模块； Open-source framework for conversational voice AI agents</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">321</td>
<td><a href="https://github.com/LMCache/LMCache" target="_blank" rel="noopener noreferrer">LMCache/LMCache</a></td>
<td style="text-align:right">85.60</td>
<td style="text-align:right">10,414 / 1,535</td>
<td>推理部署</td>
<td>大模型推理平台和GPU基础设施团队</td>
<td>复用KV缓存以降低多轮大模型推理成本；机制：在GPU、CPU和存储间管理共享KV缓存并跨请求复用；LMCache: Supercharge Your LLM with the Fastest KV Cache Layer</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">322</td>
<td><a href="https://github.com/Narcooo/inkos" target="_blank" rel="noopener noreferrer">Narcooo/inkos</a></td>
<td style="text-align:right">85.51</td>
<td style="text-align:right">7,889 / 1,477</td>
<td>内容生成</td>
<td>小说、剧本和互动故事创作者</td>
<td>持续创作、修订并管理长篇故事和世界设定；机制：由创作Agent统一角色、设定、记忆、审稿和素材库；Story Creation AI Agent for novel, scripts, interactive games, and IP content</td>
<td>流程效率</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">323</td>
<td><a href="https://github.com/teambit/bit" target="_blank" rel="noopener noreferrer">teambit/bit</a></td>
<td style="text-align:right">85.50</td>
<td style="text-align:right">18,422 / 956</td>
<td>开发者工具</td>
<td>前端平台、组件库与AI编码团队</td>
<td>复用软件组件并保持多应用架构一致；机制：将源码组织为可组合组件并通过MCP让Agent查找和复用；AI-powered development workspaces with reusable components, architectural clarity and zero overhead.</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">324</td>
<td><a href="https://github.com/elie222/inbox-zero" target="_blank" rel="noopener noreferrer">elie222/inbox-zero</a></td>
<td style="text-align:right">85.50</td>
<td style="text-align:right">11,589 / 1,429</td>
<td>企业效率</td>
<td>邮件量大的专业人士与小团队</td>
<td>自动分类邮件、拟回复并协调日历和附件；机制：连接邮箱后由AI规则、助手和聊天渠道批量处理收件箱；The world's best AI personal assistant for email. Open source app to help you reach inbox zero fast.</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">325</td>
<td><a href="https://github.com/OpenPipe/ART" target="_blank" rel="noopener noreferrer">OpenPipe/ART</a></td>
<td style="text-align:right">85.47</td>
<td style="text-align:right">10,385 / 942</td>
<td>模型与训练</td>
<td>多步Agent强化学习工程与研究团队</td>
<td>用真实任务和奖励训练多步骤智能体；机制：通过GRPO、服务化训练推理和自定义环境形成强化学习循环；Agent Reinforcement Trainer: train multi-step agents for real-world tasks using GRPO. Give your agents on-the-job training. R…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">326</td>
<td><a href="https://github.com/MemTensor/MemOS" target="_blank" rel="noopener noreferrer">MemTensor/MemOS</a></td>
<td style="text-align:right">85.47</td>
<td style="text-align:right">10,168 / 926</td>
<td>Agent与RAG</td>
<td>需要长期个性化记忆的LLM与Agent团队</td>
<td>统一存储、检索和管理智能体长期记忆；机制：用图结构记忆API融合知识、工具、多模态与混合检索；Self-evolving memory OS for LLM &amp; AI Agents: ultra-persistent memory, hybrid-retrieval, and cross-task skill reuse, with 35.24%…</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">327</td>
<td><a href="https://github.com/GreyDGL/PentestGPT" target="_blank" rel="noopener noreferrer">GreyDGL/PentestGPT</a></td>
<td style="text-align:right">85.46</td>
<td style="text-align:right">14,185 / 2,467</td>
<td>垂直行业应用</td>
<td>渗透测试、安全运营与红队人员</td>
<td>自动规划并执行大模型辅助的渗透测试；机制：由多阶段安全Agent调用测试工具、记录证据并迭代攻击路径；Automated Penetration Testing Agentic Framework Powered by Large Language Models</td>
<td>安全治理</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">328</td>
<td><a href="https://github.com/zilliztech/claude-context" target="_blank" rel="noopener noreferrer">zilliztech/claude-context</a></td>
<td style="text-align:right">85.45</td>
<td style="text-align:right">12,112 / 898</td>
<td>开发者工具</td>
<td>大型代码库中的编码Agent使用者</td>
<td>为编码智能体检索整个代码库的相关上下文；机制：通过MCP和向量语义搜索只注入与当前任务相关的代码；Code search MCP for Claude Code. Make entire codebase the context for any coding agent.</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">329</td>
<td><a href="https://github.com/e2b-dev/E2B" target="_blank" rel="noopener noreferrer">e2b-dev/E2B</a></td>
<td style="text-align:right">85.41</td>
<td style="text-align:right">12,930 / 964</td>
<td>开发者工具</td>
<td>企业Agent和AI代码执行平台团队</td>
<td>安全运行大模型生成的代码和计算任务；机制：通过云端隔离沙箱及Python和JavaScript SDK执行文件与命令；Open-source, secure environment with real-world tools for enterprise-grade agents.</td>
<td>安全治理</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">330</td>
<td><a href="https://github.com/llmware-ai/llmware" target="_blank" rel="noopener noreferrer">llmware-ai/llmware</a></td>
<td style="text-align:right">85.40</td>
<td style="text-align:right">14,814 / 2,909</td>
<td>Agent与RAG</td>
<td>企业私有RAG与本地AI应用开发团队</td>
<td>在本地设备构建知识型RAG和流程自动化；机制：统一文档解析、量化小模型、向量检索和跨硬件推理；Unified framework for building enterprise RAG pipelines with small, specialized models</td>
<td>隐私与合规</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">331</td>
<td><a href="https://github.com/microsoft/magentic-ui" target="_blank" rel="noopener noreferrer">microsoft/magentic-ui</a></td>
<td style="text-align:right">85.37</td>
<td style="text-align:right">9,945 / 999</td>
<td>Agent与RAG</td>
<td>希望本地自动化网页和文件任务的知识工作者</td>
<td>让小模型Agent跨浏览器与本地文件完成工作；机制：用端侧编排模型、浏览器模型、人工审批和虚拟机沙箱；MagenticLite is an experimental agent that works across the browser and local file system</td>
<td>安全治理</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">332</td>
<td><a href="https://github.com/VoltAgent/voltagent" target="_blank" rel="noopener noreferrer">VoltAgent/voltagent</a></td>
<td style="text-align:right">85.34</td>
<td style="text-align:right">10,018 / 1,040</td>
<td>Agent与RAG</td>
<td>TypeScript Agent产品与平台工程团队</td>
<td>构建、部署、评测并运营生产级智能体；机制：结合开源框架与云或自托管控制台统一记忆、工作流和观测；AI Agent Engineering Platform built on an Open Source TypeScript AI Agent Framework</td>
<td>部署与运维</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">333</td>
<td><a href="https://github.com/GeeeekExplorer/nano-vllm" target="_blank" rel="noopener noreferrer">GeeeekExplorer/nano-vllm</a></td>
<td style="text-align:right">85.29</td>
<td style="text-align:right">14,438 / 2,310</td>
<td>推理部署</td>
<td>学习和定制大模型推理引擎的开发者</td>
<td>以轻量代码运行接近vLLM速度的离线推理；机制：用约一千二百行Python实现分页缓存、批处理和模型执行；Nano vLLM</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">334</td>
<td><a href="https://github.com/weaviate/weaviate" target="_blank" rel="noopener noreferrer">weaviate/weaviate</a></td>
<td style="text-align:right">85.25</td>
<td style="text-align:right">16,560 / 1,344</td>
<td>数据与MLOps</td>
<td>RAG、语义搜索与推荐系统工程团队</td>
<td>存储对象和向量并进行规模化混合检索；机制：在云原生数据库中统一向量、关键词、过滤、重排和多租户；Weaviate is an open-source vector database that stores both objects and vectors, allowing for the combination of vector search…</td>
<td>数据准备与碎片</td>
<td>BSD-3-Clause；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">335</td>
<td><a href="https://github.com/alphacep/vosk-api" target="_blank" rel="noopener noreferrer">alphacep/vosk-api</a></td>
<td style="text-align:right">85.24</td>
<td style="text-align:right">14,925 / 1,734</td>
<td>推理部署</td>
<td>移动、嵌入式与语音应用开发者</td>
<td>在手机、边缘设备和服务器集成离线语音识别；机制：提供小型离线ASR模型、流式API和多语言编程绑定；Offline speech recognition API for Android, iOS, Raspberry Pi and servers with Python, Java, C# and Node</td>
<td>隐私与合规</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">336</td>
<td><a href="https://github.com/YaoFANGUK/video-subtitle-remover" target="_blank" rel="noopener noreferrer">YaoFANGUK/video-subtitle-remover</a></td>
<td style="text-align:right">85.22</td>
<td style="text-align:right">11,811 / 1,515</td>
<td>内容生成</td>
<td>视频剪辑、二创与素材修复人员</td>
<td>本地去除视频和图片中的硬字幕与文字水印；机制：用检测、图像修复和逐帧处理保持原分辨率生成无字素材；基于AI的图片/视频硬字幕去除、文本水印去除，无损分辨率生成去字幕、去水印后的图片/视频文件。无需申请第三方API，本地实现。AI-based tool for removing hard-coded subtitles and text-like…</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">337</td>
<td><a href="https://github.com/botpress/botpress" target="_blank" rel="noopener noreferrer">botpress/botpress</a></td>
<td style="text-align:right">85.14</td>
<td style="text-align:right">14,778 / 2,273</td>
<td>Agent与RAG</td>
<td>企业聊天机器人和客户助手开发团队</td>
<td>快速构建并部署面向业务的GPT聊天助手；机制：用可视化流程、知识连接和模型集成发布多渠道机器人；The open-source hub to build &amp; deploy GPT/LLM Agents ⚡️</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">338</td>
<td><a href="https://github.com/Thysrael/Horizon" target="_blank" rel="noopener noreferrer">Thysrael/Horizon</a></td>
<td style="text-align:right">85.08</td>
<td style="text-align:right">8,062 / 1,171</td>
<td>企业效率</td>
<td>需要每日行业资讯的个人与研究人员</td>
<td>聚合多源新闻并生成中英文每日简报；机制：抓取RSS、社区和代码平台后去重评分并补充背景；📡 Your own AI-powered news radar. Generates daily briefings in English &amp; Chinese. | 用 AI 构建你专属的新闻雷达</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">339</td>
<td><a href="https://github.com/apache/tvm" target="_blank" rel="noopener noreferrer">apache/tvm</a></td>
<td style="text-align:right">85.08</td>
<td style="text-align:right">13,568 / 3,917</td>
<td>推理部署</td>
<td>机器学习编译器与跨硬件部署工程师</td>
<td>将模型编译优化到不同CPU、GPU和加速器；机制：用中间表示、自动调优和代码生成适配多种硬件后端；Open Machine Learning Compiler Framework</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">340</td>
<td><a href="https://github.com/cocoindex-io/cocoindex" target="_blank" rel="noopener noreferrer">cocoindex-io/cocoindex</a></td>
<td style="text-align:right">85.02</td>
<td style="text-align:right">10,664 / 827</td>
<td>数据与MLOps</td>
<td>RAG、Agent上下文与AI数据工程团队</td>
<td>增量构建并持续更新RAG和Agent数据索引；机制：仅重算数据变更并保留血缘、重试和多目标写入；Incremental engine for long horizon agents 🌟 Star if you like it!</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">341</td>
<td><a href="https://github.com/chatchat-space/Langchain-Chatchat" target="_blank" rel="noopener noreferrer">chatchat-space/Langchain-Chatchat</a></td>
<td style="text-align:right">85.01</td>
<td style="text-align:right">38,281 / 6,220</td>
<td>Agent与RAG</td>
<td>企业知识库开发者与私有化AI应用团队</td>
<td>搭建可离线部署的企业知识库问答与智能体应用；机制：结合本地大模型、向量检索和LangChain编排知识与工具；Langchain-Chatchat（原Langchain-ChatGLM）基于 Langchain 与 ChatGLM, Qwen 与 Llama 等语言模型的 RAG 与 Agent 应用 | Langchain-Chatchat…</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">342</td>
<td><a href="https://github.com/crynta/terax-ai" target="_blank" rel="noopener noreferrer">crynta/terax-ai</a></td>
<td style="text-align:right">85.00</td>
<td style="text-align:right">8,437 / 899</td>
<td>开发者工具</td>
<td>终端优先的软件开发者与本地模型用户</td>
<td>在轻量桌面工作区中完成终端、编码与AI协作；机制：集成原生终端、代码编辑器、本地模型和Agent侧栏；Lightweight (7MB) Terminal-first AI-native dev workspace</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">343</td>
<td><a href="https://github.com/Farama-Foundation/Gymnasium" target="_blank" rel="noopener noreferrer">Farama-Foundation/Gymnasium</a></td>
<td style="text-align:right">84.96</td>
<td style="text-align:right">12,146 / 1,384</td>
<td>模型与训练</td>
<td>强化学习研究者与算法工程师</td>
<td>开发、比较并复现实验中的单智能体强化学习算法；机制：以统一环境API和标准参考环境隔离算法与仿真差异；A standard API for single-agent reinforcement learning environments, with popular reference environments and related utilit…</td>
<td>数据治理与实验复现</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">344</td>
<td><a href="https://github.com/NVIDIA/TensorRT" target="_blank" rel="noopener noreferrer">NVIDIA/TensorRT</a></td>
<td style="text-align:right">84.91</td>
<td style="text-align:right">13,142 / 2,383</td>
<td>推理部署</td>
<td>NVIDIA GPU推理工程师与AI平台团队</td>
<td>将训练好的深度学习模型优化为高性能GPU推理服务；机制：通过图优化、低精度量化和CUDA内核加速模型执行；NVIDIA® TensorRT™ is an SDK for high-performance deep learning inference on NVIDIA GPUs. This repository contains the ope…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">345</td>
<td><a href="https://github.com/linyqh/NarratoAI" target="_blank" rel="noopener noreferrer">linyqh/NarratoAI</a></td>
<td style="text-align:right">84.90</td>
<td style="text-align:right">10,241 / 1,397</td>
<td>内容生成</td>
<td>影视解说创作者与短视频运营团队</td>
<td>自动完成影视解说文案、配音、字幕和视频剪辑；机制：用LLM理解视频并串联文案生成、TTS、字幕与剪辑；利用AI大模型，一键解说并剪辑视频； Using AI models to automatically provide commentary and edit videos with a single click.</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">346</td>
<td><a href="https://github.com/facebookresearch/audiocraft" target="_blank" rel="noopener noreferrer">facebookresearch/audiocraft</a></td>
<td style="text-align:right">84.88</td>
<td style="text-align:right">23,468 / 2,658</td>
<td>模型与训练</td>
<td>音频生成研究人员与音乐AI开发者</td>
<td>训练和运行高质量音乐及环境音频生成模型；机制：提供MusicGen、AudioGen与EnCodec的训练推理代码；Audiocraft is a library for audio processing and generation with deep learning. It features the state-of-the-art EnC…</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">347</td>
<td><a href="https://github.com/treeverse/dvc" target="_blank" rel="noopener noreferrer">treeverse/dvc</a></td>
<td style="text-align:right">84.87</td>
<td style="text-align:right">15,739 / 1,312</td>
<td>数据与MLOps</td>
<td>机器学习工程师、数据科学家与MLOps团队</td>
<td>版本化数据模型并跟踪可复现的机器学习实验；机制：以Git式指针、流水线和实验元数据关联代码数据与结果；🦉 Data Versioning and ML Experiments</td>
<td>数据治理与实验复现</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">348</td>
<td><a href="https://github.com/xszyou/Fay" target="_blank" rel="noopener noreferrer">xszyou/Fay</a></td>
<td style="text-align:right">84.85</td>
<td style="text-align:right">13,005 / 2,306</td>
<td>Agent与RAG</td>
<td>数字人产品团队、智能终端厂商与业务集成商</td>
<td>把数字人和大模型接入语音、终端及业务系统；机制：统一适配LLM、ASR、TTS与多端接口并支持离线部署；fay是一个帮助数字人（2.5d、3d、移动、pc、网页）或大语言模型（openai兼容、deepseek）连通业务系统的agent框架。</td>
<td>系统集成与锁定</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">349</td>
<td><a href="https://github.com/isl-org/Open3D" target="_blank" rel="noopener noreferrer">isl-org/Open3D</a></td>
<td style="text-align:right">84.76</td>
<td style="text-align:right">13,774 / 2,585</td>
<td>开发者工具</td>
<td>三维视觉研究人员、机器人与空间计算开发者</td>
<td>处理、分析并可视化点云网格等三维数据；机制：用C++和Python提供并行优化的三维数据结构与算法；Open3D: A Modern Library for 3D Data Processing</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">350</td>
<td><a href="https://github.com/PaddlePaddle/PaddleFormers" target="_blank" rel="noopener noreferrer">PaddlePaddle/PaddleFormers</a></td>
<td style="text-align:right">84.72</td>
<td style="text-align:right">12,983 / 2,193</td>
<td>模型与训练</td>
<td>飞桨大模型研究人员与分布式训练团队</td>
<td>训练、微调并评估大语言和视觉语言模型；机制：提供预训练模型接口及张量、流水线和专家并行能力；PaddleFormers is an easy-to-use library of pre-trained large language model zoo based on PaddlePaddle.</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">351</td>
<td><a href="https://github.com/EvoMap/evolver" target="_blank" rel="noopener noreferrer">EvoMap/evolver</a></td>
<td style="text-align:right">84.71</td>
<td style="text-align:right">8,884 / 819</td>
<td>Agent与RAG</td>
<td>Agent平台开发者与自进化智能体研究者</td>
<td>让智能体从执行事件中持续提炼并演化可复用能力；机制：用可审计的基因、胶囊与事件流水线管理能力变更；The GEP-powered self-evolving engine for AI agents. Auditable evolution with Genes, Capsules, and Events. | evomap.ai</td>
<td>幻觉与可靠性</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">352</td>
<td><a href="https://github.com/ConardLi/easy-dataset" target="_blank" rel="noopener noreferrer">ConardLi/easy-dataset</a></td>
<td style="text-align:right">84.66</td>
<td style="text-align:right">14,634 / 1,494</td>
<td>数据与MLOps</td>
<td>大模型微调、RAG与评测数据团队</td>
<td>从领域文档构建微调、RAG和评测数据集；机制：通过文档解析、智能切分、清洗和数据增强生成样本；A powerful tool for creating datasets for LLM fine-tuning 、RAG and Eval</td>
<td>数据准备与碎片</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">353</td>
<td><a href="https://github.com/open-multi-agent/open-multi-agent" target="_blank" rel="noopener noreferrer">open-multi-agent/open-multi-agent</a></td>
<td style="text-align:right">84.66</td>
<td style="text-align:right">6,558 / 2,407</td>
<td>Agent与RAG</td>
<td>TypeScript后端与多智能体应用开发者</td>
<td>把业务目标动态拆解为可并行执行的多智能体任务；机制：由协调器生成任务DAG并用确定性调度器执行与汇总；TypeScript multi-agent orchestration framework. Describe a goal, a coordinator decomposes it into a task DAG that runs on a…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">354</td>
<td><a href="https://github.com/ymcui/Chinese-LLaMA-Alpaca" target="_blank" rel="noopener noreferrer">ymcui/Chinese-LLaMA-Alpaca</a></td>
<td style="text-align:right">84.65</td>
<td style="text-align:right">18,942 / 1,850</td>
<td>模型与训练</td>
<td>中文NLP研究者与私有化模型团队</td>
<td>训练并部署具备中文理解和指令执行能力的大模型；机制：扩充中文词表并用中文语料二次预训练和指令微调；中文LLaMA&amp;Alpaca大语言模型+本地CPU/GPU训练部署 (Chinese LLaMA &amp; Alpaca LLMs)</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">355</td>
<td><a href="https://github.com/calesthio/Crucix" target="_blank" rel="noopener noreferrer">calesthio/Crucix</a></td>
<td style="text-align:right">84.61</td>
<td style="text-align:right">10,442 / 1,651</td>
<td>垂直行业应用</td>
<td>开源情报分析师、投资者与全球风险观察者</td>
<td>持续监测多源全球事件并在信号变化时及时预警；机制：本地聚合二十余类数据源并用智能体筛选变化信号；Your personal intelligence agent. Watches the world from multiple data sources and pings you when something changes.</td>
<td>数据准备与碎片</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">356</td>
<td><a href="https://github.com/BlinkDL/RWKV-LM" target="_blank" rel="noopener noreferrer">BlinkDL/RWKV-LM</a></td>
<td style="text-align:right">84.54</td>
<td style="text-align:right">14,609 / 1,008</td>
<td>模型与训练</td>
<td>语言模型研究者与低资源推理开发者</td>
<td>训练和部署线性时间、恒定内存的长上下文语言模型；机制：以可并行训练的RNN架构替代注意力和KV缓存；RWKV (pronounced RwaKuv) is an RNN with great LLM performance, which can also be directly trained like a GPT transformer (pa…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">357</td>
<td><a href="https://github.com/NVIDIA/OpenShell" target="_blank" rel="noopener noreferrer">NVIDIA/OpenShell</a></td>
<td style="text-align:right">84.52</td>
<td style="text-align:right">7,624 / 1,080</td>
<td>安全评测治理</td>
<td>Agent基础设施、安全与平台工程团队</td>
<td>在受控环境中安全运行可自主执行工具的AI智能体；机制：以沙箱和声明式策略限制文件、凭据及网络访问；OpenShell is the safe, private runtime for autonomous AI agents.</td>
<td>安全治理</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">358</td>
<td><a href="https://github.com/1jehuang/jcode" target="_blank" rel="noopener noreferrer">1jehuang/jcode</a></td>
<td style="text-align:right">84.50</td>
<td style="text-align:right">8,283 / 942</td>
<td>开发者工具</td>
<td>使用多会话编码智能体的软件开发者</td>
<td>管理可定制的长周期多会话AI编码工作流；机制：用编码Agent运行框架保存会话状态并开放扩展接口；Coding Agent Harness</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">359</td>
<td><a href="https://github.com/simonw/llm" target="_blank" rel="noopener noreferrer">simonw/llm</a></td>
<td style="text-align:right">84.44</td>
<td style="text-align:right">12,172 / 919</td>
<td>开发者工具</td>
<td>命令行开发者、模型实验与自动化脚本用户</td>
<td>从命令行调用、比较并扩展多种大语言模型；机制：以统一CLI、插件和本地日志封装不同模型提供商；Access large language models from the command-line</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">360</td>
<td><a href="https://github.com/microsoft/promptflow" target="_blank" rel="noopener noreferrer">microsoft/promptflow</a></td>
<td style="text-align:right">84.43</td>
<td style="text-align:right">11,180 / 1,109</td>
<td>数据与MLOps</td>
<td>大模型应用工程师、评测与MLOps团队</td>
<td>贯通大模型应用原型、测试、评估、部署和监控；机制：用可视化流程、实验评测和部署连接管理完整开发周期；Build high-quality LLM apps - from prototyping, testing to production deployment and monitoring.</td>
<td>评测与观测</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">361</td>
<td><a href="https://github.com/deeplearning4j/deeplearning4j" target="_blank" rel="noopener noreferrer">deeplearning4j/deeplearning4j</a></td>
<td style="text-align:right">84.41</td>
<td style="text-align:right">14,243 / 3,834</td>
<td>模型与训练</td>
<td>Java与Scala企业机器学习工程团队</td>
<td>在JVM应用中构建、训练并部署深度学习模型；机制：以DL4J、ND4J、SameDiff和DataVec覆盖数据到推理；Suite of tools for deploying and training deep learning models using the JVM. Highlights include model import for…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">362</td>
<td><a href="https://github.com/snarktank/ralph" target="_blank" rel="noopener noreferrer">snarktank/ralph</a></td>
<td style="text-align:right">84.41</td>
<td style="text-align:right">20,991 / 2,042</td>
<td>开发者工具</td>
<td>使用Claude Code或Amp的独立开发者</td>
<td>循环执行编码智能体直到产品需求清单全部完成；机制：每轮使用干净上下文并借Git、进度文件和PRD持久记忆；Ralph is an autonomous AI agent loop that runs repeatedly until all PRD items are complete.</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">363</td>
<td><a href="https://github.com/chaitin/PandaWiki" target="_blank" rel="noopener noreferrer">chaitin/PandaWiki</a></td>
<td style="text-align:right">84.36</td>
<td style="text-align:right">9,933 / 984</td>
<td>企业效率</td>
<td>产品、技术支持与文档运营团队</td>
<td>快速搭建可创作、搜索和问答的智能知识库；机制：整合文档管理、LLM写作、RAG问答与知识站点发布；PandaWiki 是一款 AI 大模型驱动的开源知识库搭建系统，帮助你快速构建智能化的 产品文档、技术文档、FAQ、博客系统，借助大模型的力量为你提供 AI 创作、AI 问答、AI 搜索等能力。</td>
<td>数据准备与碎片</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">364</td>
<td><a href="https://github.com/frankbria/ralph-claude-code" target="_blank" rel="noopener noreferrer">frankbria/ralph-claude-code</a></td>
<td style="text-align:right">84.29</td>
<td style="text-align:right">9,524 / 726</td>
<td>开发者工具</td>
<td>Claude Code用户与小型软件开发团队</td>
<td>让Claude Code持续迭代项目并可靠判断任务完成；机制：用自主循环、退出检测、限流和安全护栏控制开发；Autonomous AI development loop for Claude Code with intelligent exit detection</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">365</td>
<td><a href="https://github.com/xcanwin/KeepChatGPT" target="_blank" rel="noopener noreferrer">xcanwin/KeepChatGPT</a></td>
<td style="text-align:right">84.28</td>
<td style="text-align:right">14,896 / 739</td>
<td>企业效率</td>
<td>ChatGPT重度用户与隐私敏感个人用户</td>
<td>提升网页端ChatGPT会话的连续性、安全性和操作效率；机制：通过浏览器插件自动刷新、保活、克隆对话并拦截跟踪；这是一款提高ChatGPT的数据安全能力和效率的插件。并且免费共享大量创新功能，如：自动刷新、保持活跃、数据安全、取消审计、克隆对话、言无不尽、净化页面、展示大屏、拦截跟踪、日新月异、明察秋毫等。让我们的AI体验无比安全、顺畅、丝滑、高…</td>
<td>隐私与合规</td>
<td>GPL-2.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">366</td>
<td><a href="https://github.com/ValueCell-ai/ClawX" target="_blank" rel="noopener noreferrer">ValueCell-ai/ClawX</a></td>
<td style="text-align:right">84.28</td>
<td style="text-align:right">7,543 / 1,122</td>
<td>企业效率</td>
<td>不熟悉命令行的OpenClaw用户与办公人员</td>
<td>通过桌面图形界面配置并运行OpenClaw智能体；机制：封装模型配置、工作流、频道和定时任务为跨平台GUI；ClawX is a desktop app that provides a graphical interface for OpenClaw AI agents. It turns CLI-based AI orchestration i…</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">367</td>
<td><a href="https://github.com/yizhiyanhua-ai/fireworks-tech-graph" target="_blank" rel="noopener noreferrer">yizhiyanhua-ai/fireworks-tech-graph</a></td>
<td style="text-align:right">84.25</td>
<td style="text-align:right">8,491 / 729</td>
<td>内容生成</td>
<td>软件架构师、技术写作者与产品研发团队</td>
<td>从自然语言快速生成可发布的技术架构与UML图；机制：用图表分类、风格模板和SVG生成导出结构化图形；Generate production-quality SVG+PNG technical diagrams from natural language. 7 styles, UML support, and AI/Agent workflow p…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">368</td>
<td><a href="https://github.com/mrexodia/ida-pro-mcp" target="_blank" rel="noopener noreferrer">mrexodia/ida-pro-mcp</a></td>
<td style="text-align:right">84.22</td>
<td style="text-align:right">10,023 / 1,187</td>
<td>垂直行业应用</td>
<td>逆向工程师、恶意软件与安全研究人员</td>
<td>让语言模型辅助分析IDA Pro中的二进制程序；机制：通过MCP暴露反编译、符号和交叉引用等IDA操作；AI-powered reverse engineering assistant that bridges IDA Pro with language models through MCP.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">369</td>
<td><a href="https://github.com/unifyai/ivy" target="_blank" rel="noopener noreferrer">unifyai/ivy</a></td>
<td style="text-align:right">84.09</td>
<td style="text-align:right">14,170 / 5,486</td>
<td>开发者工具</td>
<td>机器学习库作者与跨框架模型工程师</td>
<td>在不同机器学习框架之间迁移模型与代码；机制：用源码转译保持接口和算子语义并生成目标框架实现；Convert Machine Learning Code Between Frameworks</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">370</td>
<td><a href="https://github.com/krillinai/KrillinAI" target="_blank" rel="noopener noreferrer">krillinai/KrillinAI</a></td>
<td style="text-align:right">84.03</td>
<td style="text-align:right">10,485 / 974</td>
<td>内容生成</td>
<td>跨境视频创作者、本地化与出海运营团队</td>
<td>把长短视频翻译、配音并重排为多平台多语言版本；机制：串联下载、转写、翻译、TTS、画幅与封面生成；AI video translation &amp; dubbing tool for humans and AI Agents, powered by LLMs. Full pipeline: download, transcribe, translate…</td>
<td>流程效率</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">371</td>
<td><a href="https://github.com/Chainlit/chainlit" target="_blank" rel="noopener noreferrer">Chainlit/chainlit</a></td>
<td style="text-align:right">83.88</td>
<td style="text-align:right">12,293 / 1,724</td>
<td>开发者工具</td>
<td>Python对话式AI应用开发者与产品原型团队</td>
<td>快速构建并交付可交互的生产级对话式AI应用；机制：以Python事件API和现成交互界面封装消息及工具步骤；Build Conversational AI in minutes ⚡️</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">372</td>
<td><a href="https://github.com/iflytek/astron-agent" target="_blank" rel="noopener noreferrer">iflytek/astron-agent</a></td>
<td style="text-align:right">83.87</td>
<td style="text-align:right">8,610 / 859</td>
<td>Agent与RAG</td>
<td>企业AI平台团队、流程自动化与集成开发者</td>
<td>搭建高可用的企业智能体工作流和超级智能体应用；机制：整合流程编排、模型、MCP工具、RPA与团队协作；Enterprise-grade, commercial-friendly agentic workflow platform for building next-generation SuperAgents.</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">373</td>
<td><a href="https://github.com/Alibaba-NLP/DeepResearch" target="_blank" rel="noopener noreferrer">Alibaba-NLP/DeepResearch</a></td>
<td style="text-align:right">83.86</td>
<td style="text-align:right">19,639 / 1,503</td>
<td>Agent与RAG</td>
<td>深度研究Agent开发者与研究分析团队</td>
<td>执行长周期网络检索并形成有依据的深度研究结果；机制：用专用MoE模型规划搜索、浏览网页并迭代整合证据；Tongyi Deep Research, the Leading Open-source Deep Research Agent</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">374</td>
<td><a href="https://github.com/TheR1D/shell_gpt" target="_blank" rel="noopener noreferrer">TheR1D/shell_gpt</a></td>
<td style="text-align:right">83.85</td>
<td style="text-align:right">12,177 / 977</td>
<td>开发者工具</td>
<td>命令行开发者、运维人员与技术写作者</td>
<td>在终端直接生成命令、代码片段和技术说明；机制：用CLI把自然语言请求发送给LLM并返回可执行结果；A command-line productivity tool powered by AI large language models like GPT-5, will help you accomplish your tasks faster a…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">375</td>
<td><a href="https://github.com/QwenLM/Qwen3" target="_blank" rel="noopener noreferrer">QwenLM/Qwen3</a></td>
<td style="text-align:right">83.84</td>
<td style="text-align:right">27,381 / 2,006</td>
<td>模型与训练</td>
<td>大模型研究者、应用开发与私有化部署团队</td>
<td>评估、微调并部署通用及推理型大语言模型；机制：提供多规模Dense和MoE权重、推理代码与部署指南；Qwen3 is the large language model series developed by Qwen team, Alibaba Cloud.</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">376</td>
<td><a href="https://github.com/QwenLM/Qwen" target="_blank" rel="noopener noreferrer">QwenLM/Qwen</a></td>
<td style="text-align:right">83.82</td>
<td style="text-align:right">21,412 / 1,851</td>
<td>模型与训练</td>
<td>中文大模型研究者、应用开发与部署团队</td>
<td>运行并二次开发通义千问预训练和对话模型；机制：开放多尺寸模型权重、量化版本、推理与微调代码；The official repo of Qwen (通义千问) chat &amp; pretrained large language model proposed by Alibaba Cloud.</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">377</td>
<td><a href="https://github.com/spring-projects/spring-ai" target="_blank" rel="noopener noreferrer">spring-projects/spring-ai</a></td>
<td style="text-align:right">83.76</td>
<td style="text-align:right">9,111 / 2,715</td>
<td>开发者工具</td>
<td>Java与Spring企业应用AI集成团队</td>
<td>把企业数据、API与多家AI模型接入Spring应用；机制：用Spring式强类型抽象统一模型、向量库、工具和RAG；An Application Framework for AI Engineering</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">378</td>
<td><a href="https://github.com/horovod/horovod" target="_blank" rel="noopener noreferrer">horovod/horovod</a></td>
<td style="text-align:right">83.72</td>
<td style="text-align:right">14,691 / 2,239</td>
<td>模型与训练</td>
<td>分布式深度学习与高性能计算平台工程师</td>
<td>跨多GPU和多节点扩展主流框架的模型训练；机制：以数据并行和高效集合通信适配TensorFlow与PyTorch；Distributed training framework for TensorFlow, Keras, PyTorch, and Apache MXNet.</td>
<td>成本与延迟</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">379</td>
<td><a href="https://github.com/jacobgil/pytorch-grad-cam" target="_blank" rel="noopener noreferrer">jacobgil/pytorch-grad-cam</a></td>
<td style="text-align:right">83.67</td>
<td style="text-align:right">12,914 / 1,707</td>
<td>安全评测治理</td>
<td>计算机视觉研究员、模型工程与风控团队</td>
<td>解释并诊断视觉模型对图像预测所依据的区域；机制：用多种CAM像素归因方法和可信度指标生成可视化；Advanced AI Explainability for computer vision. Support for CNNs, Vision Transformers, Classification, Object detection, Segme…</td>
<td>评测与观测</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">380</td>
<td><a href="https://github.com/bentoml/OpenLLM" target="_blank" rel="noopener noreferrer">bentoml/OpenLLM</a></td>
<td style="text-align:right">83.58</td>
<td style="text-align:right">12,388 / 822</td>
<td>推理部署</td>
<td>开源模型平台工程师与云端AI服务团队</td>
<td>把开源或自定义大模型快速发布为兼容OpenAI的API；机制：用统一命令、推理后端与容器化流程构建云端服务；Run any open-source LLMs, such as DeepSeek and Llama, as OpenAI compatible API endpoint in the cloud.</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">381</td>
<td><a href="https://github.com/ChatLab/ChatLab" target="_blank" rel="noopener noreferrer">ChatLab/ChatLab</a></td>
<td style="text-align:right">83.56</td>
<td style="text-align:right">6,914 / 1,452</td>
<td>企业效率</td>
<td>聊天数据分析用户、社群运营与个人研究者</td>
<td>在本地导入聊天记录并发现关系和交流模式；机制：结合流式解析、SQL引擎与AI Agent查询多平台会话；Local-first chat history analyzer with AI. | 本地优先的 AI 聊天记录分析工具</td>
<td>隐私与合规</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">382</td>
<td><a href="https://github.com/miurla/morphic" target="_blank" rel="noopener noreferrer">miurla/morphic</a></td>
<td style="text-align:right">83.54</td>
<td style="text-align:right">8,965 / 2,338</td>
<td>企业效率</td>
<td>知识工作者、研究人员与搜索产品开发者</td>
<td>搜索网络并获得带来源引用的生成式答案；机制：结合实时搜索、LLM综合和生成式界面呈现多模态结果；An AI-powered search engine with a generative UI</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">383</td>
<td><a href="https://github.com/davisking/dlib" target="_blank" rel="noopener noreferrer">davisking/dlib</a></td>
<td style="text-align:right">83.52</td>
<td style="text-align:right">14,417 / 3,447</td>
<td>模型与训练</td>
<td>C++机器学习、计算机视觉与数据分析开发者</td>
<td>在C++应用中实现机器学习与数据分析能力；机制：提供优化算法、模型组件和可编译示例构建复杂应用；A toolkit for making real world machine learning and data analysis applications in C++</td>
<td>专业门槛</td>
<td>BSL-1.0；中高：需逐条核验许可文本</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">384</td>
<td><a href="https://github.com/omnigent-ai/omnigent" target="_blank" rel="noopener noreferrer">omnigent-ai/omnigent</a></td>
<td style="text-align:right">83.52</td>
<td style="text-align:right">7,023 / 947</td>
<td>Agent与RAG</td>
<td>多Agent开发者、研发平台与远程协作团队</td>
<td>统一编排多种编码智能体并跨设备协作和治理；机制：以元运行框架适配多家Agent、沙箱策略和实时会话；Omnigent is an open-source AI agent framework and meta-harness: orchestrate Claude Code, Codex, Cursor, Pi, and custom agent…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">385</td>
<td><a href="https://github.com/wangrongding/wechat-bot" target="_blank" rel="noopener noreferrer">wangrongding/wechat-bot</a></td>
<td style="text-align:right">83.46</td>
<td style="text-align:right">11,175 / 1,268</td>
<td>企业效率</td>
<td>私域运营、社群管理员与即时通信自动化开发者</td>
<td>跨微信飞书等即时通信渠道自动回复并分析社群；机制：用统一路由连接多种即时通信事件、LLM与联系人分析工具；🤖 Multi-platform IM AI Agent for Telegram, WhatsApp, Lark, and WeChat. Connects ChatGPT / Claude / Kimi / DeepSeek / Olla…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">386</td>
<td><a href="https://github.com/humanlayer/humanlayer" target="_blank" rel="noopener noreferrer">humanlayer/humanlayer</a></td>
<td style="text-align:right">83.45</td>
<td style="text-align:right">11,102 / 923</td>
<td>开发者工具</td>
<td>大型代码库的软件工程与AI开发团队</td>
<td>让编码智能体在复杂代码库中完成高难度开发任务；机制：以编码Agent工作区整合上下文、计划与人工协作；The best way to get AI coding agents to solve hard problems in complex codebases.</td>
<td>幻觉与可靠性</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">387</td>
<td><a href="https://github.com/gunthercox/ChatterBot" target="_blank" rel="noopener noreferrer">gunthercox/ChatterBot</a></td>
<td style="text-align:right">83.45</td>
<td style="text-align:right">14,502 / 4,426</td>
<td>模型与训练</td>
<td>Python聊天机器人开发者、教育与原型团队</td>
<td>基于既有对话语料训练并构建多语言聊天机器人；机制：用机器学习对已知会话匹配和生成响应并开放训练接口；ChatterBot is a machine learning, conversational dialog engine for creating chat bots</td>
<td>专业门槛</td>
<td>BSD-3-Clause；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">388</td>
<td><a href="https://github.com/lancedb/lancedb" target="_blank" rel="noopener noreferrer">lancedb/lancedb</a></td>
<td style="text-align:right">83.38</td>
<td style="text-align:right">10,861 / 946</td>
<td>数据与MLOps</td>
<td>多模态AI、RAG与检索基础设施开发者</td>
<td>存储、索引并检索大规模多模态数据和向量；机制：以嵌入式列式存储结合向量、全文与SQL检索；Developer-friendly OSS embedded retrieval library for multimodal AI. Search More; Manage Less.</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">389</td>
<td><a href="https://github.com/tambo-ai/tambo" target="_blank" rel="noopener noreferrer">tambo-ai/tambo</a></td>
<td style="text-align:right">83.34</td>
<td style="text-align:right">11,153 / 561</td>
<td>开发者工具</td>
<td>React产品团队、生成式界面与AI应用开发者</td>
<td>让AI应用按对话动态生成可交互React界面；机制：通过SDK注册组件和工具并由LLM选择参数实时渲染；Generative UI SDK for React</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">390</td>
<td><a href="https://github.com/droidrun/mobilerun" target="_blank" rel="noopener noreferrer">droidrun/mobilerun</a></td>
<td style="text-align:right">83.25</td>
<td style="text-align:right">8,729 / 928</td>
<td>Agent与RAG</td>
<td>移动自动化开发者、测试与Agent应用团队</td>
<td>用自然语言控制手机完成多步骤界面操作；机制：让Agent读取界面与截图并执行点击、滑动、输入和规划；Automate your mobile devices with natural language commands - an LLM agnostic mobile Agent 🤖</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">391</td>
<td><a href="https://github.com/google/adk-go" target="_blank" rel="noopener noreferrer">google/adk-go</a></td>
<td style="text-align:right">83.23</td>
<td style="text-align:right">8,526 / 878</td>
<td>Agent与RAG</td>
<td>Go云原生与企业Agent应用开发者</td>
<td>用Go构建、评估、编排并部署复杂AI智能体；机制：提供模型无关的Agent、工具、工作流与部署模块；An open-source, code-first Go toolkit for building, evaluating, and deploying sophisticated AI agents with flexibility and c…</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">392</td>
<td><a href="https://github.com/qubvel-org/segmentation_models.pytorch" target="_blank" rel="noopener noreferrer">qubvel-org/segmentation_models.pytorch</a></td>
<td style="text-align:right">83.21</td>
<td style="text-align:right">11,649 / 1,839</td>
<td>模型与训练</td>
<td>计算机视觉研究员与图像分割工程师</td>
<td>训练和评估基于PyTorch的图像语义分割模型；机制：组合预训练编码器、分割架构、损失函数与指标；Semantic segmentation models with 500+ pretrained convolutional and transformer-based backbones.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">393</td>
<td><a href="https://github.com/nexu-io/html-anything" target="_blank" rel="noopener noreferrer">nexu-io/html-anything</a></td>
<td style="text-align:right">83.12</td>
<td style="text-align:right">7,683 / 745</td>
<td>内容生成</td>
<td>内容设计师、技术营销与本地Agent用户</td>
<td>让本地编码Agent生成并发布多种HTML内容；机制：用技能模板、沙箱预览和多平台导出串联内容制作；✨ The agentic HTML editor — your local AI agent writes the HTML, you ship it. 🚀 75 Skills × 9 Surfaces (magazine · deck · po…</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">394</td>
<td><a href="https://github.com/TencentCloud/TencentDB-Agent-Memory" target="_blank" rel="noopener noreferrer">TencentCloud/TencentDB-Agent-Memory</a></td>
<td style="text-align:right">83.07</td>
<td style="text-align:right">8,328 / 766</td>
<td>Agent与RAG</td>
<td>Agent框架开发者与私有化AI平台团队</td>
<td>为AI智能体保存可检索的短期与长期结构化记忆；机制：用四层渐进管线压缩工具日志并提炼人物和场景；TencentDB Agent Memory delivers fully local long-term memory for AI Agents via a 4-tier progressive pipeline, with zero extern…</td>
<td>数据准备与碎片</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">395</td>
<td><a href="https://github.com/aliasrobotics/cai" target="_blank" rel="noopener noreferrer">aliasrobotics/cai</a></td>
<td style="text-align:right">83.01</td>
<td style="text-align:right">9,419 / 1,385</td>
<td>垂直行业应用</td>
<td>安全研究员、渗透测试与企业安全团队</td>
<td>构建并运行面向攻防任务的网络安全AI智能体；机制：整合多模型、安全工具、专用Agent和执行护栏；Cybersecurity AI (CAI), the framework for AI Security</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">396</td>
<td><a href="https://github.com/simular-ai/Agent-S" target="_blank" rel="noopener noreferrer">simular-ai/Agent-S</a></td>
<td style="text-align:right">82.99</td>
<td style="text-align:right">12,002 / 1,407</td>
<td>Agent与RAG</td>
<td>GUI Agent研究者与桌面自动化开发团队</td>
<td>让智能体像人一样操作电脑完成复杂桌面任务；机制：结合视觉感知、经验记忆和层级规划执行界面动作；Agent S: an open agentic framework that uses computers like a human</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">397</td>
<td><a href="https://github.com/openvinotoolkit/openvino" target="_blank" rel="noopener noreferrer">openvinotoolkit/openvino</a></td>
<td style="text-align:right">82.95</td>
<td style="text-align:right">10,493 / 3,272</td>
<td>推理部署</td>
<td>Intel平台推理工程师与边缘AI开发者</td>
<td>优化并部署跨视觉语音和生成式AI的推理模型；机制：转换多框架模型并针对CPU、GPU和NPU优化执行；OpenVINO™ is an open source toolkit for optimizing and deploying AI inference</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">398</td>
<td><a href="https://github.com/ultralytics/yolov3" target="_blank" rel="noopener noreferrer">ultralytics/yolov3</a></td>
<td style="text-align:right">82.93</td>
<td style="text-align:right">10,577 / 3,435</td>
<td>模型与训练</td>
<td>实时目标检测研究者与视觉应用工程师</td>
<td>训练、验证并导出经典YOLOv3目标检测模型；机制：提供PyTorch训练链路及ONNX、CoreML和TFLite导出；Ultralytics YOLOv3 in PyTorch &gt; ONNX &gt; CoreML &gt; TFLite</td>
<td>专业门槛</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">399</td>
<td><a href="https://github.com/sapientinc/HRM" target="_blank" rel="noopener noreferrer">sapientinc/HRM</a></td>
<td style="text-align:right">82.75</td>
<td style="text-align:right">12,590 / 1,831</td>
<td>模型与训练</td>
<td>推理模型研究员与通用智能算法团队</td>
<td>研究低参数模型的复杂序列推理与规划能力；机制：以高低层双循环模块在单次前向中分层执行推理；Hierarchical Reasoning Model Official Release</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">400</td>
<td><a href="https://github.com/QuivrHQ/quivr" target="_blank" rel="noopener noreferrer">QuivrHQ/quivr</a></td>
<td style="text-align:right">82.75</td>
<td style="text-align:right">39,198 / 3,723</td>
<td>Agent与RAG</td>
<td>RAG产品开发者、个人知识库与企业AI团队</td>
<td>把多格式文件快速接入可定制的RAG问答应用；机制：统一适配模型、向量库、解析器、搜索和工具扩展；Opiniated RAG for integrating GenAI in your apps 🧠 Focus on your product rather than the RAG. Easy integration in existing pro…</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">401</td>
<td><a href="https://github.com/UFund-Me/Qbot" target="_blank" rel="noopener noreferrer">UFund-Me/Qbot</a></td>
<td style="text-align:right">82.75</td>
<td style="text-align:right">18,034 / 2,535</td>
<td>垂直行业应用</td>
<td>量化研究员、交易开发者与个人投资者</td>
<td>研究、回测并自动执行机器学习量化交易策略；机制：整合行情、策略框架、回测、模拟盘与实盘接口；[🔥updating ...] AI 自动量化交易机器人(完全本地部署) AI-powered Quantitative Investment Research Platform. 📃 online docs: https://ufund-me.githu…</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">402</td>
<td><a href="https://github.com/QwenLM/Qwen3-VL" target="_blank" rel="noopener noreferrer">QwenLM/Qwen3-VL</a></td>
<td style="text-align:right">82.73</td>
<td style="text-align:right">19,568 / 1,818</td>
<td>模型与训练</td>
<td>多模态研究者、视觉Agent与应用开发团队</td>
<td>理解图像视频并构建多模态推理和智能体应用；机制：提供从边缘到云的Dense与MoE视觉语言模型权重；Qwen3-VL is the multimodal large language model series developed by Qwen team, Alibaba Cloud.</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">403</td>
<td><a href="https://github.com/stanford-oval/storm" target="_blank" rel="noopener noreferrer">stanford-oval/storm</a></td>
<td style="text-align:right">82.72</td>
<td style="text-align:right">30,011 / 2,806</td>
<td>Agent与RAG</td>
<td>研究人员、知识编辑与长报告写作团队</td>
<td>围绕主题自动调研并生成带引用的长篇知识报告；机制：通过检索、多视角提问、提纲合成和人机协作写作；An LLM-powered knowledge curation system that researches a topic and generates a full-length report with citations.</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">404</td>
<td><a href="https://github.com/Open-LLM-VTuber/Open-LLM-VTuber" target="_blank" rel="noopener noreferrer">Open-LLM-VTuber/Open-LLM-VTuber</a></td>
<td style="text-align:right">82.67</td>
<td style="text-align:right">12,469 / 1,449</td>
<td>内容生成</td>
<td>虚拟主播开发者、语音助手爱好者与创作者</td>
<td>搭建可本地运行并支持打断的语音虚拟人；机制：串联LLM、ASR、TTS、Live2D和跨平台交互界面；Talk to any LLM with hands-free voice interaction, voice interruption, and Live2D taking face running locally across platfo…</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">405</td>
<td><a href="https://github.com/Portkey-AI/gateway" target="_blank" rel="noopener noreferrer">Portkey-AI/gateway</a></td>
<td style="text-align:right">82.61</td>
<td style="text-align:right">12,394 / 1,196</td>
<td>开发者工具</td>
<td>企业AI平台、后端与安全治理团队</td>
<td>统一路由多家LLM并为调用增加护栏与可靠性控制；机制：通过兼容API进行模型路由、重试、缓存和策略校验；A blazing fast AI Gateway with integrated guardrails. Route to 1,600+ LLMs, 50+ AI Guardrails with 1 fast &amp; friendly API.</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">406</td>
<td><a href="https://github.com/QwenLM/Qwen3-Coder" target="_blank" rel="noopener noreferrer">QwenLM/Qwen3-Coder</a></td>
<td style="text-align:right">82.57</td>
<td style="text-align:right">16,689 / 1,222</td>
<td>模型与训练</td>
<td>编码Agent开发者、软件工程与模型研究团队</td>
<td>部署和集成面向仓库级任务的代码大模型；机制：提供代码专用模型权重、Agent接口与长上下文能力；Qwen3-Coder is the code version of Qwen3, the large language model series developed by Qwen team.</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">407</td>
<td><a href="https://github.com/OpenRLHF/OpenRLHF" target="_blank" rel="noopener noreferrer">OpenRLHF/OpenRLHF</a></td>
<td style="text-align:right">82.57</td>
<td style="text-align:right">9,777 / 985</td>
<td>模型与训练</td>
<td>大模型后训练、强化学习与分布式训练团队</td>
<td>大规模开展LLM与VLM的强化学习和偏好对齐；机制：结合Ray、vLLM与DeepSpeed分布式执行多种强化学习算法；An Easy-to-use, Scalable and High-performance Agentic RL Framework based on Ray (PPO &amp; DAPO &amp; REINFORCE++ &amp; VLM &amp;…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">408</td>
<td><a href="https://github.com/microsoft/UFO" target="_blank" rel="noopener noreferrer">microsoft/UFO</a></td>
<td style="text-align:right">82.48</td>
<td style="text-align:right">9,279 / 1,038</td>
<td>Agent与RAG</td>
<td>企业桌面自动化与跨设备Agent开发团队</td>
<td>让多个设备上的智能体协同完成复杂数字工作流；机制：通过DAG编排、跨设备通信和异构平台适配执行任务；UFO³: Weaving the Digital Agent Galaxy</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">409</td>
<td><a href="https://github.com/lencx/ChatGPT" target="_blank" rel="noopener noreferrer">lencx/ChatGPT</a></td>
<td style="text-align:right">82.40</td>
<td style="text-align:right">54,385 / 6,155</td>
<td>企业效率</td>
<td>需要跨平台桌面入口的ChatGPT个人用户</td>
<td>在Mac、Windows和Linux桌面访问并管理ChatGPT；机制：以桌面封装提供快捷操作、窗口管理和跨平台安装；🔮 ChatGPT Desktop Application (Mac, Windows and Linux)</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">410</td>
<td><a href="https://github.com/0x4m4/hexstrike-ai" target="_blank" rel="noopener noreferrer">0x4m4/hexstrike-ai</a></td>
<td style="text-align:right">82.39</td>
<td style="text-align:right">10,262 / 2,154</td>
<td>垂直行业应用</td>
<td>渗透测试员、漏洞研究人员与赏金猎人</td>
<td>让AI智能体自动执行渗透测试和漏洞发现；机制：通过MCP编排一百五十余种安全工具和专用Agent；HexStrike AI MCP Agents is an advanced MCP server that lets AI agents (Claude, GPT, Copilot, etc.) autonomously run 150+ cybe…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">411</td>
<td><a href="https://github.com/rerun-io/rerun" target="_blank" rel="noopener noreferrer">rerun-io/rerun</a></td>
<td style="text-align:right">82.37</td>
<td style="text-align:right">11,115 / 793</td>
<td>数据与MLOps</td>
<td>机器人、自动驾驶与物理AI数据团队</td>
<td>同步记录、查询和可视化多模态机器人训练数据；机制：用共享列式存储对齐图像、点云、状态与时间序列；Visualize, query, and stream to train on multimodal robotics data.</td>
<td>数据治理与实验复现</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">412</td>
<td><a href="https://github.com/tailcallhq/forgecode" target="_blank" rel="noopener noreferrer">tailcallhq/forgecode</a></td>
<td style="text-align:right">82.34</td>
<td style="text-align:right">7,455 / 1,446</td>
<td>开发者工具</td>
<td>软件开发者与终端AI结对编程用户</td>
<td>用多模型AI结对完成编码、解释和终端任务；机制：以TUI、单次CLI和Shell插件统一接入数百模型；AI enabled pair programmer for Claude, GPT, O Series, Grok, Deepseek, Gemini and 300+ models</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">413</td>
<td><a href="https://github.com/triton-inference-server/server" target="_blank" rel="noopener noreferrer">triton-inference-server/server</a></td>
<td style="text-align:right">82.33</td>
<td style="text-align:right">10,820 / 1,805</td>
<td>推理部署</td>
<td>云端与边缘AI推理平台工程师</td>
<td>在云和边缘统一部署并扩展多框架模型推理；机制：用模型仓库、动态批处理和多后端运行时优化服务；The Triton Inference Server provides an optimized cloud and edge inferencing solution.</td>
<td>部署与运维</td>
<td>BSD-3-Clause；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">414</td>
<td><a href="https://github.com/neuml/txtai" target="_blank" rel="noopener noreferrer">neuml/txtai</a></td>
<td style="text-align:right">82.31</td>
<td style="text-align:right">12,715 / 843</td>
<td>Agent与RAG</td>
<td>语义搜索、RAG与知识工作流开发者</td>
<td>构建语义搜索、RAG和多模型语言工作流；机制：以融合向量、稀疏、图和关系存储的嵌入数据库编排；💡 All-in-one AI framework for semantic search, LLM orchestration and language model workflows</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">415</td>
<td><a href="https://github.com/JaidedAI/EasyOCR" target="_blank" rel="noopener noreferrer">JaidedAI/EasyOCR</a></td>
<td style="text-align:right">82.26</td>
<td style="text-align:right">29,730 / 3,585</td>
<td>开发者工具</td>
<td>文档处理、视觉应用与本地化软件开发者</td>
<td>从多语种图片中识别并提取可处理文本；机制：提供预训练检测识别模型和简单Python接口覆盖多脚本；Ready-to-use OCR with 80+ supported languages and all popular writing scripts including Latin, Chinese, Arabic, Devanagari, C…</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">416</td>
<td><a href="https://github.com/skypilot-org/skypilot" target="_blank" rel="noopener noreferrer">skypilot-org/skypilot</a></td>
<td style="text-align:right">82.19</td>
<td style="text-align:right">10,284 / 1,130</td>
<td>数据与MLOps</td>
<td>AI训练团队、云基础设施与计算平台工程师</td>
<td>跨云、Kubernetes和本地集群调度扩展AI工作负载；机制：用统一作业接口、调度和自动扩缩屏蔽基础设施差异；Run, manage, and scale AI workloads on any AI infrastructure. Use one system to access &amp; manage all AI compute (Kubern…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">417</td>
<td><a href="https://github.com/qualcomm/GenieX" target="_blank" rel="noopener noreferrer">qualcomm/GenieX</a></td>
<td style="text-align:right">82.09</td>
<td style="text-align:right">8,188 / 1,019</td>
<td>推理部署</td>
<td>高通终端应用、嵌入式与边缘AI开发者</td>
<td>在高通设备的NPU、GPU和CPU上本地运行生成模型；机制：用统一C SDK及多语言接口加载GGUF和预编译模型；Run frontier LLMs and VLMs locally on Qualcomm devices across NPU, GPU, and CPU with a few lines of code</td>
<td>部署与运维</td>
<td>BSD-3-Clause；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">418</td>
<td><a href="https://github.com/myshell-ai/OpenVoice" target="_blank" rel="noopener noreferrer">myshell-ai/OpenVoice</a></td>
<td style="text-align:right">82.05</td>
<td style="text-align:right">36,913 / 4,118</td>
<td>模型与训练</td>
<td>语音合成研究者、配音与语音产品团队</td>
<td>从短参考音频克隆音色并生成多语言语音；机制：分离音色与风格控制以跨语言迁移声音特征；Instant voice cloning by MIT and MyShell. Audio foundation model.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">419</td>
<td><a href="https://github.com/nullclaw/nullclaw" target="_blank" rel="noopener noreferrer">nullclaw/nullclaw</a></td>
<td style="text-align:right">82.02</td>
<td style="text-align:right">7,744 / 904</td>
<td>Agent与RAG</td>
<td>低成本硬件、嵌入式与自主助手开发者</td>
<td>在极低资源设备上运行全自主AI助手基础设施；机制：以Zig静态二进制集成多模型、渠道和可插拔组件；Fastest, smallest, and fully autonomous AI assistant infrastructure written in Zig</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">420</td>
<td><a href="https://github.com/GetStream/Vision-Agents" target="_blank" rel="noopener noreferrer">GetStream/Vision-Agents</a></td>
<td style="text-align:right">82.00</td>
<td style="text-align:right">7,970 / 665</td>
<td>Agent与RAG</td>
<td>实时视频、语音Agent与直播应用开发者</td>
<td>构建能实时观看、聆听并理解视频的多模态Agent；机制：组合视觉模型、语音模型和边缘视频网络降低延迟；Open Vision Agents by Stream. Build voice and vision agents quickly with any model or video provider. Uses Stream's edge ne…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">421</td>
<td><a href="https://github.com/kornia/kornia" target="_blank" rel="noopener noreferrer">kornia/kornia</a></td>
<td style="text-align:right">81.99</td>
<td style="text-align:right">11,272 / 1,198</td>
<td>开发者工具</td>
<td>计算机视觉、空间AI与机器人研究开发者</td>
<td>在PyTorch中构建可微分几何视觉处理管线；机制：提供GPU批处理、自动微分的图像和几何算法组件；🐍 Geometric Computer Vision Library for Spatial AI</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">422</td>
<td><a href="https://github.com/ludwig-ai/ludwig" target="_blank" rel="noopener noreferrer">ludwig-ai/ludwig</a></td>
<td style="text-align:right">81.98</td>
<td style="text-align:right">11,733 / 1,218</td>
<td>模型与训练</td>
<td>数据科学家、大模型微调与低代码ML团队</td>
<td>用声明式配置训练、微调并部署多类AI模型；机制：以YAML定义数据、模型和训练流程免除样板代码；Low-code framework for building custom LLMs, neural networks, and other AI models</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">423</td>
<td><a href="https://github.com/RunanywhereAI/runanywhere-sdks" target="_blank" rel="noopener noreferrer">RunanywhereAI/runanywhere-sdks</a></td>
<td style="text-align:right">81.98</td>
<td style="text-align:right">10,315 / 363</td>
<td>推理部署</td>
<td>移动应用、隐私敏感与端侧AI开发团队</td>
<td>在手机和Web应用中离线运行语言视觉及语音模型；机制：用跨平台SDK统一端侧模型并调用NPU硬件加速；Production ready toolkit to run AI locally</td>
<td>隐私与合规</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">424</td>
<td><a href="https://github.com/FunAudioLLM/SenseVoice" target="_blank" rel="noopener noreferrer">FunAudioLLM/SenseVoice</a></td>
<td style="text-align:right">81.83</td>
<td style="text-align:right">8,831 / 791</td>
<td>模型与训练</td>
<td>语音应用开发者、呼叫中心与音频研究团队</td>
<td>识别多语种语音、语言、情绪和环境音事件；机制：以非自回归语音基础模型一次完成多项音频理解；Multilingual speech understanding: ASR + emotion recognition + audio event detection. 50+ languages, 15x faster than Whisper, non…</td>
<td>成本与延迟</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">425</td>
<td><a href="https://github.com/pycaret/pycaret" target="_blank" rel="noopener noreferrer">pycaret/pycaret</a></td>
<td style="text-align:right">81.68</td>
<td style="text-align:right">9,823 / 1,855</td>
<td>数据与MLOps</td>
<td>数据科学家、业务分析师与低代码ML团队</td>
<td>用少量Python代码训练比较并部署机器学习模型；机制：自动封装数据预处理、模型选择、调优和实验界面；Open-source, low-code AutoML platform for Python. PyCaret 4.0: sklearn-native engine + React control plane.</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">426</td>
<td><a href="https://github.com/shaxiu/XianyuAutoAgent" target="_blank" rel="noopener noreferrer">shaxiu/XianyuAutoAgent</a></td>
<td style="text-align:right">81.68</td>
<td style="text-align:right">8,297 / 1,483</td>
<td>垂直行业应用</td>
<td>闲鱼卖家、电商客服与二手交易运营团队</td>
<td>全天候回复闲鱼咨询并完成议价和售前客服；机制：用上下文记忆、意图路由和多专家Agent协同决策；智能闲鱼客服机器人系统：专为闲鱼平台打造的AI值守解决方案，实现闲鱼平台7×24小时自动化值守，支持多专家协同决策、智能议价和上下文感知对话。</td>
<td>流程效率</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">427</td>
<td><a href="https://github.com/sktime/sktime" target="_blank" rel="noopener noreferrer">sktime/sktime</a></td>
<td style="text-align:right">81.52</td>
<td style="text-align:right">9,841 / 2,210</td>
<td>模型与训练</td>
<td>时间序列研究者、预测与异常检测工程师</td>
<td>统一开发预测、分类、聚类及异常检测模型；机制：以一致估计器接口组合多种时间序列算法和评测；A unified framework for machine learning with time series</td>
<td>数据治理与实验复现</td>
<td>BSD-3-Clause；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">428</td>
<td><a href="https://github.com/google/sentencepiece" target="_blank" rel="noopener noreferrer">google/sentencepiece</a></td>
<td style="text-align:right">81.52</td>
<td style="text-align:right">11,955 / 1,365</td>
<td>模型与训练</td>
<td>NLP模型训练、分词器与多语言工程团队</td>
<td>从原始文本训练固定词表的子词分词器；机制：以无监督BPE或Unigram直接处理Unicode语料；Unsupervised text tokenizer for Neural Network-based text generation.</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">429</td>
<td><a href="https://github.com/xorbitsai/inference" target="_blank" rel="noopener noreferrer">xorbitsai/inference</a></td>
<td style="text-align:right">81.51</td>
<td style="text-align:right">9,421 / 846</td>
<td>推理部署</td>
<td>AI平台工程师、模型服务与私有化部署团队</td>
<td>在本地、私有云或云端统一部署多模态模型服务；机制：以单命令和兼容API管理语言、语音及视觉模型推理；Swap GPT for any LLM by changing a single line of code. Xinference lets you run open-source, speech, and multimodal models o…</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">430</td>
<td><a href="https://github.com/X-PLUG/MobileAgent" target="_blank" rel="noopener noreferrer">X-PLUG/MobileAgent</a></td>
<td style="text-align:right">81.48</td>
<td style="text-align:right">8,926 / 898</td>
<td>Agent与RAG</td>
<td>移动GUI Agent研究者与手机自动化开发团队</td>
<td>让智能体理解并操作手机界面完成复杂任务；机制：用视觉语言模型感知屏幕、规划步骤并执行触控动作； Mobile-Agent: The Powerful GUI Agent Family</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">431</td>
<td><a href="https://github.com/bytedance/flowgram.ai" target="_blank" rel="noopener noreferrer">bytedance/flowgram.ai</a></td>
<td style="text-align:right">81.44</td>
<td style="text-align:right">8,203 / 739</td>
<td>Agent与RAG</td>
<td>AI工作流平台、低代码产品与前端开发团队</td>
<td>快速开发带可视化画布的AI工作流平台；机制：提供可组合画布、节点表单、变量作用域和现成物料；FlowGram is an extensible workflow development framework with built-in canvas, form, variable, and materials that helps develope…</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">432</td>
<td><a href="https://github.com/dmtrKovalenko/fff" target="_blank" rel="noopener noreferrer">dmtrKovalenko/fff</a></td>
<td style="text-align:right">81.37</td>
<td style="text-align:right">9,637 / 372</td>
<td>开发者工具</td>
<td>AI编码工具、编辑器与Agent运行框架开发者</td>
<td>为智能体和编辑器提供低延迟容错文件搜索；机制：结合后台监听、内存索引与频率排序减少重复扫描；The fastest and the most accurate file search SDK for AI agents, Neovim, Rust, C, Python, Bun and NodeJS</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">433</td>
<td><a href="https://github.com/winfunc/opcode" target="_blank" rel="noopener noreferrer">winfunc/opcode</a></td>
<td style="text-align:right">81.30</td>
<td style="text-align:right">22,164 / 1,707</td>
<td>开发者工具</td>
<td>Claude Code开发者、团队负责人和Agent用户</td>
<td>通过桌面界面管理Claude Code会话与后台智能体；机制：封装会话、用量、自定义Agent和安全后台执行为GUI；A powerful GUI app and Toolkit for Claude Code - Create custom agents, manage interactive Claude Code sessions, run…</td>
<td>流程效率</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">434</td>
<td><a href="https://github.com/jo-inc/camofox-browser" target="_blank" rel="noopener noreferrer">jo-inc/camofox-browser</a></td>
<td style="text-align:right">81.28</td>
<td style="text-align:right">7,555 / 783</td>
<td>开发者工具</td>
<td>Web Agent、自动化采集与浏览器基础设施开发者</td>
<td>让AI智能体稳定访问具有反机器人防护的网站；机制：用底层指纹伪装的无头Firefox兼容浏览器自动化接口；Stealth headless browser for AI agents — bypass Cloudflare, bot detection, and anti-scraping. Drop-in Puppeteer/Playwrigh…</td>
<td>部署与运维</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">435</td>
<td><a href="https://github.com/zai-org/GLM-5" target="_blank" rel="noopener noreferrer">zai-org/GLM-5</a></td>
<td style="text-align:right">81.28</td>
<td style="text-align:right">6,456 / 793</td>
<td>模型与训练</td>
<td>编码Agent、大模型研究与企业应用开发团队</td>
<td>构建面向复杂编码和智能体工程的语言模型应用；机制：提供GLM模型权重、推理接口和面向Agent的工具能力；GLM-5: From Vibe Coding to Agentic Engineering</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">436</td>
<td><a href="https://github.com/humanlayer/12-factor-agents" target="_blank" rel="noopener noreferrer">humanlayer/12-factor-agents</a></td>
<td style="text-align:right">81.26</td>
<td style="text-align:right">24,034 / 1,834</td>
<td>Agent与RAG</td>
<td>生产级LLM应用架构师与Agent工程团队</td>
<td>学习并应用构建可靠LLM软件的工程原则；机制：以十二项模式规范上下文、工具、控制流和人工介入；What are the principles we can use to build LLM-powered software that is actually good enough to put in the hands of production…</td>
<td>幻觉与可靠性</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">437</td>
<td><a href="https://github.com/jina-ai/reader" target="_blank" rel="noopener noreferrer">jina-ai/reader</a></td>
<td style="text-align:right">81.19</td>
<td style="text-align:right">11,514 / 847</td>
<td>开发者工具</td>
<td>RAG、搜索Agent与网页知识应用开发者</td>
<td>把网页和搜索结果转换为适合LLM使用的内容；机制：以URL前缀服务清洗页面并返回结构化文本与实时搜索；Convert any URL to an LLM-friendly input with a simple prefix https://r.jina.ai/</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">438</td>
<td><a href="https://github.com/autogluon/autogluon" target="_blank" rel="noopener noreferrer">autogluon/autogluon</a></td>
<td style="text-align:right">81.18</td>
<td style="text-align:right">10,525 / 1,169</td>
<td>模型与训练</td>
<td>数据科学家、业务ML与自动建模团队</td>
<td>用少量代码训练和部署高精度多模态预测模型；机制：自动完成特征处理、模型选择、集成和超参数优化；Fast and Accurate ML in 3 Lines of Code</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">439</td>
<td><a href="https://github.com/nari-labs/dia" target="_blank" rel="noopener noreferrer">nari-labs/dia</a></td>
<td style="text-align:right">81.07</td>
<td style="text-align:right">19,340 / 1,687</td>
<td>模型与训练</td>
<td>语音生成研究者、对话内容与配音产品团队</td>
<td>从文本一次生成含情绪和非语言声效的逼真对话；机制：用可音频条件控制的十六亿参数TTS模型合成双人语音；A TTS model capable of generating ultra-realistic dialogue in one pass.</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">440</td>
<td><a href="https://github.com/SYSTRAN/faster-whisper" target="_blank" rel="noopener noreferrer">SYSTRAN/faster-whisper</a></td>
<td style="text-align:right">81.04</td>
<td style="text-align:right">24,199 / 1,973</td>
<td>推理部署</td>
<td>转写产品、字幕工具与语音服务开发者</td>
<td>以更低内存和更短时间完成Whisper语音转写；机制：用CTranslate2和八位量化重实现Transformer推理；Faster Whisper transcription with CTranslate2</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">441</td>
<td><a href="https://github.com/coqui-ai/TTS" target="_blank" rel="noopener noreferrer">coqui-ai/TTS</a></td>
<td style="text-align:right">81.00</td>
<td style="text-align:right">45,736 / 6,152</td>
<td>模型与训练</td>
<td>语音合成研究者、配音与语音产品工程师</td>
<td>训练、微调并部署多语言文字转语音和声音克隆；机制：提供模型、训练配方、流式推理及多语种语音工具链；🐸💬 - a deep learning toolkit for Text-to-Speech, battle-tested in research and production</td>
<td>专业门槛</td>
<td>MPL-2.0；中：修改和分发需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">442</td>
<td><a href="https://github.com/open-pencil/open-pencil" target="_blank" rel="noopener noreferrer">open-pencil/open-pencil</a></td>
<td style="text-align:right">81.00</td>
<td style="text-align:right">6,815 / 637</td>
<td>内容生成</td>
<td>UI设计师、产品团队与设计工具开发者</td>
<td>在开源设计编辑器中借助AI创建和修改界面；机制：兼容设计文件并结合内置AI和可编程无头编辑SDK；AI-native design editor. Open-source Figma alternative.</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">443</td>
<td><a href="https://github.com/NVlabs/Sana" target="_blank" rel="noopener noreferrer">NVlabs/Sana</a></td>
<td style="text-align:right">80.99</td>
<td style="text-align:right">8,465 / 678</td>
<td>模型与训练</td>
<td>图像视频生成研究者与生成模型工程团队</td>
<td>训练和推理高分辨率图像、视频及世界生成模型；机制：用线性扩散Transformer及完整训练推理管线提高效率；SANA: Efficient High-Resolution Image Synthesis with Linear Diffusion Transformer</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">444</td>
<td><a href="https://github.com/NVIDIA/garak" target="_blank" rel="noopener noreferrer">NVIDIA/garak</a></td>
<td style="text-align:right">80.99</td>
<td style="text-align:right">8,396 / 1,077</td>
<td>安全评测治理</td>
<td>AI安全、红队、模型评测与风控团队</td>
<td>扫描大语言模型的提示注入、泄漏和越狱漏洞；机制：组合静态、动态和自适应探针与检测器批量攻击模型；the LLM vulnerability scanner</td>
<td>安全治理</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">445</td>
<td><a href="https://github.com/BlockRunAI/ClawRouter" target="_blank" rel="noopener noreferrer">BlockRunAI/ClawRouter</a></td>
<td style="text-align:right">80.96</td>
<td style="text-align:right">6,648 / 626</td>
<td>推理部署</td>
<td>OpenClaw智能体开发者与模型成本运营团队</td>
<td>为自主Agent自动选择最便宜且胜任的LLM；机制：本地分析请求维度并毫秒级路由、签名鉴权和微支付；The agent-native LLM router for OpenClaw. 41+ models, &lt;1ms routing, USDC payments on Base &amp; Solana via x402.</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">446</td>
<td><a href="https://github.com/Acly/krita-ai-diffusion" target="_blank" rel="noopener noreferrer">Acly/krita-ai-diffusion</a></td>
<td style="text-align:right">80.88</td>
<td style="text-align:right">10,310 / 602</td>
<td>内容生成</td>
<td>插画师、概念艺术家与图像编辑用户</td>
<td>在Krita绘画流程中生成、修补和扩展图像；机制：把扩散模型、选区约束和画布编辑嵌入Krita插件；Streamlined interface for generating images with AI in Krita. Inpaint and outpaint with optional text prompt, no tweaking re…</td>
<td>流程效率</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">447</td>
<td><a href="https://github.com/sinaptik-ai/pandas-ai" target="_blank" rel="noopener noreferrer">sinaptik-ai/pandas-ai</a></td>
<td style="text-align:right">80.88</td>
<td style="text-align:right">23,640 / 2,336</td>
<td>Agent与RAG</td>
<td>业务分析师、数据科学家与数据产品开发者</td>
<td>用自然语言查询数据库、数据湖和表格并分析；机制：结合LLM、RAG和数据执行引擎生成查询及图表；Chat with your database or your datalake (SQL, CSV, parquet). PandasAI makes data analysis conversational using LLMs and RAG.</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">448</td>
<td><a href="https://github.com/0xPlaygrounds/rig" target="_blank" rel="noopener noreferrer">0xPlaygrounds/rig</a></td>
<td style="text-align:right">80.77</td>
<td style="text-align:right">7,888 / 877</td>
<td>开发者工具</td>
<td>Rust后端、LLM应用与基础设施开发者</td>
<td>用Rust构建模块化且可扩展的大模型应用；机制：统一抽象多家模型、向量存储、工具和Agent工作流；⚙️🦀 Build modular and scalable LLM Applications in Rust</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">449</td>
<td><a href="https://github.com/AI4Finance-Foundation/FinRobot" target="_blank" rel="noopener noreferrer">AI4Finance-Foundation/FinRobot</a></td>
<td style="text-align:right">80.74</td>
<td style="text-align:right">7,525 / 1,270</td>
<td>垂直行业应用</td>
<td>金融分析师、投研团队与量化策略开发者</td>
<td>自动完成投研、估值、策略分析和风险评估；机制：以多Agent整合LLM、行情、量化工具和可追溯报告；FinRobot: An Open-Source AI Agent Platform for Financial Analysis using LLMs 🚀 🚀 🚀</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">450</td>
<td><a href="https://github.com/zyddnys/manga-image-translator" target="_blank" rel="noopener noreferrer">zyddnys/manga-image-translator</a></td>
<td style="text-align:right">80.74</td>
<td style="text-align:right">10,169 / 1,028</td>
<td>内容生成</td>
<td>漫画本地化团队、译者与图片内容爱好者</td>
<td>自动识别、翻译并重新排版漫画和图片文字；机制：串联OCR、翻译、文本消除和嵌字处理多语种图片；Translate manga/image 一键翻译各类图片内文字 https://cotrans.touhou.ai/ (no longer working)</td>
<td>流程效率</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">451</td>
<td><a href="https://github.com/ShishirPatil/gorilla" target="_blank" rel="noopener noreferrer">ShishirPatil/gorilla</a></td>
<td style="text-align:right">80.67</td>
<td style="text-align:right">12,940 / 1,387</td>
<td>模型与训练</td>
<td>函数调用模型研究者、Agent评测与工具开发团队</td>
<td>训练并评估大模型在多步骤工具调用中的能力；机制：提供函数调用数据、基准和执行运行时验证Agent动作；Gorilla: Training and Evaluating LLMs for Function Calls (Tool Calls)</td>
<td>评测与观测</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">452</td>
<td><a href="https://github.com/ValueCell-ai/valuecell" target="_blank" rel="noopener noreferrer">ValueCell-ai/valuecell</a></td>
<td style="text-align:right">80.67</td>
<td style="text-align:right">10,929 / 1,809</td>
<td>垂直行业应用</td>
<td>投资研究员、交易开发者与个人投资者</td>
<td>用多Agent完成选股、研究、跟踪和自动交易；机制：整合市场数据、LLM、交易所连接与本地密钥存储；ValueCell is a community-driven, multi-agent platform for financial applications.</td>
<td>流程效率</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">453</td>
<td><a href="https://github.com/lintsinghua/DeepAudit" target="_blank" rel="noopener noreferrer">lintsinghua/DeepAudit</a></td>
<td style="text-align:right">80.64</td>
<td style="text-align:right">6,607 / 814</td>
<td>垂直行业应用</td>
<td>代码安全团队、渗透测试员与中小开发组织</td>
<td>自动审计源代码、验证漏洞并生成专业报告；机制：用多Agent协作分析代码并在沙箱中自动执行PoC；DeepAudit：人人拥有的 AI 黑客战队，让漏洞挖掘触手可及。国内首个开源的代码漏洞挖掘多智能体系统。小白一键部署运行，自主协作审计 + 自动化沙箱 PoC 验证。支持 Ollama 私有部署 ，一键生成报告。支持中转站。​让安全不再昂贵，让审…</td>
<td>专业门槛</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">454</td>
<td><a href="https://github.com/rockbenben/ChatGPT-Shortcut" target="_blank" rel="noopener noreferrer">rockbenben/ChatGPT-Shortcut</a></td>
<td style="text-align:right">80.59</td>
<td style="text-align:right">8,606 / 945</td>
<td>企业效率</td>
<td>AI办公用户、提示词作者与知识工作者</td>
<td>管理、查找和复用不同工作场景的AI提示词；机制：以多语言提示词库、分类搜索和社区分享降低查找成本；🚀💪Maximize your efficiency and productivity. The ultimate hub to manage, customize, and share prompts. (English/中文/Español/ال…</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">455</td>
<td><a href="https://github.com/ai-shifu/ChatALL" target="_blank" rel="noopener noreferrer">ai-shifu/ChatALL</a></td>
<td style="text-align:right">80.58</td>
<td style="text-align:right">16,435 / 1,733</td>
<td>企业效率</td>
<td>LLM高级用户、内容创作者与模型比较者</td>
<td>并行向多个AI机器人提问并比较最佳回答；机制：在统一桌面界面同时发送提示并汇总各模型响应； Concurrently chat with ChatGPT, Bing Chat, Bard, Alpaca, Vicuna, Claude, ChatGLM, MOSS, 讯飞星火, 文心一言 and more, discover the best a…</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">456</td>
<td><a href="https://github.com/modelscope/modelscope" target="_blank" rel="noopener noreferrer">modelscope/modelscope</a></td>
<td style="text-align:right">80.57</td>
<td style="text-align:right">9,020 / 957</td>
<td>模型与训练</td>
<td>AI研究者、模型贡献者与应用开发团队</td>
<td>发现、调用、训练并管理跨领域机器学习模型；机制：以统一API连接模型库、数据集库和云端推理服务；ModelScope: bring the notion of Model-as-a-Service to life.</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">457</td>
<td><a href="https://github.com/steel-dev/steel-browser" target="_blank" rel="noopener noreferrer">steel-dev/steel-browser</a></td>
<td style="text-align:right">80.54</td>
<td style="text-align:right">7,321 / 948</td>
<td>开发者工具</td>
<td>浏览器Agent、Web自动化与AI应用开发者</td>
<td>为智能体提供可扩展的网页访问和浏览器自动化；机制：托管浏览器沙箱、会话和反自动化细节并暴露统一API；🔥 Open Source Browser API for AI Agents &amp; Apps. Steel Browser is a batteries-included browser sandbox that lets you automat…</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">458</td>
<td><a href="https://github.com/k4yt3x/video2x" target="_blank" rel="noopener noreferrer">k4yt3x/video2x</a></td>
<td style="text-align:right">80.52</td>
<td style="text-align:right">20,488 / 1,771</td>
<td>内容生成</td>
<td>视频修复、动漫增强与媒体处理开发者</td>
<td>提升低分辨率视频清晰度并插帧提高帧率；机制：用Real-ESRGAN、RIFE等模型和GPU流水线批量处理；A machine learning-based video super resolution and frame interpolation framework. Est. Hack the Valley II, 2018.</td>
<td>流程效率</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">459</td>
<td><a href="https://github.com/LAION-AI/Open-Assistant" target="_blank" rel="noopener noreferrer">LAION-AI/Open-Assistant</a></td>
<td style="text-align:right">80.49</td>
<td style="text-align:right">37,393 / 3,277</td>
<td>模型与训练</td>
<td>开源对话模型研究者与助手产品开发者</td>
<td>训练和构建能调用外部系统的开源对话助手；机制：以社区数据、模型训练和工具检索能力开放完整助手栈；OpenAssistant is a chat-based assistant that understands tasks, can interact with third-party systems, and retrieve informatio…</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">460</td>
<td><a href="https://github.com/JOYCEQL/magic-resume" target="_blank" rel="noopener noreferrer">JOYCEQL/magic-resume</a></td>
<td style="text-align:right">80.46</td>
<td style="text-align:right">8,736 / 977</td>
<td>垂直行业应用</td>
<td>求职者、应届生与职业转型用户</td>
<td>借助AI撰写、排版并导出专业求职简历；机制：结合智能写作、实时预览、主题模板和PDF导出；free online AI resume editor，the only official website is https://magicv.art</td>
<td>流程效率</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">461</td>
<td><a href="https://github.com/Netflix/metaflow" target="_blank" rel="noopener noreferrer">Netflix/metaflow</a></td>
<td style="text-align:right">80.41</td>
<td style="text-align:right">10,164 / 1,306</td>
<td>数据与MLOps</td>
<td>数据科学家、机器学习工程与AI平台团队</td>
<td>从原型到生产构建、管理并部署AI和ML系统；机制：用Python工作流统一版本、计算、调度和生产部署；Build, Manage and Deploy AI/ML Systems</td>
<td>数据治理与实验复现</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">462</td>
<td><a href="https://github.com/strands-agents/harness-sdk" target="_blank" rel="noopener noreferrer">strands-agents/harness-sdk</a></td>
<td style="text-align:right">80.41</td>
<td style="text-align:right">6,519 / 939</td>
<td>开发者工具</td>
<td>Python与TypeScript Agent及云应用开发者</td>
<td>构建并端到端控制可投入生产的AI智能体；机制：以模型驱动SDK统一Agent、工具、工作流和多云部署；Build an agent harness and control it end-to-end. Open-source SDK for production AI agents in Python &amp; TypeScript - any mod…</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">463</td>
<td><a href="https://github.com/wandb/wandb" target="_blank" rel="noopener noreferrer">wandb/wandb</a></td>
<td style="text-align:right">80.38</td>
<td style="text-align:right">11,174 / 884</td>
<td>数据与MLOps</td>
<td>模型训练、LLM应用与MLOps团队</td>
<td>跟踪、比较并管理从实验到生产的模型生命周期；机制：集中记录数据集、指标、产物并提供可视化和评测监控；The AI developer platform. Use Weights &amp; Biases to train and fine-tune models, and manage models from experimentation to pro…</td>
<td>评测与观测</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">464</td>
<td><a href="https://github.com/TencentARC/GFPGAN" target="_blank" rel="noopener noreferrer">TencentARC/GFPGAN</a></td>
<td style="text-align:right">80.30</td>
<td style="text-align:right">37,518 / 6,279</td>
<td>模型与训练</td>
<td>照片修复工具开发者、摄影与影像档案用户</td>
<td>自动修复真实世界低质量和退化人脸图像；机制：利用预训练人脸GAN先验恢复细节并支持CPU推理；GFPGAN aims at developing Practical Algorithms for Real-world Face Restoration.</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">465</td>
<td><a href="https://github.com/dotnet/machinelearning" target="_blank" rel="noopener noreferrer">dotnet/machinelearning</a></td>
<td style="text-align:right">80.06</td>
<td style="text-align:right">9,338 / 1,943</td>
<td>模型与训练</td>
<td>.NET企业开发者与业务机器学习团队</td>
<td>在.NET应用中训练、部署和消费自定义机器学习模型；机制：提供数据转换、AutoML及TensorFlow与ONNX互操作；ML.NET is an open source and cross-platform machine learning framework for .NET.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">466</td>
<td><a href="https://github.com/GoogleCloudPlatform/kubectl-ai" target="_blank" rel="noopener noreferrer">GoogleCloudPlatform/kubectl-ai</a></td>
<td style="text-align:right">80.00</td>
<td style="text-align:right">7,509 / 706</td>
<td>开发者工具</td>
<td>Kubernetes运维、平台工程与云原生开发者</td>
<td>用自然语言生成并执行准确的Kubernetes操作；机制：将用户意图翻译为kubectl资源配置和集群管理动作；AI powered Kubernetes Assistant</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">467</td>
<td><a href="https://github.com/builderz-labs/mission-control" target="_blank" rel="noopener noreferrer">builderz-labs/mission-control</a></td>
<td style="text-align:right">79.99</td>
<td style="text-align:right">5,705 / 960</td>
<td>Agent与RAG</td>
<td>多Agent运营、AI平台与成本治理团队</td>
<td>集中调度任务、管理Agent集群并监控费用；机制：用自托管控制台编排工作流、记录成本和治理权限；Self-hosted AI agent orchestration platform: dispatch tasks, run multi-agent workflows, monitor spend, and govern operations f…</td>
<td>评测与观测</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">468</td>
<td><a href="https://github.com/facebookresearch/pytorch3d" target="_blank" rel="noopener noreferrer">facebookresearch/pytorch3d</a></td>
<td style="text-align:right">79.97</td>
<td style="text-align:right">9,917 / 1,460</td>
<td>模型与训练</td>
<td>三维视觉研究者、神经渲染与图形工程师</td>
<td>在PyTorch中开发三维视觉与可微渲染模型；机制：提供网格数据结构、几何算子和可微分渲染组件；PyTorch3D is FAIR's library of reusable components for deep learning with 3D data</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">469</td>
<td><a href="https://github.com/vibrantlabsai/ragas" target="_blank" rel="noopener noreferrer">vibrantlabsai/ragas</a></td>
<td style="text-align:right">79.94</td>
<td style="text-align:right">14,781 / 1,551</td>
<td>安全评测治理</td>
<td>RAG、Agent与LLM应用评测团队</td>
<td>用客观指标和测试集评估并优化大模型应用；机制：提供自动指标、生产对齐测试生成和反馈评测循环；Supercharge Your LLM Application Evaluations 🚀</td>
<td>评测与观测</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">470</td>
<td><a href="https://github.com/altic-dev/FluidVoice" target="_blank" rel="noopener noreferrer">altic-dev/FluidVoice</a></td>
<td style="text-align:right">79.87</td>
<td style="text-align:right">7,287 / 452</td>
<td>企业效率</td>
<td>macOS知识工作者、写作者与无障碍输入用户</td>
<td>把连续语音实时转成格式完善的可用文本；机制：结合设备端语音识别和定制增强模型本地润色；Fastest and only macOS Dictation app with on-device STT and custom trained AI enhancement model. A local Wispr Flow alternative. ⭐…</td>
<td>隐私与合规</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">471</td>
<td><a href="https://github.com/op7418/CodePilot" target="_blank" rel="noopener noreferrer">op7418/CodePilot</a></td>
<td style="text-align:right">79.83</td>
<td style="text-align:right">6,123 / 659</td>
<td>开发者工具</td>
<td>多模型Agent用户、开发者与远程办公人员</td>
<td>在桌面和手机上运行可扩展的多模型AI助手；机制：统一模型提供商、MCP、技能和跨设备远程控制；A multi-model AI agent desktop client — connect any AI provider, extend with MCP &amp; skills, control from your phone. Built with…</td>
<td>系统集成与锁定</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">472</td>
<td><a href="https://github.com/Future-House/paper-qa" target="_blank" rel="noopener noreferrer">Future-House/paper-qa</a></td>
<td style="text-align:right">79.74</td>
<td style="text-align:right">8,846 / 887</td>
<td>Agent与RAG</td>
<td>科研人员、文献综述与科学问答开发团队</td>
<td>从科学文献中回答问题并提供可核验引用；机制：以高精度RAG检索文档、综合证据并检测矛盾；High accuracy RAG for answering questions from scientific documents with citations</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">473</td>
<td><a href="https://github.com/google-deepmind/sonnet" target="_blank" rel="noopener noreferrer">google-deepmind/sonnet</a></td>
<td style="text-align:right">79.71</td>
<td style="text-align:right">9,939 / 1,306</td>
<td>模型与训练</td>
<td>TensorFlow研究者与模型开发团队</td>
<td>用可组合模块构建神经网络研究原型；机制：在TensorFlow二之上提供简洁可复用的网络抽象；TensorFlow-based neural network library</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">474</td>
<td><a href="https://github.com/enricoros/big-AGI" target="_blank" rel="noopener noreferrer">enricoros/big-AGI</a></td>
<td style="text-align:right">79.69</td>
<td style="text-align:right">7,045 / 1,578</td>
<td>企业效率</td>
<td>工程师、创业者、研究者与多模型高级用户</td>
<td>在统一工作区使用多模型完成分析、创作和决策；机制：整合模型对比、Persona、语音、图像、代码和文档工具；AI suite powered by state-of-the-art models and providing advanced AI/AGI functions. Includes AI personas, AGI functions…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">475</td>
<td><a href="https://github.com/The-Pocket/PocketFlow" target="_blank" rel="noopener noreferrer">The-Pocket/PocketFlow</a></td>
<td style="text-align:right">79.62</td>
<td style="text-align:right">10,954 / 1,186</td>
<td>Agent与RAG</td>
<td>轻量Agent、RAG与工作流开发者</td>
<td>用极少代码构建Agent、RAG和多步骤工作流；机制：以百行零依赖核心抽象节点、流和多Agent模式；Pocket Flow: 100-line LLM framework. Let Agents build Agents!</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">476</td>
<td><a href="https://github.com/Project-MONAI/MONAI" target="_blank" rel="noopener noreferrer">Project-MONAI/MONAI</a></td>
<td style="text-align:right">79.54</td>
<td style="text-align:right">8,412 / 1,559</td>
<td>垂直行业应用</td>
<td>医学影像研究者、医疗AI与临床工程团队</td>
<td>构建、训练和评估医学影像深度学习模型；机制：以PyTorch提供医疗专用数据、网络、损失与评测流程；AI Toolkit for Healthcare Imaging</td>
<td>数据治理与实验复现</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">477</td>
<td><a href="https://github.com/maximhq/bifrost" target="_blank" rel="noopener noreferrer">maximhq/bifrost</a></td>
<td style="text-align:right">79.53</td>
<td style="text-align:right">6,433 / 876</td>
<td>推理部署</td>
<td>企业AI平台、后端与高并发推理团队</td>
<td>统一接入多家模型并保障高并发AI服务稳定；机制：通过兼容API、负载均衡、故障转移、缓存和护栏；Fastest enterprise AI gateway (50x faster than LiteLLM) with adaptive load balancer, cluster mode, guardrails, 1000+ models su…</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">478</td>
<td><a href="https://github.com/StarTrail-org/PixelRAG" target="_blank" rel="noopener noreferrer">StarTrail-org/PixelRAG</a></td>
<td style="text-align:right">79.52</td>
<td style="text-align:right">6,458 / 530</td>
<td>Agent与RAG</td>
<td>Web RAG、视觉检索与网页Agent开发者</td>
<td>把网页以像素截图索引并用于可扩展视觉检索；机制：将页面渲染为图块并用视觉嵌入建立检索索引；The end of web parsing. The beginning of scalable pixel-native search. link: https://pixelrag.ai/</td>
<td>数据准备与碎片</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">479</td>
<td><a href="https://github.com/unit8co/darts" target="_blank" rel="noopener noreferrer">unit8co/darts</a></td>
<td style="text-align:right">79.50</td>
<td style="text-align:right">9,460 / 1,017</td>
<td>模型与训练</td>
<td>时间序列分析师、预测与异常检测工程师</td>
<td>快速开发、回测并组合时间序列预测模型；机制：以统一fit和predict接口封装传统与深度模型；A python library for user-friendly forecasting and anomaly detection on time series.</td>
<td>数据治理与实验复现</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">480</td>
<td><a href="https://github.com/openchamber/openchamber" target="_blank" rel="noopener noreferrer">openchamber/openchamber</a></td>
<td style="text-align:right">79.44</td>
<td style="text-align:right">6,268 / 676</td>
<td>开发者工具</td>
<td>OpenCode用户、软件开发者与远程编程团队</td>
<td>跨桌面浏览器和手机管理AI编码会话；机制：提供图形界面同步会话、审查差异并运行开发服务；Desktop and web interface for OpenCode AI agent</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">481</td>
<td><a href="https://github.com/gorse-io/gorse" target="_blank" rel="noopener noreferrer">gorse-io/gorse</a></td>
<td style="text-align:right">79.41</td>
<td style="text-align:right">9,749 / 909</td>
<td>垂直行业应用</td>
<td>内容平台、电商与个性化产品开发团队</td>
<td>为在线服务快速接入自动训练的个性化推荐；机制：导入用户、物品和行为数据后自动训练并通过API推荐；AI powered open source recommender system engine supports classical/LLM rankers and multimodal content via embedding</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">482</td>
<td><a href="https://github.com/netease-youdao/LobsterAI" target="_blank" rel="noopener noreferrer">netease-youdao/LobsterAI</a></td>
<td style="text-align:right">79.41</td>
<td style="text-align:right">5,507 / 861</td>
<td>企业效率</td>
<td>知识工作者、运营团队与桌面自动化用户</td>
<td>让桌面Agent完成数据分析、文档和网络研究；机制：通过OpenClaw调用本地文件、终端、浏览器和办公工具；Open-source, desktop-grade AI agent that gets real work done — data analysis, slides, docs, video &amp; web research. Built…</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">483</td>
<td><a href="https://github.com/replicate/cog" target="_blank" rel="noopener noreferrer">replicate/cog</a></td>
<td style="text-align:right">79.29</td>
<td style="text-align:right">9,440 / 694</td>
<td>推理部署</td>
<td>机器学习工程师、模型发布与推理平台团队</td>
<td>把机器学习模型打包为标准生产容器并部署；机制：根据简明配置生成含依赖、GPU环境和API模式的镜像；Containers for machine learning</td>
<td>部署与运维</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">484</td>
<td><a href="https://github.com/FlagOpen/FlagEmbedding" target="_blank" rel="noopener noreferrer">FlagOpen/FlagEmbedding</a></td>
<td style="text-align:right">79.24</td>
<td style="text-align:right">11,923 / 901</td>
<td>模型与训练</td>
<td>RAG、语义检索与多模态搜索研究团队</td>
<td>训练和应用文本及多模态嵌入与重排模型；机制：提供BGE模型、训练工具和检索增强基准与示例；Retrieval and Retrieval-augmented LLMs</td>
<td>幻觉与可靠性</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">485</td>
<td><a href="https://github.com/dataease/SQLBot" target="_blank" rel="noopener noreferrer">dataease/SQLBot</a></td>
<td style="text-align:right">79.15</td>
<td style="text-align:right">6,384 / 784</td>
<td>企业效率</td>
<td>业务分析师、数据团队与企业应用开发者</td>
<td>用自然语言查询业务数据库并生成分析图表；机制：结合RAG、术语库和LLM生成SQL并执行可视化分析；🔥 基于大模型和 RAG 的智能问数系统，对话式数据分析神器。Text-to-SQL Generation via LLMs using RAG.</td>
<td>专业门槛</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">486</td>
<td><a href="https://github.com/bytedance/trae-agent" target="_blank" rel="noopener noreferrer">bytedance/trae-agent</a></td>
<td style="text-align:right">79.14</td>
<td style="text-align:right">11,820 / 1,304</td>
<td>开发者工具</td>
<td>软件工程师、编码Agent研究与工具开发者</td>
<td>用自然语言Agent执行通用软件工程任务；机制：通过透明可扩展CLI调用多模型和工程工具完成工作流；Trae Agent is an LLM-based agent for general purpose software engineering tasks.</td>
<td>流程效率</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">487</td>
<td><a href="https://github.com/stanfordnlp/CoreNLP" target="_blank" rel="noopener noreferrer">stanfordnlp/CoreNLP</a></td>
<td style="text-align:right">79.10</td>
<td style="text-align:right">10,091 / 2,722</td>
<td>开发者工具</td>
<td>Java NLP应用、文本分析与研究开发者</td>
<td>对原始文本执行分词、实体、句法和情感分析；机制：用Java流水线组合多种预训练自然语言处理组件；CoreNLP: A Java suite of core NLP tools for tokenization, sentence segmentation, NER, parsing, coreference, sentiment analysis…</td>
<td>专业门槛</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">488</td>
<td><a href="https://github.com/catboost/catboost" target="_blank" rel="noopener noreferrer">catboost/catboost</a></td>
<td style="text-align:right">78.92</td>
<td style="text-align:right">9,021 / 1,307</td>
<td>模型与训练</td>
<td>数据科学家、排名分类与回归模型工程师</td>
<td>训练高质量且可扩展的梯度提升树模型；机制：用类别特征处理、CPU与GPU训练和优化提升算法；A fast, scalable, high performance Gradient Boosting on Decision Trees library, used for ranking, classification, regression and…</td>
<td>专业门槛</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">489</td>
<td><a href="https://github.com/InternLM/lmdeploy" target="_blank" rel="noopener noreferrer">InternLM/lmdeploy</a></td>
<td style="text-align:right">78.90</td>
<td style="text-align:right">7,952 / 703</td>
<td>推理部署</td>
<td>大模型推理、私有化部署与AI平台工程师</td>
<td>压缩、部署并高并发服务主流大语言模型；机制：结合量化、TurboMind引擎和兼容API优化推理；LMDeploy is a toolkit for compressing, deploying, and serving LLMs.</td>
<td>成本与延迟</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">490</td>
<td><a href="https://github.com/julep-ai/julep" target="_blank" rel="noopener noreferrer">julep-ai/julep</a></td>
<td style="text-align:right">78.77</td>
<td style="text-align:right">6,600 / 972</td>
<td>Agent与RAG</td>
<td>生产级Agent、后端工作流与平台开发团队</td>
<td>构建可恢复、可重试且可解释的持久智能体；机制：把Agent定义为可组合数据流并限制工具权限和记录步骤；Julep — durable, composable AI agents. Flows that crash and resume, retry safely, and explain every step.</td>
<td>幻觉与可靠性</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">491</td>
<td><a href="https://github.com/bitsandbytes-foundation/bitsandbytes" target="_blank" rel="noopener noreferrer">bitsandbytes-foundation/bitsandbytes</a></td>
<td style="text-align:right">78.76</td>
<td style="text-align:right">8,313 / 882</td>
<td>模型与训练</td>
<td>LLM微调、推理与资源受限研究团队</td>
<td>以较少显存训练和运行大型语言模型；机制：用八位优化器、LLM.int8和四位QLoRA量化；Accessible large language models via k-bit quantization for PyTorch.</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">492</td>
<td><a href="https://github.com/LykosAI/StabilityMatrix" target="_blank" rel="noopener noreferrer">LykosAI/StabilityMatrix</a></td>
<td style="text-align:right">78.72</td>
<td style="text-align:right">8,483 / 580</td>
<td>内容生成</td>
<td>Stable Diffusion创作者、插件与模型管理用户</td>
<td>跨平台安装管理并更新Stable Diffusion工具链；机制：用桌面包管理器统一模型、界面包和共享依赖；Multi-Platform Package Manager for Stable Diffusion</td>
<td>部署与运维</td>
<td>AGPL-3.0；高：网络服务也可能触发源码开放义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">493</td>
<td><a href="https://github.com/bbfamily/abu" target="_blank" rel="noopener noreferrer">bbfamily/abu</a></td>
<td style="text-align:right">78.62</td>
<td style="text-align:right">17,773 / 4,631</td>
<td>垂直行业应用</td>
<td>量化研究员、交易开发者与个人投资者</td>
<td>研究、回测和执行多资产量化交易策略；机制：以Python框架整合行情、因子、回测、机器学习和界面；阿布量化交易系统(股票，期权，期货，比特币，机器学习) 基于python的开源量化交易，量化投资架构</td>
<td>专业门槛</td>
<td>GPL-3.0；中高：分发衍生作品需核对开源义务</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">494</td>
<td><a href="https://github.com/yzhao062/pyod" target="_blank" rel="noopener noreferrer">yzhao062/pyod</a></td>
<td style="text-align:right">78.54</td>
<td style="text-align:right">9,911 / 1,479</td>
<td>模型与训练</td>
<td>异常检测研究者、风控与数据科学团队</td>
<td>跨表格时序图像文本等数据发现异常样本；机制：统一六十余检测器、基准和Agent式算法编排；A Python library for anomaly detection across tabular, time series, graph, text, image, and audio data. 60+ detectors, benchmark-…</td>
<td>专业门槛</td>
<td>BSD-2-Clause；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">495</td>
<td><a href="https://github.com/kyegomez/swarms" target="_blank" rel="noopener noreferrer">kyegomez/swarms</a></td>
<td style="text-align:right">78.49</td>
<td style="text-align:right">6,932 / 960</td>
<td>Agent与RAG</td>
<td>企业多Agent、自动化平台与应用开发团队</td>
<td>编排可扩展的顺序、并发和层级多智能体系统；机制：提供生产级预置架构、互操作接口和运行治理组件；The Enterprise-Grade Production-Ready Multi-Agent Orchestration Framework. Website: https://swarms.ai</td>
<td>系统集成与锁定</td>
<td>Apache-2.0；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">496</td>
<td><a href="https://github.com/EricLBuehler/mistral.rs" target="_blank" rel="noopener noreferrer">EricLBuehler/mistral.rs</a></td>
<td style="text-align:right">78.47</td>
<td style="text-align:right">7,460 / 655</td>
<td>推理部署</td>
<td>Rust推理、私有模型与本地Agent开发者</td>
<td>快速运行并服务多种语言和多模态模型；机制：用Rust引擎提供量化、缓存、工具调用及兼容API；Fast, flexible LLM inference</td>
<td>成本与延迟</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">497</td>
<td><a href="https://github.com/aidenybai/react-grab" target="_blank" rel="noopener noreferrer">aidenybai/react-grab</a></td>
<td style="text-align:right">78.47</td>
<td style="text-align:right">7,404 / 333</td>
<td>开发者工具</td>
<td>React前端开发者与UI编码Agent用户</td>
<td>把页面元素及对应源码准确交给编码智能体；机制：在浏览器选取组件并解析源码位置和上下文供Agent使用；Copy any UI element for your agent</td>
<td>数据准备与碎片</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">498</td>
<td><a href="https://github.com/jacob-bd/notebooklm-mcp-cli" target="_blank" rel="noopener noreferrer">jacob-bd/notebooklm-mcp-cli</a></td>
<td style="text-align:right">78.47</td>
<td style="text-align:right">5,396 / 827</td>
<td>开发者工具</td>
<td>研究自动化、NotebookLM与Agent开发者</td>
<td>以程序方式批量控制NotebookLM研究和内容生成；机制：通过CLI、MCP服务器和技能封装NotebookLM操作；Programmatic access to Google NotebookLM — via command-line interface (CLI), Model Context Protocol (MCP) server,…</td>
<td>系统集成与锁定</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">499</td>
<td><a href="https://github.com/Upsonic/Upsonic" target="_blank" rel="noopener noreferrer">Upsonic/Upsonic</a></td>
<td style="text-align:right">78.42</td>
<td style="text-align:right">7,906 / 737</td>
<td>Agent与RAG</td>
<td>Python Agent开发者、自动化与应用团队</td>
<td>用Python构建可自主执行任务的AI智能体；机制：提供Agent、工具、记忆和多步骤工作流的框架抽象；Build autonomous AI agents in Python.</td>
<td>专业门槛</td>
<td>MIT；低：保留版权与许可声明</td>
<td>高</td>
</tr>
<tr>
<td style="text-align:right">500</td>
<td><a href="https://github.com/oramasearch/orama" target="_blank" rel="noopener noreferrer">oramasearch/orama</a></td>
<td style="text-align:right">78.40</td>
<td style="text-align:right">10,474 / 398</td>
<td>数据与MLOps</td>
<td>Web搜索、边缘RAG与应用开发团队</td>
<td>在浏览器、服务器或边缘构建全文向量混合搜索；机制：以轻量引擎统一索引、过滤、向量检索和生成式会话；🌌 A complete search engine and RAG pipeline in your browser, server or edge network with support for full-text, vector, and h…</td>
<td>成本与延迟</td>
<td>NOASSERTION；高：未核验前不可直接复用代码</td>
<td>高</td>
</tr>
</tbody>
</table></div>
<h2 id="附录-b-高于最终阈值但被排除的候选">附录 B：高于最终阈值但被排除的候选</h2>
<div class="table-wrap" role="region" aria-label="可横向滚动的数据表" tabindex="0"><table>
<thead>
<tr>
<th style="text-align:right">综合热度</th>
<th style="text-align:right">Stars</th>
<th>仓库</th>
<th>排除原因</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">99.39</td>
<td style="text-align:right">141,790</td>
<td><a href="https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools" target="_blank" rel="noopener noreferrer">x1xhlol/system-prompts-and-models-of-ai-tools</a></td>
<td>纯教育/资源内容（命中 \b(prompt[- ]collection|prompts?[- ]list|system[- ]prompts?)\b）</td>
</tr>
<tr>
<td style="text-align:right">99.32</td>
<td style="text-align:right">196,004</td>
<td><a href="https://github.com/n8n-io/n8n" target="_blank" rel="noopener noreferrer">n8n-io/n8n</a></td>
<td>人工复核排除：核心仍是通用工作流自动化平台，AI 只是可选节点与能力，并非仓库的必要业务内核。</td>
</tr>
<tr>
<td style="text-align:right">99.24</td>
<td style="text-align:right">117,673</td>
<td><a href="https://github.com/Shubhamsaboo/awesome-llm-apps" target="_blank" rel="noopener noreferrer">Shubhamsaboo/awesome-llm-apps</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">99.02</td>
<td style="text-align:right">112,861</td>
<td><a href="https://github.com/microsoft/generative-ai-for-beginners" target="_blank" rel="noopener noreferrer">microsoft/generative-ai-for-beginners</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">98.61</td>
<td style="text-align:right">156,942</td>
<td><a href="https://github.com/Snailclimb/JavaGuide" target="_blank" rel="noopener noreferrer">Snailclimb/JavaGuide</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">98.57</td>
<td style="text-align:right">65,394</td>
<td><a href="https://github.com/datawhalechina/hello-agents" target="_blank" rel="noopener noreferrer">datawhalechina/hello-agents</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">98.55</td>
<td style="text-align:right">90,589</td>
<td><a href="https://github.com/punkpeye/awesome-mcp-servers" target="_blank" rel="noopener noreferrer">punkpeye/awesome-mcp-servers</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">98.55</td>
<td style="text-align:right">68,974</td>
<td><a href="https://github.com/microsoft/ai-agents-for-beginners" target="_blank" rel="noopener noreferrer">microsoft/ai-agents-for-beginners</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">98.47</td>
<td style="text-align:right">106,133</td>
<td><a href="https://github.com/supabase/supabase" target="_blank" rel="noopener noreferrer">supabase/supabase</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">98.42</td>
<td style="text-align:right">62,417</td>
<td><a href="https://github.com/shanraisshan/claude-code-best-practice" target="_blank" rel="noopener noreferrer">shanraisshan/claude-code-best-practice</a></td>
<td>纯教育/资源内容（命中 \b(best[- ]practices?|checklists?|blogs?|blog posts?|cheat[- ]?sheets?)\b）</td>
</tr>
<tr>
<td style="text-align:right">98.11</td>
<td style="text-align:right">69,067</td>
<td><a href="https://github.com/D4Vinci/Scrapling" target="_blank" rel="noopener noreferrer">D4Vinci/Scrapling</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">98.01</td>
<td style="text-align:right">55,908</td>
<td><a href="https://github.com/asgeirtj/system_prompts_leaks" target="_blank" rel="noopener noreferrer">asgeirtj/system_prompts_leaks</a></td>
<td>纯教育/资源内容（命中 \b(prompt[- ]collection|prompts?[- ]list|system[- ]prompts?)\b）</td>
</tr>
<tr>
<td style="text-align:right">97.71</td>
<td style="text-align:right">87,925</td>
<td><a href="https://github.com/microsoft/ML-For-Beginners" target="_blank" rel="noopener noreferrer">microsoft/ML-For-Beginners</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">97.71</td>
<td style="text-align:right">61,853</td>
<td><a href="https://github.com/Leonxlnx/taste-skill" target="_blank" rel="noopener noreferrer">Leonxlnx/taste-skill</a></td>
<td>人工复核排除：主体是可复制的 SKILL.md 设计指令集合，没有独立模型、运行时或可执行 AI 应用。</td>
</tr>
<tr>
<td style="text-align:right">97.65</td>
<td style="text-align:right">70,628</td>
<td><a href="https://github.com/shareAI-lab/learn-claude-code" target="_blank" rel="noopener noreferrer">shareAI-lab/learn-claude-code</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">97.53</td>
<td style="text-align:right">42,829</td>
<td><a href="https://github.com/sickn33/agentic-awesome-skills" target="_blank" rel="noopener noreferrer">sickn33/agentic-awesome-skills</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">97.37</td>
<td style="text-align:right">70,428</td>
<td><a href="https://github.com/OpenBB-finance/OpenBB" target="_blank" rel="noopener noreferrer">OpenBB-finance/OpenBB</a></td>
<td>人工复核排除：核心是金融数据平台，AI agent 只是数据消费者之一，仓库本身不提供核心 AI 能力。</td>
</tr>
<tr>
<td style="text-align:right">97.28</td>
<td style="text-align:right">49,762</td>
<td><a href="https://github.com/hesreallyhim/awesome-claude-code" target="_blank" rel="noopener noreferrer">hesreallyhim/awesome-claude-code</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">97.16</td>
<td style="text-align:right">37,583</td>
<td><a href="https://github.com/coreyhaines31/marketingskills" target="_blank" rel="noopener noreferrer">coreyhaines31/marketingskills</a></td>
<td>人工复核排除：主体是静态营销 SKILL.md 知识与提示词集合，校验脚本不构成可运行 AI 产品。</td>
</tr>
<tr>
<td style="text-align:right">97.01</td>
<td style="text-align:right">82,385</td>
<td><a href="https://github.com/Developer-Y/cs-video-courses" target="_blank" rel="noopener noreferrer">Developer-Y/cs-video-courses</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">96.53</td>
<td style="text-align:right">29,929</td>
<td><a href="https://github.com/Gitlawb/openclaude" target="_blank" rel="noopener noreferrer">Gitlawb/openclaude</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">96.50</td>
<td style="text-align:right">36,430</td>
<td><a href="https://github.com/github/awesome-copilot" target="_blank" rel="noopener noreferrer">github/awesome-copilot</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">96.47</td>
<td style="text-align:right">53,167</td>
<td><a href="https://github.com/jingyaogong/minimind" target="_blank" rel="noopener noreferrer">jingyaogong/minimind</a></td>
<td>纯教育/资源内容（命中 \b(from[- ]scratch|for[- ]beginners?|100[- ]days)\b）</td>
</tr>
<tr>
<td style="text-align:right">96.44</td>
<td style="text-align:right">52,085</td>
<td><a href="https://github.com/microsoft/AI-For-Beginners" target="_blank" rel="noopener noreferrer">microsoft/AI-For-Beginners</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">96.44</td>
<td style="text-align:right">37,770</td>
<td><a href="https://github.com/wshobson/agents" target="_blank" rel="noopener noreferrer">wshobson/agents</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">96.29</td>
<td style="text-align:right">79,591</td>
<td><a href="https://github.com/netdata/netdata" target="_blank" rel="noopener noreferrer">netdata/netdata</a></td>
<td>人工复核排除：核心是通用全栈基础设施监控，AI/ML 与 MCP 属于增值能力，不是产品运行的必要内核。</td>
</tr>
<tr>
<td style="text-align:right">96.11</td>
<td style="text-align:right">37,890</td>
<td><a href="https://github.com/rohitg00/ai-engineering-from-scratch" target="_blank" rel="noopener noreferrer">rohitg00/ai-engineering-from-scratch</a></td>
<td>纯教育/资源内容（命中 \b(from[- ]scratch|for[- ]beginners?|100[- ]days)\b）</td>
</tr>
<tr>
<td style="text-align:right">96.09</td>
<td style="text-align:right">98,890</td>
<td><a href="https://github.com/rasbt/LLMs-from-scratch" target="_blank" rel="noopener noreferrer">rasbt/LLMs-from-scratch</a></td>
<td>纯教育/资源内容（命中 \b(from[- ]scratch|for[- ]beginners?|100[- ]days)\b）</td>
</tr>
<tr>
<td style="text-align:right">95.64</td>
<td style="text-align:right">47,008</td>
<td><a href="https://github.com/jeecgboot/JeecgBoot" target="_blank" rel="noopener noreferrer">jeecgboot/JeecgBoot</a></td>
<td>人工复核排除：核心是通用 Java 低代码开发平台，AI Skills、知识库和 Agent 是新增可选模块。</td>
</tr>
<tr>
<td style="text-align:right">95.49</td>
<td style="text-align:right">45,217</td>
<td><a href="https://github.com/elder-plinius/CL4R1T4S" target="_blank" rel="noopener noreferrer">elder-plinius/CL4R1T4S</a></td>
<td>纯教育/资源内容（命中 \b(prompt[- ]collection|prompts?[- ]list|system[- ]prompts?)\b）</td>
</tr>
<tr>
<td style="text-align:right">95.46</td>
<td style="text-align:right">30,645</td>
<td><a href="https://github.com/K-Dense-AI/scientific-agent-skills" target="_blank" rel="noopener noreferrer">K-Dense-AI/scientific-agent-skills</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">95.31</td>
<td style="text-align:right">42,904</td>
<td><a href="https://github.com/paperless-ngx/paperless-ngx" target="_blank" rel="noopener noreferrer">paperless-ngx/paperless-ngx</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">95.16</td>
<td style="text-align:right">27,787</td>
<td><a href="https://github.com/VoltAgent/awesome-agent-skills" target="_blank" rel="noopener noreferrer">VoltAgent/awesome-agent-skills</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">95.11</td>
<td style="text-align:right">27,568</td>
<td><a href="https://github.com/JCodesMore/ai-website-cloner-template" target="_blank" rel="noopener noreferrer">JCodesMore/ai-website-cloner-template</a></td>
<td>模板或概念 Demo（命中 \b(template|boilerplate|starter kit)\b）</td>
</tr>
<tr>
<td style="text-align:right">95.09</td>
<td style="text-align:right">73,181</td>
<td><a href="https://github.com/thedaviddias/Front-End-Checklist" target="_blank" rel="noopener noreferrer">thedaviddias/Front-End-Checklist</a></td>
<td>纯教育/资源内容（命中 \b(best[- ]practices?|checklists?|blogs?|blog posts?|cheat[- ]?sheets?)\b）</td>
</tr>
<tr>
<td style="text-align:right">95.09</td>
<td style="text-align:right">45,198</td>
<td><a href="https://github.com/streamlit/streamlit" target="_blank" rel="noopener noreferrer">streamlit/streamlit</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">95.02</td>
<td style="text-align:right">38,176</td>
<td><a href="https://github.com/ToolJet/ToolJet" target="_blank" rel="noopener noreferrer">ToolJet/ToolJet</a></td>
<td>人工复核排除：核心是通用内部工具低代码平台，AI 应用生成与 Agent 为可选商业能力。</td>
</tr>
<tr>
<td style="text-align:right">94.99</td>
<td style="text-align:right">28,044</td>
<td><a href="https://github.com/CloakHQ/CloakBrowser" target="_blank" rel="noopener noreferrer">CloakHQ/CloakBrowser</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">94.97</td>
<td style="text-align:right">67,423</td>
<td><a href="https://github.com/ComposioHQ/awesome-claude-skills" target="_blank" rel="noopener noreferrer">ComposioHQ/awesome-claude-skills</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">94.91</td>
<td style="text-align:right">38,154</td>
<td><a href="https://github.com/YunaiV/ruoyi-vue-pro" target="_blank" rel="noopener noreferrer">YunaiV/ruoyi-vue-pro</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">94.89</td>
<td style="text-align:right">48,575</td>
<td><a href="https://github.com/ClickHouse/ClickHouse" target="_blank" rel="noopener noreferrer">ClickHouse/ClickHouse</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">94.82</td>
<td style="text-align:right">29,278</td>
<td><a href="https://github.com/AlexsJones/llmfit" target="_blank" rel="noopener noreferrer">AlexsJones/llmfit</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">94.79</td>
<td style="text-align:right">38,743</td>
<td><a href="https://github.com/chatanywhere/GPT_API_free" target="_blank" rel="noopener noreferrer">chatanywhere/GPT_API_free</a></td>
<td>人工复核排除：README 仅提供外部托管 API、免费 Key、付费入口和接口说明，未提供可运行的开源服务实现。</td>
</tr>
<tr>
<td style="text-align:right">94.78</td>
<td style="text-align:right">73,304</td>
<td><a href="https://github.com/josephmisiti/awesome-machine-learning" target="_blank" rel="noopener noreferrer">josephmisiti/awesome-machine-learning</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">94.77</td>
<td style="text-align:right">25,463</td>
<td><a href="https://github.com/HKUDS/DeepTutor" target="_blank" rel="noopener noreferrer">HKUDS/DeepTutor</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">94.70</td>
<td style="text-align:right">36,169</td>
<td><a href="https://github.com/1Panel-dev/1Panel" target="_blank" rel="noopener noreferrer">1Panel-dev/1Panel</a></td>
<td>人工复核排除：核心是通用 VPS 控制面板，Ollama/OpenClaw 支持只是附加部署能力。</td>
</tr>
<tr>
<td style="text-align:right">94.61</td>
<td style="text-align:right">28,217</td>
<td><a href="https://github.com/Fincept-Corporation/FinceptTerminal" target="_blank" rel="noopener noreferrer">Fincept-Corporation/FinceptTerminal</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">94.50</td>
<td style="text-align:right">46,091</td>
<td><a href="https://github.com/apache/airflow" target="_blank" rel="noopener noreferrer">apache/airflow</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">94.46</td>
<td style="text-align:right">50,954</td>
<td><a href="https://github.com/dbeaver/dbeaver" target="_blank" rel="noopener noreferrer">dbeaver/dbeaver</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">94.38</td>
<td style="text-align:right">23,803</td>
<td><a href="https://github.com/enescingoz/awesome-n8n-templates" target="_blank" rel="noopener noreferrer">enescingoz/awesome-n8n-templates</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">94.32</td>
<td style="text-align:right">29,250</td>
<td><a href="https://github.com/facefusion/facefusion" target="_blank" rel="noopener noreferrer">facefusion/facefusion</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">94.31</td>
<td style="text-align:right">28,461</td>
<td><a href="https://github.com/NirDiamant/RAG_Techniques" target="_blank" rel="noopener noreferrer">NirDiamant/RAG_Techniques</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">94.28</td>
<td style="text-align:right">38,345</td>
<td><a href="https://github.com/google-research/google-research" target="_blank" rel="noopener noreferrer">google-research/google-research</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">94.26</td>
<td style="text-align:right">25,993</td>
<td><a href="https://github.com/p-e-w/heretic" target="_blank" rel="noopener noreferrer">p-e-w/heretic</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">94.02</td>
<td style="text-align:right">26,753</td>
<td><a href="https://github.com/cheahjs/free-llm-api-resources" target="_blank" rel="noopener noreferrer">cheahjs/free-llm-api-resources</a></td>
<td>纯教育/资源内容（命中 \b(resources?|newsletter|cheatsheet|cheat[- ]sheet)\b）</td>
</tr>
<tr>
<td style="text-align:right">93.99</td>
<td style="text-align:right">28,686</td>
<td><a href="https://github.com/e2b-dev/awesome-ai-agents" target="_blank" rel="noopener noreferrer">e2b-dev/awesome-ai-agents</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">93.98</td>
<td style="text-align:right">29,593</td>
<td><a href="https://github.com/googleworkspace/cli" target="_blank" rel="noopener noreferrer">googleworkspace/cli</a></td>
<td>人工复核排除：核心是 Google Workspace 通用 CLI，AI agent skills 只是随附说明与适配层。</td>
</tr>
<tr>
<td style="text-align:right">93.94</td>
<td style="text-align:right">36,435</td>
<td><a href="https://github.com/patchy631/ai-engineering-hub" target="_blank" rel="noopener noreferrer">patchy631/ai-engineering-hub</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">93.91</td>
<td style="text-align:right">27,380</td>
<td><a href="https://github.com/harvard-edge/cs249r_book" target="_blank" rel="noopener noreferrer">harvard-edge/cs249r_book</a></td>
<td>纯教育/资源内容（命中 \b(book|books|ebook|handbook|guidebook)\b）</td>
</tr>
<tr>
<td style="text-align:right">93.88</td>
<td style="text-align:right">23,166</td>
<td><a href="https://github.com/VoltAgent/awesome-claude-code-subagents" target="_blank" rel="noopener noreferrer">VoltAgent/awesome-claude-code-subagents</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">93.75</td>
<td style="text-align:right">25,262</td>
<td><a href="https://github.com/mukul975/Anthropic-Cybersecurity-Skills" target="_blank" rel="noopener noreferrer">mukul975/Anthropic-Cybersecurity-Skills</a></td>
<td>人工复核排除：主体是 817 个结构化 Markdown 技能/知识条目，官方说明其不是脚本集合，属于静态技能库。</td>
</tr>
<tr>
<td style="text-align:right">93.61</td>
<td style="text-align:right">34,105</td>
<td><a href="https://github.com/ashishpatel26/500-AI-Agents-Projects" target="_blank" rel="noopener noreferrer">ashishpatel26/500-AI-Agents-Projects</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">93.60</td>
<td style="text-align:right">40,272</td>
<td><a href="https://github.com/pingcap/tidb" target="_blank" rel="noopener noreferrer">pingcap/tidb</a></td>
<td>人工复核排除：核心是通用分布式 SQL/HTAP 数据库，Agent 与向量搜索是工作负载适配而非核心 AI 产品。</td>
</tr>
<tr>
<td style="text-align:right">93.60</td>
<td style="text-align:right">28,206</td>
<td><a href="https://github.com/aishwaryanr/awesome-generative-ai-guide" target="_blank" rel="noopener noreferrer">aishwaryanr/awesome-generative-ai-guide</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">93.44</td>
<td style="text-align:right">49,009</td>
<td><a href="https://github.com/JuliaLang/julia" target="_blank" rel="noopener noreferrer">JuliaLang/julia</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">93.26</td>
<td style="text-align:right">23,070</td>
<td><a href="https://github.com/NirDiamant/GenAI_Agents" target="_blank" rel="noopener noreferrer">NirDiamant/GenAI_Agents</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">93.15</td>
<td style="text-align:right">21,784</td>
<td><a href="https://github.com/index-tts/index-tts" target="_blank" rel="noopener noreferrer">index-tts/index-tts</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">92.91</td>
<td style="text-align:right">43,768</td>
<td><a href="https://github.com/Kong/kong" target="_blank" rel="noopener noreferrer">Kong/kong</a></td>
<td>人工复核排除：核心是通用 API Gateway，AI Gateway/MCP/模型代理是插件化可选能力。</td>
</tr>
<tr>
<td style="text-align:right">92.86</td>
<td style="text-align:right">31,235</td>
<td><a href="https://github.com/datawhalechina/self-llm" target="_blank" rel="noopener noreferrer">datawhalechina/self-llm</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">92.84</td>
<td style="text-align:right">20,953</td>
<td><a href="https://github.com/NirDiamant/agents-towards-production" target="_blank" rel="noopener noreferrer">NirDiamant/agents-towards-production</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">92.48</td>
<td style="text-align:right">17,092</td>
<td><a href="https://github.com/jnMetaCode/agency-agents-zh" target="_blank" rel="noopener noreferrer">jnMetaCode/agency-agents-zh</a></td>
<td>人工复核排除：主体是 266 个 Agent 角色、提示与技能定义的翻译/合集，不是独立运行产品。</td>
</tr>
<tr>
<td style="text-align:right">92.22</td>
<td style="text-align:right">20,609</td>
<td><a href="https://github.com/vercel/chatbot" target="_blank" rel="noopener noreferrer">vercel/chatbot</a></td>
<td>人工复核排除：README 明确定位为 Next.js AI Chatbot 模板，不是独立可产品化项目。</td>
</tr>
<tr>
<td style="text-align:right">92.03</td>
<td style="text-align:right">24,702</td>
<td><a href="https://github.com/liguodongiot/llm-action" target="_blank" rel="noopener noreferrer">liguodongiot/llm-action</a></td>
<td>人工复核排除：主体是大模型技术原理、课程链接与实战经验汇编，属于学习资源。</td>
</tr>
<tr>
<td style="text-align:right">91.76</td>
<td style="text-align:right">18,038</td>
<td><a href="https://github.com/datawhalechina/easy-vibe" target="_blank" rel="noopener noreferrer">datawhalechina/easy-vibe</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">91.58</td>
<td style="text-align:right">27,389</td>
<td><a href="https://github.com/kestra-io/kestra" target="_blank" rel="noopener noreferrer">kestra-io/kestra</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">91.48</td>
<td style="text-align:right">17,512</td>
<td><a href="https://github.com/steipete/CodexBar" target="_blank" rel="noopener noreferrer">steipete/CodexBar</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">91.47</td>
<td style="text-align:right">24,841</td>
<td><a href="https://github.com/flipped-aurora/gin-vue-admin" target="_blank" rel="noopener noreferrer">flipped-aurora/gin-vue-admin</a></td>
<td>人工复核排除：主体是通用 Gin/Vue 后台开发脚手架，AI、MCP 和 Skills 只是附加能力。</td>
</tr>
<tr>
<td style="text-align:right">91.38</td>
<td style="text-align:right">19,766</td>
<td><a href="https://github.com/SWE-agent/SWE-agent" target="_blank" rel="noopener noreferrer">SWE-agent/SWE-agent</a></td>
<td>论文型仓库，未发现独立产品化定位</td>
</tr>
<tr>
<td style="text-align:right">91.34</td>
<td style="text-align:right">29,152</td>
<td><a href="https://github.com/nrwl/nx" target="_blank" rel="noopener noreferrer">nrwl/nx</a></td>
<td>人工复核排除：主体仍是通用 Monorepo、构建和 CI 平台，AI 原生配置与自愈 CI 是可选增量能力。</td>
</tr>
<tr>
<td style="text-align:right">91.25</td>
<td style="text-align:right">29,587</td>
<td><a href="https://github.com/academic/awesome-datascience" target="_blank" rel="noopener noreferrer">academic/awesome-datascience</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">91.20</td>
<td style="text-align:right">23,663</td>
<td><a href="https://github.com/lukasmasuch/best-of-ml-python" target="_blank" rel="noopener noreferrer">lukasmasuch/best-of-ml-python</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">91.16</td>
<td style="text-align:right">28,549</td>
<td><a href="https://github.com/dmlc/xgboost" target="_blank" rel="noopener noreferrer">dmlc/xgboost</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">90.93</td>
<td style="text-align:right">23,310</td>
<td><a href="https://github.com/nocobase/nocobase" target="_blank" rel="noopener noreferrer">nocobase/nocobase</a></td>
<td>纯教育/资源内容（命中 \b(from[- ]scratch|for[- ]beginners?|100[- ]days)\b）</td>
</tr>
<tr>
<td style="text-align:right">90.91</td>
<td style="text-align:right">76,347</td>
<td><a href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank" rel="noopener noreferrer">dair-ai/Prompt-Engineering-Guide</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">90.86</td>
<td style="text-align:right">21,834</td>
<td><a href="https://github.com/MaaAssistantArknights/MaaAssistantArknights" target="_blank" rel="noopener noreferrer">MaaAssistantArknights/MaaAssistantArknights</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">90.84</td>
<td style="text-align:right">28,337</td>
<td><a href="https://github.com/The-Art-of-Hacking/h4cker" target="_blank" rel="noopener noreferrer">The-Art-of-Hacking/h4cker</a></td>
<td>纯教育/资源内容（命中 \b(resources?|newsletter|cheatsheet|cheat[- ]sheet)\b）</td>
</tr>
<tr>
<td style="text-align:right">90.81</td>
<td style="text-align:right">21,605</td>
<td><a href="https://github.com/airbytehq/airbyte" target="_blank" rel="noopener noreferrer">airbytehq/airbyte</a></td>
<td>人工复核排除：核心是通用 ELT 数据搬运平台，AI Agent 只是众多下游目的地之一。</td>
</tr>
<tr>
<td style="text-align:right">90.80</td>
<td style="text-align:right">22,825</td>
<td><a href="https://github.com/Donchitos/Claude-Code-Game-Studios" target="_blank" rel="noopener noreferrer">Donchitos/Claude-Code-Game-Studios</a></td>
<td>人工复核排除：主体是 49 个 Agent、73 个 Skills 和文档模板的配置合集，没有独立运行时。</td>
</tr>
<tr>
<td style="text-align:right">90.64</td>
<td style="text-align:right">17,215</td>
<td><a href="https://github.com/GoogleCloudPlatform/generative-ai" target="_blank" rel="noopener noreferrer">GoogleCloudPlatform/generative-ai</a></td>
<td>纯教育/资源内容（命中 \b(curated collection|sample code|jupyter notebooks?|educational purposes?|cookbook|playbook)\b）</td>
</tr>
<tr>
<td style="text-align:right">90.62</td>
<td style="text-align:right">21,794</td>
<td><a href="https://github.com/marimo-team/marimo" target="_blank" rel="noopener noreferrer">marimo-team/marimo</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">90.61</td>
<td style="text-align:right">22,558</td>
<td><a href="https://github.com/AccumulateMore/CV" target="_blank" rel="noopener noreferrer">AccumulateMore/CV</a></td>
<td>人工复核排除：仓库明确是已完结的深度学习学习笔记，不是产品或框架。</td>
</tr>
<tr>
<td style="text-align:right">90.47</td>
<td style="text-align:right">31,953</td>
<td><a href="https://github.com/datawhalechina/happy-llm" target="_blank" rel="noopener noreferrer">datawhalechina/happy-llm</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">90.44</td>
<td style="text-align:right">28,082</td>
<td><a href="https://github.com/gitleaks/gitleaks" target="_blank" rel="noopener noreferrer">gitleaks/gitleaks</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">90.41</td>
<td style="text-align:right">25,782</td>
<td><a href="https://github.com/go-kratos/kratos" target="_blank" rel="noopener noreferrer">go-kratos/kratos</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">90.40</td>
<td style="text-align:right">17,117</td>
<td><a href="https://github.com/liyupi/ai-guide" target="_blank" rel="noopener noreferrer">liyupi/ai-guide</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">90.39</td>
<td style="text-align:right">24,590</td>
<td><a href="https://github.com/nautechsystems/nautilus_trader" target="_blank" rel="noopener noreferrer">nautechsystems/nautilus_trader</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">90.37</td>
<td style="text-align:right">28,278</td>
<td><a href="https://github.com/deezer/spleeter" target="_blank" rel="noopener noreferrer">deezer/spleeter</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">90.27</td>
<td style="text-align:right">25,412</td>
<td><a href="https://github.com/lucidrains/vit-pytorch" target="_blank" rel="noopener noreferrer">lucidrains/vit-pytorch</a></td>
<td>论文复现或单篇论文实现</td>
</tr>
<tr>
<td style="text-align:right">90.13</td>
<td style="text-align:right">12,683</td>
<td><a href="https://github.com/xbtlin/ai-berkshire" target="_blank" rel="noopener noreferrer">xbtlin/ai-berkshire</a></td>
<td>人工复核排除：主体是价值投资方法论与 Claude/Codex Skills 合集，不是独立运行的投资产品。</td>
</tr>
<tr>
<td style="text-align:right">89.85</td>
<td style="text-align:right">80,832</td>
<td><a href="https://github.com/mlabonne/llm-course" target="_blank" rel="noopener noreferrer">mlabonne/llm-course</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">89.75</td>
<td style="text-align:right">27,456</td>
<td><a href="https://github.com/HandsOnLLM/Hands-On-Large-Language-Models" target="_blank" rel="noopener noreferrer">HandsOnLLM/Hands-On-Large-Language-Models</a></td>
<td>纯教育/资源内容（命中 \b(book|books|ebook|handbook|guidebook)\b）</td>
</tr>
<tr>
<td style="text-align:right">89.62</td>
<td style="text-align:right">23,097</td>
<td><a href="https://github.com/serengil/deepface" target="_blank" rel="noopener noreferrer">serengil/deepface</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">89.56</td>
<td style="text-align:right">13,245</td>
<td><a href="https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep" target="_blank" rel="noopener noreferrer">wanshuiyin/Auto-claude-code-research-in-sleep</a></td>
<td>人工复核排除：README 明确称其为方法论且主体是 Markdown-only Skills，不是独立平台。</td>
</tr>
<tr>
<td style="text-align:right">89.47</td>
<td style="text-align:right">22,081</td>
<td><a href="https://github.com/FunAudioLLM/CosyVoice" target="_blank" rel="noopener noreferrer">FunAudioLLM/CosyVoice</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">89.33</td>
<td style="text-align:right">15,798</td>
<td><a href="https://github.com/ahmedkhaleel2004/gitdiagram" target="_blank" rel="noopener noreferrer">ahmedkhaleel2004/gitdiagram</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">89.24</td>
<td style="text-align:right">23,016</td>
<td><a href="https://github.com/spmallick/learnopencv" target="_blank" rel="noopener noreferrer">spmallick/learnopencv</a></td>
<td>纯教育/资源内容（命中 \blearn (opencv|machine learning|deep learning|ai)\b）</td>
</tr>
<tr>
<td style="text-align:right">89.24</td>
<td style="text-align:right">60,006</td>
<td><a href="https://github.com/CorentinJ/Real-Time-Voice-Cloning" target="_blank" rel="noopener noreferrer">CorentinJ/Real-Time-Voice-Cloning</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">89.15</td>
<td style="text-align:right">19,707</td>
<td><a href="https://github.com/stefan-jansen/machine-learning-for-trading" target="_blank" rel="noopener noreferrer">stefan-jansen/machine-learning-for-trading</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">89.13</td>
<td style="text-align:right">19,228</td>
<td><a href="https://github.com/YunaiV/yudao-cloud" target="_blank" rel="noopener noreferrer">YunaiV/yudao-cloud</a></td>
<td>人工复核排除：主体是通用企业后台、商城、CRM、ERP 等系统，AI 仅为众多可选模块之一。</td>
</tr>
<tr>
<td style="text-align:right">89.06</td>
<td style="text-align:right">14,720</td>
<td><a href="https://github.com/alibaba/zvec" target="_blank" rel="noopener noreferrer">alibaba/zvec</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">88.93</td>
<td style="text-align:right">24,310</td>
<td><a href="https://github.com/plotly/dash" target="_blank" rel="noopener noreferrer">plotly/dash</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">88.81</td>
<td style="text-align:right">21,826</td>
<td><a href="https://github.com/recommenders-team/recommenders" target="_blank" rel="noopener noreferrer">recommenders-team/recommenders</a></td>
<td>纯教育/资源内容（命中 \b(best[- ]practices?|checklists?|blogs?|blog posts?|cheat[- ]?sheets?)\b）</td>
</tr>
<tr>
<td style="text-align:right">88.65</td>
<td style="text-align:right">15,039</td>
<td><a href="https://github.com/coderamp-labs/gitingest" target="_blank" rel="noopener noreferrer">coderamp-labs/gitingest</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">88.50</td>
<td style="text-align:right">14,875</td>
<td><a href="https://github.com/wasp-lang/open-saas" target="_blank" rel="noopener noreferrer">wasp-lang/open-saas</a></td>
<td>模板或概念 Demo（命中 \b(template|boilerplate|starter kit)\b）</td>
</tr>
<tr>
<td style="text-align:right">88.50</td>
<td style="text-align:right">21,502</td>
<td><a href="https://github.com/bee-san/Ciphey" target="_blank" rel="noopener noreferrer">bee-san/Ciphey</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">88.47</td>
<td style="text-align:right">12,980</td>
<td><a href="https://github.com/supertone-inc/supertonic" target="_blank" rel="noopener noreferrer">supertone-inc/supertonic</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">88.41</td>
<td style="text-align:right">20,378</td>
<td><a href="https://github.com/cube-js/cube" target="_blank" rel="noopener noreferrer">cube-js/cube</a></td>
<td>人工复核排除：开源核心是通用 BI 语义层，AI Agent 只是可选下游消费者。</td>
</tr>
<tr>
<td style="text-align:right">88.39</td>
<td style="text-align:right">21,075</td>
<td><a href="https://github.com/Dujltqzv/Some-Many-Books" target="_blank" rel="noopener noreferrer">Dujltqzv/Some-Many-Books</a></td>
<td>纯教育/资源内容（命中 \b(book|books|ebook|handbook|guidebook)\b）</td>
</tr>
<tr>
<td style="text-align:right">88.38</td>
<td style="text-align:right">20,713</td>
<td><a href="https://github.com/EthicalML/awesome-production-machine-learning" target="_blank" rel="noopener noreferrer">EthicalML/awesome-production-machine-learning</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">88.17</td>
<td style="text-align:right">17,935</td>
<td><a href="https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models" target="_blank" rel="noopener noreferrer">BradyFU/Awesome-Multimodal-Large-Language-Models</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">88.14</td>
<td style="text-align:right">67,068</td>
<td><a href="https://github.com/labmlai/annotated_deep_learning_paper_implementations" target="_blank" rel="noopener noreferrer">labmlai/annotated_deep_learning_paper_implementations</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">88.05</td>
<td style="text-align:right">17,808</td>
<td><a href="https://github.com/pytorch/vision" target="_blank" rel="noopener noreferrer">pytorch/vision</a></td>
<td>静态数据集合，缺少可运行产品能力</td>
</tr>
<tr>
<td style="text-align:right">87.92</td>
<td style="text-align:right">13,063</td>
<td><a href="https://github.com/Arindam200/awesome-ai-apps" target="_blank" rel="noopener noreferrer">Arindam200/awesome-ai-apps</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">87.91</td>
<td style="text-align:right">28,800</td>
<td><a href="https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes" target="_blank" rel="noopener noreferrer">Ebazhanov/linkedin-skill-assessments-quizzes</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">87.88</td>
<td style="text-align:right">48,618</td>
<td><a href="https://github.com/GokuMohandas/Made-With-ML" target="_blank" rel="noopener noreferrer">GokuMohandas/Made-With-ML</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">87.80</td>
<td style="text-align:right">23,827</td>
<td><a href="https://github.com/dolthub/dolt" target="_blank" rel="noopener noreferrer">dolthub/dolt</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">87.73</td>
<td style="text-align:right">17,554</td>
<td><a href="https://github.com/apache/brpc" target="_blank" rel="noopener noreferrer">apache/brpc</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">87.48</td>
<td style="text-align:right">9,678</td>
<td><a href="https://github.com/BigBodyCobain/Shadowbroker" target="_blank" rel="noopener noreferrer">BigBodyCobain/Shadowbroker</a></td>
<td>人工复核排除：主体是通用 OSINT 聚合和可视化平台，连接 AI Agent 只是可选接口。</td>
</tr>
<tr>
<td style="text-align:right">87.44</td>
<td style="text-align:right">22,670</td>
<td><a href="https://github.com/AiHubCN/Awesome-Chinese-LLM" target="_blank" rel="noopener noreferrer">AiHubCN/Awesome-Chinese-LLM</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">87.39</td>
<td style="text-align:right">20,756</td>
<td><a href="https://github.com/qax-os/excelize" target="_blank" rel="noopener noreferrer">qax-os/excelize</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">87.21</td>
<td style="text-align:right">10,205</td>
<td><a href="https://github.com/walkinglabs/learn-harness-engineering" target="_blank" rel="noopener noreferrer">walkinglabs/learn-harness-engineering</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">87.20</td>
<td style="text-align:right">16,820</td>
<td><a href="https://github.com/argoproj/argo-workflows" target="_blank" rel="noopener noreferrer">argoproj/argo-workflows</a></td>
<td>人工复核排除：主体是通用 Kubernetes 容器工作流引擎，机器学习只是多个用例之一。</td>
</tr>
<tr>
<td style="text-align:right">87.18</td>
<td style="text-align:right">18,400</td>
<td><a href="https://github.com/meta-llama/llama-cookbook" target="_blank" rel="noopener noreferrer">meta-llama/llama-cookbook</a></td>
<td>纯教育/资源内容（命中 \b(curated collection|sample code|jupyter notebooks?|educational purposes?|cookbook|playbook)\b）</td>
</tr>
<tr>
<td style="text-align:right">87.17</td>
<td style="text-align:right">72,331</td>
<td><a href="https://github.com/binhnguyennus/awesome-scalability" target="_blank" rel="noopener noreferrer">binhnguyennus/awesome-scalability</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">87.16</td>
<td style="text-align:right">18,370</td>
<td><a href="https://github.com/stas00/ml-engineering" target="_blank" rel="noopener noreferrer">stas00/ml-engineering</a></td>
<td>纯教育/资源内容（命中 \b(book|books|ebook|handbook|guidebook)\b）</td>
</tr>
<tr>
<td style="text-align:right">87.04</td>
<td style="text-align:right">25,606</td>
<td><a href="https://github.com/ageron/handson-ml" target="_blank" rel="noopener noreferrer">ageron/handson-ml</a></td>
<td>人工复核排除：已弃用且是配套书籍的教学 Notebook、示例代码和习题答案。</td>
</tr>
<tr>
<td style="text-align:right">86.80</td>
<td style="text-align:right">14,834</td>
<td><a href="https://github.com/jujumilk3/leaked-system-prompts" target="_blank" rel="noopener noreferrer">jujumilk3/leaked-system-prompts</a></td>
<td>纯教育/资源内容（命中 \b(prompt[- ]collection|prompts?[- ]list|system[- ]prompts?)\b）</td>
</tr>
<tr>
<td style="text-align:right">86.68</td>
<td style="text-align:right">15,593</td>
<td><a href="https://github.com/apache/doris" target="_blank" rel="noopener noreferrer">apache/doris</a></td>
<td>人工复核排除：主体是通用实时分析数据库，向量混合检索只是面向 AI 的可选工作负载。</td>
</tr>
<tr>
<td style="text-align:right">86.44</td>
<td style="text-align:right">14,819</td>
<td><a href="https://github.com/ComposioHQ/awesome-codex-skills" target="_blank" rel="noopener noreferrer">ComposioHQ/awesome-codex-skills</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">86.41</td>
<td style="text-align:right">15,771</td>
<td><a href="https://github.com/kubeflow/kubeflow" target="_blank" rel="noopener noreferrer">kubeflow/kubeflow</a></td>
<td>人工复核排除：该仓库是生态入口与共享元数据索引，实际可运行组件在其他仓库，自身不是独立可运行AI产品。</td>
</tr>
<tr>
<td style="text-align:right">86.32</td>
<td style="text-align:right">13,496</td>
<td><a href="https://github.com/k2-fsa/sherpa-onnx" target="_blank" rel="noopener noreferrer">k2-fsa/sherpa-onnx</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">86.27</td>
<td style="text-align:right">15,813</td>
<td><a href="https://github.com/dagster-io/dagster" target="_blank" rel="noopener noreferrer">dagster-io/dagster</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">86.05</td>
<td style="text-align:right">25,924</td>
<td><a href="https://github.com/datawhalechina/pumpkin-book" target="_blank" rel="noopener noreferrer">datawhalechina/pumpkin-book</a></td>
<td>纯教育/资源内容（命中 \b(book|books|ebook|handbook|guidebook)\b）</td>
</tr>
<tr>
<td style="text-align:right">86.05</td>
<td style="text-align:right">14,679</td>
<td><a href="https://github.com/wdndev/llm_interview_note" target="_blank" rel="noopener noreferrer">wdndev/llm_interview_note</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">86.02</td>
<td style="text-align:right">16,995</td>
<td><a href="https://github.com/kubesphere/kubesphere" target="_blank" rel="noopener noreferrer">kubesphere/kubesphere</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">85.88</td>
<td style="text-align:right">18,021</td>
<td><a href="https://github.com/nukeop/nuclear" target="_blank" rel="noopener noreferrer">nukeop/nuclear</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">85.82</td>
<td style="text-align:right">14,161</td>
<td><a href="https://github.com/carla-simulator/carla" target="_blank" rel="noopener noreferrer">carla-simulator/carla</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">85.70</td>
<td style="text-align:right">17,353</td>
<td><a href="https://github.com/leon-ai/leon" target="_blank" rel="noopener noreferrer">leon-ai/leon</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">85.69</td>
<td style="text-align:right">12,181</td>
<td><a href="https://github.com/axolotl-ai-cloud/axolotl" target="_blank" rel="noopener noreferrer">axolotl-ai-cloud/axolotl</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">85.69</td>
<td style="text-align:right">10,570</td>
<td><a href="https://github.com/KalyanKS-NLP/llm-engineer-toolkit" target="_blank" rel="noopener noreferrer">KalyanKS-NLP/llm-engineer-toolkit</a></td>
<td>人工复核排除：LLM 库的静态分类导航集合。</td>
</tr>
<tr>
<td style="text-align:right">85.60</td>
<td style="text-align:right">16,403</td>
<td><a href="https://github.com/udecode/plate" target="_blank" rel="noopener noreferrer">udecode/plate</a></td>
<td>人工复核排除：核心是通用富文本编辑框架，AI 只是可选能力。</td>
</tr>
<tr>
<td style="text-align:right">85.53</td>
<td style="text-align:right">12,944</td>
<td><a href="https://github.com/puckeditor/puck" target="_blank" rel="noopener noreferrer">puckeditor/puck</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">85.50</td>
<td style="text-align:right">13,973</td>
<td><a href="https://github.com/mlfoundations/open_clip" target="_blank" rel="noopener noreferrer">mlfoundations/open_clip</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">85.45</td>
<td style="text-align:right">14,939</td>
<td><a href="https://github.com/DataTalksClub/mlops-zoomcamp" target="_blank" rel="noopener noreferrer">DataTalksClub/mlops-zoomcamp</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">85.45</td>
<td style="text-align:right">14,455</td>
<td><a href="https://github.com/dottxt-ai/outlines" target="_blank" rel="noopener noreferrer">dottxt-ai/outlines</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">85.42</td>
<td style="text-align:right">10,391</td>
<td><a href="https://github.com/nidhinjs/prompt-master" target="_blank" rel="noopener noreferrer">nidhinjs/prompt-master</a></td>
<td>人工复核排除：主要交付单个静态提示词 Skill。</td>
</tr>
<tr>
<td style="text-align:right">85.36</td>
<td style="text-align:right">47,035</td>
<td><a href="https://github.com/GitHubDaily/GitHubDaily" target="_blank" rel="noopener noreferrer">GitHubDaily/GitHubDaily</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">85.25</td>
<td style="text-align:right">16,972</td>
<td><a href="https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning" target="_blank" rel="noopener noreferrer">MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning</a></td>
<td>纯教育/资源内容（命中 \b(book|books|ebook|handbook|guidebook)\b）</td>
</tr>
<tr>
<td style="text-align:right">85.22</td>
<td style="text-align:right">12,431</td>
<td><a href="https://github.com/The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge" target="_blank" rel="noopener noreferrer">The-Pocket/PocketFlow-Tutorial-Codebase-Knowledge</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">85.07</td>
<td style="text-align:right">12,989</td>
<td><a href="https://github.com/doocs/md" target="_blank" rel="noopener noreferrer">doocs/md</a></td>
<td>人工复核排除：通用 Markdown 编辑器，AI 助手只是附加功能。</td>
</tr>
<tr>
<td style="text-align:right">85.07</td>
<td style="text-align:right">18,951</td>
<td><a href="https://github.com/nndl/nndl" target="_blank" rel="noopener noreferrer">nndl/nndl</a></td>
<td>人工复核排除：神经网络与深度学习教材，不是独立可产品化项目。</td>
</tr>
<tr>
<td style="text-align:right">85.04</td>
<td style="text-align:right">42,400</td>
<td><a href="https://github.com/Lordog/dive-into-llms" target="_blank" rel="noopener noreferrer">Lordog/dive-into-llms</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">84.99</td>
<td style="text-align:right">13,638</td>
<td><a href="https://github.com/DataTalksClub/machine-learning-zoomcamp" target="_blank" rel="noopener noreferrer">DataTalksClub/machine-learning-zoomcamp</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">84.94</td>
<td style="text-align:right">8,188</td>
<td><a href="https://github.com/Lightricks/LTX-2" target="_blank" rel="noopener noreferrer">Lightricks/LTX-2</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">84.85</td>
<td style="text-align:right">18,792</td>
<td><a href="https://github.com/keon/awesome-nlp" target="_blank" rel="noopener noreferrer">keon/awesome-nlp</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">84.71</td>
<td style="text-align:right">12,278</td>
<td><a href="https://github.com/steven2358/awesome-generative-ai" target="_blank" rel="noopener noreferrer">steven2358/awesome-generative-ai</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">84.64</td>
<td style="text-align:right">9,408</td>
<td><a href="https://github.com/datawhalechina/all-in-rag" target="_blank" rel="noopener noreferrer">datawhalechina/all-in-rag</a></td>
<td>人工复核排除：RAG 全栈教程与在线指南。</td>
</tr>
<tr>
<td style="text-align:right">84.62</td>
<td style="text-align:right">10,817</td>
<td><a href="https://github.com/huggingface/chat-ui" target="_blank" rel="noopener noreferrer">huggingface/chat-ui</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">84.57</td>
<td style="text-align:right">15,205</td>
<td><a href="https://github.com/owainlewis/awesome-artificial-intelligence" target="_blank" rel="noopener noreferrer">owainlewis/awesome-artificial-intelligence</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">84.52</td>
<td style="text-align:right">7,974</td>
<td><a href="https://github.com/earthtojake/text-to-cad" target="_blank" rel="noopener noreferrer">earthtojake/text-to-cad</a></td>
<td>纯教育/资源内容（命中 \b(skills collection|collection of agent skills|papers every week)\b）</td>
</tr>
<tr>
<td style="text-align:right">84.50</td>
<td style="text-align:right">19,906</td>
<td><a href="https://github.com/dailydotdev/daily" target="_blank" rel="noopener noreferrer">dailydotdev/daily</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">84.48</td>
<td style="text-align:right">9,380</td>
<td><a href="https://github.com/ConardLi/garden-skills" target="_blank" rel="noopener noreferrer">ConardLi/garden-skills</a></td>
<td>纯教育/资源内容（命中 \b(skills collection|collection of agent skills|papers every week)\b）</td>
</tr>
<tr>
<td style="text-align:right">84.48</td>
<td style="text-align:right">16,023</td>
<td><a href="https://github.com/ramitsurana/awesome-kubernetes" target="_blank" rel="noopener noreferrer">ramitsurana/awesome-kubernetes</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">84.33</td>
<td style="text-align:right">14,480</td>
<td><a href="https://github.com/optuna/optuna" target="_blank" rel="noopener noreferrer">optuna/optuna</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">84.08</td>
<td style="text-align:right">10,597</td>
<td><a href="https://github.com/Orchestra-Research/AI-Research-SKILLs" target="_blank" rel="noopener noreferrer">Orchestra-Research/AI-Research-SKILLs</a></td>
<td>人工复核排除：静态研究和工程 Skills 集合。</td>
</tr>
<tr>
<td style="text-align:right">83.96</td>
<td style="text-align:right">13,554</td>
<td><a href="https://github.com/DLR-RM/stable-baselines3" target="_blank" rel="noopener noreferrer">DLR-RM/stable-baselines3</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">83.96</td>
<td style="text-align:right">13,661</td>
<td><a href="https://github.com/ageron/handson-ml3" target="_blank" rel="noopener noreferrer">ageron/handson-ml3</a></td>
<td>纯教育/资源内容（命中 \b(curated collection|sample code|jupyter notebooks?|educational purposes?|cookbook|playbook)\b）</td>
</tr>
<tr>
<td style="text-align:right">83.93</td>
<td style="text-align:right">9,171</td>
<td><a href="https://github.com/ykdojo/claude-code-tips" target="_blank" rel="noopener noreferrer">ykdojo/claude-code-tips</a></td>
<td>人工复核排除：以技巧、说明和静态 Skills 为主的内容集合。</td>
</tr>
<tr>
<td style="text-align:right">83.88</td>
<td style="text-align:right">14,456</td>
<td><a href="https://github.com/electerm/electerm" target="_blank" rel="noopener noreferrer">electerm/electerm</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">83.87</td>
<td style="text-align:right">20,370</td>
<td><a href="https://github.com/elder-plinius/L1B3RT4S" target="_blank" rel="noopener noreferrer">elder-plinius/L1B3RT4S</a></td>
<td>人工复核排除：静态越狱提示词集合，不是评测执行平台。</td>
</tr>
<tr>
<td style="text-align:right">83.81</td>
<td style="text-align:right">17,140</td>
<td><a href="https://github.com/xx025/carrot" target="_blank" rel="noopener noreferrer">xx025/carrot</a></td>
<td>人工复核排除：AI 网站和工具导航集合。</td>
</tr>
<tr>
<td style="text-align:right">83.75</td>
<td style="text-align:right">13,206</td>
<td><a href="https://github.com/halfrost/Halfrost-Field" target="_blank" rel="noopener noreferrer">halfrost/Halfrost-Field</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">83.52</td>
<td style="text-align:right">11,589</td>
<td><a href="https://github.com/EmbraceAGI/awesome-chatgpt-zh" target="_blank" rel="noopener noreferrer">EmbraceAGI/awesome-chatgpt-zh</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">83.40</td>
<td style="text-align:right">10,974</td>
<td><a href="https://github.com/aws/amazon-sagemaker-examples" target="_blank" rel="noopener noreferrer">aws/amazon-sagemaker-examples</a></td>
<td>纯教育/资源内容（命中 \b(curated collection|sample code|jupyter notebooks?|educational purposes?|cookbook|playbook)\b）</td>
</tr>
<tr>
<td style="text-align:right">83.40</td>
<td style="text-align:right">14,668</td>
<td><a href="https://github.com/languagetool-org/languagetool" target="_blank" rel="noopener noreferrer">languagetool-org/languagetool</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">83.37</td>
<td style="text-align:right">8,459</td>
<td><a href="https://github.com/roboflow/rf-detr" target="_blank" rel="noopener noreferrer">roboflow/rf-detr</a></td>
<td>论文型仓库，未发现独立产品化定位</td>
</tr>
<tr>
<td style="text-align:right">83.34</td>
<td style="text-align:right">13,699</td>
<td><a href="https://github.com/T8RIN/ImageToolbox" target="_blank" rel="noopener noreferrer">T8RIN/ImageToolbox</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">83.32</td>
<td style="text-align:right">12,646</td>
<td><a href="https://github.com/dair-ai/AI-Papers-of-the-Week" target="_blank" rel="noopener noreferrer">dair-ai/AI-Papers-of-the-Week</a></td>
<td>纯教育/资源内容（命中 \b(skills collection|collection of agent skills|papers every week)\b）</td>
</tr>
<tr>
<td style="text-align:right">83.27</td>
<td style="text-align:right">9,913</td>
<td><a href="https://github.com/cloudflare/moltworker" target="_blank" rel="noopener noreferrer">cloudflare/moltworker</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">83.16</td>
<td style="text-align:right">6,969</td>
<td><a href="https://github.com/cobusgreyling/loop-engineering" target="_blank" rel="noopener noreferrer">cobusgreyling/loop-engineering</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">83.12</td>
<td style="text-align:right">14,669</td>
<td><a href="https://github.com/nltk/nltk" target="_blank" rel="noopener noreferrer">nltk/nltk</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">83.06</td>
<td style="text-align:right">10,674</td>
<td><a href="https://github.com/Mail-0/Zero" target="_blank" rel="noopener noreferrer">Mail-0/Zero</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">82.92</td>
<td style="text-align:right">12,297</td>
<td><a href="https://github.com/zoicware/RemoveWindowsAI" target="_blank" rel="noopener noreferrer">zoicware/RemoveWindowsAI</a></td>
<td>人工复核排除：Windows 去除 Copilot 的系统工具，不是 AI 产品。</td>
</tr>
<tr>
<td style="text-align:right">82.91</td>
<td style="text-align:right">10,186</td>
<td><a href="https://github.com/oceanbase/oceanbase" target="_blank" rel="noopener noreferrer">oceanbase/oceanbase</a></td>
<td>人工复核排除：通用分布式数据库，AI workload 只是兼容场景。</td>
</tr>
<tr>
<td style="text-align:right">82.83</td>
<td style="text-align:right">81,733</td>
<td><a href="https://github.com/fighting41love/funNLP" target="_blank" rel="noopener noreferrer">fighting41love/funNLP</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">82.82</td>
<td style="text-align:right">10,523</td>
<td><a href="https://github.com/Jeffallan/claude-skills" target="_blank" rel="noopener noreferrer">Jeffallan/claude-skills</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">82.79</td>
<td style="text-align:right">22,753</td>
<td><a href="https://github.com/amusi/CVPR2026-Papers-with-Code" target="_blank" rel="noopener noreferrer">amusi/CVPR2026-Papers-with-Code</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">82.78</td>
<td style="text-align:right">13,178</td>
<td><a href="https://github.com/nmap/nmap" target="_blank" rel="noopener noreferrer">nmap/nmap</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">82.61</td>
<td style="text-align:right">12,953</td>
<td><a href="https://github.com/PaddlePaddle/PaddleNLP" target="_blank" rel="noopener noreferrer">PaddlePaddle/PaddleNLP</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">82.61</td>
<td style="text-align:right">9,726</td>
<td><a href="https://github.com/CVHub520/X-AnyLabeling" target="_blank" rel="noopener noreferrer">CVHub520/X-AnyLabeling</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">82.58</td>
<td style="text-align:right">78,802</td>
<td><a href="https://github.com/d2l-ai/d2l-zh" target="_blank" rel="noopener noreferrer">d2l-ai/d2l-zh</a></td>
<td>人工复核排除：《动手学深度学习》教材与课程仓库。</td>
</tr>
<tr>
<td style="text-align:right">82.57</td>
<td style="text-align:right">11,634</td>
<td><a href="https://github.com/fivetran/great_expectations" target="_blank" rel="noopener noreferrer">fivetran/great_expectations</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">82.40</td>
<td style="text-align:right">26,300</td>
<td><a href="https://github.com/WZMIAOMIAO/deep-learning-for-image-processing" target="_blank" rel="noopener noreferrer">WZMIAOMIAO/deep-learning-for-image-processing</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">82.33</td>
<td style="text-align:right">7,705</td>
<td><a href="https://github.com/Azure-Samples/azure-search-openai-demo" target="_blank" rel="noopener noreferrer">Azure-Samples/azure-search-openai-demo</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">82.27</td>
<td style="text-align:right">29,612</td>
<td><a href="https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor" target="_blank" rel="noopener noreferrer">JushBJJ/Mr.-Ranedeer-AI-Tutor</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">82.23</td>
<td style="text-align:right">12,642</td>
<td><a href="https://github.com/PaddlePaddle/PaddleSpeech" target="_blank" rel="noopener noreferrer">PaddlePaddle/PaddleSpeech</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">82.22</td>
<td style="text-align:right">8,379</td>
<td><a href="https://github.com/MervinPraison/PraisonAI" target="_blank" rel="noopener noreferrer">MervinPraison/PraisonAI</a></td>
<td>模板或概念 Demo（命中 \b(template|boilerplate|starter kit)\b）</td>
</tr>
<tr>
<td style="text-align:right">82.19</td>
<td style="text-align:right">12,831</td>
<td><a href="https://github.com/alicevision/Meshroom" target="_blank" rel="noopener noreferrer">alicevision/Meshroom</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">82.15</td>
<td style="text-align:right">9,325</td>
<td><a href="https://github.com/voicepaw/so-vits-svc-fork" target="_blank" rel="noopener noreferrer">voicepaw/so-vits-svc-fork</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">82.08</td>
<td style="text-align:right">12,170</td>
<td><a href="https://github.com/colmap/colmap" target="_blank" rel="noopener noreferrer">colmap/colmap</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">82.04</td>
<td style="text-align:right">6,855</td>
<td><a href="https://github.com/AgriciDaniel/claude-ads" target="_blank" rel="noopener noreferrer">AgriciDaniel/claude-ads</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">81.89</td>
<td style="text-align:right">10,875</td>
<td><a href="https://github.com/huggingface/tokenizers" target="_blank" rel="noopener noreferrer">huggingface/tokenizers</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.86</td>
<td style="text-align:right">12,156</td>
<td><a href="https://github.com/OpenMOSS/MOSS" target="_blank" rel="noopener noreferrer">OpenMOSS/MOSS</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.83</td>
<td style="text-align:right">35,340</td>
<td><a href="https://github.com/ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code" target="_blank" rel="noopener noreferrer">ashishpatel26/500-AI-Machine-learning-Deep-learning-Computer-vision-NLP-Projects-with-code</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">81.83</td>
<td style="text-align:right">36,449</td>
<td><a href="https://github.com/hankcs/HanLP" target="_blank" rel="noopener noreferrer">hankcs/HanLP</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.82</td>
<td style="text-align:right">8,667</td>
<td><a href="https://github.com/WangRongsheng/awesome-LLM-resources" target="_blank" rel="noopener noreferrer">WangRongsheng/awesome-LLM-resources</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">81.80</td>
<td style="text-align:right">18,343</td>
<td><a href="https://github.com/mrdbourke/pytorch-deep-learning" target="_blank" rel="noopener noreferrer">mrdbourke/pytorch-deep-learning</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">81.69</td>
<td style="text-align:right">8,235</td>
<td><a href="https://github.com/FareedKhan-dev/train-llm-from-scratch" target="_blank" rel="noopener noreferrer">FareedKhan-dev/train-llm-from-scratch</a></td>
<td>纯教育/资源内容（命中 \b(from[- ]scratch|for[- ]beginners?|100[- ]days)\b）</td>
</tr>
<tr>
<td style="text-align:right">81.68</td>
<td style="text-align:right">10,698</td>
<td><a href="https://github.com/WasmEdge/WasmEdge" target="_blank" rel="noopener noreferrer">WasmEdge/WasmEdge</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.67</td>
<td style="text-align:right">11,678</td>
<td><a href="https://github.com/speechbrain/speechbrain" target="_blank" rel="noopener noreferrer">speechbrain/speechbrain</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.66</td>
<td style="text-align:right">25,179</td>
<td><a href="https://github.com/mxgmn/WaveFunctionCollapse" target="_blank" rel="noopener noreferrer">mxgmn/WaveFunctionCollapse</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.65</td>
<td style="text-align:right">9,541</td>
<td><a href="https://github.com/roboflow/notebooks" target="_blank" rel="noopener noreferrer">roboflow/notebooks</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">81.51</td>
<td style="text-align:right">37,312</td>
<td><a href="https://github.com/fengdu78/Coursera-ML-AndrewNg-Notes" target="_blank" rel="noopener noreferrer">fengdu78/Coursera-ML-AndrewNg-Notes</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">81.50</td>
<td style="text-align:right">57,479</td>
<td><a href="https://github.com/scutan90/DeepLearning-500-questions" target="_blank" rel="noopener noreferrer">scutan90/DeepLearning-500-questions</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">81.45</td>
<td style="text-align:right">10,911</td>
<td><a href="https://github.com/kedro-org/kedro" target="_blank" rel="noopener noreferrer">kedro-org/kedro</a></td>
<td>纯教育/资源内容（命中 \b(best[- ]practices?|checklists?|blogs?|blog posts?|cheat[- ]?sheets?)\b）</td>
</tr>
<tr>
<td style="text-align:right">81.44</td>
<td style="text-align:right">9,060</td>
<td><a href="https://github.com/ai-collection/ai-collection" target="_blank" rel="noopener noreferrer">ai-collection/ai-collection</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">81.39</td>
<td style="text-align:right">7,486</td>
<td><a href="https://github.com/wonderwhy-er/DesktopCommanderMCP" target="_blank" rel="noopener noreferrer">wonderwhy-er/DesktopCommanderMCP</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.37</td>
<td style="text-align:right">8,374</td>
<td><a href="https://github.com/mengxi-ream/read-frog" target="_blank" rel="noopener noreferrer">mengxi-ream/read-frog</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.34</td>
<td style="text-align:right">9,886</td>
<td><a href="https://github.com/espnet/espnet" target="_blank" rel="noopener noreferrer">espnet/espnet</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.21</td>
<td style="text-align:right">8,770</td>
<td><a href="https://github.com/fishaudio/Bert-VITS2" target="_blank" rel="noopener noreferrer">fishaudio/Bert-VITS2</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.18</td>
<td style="text-align:right">34,449</td>
<td><a href="https://github.com/TheAlgorithms/C-Plus-Plus" target="_blank" rel="noopener noreferrer">TheAlgorithms/C-Plus-Plus</a></td>
<td>纯教育/资源内容（命中 \b(curated collection|sample code|jupyter notebooks?|educational purposes?|cookbook|playbook)\b）</td>
</tr>
<tr>
<td style="text-align:right">81.11</td>
<td style="text-align:right">7,667</td>
<td><a href="https://github.com/NirDiamant/Prompt_Engineering" target="_blank" rel="noopener noreferrer">NirDiamant/Prompt_Engineering</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">81.04</td>
<td style="text-align:right">10,058</td>
<td><a href="https://github.com/NVIDIA/cutlass" target="_blank" rel="noopener noreferrer">NVIDIA/cutlass</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">81.02</td>
<td style="text-align:right">10,891</td>
<td><a href="https://github.com/voxel51/fiftyone" target="_blank" rel="noopener noreferrer">voxel51/fiftyone</a></td>
<td>静态数据集合，缺少可运行产品能力</td>
</tr>
<tr>
<td style="text-align:right">81.02</td>
<td style="text-align:right">6,514</td>
<td><a href="https://github.com/GoogleCloudPlatform/agent-starter-pack" target="_blank" rel="noopener noreferrer">GoogleCloudPlatform/agent-starter-pack</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">81.01</td>
<td style="text-align:right">8,609</td>
<td><a href="https://github.com/xberg-io/xberg" target="_blank" rel="noopener noreferrer">xberg-io/xberg</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.98</td>
<td style="text-align:right">8,304</td>
<td><a href="https://github.com/jingyaogong/minimind-v" target="_blank" rel="noopener noreferrer">jingyaogong/minimind-v</a></td>
<td>纯教育/资源内容（命中 \b(from[- ]scratch|for[- ]beginners?|100[- ]days)\b）</td>
</tr>
<tr>
<td style="text-align:right">80.98</td>
<td style="text-align:right">11,251</td>
<td><a href="https://github.com/salesforce/LAVIS" target="_blank" rel="noopener noreferrer">salesforce/LAVIS</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.96</td>
<td style="text-align:right">22,618</td>
<td><a href="https://github.com/graphdeco-inria/gaussian-splatting" target="_blank" rel="noopener noreferrer">graphdeco-inria/gaussian-splatting</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.93</td>
<td style="text-align:right">12,589</td>
<td><a href="https://github.com/thuml/Time-Series-Library" target="_blank" rel="noopener noreferrer">thuml/Time-Series-Library</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.83</td>
<td style="text-align:right">9,148</td>
<td><a href="https://github.com/pipipi-pikachu/PPTist" target="_blank" rel="noopener noreferrer">pipipi-pikachu/PPTist</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.82</td>
<td style="text-align:right">9,919</td>
<td><a href="https://github.com/OpenMined/PySyft" target="_blank" rel="noopener noreferrer">OpenMined/PySyft</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.81</td>
<td style="text-align:right">51,387</td>
<td><a href="https://github.com/Avik-Jain/100-Days-Of-ML-Code" target="_blank" rel="noopener noreferrer">Avik-Jain/100-Days-Of-ML-Code</a></td>
<td>纯教育/资源内容（命中 \b(from[- ]scratch|for[- ]beginners?|100[- ]days)\b）</td>
</tr>
<tr>
<td style="text-align:right">80.81</td>
<td style="text-align:right">6,848</td>
<td><a href="https://github.com/adongwanai/AgentGuide" target="_blank" rel="noopener noreferrer">adongwanai/AgentGuide</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">80.77</td>
<td style="text-align:right">11,994</td>
<td><a href="https://github.com/kubeshark/kubeshark" target="_blank" rel="noopener noreferrer">kubeshark/kubeshark</a></td>
<td>人工复核排除：通用 Kubernetes 网络观测工具，AI/MCP 仅为接入方式。</td>
</tr>
<tr>
<td style="text-align:right">80.73</td>
<td style="text-align:right">31,126</td>
<td><a href="https://github.com/AMAI-GmbH/AI-Expert-Roadmap" target="_blank" rel="noopener noreferrer">AMAI-GmbH/AI-Expert-Roadmap</a></td>
<td>纯教育/资源内容（命中 \b(roadmap|learning[- ]path|interview[- ]questions?)\b）</td>
</tr>
<tr>
<td style="text-align:right">80.72</td>
<td style="text-align:right">22,159</td>
<td><a href="https://github.com/microsoft/unilm" target="_blank" rel="noopener noreferrer">microsoft/unilm</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.70</td>
<td style="text-align:right">9,910</td>
<td><a href="https://github.com/roboticcam/machine-learning-notes" target="_blank" rel="noopener noreferrer">roboticcam/machine-learning-notes</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">80.49</td>
<td style="text-align:right">27,118</td>
<td><a href="https://github.com/Hannibal046/Awesome-LLM" target="_blank" rel="noopener noreferrer">Hannibal046/Awesome-LLM</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">80.47</td>
<td style="text-align:right">9,471</td>
<td><a href="https://github.com/apache/seatunnel" target="_blank" rel="noopener noreferrer">apache/seatunnel</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.45</td>
<td style="text-align:right">15,043</td>
<td><a href="https://github.com/n8n-io/self-hosted-ai-starter-kit" target="_blank" rel="noopener noreferrer">n8n-io/self-hosted-ai-starter-kit</a></td>
<td>模板或概念 Demo（命中 \b(template|boilerplate|starter kit)\b）</td>
</tr>
<tr>
<td style="text-align:right">80.38</td>
<td style="text-align:right">35,809</td>
<td><a href="https://github.com/XingangPan/DragGAN" target="_blank" rel="noopener noreferrer">XingangPan/DragGAN</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.21</td>
<td style="text-align:right">6,524</td>
<td><a href="https://github.com/vas3k/TaxHacker" target="_blank" rel="noopener noreferrer">vas3k/TaxHacker</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">80.20</td>
<td style="text-align:right">10,232</td>
<td><a href="https://github.com/niedev/RTranslator" target="_blank" rel="noopener noreferrer">niedev/RTranslator</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.18</td>
<td style="text-align:right">7,947</td>
<td><a href="https://github.com/thesysdev/openui" target="_blank" rel="noopener noreferrer">thesysdev/openui</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.18</td>
<td style="text-align:right">9,943</td>
<td><a href="https://github.com/data-privacy-stack/presidio" target="_blank" rel="noopener noreferrer">data-privacy-stack/presidio</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.15</td>
<td style="text-align:right">7,963</td>
<td><a href="https://github.com/k8sgpt-ai/k8sgpt" target="_blank" rel="noopener noreferrer">k8sgpt-ai/k8sgpt</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.12</td>
<td style="text-align:right">7,690</td>
<td><a href="https://github.com/2FastLabs/agent-squad" target="_blank" rel="noopener noreferrer">2FastLabs/agent-squad</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">80.10</td>
<td style="text-align:right">7,524</td>
<td><a href="https://github.com/Blaizzy/mlx-audio" target="_blank" rel="noopener noreferrer">Blaizzy/mlx-audio</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.04</td>
<td style="text-align:right">8,420</td>
<td><a href="https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor" target="_blank" rel="noopener noreferrer">Maciek-roboblog/Claude-Code-Usage-Monitor</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">80.00</td>
<td style="text-align:right">17,482</td>
<td><a href="https://github.com/NVlabs/instant-ngp" target="_blank" rel="noopener noreferrer">NVlabs/instant-ngp</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.99</td>
<td style="text-align:right">24,650</td>
<td><a href="https://github.com/trekhleb/homemade-machine-learning" target="_blank" rel="noopener noreferrer">trekhleb/homemade-machine-learning</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">79.87</td>
<td style="text-align:right">5,061</td>
<td><a href="https://github.com/rocketride-org/rocketride-server" target="_blank" rel="noopener noreferrer">rocketride-org/rocketride-server</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">79.86</td>
<td style="text-align:right">8,880</td>
<td><a href="https://github.com/realsenseai/librealsense" target="_blank" rel="noopener noreferrer">realsenseai/librealsense</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.86</td>
<td style="text-align:right">9,378</td>
<td><a href="https://github.com/databendlabs/databend" target="_blank" rel="noopener noreferrer">databendlabs/databend</a></td>
<td>纯教育/资源内容（命中 \b(from[- ]scratch|for[- ]beginners?|100[- ]days)\b）</td>
</tr>
<tr>
<td style="text-align:right">79.85</td>
<td style="text-align:right">8,236</td>
<td><a href="https://github.com/mikel-brostrom/boxmot" target="_blank" rel="noopener noreferrer">mikel-brostrom/boxmot</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.84</td>
<td style="text-align:right">33,556</td>
<td><a href="https://github.com/mli/paper-reading" target="_blank" rel="noopener noreferrer">mli/paper-reading</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">79.83</td>
<td style="text-align:right">10,744</td>
<td><a href="https://github.com/go-vgo/robotgo" target="_blank" rel="noopener noreferrer">go-vgo/robotgo</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.79</td>
<td style="text-align:right">8,769</td>
<td><a href="https://github.com/mage-ai/mage-ai" target="_blank" rel="noopener noreferrer">mage-ai/mage-ai</a></td>
<td>通用工具仅将 AI 作为相邻或可选能力</td>
</tr>
<tr>
<td style="text-align:right">79.75</td>
<td style="text-align:right">30,249</td>
<td><a href="https://github.com/tatsu-lab/stanford_alpaca" target="_blank" rel="noopener noreferrer">tatsu-lab/stanford_alpaca</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.67</td>
<td style="text-align:right">43,738</td>
<td><a href="https://github.com/aymericdamien/TensorFlow-Examples" target="_blank" rel="noopener noreferrer">aymericdamien/TensorFlow-Examples</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">79.58</td>
<td style="text-align:right">25,035</td>
<td><a href="https://github.com/microsoft/JARVIS" target="_blank" rel="noopener noreferrer">microsoft/JARVIS</a></td>
<td>人工复核排除：以论文、Benchmark 和研究 Demo 为主，缺少持续产品化定位。</td>
</tr>
<tr>
<td style="text-align:right">79.54</td>
<td style="text-align:right">9,712</td>
<td><a href="https://github.com/onnx/models" target="_blank" rel="noopener noreferrer">onnx/models</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.54</td>
<td style="text-align:right">7,288</td>
<td><a href="https://github.com/traceloop/openllmetry" target="_blank" rel="noopener noreferrer">traceloop/openllmetry</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">79.50</td>
<td style="text-align:right">24,397</td>
<td><a href="https://github.com/datawhalechina/llm-cookbook" target="_blank" rel="noopener noreferrer">datawhalechina/llm-cookbook</a></td>
<td>纯教育/资源内容（命中 \b(curated collection|sample code|jupyter notebooks?|educational purposes?|cookbook|playbook)\b）</td>
</tr>
<tr>
<td style="text-align:right">79.49</td>
<td style="text-align:right">24,820</td>
<td><a href="https://github.com/Max-Eee/NeoPass" target="_blank" rel="noopener noreferrer">Max-Eee/NeoPass</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.34</td>
<td style="text-align:right">10,071</td>
<td><a href="https://github.com/alexeygrigorev/data-science-interviews" target="_blank" rel="noopener noreferrer">alexeygrigorev/data-science-interviews</a></td>
<td>纯教育/资源内容（命中 \b(roadmap|learning[- ]path|interview[- ]questions?)\b）</td>
</tr>
<tr>
<td style="text-align:right">79.32</td>
<td style="text-align:right">6,392</td>
<td><a href="https://github.com/CursorTouch/Windows-MCP" target="_blank" rel="noopener noreferrer">CursorTouch/Windows-MCP</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.29</td>
<td style="text-align:right">13,447</td>
<td><a href="https://github.com/datawhalechina/llm-universe" target="_blank" rel="noopener noreferrer">datawhalechina/llm-universe</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">79.28</td>
<td style="text-align:right">5,758</td>
<td><a href="https://github.com/czlonkowski/n8n-skills" target="_blank" rel="noopener noreferrer">czlonkowski/n8n-skills</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.25</td>
<td style="text-align:right">5,520</td>
<td><a href="https://github.com/vllm-project/vllm-omni" target="_blank" rel="noopener noreferrer">vllm-project/vllm-omni</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">79.22</td>
<td style="text-align:right">22,257</td>
<td><a href="https://github.com/BuilderIO/gpt-crawler" target="_blank" rel="noopener noreferrer">BuilderIO/gpt-crawler</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">79.17</td>
<td style="text-align:right">7,918</td>
<td><a href="https://github.com/liyupi/codefather" target="_blank" rel="noopener noreferrer">liyupi/codefather</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">79.15</td>
<td style="text-align:right">17,757</td>
<td><a href="https://github.com/NLP-LOVE/ML-NLP" target="_blank" rel="noopener noreferrer">NLP-LOVE/ML-NLP</a></td>
<td>纯教育/资源内容（命中 (教程|课程|学习路线|学习资料|入门指南|面试|刷题|从零开始|最佳实践|资源合集|资料合集|论文合集|论文逐段精读|研究报告|书籍|手册|清单)）</td>
</tr>
<tr>
<td style="text-align:right">79.10</td>
<td style="text-align:right">7,875</td>
<td><a href="https://github.com/firerpa/lamda" target="_blank" rel="noopener noreferrer">firerpa/lamda</a></td>
<td>人工复核排除：核心是通用 Android 设备控制、远程桌面与逆向工程平台，AI Agent/MCP 只是接入能力。</td>
</tr>
<tr>
<td style="text-align:right">79.04</td>
<td style="text-align:right">30,237</td>
<td><a href="https://github.com/google-research/tuning_playbook" target="_blank" rel="noopener noreferrer">google-research/tuning_playbook</a></td>
<td>纯教育/资源内容（命中 \b(curated collection|sample code|jupyter notebooks?|educational purposes?|cookbook|playbook)\b）</td>
</tr>
<tr>
<td style="text-align:right">79.01</td>
<td style="text-align:right">15,158</td>
<td><a href="https://github.com/ty4z2008/Qix" target="_blank" rel="noopener noreferrer">ty4z2008/Qix</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">78.90</td>
<td style="text-align:right">11,052</td>
<td><a href="https://github.com/PointCloudLibrary/pcl" target="_blank" rel="noopener noreferrer">PointCloudLibrary/pcl</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
<tr>
<td style="text-align:right">78.90</td>
<td style="text-align:right">6,290</td>
<td><a href="https://github.com/steipete/agent-scripts" target="_blank" rel="noopener noreferrer">steipete/agent-scripts</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">78.89</td>
<td style="text-align:right">5,685</td>
<td><a href="https://github.com/deanpeters/Product-Manager-Skills" target="_blank" rel="noopener noreferrer">deanpeters/Product-Manager-Skills</a></td>
<td>缺少安装、运行、API、权重或部署等可用交付物证据</td>
</tr>
<tr>
<td style="text-align:right">78.86</td>
<td style="text-align:right">39,539</td>
<td><a href="https://github.com/floodsung/Deep-Learning-Papers-Reading-Roadmap" target="_blank" rel="noopener noreferrer">floodsung/Deep-Learning-Papers-Reading-Roadmap</a></td>
<td>纯教育/资源内容（命中 \b(roadmap|learning[- ]path|interview[- ]questions?)\b）</td>
</tr>
<tr>
<td style="text-align:right">78.85</td>
<td style="text-align:right">8,767</td>
<td><a href="https://github.com/aimacode/aima-python" target="_blank" rel="noopener noreferrer">aimacode/aima-python</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">78.84</td>
<td style="text-align:right">15,934</td>
<td><a href="https://github.com/camenduru/stable-diffusion-webui-colab" target="_blank" rel="noopener noreferrer">camenduru/stable-diffusion-webui-colab</a></td>
<td>人工复核排除：已停止维护的 Colab 启动笔记本集合，并指向替代项目。</td>
</tr>
<tr>
<td style="text-align:right">78.83</td>
<td style="text-align:right">7,309</td>
<td><a href="https://github.com/apache/hertzbeat" target="_blank" rel="noopener noreferrer">apache/hertzbeat</a></td>
<td>人工复核排除：核心交付是通用指标与日志采集、告警、状态页和基础设施监控，AI 交互与 MCP 只是新增增强能力。</td>
</tr>
<tr>
<td style="text-align:right">78.79</td>
<td style="text-align:right">5,650</td>
<td><a href="https://github.com/VoltAgent/awesome-codex-subagents" target="_blank" rel="noopener noreferrer">VoltAgent/awesome-codex-subagents</a></td>
<td>纯教育/资源内容（命中 \bawesome(?:[- ]list)?\b）</td>
</tr>
<tr>
<td style="text-align:right">78.72</td>
<td style="text-align:right">8,547</td>
<td><a href="https://github.com/alirezadir/Machine-Learning-Interviews" target="_blank" rel="noopener noreferrer">alirezadir/Machine-Learning-Interviews</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">78.66</td>
<td style="text-align:right">10,204</td>
<td><a href="https://github.com/satellite-image-deep-learning/techniques" target="_blank" rel="noopener noreferrer">satellite-image-deep-learning/techniques</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">78.59</td>
<td style="text-align:right">37,315</td>
<td><a href="https://github.com/exacity/deeplearningbook-chinese" target="_blank" rel="noopener noreferrer">exacity/deeplearningbook-chinese</a></td>
<td>纯教育/资源内容（命中 \b(book|books|ebook|handbook|guidebook)\b）</td>
</tr>
<tr>
<td style="text-align:right">78.51</td>
<td style="text-align:right">8,155</td>
<td><a href="https://github.com/poloclub/transformer-explainer" target="_blank" rel="noopener noreferrer">poloclub/transformer-explainer</a></td>
<td>课程、笔记、题库或项目集合，不是独立可产品化项目</td>
</tr>
<tr>
<td style="text-align:right">78.44</td>
<td style="text-align:right">11,672</td>
<td><a href="https://github.com/NielsRogge/Transformers-Tutorials" target="_blank" rel="noopener noreferrer">NielsRogge/Transformers-Tutorials</a></td>
<td>纯教育/资源内容（命中 \b(course|courses|tutorials?|curriculum|lessons?)\b）</td>
</tr>
<tr>
<td style="text-align:right">78.42</td>
<td style="text-align:right">9,149</td>
<td><a href="https://github.com/ccfddl/ccf-deadlines" target="_blank" rel="noopener noreferrer">ccfddl/ccf-deadlines</a></td>
<td>人工复核排除：README 显示其核心是协作维护全球学术会议截止日期，未提供 AI 模型、框架或 AI 驱动能力。</td>
</tr>
<tr>
<td style="text-align:right">78.40</td>
<td style="text-align:right">34,278</td>
<td><a href="https://github.com/CMU-Perceptual-Computing-Lab/openpose" target="_blank" rel="noopener noreferrer">CMU-Perceptual-Computing-Lab/openpose</a></td>
<td>AI 不是仓库的核心用途</td>
</tr>
</tbody>
</table></div>
<h2 id="附录-c-审计说明">附录 C：审计说明</h2>
<ul>
<li>数据文件内部校验：500 行、500 个唯一 GitHub ID、排名 1–500 连续；报告所有计数均从同一 SHA-256 快照生成。</li>
<li>Search 审计：117 个查询页，<code>incomplete_results</code> 为 0，不可继续拆分的同 Stars 1,000 条上限为 0；候选池 5641 项。</li>
<li>人工复核台账覆盖 567 个曾进入全榜或补位池的仓库；最终 500 项的 <code>human_reviewed</code> 均为真。累计人工排除 52 项、纠正类别 223 项，并保留字段级纠错记录。</li>
<li>首轮固定种子 20260711 的 50 项诊断样本：纳入 49/50、类别 49/50、目标客户 38/50、主痛点 29/50；它暴露了类别默认痛点过粗的问题，未作为通过依据。</li>
<li>第二轮固定种子 20260712 的 50 项留出样本：纳入 49/50、类别 47/50、目标客户 40/50、主痛点 27/50；仍未通过，继续纠正规则。</li>
<li>第三轮固定种子 20260713 且优先避开既往样本的 50 项留出：纳入 50/50、类别 50/50、目标客户 42/50、主痛点 32/50；资格/类别已稳定，但痛点仍不足，因此改为全量人工业务字段标注。</li>
<li>全量标注完成后，以固定种子 20260714 做跨批次复核（标注者不验自己的 rank 区间）：纳入 50/50（100%）、类别 49/50（98%）、目标客户 50/50（100%）、主痛点 49/50（98%）。验收要求类别与主痛点均不低于 90%，本快照结果为<strong>通过</strong>。</li>
<li>分类规则版本：<code>taxonomy-v1.3</code>；业务字段规则版本：<code>business-fields-v2</code>；综合热度版本：<code>heat-v1</code>；查询窗口：完整 1,000 条窗口 + 递归 Stars 闭区间。</li>
<li>报告生成时间使用快照时间，不用后续变化的实时 Stars 回填。</li>
</ul>

    </main>
  </div>
</div>
