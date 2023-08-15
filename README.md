# developer.chrome.com

developer.chrome.com is the ultimate resource for developers of all backgrounds
to learn about what's new in Chrome!

## 针对中文翻译贡献者

### 翻译准备

如果你只是关注 Chrome Extension 文档的翻译，可以参考下面简化流程的操作：

- 参考 **Building the site** 准备开发环境，并且安装依赖。
- Fork 本仓库，并且执行 `git clone` 操作。
- 参考 **Set up build flags** 新建 `.env` 文件并且粘贴示例代码，记得设置 `ELEVENTY_IGNORE_DOCS=false` 和 `ELEVENTY_IGNORE_EXTENSIONS=false` ，也可以直接使用下面给出的代码。
- 执行 `npm run dev` 启动本地预览，[http://localhost:8080/](http://localhost:8080/)。

```text
# Ignore ALL /docs/
ELEVENTY_IGNORE_DOCS=false

# Only ignore /docs/android/
ELEVENTY_IGNORE_ANDROID=true

# Only ignore /docs/apps/
ELEVENTY_IGNORE_APPS=true

# Only ignore /docs/devtools/
ELEVENTY_IGNORE_DEVTOOLS=true

# Only ignore /docs/extensions/
ELEVENTY_IGNORE_EXTENSIONS=false

# Only ignore /docs/handbook/
ELEVENTY_IGNORE_HANDBOOK=true

# Only ignore /docs/lighthouse/
ELEVENTY_IGNORE_LIGHTHOUSE=true

# Only ignore /docs/multidevice/
ELEVENTY_IGNORE_MULTIDEVICE=true

# Only ignore /docs/native-client/
ELEVENTY_IGNORE_NACL=true

# Only ignore /docs/privacy-sandbox/
ELEVENTY_IGNORE_PRIVACY_SANDBOX=true

# Only ignore /docs/versionhistory/
ELEVENTY_IGNORE_VERSIONHISTORY=true

# Only ignore /docs/webstore/
ELEVENTY_IGNORE_WEBSTORE=true

# Only ignore /docs/workbox/
ELEVENTY_IGNORE_WORKBOX=true

# Ignore BLOG /blog/
ELEVENTY_IGNORE_BLOG=true
```

### 认领翻译和翻译、润色

翻译文章前，请访问 [Github Issues](https://github.com/docschina/developer.chrome.com/issues?q=is%3Aopen+is%3Aissue) 进行任务认领，方便标记贡献者，也避免重复翻译。

流程大致如下，老手可以忽略：

- 访问 Issues 查看待认领任务，确认没有其他人认领的情况下，声明认领，回复 issue 即可。
- Fork 并本地运行项目，创建切换翻译分支。细节待补充。
- 提交推送，提交 PR 等待 Review
- 根据 Review 的要求进行修改，并重新提交新的记录。

## Building the site 🏗

You'll need a recent version of [Node](https://nodejs.org/): v14 (LTS) or higher.
To check your node version run `node -v` in your terminal.

If you don't have node, or if you need to upgrade, we recommend using the [Node
Version Manager (nvm)](https://github.com/nvm-sh/nvm).

### Clone the repo

⚠️ If you'd like to contribute (and you're not a member of the core team), be sure to fork the repo first, and clone the fork.

```bash
git clone https://github.com/GoogleChrome/developer.chrome.com.git
```

### Install dependencies

```bash
npm ci
```

### Set up build flags

Building the entire site can take a while because it's over a thousand pages.
If you want to _massively_ speed up your build times, we suggest setting some
build flags to ignore certain sections.

WARNING: By default, in dev we ignore all translated docs (all docs outside of /en/ directory).
To include them back, use `ELEVENTY_INCLUDE_TRANSLATED=true` env variable.

- Create a `.env` file at the root of your project
- Optionally add the following:

```text
# Ignore ALL /docs/
ELEVENTY_IGNORE_DOCS=true

# Only ignore /docs/android/
ELEVENTY_IGNORE_ANDROID=true

# Only ignore /docs/apps/
ELEVENTY_IGNORE_APPS=true

# Only ignore /docs/devtools/
ELEVENTY_IGNORE_DEVTOOLS=true

# Only ignore /docs/extensions/
ELEVENTY_IGNORE_EXTENSIONS=true

# Only ignore /docs/handbook/
ELEVENTY_IGNORE_HANDBOOK=true

# Only ignore /docs/lighthouse/
ELEVENTY_IGNORE_LIGHTHOUSE=true

# Only ignore /docs/multidevice/
ELEVENTY_IGNORE_MULTIDEVICE=true

# Only ignore /docs/native-client/
ELEVENTY_IGNORE_NACL=true

# Only ignore /docs/privacy-sandbox/
ELEVENTY_IGNORE_PRIVACY_SANDBOX=true

# Only ignore /docs/versionhistory/
ELEVENTY_IGNORE_VERSIONHISTORY=true

# Only ignore /docs/webstore/
ELEVENTY_IGNORE_WEBSTORE=true

# Only ignore /docs/workbox/
ELEVENTY_IGNORE_WORKBOX=true

# Ignore BLOG /blog/
ELEVENTY_IGNORE_BLOG=true
```

To build only a specific component, start with the above `.env` file and change the value for the
component you wish to build. You can comment it out, or set it to `0` or `false`.

### Start a local server to preview the site

```bash
npm run dev
```

Open `http://localhost:8080/` to see the site locally. Changes to assets will
rebuild the site. Refresh to see your changes.

### Run linters to address bugs

Before you push your branch, find and address any errors.

```bash
npm run lint
```

## Environments 🌳

To do a production build of the site and start the local server
run `npm run production && npm start`.

## Staging 🕺

When you send in a pull request it will be automatically staged for you. Keep an
eye out for the netlify bot to comment on the pull request with your unique URL.

(Googlers only) If you would like to stage your _local_ changes to a unique URL,
run the command `npm run stage:personal`. This can be useful if you're not ready
to create a pull request yet, or if you need to stage something private.

☝️ You will need to be a member of our GCP project for this command to work.

## Deploying the site 🚀

### Automatic deploys

The site will build and deploy the `main` branch automatically every hour,
Mon–Fri. If you've just merged an article then it should go live at the top
of the next hour.
