---
layout: 'layouts/doc-post.njk'
title: Welcome to Manifest V3
subhead: 'A step in the direction of security, privacy, and performance.'
description: 'An introduction to Manifest V3'
date: 2020-11-09
updated: 2022-09-28
---

本站介绍了 Manifest V3，也就是 Manifest Version 3，它是 Chrome 扩展程序平台的最新迭代版本。本文介绍引入 Manifest V3 的背景和原因，平台未来的愿景，以及如何迁移历史版本相关的资源。

<<<<<<< HEAD
## 什么是 manifest？

扩展程序中的 [manifest][doc-manifest] 为浏览器提供有关扩展程序的信息，例如最重要的文件，扩展可能使用的功能。当有新的 [manifest 版本][manifest-version] 时，扩展程序平台功能会发生变化。

Manifest V3 代表了扩展程序平台自十年前推出以来最重要的版本之一。Manifest V3 扩展程序在安全性、隐私性和性能方面都得到了增强。他们还可以使用更现代的开放 Web 技术，例如 service workers 和 promises。

## Manifest V3 资源

Manifest V3 是用户安全和隐私背后的理念转变的部分体现。下文展示了 Manifest V3 概述、它出现的原因以及如何掌握它：
=======
## What is a manifest? {: #what-is-a-manifest }

An extension [manifest][doc-manifest] gives the browser information about the extension, such as the most important files and the capabilities the extension might use. The extension platform features change when there's a new [manifest version][manifest-version].

## Introducing Manifest V3 {: #introducing-manifest-v3 }

Manifest V3 represents one of the most significant shifts in the extensions platform since it launched a decade ago. Manifest V3 extensions enjoy enhancements in security, privacy, and performance; they can also use more contemporary open web technologies such as service workers and promises.

## Manifest V3 resources {: #manifest-v3-resources }
>>>>>>> ef46655803c914232b2a541704fad656e8ab5367

[平台愿景][mv3-platform]：解释了 Manifest V3 变化如何应对未来 web 平台发展。

[Manifest V3 概览][mv3-overview]：总结 Manifest V3 引入的技术变化。

[迁移指南][mv3-migration]： 告诉你如何将 Manifest V2 扩展程序升级到 Manifest V3。

[迁移检查事项][mv3-checklist]： 提供快速清单，以帮助使扩展适应 Manifest V3。

## 开始转换

<<<<<<< HEAD
自 2022 年 1 月 17 日起，Chrome 网上应用店已停止接受新的 Manifest V2 扩展程序。我们强烈建议尽快将扩展迁移到 Manifest V3。在 2023 年 [Manifest V2 逐步淘汰][mv2-sunset] 之后成为强制性的要求。

## 紧跟最新消息
=======
## Start the conversion {: #start-the-conversion }

As of January 17, 2022 the Chrome Web Store has stopped accepting new Manifest V2 extensions. We strongly recommend migrating your extensions to Manifest V3 as soon as possible; this will become mandatory after [Manifest V2 is phased out][mv2-sunset] in 2024.

## Keep up with the latest news {: #keep-up-with-the-latest-news }
>>>>>>> ef46655803c914232b2a541704fad656e8ab5367

We're excited about the improvements that Manifest V3 brings to the platform. Look for new announcements in [What's new in Chrome Extensions][doc-new] and the [Chrome Developer Blog][devs-blog].

我们对 Manifest V3 给插件平台带来的改进激动不已。可以阅读 [Chrome 拓展程序新变化][doc-new] 和 [Chrome Developer Blog][devs-blog] 查看更多内容。

[devs-blog]: https://developer.chrome.com/tags/extensions/
[doc-manifest]: /docs/extensions/mv3/manifest/
[doc-new]: /docs/extensions/whatsnew/
[manifest-version]: /docs/extensions/mv3/manifest/manifest_version/
[mv2-sunset]: /docs/extensions/mv3/mv2-sunset/
[mv3-checklist]: /docs/extensions/mv3/mv3-migration-checklist/
[mv3-migration]: /docs/extensions/mv3/intro/mv3-migration/
[mv3-overview]: /docs/extensions/mv3/intro/mv3-overview/
[mv3-platform]: /docs/extensions/mv3/intro/platform-vision/
