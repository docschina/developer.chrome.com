---
layout: 'layouts/doc-post.njk'
title: '架构概述'
seoTitle: 'Chrome Extensions architecture overview'
date: 2012-09-18
<<<<<<< HEAD
updated: 2023-01-10
description: Chrome 扩展架构的高级说明。
subhead: Chrome 扩展架构的高级解释。
=======
updated: 2023-05-30
description: A high-level explanation of the architecture of Chrome Extensions.
subhead: A high-level explanation of the structure of a Chrome Extension.
>>>>>>> 3c1071901a6476ee3c21c0c3b837914205f171cd
anchorRedirects:
  view_page: /docs/extensions/mv3/options/#view_page
  files: /docs/extensions/mv3/content_scripts/#files
---

## 概览 {: #overview }

Chrome 扩展由不同的部分组成，本页描述了扩展的结构、每个部分扮演的角色以及它们如何协同工作，并不会描述如何编写扩展的代码级细节。

如果您不熟悉 Chrome 扩展开发，我们建议您先阅读 [Extensions 101][doc-ext-101] 和[开发基础][doc-dev-basics]。

## Chrome 扩展的结构 {: #arch }

以下部分描述了组成 Chrome 扩展的文件。以下是 Chrome 扩展文件结构的示例：

<figure>
{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/Txq5CxeXjQz7i4wmP8zO.png", alt="An example of a Chrome Extension directory structure", width="400", height="1189" %}
  <figcaption>
  An example of a Chrome extension file structure
  </figcaption>
</figure>

### Manifest {: #manifest }

manifest(`manifest.json`) 是 Chrome 扩展的配置文件，它是一个必需的 JSON 文件，必须位于项目的[根目录][dev-basics-structure]，它为浏览器提供了扩展的蓝图，其中包含重要信息，例如：

- 扩展的名称、它的作用描述、当前版本号以及要使用的图标。
- 扩展所需的 [Chrome API][api-ref] 密钥和 [权限 permissions][doc-perms]。
- 分配为 service worker 的文件、popup HTML 文件、选项页（options page）、内容脚本（content scripts）等。

<<<<<<< HEAD
[Manifest keys][doc-manifest] 一文包含默认和可选属性的完整列表。完整 [Manifest 示例][doc-manifest-examples]。
=======
The [Manifest keys][doc-manifest] article contains the complete list of default and optional keys. For ready to use code samples, check out the [Manifest examples][doc-manifest-examples].
>>>>>>> 3c1071901a6476ee3c21c0c3b837914205f171cd

### service worker {: #background_script }

扩展的 Service Worker（`service-worker.js`）是浏览器在后台运行的基于事件的脚本，通常用于处理数据，协调扩展不同部分的任务，以及作为扩展的事件管理器。例如，Service Worker 可以在首次安装扩展、创建新选项卡、添加新书签、单击扩展工具栏图标等时侦听并对事件做出反应。

Service Worker 可以访问所有的 [Extension API][api-ref]，但作为 [Worker][mdn-worker] 类型，它不能使用文档的全局 Window 对象提供的 DOM API。它也在自己的环境中运行，因此它不能直接修改网页的内容。

有关详细信息，请参阅[处理扩展 Service Worker 中的事件][doc-sw]。

### 内容脚本 {: #content-scripts }

扩展使用内容脚本（`content-script.js`）将代码注入主机页面，它们允许扩展与浏览器中的页面进行交互和修改，例如，它们可以在页面上插入一个新元素、更改网站的样式、修改 [DOM][mdn-dom] 等。

{% Aside 'key-term' %}
**主机页面 Host pages** 是内容脚本与之交互的网站。扩展可以通过指定 [匹配模式][doc-match] 来选择内容脚本应该在哪些网站上运行。
{% endAside %}

内容脚本与主机页共享对同一 DOM 树的访问，但在单独的 JavaScript 环境中运行（扩展的[隔离世界][cs-isolated]）。它们还可以访问有限数量的[ChromeAPI][api-ref]。有关详细信息，请参阅[了解内容脚本][doc-content-scripts]。

### 扩展 HTML 页面 {: #html-files }

根据设计，扩展可以有不同的 HTML 页面。所有扩展 HTML 文件都可以使用[Chrome API][api-ref]，但不能包含内联 Javascript；它们必须指向 JavaScript 文件。两种最常见的 HTML 页面是：

[弹出窗口][doc-popup] ：许多扩展使用弹出窗口（`popup.html`）来提供功能，例如显示选项卡列表，或有关当前选项卡的附加信息。用户可以通过单击扩展工具栏图标轻松找到它。当用户导航离开时，它会自动关闭。

[选项页面][doc-options] ：选项页面（`options.html`）为用户提供了自定义扩展的方法，例如选择扩展将在哪些站点上运行，用户可以通过几种方式访问选项页面，如[查找选项页面][doc-options-view] 中所述。

<<<<<<< HEAD
其他扩展 HTML 页面包括[Chrome 覆盖页面][doc-override]、[沙盒页面][doc-sandbox] 或为特定目的（如入职用户）而包含的任何自定义页面。
=======
[Side panels][api-sidepanel]
: A side panel (`sidepanel.html`) can be used to assist users throughout their browsing journey. Users can find extension side panels by navigating to Chrome's side panel UI or by clicking the extension toolbar icon. Side panels can be configured to only be displayed on specific sites.

Other extension HTML pages include [Chrome override pages][doc-override], [sandbox pages][doc-sandbox] or any custom page included for a specific purpose like onboarding the user.
>>>>>>> 3c1071901a6476ee3c21c0c3b837914205f171cd

### 其他资源 {: #assets }

扩展可以包含许多类型的资源，例如图像和字体，但[Chrome Web Store][cws]中托管的扩展只需要[扩展图标][manifest-icons]。此外，[Chrome Web Store 策略][cws-mv3-req] 要求扩展包含扩展在扩展包中执行的所有代码。

## 他们如何一起工作 {: #interact }

在本节中，我们将描述这些扩展组件如何通信、存储数据和共享对资源的访问。

### 发送消息 {: #pageComm }

很多时候，内容脚本或其他扩展页面需要从扩展 Service Worker 发送或接收信息。在这些情况下，任何一方都可以监听从另一端发送的消息，并在同一通道上做出响应。扩展可以发送一次性请求或建立长期连接以支持多条消息。

有关详细信息，请参阅[消息传递][doc-messages]。

### 存储数据 {: #data }

Chrome 为扩展提供专门的[存储 Storage API][api-storage]，可用于所有扩展组件。它包括用于特定用例的四个独立存储区域和一个事件侦听器 每当数据更新时跟踪。例如，当您在弹出窗口中保存更改时，扩展 Service Worker 可以使用指定的逻辑进行响应。

See [Storage API][api-storage] for usage and code samples.
有关用法和代码示例，请参阅 [Storage API][api-storage]。

### 引用扩展资源 {: #ref-files }

扩展 HTML 页面可以使用与常规 HTML 页面相同的标签来添加扩展资产。内容脚本还可以访问扩展资源，例如图像和字体，但需要额外的步骤 这在[访问内容脚本中的扩展文件][doc-ref] 中描述。

## 下一步{: #next-steps }

Now that you have completed the [Getting Started guides][doc-gs] and understand the structure of a Chrome extension, you are ready to dive deeper with the following resources:

现在您已经完成了 [入门指南][doc-gs] 并了解了 Chrome 扩展的结构，您可以使用以下资源深入了解：

- 了解可以在 Chrome 扩展中使用的[UI 元素][doc-ui]。
- 浏览[Chrome 扩展功能][doc-dev-guide] 的完整列表。
- 了解构建尊重[用户隐私][doc-privacy] 的[安全扩展][doc-secure]的最佳实践。

[api-ref]: /docs/extensions/reference
[api-sidepanel]: /docs/extensions/reference/sidePanel
[api-storage]: /docs/extensions/reference/storage
[cs-isolated]: /docs/extensions/mv3/content_scripts/#isolated_world
[cws-mv3-req]: /docs/webstore/program-policies/mv3-requirements/
[cws]: https://chrome.google.com/webstore/
[dev-basics-structure]: /docs/extensions/mv3/getstarted/development-basics/#structure
[doc-content-scripts]: /docs/extensions/mv3/content_scripts
[doc-dev-basics]: /docs/extensions/mv3/getstarted/development-basics
[doc-dev-guide]: /docs/extensions/mv3/devguide
[doc-ext-101]: /docs/extensions/mv3/getstarted/extensions-101
[doc-gs]: /docs/extensions/mv3/getstarted
[doc-manifest-examples]: /docs/extensions/mv3/manifest#manifest-examples
[doc-manifest]: /docs/extensions/mv3/manifest
[doc-match]: /docs/extensions/mv3/match_patterns/
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