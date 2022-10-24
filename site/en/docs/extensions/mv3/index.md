---
layout: 'layouts/doc-post.njk'
<<<<<<< HEAD

# The page title. This appears at the top of the doc and as the page name
# in Google Search.
title: 欢迎

# This appears below the title and is an optional teaser
subhead: '了解如何开发 Chrome 扩展程序。'

# This appears in the ToC of the project landing page at
# /docs/[project-name]/. It also appears in the <meta description> used in
# Google Search.
=======
title: Welcome
subhead: 'Learn about developing extensions for Chrome.'
>>>>>>> 0196ab45386697e70c620f887951eee8a90ee3a5
description: 'Documentation for Chrome extensions developers.'
date: 2020-11-09
<<<<<<< HEAD
# An optional updated date
# updated: 2020-10-16

# A list of authors. These usernames correspond to the keys in the
# _data/authorsData.json file.
---

本文包含指南和为想要开发 Chrome 扩展程序的开发者提供的参考文档。如果你不确定从哪里开始，可以从以下文档开始：

- [什么是扩展程序？](/docs/extensions/mv3/overview/) 介绍扩展程序的基础信息。
- [入门指南](/docs/extensions/mv3/getstarted/) 将从简单 `hello, world` 开始引导。
=======
updated: 2022-09-20
---

These pages contain guides and reference information for developers who want to
create extensions for the Chrome browser.

If you're not sure where to begin, have a look at the following starting pages:

- [Extensions 101][doc-ext-101] covers some basic concepts of extension development.
- [Development Basics][doc-dev-basics] introduces the extension development workflow.
>>>>>>> 0196ab45386697e70c620f887951eee8a90ee3a5

除此之外，你可以在这些页面中找到有用的文档链接入口：

<<<<<<< HEAD
- 在 [扩展程序开发概述](/docs/extensions/mv3/devguide/) 中了解文档范围。
- 从 [Github 示例项目](https://github.com/GoogleChrome/chrome-extensions-samples) 仓库选择一些拓展程序，尝试安装，并且写写看。
- 寻找常见问题 [扩展程序 FAQ 页面](/docs/extensions/mv3/faq/)。

{% Aside %}

现在 Manifest V3 已经发布，我们已经将默认文档修改为 V3 版本。如果要访问旧版 V2 内容，请看 [Manifest V2 文档](/docs/extensions/mv2)。
{% endAside %}

{% Aside 'warning' %}
随着 V3 版本的功能完全替代 V2，我们会逐步淘汰 V2 版本。 阅读 [Manifest V2 支持时间线](/docs/extensions/mv3/mv2-sunset) 获取更多信息。
=======
- Choose one of the step-by-step [getting started tutorials][gs-tuts].
- Learn the scope of things in the [Extension development overview][doc-dev-overview].
- Pick something from the [samples page][gh-ext-samples], install it, and start hacking on it.

{% Aside 'warning' %}

As Manifest V3 approaches full feature parity with V2, we will be phasing out
Manifest V2 in 2023. See [Manifest V2 support timeline][doc-mv2-sunset] for details.

>>>>>>> 0196ab45386697e70c620f887951eee8a90ee3a5
{% endAside %}

除了本站的文档，开发者还可以在社区寻找有帮助的信息：

<<<<<<< HEAD
- 谷歌小组 [Chromium extensions](https://groups.google.com/a/chromium.org/g/chromium-extensions)。
- Stack Overflow  [google-chrome extension](https://stackoverflow.com/tags/google-chrome-extension/info) 标签下的内容。

感谢你成为扩展程序开发社区的一员，欢迎你！
=======
- The [Chromium extensions][gg-extensions] Google Group.
- The Stack Overflow [google-chrome extension][so-extension-tag] tag.

Thank you for being a member of the extension developer community. We're glad you are here!

[doc-dev-basics]: /docs/extensions/mv3/getstarted/development-basics
[doc-dev-overview]: /docs/extensions/mv3/devguide/
[doc-ext-101]: /docs/extensions/mv3/getstarted/extensions-101
[doc-mv2-sunset]: /docs/extensions/mv3/mv2-sunset
[gg-extensions]: https://groups.google.com/a/chromium.org/g/chromium-extensions
[gh-ext-samples]: https://github.com/GoogleChrome/chrome-extensions-samples
[github-ext-doc]: https://github.com/GoogleChrome/developer.chrome.com
[gs-tuts]: /docs/extensions/mv3/getstarted/#tutorials
[so-extension-tag]: https://stackoverflow.com/questions/tagged/google-chrome-extension
>>>>>>> 0196ab45386697e70c620f887951eee8a90ee3a5
