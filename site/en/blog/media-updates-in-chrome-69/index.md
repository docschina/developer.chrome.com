---
title: Media updates in Chrome 69
description: >
  A round up of media updates in Chrome 69: AV1 and HDCP policy check.
layout: 'layouts/blog-post.njk'
date: 2018-08-01
updated: 2019-02-06
authors:
  - beaufortfrancois
tags:
  - media
  - chrome-69
---

- Chrome supports [AV1 video decoding](#av1).
- Querying [which encryption schemes are supported](#encryption_scheme) through
  EME is now available.
- Web developers can experiment with [querying whether a certain HDCP policy
  can be enforced](#hdcp).
- Media Source Extensions now use [PTS for buffered ranges and duration
  values](#pts).
- Android Go users can [open downloaded audio, video and images in Chrome](#media_intent_handler).
- [Stalled events](#stalled) for media elements using MSE are removed.

## AV1 video decoder {: #av1 }

{% Aside %}
AV1 video decoder support had to be pushed back to [Chrome 70] because of
changes to the MP4 binding.
{% endAside %}

[Chromestatus Tracker](https://www.chromestatus.com/feature/5729898442260480) &#124;
[Chromium Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=838380)

## EME: Querying encryption scheme support {: #encryption_scheme }

Some platforms or key systems only support [CENC mode], while others only support
[CBCS mode]. Still others are able to support both. These two encryption schemes
are incompatible, so web developers must be able to make intelligent choices
about what content to serve.

To avoid having to determine which platform they're on to check for "known"
encryption scheme support, a new `encryptionScheme` key is [added] in
`MediaKeySystemMediaCapability` [dictionary] to allow websites to specify
which encryption scheme could be used in [Encrypted Media Extensions (EME)].

The new `encryptionScheme` key can be one of two values:

- `'cenc'` AES-CTR mode full sample and video NAL subsample encryption.
- `'cbcs'` AES-CBC mode partial video NAL pattern encryption.

If not specified, it indicates that any encryption scheme is acceptable. Note
that [Clear Key] always supports the `'cenc'` scheme.

The example below shows how to query two configurations with different
encryption schemes. In this case, only one will be chosen.

```js
await navigator.requestMediaKeySystemAccess('org.w3.clearkey', [
    {
      label: 'configuration using the "cenc" encryption scheme',
      videoCapabilities: [{
        contentType: 'video/mp4; codecs="avc1.640028"',
        encryptionScheme: 'cenc'
      }],
      audioCapabilities: [{
        contentType: 'audio/mp4; codecs="mp4a.40.2"',
        encryptionScheme: 'cenc'
      }],
      initDataTypes: ['keyids']
    },
    {
      label: 'configuration using the "cbcs" encryption scheme',
      videoCapabilities: [{
        contentType: 'video/mp4; codecs="avc1.640028"',
        encryptionScheme: 'cbcs'
      }],
      audioCapabilities: [{
        contentType: 'audio/mp4; codecs="mp4a.40.2"',
        encryptionScheme: 'cbcs'
      }],
      initDataTypes: ['keyids']
    },
  ]);
```

In the example below, only one configuration with two different encryption
schemes is queried. In that case, Chrome will discard any capabilities object
it cannot support, so the accumulated configuration may contain one encryption
scheme or both.

```js
await navigator.requestMediaKeySystemAccess('org.w3.clearkey', [{
    videoCapabilities: [
      { // A video capability using the "cenc" encryption scheme
        contentType: 'video/mp4; codecs="avc1.640028"',
        encryptionScheme: 'cenc'
      },
      { // A video capability using the "cbcs" encryption scheme
        contentType: 'video/mp4; codecs="avc1.640028"',
        encryptionScheme: 'cbcs'
      },
    ],
    audioCapabilities: [
      { // An audio capability using the "cenc" encryption scheme
        contentType: 'audio/mp4; codecs="mp4a.40.2"',
        encryptionScheme: 'cenc'
      },
      { // An audio capability using the "cbcs" encryption scheme
        contentType: 'audio/mp4; codecs="mp4a.40.2"',
        encryptionScheme: 'cbcs'
      },
    ],
    initDataTypes: ['keyids']
  }]);
```

[Intent to Implement](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/lMUKOaohUTY) &#124;
[Chromestatus Tracker](https://www.chromestatus.com/feature/5184416120832000) &#124;
[Chromium Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=838416)

## EME: HDCP policy check {: #hdcp}

Nowadays [HDCP] is a common policy requirement for streaming high resolutions
of [protected content]. And web developers who want to enforce an HDCP policy
must either wait for the license exchange to complete or start streaming
content at a low resolution. This, is a sad situation that the [HDCP Policy
Check API] aims to solve.

This proposed API allows web developers to query whether a certain HDCP policy
can be enforced so that playback can be started at the optimum resolution for
the best user experience. It consists of a simple method to query the status of
a hypothetical key associated with an HDCP policy, without the need to create a
`MediaKeySession` or fetch a real license. It does not require `MediaKeys` to be
attached to any audio or video elements either.

The HDCP Policy Check API works simply by calling
`mediaKeys.getStatusForPolicy()` with an object that has a `minHdcpVersion` key
and a valid value. If HDCP is available at the specified version, the returned
promise resolves with a `MediaKeyStatus` of `'usable'`. Otherwise, the promise
resolves with [other error values] of `MediaKeyStatus` such as
`'output-restricted'` or `'output-downscaled'`. If the key system does not
support HDCP Policy Check at all (e.g. Clear Key System), the promise rejects.

In a nutshell, here's how the API works for now. Check out the [official sample]
to try out all versions of HDCP.

```js
const config = [{
  videoCapabilities: [{
    contentType: 'video/webm; codecs="vp09.00.10.08"',
    robustness: 'SW_SECURE_DECODE' // Widevine L3
  }]
}];

navigator.requestMediaKeySystemAccess('com.widevine.alpha', config)
.then(mediaKeySystemAccess => mediaKeySystemAccess.createMediaKeys())
.then(mediaKeys => {

  // Get status for HDCP 2.2
  return mediaKeys.getStatusForPolicy({ minHdcpVersion: '2.2' })
  .then(status => {
    if (status !== 'usable')
      return Promise.reject(status);

    console.log('HDCP 2.2 can be enforced.');
    // TODO: Fetch high resolution protected content...
  });
})
.catch(error => {
  // TODO: Fallback to fetch license or stream low-resolution content...
});
```

### Available for origin trials

To get feedback from web developers, we've previously added the HDCP Policy
Check API feature in Chrome 69 for Desktop (ChromeOS, Linux, Mac, and Windows).

The trial successfully ended in November 2018.

[Intent to Experiment](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/ITzZ_yx4bF8) &#124;
[Chromestatus Tracker](https://www.chromestatus.com/feature/5652917147140096) &#124;
[Chromium Bug](https://crbug.com/709348)

## MSE PTS/DTS compliance {: #pts }

Buffered ranges and duration values are now reported by Presentation Time Stamp
(PTS) intervals, rather than by Decode Time Stamp (DTS) intervals in [Media
Source Extensions (MSE)].

When MSE was new, Chrome's implementation was tested against WebM and MP3, some
media stream formats where there was no distinction between PTS and DTS. And
it was working fine until ISO BMFF (aka MP4) was added. This container
frequently contains out-of-order presentation versus decode time streams (for
codecs like H.264 for example) causing DTS and PTS to differ. That caused
Chrome to report (usually just slightly) different buffered ranges and duration
values than expected. This new behavior will roll out gradually in Chrome 69
and make its MSE implementation compliant with the [MSE specification].

<figure>
  {% Img src="image/vvhSqZboQoZZN9wBvoXq72wzGAf1/MeaweyrpR2iIVbXZqemN.png", alt="PTS/DTS", width="800", height="434" %}
  <figcaption>
    PTS/DTS
  </figcaption>
</figure>

This change affects `MediaSource.duration` (and consequently
`HTMLMediaElement.duration`), `SourceBuffer.buffered` (and consequently
`HTMLMediaElement.buffered)`, and `SourceBuffer.remove(start, end)`.

If you're not sure which method is used to report buffered ranges and duration
values, you can go to the internal `chrome://media-internals` page and search for
"ChunkDemuxer: buffering by PTS" or  "ChunkDemuxer: buffering by DTS" in the
logs.

[Intent to Implement](https://groups.google.com/a/chromium.org/d/msg/blink-dev/I6oGJLym-Tk/Z46le9l4CQAJ) &#124;
[Chromium Bug](https://crbug.com/718641)

## Handling of media view intents on Android Go {: #media_intent_handler }

[Android Go] is a lightweight version of Android designed for entry-level
smartphones. To that end, it does not necessarily ship with some media-viewing
applications, so if a user tries to open a downloaded video for instance, they
won't have any applications to handle that intent.

To fix this, Chrome 69 on Android Go now listens for media-viewing intents so
users can view downloaded audio, videos, and images. In other words, it takes
the place of the missing viewing applications.

<figure>
  {% Img src="image/vvhSqZboQoZZN9wBvoXq72wzGAf1/qGcEJcsQz6oRpoqE8mCE.png", alt="ALT_TEXT_HERE", width="800", height="369" %}
  <figcaption>
    Media intent handler
  </figcaption>
</figure>

Note that this Chrome feature is enabled on all Android devices running Android
O and onwards with 1 GB of RAM or less.

[Chromium Bug](https://crbug.com/718641)

## Removal of "stalled" events for media elements using MSE {: #stalled }

A "stalled" event is raised on a media element if downloading media data has
failed to progress for about 3 seconds. When using [Media Source Extensions
(MSE)], the web app manages the download and the media element is not aware of
its progress. This caused Chrome to raise "stalled" events at inappropriate
times whenever the website has not appended new media data chunks with
`SourceBuffer.appendBuffer()` in the last 3 seconds.

As websites may decide to append large chunks of data at a low frequency, this
is not a useful signal about buffering health. Removing "stalled" events for
media elements using MSE clears up confusion and brings Chrome more in line
with the MSE specification. Note that media elements that don't use MSE will
continue to raise "stalled" events as they do today.

[Intent to Deprecate and Remove](https://groups.google.com/a/chromium.org/d/msg/blink-dev/x54XtrTyOP8/4-5QZlZzDAAJ) &#124;
[Chromestatus Tracker](https://www.chromestatus.com/feature/6338037575319552) &#124;
[Chromium Bug](https://bugs.chromium.org/p/chromium/issues/detail?id=836951)

<!-- lint disable definition-case -->

[Chrome 70]: /blog/media-updates-in-chrome-70#av1-decoder
[CENC mode]: https://www.iso.org/obp/ui/#iso:std:iso-iec:23001:-7:ed-2:v1:en
[CBCS mode]: https://www.iso.org/obp/ui/#iso:std:iso-iec:23001:-7:ed-3:v1:en
[added]: https://github.com/WICG/encrypted-media-encryption-scheme/blob/main/explainer.md
[dictionary]: https://w3c.github.io/encrypted-media/#idl-def-mediakeysystemmediacapability
[Encrypted Media Extensions (EME)]: https://w3c.github.io/encrypted-media/
[Clear Key]: https://www.w3.org/TR/encrypted-media/#clear-key
[HDCP]: https://en.wikipedia.org/wiki/High-bandwidth_Digital_Content_Protection
[protected content]: https://developers.google.com/web/fundamentals/media/eme
[HDCP Policy Check API]: https://github.com/WICG/hdcp-detection/blob/main/explainer.md
[other error values]: https://w3c.github.io/encrypted-media/#dom-mediakeystatus
[official sample]: https://googlechrome.github.io/samples/hdcp-detection/
[Origin Trial]: https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md
[request a token]: https://bit.ly/HdcpPolicyCheckOriginTrials
[Alliance for Open Media]: https://aomedia.org/
[improves compression efficiency by 30%]: https://code.fb.com/video-engineering/av1-beats-x264-and-libvpx-vp9-in-practical-use-case/
[official bitstream specification]: https://aomedia.org/av1-bitstream-and-decoding-process-specification/
[profile 0]: https://aomediacodec.github.io/av1-spec/#profiles
[ISO-BMFF (MP4)]: https://aomediacodec.github.io/av1-isobmff
[From raw video to web ready]: https://developers.google.com/web/fundamentals/media/manipulating/files#how_are_media_files_put_together
[Media Source Extensions (MSE)]: https://developers.google.com/web/fundamentals/media/mse/basics
[MSE specification]: https://w3c.github.io/media-source/
[Android Go]: https://www.android.com/versions/oreo-8-0/go-edition/
[raise]: https://bugs.chromium.org/p/chromium/issues/detail?id=517240
[Removing]: https://chromium-review.googlesource.com/982564
[more in line]: https://github.com/w3c/media-source/issues/88#issuecomment-374406928
