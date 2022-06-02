'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});
var countDownDate = new Date("Jun 06, 2025").getTime();



// update countdownTo every 1 second
var x = setInterval( function() {
    var now = new Date().getTime();
    var diff = countDownDate - now;
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    ;

  // display result in the element with id = "display"
  chrome.browserAction.setBadgeText({text: `${days}`});

}, 1000);