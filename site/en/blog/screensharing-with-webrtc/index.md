---
layout: 'layouts/blog-post.njk'
title: Screensharing with WebRTC
description: >
  Screensharing with WebRTC
authors:
  - samdutton
date: 2012-12-23
updated: 2019-02-22

---

[As we reported last week](https://developers.google.com//web/updates/2012/12/WebRTC-hits-Firefox-Android-and-iOS), there's been a **lot** happening lately with our old friend [WebRTC](https://www.html5rocks.com/tutorials/webrtc/basics/).

Well... here's another first: WebRTC screensharing.

<a href="https://www.youtube.com/watch?v=tD0QtBUZsF4" title="Linked to screencast of WebRTC screensharing in action. Screengrab image shows WebRTC screensharing extension, featuring Jake Archibald, Peter Beverloo, Paul Lewis and Sam Dutton.">
    <figure>
        {% Img src="image/T4FyVKpzu4WKF1kBNvXepbi08t52/byqSsEeY4w1nSGmQTDhQ.jpg", alt="Screengrab of WebRTC screensharing extension, featuring Jake Archibald, Peter Beverloo, Paul Lewis and Sam Dutton", width="800", height="373" %}
    </figure>
</a>

Here's a screencast: [youtube.com/watch?v=tD0QtBUZsF4](https://www.youtube.com/watch?v=tD0QtBUZsF4)

And here's the code: [github.com/samdutton/rtcshare](https://github.com/samdutton/rtcshare)

In essence, we've built an experimental Chrome extension that uses `RTCPeerConnection` and [`chrome.tabCapture`](/extensions/tabCapture) to share a live 'video' of a browser tab. If you want to try it out, you'll need [Chrome Canary](https://www.google.com/intl/en/chrome/canary/), and you'll need to enable Experimental Extension APIs on the __about:flags__ page.

Our prototype relies heavily on the mighty [appr.tc](https://appr.tc/) demo and, to be frank, it's a bit of a hack! But... it's a proof of concept, and it works.

Here's how we did it:



1. When the user clicks the extension icon (the 'record button' next to the address bar), the extension's background script __background.js__, appends an iframe to itself, the `src` of which is [rtcshare.appspot.com](https://rtcshare.appspot.com). In __background.js__ it's only used to get values such as `token` and `room_key`. We told you this was a hack :^}! This is a chopped and channeled version of [apprtc.appspot.com](http://apprtc.appspot.com). As with the apprtc example, [rtcshare.appspot.com](https://rtcshare.appspot.com) is also used for the remote client.

```js
chrome.browserAction.onClicked.addListener(function(tab) {
    var currentMode = localStorage["capturing"];
    var newMode = currentMode === "on" ? "off" : "on";

    if (newMode === "on"){ // start capture
        appendIframe();
    } else { // stop capture
        chrome.tabs.getSelected(null, function(tab){
            localStream.stop();
            onRemoteHangup();
        });
        // set icon, localStorage, etc.
    }
}
```

1. When the iframe has loaded, __background.js__ gets values from it (generated by the rtcshare.appspot.com app) and calls `chrome.tabCapture.capture()` to start capturing a live stream of the current tab.


```js
function appendIframe(){
    iframe = document.createElement("iframe");
    iframe.src="https://rtcshare.appspot.com";
    document.body.appendChild(iframe);
    iframe.onload = function(){
        iframe.contentWindow.postMessage("sendConfig", "*");
    };
}

// serialised config object messaged by iframe when it loads

window.addEventListener("message", function(event) {
    if (event.origin !== "https://rtcshare.appspot.com"){
        return;
    }
    var config = JSON.parse(event.data);
    room_link = config.room_link; // the remote peer URL
    token = config.token; // for messaging via Channel API
    // more parameter set from config
);

function startCapture(){
    chrome.tabs.getSelected(null, function(tab) {
        var selectedTabId = tab.id;
        chrome.tabCapture.capture({audio:true, video:true}, handleCapture); // bingo!
    });
}
```

1. Once the live stream is available (in other words, a live 'video' of the current tab), __background.js__ kicks off the peer connection process, and signalling is done via [rtcshare.appspot.com](http://www.rtcshare.appspot.com) using XHR and Google's [Channel API](https://developers.google.com/appengine/docs/python/channel/overview). All in all, it works like the [apprtc](http://apprtc.appspot.com) demo, except that the video stream communicated to the remote peer is from `chrome.tabCapture` and not `getUserMedia()`.

```js
function handleCapture(stream){
    localStream = stream; // used by RTCPeerConnection addStream();
    initialize(); // start signalling and peer connection process
}
```

1. For demo purposes, this prototype extension opens a new tab with the URL provided by [rtcshare.appspot.com](https://rtcshare.appspot.com), which has a 'room number' query string added. Of course, this URL could be opened on another computer, in another place, and THAT might be the start of something useful!

```js
chrome.tabs.create({url: room_link});
```

We envisage a lot of interesting use cases for screensharing and, even at this early stage of development, we're impressed at how responsive and stable plugin-free tab capture and sharing can be.

As ever, we welcome your comments: about this extension and about the WebRTC APIs in general. If you want to learn more about WebRTC, check out the [HTML5 Rocks article](https://www.html5rocks.com/tutorials/webrtc/basics/) or our [Quick Start Guide](https://docs.google.com/document/d/1idl_NYQhllFEFqkGQOLv8KBK8M3EVzyvxnKkHl4SuM8/edit).

Happy hacking -- and best wishes for 2013 from everyone at HTML5R and WebRTC!


