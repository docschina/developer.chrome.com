---
layout: 'layouts/doc-post.njk'

# The page title. This appears at the top of the doc and as the page name
# in Google Search.
title: Manifest V3 概述

# This appears below the title and is an optional teaser
subhead: 'Manifest V3 的主要变化和新增特性'

# This appears in the ToC of the project landing page at
# /docs/[project-name]/. It also appears in the <meta description> used in
# Google Search.
description: '介绍 Manifest V3 引入的特性新增和变更。'

# The publish date
date: 2020-11-09

# An optional updated date
updated: 2021-10-03

# A list of authors. These usernames correspond to the keys in the
# _data/authorsData.json file.

---
Manifest V3 是我们迈向[拓展平台愿景](/docs/extensions/mv3/intro/platform-vision/)的重要一步。Manifest V3 专注于愿景的三大支柱：隐私性，安全性和性能，并保持和提高基础能力和"实现 Web 化"（指用 Web 技术实现扩展程序）。

本文总结了 Manifest V3 引入的特性新增和变更。
为了帮助大家迁移 Manifest V2 扩展程序到 Manifest V3 或者更好地理解这些变化的结构影响，请看[Manifest V3 迁移指南](/docs/extensions/mv3/intro/mv3-migration/).

Manifest V3 在 Chrome
[88](https://chromiumdash.appspot.com/schedule) 就可以使用了，以及 Chrome Web Store 在 2021 年 1 月开始支持 Manifest V3 的插件。

新增特性以及变更会持续地添加到 Manifest V3 中，同时和 Manifest V2 保持表现一致。


## 特性汇总 {: #feature-summary }

下面是一些 Manifest 支持的功新增和变更的特性：

* [Service workers](#service-workers) 代替背景页。
* [修改网络请求](#network-request-modification) 目前使用 [declarativeNetRequest](/docs/extensions/reference/declarativeNetRequest) API 处理。
* [远程加载代码](#remotely-hosted-code) 不再被支持；插件只允许加载自己代码文件里面的 Javascript。
* [Promise](#promises) 支持被添加到很多方法中，但仍然支持回调作为可选方案。（我们最终会在所有合适的方法中支持 promises）
* 还在 Manifest V3 中引入了一些相对来说比较 [小的特性](#other-features)。
后续的段落会总结每一个变更。

## 核心特性 {: #major-features }
本段落将介绍 Manifest V3 最为重要和最有影响力的特性。

### Service workers {: #service-workers }

Manifest V3 使用 service works 代替背景页。

liang

Like their web page counterparts, extension service workers listen for and
respond to events in order to enhance the end user's experience. For web
service workers this typically means managing cache, preloading resources, and
enabling offline web pages. While extension service workers can still do all of
this, the extension package already contains a bundle of resources that can be
accessed offline. As such, extension service workers tend to focus on reacting
to relevant browser events exposed by Chrome's extensions APIs.


### Network request modification {: #network-request-modification }

The way that extensions can modify network requests is changing in Manifest V3. There's
a new [declarativeNetRequest](/docs/extensions/reference/declarativeNetRequest)
API which lets extensions modify and block network requests in a
privacy-preserving and performant way. The essence of this API is:

*   Rather than intercepting a request and modifying it procedurally, the extension asks Chrome to evaluate and modify requests on its behalf.
*   The extension declares a set of rules: patterns to match requests and actions to perform when matched. The browser then modifies network requests as defined by these rules.

Using this declarative approach dramatically reduces the need for persistent host permissions.

{% Aside %}
Some extensions may still require broad host permissions for certain use cases
(such as redirecting requests). See [Conditional permissions and
declarativeNetRequest](/docs/extensions/mv3/intro/mv3-migration#declarativenetrequest-conditional-perms)
for further details.
{% endAside %}

The blocking version of the
[webRequest](/docs/extensions/reference/webRequest)
API is restricted to force-installed extensions in Manifest V3. This is because of
issues with the blocking webRequest approach:

*   **Privacy**: This requires excessive access to user data, because extensions need to read each network request made for the user.
*   **Performance**: Serializing & deserializing data across multiple process hops & the C++/JS boundary adds up.
*   **Compatibility**: Does not work well with event-based background execution as it requires the service worker to be running to handle every request.

This means that developers can implement many common use cases, such as content
blocking functionality, without requiring any host permissions.


### Remotely hosted code {: #remotely-hosted-code }

A key security improvement in Manifest V3 is that extensions can't load remote code
like JavaScript or Wasm files. This lets us more reliably and efficiently
review the safe behavior of extensions when they're submitted to the Chrome Web
Store. Specifically, all logic must be included in the extension's package.

Instead of remote code, we recommend the use of remote configuration files. See
the [migration guide](/docs/extensions/mv3/intro/mv3-migration#remotely-hosted-code)
for more about how to work with this change.


### Promises {: #promises }

Manifest V3 provides first-class support for promises: many popular APIs support
promises now, and we will eventually support promises on all appropriate
methods.

You can use promise chains, as well as async/await. If you provide a callback
to an API method, this prevents the promise from being returned. Therefore you
can defer this part of your migration until you're ready, or begin using
promises immediately.

Some scenarios, such as event listeners, will still require callbacks.


## 其他功能 {: #other-features }

There are a number of other changes introduced in Manifest V3:

* [Action API consolidation](/docs/extensions/mv3/intro/mv3-migration#action-api-unification):
  The Browser Action and Page Action APIs are unified into a single Action API.
* [Web accessible resources](/docs/extensions/mv3/intro/mv3-migration#web-accessible-resources): These resources are now available only to specified sites and extensions.
* [Content security policy (CSP)](/docs/extensions/mv3/intro/mv3-migration#content-security-policy): You now specify separate CSP for different execution contexts in a single object, and certain policies are disallowed.
* [executeScript() changes](/docs/extensions/mv3/intro/mv3-migration#executing-arbitrary-strings): Extensions can no longer execute arbitrary strings, only script files and functions. This method is also migrating from the Tabs API to the new Scripting API.

The following features will be added to Manifest V3 soon:

* **Dynamic content scripts:** the new [Scripting API][1] lets extensions register and unregister content scripts at runtime.
* **New favicon API:** this new JavaScript API replaces "chrome://favicons" and gives  developers a way to retrieve websites' favicons.
* **In-memory storage:** a new StorageArea on the Storage API that can be used to store values in memory across service worker restarts.

Look for announcements of these and other Manifest V3 features as they become available.

[1]: /docs/extensions/reference/scripting/
