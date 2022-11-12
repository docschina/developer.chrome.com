---
layout: 'layouts/doc-post.njk'
title: '什么是扩展程序？'
date: 2013-02-21
updated: 2021-03-12
description: 概述 Chrome 扩展程序的目的，以及它们是如何开发的。
---

本文简要介绍了 Chrome 扩展程序，并创建一个 Hello, World! 扩展程序。

## 关于扩展程序 {: #intro }

扩展程序是一种可以定制浏览器浏览体验的小型软件程序。它允许用户以多种方式定制 Chrome 的功能和行为，比如：

- 生产力工具
- 丰富网页内容
- 信息聚合
- 更有趣和游戏功能

这些展示扩展程序可以做的一部分事情。查看 [Chrome Web Store][cws] 可以看到更多不同的已发布扩展程序。

### 扩展程序是如何运行的？ {: #basics }

扩展程序是由 HTML、JavaScript 和 CSS 等 Web 技术构建的。它们在单独的沙盒执行环境中运行，并与 Chrome 浏览器交互。

{# TODO: put a diagram here that is useful and helps with context #}
{% if false %}

Consider the context for this -- Chrome runs on a device, connecting the user to resources on the Web, as depicted in this context diagram:

{% Img src="image/SHhb2PDKzXTggPGAYpv8JgR81pX2/5qVlqGn6vVMCWCSRclOY.png", alt="Context diagram of Chrome with an extension", width="517", height="476" %}

Also shown in the diagram is an extension "plugged into" the Chrome browser. The extension can access and modify selected resources and actions in Chrome. There are two aspects to consider:

{% endif %}

扩展程序允许您通过使用 API 修改浏览器行为和访问 web 内容来“扩展”浏览器。扩展程序通过终端用户界面和开发人员 API 进行操作：

<<<<<<< HEAD
**扩展用户界面** - 这为用户管理其扩展提供了一致的方式。

**扩展 API** - [extensions API](/docs/extensions/reference/) 允许扩展程序访问浏览器本身的功能：激活选项卡、修改网络请求等。
=======
The extensions user interface
: Provides a consistent way for users to manage their extensions.

Extensions APIs
: Allow the extension's code to access features of the browser itself: activating tabs, modifying net requests, and so on.
>>>>>>> 5aff6459b1e5d9ff440eac06bbdd4c6a022b152d

要创建扩展程序，你需要组装一些资源： Manifest、JavaScript 和 HTML 文件、图像等来构建扩展程序。对于开发和测试，你可以使用 [扩展程序开发者模式][devmode] 将这些“解压缩的扩展程序”加载到 Chrome 中。一旦扩展开发完成，您可以 [打包并分发给用户][cws-publish]。

### 用户如何获取扩展程序？ {: #getting-extensions }

大多数 Chrome 用户从 [Chrome 网络商店][cws] 获得扩展。全球各地的开发者在 Chrome 网络商店中发布他们的扩展程序，审核之后提供给最终用户。

{% Aside %}

一些组织使用 [企业策略][enterprise policies] 在用户设备上安装扩展程序。这些扩展程序可以从 Chrome Web 商店获取，也可以托管在组织的 Web 服务器上。

{# TODO: See XXX for info on the capabilities and limitations of self hosting. #}

{% endAside %}

您可以通过 [Chrome 开发者面板][dev dashboards] 发布扩展程序，并将其发布到 [ChromeWebStore][cws]。有关更多信息，请参阅 Chrome 网络商店 [开发者文档][cws-docs]。

### 扩展程序政策注意事项 {: #policy }

Chrome 网络商店上的扩展程序必须遵守 [Chrome Web 商店政策][cws-policies]。在开始时，请记住以下几点：

- 扩展程序必须满足狭义定义且易于理解的 [单一目的][single purpose]。一个扩展可以包括多个组件和一系列功能，只要一切都有助于实现一个共同的目的。

  {% Img src="image/SHhb2PDKzXTggPGAYpv8JgR81pX2/XniXB3snAeMvLwI1am3O.png", alt="Screenshot of AMP validator extension pinned", width="169", height="62" %}

- 用户界面应尽量少，并具有实际意义。它们可以是一个简单的图标，如上图所示的 [AMP-validator][amp-validator] 扩展，也可以是用表单打开一个新窗口，如下图所示的[谷歌相似页面][similar-pages-extension] 扩展。

{% Img src="image/SHhb2PDKzXTggPGAYpv8JgR81pX2/oR9iCEgY2889Z3mHHLll.png", alt="Screenshot of Google Similar Pages extension", width="334", height="597" %}

## 开始编写扩展程序 {: #hello-extensions }

通过这个简单的 Hello 扩展程序示例，我们可以迈出一小步。首先创建一个新目录来存储扩展名的文件，或者从[sample page][hello-sample] 下载它们。

接下来，添加一个名为 `manifest.json` 的文件，并包含以下代码：

```json
{
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "manifest_version": 3
}
```

每个扩展程序都需要 manifest ，尽管对大多数扩展程序来说，只有 manifest 做不了什么。回到这个示例，扩展程序有一个弹出窗口和图标，需要在 [‘action‘][action-field] 字段下声明：

```json/5-8
{
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "hello.html",
    "default_icon": "hello_extensions.png"
  }
}
```

下载 [`hello_extensions.png`][hello-uploader]，创建 `hello.html` 文件：

```html
<html>
  <body>
    <h1>Hello Extensions</h1>
  </body>
</html>
```

扩展程序现在点击图标会展示 `hello.html` 页面。接下来在 `manifest.json` 中声明启用快捷键。这个步骤很有趣，也是可选的：

```json/9-17
{
  "name": "Hello Extensions",
  "description": "Base Level Extension",
  "version": "1.0",
  "manifest_version": 3,
  "action": {
    "default_popup": "hello.html",
    "default_icon": "hello_extensions.png"
  },
  "commands": {
    "_execute_action": {
      "suggested_key": {
        "default": "Ctrl+Shift+F",
        "mac": "MacCtrl+Shift+F"
      },
      "description": "Opens hello.html"
    }
  }
}
```

最后一步是在本机上安装扩展程序。

1. 在浏览器中打开 `chrome://extensions` 页面。也可以点击浏览器右上角的菜单按钮，选择 **更多工具** 选项中的 **扩展程序**。
2. 打开右上角的 **开发者模式**。
3. 点击 **加载已解压的扩展程序**，然后选择 `Hello Extensions` 扩展程序所在的文件夹。

恭喜！你现在可以通过点击 `hello_world.png` 图标或者 `Ctrl+Shift+F` 快捷键打开扩展程序的弹出窗口。

## 下一步做什么？ {: #How-do-I-start }

1. 访问 [入门指导教程][getstarted-tut]
1. 探索 [扩展程序案例][extension samples]
1. 订阅 [chromium-extensions Google group][crx-group]

[amp-validator]: https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc
[action-field]: /docs/extensions/reference/action
[crx-group]: http://groups.google.com/a/chromium.org/group/chromium-extensions
[cws]: https://chrome.google.com/webstore
[cws-docs]: /docs/webstore
[cws-policies]: /docs/webstore/program-policies/
[cws-publish]: /docs/webstore/publish/
[devmode]: /docs/extensions/mv3/getstarted/#manifest
[dev-dashboard]: https://chrome.google.com/webstore/devconsole
[enterprise policies]: https://cloud.google.com/docs/chrome-enterprise/policies/
[extension samples]: https://github.com/GoogleChrome/chrome-extensions-samples
[getstarted-tut]: /docs/extensions/mv3/getstarted
[hello-sample]: /docs/extensions/mv3/samples#search:hello
[hello-uploader]: https://storage.googleapis.com/web-dev-uploads/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/gmKIT88Ha1z8VBMJFOOH.png
[similar-pages-extension]: https://chrome.google.com/webstore/detail/google-similar-pages/pjnfggphgdjblhfjaphkjhfpiiekbbej
[single purpose]: /docs/extensions/mv3/single_purpose
