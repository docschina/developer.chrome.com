---
layout: 'layouts/blog-post.njk'
title: Deprecations and removals in Chrome 78
description: >
  A round up of the deprecations and removals in Chrome 78 to help you plan.
authors:
  - joemedley
date: 2019-09-19
updated: 2019-10-10
---
{% Aside %}
Visit ChromeStatus.com for lists of 
<a href="https://www.chromestatus.com/features#browsers.chrome.status%3A%22Deprecated%22">current deprecations</a>
and <a href="https://www.chromestatus.com/features#browsers.chrome.status:%22Removed%22">previous removals</a>.  
{% endAside %}

## XSS Auditor

XSS Auditor has been removed from Chromeß. The XSS Auditor can introduce
cross-site information leaks and mechanisms to bypass the Auditor are widely
known.

[Intent to Remove](https://groups.google.com/a/chromium.org/d/topic/blink-dev/TuYw-EZhO9g/discussion) &#124;
[Chrome Platform Status](https://www.chromestatus.com/feature/5021976655560704) &#124;
[Chromium Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=968591)

## Deprecation policy


To keep the platform healthy, we sometimes remove APIs from the Web Platform which have run their course. There can be many reasons why we would remove an
API, such as:

- They are superseded by newer APIs.
- They are updated to reflect changes to specifications to bring alignment and consistency with other browsers.
- They are early experiments that never came to fruition in other browsers and thus can increase the burden of support for web developers.


Some of these changes will have an effect on a very small number of sites. To mitigate issues ahead of time, we try to give developers advanced notice so they can make the required changes to keep their sites running.

Chrome currently has a <a href="http://www.chromium.org/blink#TOC-Launch-Process:-Deprecation"> process for deprecations and removals of API's</a>, essentially:


- Announce on the <a href="https://groups.google.com/a/chromium.org/forum/#!forum/blink-dev">blink-dev</a> mailing list.
- Set warnings and give time scales in the Chrome DevTools Console when usage is detected on the page.
- Wait, monitor, and then remove the feature as usage drops.
 


You can find a list of all deprecated features on chromestatus.com using the <a href="https://www.chromestatus.com/features#deprecated"> deprecated filter </a> and removed features by applying the <a href="https://www.chromestatus.com/features#removed">removed filter</a>. We will also try to summarize some of the changes, reasoning, and migration paths in these posts.
