---
<<<<<<< HEAD
title: Manifest V2 停止支持的时间线
subhead: '解 Manifest V2 何时停止插件扩展'
description: 'Manifest V2的淘汰和寿命结束的细节。'
layout: 'layouts/doc-post.njk'
date: 2021-09-23
updated: 2022-09-28
---

随着 Manifest V3 与 Manifest V2 接近全功能对等，我们将逐步淘汰 Manifest V2。该页指定了弃用时间表并描述了过程中所有的里程碑的含义。

<figure data-size="full">
  {% Img src="image/sQ51XsLqKMgSQMCZjIN0B7hlBO02/OfabxpaX9YMUoyBWJWMX.png", alt="Manifest V2 支持时间表的摘要。", width="800", height="244", class="screenshot" %}
  <figcaption>Manifest V2 支持时间表的摘要。</figcaption>
</figure>

{% Aside %}
随着 Manifest V2 的淘汰，可在此页面查看期间的任何更新和更具体的日期。
=======
title: Manifest V2 support timeline
seoTitle: "Chrome Extensions Manifest V2 support timeline"
subhead: 'Understand when Manifest V2 will stop working for extensions'
description: 'Details of the Manifest V2 phase-out and end of life.'
layout: 'layouts/doc-post.njk'
date: 2021-09-23
updated: 2022-12-13
---

{% Aside %}

**December 9, 2022:** The Manifest V2 deprecation timelines are under review and the experiments scheduled for early 2023 are being postponed. For more information, [read the update](https://groups.google.com/u/1/a/chromium.org/g/chromium-extensions/c/zQ77HkGmK9E) in the chromium-extensions Google Group.

{% endAside %}

As Manifest V3 approaches full feature parity with Manifest V2, we'll be progressively phasing out Manifest V2. This page specifies the timetable for this deprecation and describes the meaning of each milestone.

<figure data-size="full">
  {% Img src="image/WlD8wC6g8khYWPJUsQceQkhXSlv1/txfDeyLhratHCO1P3wvc.jpg", alt="Summary of the Manifest V2 support timeline.", width="800", height="263", class="screenshot" %}
  <figcaption>Summary of the Manifest V2 support timeline.</figcaption>
</figure>

{% Aside %}

Check this page for any updates and for more specific dates as these milestones get closer.

>>>>>>> e186b6fa30f3d6cbd2b43268df586d1518244804
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
<<<<<<< HEAD
    <td><strong>2022 年 1 月 17日</strong>
    </td>
    <td><ul>
     <li>现有 Manifest V2 扩展不能再从“私有”更改为“公开”或“未列出”</li></ul>
=======
    <td><strong>January&nbsp;17,&nbsp;2022</strong>
    </td>
    <td>
      <ul>
        <li>Existing Manifest V2 extensions can no longer be changed from "Private" to "Public" or "Unlisted".</li>
        <li>Chrome Web Store stops accepting new Manifest V2 extensions with visibility set to "Public" or "Unlisted".</li>
      </ul>
>>>>>>> e186b6fa30f3d6cbd2b43268df586d1518244804
    </td>
    <td><i>没有变更</i>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2022 年 6 月</strong>
    </td>
    <td><ul>
<<<<<<< HEAD
      <li>Chrome Web Store 停止接受新的 Manifest V2 扩展程序将可见范围设置为“公开”或者“未列出”</li>
=======
      <li>Chrome Web Store stops accepting new Manifest V2 extensions with visibility set to "Private".</li>
>>>>>>> e186b6fa30f3d6cbd2b43268df586d1518244804
      </ul>
    </td>
    <td><i>没有变更</i>
    </td>
  </tr>
  <tr align="left" valign="top">
<<<<<<< HEAD
    <td><strong>2023 年 1 月</strong>
    </td>
=======
    <td><s><strong>January&nbsp;2023</strong></s><br><a href="https://groups.google.com/u/1/a/chromium.org/g/chromium-extensions/c/zQ77HkGmK9E">Postponed</a></td>
>>>>>>> e186b6fa30f3d6cbd2b43268df586d1518244804
    <td><ul>
      <li>Manifest V3 将会称为 <a href="https://blog.google/products/chrome/find-great-extensions-new-chrome-web-store-badges/">特色徽章</a> 的先决条件。</li></ul>
    </td>
    <td><ul>
      <li>企业策略可以让 Manifest V2 扩展可以在
      <a href="https://support.google.com/chrome/a/answer/9296680?hl=en">组织内</a>的Chrome部署上运行。
      </li>
<<<<<<< HEAD
      <li>从 <strong>Chrome 112</strong> 开始， Chrome 可能会运行一些实验来关闭对 Canary、Dev 和 Beta 频道中Manifest V2 扩展的支持。
=======
      <li>Chrome may run experiments to turn off support for Manifest V2 extensions in Canary, Dev, and Beta channels.
>>>>>>> e186b6fa30f3d6cbd2b43268df586d1518244804
      </li></ul>
    </td>
  </tr>
  <tr align="left" valign="top">
<<<<<<< HEAD
    <td><strong>2023 年 6 月</strong>
    </td>
=======
    <td><s><strong>June&nbsp;2023</strong></s><br>Under review</td>
>>>>>>> e186b6fa30f3d6cbd2b43268df586d1518244804
    <td>
      <ul>
        <li>此时，可见性设置为“公共”的所有现有 Manifest V2 项目的可见性将更改为“未列出”。</li>
      </ul>
    </td>
    <td><ul>
<<<<<<< HEAD
      <li>从 6 月份开始 <strong>Chrome 115</strong> 可能会在所有频道（包括稳定 stable 频道）关闭对 Manifest V2 扩展程序的支持。</li></ul>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2024 年 1 月</strong>
    </td>
=======
      <li>Chrome may run experiments to turn off support for Manifest V2 extensions in all channels, including stable channel.</li></ul>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><s><strong>January&nbsp;2024</strong></s><br>Under review</td>
>>>>>>> e186b6fa30f3d6cbd2b43268df586d1518244804
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
>>>>>>> e186b6fa30f3d6cbd2b43268df586d1518244804
      </ul>
    </td>
  </tr>
</table>

[dec-2022-update]: #TODO
