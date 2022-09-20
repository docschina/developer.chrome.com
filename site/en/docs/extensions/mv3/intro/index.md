---
layout: 'layouts/doc-post.njk'
<<<<<<< HEAD

# The page title. This appears at the top of the doc and as the page name
# in Google Search.
title: 欢迎来到 Manifest V3

# This appears below the title and is an optional teaser
subhead: '迈向安全、私密、高性能的一步'

# This appears in the ToC of the project landing page at
# /docs/[project-name]/. It also appears in the <meta description> used in
# Google Search.
description: 'Manifest V3 介绍'

# The publish date
date: 2020-11-09
# An optional updated date
# updated: 2020-10-16

# A list of authors. These usernames correspond to the keys in the
# _data/authorsData.json file.
---

本站将介绍 Chrome 扩展程序中的 Manifest V3 出现的背景和原因，以及我们对平台的未来愿景，同时引导大家通过使用 Manifest V3 开发出最棒的扩展程序。

Manifest V3 是自扩展程序十年前发布以来改动最大的版本之一。Manifest V3 更注重扩展程序的安全、隐私和性能，还支持了更现代的 Web 技术，例如 service workers 和 promises。开发者可以主动升级到 Manifest V3 扩展程序享受这些新特性，也可能在未来 Manifest V2 弃用时强制升级。

Manifest V3 是我们在“如何处理终端用户安全和隐私”背后的理念转变的部分体现。下文展示了 Manifest V3 概述、它出现的原因以及如何掌握它：
=======
title: Welcome to Manifest V3
subhead: 'A step in the direction of security, privacy, and performance.'
description: 'An introduction to Manifest V3'
date: 2020-11-09
updated: 2022-09-02
---

This site introduces Manifest V3, short for Manifest Version 3, which is the latest iteration of the Chrome extension platform. It shares the background and reasons for introducing Manifest V3 and the vision for the platform's future, along with resources on how to migrate.

## What is a manifest?

An extension [manifest][doc-manifest] gives the browser information about the extension, such as
the most important files and the capabilities the extension might use. The extension platform features change when there's a new [manifest version][manifest-version].

## Introducing Manifest V3 

Manifest V3 represents one of the most significant shifts in the extensions platform since it
launched a decade ago. Manifest V3 extensions enjoy enhancements in security, privacy, and
performance; they can also use more contemporary open web technologies such as service workers and
promises. 

## Manifest V3 resources

Manifest V3 is part of a shift in the philosophy behind user security and privacy. The following articles provide an overview of Manifest V3, the reasons behind it, and how to
approach it:

[Platform vision][mv3-platform]
: Explains how the Manifest V3 changes fit into the big picture of where the platform is going.

[Overview of Manifest V3][mv3-overview]
: Summarizes the technical changes introduced with Manifest V3.

[Migration guide][mv3-migration]
: Describes how to get started updating Manifest V2 extensions so they work in Manifest V3.

[Migration checklist][mv3-checklist]
: Provides a quick checklist to help adapt your extension to Manifest V3.

## Start the conversion

As of January 17, 2022 the Chrome Web Store has stopped accepting new Manifest V2 extensions. We strongly recommend migrating your extensions to Manifest V3 as soon as possible; this will become mandatory after [Manifest V2 is phased out][mv2-sunset] in 2023.

## Keep up with the latest news

We're excited about the improvements that Manifest V3 brings to the platform. Look for new
announcements in [What's new in Chrome Extensions][doc-new] and the [Chrome Developer
Blog][devs-blog].
>>>>>>> 0f56b23b387092a5d555648d3316ab4adb0200a9

- [平台愿景](platform-vision) 解释了 Manifest V3 变化如何应对未来 web 平台发展。
- [Manifest V3 概览](mv3-overview) 总结 Manifest V3 引入的技术变化。
- [迁移指南](mv3-migration) 告诉你如何将 Manifest V2 插件升级到 Manifest V3。

<<<<<<< HEAD
我们对 Manifest V3 给插件平台带来的改进激动不已。可以查看 [Chromium 博客](https://blog.chromium.org/) 和 [Chromium 扩展程序论坛](https://groups.google.com/a/chromium.org/g/chromium-extensions) 查看更多公告。
=======
[devs-blog]: https://developer.chrome.com/tags/extensions/
[doc-manifest]: /docs/extensions/mv3/manifest/
[doc-new]: /docs/extensions/whatsnew/
[manifest-version]: /docs/extensions/mv3/manifest/manifest_version/
[mv2-sunset]: /docs/extensions/mv3/mv2-sunset/
[mv3-checklist]: /docs/extensions/mv3/mv3-migration-checklist/
[mv3-migration]: /docs/extensions/mv3/intro/mv3-migration/
[mv3-overview]: /docs/extensions/mv3/intro/mv3-overview/
[mv3-platform]: /docs/extensions/mv3/intro/platform-vision/
>>>>>>> 0f56b23b387092a5d555648d3316ab4adb0200a9
