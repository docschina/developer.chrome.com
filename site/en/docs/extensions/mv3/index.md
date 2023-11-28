---
layout: 'layouts/doc-post.njk'

title: 欢迎
subhead: '了解如何开发 Chrome 扩展程序。'
seoTitle: Welcome to Chrome Extensions
description: 'Documentation for Chrome extensions developers.'
date: 2020-11-09
updated: 2023-10-18
---

<<<<<<< HEAD
本文包含指南和为想要开发 Chrome 扩展程序的开发者提供的参考文档。
=======
{% Aside %}
The Manifest V2 support timeline has been updated. See our [November 2023 blog post](/blog/resuming-the-transition-to-mv3/) and the [Manifest V2 support timeline page](/docs/extensions/mv3/mv2-sunset/) for details.
{% endAside %}

Google Chrome Extensions are applications that run inside the Chrome browser and provide additional
functionality, integration with third party websites or services, and customized browsing
experiences. These pages contain guides and reference information for developers who want to
create extensions for the Chrome browser.
>>>>>>> 84914cffd5b66f64f372abd3efd2a504ff3819be

如果你不确定从哪里开始，可以从以下文档开始：

- [Extensions 101][doc-ext-101] 包含了一些扩展程序开发的一些基础概念。
- [开发基础][doc-dev-basics] 介绍了扩展程序开发的工作流。

除此之外，你可以在这些页面中找到有用的文档链接入口：

- 分步教学的 [入门教程][gs-tuts].
- 学习范围 [扩展程序开发预览][doc-dev-overview].
- 从 [简单示例][gh-ext-samples] 中选择案例，安装并开始修改代码。

<<<<<<< HEAD
{% Aside 'warning' %}

随着 V3 版本的功能完全替代 V2，我们会在 2023 年淘汰 V2 版本。有关详细信息，请参阅 [V2 支持时间表][doc-mv2-sunset]。有关将扩展迁移到清单 V3 的说明，请参阅迁移到[Manifest V3][migrate-to-mv3]。

{% endAside %}

此外，通过访问我们的[最新页面][doc-whats-new]了解 Chrome 扩展新闻。如果您在开发问题上需要帮助，请访问我们的[帮助页面][doc-get-help]。
=======
Additionally, keep up with Chrome extensions news by visiting our [What's new page][doc-whats-new]. If you need assistance with a development problem, visit our [help page][doc-get-help]
>>>>>>> 84914cffd5b66f64f372abd3efd2a504ff3819be

感谢你成为扩展程序开发社区的一员，欢迎你！

[doc-dev-basics]: /docs/extensions/mv3/getstarted/development-basics
[doc-dev-overview]: /docs/extensions/mv3/devguide/
[doc-ext-101]: /docs/extensions/mv3/getstarted/extensions-101
[doc-mv2-sunset]: /docs/extensions/mv3/mv2-sunset
[doc-whats-new]: /docs/extensions/whatsnew
[doc-get-help]: /docs/extensions/gethelp
[gh-ext-samples]: /docs/extensions/samples/
[github-ext-doc]: https://github.com/GoogleChrome/developer.chrome.com
[gs-tuts]: /docs/extensions/mv3/getstarted/#tutorial
[migrate-to-mv3]: /docs/extensions/migrating/
[so-extension-tag]: https://stackoverflow.com/questions/tagged/google-chrome-extension
