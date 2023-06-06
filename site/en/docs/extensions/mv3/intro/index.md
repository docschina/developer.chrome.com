---
layout: 'layouts/doc-post.njk'
title: 欢迎了解 Manifest V3
subhead: '向安全、隐私和性能的方向迈出一步。'
description: '介绍 Manifest V3'
seoTitle: Welcome to the Chrome Extension Manifest V3
date: 2020-11-09
updated: 2022-09-28
---

<<<<<<< HEAD
本站介绍了 Manifest V3，也就是 Manifest Version 3，它是 Chrome 扩展程序平台的最新迭代版本。本文介绍引入 Manifest V3 的背景和原因，平台未来的愿景，以及如何迁移历史版本相关的资源。
=======
{% Partial 'extensions/mv3-support.md' %}

This site introduces Manifest V3, short for Manifest Version 3, which is the latest iteration of the Chrome extension platform. It shares the background and reasons for introducing Manifest V3 and the vision for the platform's future, along with resources on how to migrate.
>>>>>>> 6b02638e58a6e66bf7b2053a1f2769eb07cee8f4

## 什么是 manifest？ {: #what-is-a-manifest }

扩展程序中的 [manifest][doc-manifest] 为浏览器提供有关扩展程序的信息，例如最重要的文件，扩展可能使用的功能。当有新的 [manifest 版本][manifest-version] 时，扩展程序平台功能会发生变化。

## 介绍 Manifest V3 {: #introducing-manifest-v3 }

Manifest V3 代表了扩展程序平台自十年前推出以来最重要的版本之一。Manifest V3 扩展程序在安全性、隐私性和性能方面都得到了增强。他们还可以使用更现代的开放 Web 技术，例如 service workers 和 promises。

## Manifest V3 资源 {: #manifest-v3-resources }

[平台愿景][mv3-platform]：解释了 Manifest V3 变化如何应对未来 web 平台发展。

[Manifest V3 概览][mv3-overview]：总结 Manifest V3 引入的技术变化。

[迁移指南][mv3-migration]： 告诉你如何将 Manifest V2 扩展程序升级到 Manifest V3。

[迁移检查事项][mv3-checklist]： 提供快速清单，以帮助使扩展适应 Manifest V3。

## 开始切换版本 {: #start-the-conversion }

自 2022 年 1 月 17 日起，Chrome Web Store 已停止接受新的 Manifest V2 扩展程序。我们强烈建议尽快将扩展迁移到 Manifest V3。在 2024 年 [Manifest V2 被淘汰][mv2-sunset] 之后会变为强制性的要求。

## 紧跟最新消息 {: #keep-up-with-the-latest-news }

我们对 Manifest V3 给插件平台带来的改进激动不已。可以阅读 [Chrome 拓展程序新变化][doc-new] 和 [Chrome Developer Blog][devs-blog] 查看更多内容。

[devs-blog]: https://developer.chrome.com/tags/extensions/
[doc-manifest]: /docs/extensions/mv3/manifest/
[doc-new]: /docs/extensions/whatsnew/
[manifest-version]: /docs/extensions/mv3/manifest/manifest_version/
[mv2-sunset]: /docs/extensions/mv3/mv2-sunset/
[mv3-checklist]: /docs/extensions/migrating/checklist/
[mv3-migration]: /docs/extensions/migrating/
[mv3-overview]: /docs/extensions/mv3/intro/mv3-overview/
[mv3-platform]: /docs/extensions/mv3/intro/platform-vision/
