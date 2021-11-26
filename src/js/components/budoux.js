/**
 * BudouX
 */
import { loadDefaultJapaneseParser } from 'budoux';

const parser = loadDefaultJapaneseParser();
const budoux = document.querySelectorAll('[data-budoux]');
//console.info(budoux);

if (budoux) {
  budoux.forEach((e) => {
    const $this = e;
    const status = $this.dataset.budoux;
    const threshold = $this.dataset.budouxThreshold;
    const type = $this.dataset.budouxType;

    if (status === 'true') {
      // 親要素にスタイルを追加
      $this.style.setProperty('word-break', 'keep-all');
      $this.style.setProperty('overflow-wrap', 'break-word');
      //$this.style.wordBreak = 'keep-all';
      //$this.style.overflowWrap = 'break-word';

      // しきい値を取得
      let FIXED_THRESHOLD = 1000;
      if (threshold) {
        FIXED_THRESHOLD = Number(threshold);
      }

      // タイプ毎の処理
      if (type === 'span') {
        // SPAN
        const stringArray = parser
          .parse($this.textContent || '', FIXED_THRESHOLD)
          .map((s, i) => `<span class="fruit-${i}">${s}</span>`);
        let html = '';
        stringArray.forEach((e) => {
          html += e;
        });
        $this.innerHTML = html;
      } else if (type === 'br') {
        // BR
        const stringArray = parser
          .parse($this.textContent || '', FIXED_THRESHOLD)
          .map((s, i) => `${s}<br class="fruit-${i}">`);
        let html = '';
        stringArray.forEach((e) => {
          html += e;
        });
        $this.innerHTML = html;
      } else if (type === 'wbr') {
        // WBR
        const stringArray = parser
          .parse($this.textContent || '', FIXED_THRESHOLD)
          .map((s, i) => `${s}<wbr class="fruit-${i}">`);
        let html = '';
        stringArray.forEach((e) => {
          html += e;
        });
        $this.innerHTML = html;
      } else {
        // DEFAULT
        parser.applyElement($this, FIXED_THRESHOLD);
      }

      //const string = parser.parse($this.innerHTML || '', 1000);
      //const html = string.join('<br>');
      //$this.innerHTML = html;
      //parser.applyElement($this, 1000); // デフォルトのファンクション
      //const html = parser.translateHTMLString($this.innerHTML, 1000); // <span> で囲むファンクション
    }
  });
}
