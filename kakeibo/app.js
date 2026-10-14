const CATEGORIES = {
  expense: ['食費', '日用品', '交通費', '住居', '光熱費', '通信費', '医療', '娯楽', '衣服', '交際費', 'その他'],
  income: ['給与', '賞与', '副収入', 'その他'],
};
const COLORS = ['#2f855a', '#3182ce', '#d69e2e', '#c05621', '#805ad5', '#d53f8c',
                '#319795', '#718096', '#9b2c2c', '#2c5282', '#a0aec0'];

const $ = (id) => document.getElementById(id);
const yen = (n) => '¥' + Math.round(n).toLocaleString('ja-JP');
const pad = (n) => String(n).padStart(2, '0');
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };

let data = { transactions: [] };
let cur = new Date(); cur.setDate(1);
let chartType = 'expense';
let formType = 'expense';
let editingId = null;

const monthKey = () => `${cur.getFullYear()}-${pad(cur.getMonth() + 1)}`;
const monthTx = () => data.transactions.filter((t) => t.date.startsWith(monthKey()));

async function persist() { await Storage.save(data); render(); }

function render() {
  $('month-label').textContent = `${cur.getFullYear()}年${cur.getMonth() + 1}月`;
  const txs = monthTx();
  const sum = (type) => txs.filter((t) => t.type === type).reduce((a, t) => a + t.amount, 0);
  const inc = sum('income'), exp = sum('expense');
  $('sum-income').textContent = yen(inc);
  $('sum-expense').textContent = yen(exp);
  const bal = $('sum-balance');
  bal.textContent = yen(inc - exp);
  bal.className = inc - exp < 0 ? 'expense' : 'income';
  renderList(txs);
  renderChart(txs);
}

function renderList(txs) {
  const ul = $('tx-list');
  ul.textContent = '';
  const sorted = [...txs].sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
  let lastDate = '';
  for (const t of sorted) {
    if (t.date !== lastDate) {
      const h = document.createElement('li');
      h.className = 'date-head';
      const d = new Date(t.date + 'T00:00:00');
      h.textContent = `${d.getMonth() + 1}月${d.getDate()}日（${'日月火水木金土'[d.getDay()]}）`;
      ul.appendChild(h);
      lastDate = t.date;
    }
    const li = document.createElement('li');
    li.className = 'tx';
    li.onclick = () => openDialog(t);
    const left = document.createElement('div');
    const cat = document.createElement('span');
    cat.className = 'cat'; cat.textContent = t.category;
    const memo = document.createElement('span');
    memo.className = 'memo'; memo.textContent = t.memo || '';
    left.append(cat, memo);
    const amt = document.createElement('b');
    amt.className = t.type;
    amt.textContent = (t.type === 'expense' ? '-' : '+') + yen(t.amount);
    li.append(left, amt);
    ul.appendChild(li);
  }
  $('list-empty').hidden = sorted.length > 0;
}

function renderChart(txs) {
  const totals = {};
  for (const t of txs.filter((t) => t.type === chartType)) totals[t.category] = (totals[t.category] || 0) + t.amount;
  const rows = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  const total = rows.reduce((a, r) => a + r[1], 0);
  const chart = $('chart'), legend = $('legend');
  legend.textContent = '';
  if (!total) { chart.innerHTML = '<p class="empty">データがありません</p>'; return; }

  const R = 80, C = 2 * Math.PI * R;
  let offset = 0, circles = '';
  rows.forEach(([, v], i) => {
    const len = (v / total) * C;
    circles += `<circle r="${R}" cx="100" cy="100" fill="none" stroke="${COLORS[i % COLORS.length]}" stroke-width="36"` +
      ` stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-offset}" transform="rotate(-90 100 100)"/>`;
    offset += len;
  });
  chart.innerHTML = `<svg viewBox="0 0 200 200" role="img" aria-label="カテゴリ別円グラフ">${circles}` +
    `<text x="100" y="96" text-anchor="middle" class="c-label">合計</text>` +
    `<text x="100" y="116" text-anchor="middle" class="c-total">${yen(total)}</text></svg>`;

  rows.forEach(([name, v], i) => {
    const li = document.createElement('li');
    const dot = document.createElement('i');
    dot.style.background = COLORS[i % COLORS.length];
    const n = document.createElement('span'); n.textContent = `${name}（${Math.round((v / total) * 100)}%）`;
    const a = document.createElement('b'); a.textContent = yen(v);
    li.append(dot, n, a);
    legend.appendChild(li);
  });
}

function fillCategories(selected) {
  const sel = $('f-category');
  sel.textContent = '';
  for (const c of CATEGORIES[formType]) sel.add(new Option(c, c));
  if (selected && CATEGORIES[formType].includes(selected)) sel.value = selected;
}

function setFormType(type, selected) {
  formType = type;
  document.querySelectorAll('#type-seg button').forEach((b) => b.classList.toggle('on', b.dataset.type === type));
  fillCategories(selected);
}

function openDialog(t) {
  editingId = t ? t.id : null;
  $('dlg-title').textContent = t ? '記録を編集' : '記録を追加';
  $('btn-delete').hidden = !t;
  setFormType(t ? t.type : 'expense', t && t.category);
  $('f-date').value = t ? t.date : (monthKey() === today().slice(0, 7) ? today() : monthKey() + '-01');
  $('f-amount').value = t ? t.amount : '';
  $('f-memo').value = t ? t.memo : '';
  $('dlg').showModal();
}

$('fab').onclick = () => openDialog(null);
$('btn-cancel').onclick = () => $('dlg').close();
document.querySelectorAll('#type-seg button').forEach((b) => (b.onclick = () => setFormType(b.dataset.type)));
$('btn-delete').onclick = async () => {
  if (!confirm('この記録を削除しますか？')) return;
  data.transactions = data.transactions.filter((t) => t.id !== editingId);
  $('dlg').close();
  await persist();
};
$('form').onsubmit = async () => {
  const rec = {
    id: editingId ?? Date.now(),
    date: $('f-date').value,
    type: formType,
    category: $('f-category').value,
    amount: Math.round(Number($('f-amount').value)),
    memo: $('f-memo').value.trim(),
  };
  const i = data.transactions.findIndex((t) => t.id === editingId);
  if (i >= 0) data.transactions[i] = rec; else data.transactions.push(rec);
  await persist();
};

const shift = (n) => { cur.setMonth(cur.getMonth() + n); render(); };
$('prev').onclick = () => shift(-1);
$('next').onclick = () => shift(1);

document.querySelectorAll('.tabs button').forEach((b) => (b.onclick = () => {
  document.querySelectorAll('.tabs button').forEach((x) => x.classList.toggle('on', x === b));
  document.querySelectorAll('.view').forEach((v) => v.classList.toggle('active', v.id === 'view-' + b.dataset.view));
}));
document.querySelectorAll('.summary ~ main .seg button').forEach((b) => (b.onclick = () => {
  chartType = b.dataset.type;
  document.querySelectorAll('#view-chart .seg button').forEach((x) => x.classList.toggle('on', x === b));
  render();
}));

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});

Storage.load().then((d) => { data = d; render(); });
