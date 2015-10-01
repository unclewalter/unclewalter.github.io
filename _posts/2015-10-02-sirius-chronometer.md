---
layout: page
sidebar: left
published: true
breadcrumb: false
teaser: "Hey all, so following the Bendigo International Festival of Exploratory music this year, I have updated my chronometer software for a performance of Olga Neuwirth's work _Maudite Soit La Guerre_. It has now hit the v1.0 milestone (actually 1.1.0 after a few changes), which I'm happy about and I'm proud to make it publically available now it is in a more user-friendly package."
title: Sirius Chronometer
---

Hey all, so following the [Bendigo International Festival of Exploratory Music](http://www.bifem.com.au/) (BIFEM) this year, I have updated my chronometer software for a performance of Olga Neuwirth's work _Maudite Soit La Guerre_. It has now hit the v1.0 milestone (actually 1.1.0 after a few changes), which I'm happy about and I'm proud to make it publically available now it is in a more user-friendly package.

## Background
For those unfamiliar with this. Sirius Chronometer is a system I developed last year for the Australian premier of Karlheinz Stockhausen's _Sirius_ at BIFEM 2014 with Nicholas Isherwood, Tristram Williams, Tiffany DuMouchelle, Richard Haynes and Myles Mumford. The purpose was to allow the performers to stay in sync and keep track of their cues alongside the 8 channel diffusion using their mobile devices on the same wi-fi network as computer. 

The original iteration of this system was a [Node.js](https://nodejs.org/en/) script that was sent OSC messages from a MaxMSP patch indicating the current playback position and cues, and then serving a web page on any device with a HTML5 web browser which displays the current time and cues synchronised with the patch through a TCP socket connected to Node server running on the computer. The advantages this system has over something like TouchOSC, which superficially can do the same thing, are:

1. There are fewer restrictions in the target platform. That is, it does not have to be an iOS device.
2. Not only does it not require a software to be purchased for each device, it also is open source, so it is entirely free!
3. _Most importantly_ — and this was why a bespoke piece of software conceived in the first place - the clients or devices that the chronometer is being displayed on can be more than just dumb clients displaying what's sent to them.

Why is the last point important? Well, an important aspect of this technology is that it is not only reliable, but it has failsafes. So in the case of _Sirius Chronometer_, it will continue to work in the absence of a wi-fi connection and it will recover at the right point if device crashes and needs to re-open the browser. The way this works is that rather than display time values and cues as they are received, the device relies more on its on its own internal time and only receives `start`,  `stop` and periodic `sync` messages to synchronise. In the event that a device connects or re-connects, it will be sent the most recent cues and then whatever the current sync message is, e.g. `sync 230000`

This is quite important when performing such a difficult work as if someone were to cause interference on the 2.4 GHz, which can and does happen, the performance is not interrupted.

## What has changed?
The biggest issue with this system as it was last year was on the useability front. It required the end user to open up the terminal, `cd` to the right directory, run `node server.js`, then find out their computer's IP address, type it into the browsers remembering to enter the correct port number and then run the Max patch. So the documentation had to include how to use the terminal.

So what I have done in this version is bundle it into an app using NW.js so all the user has to do is open the app, and the instructions along with what to type into the browser are shown on screen. No fumbling around to find the IP address and port and any documentation for basic use is integrated. And this year I could quite comfortably hand it over to any non-technical user along with whatever Max patch or whatever is meant to drive it (anything that can send custom OSC messages can work with this).

## What next?
From here, I have a number of options. One thing I would like to do is make it more compatible with exsting software out-of-the-box. At the moment, it requires certain OSC message to be sent to it to work. And while this still allows quite easy implementation with SuperCollider, MaxMSP, Pd, Bidule, or even Reaper if you use the built-in scripting. However, I would really like to make it work with MIDI timecode and more standardised messaging. That way, just about any audio software with MIDI can work with it without any extra messing around to get it to work.

I also want to give the user more options for configuration, such as setting the port, the sync interval and how things are displayed on the devices. Currently the sync interval is simply determined by how often the sync messages are sent to the local server. I could also perhaps implement a way to push symbol-based cues to the devices as well.

It could be worth also providing some visual feedback on the devices in the event that there is a failure.

On thing I am considering is porting it over to something like OpenFrameworks, which is an awesome C++ "creative coding" toolkit for writing cross-platform apps. One advantage there is I can greatly reduce the footprint of the app, increase the performance and be able to access a few lower level features that might help me improve sync accuracy. It would also make implementing MTC sync a bit easier as I can use RtMidi, which is awesomesauce. 

## Downloads
[OS X 32-bit](https://github.com/unclewalter/Sirius-Chronometer/releases/download/v1.1.0/sirius-chronometer-osx32.zip)
[OS X 64-bit](https://github.com/unclewalter/Sirius-Chronometer/releases/download/v1.1.0/sirius-chronometer-osx64.zip)

[Windows 32-bit](https://github.com/unclewalter/Sirius-Chronometer/releases/download/v1.1.0/sirius-chronometer-win32.zip)
[Windows 64-bit](https://github.com/unclewalter/Sirius-Chronometer/releases/download/v1.1.0/sirius-chronometer-win64.zip)

## Source Code, Documentation & Example MaxMSP patch
[Fork yeah! GitHub!](https://github.com/unclewalter/Sirius-Chronometer/)

Improvements and suggestions are always welcome. 
