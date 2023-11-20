---
layout: 'layouts/doc-post.njk'
title: '常见问题'
seoTitle: 'Chrome Extensions: Frequently asked questions'
date: 2014-02-28
<<<<<<< HEAD
updated: 2020-11-20
description: 有关 Chrome 扩展程序的常见问题。
=======
updated: 2023-09-12
description: Frequently asked questions about Chrome Extensions.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5
---

如果您在此处找不到问题的答案，请尝试 [Chrome 网上应用店常见问题解答][1]，[Stack Overflow 上的 \[google-chrome-extension\] 标签][2]、[chromium-extensions 组][3] 或 [商店帮助][4]。

## 概要 {: #general }

### 什么是 Google Chrome 扩展程序？{: #faq-gen-01 }

Google Chrome 扩展程序是在 Chrome 浏览器中运行并提供附加功能、与第三方网站或服务集成以及自定义浏览体验的应用程序。

### 如何设置 Chrome 以进行扩展开发？{: #faq-dev-01 }

只要您使用的是支持扩展的 Chrome 版本，您就已经拥有了开始编写自己的扩展所需的一切。您可以从打开开发人员模式开始。

单击 Chrome 菜单图标，然后从 **Tools** 菜单中选择 **Extensions**，然后确保选中右上角的“开发者模式”复选框。现在您可以重新加载扩展程序，以及像加载打包后的扩展程序一样加载未打包的文件目录，等等。有关完整的说明，请参阅 [入门教程][32]。

### 哪些技术用于为 Chrome 编写扩展程序？{: #faq-gen-02 }

开发人员可以使用创建网站的相同标准 Web 技术编写扩展程序。如 HTML 用作内容标记语言，CSS 用于样式，JavaScript 用于脚本。由于 Chrome 支持 HTML5 和 CSS3，开发人员可以在其扩展中使用最新的开放式 Web 技术，例如 Canvas 和 CSS 动画。扩展程序可以访问多个 [JavaScript API][33]，这些 API 有助于执行 JSON 编码和与浏览器交互等功能。

### 每次加载浏览器时都会从网络上获取扩展程序吗？{: #faq-gen-03 }

<<<<<<< HEAD
扩展程序在安装时由 Chrome 浏览器下载，随后在本地磁盘运行以提高性能。但是，如果已安装的扩展程序在线推送了新版本，那么所有安装了该扩展程序的用户都将在后台自动下。扩展程序还可以随时请求远程内容，以便与 Web 服务交互或从 Web 中提取新内容。
=======
Extensions are downloaded by the Chrome browser upon install, and are subsequently run off of
local disk to speed up performance. However, if a new version of the extension is uploaded to
the Chrome Web Store, it will be automatically downloaded in the background for any users who have
the extension installed. Extensions may also make requests for remote data at any time, but not
remotely-hosted code.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

### 如何确定哪个版本的 Chrome 部署到哪个频道？{: #faq-dev-14 }

<<<<<<< HEAD
如果想要确定当前在每个不同平台上可用的 Chrome 版本，可以访问 [omahaproxy.appspot.com][34]。在该网站，您将看到类似于以下格式的数据：

```text
cf,dev,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
cf,beta,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
cf,stable,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
linux,dev,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
linux,beta,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
linux,stable,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
mac,dev,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
mac,beta,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
mac,stable,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
win,canary,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
win,dev,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
win,beta,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
win,stable,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
cros,dev,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
cros,beta,#.#.###.#,#.#.###.#,mm/dd/yy,mm/dd/yy,#####,#####,#####
```

每一行代表有关不同平台和渠道组合的信息。
=======
To determine which version of Chrome is currently available on each of the different platforms,
visit [chrome releases][34], which lists the current Chrome releases for each channel and platform.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

列出的平台包含 `cf`（Google Chrome 框架）、`linux`、`mac`、`win` 和 `cros`（Google ChromeOS）。列出的频道包含 “canary”、“dev”、“beta”和“stable”。频道后面的两个四部分数字表示部署到该“平台-通道组合”的当前和以前版本的 Chrome。其余信息是有关首次推送发布时间的元数据，以及与每个构建相关的修订号。

<<<<<<< HEAD
## 扩展程序的能力{: #capabilities2 }

### 扩展程序可以发出跨域 Ajax 请求吗？{: #faq-dev-02 }
=======
### Can extensions make cross-origin network requests? {: #faq-dev-02 }

Yes. Extensions can make cross-origin network requests. See [this page][35] for more information.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

扩展程序可以发出跨域请求。如果你想了解更多有关信息，请参阅 [本页][35]。

<<<<<<< HEAD
### 扩展程序可以使用第三方 Web 服务吗？{: #faq-dev-03 }
=======
Yes. Extensions are capable of making cross-origin network requests, so they can call remote APIs
directly. APIs that provide data in JSON format are particularly easy to use.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

由于扩展程序可以发出跨域 Ajax 请求，因此它们可以直接调用远程 API。而以 JSON 格式提供数据的 API 特别易于使用。

<<<<<<< HEAD
### 扩展程序可以编码/解码 JSON 数据吗？{: #faq-dev-07 }
=======
Yes. Chrome's JavaScript engine, called "V8", has built-in support for
[JSON.stringify][stringify] and [JSON.parse][parse] so you can use these
functions in your extensions without including JSON libraries in
your code.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

可以，Chrome V8 这样的现代 JavaScript 引擎内置了对 [JSON.stringify][stringify] 和 [JSON.parse][parse] 的支持，因此您可以在扩展程序中使用这些函数，而无需在代码中包含 JSON 库。

<<<<<<< HEAD
### 扩展程序可以在本地存储数据吗？{: #faq-dev-08 }
=======
Yes. Extensions provide a [storage API][63] designed specifically for extensions. An extension service worker can als0 use [CacheStorage][65], and [IndexedDB][38]. Additionally, contexts outside the extension service worker can use the [Web Storage API][37].
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

可以，扩展程序可以使用 [localStorage][37] 永久存储字符串数据。同时，借助于 Chrome 内置的 JSON 函数，您可以将复杂的数据结构存储在 `localStorage` 中。如果您的扩展程序需要对其存储的数据执行 SQL 查询，那么可以使用 Chrome 实现的 [客户端 SQL 数据库][38]。

### 扩展程序可以使用 OAuth 吗？{: #faq-dev-04 }

可以。大多数开发人员发现使用 [JavaScript OAuth 库][39] 来简化签署 OAuth 请求的过程很方便，而我们的 Chrome 扩展程序可以使用 OAuth 访问远程数据 API。

<<<<<<< HEAD
### 扩展程序可以在呈现的网页之外创建 UI 吗？{: #faq-dev-05 }

可以，您的扩展程序可能会向 Chrome 浏览器的用户界面添加按钮。有关详细信息，请参阅 [浏览器操作][40] 和 [页面操作][41]。
=======
Yes, your extension may add buttons to the Chrome browser's user interface using the
[action API][40].

An extension may also create popup notifications, which exist outside of the browser window. See the
[Rich notifications][42] documentation for details.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

扩展程序还可以创建弹出通知，这些通知存在于浏览器窗口之外。有关更多详细信息，请参阅 [丰富通知][42] 文档。

### 扩展程序可以监听 Chrome 标签和导航按钮的点击吗？{: #faq-interact-chrome }

不能，扩展程序仅限于监听 [API 文档][43] 中描述的事件。

<<<<<<< HEAD
### 两个扩展程序可以相互通信吗？{: #faq-dev-11 }
=======
Yes, extensions may pass messages to other extensions. See [Cross-extension messaging][44]
for more information.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

可以，扩展程序可以将消息传递给其他扩展程序。有关更多信息，请参阅 [消息传递文档][44]。

<<<<<<< HEAD
### 扩展程序可以使用 Google Analytics 吗？{: #faq-dev-13 }
=======
Yes, since extensions are built just like websites, they can use [Google Analytics][45] to track
usage. See [Using Google Analytics 4][46] for more information.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

可以，由于我们可以像构建网站一样构建扩展程序，因此可以使用 [Google Analytics][45] 来跟踪使用情况。但是，您必须修改跟踪代码以提取 HTTPS 版本的 Google Analytics 库。有关执行此操作的更多信息，请参阅 [本教程][46]。

<<<<<<< HEAD
### 扩展程序可以修改 chrome:// 网址吗？{: #faq-dev-15 }
=======
No. The extensions APIs have been designed to minimize backwards compatibility issues that can arise
when new versions of the browser are pushed. Allowing content scripts on `chrome://` URLs would mean
that developers would begin to rely on the DOM, CSS, and JavaScript of these pages to stay the same.
In the best case, these pages could not be updated as quickly as they are currently.
In the worst case, it could mean that an update to one of these pages could cause an extension to
break, causing key parts of the browser to stop working for users of that extension.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

不可以。扩展程序 API 旨在最大限度地减少推送新版本浏览器时可能出现的向后兼容性问题。 如果允许扩展程序修改 “chrome://” URL 就意味着开发人员将开始依赖这些页面的 DOM、CSS 和 JavaScript 来保持不变。在最好的情况下，这些页面的更新速度不会像现在更新的那么快。在最坏的情况下，这可能意味着对这些页面之一的更新可能会导致扩展程序中断，从而导致浏览器的关键部分停止为该扩展程序的用户工作。

<<<<<<< HEAD
完全允许 [替换托管这些在 URL 上的内容][47] 的原因是因为它强制扩展程序开发人员实现他们想要的所有功能，而不依赖于浏览器的内部实现保持不变。

### 扩展程序可以在没有用户交互的情况下打开浏览器/页面操作弹出窗口吗？{: #faq-open-popups }
=======
### Can extensions open action popups without a user interaction? {: #faq-open-popups }

No. Popups can only be opened if the user clicks the corresponding action. An
extension cannot open its popup programmatically.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

不可以，只有当用户点击相应的页面或浏览器操作时，才能打开弹出窗口。扩展程序无法以编程方式打开其弹出窗口。

<<<<<<< HEAD
### 用户点击离开后，扩展程序可以保持弹出窗口打开吗？{: #faq-persist-popups }
=======
No. Popups automatically close when the user focuses on some portion of the browser outside of the
popup. There is no way to keep the popup open after the user has clicked away.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

不可以，当用户关注浏览器之外的某个部分时，弹出窗口会自动关闭弹出。用户点击离开后，无法保持弹出窗口打开。

<<<<<<< HEAD
### 可以在安装/卸载扩展程序时通知它们吗？{: #faq-lifecycle-events }
=======
You can listen to the [`runtime.onInstalled`][48] event to be notified when your
extension is installed or updated, or when Chrome itself is updated. While there
is no event listener for uninstalling an extension, a URL can be set by calling
[`runtime.setUninstallUrl()`](/docs/extensions/reference/runtime/#method-setUninstallURL)
to open a URL when the extension is uninstalled. This allows for some final
functionality, like cleaning up server-side data, doing analytics, and
implementing surveys without access to any extension APIs.

>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

您可以监听 [runtime.onInstalled][48] 事件，以便在安装或更新扩展程序或 Chrome 本身更新时收到通知。当您的扩展程序被卸载时，没有相应的监听事件。

## 开发{: #development2 }

<<<<<<< HEAD
### 如何为我的扩展程序构建 UI？{: #faq-building-ui }
=======
Extensions use HTML and CSS to define their user interfaces, so you can use standard form controls
to build your UI, or style the interface with CSS, as you would a web page. You can also create rich
interactions using JavaScript and the web platform's many APIs. Additionally, extensions
can add [some limited UI elements to Chrome itself.][49]
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

扩展程序使用 HTML 和 CSS 来定义它们的用户界面，因此您可以像处理网页一样，使用标准表单控件来构建您的 UI，或者使用 CSS 设置界面样式。此外，扩展程序可以添加 [一些有限的 UI 元素到 Chrome 本身]。

<<<<<<< HEAD
### 我可以在 localStorage 中存储多少数据？{: #faq-dev-09 }
=======
Extensions can store up to 10MB of data in [`storage.local`][local-storage].
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

扩展程序可以在 `localStorage` 中存储多达 5MB 的数据。

### 如何为我的扩展程序创建选项菜单？{: #faq-dev-10 }

您可以通过创建 [选项页面][50] 让用户为您的扩展设置选项，这是一个当用户单击扩展程序的“选项”按钮时将加载的简单 HTML 页面。此页面可以读取和写入设置到 `localStorage`，甚至可以将选项发送到 Web 服务器，以便它们可以跨浏览器持久化。

<<<<<<< HEAD
### 扩展程序开发人员可以使用哪些调试工具？{: #faq-dev-12 }

Chrome 的内置开发人员工具可用于调试扩展程序和网页。有关更多信息，请参阅此 [关于调试扩展的教程][51]。

### 为什么通配符匹配不适用于顶级域名？{: #faq-dev-16 }

因为实际将这种匹配限制在所需的域名上的复杂性，您不能使用通配符匹配模式，如 `https://google.*/*` 来匹配顶级域名（如`https://google.es`和`https://google.fr`）。

我们以 `https://google.*/*` 作为例子，谷歌的域名将被匹配，但也会匹配到 `https://google.someotherdomain.com`。此外，许多网站并不拥有他们的所有顶级域名。假设您想使用 `https://example.*/*` 来匹配 `https://example.com` 和 `https://example.es`，但如果 `https://example.net` 是一个恶意站点，那么也会成功匹配。如果您的扩展程序有错误，那么恶意站点可能会攻击您的扩展程序，以便访问您的扩展程序增加的权限。

因此，您应该明确列举所希望运行扩展程序的顶级域名。

### 为什么在安装/卸载我的扩展程序时管理 API 不会触发事件？{: #faq-management }
=======
Chrome's built-in developer tools can be used to debug extensions as well as web pages. See
[Debugging extensions][51] for more information.

### Why do wildcard matches not work for top level domains? {: #faq-dev-16 }

You cannot use wildcard match patterns like `https://google.*/*` to match top level domains (like
`https://google.es` and `https://google.fr`) due to the complexity of actually restricting such a
match to only the desired domains.

For the example of `https://google.*/*`, the Google domains would be matched, but so would
`https://google.someotherdomain.com`. Additionally, many sites do not own all of the top level domains for their
domain. For an example, assume you want to use `https://example.*/*` to match `https://example.com`
and `https://example.es`, but `https://example.net` is a hostile site. If your extension has a bug,
the hostile site could potentially attack your extension in order to get access to your extension's
increased privileges.

You should explicitly enumerate the top level domains that you wish to run your extension on.
>>>>>>> 71068916157bf9540ec93187687d439c46d28ec5

[管理 API][52] 旨在帮助创建新的标签页替换扩展，而不是为了触发当前扩展的安装/卸载事件。

### 扩展程序如何确定它是否是第一次运行？{: #faq-firstrun }

您可以监听 [runtime.onInstalled][53] 事件。 请参阅 [此常见问题解答条目][54]。

## 功能与 Bugs {: #features2 }

### 我想我发现了一个错误！我如何确保它得到修复？{: #faq-fea-01 }

在开发扩展程序时，您可能会发现与扩展程序文档不匹配的行为，这可能是 Chrome 中的错误造成的。最好的办法是确保提交适当的问题报告，使得 Chromium 团队有足够的信息来重现该行为。

您应该遵循以下步骤来确保这一点：

1.  提出一个最小化扩展程序的测试来演示您希望报告的问题。这个扩展程序应该有尽可能少的代码来演示这个错误——通常限制在 100 行代码或更少。很多时候，开发人员发现他们无法以这种方式重现他们的问题，这很好地表明错误存在于他们自己的代码中。
2.  在 [https://crbug.com][55] 上搜索问题跟踪器以查看是否有人报告了类似问题。大多数与扩展程序相关的问题都在 **component=Platform>Extensions** 下提交。例如，如果要查找与 `chrome.scripting.executeScript` 函数相关的扩展程序错误，请搜索“`component=Platform>Extensions Type=Bug chrome.scripting.executeScript`”，并将为您提供 [此结果列表][56]。
3.  如果您发现了可以描述您错误的 issue，请单击 star 图标以在错误收到更新时收到通知。_请不要回复“我也是”或“什么时候修复？”_，此类回复可能会导致发送数百封电子邮件。因此，仅当您有更多有用信息时才添加评论（例如更好的测试用例或建议的修复）。
4.  如果您发现没有合适的 issue 可以加注 star，请在 [https://crbug.com/new][57] 提交新的问题报告。填写此表格时尽可能明确：选择描述性标题，解释重现错误的步骤，并描述预期和实际行为。同时，将您的测试示例附加到报告中，并在适当时添加屏幕截图。您的报告越容易让其他人重现您的问题，您的错误得到及时修复的机会就越大。
5.  等待错误解决。尽管有时更新可能需要更长时间，但是大多数新错误会在一周内进行分类。*请不要询问问题何时修复。*如果您的错误在两周后仍未修改，请在 [讨论组][58] 中发布消息，并附上您的错误的链接。
6.  如果您最初在讨论组上报告了您的错误并被定向到此常见问题解答条目，请回复您的原始线程，并附上您加星标或报告的错误的链接。这将使遇到相同问题的其他人更容易找到正确的错误。

### 我有一个功能请求！我该如何报告？{: #faq-fea-02 }

如果您确定了可以添加以改善扩展程序开发体验的功能（尤其是与实验性 API 相关的功能），请确保在问题跟踪器中提交了适当的请求。

您应该遵循以下步骤来确保这一点：

1.  在 [https://crbug.com][59] 上搜索问题跟踪器以查看是否有人请求了类似的功能。大多数与扩展程序相关的请求都在 **component=Platform>Extensions** 下提交。例如，如果要查找与键盘快捷键相关的扩展程序功能请求时，请搜索“`component=Platform>Extensions Type=Feature shortcuts`” ，这将为您提供 [此结果列表][60]。
2.  如果您找到与您的请求相匹配的结果，请单击 star 图标以在错误收到更新时收到通知。_请不要回复“我也是”或“什么时候实现？”_，此类回复可能会导致发送数百封电子邮件。
3.  如果您没有找到合适的结果，请在 [https://crbug.com/new][61] 提交新请求。填写此表格时尽可能详细：选择一个描述性标题并准确说明您想要什么功能以及您打算如何使用它。
4.  等待更新。尽管有时更新可能需要更长时间，但是大多数新请求会在一周内进行分类。*请不要询问何时添加该功能。*如果您的需求在两周后仍未添加，请在 [讨论组][62] 中发布消息，并附上返回您请求的链接。
5.  如果您最初在讨论组中报告了您的请求并被定向到此常见问题解答条目，请回复您的原始线程，并附上您加星标或打开的结果的链接。这将使具有相同需求的其他人更容易找到正确的结果。

[1]: /docs/webstore/faq
[2]: https://stackoverflow.com/questions/tagged/google-chrome-extension
[3]: https://groups.google.com/a/chromium.org/group/chromium-extensions
[4]: https://support.google.com/chrome_webstore/
[5]: #faq-gen-01
[6]: #faq-dev-01
[7]: #faq-gen-02
[8]: #faq-gen-03
[9]: #faq-dev-14
[10]: #faq-dev-02
[11]: #faq-dev-03
[12]: #faq-dev-07
[13]: #faq-dev-08
[14]: #faq-dev-04
[15]: #faq-dev-05
[16]: #faq-interact-chrome
[17]: #faq-dev-11
[18]: #faq-dev-13
[19]: #faq-dev-15
[20]: #faq-open-popups
[21]: #faq-persist-popups
[22]: #faq-lifecycle-events
[23]: #faq-building-ui
[24]: #faq-dev-09
[25]: #faq-dev-10
[26]: #faq-dev-12
[27]: #faq-dev-16
[28]: #faq-management
[29]: #faq-firstrun
[30]: #faq-fea-01
[31]: #faq-fea-02
[32]: /docs/extensions/mv3/getstarted
[33]: https://developer.mozilla.org/docs/Web/API
[34]: https://chromiumdash.appspot.com/releases
[35]: /docs/extensions/mv3/xhr
[36]: https://json.org/js.html
[37]: https://developer.mozilla.org/docs/Web/API/Web_Storage_API
[38]: https://developer.mozilla.org/docs/Web/API/IDBDatabase
[39]: /docs/extensions/mv3/tut_oauth/
[40]: /docs/extensions/reference/action/
[42]: /docs/extensions/mv3/richNotifications
[43]: /docs/extensions/reference
[44]: /docs/extensions/mv3/messaging#external
[45]: https://www.google.com/analytics/
[46]: /docs/extensions/mv3/tut_analytics
[47]: /docs/extensions/mv3/override
[48]: /docs/extensions/reference/runtime#event-onInstalled
[49]: #faq-dev-05
[50]: /docs/extensions/mv3/options
[51]: /docs/extensions/mv3/tut_debugging
[53]: /docs/extensions/reference/runtime#event-onInstalled
[54]: #faq-lifecycle-events
[55]: https://crbug.com
[56]: https://bugs.chromium.org/p/chromium/issues/list?can=2&q=component%3DPlatform>Extensions+Type%3DBug+chrome.scripting.executeScript
[57]: https://crbug.com/new
[58]: https://groups.google.com/a/chromium.org/group/chromium-extensions/topics
[59]: https://crbug.com
[60]: https://bugs.chromium.org/p/chromium/issues/list?can=2&q=component%3DPlatform>Extensions+Type%3DFeature+shortcuts
[61]: https://crbug.com/new
[62]: https://groups.google.com/a/chromium.org/group/chromium-extensions/topics
[63]: /docs/extensions/reference/storage/
[64]: /docs/extensions/mv3/service_workers/
[65]: https://developer.mozilla.org/docs/Web/API/CacheStorage
[local-storage]: /docs/extensions/reference/storage/#property-local
[stringify]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[parse]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
