---
title: Manifest V2 停止支持的时间线
subhead: '解 Manifest V2 何时停止插件扩展'
description: 'Manifest V2的淘汰和寿命结束的细节。'
layout: 'layouts/doc-post.njk'
date: 2021-09-23
<<<<<<< HEAD
updated: 2022-09-28
=======
updated: 2022-11-30

>>>>>>> 1a97391c6e7fb037ef4d8d0d6e2b0a40606a9e72
---

随着 Manifest V3 与 Manifest V2 接近全功能对等，我们将逐步淘汰 Manifest V2。该页指定了弃用时间表并描述了过程中所有的里程碑的含义。

<figure data-size="full">
  {% Img src="image/sQ51XsLqKMgSQMCZjIN0B7hlBO02/OfabxpaX9YMUoyBWJWMX.png", alt="Manifest V2 支持时间表的摘要。", width="800", height="244", class="screenshot" %}
  <figcaption>Manifest V2 支持时间表的摘要。</figcaption>
</figure>

{% Aside %}
随着 Manifest V2 的淘汰，可在此页面查看期间的任何更新和更具体的日期。
{% endAside %}

<table>
  <tr align="left" valign="top">
    <td>
    </td>
    <td><strong>Chrome 应用商店<br>行为变更</strong>
    </td>
    <td><strong>Chrome 浏览器<br>行为变更</strong>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2022 年 1 月 17日</strong>
    </td>
    <td><ul>
     <li>现有 Manifest V2 扩展不能再从“私有”更改为“公开”或“未列出”</li></ul>
    </td>
    <td><i>没有变更</i>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2022 年 6 月</strong>
    </td>
    <td><ul>
      <li>Chrome Web Store 停止接受新的 Manifest V2 扩展程序将可见范围设置为“公开”或者“未列出”</li>
      </ul>
    </td>
    <td><i>没有变更</i>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2023 年 1 月</strong>
    </td>
    <td><ul>
      <li>Manifest V3 将会称为 <a href="https://blog.google/products/chrome/find-great-extensions-new-chrome-web-store-badges/">特色徽章</a> 的先决条件。</li></ul>
    </td>
    <td><ul>
      <li>企业策略可以让 Manifest V2 扩展可以在
      <a href="https://support.google.com/chrome/a/answer/9296680?hl=en">组织内</a>的Chrome部署上运行。
      </li>
      <li>从 <strong>Chrome 112</strong> 开始， Chrome 可能会运行一些实验来关闭对 Canary、Dev 和 Beta 频道中Manifest V2 扩展的支持。
      </li></ul>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2023 年 6 月</strong>
    </td>
    <td>
      <ul>
        <li>此时，可见性设置为“公共”的所有现有 Manifest V2 项目的可见性将更改为“未列出”。</li>
      </ul>
    </td>
    <td><ul>
      <li>从 6 月份开始 <strong>Chrome 115</strong> 可能会在所有频道（包括稳定 stable 频道）关闭对 Manifest V2 扩展程序的支持。</li></ul>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2024 年 1 月</strong>
    </td>
    <td>
      <ul>
        <li>Chrome Web Store 停止接受现有 Manifest V2 扩展的更新</li>
        <li>在 Manifest V2 企业策略到期后，Chrome Web Store 将从存储中删除所有剩余的 Manifest V1 项目</li>
      </ul>
    </td>
    <td>
      <ul>
<<<<<<< HEAD
        <li>Manifest V2 企业策略过期</li>
=======
        <li>Manifest V2 enterprise policy expires. This means Chrome will stop running Manifest V2 extensions, even ones installed using <code>ExtensionInstallForcelist</code>.</li>
>>>>>>> 1a97391c6e7fb037ef4d8d0d6e2b0a40606a9e72
      </ul>
    </td>
  </tr>
</table>
