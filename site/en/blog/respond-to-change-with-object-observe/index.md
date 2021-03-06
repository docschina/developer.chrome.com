---
layout: 'layouts/blog-post.njk'
title: Respond to change with Object.observe
description: >
  Respond to change with Object.observe
authors:
  - alexdanilo
date: 2012-11-15
updated: 2019-02-22

---

Lots of JavaScript frameworks using MVC or MDV need to respond to changes to the objects that model the state inside a web application. This capability is a fundamental part of a data-binding model.

There are a number of different ways to monitor JavaScript objects and DOM properties to trigger some sort of action, but most of the techniques aren't ideal for various reasons such as performance, etc.

In order to improve the performance of web applications, a new method called [Object.observe()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/observe) has been proposed to TC39 - the standards body overseeing development of ECMAScript (JavaScript).

Object.observe() lets you add a listener to any JavaScript object that gets called whenever that object, or its properties, change.

You can try it out now in [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) version 25.

To experiment with this feature, you need to enable the *Enable Experimental JavaScript* flag in Chrome Canary and restart the browser. The flag can be found under 'about:flags' as shown in the image below:


<figure>
{% Img src="image/T4FyVKpzu4WKF1kBNvXepbi08t52/jFEN0Fbbgz5g3cFsK9xn.jpg", alt="Chrome flags.", width="379", height="145" %}
</figure>

Here's a simple example of how to set up an observer on an object:


```js
var beingWatched = {};
// Define callback function to get notified on changes
function somethingChanged(changes) {
    // do something
}
Object.observe(beingWatched, somethingChanged);
```


When the object 'beingWatched' is modified, it will trigger the callback function 'somethingChanged' which receives an array of changes that were applied to the object.

So the JavaScript engine is free to buffer up a number of changes and pass them all in a single call to the callback function. This helps with optimizing the callbacks so that your code can do lots of JavaScript manipulation but process only a few callbacks by batching the updates together.

The callback function will be triggered whenever a property is added, modified, deleted or reconfigured.

Another really nice thing when observing arrays is that if an array has had a number of changes made to it, you can use a [Change Summary](https://github.com/googlearchive/observe-js) helper library to create a minimal change set, so that client side JavaScript doesn't have to manually scan the array to check each item.

You can iterate through each change quite easily, by doing something like the following in your 'somethingChanged' callback function:


```js
function whatHappened(change) {
    console.log(change.name + " was " + change.type + " and is now " + change.object[change.name]);
}
function somethingChanged(changes) {
    changes.forEach(whatHappened);
}
```



The *type* property identifies what happened to the object. Some examples of properties being set and the associated *type* can be seen in the code below.


```js
beingWatched.a = "foo"; // new
beingWatched.a = "bar"; // updated
beingWatched.a = "bar"; // no change
beingWatched.b = "amazing"; // new
```


The great thing about this technique is that all the monitoring smarts are inside the JavaScript engine which allows the browser to optimize it well and free your JavaScript up to implement functionality taking advantage of this feature.

Another really great feature for development is the ability to use Object.observe() to trigger the debugger whenever an object changes. To do that you'd use code something like the example below.


```js
Object.observe(beingWatched, function(){ debugger; });
```


Here's a [great video introduction](https://www.youtube.com/watch?feature=player_embedded&v=VO--VXFJnmE) about Object.observe() that explains it in detail.

{% YouTube id="VO--VXFJnmE" %}


There's also a [nice descriptive write-up available](https://bocoup.com/blog/JavaScript-object-observe) and a [working example here](https://simpl.info/observe/).

The TC39 standards body is seeking feedback on this feature, so go ahead and try it and let us know what you think.


