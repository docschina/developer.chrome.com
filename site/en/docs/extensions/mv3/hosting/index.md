---
layout: "layouts/doc-post.njk"
<<<<<<< HEAD
title: "托管扩展程序"
=======
title: "Extension hosting"
seoTitle: "Chrome Extension hosting"
>>>>>>> 610d6f679b4c5a6f95b4395f2a9e9e9f512b4fc4
date: 2012-09-18
updated: 2021-12-10
description: 如何托管您的 Chrome 扩展程序。
---

<!--
Reframe this to focus explicitly on hosting.

2 options:

- CWS
- Self-hosting

CWS is by far the most common

note that during development you can also load unpacked.
-->

安装 Chrome 扩展有多种方法，但官方仅支持两种分发机制。

[Chrome 应用商店][cws-about]

: Chrome 应用商店是 Chrome 扩展程序和主题的在线市场。在 Chrome 应用商店注册的开发人员可以发布他们的扩展程序，并将其提供给世界各地的用户。只有在 Chrome 应用商店上托管和签名的扩展程序才能由用户直接安装。有关如何在 Chrome 应用商店中发布的更多信息，请参阅 [在 Chrome 应用商店中发布][cws-publish] 和 [企业发布选项][cws-enterprise]。

私有托管

: 私有托管是在 Chrome 应用商店之外托管扩展程序的做法。此选项用于系统管理员使用 [企业政策][external-enterprise-policy] 控制 Chrome 的托管环境。 有关如何在您自己的服务器上托管扩展程序的信息，请参阅 [Linux 安装][doc-linux-hosting]。

在这两种情况下，Chrome 都会定期检查扩展程序主机以查找已安装扩展程序的新版本，并在无需用户干预的情况下自动更新它们。

[未打包的扩展程序][doc-load-unpacked] 应该仅用于在开发过程中加载受信任的代码。

{% Aside %}
Linux 用户可以手动安装那些并未经过 Chrome 应用商店分发或签名的打包扩展程序。
{% endAside %}

[cws-about]: /docs/webstore/about_webstore
[cws-enterprise]: /docs/webstore/cws-enterprise
[cws-publish]: /docs/webstore/publish
[doc-linux-hosting]: /docs/extensions/mv3/linux_hosting
[doc-load-unpacked]: /docs/extensions/mv3/getstarted#unpacked
[external-enterprise-policy]: https://chromeenterprise.google/policies/
