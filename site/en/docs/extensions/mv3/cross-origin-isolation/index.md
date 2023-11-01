---
layout: "layouts/doc-post.njk"
title: "跨域隔离"
seoTitle: "Chrome Extensions cross-origin isolation"
date: 2021-08-03
updated: 2021-11-10
description: 扩展程序中的跨域隔离概述
---

[跨域隔离][web-coi-guide] 使网页可以使用 [`SharedArrayBuffer`][mdn-sharedarraybuffer] 等强大功能。扩展程序可以为 [`cross_origin_embedder_policy`][doc-coep] 和 [`cross_origin_opener_policy`][doc-coop] 清单键指定适当的值，以实现跨域隔离。例如，像下面这样的清单将选择扩展程序的来源进行跨域隔离：

```json
{
  "name": "CrossOriginIsolation example",
  "manifest_version": 3,
  "version": "1.1",
  "cross_origin_embedder_policy": {
    "value": "require-corp"
  },
  "cross_origin_opener_policy": {
    "value": "same-origin"
  },
  ...
}
```

<<<<<<< HEAD
跨域隔离将允许扩展程序在其跨域隔离上下文中使用强大的 API，例如 SharedArrayBuffers。然而，它也有一定的副作用。这一部分的内容，请参阅 [使用 COOP 和 COEP 使您的网站实现“跨域隔离”](https://web.dev/coop-coep/) 了解更多信息。

{% Aside 'caution' %}

即使一个扩展程序选择了跨域隔离，也不是所有的扩展程序上下文都是跨域隔离的。例如，目前针对服务和共享工作者的跨域隔离 [未完全实现][crbug-issue]。类似地，常规网页上的跨域隔离扩展程序的 Web 可访问子框架目前不被视为跨域隔离。
=======
Opting into cross-origin isolation allows the extension to use powerful APIs like SharedArrayBuffers
in its cross-origin isolated contexts. However, it does also come with certain side-effects. See
[Making your website "cross-origin isolated" using COOP and COEP](https://web.dev/articles/coop-coep) for
more information on this.

{% Aside 'caution' %}

Even if an extension opts into cross-origin isolation, not all extension contexts will be
cross-origin isolated. For example, cross-origin isolation [is not fully implemented][crbug-issue]
for service and shared workers currently. Similarly, a cross-origin isolated extension's
web-accessible subframe on a regular web page is not considered cross-origin isolated currently.
>>>>>>> 94e478992aef00cd18433b9661d01d715972bd3e

{% endAside %}

[crbug-issue]: https://bugs.chromium.org/p/chromium/issues/detail?id=1131404
[doc-coep]: /docs/extensions/mv3/manifest/cross_origin_embedder_policy
[doc-coop]: /docs/extensions/mv3/manifest/cross_origin_opener_policy
[mdn-sharedarraybuffer]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
[web-coi-guide]: https://web.dev/cross-origin-isolation-guide/
