---
layout: 'layouts/blog-post.njk'
title: Service worker caching, PlaybackRate and Blob URLs for audio and video on Chrome for Android
description: >
   From version 52, Android Chrome uses the same media stack as desktop Chrome, rather than relying on the underlying platform implementation. This enables service worker media caching, variable playback rates, blob URLs on Android, MediaStream passing between APIs, and easier cross-platform debugging.
authors:
  - samdutton
date: 2016-06-16
updated: 2016-06-16
---


Sometimes good things have boring names.

Case in point: the Unified Media Pipeline, **UMP** for short.

This may sound like a sinister Soviet era directive, but in fact it's an important step towards consistent cross-platform audio and video delivery. Chrome on Android will now use the same media stack as desktop Chrome, rather than relying on the underlying platform implementation.

UMP enables you to do a lot:

* Cache audio and video with service workers, since media delivery is now implemented directly within Chrome rather than being passed off to the Android media stack.
* Use blob URLs for audio and video elements.
* Set `playbackRate` for audio and video.
* Pass MediaStreams between Web Audio and MediaRecorder.
* Develop and maintain media apps more easily across devices — media works the same on desktop and Android.

UMP took some hard engineering work to implement:

* A new caching layer for improved power performance.
* Updating a new MediaCodec based video decoder hosted in Chrome's GPU process.
* Lots of testing and iteration on different devices.

Here's a [demo of video caching with a service worker](https://googlechrome.github.io/samples/service-worker/prefetch-video/index.html):


<figure>
{% Img src="image/T4FyVKpzu4WKF1kBNvXepbi08t52/u9Oehg1y1GBWwzW7kgCu.jpg", alt="Screenshot of video playback.", width="800", height="394" %}
</figure>

Caching the video file and the video poster image is as simple as adding their paths to the list of URLs to prefetch:

```html
<video controls  poster="static/poster.jpg">
    <source src="static/video.webm" type="video/webm" />
    <p>This browser does not support the video element.</p>
</video>
```

```js
var urlsToPrefetch = [
    'static/video.webm', 'static/poster.jpg',
];
```    

{% Aside %}
There's some shim code in this demo to handle range requests, which are not yet implemented by service worker.
{% endAside %}

The inability to change `playbackRate` on Android has been a [long-standing bug](https://bugs.chromium.org/p/chromium/issues/detail?id=263654). UMP fixes this. For the demo at [simpl.info/video/playbackrate](https://simpl.info/video/playbackrate), `playbackRate` is set to 2. Try it out!


<figure>
{% Img src="image/T4FyVKpzu4WKF1kBNvXepbi08t52/cgmDyBIGRHmVpP4aqEtM.jpg", alt="Screenshot of video playback with playbackRate set to 2.", width="800", height="394" %}
</figure>

UMP enables blob URLs for media elements — which means that, for example, you can now [play back a video recorded using the MediaRecorder API](https://webrtc.github.io/samples/src/content/getusermedia/record/) in a video element on Android:

<figure>
{% Img src="image/T4FyVKpzu4WKF1kBNvXepbi08t52/wkQ6BR5CkQHUvTAl31bW.jpg", alt="Screenshot of playback in Chrome on Android of a video recorded using the MediaRecorder API", width="800", height="394" %}
</figure>

Here's the relevant code:

```js
var recordedBlobs = [];

mediaRecorder.ondataavailable = function(event) {
    if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
    }
};

function play() {
    var superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
    recordedVideo.src = window.URL.createObjectURL(superBuffer);
}
```    

For the demo at [simpl.info/video/offline](https://simpl.info/video/offline), video is stored using the File APIs, then played back using a Blob URL:

<figure>
{% Img src="image/T4FyVKpzu4WKF1kBNvXepbi08t52/jrj5vw8klfxSqdRJaiM9.jpg", alt="ALT_TEXT_HERE", width="600", height="1041" %}
</figure>

```js
function writeToFile(fileEntry, blob) {
    fileEntry.createWriter(function(fileWriter) {
    fileWriter.onwriteend = function() {
        readFromFile(fileEntry.fullPath);
    };
    fileWriter.onerror = function(e) {
        log('Write failed: ' + e.toString());
    };
    fileWriter.write(blob);
    }, handleError);
}

function readFromFile(fullPath) {
    window.fileSystem.root.getFile(fullPath, {}, function(fileEntry) {
    fileEntry.file(function(file) {
        var reader = new FileReader();
        reader.onloadend = function() {
        video.src = URL.createObjectURL(new Blob([this.result]));
        };
        reader.readAsArrayBuffer(file);
    }, handleError);
    }, handleError);
}
```    

The Unified Media Pipeline has also been [enabled for Media Source Extensions (MSE) and Encrypted Media Extensions (EME)](https://groups.google.com/a/chromium.org/forum/#!topic/chromium-reviews/Qi4dLcKjcCM).

This is another step towards unifying mobile and desktop Chrome. You don't need to change your code, but building a consistent media experience across desktop and mobile should now be easier, since the media stack is the same across platforms. Debugging with Chrome DevTools? Mobile emulation now uses the 'real' audio and video stack.

If you experience problems as a result of the Unified Media Pipeline, please file issues on the [implementation bug](https://groups.google.com/a/chromium.org/forum/#!topic/chromium-reviews/Qi4dLcKjcCM) or via [new.crbug.com](https://new.crbug.com).

## Demos

* [Cache video with a service worker](https://googlechrome.github.io/samples/service-worker/prefetch-video/index.html)
* [Media `playbackRate`](https://simpl.info/video/playbackrate)
* [MediaRecorder: playback using a blob URL](https://simpl.info/mediarecorder)
* [Offline video implemented with the File APIs](https://simpl.info/video/offline)

## Relevant bugs

* [Tracking issues for the Unified Media Pipeline](https://bugs.chromium.org/p/chromium/issues/detail?id=507834)
* [UMP Field Trial](https://groups.google.com/a/chromium.org/forum/#!topic/chromium-reviews/okUkrNc0z6w)
* [MSE, EME and the Unified Media Pipeline](https://groups.google.com/a/chromium.org/forum/#!topic/chromium-reviews/Qi4dLcKjcCM)

There are a couple of bugs affecting `<video>`, service workers and the Cache Storage API:

* [`<video>` triggers a mode: cors request and won't accept an opaque service worker response](https://bugs.chromium.org/p/chromium/issues/detail?id=546076)
* [Seeking doesn't work in videos served by service worker cache](https://bugs.chromium.org/p/chromium/issues/detail?id=575357)


## Browser support

* Enabled by default in Chrome 52 and above.



