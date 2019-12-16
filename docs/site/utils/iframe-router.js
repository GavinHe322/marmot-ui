/**
 * 同步
 * window.top &&
 * iframe
 * url
 */

 import { iframeReady, isMobile } from './index.js';

export function initIframeRouter() {
  window.syncPath = function () {
    const router = window.vueRouter;
    const isInIframe = window !== window.top;
    const currentDir = router.history.current.path.replace('/', '');

    // 如果是父级则改变 iframe，如果是iframe改变则调用 window.top
    if (!isInIframe && !isMobile) {
      const iframe = document.querySelector('iframe');
      this.console.log(iframe)
      if (iframe) {
        iframeReady(iframe, () => {
          this.console.log(iframe.contentWindow.changePath(currentDir));
          iframe.contentWindow.changePath(currentDir);
        });
      }
    } else if (isInIframe) {
      window.top.changePath(currentDir);
    }
  };

  window.changePath = function (path = '') {
    // https://github.com/vuejs/vue-router/issues/2872
    window.vueRouter.push(path).catch(() => {});
  };
}
