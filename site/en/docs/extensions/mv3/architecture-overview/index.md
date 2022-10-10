---
layout: "layouts/doc-post.njk"
title: "架构概述"
date: 2012-09-18
updated: 2022-05-13
description: Chrome 扩展程序的软件架构的高级解释。
subhead: Chrome 扩展程序的软件架构的高级解释。
---

扩展程序是 HTML、CSS、JavaScript、图像和 Web 平台中使用的其他文件的压缩包。扩展程序可以修改用户看到并与之交互的 Web 内容。扩展程序还可以扩展和更改浏览器本身的行为。

本页简要介绍了可能构成扩展程序的一部分的文件、如何访问这些文件、如何使用 Chrome API、扩展文件如何通信以及如何存储数据。

## 架构 {: #arch }

扩展程序的架构将取决于其功能，但所有扩展都必须包含 [清单][部分清单] 中所包含的内容。扩展程序可以包含的其他组件如下：

- [服务人员][section-bg]
- [工具栏图标][section-icons]
- [UI 元素][section-ui]
- [内容脚本][section-cs]
- [选项页面][section-options]

### 清单{: #manifest }

名为 `manifest.json` 的清单文件为浏览器提供了有关扩展的信息，例如哪些文件是最重要的文件和扩展可能使用的功能。

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

### 服务人员{: #background_script }

Service Worker 是扩展程序的事件处理程序：它包含对扩展程序很重要的浏览器事件的侦听器。它最开始处于休眠状态，直到触发事件然后执行指示的逻辑；它仅在需要时加载并在空闲时卸载。只要 Service Worker 在 `manifest.json` 中声明所需的权限，那么久可以访问所有 [Chrome API][section-apis]。

请参阅 [使用 Service Workers][docs-service-worker] 了解更多信息。

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
- [上下文菜单][docs-context-menu]。
- [omnibox][docs-omnibox]。
- [键盘快捷键][文档命令]。
- 桌面 [通知][api-notif]。
- [文字转语音][api-tts]。
- 自定义 UI 注入 [页面][docs-content-scripts]。

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

您可以展示未在清单中声明的扩展程序中存在的其他 HTML 文件。这些 HTML 文件可以访问与弹出窗口或其他扩展文件相同的 [Chrome API][section-apis]。

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

您可以在扩展管理页面 **chrome://extensions** 中找到 `<code><var>EXTENSION_ID</var></code>`。 `<code><var>RELATIVE_PATH</var></code>` 是相对于扩展程序的顶部文件夹。

{% Aside 'key-term' %}

The **extension ID** is a 32-character alpha string that identifies an extension in the browser and
on the Chrome Web Store.

{% endAside %}

During development, a new ID is generated when an [_unpacked extension_][docs-unpacked] is loaded,
unless the `"key"` property is [set in the manifest][docs-key].

{% Aside 'caution' %}

All assets that content scripts and websites want to access must be declared under
[`web_accessible_resources`][section-web-res] key in the manifest.

{% endAside %}

### Web-accesible resources {: #web-resources }

Web-accessible resources are files (images, HTML, CSS, Javascript) inside an extension that can be
accessed by a content script, web pages, or other extensions. 

You can declare which resources are exposed and to what origins in the
manifest:

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

See [Web-accesible resources][docs-web-acc-res] for usage information.

## Using Chrome APIs {: #apis }

In addition to having access to the same [web APIs][mdn-web-apis] as web pages, extensions can also
use [extension-specific APIs][api-reference] that create tight integration with the browser. For
example, both extensions and webpages can access the standard [`window.open()`][mdn-window-open]
method to open a URL, but extensions can specify which window that URL should be displayed in by
using [chrome.tabs.create()][api-create-tab] instead.

For more information, explore the [Chrome API reference docs][api-reference].

### Asynchronous vs. synchronous methods {: #async-sync }

#### Callbacks {: #callbacks }

Most Chrome API methods are asynchronous: they return immediately without waiting for the operation
to finish. If an extension needs to know the outcome of an asynchronous operation it can pass a
callback function into the method. The callback is executed later, potentially much later, after the
method returns.

A method is asynchronous when the callback parameter is available in its signature.

```js
// Signature for an asynchronous method
chrome.tabs.query(object queryInfo, function callback)
```

If the extension needed to navigate the user's currently selected tab to a new URL, it would need to
get the current tab's ID and then update that tab's address to the new URL.

If the [tabs.query][api-tabs-query] method were synchronous, it may look something like below.

{% Compare 'worse' %}
```js
let tab = chrome.tabs.query(queryOptions); //WRONG!!!
chrome.tabs.update(tab.id, {url:newUrl});
someOtherFunction();
```
{% CompareCaption %}

This approach will fail because `query()` is **asynchronous**. It returns without waiting for the
work to complete, and does not return a value.

{% endCompareCaption %}

{% endCompare %}

To correctly query a tab and update its URL the extension must use the callback parameter.

{% Compare 'better' %}
```js
chrome.tabs.query(queryOptions, function(tabs) {
  chrome.tabs.update(tabs[0].id, {url: newUrl});
});
someOtherFunction();
```

{% endCompare %}

In the above code, the lines are executed in the following order: 1, 4, 2. The callback function
specified to `query()` is called and then executes line 2, but only after information about the
currently selected tab is available. This happens sometime after `query()` returns. Although
`update()` is asynchronous the code doesn't use a callback parameter, since the extension doesn't do
anything with the results of the update.

#### Promises {: #async }

With the introduction of Manifest V3, many extension API methods now return promises. Not all
methods in extensions APIs support promises. You can verify whether a method supports promises by
checking its API reference page.

```js
// Promise
chrome.tabs.query(queryOptions)
.then((tabs) => {
  chrome.tabs.update(tabs[0].id, {url: newUrl});
  someOtherFunction();
});

// async-await
async function queryTab() {
  let tabs = await chrome.tabs.query(queryOptions});
  chrome.tabs.update(tabs[0].id, {url: newUrl});
  someOtherFunction();
}
```

See [Using promises][docs-promises] to learn more.

#### Synchronous methods {: #sync }

```js
// Synchronous methods have no callback
const imgUrl = chrome.runtime.getURL("images/icon.png")
```

This method synchronously returns the URL as a `string` and performs no other asynchronous work.

## Communication between pages {: #pageComm }

Different components in an extension can communicate with each other using [message
passing][docs-messages]. Either side can listen for messages sent from the other end, and respond on
the same channel. 

## Saving data {: #data}

The chrome storage API has been optimized to meet the specific storage needs of extensions. For
example, whenever data is updated, you can use the `onChanged()` event to track these changes. All
extension components have access to this API. An extension can also store data using the web API
[indexedDB][mdn-indexeddb].

See [storage API][api-storage] for usage and examples.

## Incognito mode {: #incognito}

Extensions don't run in incognito windows unless the user manually allows it in the extension's
settings page. By default, normal and incognito windows run in a single shared process. However,
extensions can run incognito windows in their own separate process or not support incognito windows
at all. You can specify this behavior in the ["incognito"][manifest-incognito] key in the manifest.

See [Saving data in incognito mode][incognito-data] to understand how to protect user privacy.

## Take the next step {: #next-steps }

After reading the overview and completing the [Getting started][docs-get-started] tutorial, you
should be ready to start writing your own extensions! Dive deeper into the world of custom Chrome
with the following resources:

- Learn how to debug Extensions in the [debugging tutorial][docs-debugging].
- Chrome Extensions have access to powerful APIs above and beyond what's available on the open web.
  The [chrome APIs documentation][api-reference] will walk through each API.
- The [developer's guide][docs-dev-guide] has dozens of additional links to pieces of documentation
  relevant to advanced extension creation.

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
[mdn-web-apis]: https://developer.mozilla.org/docs/Web/API
[mdn-indexeddb]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[mdn-window-open]: https://developer.mozilla.org/docs/Web/API/Window/open
[sample-getting-started]:
    https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/tutorials/getting-started
[section-apis]: #apis
[section-bg]: #background_script
[section-cs]: #contentScripts
[section-icons]: #icons
[section-manifest]: #manifest
[section-options]: #optionsPage
[section-ui]: #pages
[section-web-res]: #web-resources
[incognito-data]: /docs/extensions/mv3/user_privacy/#data-incognito
[manifest-incognito]: /docs/extensions/mv3/manifest/incognito/
