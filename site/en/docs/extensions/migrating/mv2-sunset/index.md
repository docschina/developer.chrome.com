---
title: Manifest V2 支持时间线
seoTitle: 'Chrome Extensions Manifest V2 support timeline'
subhead: '理解 Manifest V2 何时停止插件扩展'
description: 'Manifest V2的淘汰和寿命结束的细节。'
layout: 'layouts/doc-post.njk'
date: 2021-09-23
updated: 2023-11-16
tags:
  - extensions-news
---

## Latest 

<<<<<<< HEAD
**2022 年 12 月 9 号：** Manifest V2 的弃用时间表正在审查中，正在推迟计划在 2023 年初进行的实验。想要了解更多信息，在 chromium-extensions Google Group 中 [阅读更新](https://groups.google.com/u/1/a/chromium.org/g/chromium-extensions/c/zQ77HkGmK9E)。
=======
### November 2023: New Chrome MV2 deprecation timeline announcement
>>>>>>> f460dfc4f20c3f710745099429ad34aaa359722c

The Manifest V2 support timeline has been updated. See our [November 2023 blog post](/blog/resuming-the-transition-to-mv3/) for details.

<<<<<<< HEAD
随着 Manifest V3 与 Manifest V2 接近全功能对等，我们将逐步淘汰 Manifest V2。该页指定了弃用时间表并描述了过程中所有的里程碑的含义。
=======
## Upcoming
>>>>>>> f460dfc4f20c3f710745099429ad34aaa359722c

### June 2024: Chrome MV2 deprecation pre-stable rollout 
We will begin disabling Manifest V2 extensions in [pre-stable versions of Chrome](/docs/web-platform/chrome-release-channels/) (Dev, Canary, and Beta) as early as **June 2024**, in Chrome 127 and later. Users impacted by the rollout will see Manifest V2 extensions automatically disabled in their browser and will no longer be able to install Manifest V2 extensions from the Chrome Web Store. Also in June 2024, Manifest V2 extensions will lose their Featured badge in the Chrome Web Store if they currently have one.

We will gradually roll out this change, gathering user feedback and collecting data to make sure Chrome users understand the change and what actions they can take to find alternative, up-to-date extensions.

<<<<<<< HEAD
随着 Manifest V2 的淘汰，可在此页面查看期间的任何更新和更具体的日期。
=======
We will communicate with developers throughout the rollout, and we will continue to closely monitor feedback during this process.
>>>>>>> f460dfc4f20c3f710745099429ad34aaa359722c

### June 2024 + 1-X months: Chrome MV2 deprecation stable rollout 

<<<<<<< HEAD
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
    <td>
      <ul>
        <li>现有 Manifest V2 扩展不能再从“私有”更改为“公开”或“未列出”</li>
        <li>Chrome Web Store 停止接受新的 Manifest V2 扩展程序将可视范围更改为“公开”或“未列出”。</li>
      </ul>
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
    <td><s><strong>2023 年 1 月</strong></s><br><a href="https://groups.google.com/u/1/a/chromium.org/g/chromium-extensions/c/zQ77HkGmK9E">推迟</a></td>
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
    <td><s><strong>2023 年 6 月</strong></s><br>审查中</td>
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
    <td><s><strong>2024 年 1 月</strong></s><br>审查中</td>
    <td>
      <ul>
        <li>Chrome Web Store 停止接受现有 Manifest V2 扩展的更新</li>
        <li>在 Manifest V2 企业策略到期后，Chrome Web Store 将从存储中删除所有剩余的 Manifest V1 项目</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Manifest V2 企业策略过期。这意味着 Chrome 将会停止运行 Manifest V2 扩展程序，即便使用 <code>ExtensionInstallForcelist</code>。</li>
      </ul>
    </td>
  </tr>
</table>
=======
We expect it will take at least a month to observe and stabilize the changes in pre-stable before expanding the rollout to stable channel Chrome where it will also gradually roll out over time. The exact timing may vary depending on the data collected, and during this time, we will keep you informed about our progress.

### June 2025: Chrome MV2 deprecation enterprise rollout

Enterprises using the [ExtensionManifestV2Availability](https://chromeenterprise.google/policies/#ExtensionManifestV2Availability) policy to ensure the continued functioning of Manifest V2 extensions in their organization will have one additional year - until June 2025 - to migrate the Manifest V2 extensions in their organization. Browsers with the policy enabled will not be impacted by the rollout of the deprecation until that time.

## Past

### June 2022: Chrome Web Store -  no new private extensions

Chrome Web Store stopped accepting new Manifest V2 extensions with visibility set to "Private".

### January 2022: Chrome Web Store - no new public / unlisted extensions

Chrome Web Store stopped accepting new Manifest V2 extensions with visibility set
to "Public" or "Unlisted". The ability to change Manifest V2 extensions from "Private" to "Public"
or "Unlisted" was removed.
>>>>>>> f460dfc4f20c3f710745099429ad34aaa359722c

