<!--
 * @Author: your name
 * @Date: 2022-03-29 22:36:44
 * @LastEditTime: 2022-03-29 22:58:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mv3/mv3-fork/developer.chrome.com/site/en/docs/extensions/mv3/mv2-sunset/index.md
-->
---
layout: 'layouts/doc-post.njk'

title: Manifest V2 停止支持时间线

subhead: '了解 Manifest V2 何时停止插件扩展'

description: 'Details of the Manifest V2 phase-out and end of life.'

date: 2021-09-23

---

随着 Manifest V3 与 Manifest V2 接近全功能对等，我们将逐步淘汰 Manifest V2。该页指定了弃用时间表并描述了过程中所有的里程碑的含义。

{% Img src="image/SHhb2PDKzXTggPGAYpv8JgR81pX2/zXdU3hdkj1K0Ks6tAfB4.png",
  alt="Diagram of Manifest V2 support timeline", width="800", height="270" %}

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
      <li>Chrome 应用店停止接受新的 Manifest V2 扩展，并将其设置为“公开”或“未上市”
      <li>现有 Manifest V2 扩展不能再从“私有”更改为“公开”或“未上市”</li></ul>
    </td>
    <td><i>没有变更</i>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2022 年 6 月</strong>
    </td>
    <td><ul>
      <li>Chrome 应用店停止接受新的 Manifest V2 扩展，并将其可见性设置为“私人”</li></ul>
    </td>
    <td><i>没有变更</i>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2023 年 1 月</strong>
    </td>
    <td><ul>
      <li>Chrome 网上应用店停止接受对现有 Manifest V2 扩展的更新</li></ul>
    </td>
    <td><ul>
      <li>Chrome 停止运行 Manifest V2 扩展程序
      <li>企业策略可以让 Manifest V2 扩展可以在
      <a href="https://support.google.com/chrome/a/answer/9296680?hl=en">组织内</a>的Chrome部署上运行。
      </li></ul>
    </td>
  </tr>
  <tr align="left" valign="top">
    <td><strong>2023 年 6 月</strong>
    </td>
    <td><i>没有变更</i>
    </td>
    <td><ul>

      <li>即使使用企业策略，Manifest V2 扩展程序也不再在 Chrome 中运行 </li></ul>
    </td>
  </tr> 
</table>
