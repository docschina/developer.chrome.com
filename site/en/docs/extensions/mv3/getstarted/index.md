---
layout: 'layouts/doc-post.njk'
title: 'Getting started'
date: 2014-02-28
updated: 2022-05-19
description: 手把手介绍如何创建 Chrome 扩展程序。
---

{# TODO: Reword this intro. "Components" is probably not the best word to use here any more as "web
components" are a cross-browser tech for creating reusable custom elements or "components". #}

Chrome 扩展程序由一堆不同（但彼此有联系）的组件组成的。组件包括 [后台脚本 background scripts][1]，[注入脚本 content scripts][2]，一个 [选项页面 options page][3]，[UI 元素 UI elements][4] 组成。扩展程序由 web 开发者熟悉的技术栈制作：HTML/CSS/Javascript。扩展程序所需的组件取决于要实现的功能，不一定包含所有内容。

本教程会构建一个扩展程序，允许用户改变当前活动页面的背景颜色。它会使用扩展程序平台中的很多组件，演示彼此之间的关联。

开始之前，创建一个新的目录来保存扩展程序的文件。

完成后的扩展程序可以在 [这里下载][6]。

## 创建 manifest 清单 {: #manifest }

先创建 [manifest][7]。创建一个叫做 `manifest.json` 的文件，包含下面的代码。

```json
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3
}
```

### 加载已解压的扩展程序 {: #unpacked }

在开发者模式中，如果文件夹中包含 mainfest 文件就可以视为一个扩展程序。如果要在开发模式中加载已解压的 extension ，按照下面步骤操作：

1.  导航到 `chrome://extensions` 打开扩展程序管理页面。

    - 或者，通过点击扩展程序菜单按钮，然后选择菜单底部的 **管理扩展程序** 打开此页面。
    - 或者，点击 Chrome 菜单，选择 **更多工具** 下面的 **扩展程序** 打开此页面。

2.  通过切换 **开发者模式** 按钮开启开发者模式。
3.  点击 **加载已解压的扩展程序** 按钮，选择扩展程序文件夹。

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/vOu7iPbaapkALed96rzN.png", alt="加载一个已解压的扩展程序", width="563", height="355" %}

哈哈！扩展程序已经成功安装。因为没有在 manifest 中声明图标，所以会展示一个默认的扩展程序图标。

## 添加功能 {: #background }

这个扩展程序虽然安装成功，但是没有声明哪些功能可以执行。接下来我们添加一些代码实现存储背景颜色的功能。

### 在 manifest 中注册后台脚本 background script {: #background-manifest }

后台脚本 Background scripts 和其他组件一样需要首先在 manifest 中注册：声明扩展程序需要引用哪些文件，并编写对应代码：

```json/5-7
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  }
}
```

Chrome 浏览器现在知道当前扩展程序包含一个 Service Worker 脚本。当你重新加载扩展程序时候，浏览器会扫描加载对应的文件，比如监听某些重要的事件。

### 创建后台脚本 {: #background-script }

这个扩展程序安装后会立刻持久化存储一个变量。 首先在后台脚本中添加 [`runtime.onInstalled`][11] 事件监听器。在 `onInstalled` 监听器内部，通过[storage][12] API 声明一个值。这可以让其他扩展程序组件可以读取并更新该值。在扩展程序目录创建一个 `background.js` 文件，添加如下代码：

```js
// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({color});
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
```

### 添加 storage 权限 {: #storage-permission }

包括 [storage][12] API 在内的大多数 API，都必须在 manifest 中的 `"permissions"` 字段下声明注册，表示扩展程序会使用对应功能。

```json/8
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["storage"]
}
```

### 检查后台脚本是否生效 {: #inspect-background }

回到扩展程序管理页面，点击 **更新** 按钮。会出现一个新字段 **查看视图**，并且蓝色链接可打开 \*\*service worker\*\* 页面。

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/dx9EpIKK949olhe8qraK.png", alt="查看视图查看视图Inspect views", width="566", height="353" %}

点击链接会打开后台脚本的控制台 console，会看到 “`Default background color set to green`” 日志提示。

## 引入用户界面 {: #user_interface }

[用户界面][4] 可以让扩展程序有更多形式。接下来会使用 [提示 popup][15] 功能。创建添加一个 `popup.html` 文件到目录中。页面中展示一个按钮，点击后会改变背景色。

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="button.css" />
  </head>
  <body>
    <button id="changeColor"></button>
  </body>
</html>
```

和后台脚本一样，这个文件需要在 manifest 中声明，让浏览器能够识别。接下来在 manifest 中添加 [`action`][17] 对象，把 `default_popup` 设置为 `popup.html`。

```json/9-11
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["storage"],
  "action": {
    "default_popup": "popup.html"
  }
}
```

在 `popup.html` 中引用外部 css 文件： `button.css`。在目录中创建该文件，添加下面代码：

```css
button {
  height: 30px;
  width: 30px;
  outline: none;
  margin: 10px;
  border: none;
  border-radius: 2px;
}

button.current {
  box-shadow: 0 0 0 2px white, 0 0 0 4px black;
}
```

扩展程序在工具栏中展示的图标也需要再 `action` 中的 `default_icon` 字段设置。[点击这里][18]下载图片并解压，放入目录中。之后更新 manifest 设置如何使用这些图片：

```json/11-16
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["storage"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "/images/get_started16.png",
      "32": "/images/get_started32.png",
      "48": "/images/get_started48.png",
      "128": "/images/get_started128.png"
    }
  }
}
```

扩展程序还会在扩展程序管理页面、权限告警、favicon 中展示图标。在 [`icons`][19] 字段添加这些内容：

```json/18-23
{
  "name": "Getting Started Example",
  "description": "Build an Extension!",
  "version": "1.0",
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["storage"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "/images/get_started16.png",
      "32": "/images/get_started32.png",
      "48": "/images/get_started48.png",
      "128": "/images/get_started128.png"
    }
  },
  "icons": {
    "16": "/images/get_started16.png",
    "32": "/images/get_started32.png",
    "48": "/images/get_started48.png",
    "128": "/images/get_started128.png"
  }
}
```

默认情况下，扩展显示在扩展程序菜单（拼图块）中。可以点击固定，扩展将在工具栏中显示该图标。

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/GdHNy255kS4hWD5vb1fc.png", alt="在工具栏中钉住扩展", width="502", height="278" %}

现在重新加载扩展，将会展示图标而不是之前的默认图标了，点击图标将会弹出一个窗口，其中有一个显示默认颜色的按钮。

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/ku5Z8MMssgw6MKctpJVI.png", alt="Popup", width="187", height="153" %}

最后一步，给按钮设定颜色。在目录中创建 `popup.js` 文件添加下面代码：

```js
// Initialize button with user's preferred color
let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', ({color}) => {
  changeColor.style.backgroundColor = color;
});
```

`popup.html` 中的按钮将会获取按钮元素，从存储中获取颜色值，并设置为按钮的背景色。在 `popup.html` 中添加一个脚本 `popup.js`:

```html/7
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="button.css">
  </head>
  <body>
    <button id="changeColor"></button>
    <script src="popup.js"></script>
  </body>
</html>
```

重新加载扩展程序，可以看到绿色的按钮。

## 逻辑层 Layer logic {: #logic }

现在扩展可以展示自定义图标，弹出窗口，获取存储的值，把按钮设置背景色。接下来，我们进一步完善交互逻辑。更新 `popup.js` 文件添加下面代码：

```js
// 单击按钮时，注入 setPageBackgroundColor 变量到页面中
changeColor.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: setPageBackgroundColor,
  });
});

// 函数体会作为一个内容脚本在当前页面执行
function setPageBackgroundColor() {
  chrome.storage.sync.get('color', ({color}) => {
    document.body.style.backgroundColor = color;
  });
}
```

更新后的代码给按钮添加了 `click` 事件监听器，会触发 [程序注入内容改脚本][24]。这会让当前页面的背景色和按钮颜色相同。使用程序注入的方式允许用户手动触发脚本内容，而不是自动插入当前页面用户不知情的代码。

manifest 需要使用 `activeTab`][25] 权限来允许扩展临时访问当前页面，同时还需要 [`scripting`][26] 权限才能使用 [`executeScript`][27] 方法。

```json/3
{
  "name": "Getting Started Example",
  ...
  "permissions": ["storage", "activeTab", "scripting"],
  ...
}
```

现在扩展已经可以正常运行了，重新加载扩展，刷新当前页面，点击图标，点击弹窗中的按钮，会把背景改成绿色！用户可能想把背景色改成其他颜色。

{% Aside 'gotchas' %}
Extensions can not inject content scripts on internal Chrome pages like "chrome://extensions". Be sure to try out the extension on a real webpage like [https://google.com](https://google.com).

扩展无法在内部 Chrome 网页（如 “chrome://extensions” ）上注入内容脚本。请务必在真实的网页上试用该扩展，例如[https://google.com](https://google.com）。

{% endAside %}

## 允许用户修改选项 {: #options }

该扩展目前仅允许用户将背景更改为绿色。通过添加**选项页 Options Page**，用户可以更好地控制扩展的功能，从而进一步自定义其浏览体验。

首先在目录中创建 `options.html` 文件，并包含以下代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="button.css" />
  </head>
  <body>
    <div id="buttonDiv"></div>
    <div>
      <p>Choose a different background color!</p>
    </div>
    <script src="options.js"></script>
  </body>
</html>
```

然后再 manifest 中注册选项页面：

```json/3
{
  "name": "Getting Started Example",
  ...
  "options_page": "options.html"
}
```

重新加载扩展并右键单击工具栏中的扩展图标，然后选择 **选项**”。或者，单击 “详细信息” 并向下滚动到详细信息页面，然后选择 **扩展程序选项**。

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/aV46PP8KCjEqqenSJxxp.png", alt="单击右键打开选项页面", width="248", height="260" %}

最后一步是添加选项逻辑。在扩展的目录中创建一个名为 `options.js` 的文件，添加下面代码：

```js
let page = document.getElementById('buttonDiv');
let selectedClassName = 'current';
const presetButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

// 按钮点击会标记所选按钮并保存选择
function handleButtonClick(event) {
  // 从先前选择的颜色中删除样式

  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // 标记选中的按钮
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({color});
}

// 为页面添加每种提供颜色的按钮
function constructOptions(buttonColors) {
  chrome.storage.sync.get('color', data => {
    let currentColor = data.color;
    // 提供的每种颜色...
    for (let buttonColor of buttonColors) {
      // …创建按钮并设定颜色…
      let button = document.createElement('button');
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      // …标记当前选中的颜色…
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      // ...注册一个侦听器，单击该按钮时触发

      button.addEventListener('click', handleButtonClick);
      page.appendChild(button);
    }
  });
}

// 通过构造颜色选项初始化页面
constructOptions(presetButtonColors);
```

提供四个颜色选项，然后在选项页面上生成按钮，注册 onclick 事件侦听器。当用户单击按钮时，它会更新扩展存储中的颜色值。由于扩展的所有文件都从此存储中提取颜色信息，因此不需要更新其他值。

## 再进一步 {: #next-steps }

祝贺！该目录现在包含一个功能齐全但功能简单的 Chrome 扩展程序。

接下来做什么？

- [Chrome 扩展概述][30] 备份了一点，并补充了有关扩展程序架构的大量细节，以及开发人员希望熟悉的一些特定概念。
- 在 [调试教程][31] 中了解可用于调试扩展的选项。
- Chrome 扩展程序可以访问功能强大的 API，而不仅仅是开放网络上可用的 API。[chrome.\* API 文档][32] 将介绍每个 API。
- [开发人员指南][33] 有几十个额外的链接，指向如何创建高级扩展。

[1]: /docs/extensions/mv3/background_pages
[2]: /docs/extensions/mv3/content_scripts
[3]: /docs/extensions/mv3/options
[4]: /docs/extensions/mv3/user_interface
[6]: https://storage.googleapis.com/web-dev-uploads/file/WlD8wC6g8khYWPJUsQceQkhXSlv1/SVxMBoc5P3f6YV3O7Xbu.zip
[7]: /docs/extensions/mv3/manifest
[11]: /docs/extensions/reference/runtime#event-onInstalled
[12]: /docs/extensions/reference/storage
[15]: /docs/extensions/mv3/user_interface#popup
[17]: /docs/extensions/reference/action
[18]: https://storage.googleapis.com/web-dev-uploads/file/WlD8wC6g8khYWPJUsQceQkhXSlv1/wy3lvPQdeJn4iqHmI0Rp.zip
[19]: /docs/extensions/mv3/user_interface#icons
[20]: /docs/extensions/reference/declarativeContent
[24]: /docs/extensions/mv3/content_scripts/#programmatic
[25]: /docs/extensions/mv3/manifest/activeTab
[26]: /docs/extensions/reference/scripting
[27]: /docs/extensions/reference/scripting#method-executeScript
[30]: /docs/extensions/mv3/overview
[31]: /docs/extensions/mv3/tut_debugging
[32]: /docs/extensions/reference
[33]: /docs/extensions/mv3/devguide
