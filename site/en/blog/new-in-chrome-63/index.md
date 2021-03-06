---
title: New in Chrome 63
description: >
  Chrome 63 allows you to import JavaScript modules dynamically. My favorite
  interview coding question becomes a piece of cake with async iterators and
  generators. And you can override the browser's default overflow scroll
  behavior with the CSS overscroll-behavior property.
layout: 'layouts/blog-post.njk'
date: 2017-12-05
authors:
  - petelepage
hero: 'image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/O1GZuSi8FJUp5tcRRgiV.png'
alt: 'Cropped Chrome logo on the left, version number on the right.'
tags:
  - new-in-chrome
  - chrome-63
---

{% YouTube id='F3_-jTLaFSs' %}

* Chrome 63 allows you to import [JavaScript modules dynamically](#dynamic).
* My favorite interview coding question becomes a piece of cake with
  [async iterators and generators](#iterators-generators).
* You can override the browser's default overflow scroll behavior with
  the CSS [`overscroll-behavior`](#overscroll) property.
* And we've changed the way users are prompted for
  [permission requests](#permissions)

And there's [plenty more](#more)!

I'm [Pete LePage](https://petelepage.com/). Let's dive in and see what's new for developers in Chrome 63!

Want the full list of changes? Check out the
[Chromium source repository change list](https://chromium.googlesource.com/chromium/src/+log/62.0.3202.62..63.0.3239.84).

## Dynamic module imports {: #dynamic }

Importing JavaScript modules is super handy, but it's static, you can't
import modules based on runtime conditions.

Thankfully, that changes in Chrome 63, with the new
[dynamic import syntax](https://tc39.github.io/proposal-dynamic-import/). It
allows you to [dynamically load code](https://dynamic-import.firebaseapp.com/news)
into modules and scripts at runtime. It can be used to lazy load a script
only when it's needed, improving the performance of your application.

```js
button.addEventListener('click', event => {
  import('./dialogBox.js')
  .then(dialogBox => {
    dialogBox.open();
  })
  .catch(error => {
    /* Error handling */
  });
});
```

Instead of loading your whole application when the user first hits your page,
you can grab the resources you need to sign in. Your initial load is small
and screaming fast. Then once the user signs in, load the rest, and you're
good to go.

## Async iterators and generators {: #iterators-generators }

Writing code that does any sort of iteration with `async` functions can be ugly.
In fact, it's the core part of my favorite interview coding question.

Now, with
[async generator functions](https://jakearchibald.com/2017/async-iterators-and-generators/)
and the [async iteration](http://2ality.com/2016/10/asynchronous-iteration.html)
[protocol](https://ponyfoo.com/articles/javascript-asynchronous-iteration-proposal),
consumption or implementation of streaming data sources becomes streamlined,
and my coding question becomes much easier.

```js
async function* getChunkSizes(url) {
  const response = await fetch(url);
  const b = response.body;
  for await (const chunk of magic(b)) {
    yield chunk.length;
  }
}
```

Async iterators can be used in `for-of` loops and also to create your own
custom async iterators through async iterator factories.

## Over-scroll behavior {: #overscroll }

Scrolling is one of the most fundamental ways to interact with a page, but
certain patterns can be tricky to deal with. For example, the browsers
[pull to refresh](https://developers.google.com/web/updates/2017/11/overscroll-behavior#p2r) feature,
where swiping down at the top of the page, does a hard reload.

{% Columns %}
{% Column %}
{% Video src="video/0g2WvpbGRGdVs0aAPc6ObG7gkud2/XHUGqmZs8LZdCKZS0mpa.mp4", autoplay="true", muted="true", loop="true" %}
Before, with full page refresh.
{% endColumn %}
{% Column %}
{% Video src="video/0g2WvpbGRGdVs0aAPc6ObG7gkud2/VgYcDIroTPSPhzWoMRuQ.mp4", autoplay="true", muted="true", loop="true" %}
After, refresh only the content.
{% endColumn %}
{% endColumns %}

In some cases, you might want to override that behavior and provide your own
experience. That's what [Twitter's progressive web app](https://mobile.twitter.com)
does, when you pull down, instead of reloading the whole the page, it simply
adds any new tweets to the current view.

Chrome 63 now supports the CSS
[`overscroll-behavior`](https://developers.google.com/web/updates/2017/11/overscroll-behavior)
property, making it easy to override the browser's default overflow scroll behavior.

You can use it to:

* Cancel scroll chaining
* [Disable or customize the pull-to-refresh action](https://developers.google.com/web/updates/2017/11/overscroll-behavior#disablp2r)
* [Disable rubber banding effects on iOS](https://developers.google.com/web/updates/2017/11/overscroll-behavior#disableglow)
* Add swipe navigations
* And more...

The best part, `overscroll-behavior` doesn't have a negative effect on your
page performance!

## Permission UI changes {: #permissions }

{% Img src="image/0g2WvpbGRGdVs0aAPc6ObG7gkud2/M1qtkctKj1pjGmSTbInN.jpg", alt="", class="float-right", height="491", width="800" %}

I love web push notifications but I've been really frustrated by the number of
sites asking for permission on page load, without any context - and I'm not
alone.

90% of all permission requests are ignored or temporarily blocked.

In Chrome 59, we started to address this problem by
[temporarily blocking](https://www.chromestatus.com/feature/6443143280984064)
a permission if the user dismissed the request three times. Now in m63,
Chrome for Android will make permission requests modal dialogs.

Remember, this isn't just for push notifications, this is for **all
permission requests**. If you ask permission at the [appropriate time
and in context](https://developers.google.com/web/fundamentals/push-notifications/permission-ux),
we've found that users are two and a half times more likely to grant permission!

## And more! {: #more }

These are just a few of the changes in Chrome 63 for developers, of course,
there's plenty more.

* [`finally`](https://developers.google.com/web/updates/2017/10/promise-finally)
  is now available on `Promise` instances and is invoked after a `Promise` has
  been fulfilled or rejected.
* The new
  [Device Memory JavaScript API](https://github.com/w3c/device-memory#the-web-exposed-api)
  helps you understand performance constraints by giving you hints about the
  total amount of RAM on the user's device. You can tailor your experience at
  runtime, reducing complexity on lower end devices, providing users a better
  experience with fewer frustrations.
* The [`Intl.PluralRules` API](https://developers.google.com/web/updates/2017/10/intl-pluralrules) allows
  you to build applications that understand pluralization of a given language
  by indicating which plural form applies for a given number, and language.
  And can help with ordinal numbers.

Be sure to [subscribe](https://goo.gl/6FP1a5) to our
[YouTube channel](https://www.youtube.com/user/ChromeDevelopers/), and
you'll get an email notification whenever we launch a new video.

I'm Pete LePage, and as soon as Chrome 64 is released, I'll be right
here to tell you -- what's new in Chrome!
