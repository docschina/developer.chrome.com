---
layout: 'layouts/doc-post.njk'
title: 'Getting started'
date: 2014-02-28
updated: 2022-05-19
description: 手把手介绍如何创建 Chrome 拓展程序。
---

{# TODO: Reword this intro. "Components" is probably not the best word to use here any more as "web
components" are a cross-browser tech for creating reusable custom elements or "components". #}

Chrome 拓展由一堆不同（但彼此有联系）的组件组成的。组件包括 [后台脚本 background scripts][1]，[注入脚本 content scripts][2]，一个 [选项页面 options page][3]，[UI 元素 UI elements][4] 组成。拓展由 web 开发者熟悉的技术栈制作：HTML/CSS/Javascript。拓展所需的组件取决于要实现的功能，不一定包含所有内容。

本教程会构建一个拓展，允许用户改变当前活动页面的背景颜色。它会使用拓展平台中的很多组件，演示彼此之间的关联。

开始之前，创建一个新的目录来保存拓展的文件。

完成后的拓展程序可以在 [这里下载][6]。

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

### 加载已解压的拓展程序 {: #unpacked }

在开发者模式中，如果文件夹中包含 mainfest 文件就可以视为一个拓展。如果要在开发模式中加载已解压的 extension ，按照下面步骤操作：

1.  导航到 `chrome://extensions` 打开拓展程序管理页面。

    - 或者，通过点击拓展程序菜单按钮，然后选择菜单底部的 **管理拓展程序** 打开此页面。
    - 或者，点击 Chrome 菜单，选择 **更多工具** 下面的 **拓展程序** 打开此页面。

2.  通过切换 **开发者模式** 按钮开启开发者模式。
3.  点击 **加载已解压的扩展程序** 按钮，选择拓展文件夹。

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/vOu7iPbaapkALed96rzN.png", alt="加载一个已解压的拓展", width="563", height="355" %}

哈哈！拓展已经成功安装。因为没有在 manifest 中声明图标，所以会展示一个默认的拓展图标。

## 添加功能 {: #background }

这个拓展虽然安装成功，但是没有声明哪些功能可以执行。接下来我们添加一些代码实现存储背景颜色的功能。

### 在 manifest 中注册后台脚本 background script {: #background-manifest }

后台脚本 Background scripts 和其他组件一样需要首先在 manifest 中注册：声明拓展需要引用哪些文件，并编写对应代码：

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

Chrome 浏览器现在知道当前拓展包含一个 Service Worker 脚本。当你重新加载拓展时候，浏览器会扫描加载对应的文件，比如监听某些重要的事件。

### 创建后台脚本 {: #background-script }

这个拓展安装后会立刻持久化存储一个变量。 首先在后台脚本中添加 [`runtime.onInstalled`][11] 事件监听器。在 `onInstalled` 监听器内部，通过[storage][12] API 声明一个值。这可以让其他拓展组件可以读取并更新该值。在拓展目录创建一个 `background.js` 文件，添加如下代码：

```js
// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({color});
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
```

### 添加 storage 权限 {: #storage-permission }

包括 [storage][12] API 在内的大多数 API，都必须在 manifest 中的 `"permissions"` 字段下声明注册，表示拓展会使用对应功能。

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

回到拓展管理页面，点击 **更新** 按钮。会出现一个新字段 **查看视图**，并且蓝色链接可打开 \*\*service worker\*\* 页面。

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/dx9EpIKK949olhe8qraK.png", alt="查看视图查看视图Inspect views", width="566", height="353" %}

点击链接会打开后台脚本的控制台 console，会看到 “`Default background color set to green`” 日志提示。

## 引入用户界面 {: #user_interface }

[用户界面][4] 可以让拓展有更多形式。接下来会使用 [提示 popup][15] 功能。创建添加一个 `popup.html` 文件到目录中。页面中展示一个按钮，点击后会改变背景色。

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

拓展在工具栏中展示的图标也需要再 `action` 中的 `default_icon` 字段设置。[点击这里][18]下载图片并解压，放入目录中。之后更新 manifest 设置如何使用这些图片：

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

拓展还会在拓展管理页面、权限告警、favicon 中展示图标。在 [`icons`][19] 字段添加这些内容：

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

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/GdHNy255kS4hWD5vb1fc.png", alt="Pin the extension to the toolbar", width="502", height="278" %}

If the extension is reloaded at this stage, it will include the provided icon rather than the
default placeholder, and clicking the action will open a popup that displays a button showing the default color.

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/ku5Z8MMssgw6MKctpJVI.png", alt="Popup", width="187", height="153" %}

The last step for the popup UI is adding color to the button. Create and add a file named
`popup.js` with the following code to the extension's directory.

```js
// Initialize button with user's preferred color
let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', ({color}) => {
  changeColor.style.backgroundColor = color;
});
```

This code grabs the button from `popup.html` and requests the color value from storage. It then
applies the color as the background of the button. Include a script tag to `popup.js` in
`popup.html`.

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

Reload the extension to view the green button.

## Layer logic {: #logic }

The extension now has a custom icon and a popup, and it colors the popup button based on a value
saved to the extension's storage. Next, it needs logic for further user interaction. Update
`popup.js` by adding the following to the end of the file.

```js
// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({active: true, currentWindow: true});

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get('color', ({color}) => {
    document.body.style.backgroundColor = color;
  });
}
```

The updated code adds a `click` event listener to the button, which triggers a [programmatically
injected content script][24]. This turns the background color of the page the same color as the
button. Using programmatic injection allows for user-invoked content scripts, instead of auto
inserting unwanted code into web pages.

The manifest will need the [`activeTab`][25] permission to allow the extension temporary access to
the current page, and the [`scripting`][26] permission to use the Scripting API's
[`executeScript`][27] method.

```json/3
{
  "name": "Getting Started Example",
  ...
  "permissions": ["storage", "activeTab", "scripting"],
  ...
}
```

The extension is now fully functional! Reload the extension, refresh this page, open the popup and
click the button to turn it green! However, some users may want to change the background to a
different color.

{% Aside 'gotchas' %}
Extensions can not inject content scripts on internal Chrome pages like "chrome://extensions". Be
sure to try out the extension on a real webpage like [https://google.com](https://google.com).
{% endAside %}

## Give users options {: #options }

The extension currently only allows users to change the background to green. Including an options
page gives users more control over the extension's functionality, further customizing their browsing
experience.

Start by creating a file in the directory named `options.html` and include the following code.

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

Then register the options page in the manifest,

```json/3
{
  "name": "Getting Started Example",
  ...
  "options_page": "options.html"
}
```

Reload the extension and right-click the extension icon in the toolbar then select **Options**. Alternatively, click DETAILS and scroll down the details page and select **Extension options**.

{% Img src="image/BhuKGJaIeLNPW9ehns59NfwqKxF2/aV46PP8KCjEqqenSJxxp.png", alt="Right click to open the options page", width="248", height="260" %}

The last step is to add the options logic. Create a file named `options.js` in the extension's
directory with the following code.

```js
let page = document.getElementById('buttonDiv');
let selectedClassName = 'current';
const presetButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({color});
}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get('color', data => {
    let currentColor = data.color;
    // For each color we were provided…
    for (let buttonColor of buttonColors) {
      // …create a button with that color…
      let button = document.createElement('button');
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      // …mark the currently selected color…
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      // …and register a listener for when that button is clicked
      button.addEventListener('click', handleButtonClick);
      page.appendChild(button);
    }
  });
}

// Initialize the page by constructing the color options
constructOptions(presetButtonColors);
```

Four color options are provided then generated as buttons on the options page with onclick event
listeners. When the user clicks a button, it updates the color value in the extension's storage.
Since all of the extension's files pull the color information from this storage, no other values
need to be updated.

## Take the next step {: #next-steps }

Congratulations! The directory now holds a fully-functional, albeit simplistic, Chrome extension.

What's next?

- The [Chrome Extension Overview][30] backs up a bit, and fills in a lot of detail about the
  Extensions architecture in general, and some specific concepts developers will want to be familiar
  with.
- Learn about the options available for debugging Extensions in the [debugging tutorial][31].
- Chrome Extensions have access to powerful APIs above and beyond what's available on the open web.
  The [chrome.\* APIs documentation][32] will walk through each API.
- The [developer's guide][33] has dozens of additional links to pieces of documentation relevant to
  advanced extension creation.

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
