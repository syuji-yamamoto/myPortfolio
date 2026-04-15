# My Portfolio

Next.js + TypeScript + Tailwind CSS で構築した個人ポートフォリオサイトです。

## 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS 3.4
- **フォント**: Noto Serif JP (Google Fonts / next/font)
- **メール送信**: nodemailer
- **開発ツール**: Docker (Mailpit)

## プロジェクト構成

```
src/
├── app/
│   ├── globals.css          # グローバルスタイル（Tailwind ディレクティブ）
│   ├── layout.tsx           # ルートレイアウト（メタデータ・フォント設定）
│   ├── page.tsx             # トップページ
│   └── api/
│       └── contact/
│           └── route.ts     # お問い合わせ API（nodemailer）
├── components/
│   ├── Header.tsx           # 固定ヘッダー（レスポンシブ対応モバイルメニュー付き）
│   ├── Hero.tsx             # ファーストビュー（クラシックデザイン）
│   ├── About.tsx            # 自己紹介セクション（GitHub / X リンク付き）
│   ├── Works.tsx            # 作品一覧（グリッドレイアウト）
│   ├── Contact.tsx          # お問い合わせフォーム（名前・メール・メッセージ）
│   └── Footer.tsx           # フッター
└── data/
    └── works.ts             # 作品データ（ここを編集して作品を追加・変更）
```

## セットアップ

```bash
# 依存パッケージのインストール
npm install

# 環境変数の設定
cp .env.example .env.local
# .env.local を編集して SMTP 情報を設定

# 開発サーバーの起動（http://localhost:3000）
npm run dev

# 本番ビルド
npm run build

# リントチェック
npm run lint
```

## Docker（開発用メールサーバー）

お問い合わせフォームのテスト用に、Mailpit（ローカル SMTP サーバー）を Docker で起動できます。

```bash
# Mailpit を起動
docker compose up -d

# 停止
docker compose down
```

| サービス       | URL                   | 説明             |
| -------------- | --------------------- | ---------------- |
| Mailpit Web UI | http://localhost:8025 | 受信メールの確認 |
| Mailpit SMTP   | localhost:1025        | SMTP サーバー    |

`.env.local` は開発用の Mailpit 設定が入っています：

```env
SMTP_HOST=localhost
SMTP_PORT=1025
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
```

本番環境では Gmail 等の SMTP サーバーに切り替えてください（`.env.example` 参照）。

## 作品の追加方法

[src/data/works.ts](src/data/works.ts) を編集するだけで作品の追加・変更ができます。

```ts
{
  title: "プロジェクト名",
  description: "プロジェクトの説明",
  tags: ["Next.js", "TypeScript"],
  image: "/images/work-example.png",
  demoUrl: "https://example.com",       // 省略可
  githubUrl: "https://github.com/...",   // 省略可
}
```

## カスタマイズ

- **名前・肩書き**: [src/components/Hero.tsx](src/components/Hero.tsx) を編集
- **自己紹介文**: [src/components/About.tsx](src/components/About.tsx) を編集
- **連絡先メール**: [src/app/api/contact/route.ts](src/app/api/contact/route.ts) を編集
- **SNS リンク**: [src/components/About.tsx](src/components/About.tsx) を編集
