/**
 * BudouX
 */
import '@babel/polyfill';
import 'core-js/stable';
import { loadDefaultJapaneseParser } from 'budoux';
const parser = loadDefaultJapaneseParser();

const budoux = document.querySelectorAll('[data-budoux]');
//console.info(budoux);

if (budoux) {
  budoux.forEach((e, i) => {
    const $this = e;
    const index = i;
    const status = $this.dataset.budoux;
    const type = $this.dataset.budouxType;
    if (status === 'true') {
      $this.style.setProperty('word-break', 'keep-all');
      $this.style.setProperty('overflow-wrap', 'break-word');
      //$this.style.wordBreak = 'keep-all';
      //$this.style.overflowWrap = 'break-word';
      //const text = parser.parse($this.textContent || '', 400);
      const textArray = parser
        .parse($this.textContent || '', 100)
        .map((s) => `<span style="display: inline-block;">${s}</span>`);

      let html = '';
      textArray.forEach((e) => {
        html += e;
      });
      //const html = text.join('<br>');
      //const html = parser.translateHTMLString($this.innerHTML, 100); // <span> で囲むファンクション
      $this.innerHTML = html;
      //parser.applyElement($this, 300);
    }
  });
}
