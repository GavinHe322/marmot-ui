import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";


hljs.registerLanguage("javascript", javascript);

const highlight = {
  mounted() {
    document.querySelectorAll(".language-js").forEach(block => {
      hljs.highlightBlock(block);
    })
  },
}

export default highlight;
