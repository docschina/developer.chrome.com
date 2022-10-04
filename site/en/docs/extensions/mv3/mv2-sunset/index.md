<!--
 * @Author: your name
 * @Date: 2022-03-29 22:36:44
 * @LastEditTime: 2022-03-29 22:58:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mv3/mv3-fork/developer.chrome.com/site/en/docs/extensions/mv3/mv2-sunset/index.md
-->
---
<<<<<<< HEAD
layout: 'layouts/doc-post.njk'

title: Manifest V2 停止支持时间线

subhead: '了解 Manifest V2 何时停止插件扩展'

=======
title: Manifest V2 support timeline
subhead: 'Understand when Manifest V2 will stop working for extensions'
>>>>>>> 718ad683a747307028be1c26de81931d1bb0ed62
description: 'Details of the Manifest V2 phase-out and end of life.'
layout: 'layouts/doc-post.njk'
date: 2021-09-23
updated: 2022-09-28

---

随着 Manifest V3 与 Manifest V2 接近全功能对等，我们将逐步淘汰 Manifest V2。该页指定了弃用时间表并描述了过程中所有的里程碑的含义。

<figure data-size="full">
  {% Img src="image/sQ51XsLqKMgSQMCZjIN0B7hlBO02/EyB2vCZslj3VkQZZVxID.png", alt="Summary of the Manifest V2 support timeline.", width="800", height="251", class="screenshot" %}
  <figcaption>Summary of the Manifest V2 support timeline.</figcaption>
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
<<<<<<< HEAD
      <li>Chrome 应用店停止接受新的 Manifest V2 扩展，并将其设置为“公开”或“未上市”
      <li>现有 Manifest V2 扩展不能再从“私有”更改为“公开”或“未上市”</li></ul>
=======
      <li>Existing Manifest V2 extensions can no longer be changed from “Private” to "Public" or "Unlisted"</li></ul>
>>>>>>> 718ad683a747307028be1c26de81931d1bb0ed62
    </td>
    <td><i>没有变更</i>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2022 年 6 月</strong>
    </td>
    <td><ul>
<<<<<<< HEAD
      <li>Chrome 应用店停止接受新的 Manifest V2 扩展，并将其可见性设置为“私人”</li></ul>
=======
      <li>Chrome Web Store stops accepting new Manifest V2 extensions with visibility set to “Public" or "Unlisted”</li>
      </ul>
>>>>>>> 718ad683a747307028be1c26de81931d1bb0ed62
    </td>
    <td><i>没有变更</i>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2023 年 1 月</strong>
    </td>
    <td><ul>
<<<<<<< HEAD
      <li>Chrome 网上应用店停止接受对现有 Manifest V2 扩展的更新</li></ul>
    </td>
    <td><ul>
      <li>Chrome 停止运行 Manifest V2 扩展程序
      <li>企业策略可以让 Manifest V2 扩展可以在
      <a href="https://support.google.com/chrome/a/answer/9296680?hl=en">组织内</a>的Chrome部署上运行。
=======
      <li>Manifest V3 will become a prerequisite for the <a href="https://blog.google/products/chrome/find-great-extensions-new-chrome-web-store-badges/">Featured badge</a>.</li></ul>
    </td>
    <td><ul>
      <li>Enterprise policy can let Manifest V2 extensions run on Chrome deployments
      <a href="https://support.google.com/chrome/a/answer/9296680?hl=en">within an organization</a>.
      </li>
      <li>Staring in <strong>Chrome 112</strong>, Chrome may run experiments to turn off support for Manifest V2 extensions in Canary, Dev, and Beta channels.
>>>>>>> 718ad683a747307028be1c26de81931d1bb0ed62
      </li></ul>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2023 年 6 月</strong>
    </td>
<<<<<<< HEAD
    <td><i>没有变更</i>
    </td>
    <td><ul>

      <li>即使使用企业策略，Manifest V2 扩展程序也不再在 Chrome 中运行 </li></ul>
=======
    <td>
      <ul>
        <li>All existing Manifest V2 items with visibility set to Public at that time will have their visibility changed to Unlisted.</li>
      </ul>
    </td>
    <td><ul>
      <li>Starting in June in <strong>Chrome 115</strong>, Chrome may run experiments to turn off support for Manifest V2 extensions in all channels, including stable channel.</li></ul>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>January&nbsp;2024</strong>
    </td>
    <td>
      <ul>
        <li>Chrome Web Store stops accepting updates to existing Manifest V2 extensions</li>
        <li>Following the expiration of the Manifest V2 enterprise policy, the Chrome Web Store will remove all remaining Manifest V2 items from the store.</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Manifest V2 enterprise policy expires.</li>
      </ul>
>>>>>>> 718ad683a747307028be1c26de81931d1bb0ed62
    </td>
  </tr> 
</table>
