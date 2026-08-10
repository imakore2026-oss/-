# コーポレートサイト（サンプル）

Next.js（App Router）+ TypeScript + Tailwind CSS で構築した、PC・スマホ対応のコーポレートサイトです。
既存企業サイトの構成・操作感（ヘッダー/グローバルナビ、メインビジュアル、サービス紹介、サービス一覧、ニュース、会社案内、お問い合わせ、フッター）を参考にしつつ、汎用的に使える形にしています。

掲載している会社名・文章・写真はすべて仮のサンプルです。実運用前に必ず差し替えてください。

## セットアップ

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## 会社情報・文章・サービス・ニュースの編集

`src/data/site-config.ts` に、以下の内容をまとめて定義しています。ここを編集するだけでサイト全体のテキストが更新されます。

- `siteConfig`：会社名・キャッチコピー・住所・電話番号・メールアドレスなどの基本情報
- `navItems` / `footerNavGroups`：ヘッダー・フッターのナビゲーション項目
- `services`：サービス一覧（トップページのカードと `/service` の詳細に反映）
- `newsItems`：ニュース（トップページのプレビューと `/news`, `/news/[slug]` に反映）
- `companyHistory`：会社沿革（`/company` に反映）
- `strengths`：サービス紹介セクションの強みリスト

## 画像の差し替え

写真部分は著作権に配慮し、すべて `src/components/ui/PlaceholderPhoto.tsx` によるプレースホルダー（グラデーション+ラベル）で仮置きしています。
実際の写真に差し替える場合は、該当コンポーネントの呼び出し箇所を `next/image` に置き換えてください。

アイコン・ロゴは `src/components/ui/Icons.tsx` にSVGコンポーネントとしてまとめています。

## ページ構成

- `/`：トップページ（メインビジュアル、サービス紹介、サービス一覧プレビュー、ニュースプレビュー、会社案内プレビュー、お問い合わせCTA）
- `/service`：サービス一覧（詳細）
- `/news`, `/news/[slug]`：ニュース一覧・詳細
- `/company`：会社案内（会社概要・沿革・アクセス）
- `/contact`：お問い合わせフォーム（`/api/contact` に送信。実運用ではメール送信等の処理に置き換えてください）

## 技術構成

- Next.js（App Router） / TypeScript / Tailwind CSS v4
- スクロール時のフェードインアニメーションは `src/components/ui/Reveal.tsx`（IntersectionObserver使用）
- スマホ用ハンバーガーメニューは `src/components/layout/Header.tsx`
