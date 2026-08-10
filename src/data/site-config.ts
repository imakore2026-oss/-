/**
 * サイト全体の設定データ
 * ------------------------------------------------------------
 * 会社名・文章・連絡先・サービス内容・ニュースなどはすべてこのファイルで
 * 一元管理しています。実際の運用時はこのファイルの値を書き換えるだけで
 * サイト全体のテキストを差し替えられます。
 * 画像は public/images 配下のプレースホルダーを差し替えてください。
 */

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: "process" | "package" | "truck" | "quality" | "support" | "eco";
  points: string[];
};

export type NewsCategory = "お知らせ" | "製品情報" | "採用" | "メディア";

export type NewsItem = {
  slug: string;
  date: string; // YYYY-MM-DD
  category: NewsCategory;
  title: string;
  body: string;
};

export type CompanyHistory = {
  year: string;
  text: string;
};

export const siteConfig = {
  companyName: "株式会社サンプル加工",
  companyNameEn: "SAMPLE PROCESSING CO., LTD.",
  siteName: "株式会社サンプル加工 コーポレートサイト",
  catchCopy: "つつむ技術で、お客様の「困った」に応える。",
  subCopy: "加工から梱包・出荷まで、ワンストップで対応する総合加工商社です。",
  description:
    "株式会社サンプル加工は、フィルム加工・パウチ加工を中心に、企画から製造・出荷まで一貫して対応する総合加工商社です（サンプルサイト）。",
  philosophy: "お客様を、待たせない。",
  established: "1985年4月",
  capital: "3,000万円",
  employees: "42名（2026年4月現在）",
  ceo: "山田 太郎",
  address: "〒763-0000 香川県丸亀市サンプル町1-2-3",
  tel: "0877-00-0000",
  fax: "0877-00-0001",
  email: "info@example.com",
  businessHours: "平日 9:00〜18:00（土日祝休）",
  mapEmbedQuery: "香川県丸亀市",
} as const;

export const navItems: NavItem[] = [
  { label: "サービス紹介", href: "/#service-intro" },
  { label: "サービス一覧", href: "/service" },
  { label: "ニュース", href: "/news" },
  { label: "会社案内", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
];

export const footerNavGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "サービス",
    items: [
      { label: "サービス紹介", href: "/#service-intro" },
      { label: "サービス一覧", href: "/service" },
    ],
  },
  {
    title: "会社について",
    items: [
      { label: "会社案内", href: "/company" },
      { label: "ニュース", href: "/news" },
    ],
  },
  {
    title: "お問い合わせ",
    items: [
      { label: "お問い合わせフォーム", href: "/contact" },
      { label: "アクセス", href: "/company#access" },
    ],
  },
];

export const services: Service[] = [
  {
    slug: "film-processing",
    title: "フィルム・ラミネート加工",
    summary: "自社工場での一貫加工により、小ロット・短納期に対応します。",
    description:
      "各種フィルムの貼り合わせ（ラミネート加工）を自社工場にて行っています。用途や内容物に合わせた素材選定から、丸角・穴あけ・ミシン目・断裁までワンストップで対応。小ロットから量産まで柔軟に対応します。",
    icon: "process",
    points: ["素材選定のご相談", "丸角・穴あけ・ミシン目加工", "小ロット対応", "短納期対応"],
  },
  {
    slug: "pouch-processing",
    title: "パウチ加工",
    summary: "食品・日用品向けの各種パウチを企画から製造まで対応。",
    description:
      "三方シール・スタンドパウチ・チャック付きパウチなど、用途に応じた各種パウチ加工に対応しています。デザインや構造のご提案から試作、量産まで一貫してサポートします。",
    icon: "package",
    points: ["三方・四方シールパウチ", "スタンドパウチ", "チャック付き加工", "試作対応"],
  },
  {
    slug: "logistics",
    title: "梱包・出荷代行",
    summary: "検品・梱包・配送手配まで、出荷業務をまるごと代行します。",
    description:
      "製造した製品の検品、梱包、配送手配までを代行。倉庫での在庫管理や小分け出荷にも対応し、お客様の物流業務の負担を軽減します。",
    icon: "truck",
    points: ["検品・梱包代行", "在庫管理", "小分け・分納対応", "全国配送手配"],
  },
  {
    slug: "quality-control",
    title: "品質管理",
    summary: "自社基準による検査体制で、安定した品質をお届けします。",
    description:
      "静電気対策を施したラミネート室や検査体制など、品質を安定させるための設備と工程管理を整えています。ロットごとの検査記録も管理しています。",
    icon: "quality",
    points: ["自社検査基準", "静電気対策設備", "ロット管理", "工程記録の保管"],
  },
  {
    slug: "planning-support",
    title: "企画・ご相談サポート",
    summary: "「何から始めればいいかわからない」というご相談も歓迎です。",
    description:
      "パッケージの仕様や素材について知識がない場合でも、目的や予算をヒアリングしながら最適な仕様をご提案します。お見積りは無料です。",
    icon: "support",
    points: ["無料ヒアリング", "仕様提案", "お見積り無料", "サンプル作成"],
  },
  {
    slug: "eco-material",
    title: "環境配慮素材のご提案",
    summary: "モノマテリアルやバイオマス素材など環境配慮型の選択肢もご案内。",
    description:
      "近年のニーズに合わせ、リサイクルしやすいモノマテリアル素材やバイオマス素材を使用した加工にも対応しています。導入のご相談からお受けします。",
    icon: "eco",
    points: ["モノマテリアル対応", "バイオマス素材", "リサイクル設計相談", "導入事例のご紹介"],
  },
];

export const newsItems: NewsItem[] = [
  {
    slug: "2026-summer-holiday",
    date: "2026-07-20",
    category: "お知らせ",
    title: "夏季休業のお知らせ（2026年）",
    body: "誠に勝手ながら、2026年8月13日（木）〜8月16日（日）は夏季休業とさせていただきます。休業期間中にいただいたお問い合わせは8月17日（月）以降、順次ご対応いたします。",
  },
  {
    slug: "new-eco-material-line",
    date: "2026-06-02",
    category: "製品情報",
    title: "モノマテリアル対応パウチのラインナップを拡充しました",
    body: "環境配慮素材へのニーズの高まりを受け、モノマテリアル対応パウチのラインナップを拡充いたしました。詳細はサービス紹介ページよりお問い合わせください。",
  },
  {
    slug: "website-renewal",
    date: "2026-05-15",
    category: "お知らせ",
    title: "コーポレートサイトをリニューアルしました",
    body: "この度、当社コーポレートサイトをリニューアルいたしました。今後もサービス内容や事例を随時更新してまいります。",
  },
  {
    slug: "recruit-2027",
    date: "2026-04-10",
    category: "採用",
    title: "2027年度 新卒・中途採用エントリーを開始しました",
    body: "製造スタッフ・営業職を募集しています。詳しい募集要項はお問い合わせフォームよりお問い合わせください。",
  },
  {
    slug: "factory-tour-media",
    date: "2026-03-01",
    category: "メディア",
    title: "地元情報誌に工場が紹介されました",
    body: "地元の情報誌にて、当社工場の取り組みが紹介されました。品質管理の様子や加工工程についてご覧いただけます。",
  },
];

export const companyHistory: CompanyHistory[] = [
  { year: "1985年4月", text: "香川県丸亀市にて創業。" },
  { year: "1992年10月", text: "自社工場を新設し、ラミネート加工事業を開始。" },
  { year: "2003年6月", text: "パウチ加工設備を導入し、事業を拡大。" },
  { year: "2015年9月", text: "品質管理体制を強化し、検査工程を刷新。" },
  { year: "2022年4月", text: "環境配慮素材を用いた加工メニューを追加。" },
  { year: "2026年5月", text: "コーポレートサイトをリニューアル。" },
];

export const strengths = [
  {
    title: "小ロット・短納期対応",
    text: "自社工場での一貫生産体制により、小ロットのご注文にも短納期で対応します。",
  },
  {
    title: "企画からのご相談",
    text: "「何から始めればいいかわからない」という段階からのご相談も歓迎。目的に合わせた仕様をご提案します。",
  },
  {
    title: "安定した品質管理",
    text: "自社基準による検査体制で、ロットごとに安定した品質をお届けします。",
  },
];
