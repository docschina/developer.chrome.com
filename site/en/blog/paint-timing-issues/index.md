---
layout: 'layouts/blog-post.njk'
title: Chrome 69 Paint Timing Issues
description: >
  Chrome 69 includes an incorrect change to our paint-timing metrics, which was intended to capture more of the rendering pipeline, but resulted in some inaccurate timestamps.
date: 2018-10-12
updated: 2018-10-15
authors:
  - tdresser
hero: 'image/C47gYyWYVMMhDmtYSLOWazuyePF2/lZWGLWfTSOpdn9rAN5cr.png'
alt: >
  Warning sign
---

Chrome 69 includes an incorrect change to our
[paint-timing](https://developer.mozilla.org/docs/Web/API/PerformancePaintTiming)
metrics, which was intended to capture more of the rendering pipeline, but
resulted in some inaccurate timestamps.

This introduced two issues with the first-paint and first-contentful-paint
metrics, which may show up in your site's analytics.

- A small number of incorrectly high values.
- About 5% of samples are incorrectly reported as having a 0 value.

To address this, we recommend that you ignore samples with a 0 value and avoid
looking at percentiles above 99% and the mean.

The frequency of incorrectly high values is low enough that it's unlikely to
affect percentiles below the 99.5'th percentile. However, the mean and other
statistics influenced heavily by outliers may show significant skew.

The increased number of 0 values results in significant inaccuracies in low
percentiles (0-10%).

Percentiles from 50-99% should continue to be reliable, and the data will return
to normal in Chrome 70.

If a site you own runs into issues analyzing paint-timing data for Chrome 69,
don't hesitate to reach out to
[speed-metrics-dev@chromium.org](mailto:speed-metrics-dev@chromium.org).
For the nitty gritty details, see this
[Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=870707).
