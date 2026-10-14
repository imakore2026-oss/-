// 保存処理はこのファイルに集約しています。
// 保存先を変える場合（サーバー、Googleスプレッドシート、Firebase等）は、
// load() と save() の中身を差し替えるだけで済みます（app.js側は変更不要）。
//
// データ形式: { transactions: [ { id, date:'YYYY-MM-DD', type:'income'|'expense',
//                                   category, amount, memo } ] }
const Storage = (() => {
  const KEY = 'kakeibo.v1';

  async function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { console.warn('load failed', e); }
    return { transactions: [] };
  }

  async function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  return { load, save };
})();
