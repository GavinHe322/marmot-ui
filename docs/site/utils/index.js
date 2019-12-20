function importAll(map, r) {
  r.keys().forEach(key => {
    map[key] = r(key);
  });
}

const ua = navigator.userAgent.toLowerCase();
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua);


function iframeReady(iframe, callback) {
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  const interval = () => {
    if (iframe.contentWindow.changePath) {
      callback();
    } else {
      setTimeout(() => {
        interval();
      }, 50);
    }
  };

  if (doc.readyState === "complete") {
    interval();
  } else {
    iframe.onload = interval;
  }
}

import highlight from "./highlight.js";

export {
  importAll,
  isMobile,
  iframeReady,
  highlight,
}
