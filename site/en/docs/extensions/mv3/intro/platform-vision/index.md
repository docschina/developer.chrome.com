---
layout: 'layouts/doc-post.njk'
<<<<<<< HEAD

# The page title. This appears at the top of the doc and as the page name
# in Google Search.
title: 扩展程序平台愿景

# This appears in the ToC of the project landing page at
# /docs/[project-name]/. It also appears in the <meta description> used in
# Google Search.
description: '扩展程序平台的发展方向和原因'

# The publish date
date: 2020-11-09
# An optional updated date
# updated: 2020-10-16

# A list of authors. These usernames correspond to the keys in the
# _data/authorsData.json file.
---

Chrome 扩展程序是 Chrome 浏览器最受欢迎和最常用的功能之一。扩展程序可以为不同的用户群体解决无数的问题，并且它们以一种特殊的形式正在成为大多数浏览器的主要功能。

扩展程序有一个蓬勃发展的开发人员社区，有几十万个已发布的扩展，拥有强大的用户基础，每天数百万个扩展程序下载量。我们将继续改进和扩展这个充满活力的生态系统。
=======
title: Extensions platform vision
description: 'Where the extensions platform is headed and why'
date: 2020-11-09
---

{% Partial 'extensions/mv3-support.md' %}

Chrome extensions are one of the most-loved and most-used features of the
Chrome browser.  Extensions can solve a myriad of use cases for a diverse set
of users, and in one form or another they are becoming a staple feature of most
major browsers.

There's a thriving extension developer community, with hundreds of thousands of
published extensions, a strong user base, and millions of extensions downloaded
every day. We're going to continue improving and extending this vibrant
ecosystem.
>>>>>>> 6364c034c4c2523d0186c2ac7d59f51d99cad11d

本页介绍了我们对 Chrome 扩展程序平台的长期愿景。这有助于开发人员了解并接受扩展平台的未来方向。

## 历史背景

只要有 Web 浏览器，就有各种形式的浏览器扩展需求。扩展程序提供了一种很好的方法来增强用户的能力，通过添加专门的功能并使浏览器更好地满足特定用户的需求。

Chrome 扩展程序平台基于 Web 模型（Webby Model），以最大限度地减少开发人员参与的障碍。它还希望为通过使用 Web 构建技术和 Web 的安全模型，让核心比以前更安全。

<<<<<<< HEAD
后来，Chrome 扩展程序引入了一种权限模型，使用户能够更精细地控制他们安装的任何扩展程序，选择可以访问哪些信息和资源。扩展程序平台还在单独的进程中对扩展进行沙盒处理，从而提供额外的安全性。
=======
Later, Chrome extensions introduced a permissions model to give users
finer-grained control over what information and resources could be accessed by any
extensions they install. The extensions platform also sandboxed extensions in
separate processes, providing additional security.
>>>>>>> 6364c034c4c2523d0186c2ac7d59f51d99cad11d

<figure>
  {% Img src="image/SHhb2PDKzXTggPGAYpv8JgR81pX2/1604880385879.svg", alt="Diagram of timeline from previous efforts through current state and future directions", width="574", height="119" %}
  <figcaption>Where we've been, where we are, and where we're going.</figcaption>
</figure>

<<<<<<< HEAD
开发人员使用我们的平台构建了一系列精彩的扩展程序，为 Chrome 用户提供了各种浏览器体验增强的功能。但是，扩展平台的强大能力有时会被滥用：不恰当地获得对用户数据和元数据。我们看到了扩展程序在隐私和安全性方面的改进空间，我们继续专注于性能提升，同时提高扩展能力并保持网络的开发性。
=======
Developers have used our platforms to build a wonderful range of extensions,
providing Chrome users with all kinds of enhancements to the browser experience.
But the power of the extensions platform has sometimes
been exploited to gain inappropriate access to user data and metadata. We see
scope for improvement in the privacy and security of extensions; we also intend
to focus on performance, while improving extension capabilities
and preserving webbiness.
>>>>>>> 6364c034c4c2523d0186c2ac7d59f51d99cad11d

## 我们发展的方向

Chrome 扩展程序平台会不断发展。我们专注侧重改进安全、性能和隐私，同时保留或继承扩展程序的功能，并保持 Webby 开发人员的体验。

<<<<<<< HEAD
{%
  Img src='image/SHhb2PDKzXTggPGAYpv8JgR81pX2/1604881144327.svg',
  alt='将隐私、安全性和性能作为支柱显示在 Webbiness 和性能基础之上的图表',
  width='426',
  height='345'
%}

**隐私 Privacy** 在无需持续访问用户数据的情况下，提供扩展程序正常运行的方法。改进用户对权限的控制，通知用户扩展程序正在执行的操作，让他们在运行时和上下文中授予权限。

**安全 Security** 访问扩展程序上下文之外的资源，提供更严格的协议和扩展要求。

**性能 Performance** 确保扩展程序在所有设备上都能正常运行：性能问题不会降低浏览器体验，即使安装了许多扩展程序，Chrome 也能平稳运行。

**Webbiness** 采用 Web 平台的做事方式，帮助降低开发人员参与的障碍，并随着 Web 平台的不断发展而受益。

**功能 Capability** 保持平台功能强大和丰富的功能，以便扩展程序可以继续改进并为用户提供更大的价值。
=======
The Chrome extensions platform continues to evolve. The specific course we're
plotting focuses on improvements to security, performance, and privacy,
while preserving or extending the capabilities of extensions and keeping a
webby developer experience.




<figure>
  {%
    Img src='image/SHhb2PDKzXTggPGAYpv8JgR81pX2/1604881144327.svg', 
    alt='Diagram showing privacy, security, and performance as pillars atop a foundation of webbiness and performance', 
    width='426', 
    height='345'
  %}
  <figcaption>Where we're headed</figcaption>
</figure>

**Privacy**&mdash;Provides ways for extensions to work well without the need
to persistently access user data.
Improve user control of permissions by informing users what extensions are
doing, letting them grant permissions at runtime and in context.

**Security**&mdash;Moves toward stricter protocols and requirements for
extensions to access resources outside the extension context.

**Performance**&mdash;Ensures that extensions work well on all devices, meaning:
performance issues don't detract from the browser experience, and Chrome
runs smoothly even when many extensions are installed.

**Webbiness**&mdash;Embraces the web platform way of doing things, helping to
lower barriers to developer engagement and benefit as the web platform continues to evolve.

**Capabilities**&mdash;Overall, keeps the platform capable, powerful, and
feature-rich so extensions can continue to improve and deliver ever-greater
value to users.
>>>>>>> 6364c034c4c2523d0186c2ac7d59f51d99cad11d

## 开发人员和用户体验

持续发展的扩展程序平台，也会让开发人员和最终用户体验得到匹配的发展。以下各节介绍了我们将要追求的一些特定功能途径。

### 提高用户可见性和控制力

扩展程序平台将提供更强大的用户可见性和控制力，以便用户可以更轻松地管理扩展程序访问其数据和其他资源的方式。该平台已经开始通过以下方式解决这个问题：

<<<<<<< HEAD
- 允许用户修改授予扩展的本机权限
- 扩展菜单显示哪些项目可以访问或想要访问当前页面

我们将继续改进此用户体验。寻求对临时性的，上下文风格的权限授予的日益重视，以限制对用户数据的访问。[activeTab](/extensions/activeTab) 的引入是朝着这个方向迈出的第一步。
=======
* Letting the user modify the host permissions granted to extensions.
* An extensions menu showing which items can or want to access the current page.

We'll continue to improve this user experience. Look for an increasing emphasis
on temporary, in-context style of permissions grants, constraining passive
access to user data. The introduction of
[`activeTab`](/extensions/activeTab) was an initial
step in this direction.
>>>>>>> 6364c034c4c2523d0186c2ac7d59f51d99cad11d

用户对如何处理其数据做出正确的决策也很重要。我们将介绍新的方法，帮助用户了解每个扩展程序访问的数据，以及它如何使用这些数据，以便用户可以控制他们的数据。

### 用户数据访问的新方法

许多扩展程序依赖于对用户数据的持久访问：用户在安装时授予访问权限，然后扩展可以随时访问数据。我们正在摆脱这种持久访问的模式。相反，我们希望允许用户临时授予权限，并且仅在需要权限的上下文中授予权限。

除此之外，我们还将提供新的 API 功能，以帮助扩展程序在不需要数据访问的情况下执行工作。Chrome 的[declarativeNetRequest](/extensions/declarativeNetRequest) 就是一个使用这种方法的例子。

<<<<<<< HEAD
### 更好地与 Web 平台保持一致
=======
Beyond that, we'll be providing new API features to help
extensions perform work without requiring data access. The
[`declarativeNetRequest`](/extensions/declarativeNetRequest) API
is an example of this approach.
>>>>>>> 6364c034c4c2523d0186c2ac7d59f51d99cad11d

Chrome 扩展程序的开发会持续使用和扩展 web 构建技术。这有助于最大限度地减少开发人员参与的障碍。除了提供特定于扩展的技术之外，还寻求进一步采用开放式 Web 功能。

如果 [Open Web](https://www.w3.org/wiki/Open_Web_Platform) 已经提供了一种实现功能的方法，扩展程序平台将优先采用该方法而不是特定于扩展的方法。

不仅仅是 service workers 和 promises，扩展程序平台在实现时继续采用当代 Web 技术和方法。我们的目的是与开放网络趋同，而不是偏离开放网络。

<<<<<<< HEAD
### 扩展的功能

当然，我们将继续改进扩展程序平台，甚至超越这一愿景中表达的具体目标。扩展平台将不断发展，以解决新的使用场景，添加功能，并在新的 Web 功能出现时采用它们。
=======
When the [open web](https://www.w3.org/wiki/Open_Web_Platform) provides
a way to achieve a result, the extensions platform will adopt that approach
in preference to an extensions-specific approach.

Beyond service workers and promises, expect the extensions platform to continue
adopting contemporary web technologies and approaches as they come about. Our
intention is to converge with, rather than diverge from, the open web.
>>>>>>> 6364c034c4c2523d0186c2ac7d59f51d99cad11d

### 支持这些目标的新政策

<<<<<<< HEAD
扩展程序平台和 Chrome 网上应用商店将推出新的政策来支持此愿景中描述的目标。这些政策将鼓励开发人员和最终用户之间就扩展使用的权限进行更清晰的沟通。查找需要披露、限制访问用户数据的上下文，以及更好地实施扩展单一用途的新策略。

## Manifest V3

本文提出的愿景代表了一个战略方向——就像指南针方向或北极星一样。Manifest V3 及其相关功能是朝着这一战略方向迈出的重要一步。
=======
And of course we'll continue to improve the extensions platform, even beyond
the specific goals expressed in this vision. The extensions platform will
evolve to address new use cases, add capabilities, and embrace new web features
as they come about.

### New policies to support these objectives

The extensions platform and the Chrome Web Store will introduce new policies to
support the objectives described in this vision. These policies will encourage
clearer communication between developers and users about the privileges
that extensions use. Look for new policies that require disclosures, constrain
the context for accessing user data, and better enforce the extensions
single purpose policy.

## Manifest V3

The vision set forth in this article represents a strategic direction, like a
compass heading or north star. Manifest V3 and its associated features
are a major step in this strategic direction. 
>>>>>>> 6364c034c4c2523d0186c2ac7d59f51d99cad11d

想要了解 Manifest V3 本身及其功能，请参阅 [Manifest V3 概述](/docs/extensions/mv3/intro/mv3-overview)。

### Manifest V3 相关更改

有许多功能实际上不是 Manifest V3 的内容，但计划在同一时间范围内发布。这些功能与 Manifest V3 相关，因为它们施加了 Manifest V3 旨在解决的新要求。

发布的这些新功能里，一个关键功能是更改授予本机权限的方式。同样，这不是 Manifest V3 功能，但它确实激发了 Manifest V3 更改。预计这些变化将在 2021 年初出现。

一些初步举措已经发布：

- 修改扩展程序的本机访问权限的功能（请参阅 [默认情况下值得信赖的 Chrome 扩展程序](https://blog.chromium.org/2018/10/trustworthy-chrome-extensions-by-default.html)）。
- 将扩展程序移出右键单击菜单，转移到扩展程序菜单上的按钮（请参阅 [扩展程序的新位置](https://blog.google/products/chrome/more-intuitive-privacy-and-security-controls-chrome/#:~:text=A%20new%20home%20for%20your%20extensions) ）。

### 未来相关变化

接下来，我们将默认本机权限更改为可选，用户明确需要同意才能授予网站访问权限。我们还将为用户提供将权限授予推迟到运行时的新方法，以便用户了解所请求权限的上下文。这些更改旨在为用户提供更大的权限可见性。
