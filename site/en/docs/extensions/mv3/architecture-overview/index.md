---
layout: "layouts/doc-post.njk"
title: "架构概述"
date: 2012-09-18
<<<<<<< HEAD
updated: 2022-05-13
description: Chrome 扩展程序的软件架构的高水平解释。
subhead: Chrome 扩展程序的软件架构的高水平解释。
=======
updated: 2022-11-02
description: A high-level explanation of the software architecture of Chrome Extensions.
subhead: A high-level explanation of the components and structure of a Chrome Extension.
>>>>>>> dd9ae2983ea7a6b93f0479f2fecc07f34624b5ed
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

### Manifest {: #manifest }

<<<<<<< HEAD
名为 `manifest.json` 的文件为浏览器提供了有关扩展的信息，例如重要的文件和扩展可使用的功能。
=======
The manifest file, titled `manifest.json`, gives the browser information about the extension, such
as the most important files and the capabilities the extension might use. 
>>>>>>> dd9ae2983ea7a6b93f0479f2fecc07f34624b5ed

```json
{
  "name": "My Extension",
  "description": "A nice little demo extension.",
  "version": "2.1",
  "manifest_version": 3,
  "icons": {
    "16": "icon_16.png",
    "48": "icon_48.png",
    "128": "icon_128.png"
  },
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["storage"],
  "host_permissions": ["*://*.example.com/*"],
  "action": {
    "default_icon": "icon_16.png",
    "default_popup": "popup.html"
  }
}
```

### 工具栏图标{: #icons }

扩展程序必须有一个位于浏览器工具栏中的图标。工具栏图标使得用户能够轻松访问并使用户知道安装了哪些扩展程序。大多数用户将通过单击图标与使用 [popup][docs-popup] 的扩展程序进行交互，例如 [快速入门示例][sample-getting-started]。

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/ku5Z8MMssgw6MKctpJVI.png", alt="Getting started
popup", width="187", height="153" %}
<!-- TODO: 展示 MV3 入门教程扩展示例 -->

### Service worker {: #background_script }

<<<<<<< HEAD
Service Worker 是扩展程序的事件处理程序：它包含对扩展程序很重要的浏览器事件的侦听器。它最开始处于休眠状态，直到触发事件然后执行指示的逻辑；它仅在需要时加载并在空闲时卸载。只要 Service Worker 在 `manifest.json` 中声明所需的权限，那么久可以访问所有 [Chrome API][section-apis]。

请参阅 [使用 Service Workers 处理事件][docs-service-worker] 了解更多信息。
=======
The extension service worker is the extension's event handler; it contains listeners for browser
events that are important to the extension. It lies dormant until an event is fired then performs
the instructed logic; it is only loaded when it is needed and unloaded when it goes idle. The
service worker has access to all the [Chrome APIs][section-apis], as long as it declares the
required permissions in the `manifest.json`.

An extension can only have a single service worker. To import further code, the service worker can be declared as an [ES Module][webdev-imports] by specifying `"type": "module"` in the manifest `"background"`.

See [Manage events with service workers][docs-service-worker] to learn more. 
>>>>>>> dd9ae2983ea7a6b93f0479f2fecc07f34624b5ed

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

### 选项页面{: #optionsPage }

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

### 其他 HTML 文件{: #html-files}

<<<<<<< HEAD
您可以展示未在 Manifest 中声明的扩展程序中存在的其他 HTML 文件。这些 HTML 文件可以访问与弹出窗口或其他扩展文件相同的 [Chrome API][section-apis]。
=======
An extension can also have other HTML files that are not declared in the manifest. All extension HTML files can access the [Chrome APIs][section-apis] and can use script tags including Javascript files, but cannot declare inline JavaScript.
>>>>>>> dd9ae2983ea7a6b93f0479f2fecc07f34624b5ed

您可以使用 Web API [window.open()][mdn-window-open]、Chrome API [windows.create()][api-window-create] 或 [tabs.create()][api-create-tab] 来打开这些页面 。

## 扩展程序文件{: #files }

### 引用扩展程序文件{: #ref-files }

就像 Web 上的 HTML 页面可以包含具有相对 URL 的同一站点上的文件一样，扩展程序页面也可以使用相对路径引用扩展资源。

```html
<img src="images/my_image.png">
```

要从**内容脚本**访问扩展程序文件，您可以调用 [`chrome.runtime.getURL()`][api-get-url] 来获取扩展程序的绝对 URL。

``` js
let image = chrome.runtime.getURL("images/my_image.png")
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

{% Aside 'caution' %}

内容脚本和网站想要访问的所有资产必须在 Manifest 中的 [`web_accessible_resources`][section-web-res] 键下声明。

{% endAside %}

### 可通过网络访问的资源{: #web-resources }

Web 可访问资源是扩展程序内的文件（图像资源、HTML、CSS、Javascript），可由内容脚本、网页或其他扩展程序访问。

您可以在 Manifest 中声明哪些资源被公开以及对应的来源：

```json
{
  ...
  "web_accessible_resources": [
    {
      "resources": [ "images/*.png" ],
      "matches": [ "https://example.com/*" ]
    }
  ],
  ...
}
```

请参阅 [Web 可访问资源][docs-web-acc-res] 了解更多信息。

## 使用 Chrome API{: #apis }

除了可以访问与网页相同的 [web APIs][mdn-web-apis] 之外，扩展程序还可以使用与浏览器紧密集成的 [extension-specific APIs][api-reference]。 例如，扩展程序和网页都可以访问标准的 [`window.open()`][mdn-window-open] 方法来打开 URL，但扩展程序可以通过使用 [chrome. tabs.create()][api-create-tab] 代替。

请参阅 [Chrome API 参考文档][api-reference] 了解更多信息。

<<<<<<< HEAD
### 异步 vs 同步方法{: #async-sync }

#### 回调 {: #callbacks }

大多数 Chrome API 方法都是异步的：它们会立即返回，而无需等待操作完成。如果扩展程序需要知道异步操作的结果，它可以将回调函数传递给方法。在方法返回之后，回调会稍后执行，但是也可能更晚。

当回调参数在其签名中可用时，方法是异步的。
=======
### Asynchronous methods {: #async-sync }

Most Chrome API methods are asynchronous; they return immediately without waiting for the operation to finish. If an extension needs to know the outcome of an asynchronous operation, there are two choices:

* Use the returned promise.
* Pass a callback function into the method.

Note that these choices are mutually exclusive. If you pass a callback to a method, no promise
will be returned. If you use the returned promise, do not pass a callback.

Generally, you should prefer promises to callbacks. Not all methods in extensions APIs support
promises, but newer methods do. You can verify whether a method supports promises by checking
its API reference page. If you need to support both promises and callbacks for the same
function (because your users have older browsers), you can test whether the method returns a
promise using `typeof` and
[optional chaining](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
For example:

>>>>>>> dd9ae2983ea7a6b93f0479f2fecc07f34624b5ed

```js
typeof chrome.contextMenus.removeAll()?.then()
```

<<<<<<< HEAD
如果扩展程序需要将用户当前选择的选项卡导航到新 URL，则需要获取当前选项卡的 ID，然后将该选项卡的地址更新为新 URL。

如果 [tabs.query][api-tabs-query] 方法是同步的，它可能如下所示。

{% Compare 'worse' %}
```js
let tab = chrome.tabs.query(queryOptions); //WRONG!!!
chrome.tabs.update(tab.id, {url:newUrl});
someOtherFunction();
```
{% CompareCaption %}

这种方法会失败，因为 `query()` 是 **异步方法**：它在不等待工作完成的情况下返回，并且不返回值。

{% endCompareCaption %}

{% endCompare %}

要正确查询选项卡并更新其 URL，扩展程序必须使用回调参数。

{% Compare 'better' %}
```js
chrome.tabs.query(queryOptions, function(tabs) {
  chrome.tabs.update(tabs[0].id, {url: newUrl});
});
someOtherFunction();
```

{% endCompare %}

在上面的代码中，这些行按以下顺序执行：1、4、2。首先调用指定给 `query()` 的回调函数，然后只有在有关当前选定选项卡的信息可用之后，才会执行第 2 行。这会在 `query()` 返回后的某个时间发生。 尽管 `update()` 是异步的，但代码不使用回调参数，因为扩展程序不会对更新结果做任何事情。

#### 期约{: #async }

随着 Manifest V3 的引入，许多扩展程序的 API 都开始返回 Promise，但是并非扩展程序 API 中的所有方法都支持 Promise。您可以通过检查其 API 参考页面来验证方法是否支持 Promise。
=======
#### Promises {: #async }

Both methods of handling promises are supported. See [Using promises][docs-promises] to learn
more.
>>>>>>> dd9ae2983ea7a6b93f0479f2fecc07f34624b5ed

```js
// Promise
chrome.tabs.query(queryOptions)
.then((tabs) => {
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

<<<<<<< HEAD
请参阅 [使用 Promise][api-reference] 了解更多信息。

#### 同步方法{: #sync }
=======
#### Callbacks {: #callbacks }

A method is asynchronous when the callback parameter is available in its signature.
>>>>>>> dd9ae2983ea7a6b93f0479f2fecc07f34624b5ed

```js
// Signatures for an asynchronous method
chrome.tabs.query(object queryInfo, function callback)
```

<<<<<<< HEAD
此方法将 URL 作为“字符串”同步返回，并且不执行其他异步工作。

## 页面间通信{: #pageComm }
=======
## Communication between pages {: #pageComm }
>>>>>>> dd9ae2983ea7a6b93f0479f2fecc07f34624b5ed

扩展程序中的不同组件可以使用 [消息传递][docs-messages] 相互通信。任何一方都可以侦听从另一端发送的消息，并在同一通道上响应。

## 数据保存{: #data}

Chrome 存储 API 已经经过优化，可以满足扩展程序的特定存储需求。例如，每当数据更新时，您都可以使用 `onChanged()` 事件来跟踪这些更改。所有扩展程序组件都可以访问此 API。扩展程序还可以使用 Web API [indexedDB][mdn-indexeddb] 存储数据。

请参阅 [storage API][api-reference] 了解更多信息。

## 隐身模式{: #incognito}

除非用户在扩展程序的设置页面中手动允许，否则扩展程序不会在隐身窗口中运行。默认情况下，普通窗口和隐身窗口在单个共享进程中运行。但是扩展程序可以在自己的单独进程中运行隐身窗口，或者根本不支持隐身窗口。您可以在 Manifest 中的 ["incognito"][manifest-incognito] 键中指定此行为。

请参阅 [隐身模式保存数据][incognito-data] 了解更多信息。

## 下一步{: #next-steps }

阅读概述并完成 [入门][docs-get-started] 教程后，您应该准备好开始编写自己的扩展程序了！使用以下资源深入了解自定义 Chrome 的世界：

- 在 [调试教程][docs-debugging] 中了解如何调试扩展程序。
- Chrome 扩展程序可以访问强大的 API，这些 API 超出了开放网络上可用的 API。[Chrome APIs 文档][api-reference] 将介绍每个 API。
- [开发人员指南][docs-dev-guide] 有几十个附加链接，指向与创建高级扩展程序相关的文档。

[api-action]: /docs/extensions/reference/action/
[api-create-tab]: /docs/extensions/reference/tabs#method-create
[api-dec-content]: /docs/extensions/reference/declarativeContent
[api-get-url]: /docs/extensions/reference/runtime#method-getURL
[api-notif]: /docs/extensions/reference/notifications/
[api-reference]: /docs/extensions/reference
[api-storage]: /docs/extensions/reference/storage
[api-tab]: /docs/extensions/reference/tabs#type-Tab
[api-tabs-query]: /docs/extensions/reference/tabs#method-query
[api-tts]: /docs/extensions/reference/tts/
[api-window-create]: /docs/extensions/reference/windows/#method-create
[docs-click]: /docs/extensions/mv3/user_interface/#click-event
[docs-commands]: /docs/extensions/mv3/user_interface/#commands
[docs-content-scripts]: /docs/extensions/mv3/content_scripts
[docs-context-menu]: /docs/extensions/mv3/user_interface/#context_menu
[docs-debugging]: /docs/extensions/mv3/tut_debugging
[docs-dev-guide]: /docs/extensions/mv3/devguide
[docs-ext-pages]: /docs/extensions/mv3/user_interface/#pages
[docs-get-started]: /docs/extensions/mv3/getstarted
[docs-key]: /docs/extensions/mv3/tut_oauth/#keep-consistent-id
[docs-link-options]: /docs/extensions/mv3/options/#linking
[docs-manifest]: /docs/extensions/mv3/manifest
[docs-messages]: /docs/extensions/mv3/messaging
[docs-omnibox]: /docs/extensions/mv3/user_interface/#omnibox
[docs-options]: /docs/extensions/mv3/options
[docs-popup]: /docs/extensions/mv3/user_interface#popup
[docs-promises]: /docs/extensions/mv3/promises/
[docs-service-worker]: /docs/extensions/mv3/service_workers
[docs-ui]: /docs/extensions/mv3/user_interface
[docs-unpacked]: /docs/extensions/mv3/getstarted/#unpacked
[docs-web-acc-res]: /docs/extensions/mv3/manifest/web_accessible_resources/
[incognito-data]: /docs/extensions/mv3/user_privacy/#data-incognito
[manifest-incognito]: /docs/extensions/mv3/manifest/incognito/
[mdn-indexeddb]: https://developer.mozilla.org/docs/Web/API/IndexedDB_API
[mdn-web-apis]: https://developer.mozilla.org/docs/Web/API
[mdn-window-open]: https://developer.mozilla.org/docs/Web/API/Window/open
[sample-getting-started]: https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/getting-started
[section-apis]: #apis
[section-bg]: #background_script
[section-cs]: #contentScripts
[section-icons]: #icons
[section-manifest]: #manifest
[section-options]: #optionsPage
[section-ui]: #pages
[section-web-res]: #web-resources
[webdev-imports]: https://web.dev/es-modules-in-sw/#static-imports-only
