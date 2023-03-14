---
layout: 'layouts/doc-post.njk'
title: '架构概述'
seoTitle: 'Chrome Extensions architecture overview'
date: 2012-09-18
<<<<<<< HEAD
updated: 2022-11-02
description: Chrome 扩展程序的软件架构的高水平解释。
subhead: Chrome 扩展程序的软件架构的高水平解释。
---

扩展程序是 HTML、CSS、JavaScript、图像和 Web 平台中使用的其他文件的压缩包。扩展程序可以修改用户看到并与之交互的 Web 内容。扩展程序还可以扩展和更改浏览器本身的行为。

本页简要介绍了可能构成扩展程序的一部分的文件、如何访问这些文件、如何使用 Chrome API、扩展文件如何通信以及如何存储数据。

## 架构 {: #arch }

扩展程序的架构将取决于其功能，但所有扩展都必须包含 [manifest][section-manifest] 中所包含的内容。扩展程序可以包含的其他组件如下：

- [Service worker][section-bg]
- [工具栏图标][section-icons]
- [UI 元素][section-ui]
- [内容脚本][section-cs]
- [选项页面][section-options]
=======
updated: 2023-01-10
description: A high-level explanation of the architecture of Chrome Extensions.
subhead: A high-level explanation of the structure of a Chrome Extension.
anchorRedirects:
  view_page: /docs/extensions/mv3/options/#view_page
  files: /docs/extensions/mv3/content_scripts/#files
---

## Overview {: #overview }

A Chrome extension is composed of different parts. This page describes the structure of an extension, the role each part plays, and how they work together. It does not describe the code-level details of how to write an extension.

If you are not familiar with Chrome extension development, we recommend first reading [Extensions 101][doc-ext-101] and [Development Basics][doc-dev-basics].

## The structure of a Chrome extension {: #arch }

The following sections describe the files that compose a Chrome extension. Here's an example of a Chrome Extension file structure:

<figure>
{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/Txq5CxeXjQz7i4wmP8zO.png", alt="An example of a Chrome Extension directory structure", width="400", height="1189" %}
  <figcaption>
  An example of a Chrome extension file structure
  </figcaption>
</figure>
>>>>>>> d5c007942a06d0661aa629efa7e2f5aa70fb7de0

### Manifest {: #manifest }

<<<<<<< HEAD
名为 `manifest.json` 的文件为浏览器提供了有关扩展的信息，例如重要的文件和扩展可使用的功能。
=======
The manifest (`manifest.json`) is the configuration file of a Chrome extension. It is a required JSON file that must be located at the [root of the project][dev-basics-structure]. It provides the browser with a blueprint of the extension, with important information such as:
>>>>>>> d5c007942a06d0661aa629efa7e2f5aa70fb7de0

- The name of the extension, a description of what it does, the current version number, and what icons to use.
- The [Chrome API][api-ref] keys and [permissions][doc-perms] that the extension needs.
- The files assigned as the extension service worker, the popup HTML file, the options page, the content scripts, etc.

<<<<<<< HEAD
### 工具栏图标 {: #icons }

扩展程序必须有一个位于浏览器工具栏中的图标。工具栏图标使得用户能够轻松访问并使用户知道安装了哪些扩展程序。大多数用户将通过单击图标与使用 [popup][docs-popup] 的扩展程序进行交互，例如 [快速入门示例][sample-getting-started]。

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/ku5Z8MMssgw6MKctpJVI.png", alt="Getting started
popup", width="187", height="153" %}

<!-- TODO: 展示 MV3 入门教程扩展示例 -->
=======
The [Manifest keys][doc-manifest] article contains the complete list of default and optional keys. For copy-paste-ready code samples, check out the [Manifest examples][doc-manifest-examples].

### The extension service worker {: #background_script }

An extension service worker (`service-worker.js`) is an event-based script that the browser runs in the background. It is often used to process data, coordinate tasks in different parts of an extension, and as an extension's event manager. For example, the service worker can listen for and react to events when the extension is first installed, a new tab is created, a new bookmark is added, the extension toolbar icon is clicked, etc.
>>>>>>> d5c007942a06d0661aa629efa7e2f5aa70fb7de0

A service worker can access all the [Extension APIs][api-ref], but as a type of [Worker][mdn-worker] it can't use the DOM APIs that a document's global Window object provides. It also runs in its own environment, so it cannot directly modify a web page's content.

<<<<<<< HEAD
Service Worker 是扩展程序的事件处理程序：它包含对扩展程序很重要的浏览器事件的侦听器。它最开始处于休眠状态，直到触发事件然后执行指示的逻辑；它仅在需要时加载并在空闲时卸载。只要 Service Worker 在 `manifest.json` 中声明所需的权限，那么就可以访问所有 [Chrome API][section-apis]。

扩展只能有一个 Service Worker。从代码层面上说，可以通过在 manifest 的 `"background"` 中指定 `"type": "Module"`，将 Service Worker 声明为 [ES 模块][webdev-imports]。

请参阅 [使用 Service Workers 处理事件][docs-service-worker] 了解更多信息。

### 内容脚本{: #contentScripts }

内容脚本允许扩展程序将逻辑注入页面以读取和修改其内容。内容脚本包含在已加载到浏览器中的页面上下文中执行的 JavaScript。

内容脚本可以通过交换 [messages][docs-messages] 和使用 [storage][api-storage] API 存储值，以与其父扩展程序进行通信。

{% Img src="image/BrQidfK9jaQyIHwdw91aVpkPiib2/466ftDp0EXB4E1XeaGh0.png", alt="Shows a communication
path between the content script and the parent extension", height="316", width="388" %}

请参阅 [了解内容脚本][docs-content-scripts] 了解更多信息。

### UI 元素{: #pages }

扩展程序的用户界面应该是有目的性的，并且尽量小。UI 应该自定义或增强浏览体验而不会分散注意力。

以下是最常见的 UI 示例列表：

- [action click][docs-click] 事件。
- [popup][docs-popup]。
- [context menu][docs-context-menu]。
- [omnibox][docs-omnibox]。
- [keyboard shortcut][文档命令]。
- Desktop [notifications][api-notif].
- [Text-to-speech][api-tts]。
- A custom UI injected [into a page][docs-content-scripts].

请参阅 [设计 Chrome 扩展程序的 UI][docs-ui]，了解更多信息。

### 选项页面 {: #optionsPage }

正如扩展程序允许用户自定义 Chrome 浏览器一样，选项页面也支持自定义扩展程序。选项页面可用于启用功能并允许用户选择与其需求相关的功能。

用户可以通过 [direct link][docs-link-options] 或在扩展工具栏的上下文菜单中访问选项页面。以下是 Google Dictionary 扩展程序的示例。

{% Columns %}

{% Column %}

<figure>
{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/Mz7GV76tFkzxRlb7Pq6e.png",
alt="Options page link in the UI", width="800", height="299" %}
  <figcaption>
    Link to the Options page.
  </figcaption>
</figure>

{% endColumn %}

{% Column %}

<figure>
{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/BM11QeGCThsUNTlsZbAe.png",
alt="Context Menu Options page", width="357", height="222" %}

  <figcaption>
    Options page in the extension's context menu.
  </figcaption>
</figure>

{% endColumn %}

{% endColumns %}

请参阅 [选项页面][docs-options] 了解更多信息。

### 其他 HTML 文件 {: #html-files}

您可以展示未在 Manifest 中声明的扩展程序中存在的其他 HTML 文件。这些 HTML 文件可以访问与弹出窗口或其他扩展文件相同的 [Chrome API][section-apis]。

您可以使用 Web API [window.open()][mdn-window-open]、Chrome API [windows.create()][api-window-create] 或 [tabs.create()][api-create-tab] 来打开这些页面 。

## 扩展程序文件 {: #files }

### 引用扩展程序文件 {: #ref-files }

就像 Web 上的 HTML 页面可以包含具有相对 URL 的同一站点上的文件一样，扩展程序页面也可以使用相对路径引用扩展资源。

```html
<img src="images/my_image.png" />
```

要从 **内容脚本** 访问扩展程序文件，您可以调用 [`chrome.runtime.getURL()`][api-get-url] 来获取扩展程序的绝对 URL。

```js
let image = chrome.runtime.getURL('images/my_image.png');
```

要从 **网站** 访问扩展文件，您必须按如下方式构建 URL：

```text
chrome-extension://EXTENSION_ID/RELATIVE_PATH
```

您可以在扩展管理页面 **chrome://extensions** 中找到 <code><var>EXTENSION_ID</var></code>。<code><var>RELATIVE_PATH</var></code> 是相对于扩展程序的顶部文件夹。

{% Aside 'key-term' %}

**扩展程序 ID** 是一个 32 个字符的字母字符串，用于标识浏览器和 Chrome 网上应用店中的扩展程序。

{% endAside %}

除非 [在 Manifest 中设置][docs-key] `"key"` 属性，否则在开发过程中，加载 [_unpacked extension_][docs-unpacked] 时会生成一个新 ID。
=======
See [Handling events in the extension service worker][doc-sw] for more details. 

### Content scripts {: #content-scripts }

Extensions use content scripts (`content-script.js`) to inject code into host pages. They allow the extension to interact with and modify pages in the browser. For example, they can insert a new element on the page, change the style of a website, modify the [DOM][mdn-dom] elements, etc. 

{% Aside 'key-term' %}
*Host pages* are the websites that a content script interacts with. An extension can choose which websites a content script should run on by specifying [match patterns][doc-match].
{% endAside %}

Content Scripts share access to the same DOM tree as the host page but run in a separate JavaScript environment (the extension's [isolated world][cs-isolated]). They also have access to a limited number of [Chrome APIs][api-ref]. See [Understanding content scripts][doc-content-scripts] for more details.
>>>>>>> d5c007942a06d0661aa629efa7e2f5aa70fb7de0

### Extension HTML pages {: #html-files }

<<<<<<< HEAD
内容脚本和网站想要访问的所有资产必须在 Manifest 中的 [`web_accessible_resources`][section-web-res] 键下声明。
=======
An extension can have different HTML pages depending on the design. All extension HTML files can use the [Chrome APIs][api-ref], but cannot include inline Javascript; they must point to a JavaScript file. The two most common HTML pages are:
>>>>>>> d5c007942a06d0661aa629efa7e2f5aa70fb7de0

[The popup][doc-popup]
: Many extensions use a popup (`popup.html`) to provide functionality, such as displaying a list of tabs, or additional information regarding the current tab. Users can easily find it by clicking on the extension toolbar icon. When the user navigates away it will automatically close.

<<<<<<< HEAD
### 可通过网络访问的资源 {: #web-resources }

Web 可访问资源是扩展程序内的文件（图像资源、HTML、CSS、Javascript），可由内容脚本、网页或其他扩展程序访问。

您可以在 Manifest 中声明哪些资源被公开以及对应的来源：
=======
[The options page][doc-options]
: The options page (`options.html`) provides a way for users to customize an extension, such as choosing which sites the extension will run on. Users can access the options page in several ways as described in [Finding the options page][doc-options-view].

Other extension HTML pages include [Chrome override pages][doc-override], [sandbox pages][doc-sandbox] or any custom page included for a specific purpose like onboarding the user.

### Other assets {: #assets }
>>>>>>> d5c007942a06d0661aa629efa7e2f5aa70fb7de0

An extension can include many types of resources, such as images and fonts, but only the [extension icons][manifest-icons] are required for extensions hosted in the [Chrome Web Store][cws]. Also, [Chrome Web Store policy][cws-mv3-req] requires that extensions include all code that the extension executes in the extension's package.

<<<<<<< HEAD
请参阅 [Web 可访问资源][docs-web-acc-res] 了解更多信息。

## 使用 Chrome API {: #apis }

除了可以访问与网页相同的 [web APIs][mdn-web-apis] 之外，扩展程序还可以使用与浏览器紧密集成的 [extension-specific APIs][api-reference]。 例如，扩展程序和网页都可以访问标准的 [`window.open()`][mdn-window-open] 方法来打开 URL，但扩展程序可以通过使用 [chrome. tabs.create()][api-create-tab] 代替。

请参阅 [Chrome API 参考文档][api-reference] 了解更多信息。

### 异步 vs 同步方法 {: #async-sync }

大多数 Chrome API 方法都是异步的：它们会立即返回，而无需等待操作完成。如果扩展程序需要知道异步操作的结果，有两个选择：

- 返回 promises
- 传递回调方法

请注意这些选择是互斥的，如果传递了回调方法，就不会返回 promise。如果你想返回 promise 就不要传递回调。

一般来说，你应该更倾向于使用 promise 而不是回调方法。并非所有的扩展程序 API 都支持 promise，但比较新的方法是支持的。你可以在 API 索引页面检查对应的方法是否支持 promise。如果你需要在一个函数中同时支持 promise 和回调方法，比如你的用户可能使用更老的浏览器，你可以测试返回的具体内容，通过使用 `typeof` 和 [可选链](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Optional_chaining)) 进行区分：

```js
typeof chrome.contextMenus.removeAll()?.then();
```

#### Promises {: #async }

随着 Manifest V3 的引入，许多扩展程序的 API 都开始返回 Promise，但是并非扩展程序 API 中的所有方法都支持 Promise。您可以通过检查其 API 参考页面来验证方法是否支持 Promise。

处理 promise 的方法收到支持。请参阅 [使用 Promise][api-reference] 了解更多信息。

```js
// Promise
chrome.tabs.query(queryOptions).then(tabs => {
  chrome.tabs.update(tabs[0].id, {url: newUrl});
  someOtherFunction();
});

// async-await
async function queryTab() {
  let tabs = await chrome.tabs.query(queryOptions);
  chrome.tabs.update(tabs[0].id, {url: newUrl});
  someOtherFunction();
}
```

#### Callbacks {: #callbacks }

回调参数声明一个可用的异步方法。

```js
// Signatures for an asynchronous method
chrome.tabs.query(object queryInfo, function callback)
```

## 页面间通信 {: #pageComm }

扩展程序中的不同组件可以使用 [消息传递][docs-messages] 相互通信。任何一方都可以侦听从另一端发送的消息，并在同一通道上响应。

## 数据保存 {: #data}

Chrome 存储 API 已经经过优化，可以满足扩展程序的特定存储需求。例如，每当数据更新时，您都可以使用 `onChanged()` 事件来跟踪这些更改。所有扩展程序组件都可以访问此 API。扩展程序还可以使用 Web API [indexedDB][mdn-indexeddb] 存储数据。

请参阅 [storage API][api-reference] 了解更多信息。

## 隐身模式 {: #incognito}

除非用户在扩展程序的设置页面中手动允许，否则扩展程序不会在隐身窗口中运行。默认情况下，普通窗口和隐身窗口在单个共享进程中运行。但是扩展程序可以在自己的单独进程中运行隐身窗口，或者根本不支持隐身窗口。您可以在 Manifest 中的 ["incognito"][manifest-incognito] 键中指定此行为。

请参阅 [隐身模式保存数据][incognito-data] 了解更多信息。
=======
## How they work together {: #interact }

In this section, we will describe how these extension components communicate, store data, and share access to resources.

### Sending messages {: #pageComm }

Many times content scripts, or other extension pages, need to send or receive information from the extension service worker. In these cases, either side can listen for messages sent from the other end, and respond on the same channel. Extensions can send a one-time request or establish a long-lived connection to support multiple messages.

See [Message passing][doc-messages] for more details.

### Storing data {: #data }

Chrome provides extensions with a specialized [Storage API][api-storage], available to all extension
components. It includes four separate storage areas for specific use cases and an event listener
that tracks whenever data is updated. For example, when you save changes in the popup, the extension
service worker can respond with specified logic.

See [Storage API][api-storage] for usage and code samples.

### Referencing extension resources {: #ref-files }

Extension HTML pages can use the same tags as a regular HTML page to add an extension asset. Content
scripts can also access extension resources, such as images and fonts, but require extra steps
which are described in [Accessing extension files in Content Scripts][doc-ref].
>>>>>>> d5c007942a06d0661aa629efa7e2f5aa70fb7de0

## 下一步{: #next-steps }

<<<<<<< HEAD
阅读概述并完成 [入门][docs-get-started] 教程后，您应该准备好开始编写自己的扩展程序了！使用以下资源深入了解自定义 Chrome 的世界：

- 在 [调试教程][docs-debugging] 中了解如何调试扩展程序。
- Chrome 扩展程序可以访问强大的 API，这些 API 超出了开放网络上可用的 API。[Chrome APIs 文档][api-reference] 将介绍每个 API。
- [开发人员指南][docs-dev-guide] 有几十个附加链接，指向与创建高级扩展程序相关的文档。
=======
Now that you have completed the [Getting Started guides][doc-gs] and understand the structure of a Chrome extension, you are ready to dive deeper with the following resources:

- Learn about the [UI elements][doc-ui] you can use in a Chrome extension.
- Browse a complete list of [Chrome extension capabilities][doc-dev-guide].
- Discover best practices for building [secure extensions][doc-secure] that respect [user privacy][doc-privacy]. 
>>>>>>> d5c007942a06d0661aa629efa7e2f5aa70fb7de0

[api-ref]: /docs/extensions/reference
[api-storage]: /docs/extensions/reference/storage
[cs-isolated]: /docs/extensions/mv3/content_scripts/#isolated_world
[cws]: https://chrome.google.com/webstore/
[cws-mv3-req]: /docs/webstore/program-policies/mv3-requirements/
[dev-basics-structure]: /docs/extensions/mv3/getstarted/development-basics/#structure
[doc-content-scripts]: /docs/extensions/mv3/content_scripts
[doc-dev-basics]: /docs/extensions/mv3/getstarted/development-basics
[doc-dev-guide]: /docs/extensions/mv3/devguide
[doc-ext-101]: /docs/extensions/mv3/getstarted/extensions-101
[doc-gs]: /docs/extensions/mv3/getstarted
[doc-manifest-examples]: /docs/extensions/mv3/manifest#manifest-examples
[doc-match]: /docs/extensions/mv3/match_patterns/
[doc-manifest]: /docs/extensions/mv3/manifest
[doc-messages]: /docs/extensions/mv3/messaging
[doc-options-view]: /docs/extensions/mv3/options#view_page
[doc-options]: /docs/extensions/mv3/options
[doc-override]: /docs/extensions/mv3/override
[doc-overview]: /docs/extensions/mv3/overview
[doc-perms]: /docs/extensions/mv3/declare_permissions/
[doc-popup]: /docs/extensions/mv3/user_interface#popup
[doc-privacy]: /docs/extensions/mv3/user_privacy/
[doc-ref]: /docs/extensions/mv3/content_scripts/#files
[doc-sandbox]: /docs/extensions/mv3/manifest/sandbox/
[doc-secure]: /docs/extensions/mv3/security/
[doc-sw]: /docs/extensions/mv3/service_workers/
[doc-ui]: /docs/extensions/mv3/user_interface
[manifest-icons]: /docs/extensions/mv3/manifest/icons/
[mdn-dom]: https://developer.mozilla.org/docs/Web/API/Document_Object_Model
[mdn-worker]: https://developer.mozilla.org/docs/Web/API/Worker
