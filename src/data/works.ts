export type Work = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
};

/**
 * 作品データ
 * ここを編集するだけで作品の追加・変更ができます。
 */
export const works: Work[] = [
  {
    title: "stackbystep",
    description:
      "Next.js + Django + MySQL で自作した個人技術ブログ。Docker Compose でサービスを分離し、ConoHa VPS に Ansible でプロビジョニング、GitHub Actions で main ブランチから自動デプロイする CI/CD パイプラインを構築。",
    tags: ["Next.js", "Django", "MySQL", "Docker", "Ansible", "GitHub Actions", "ConoHa VPS"],
    image: "/images/work-stackbystep.webp",
    demoUrl: "https://stackbystep.com/",
  },
  {
    title: "Type Rush",
    description:
      "1分間のタイピング練習ゲーム。ユーザー登録・ログイン、スコア履歴、コンボ表示、BGM・効果音など本格的な機能を実装。Docker + AWS でデプロイ。",
    tags: ["React", "TypeScript", "Laravel", "Docker", "AWS"],
    image: "/images/work-typerush.webp",
    demoUrl: "https://type-rush.com",
    githubUrl: "https://github.com/syuji-yamamoto/type-rush",
  },
  {
    title: "My Bookshelf",
    description:
      "Google Books API を活用した読書管理アプリ。書籍の検索・登録、読書ステータス管理、メモ機能を搭載。データは localStorage で保持。",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Google Books API"],
    image: "/images/work-bookshelf.webp",
    demoUrl: "https://my-bookshelf-lac.vercel.app/",
    githubUrl: "https://github.com/syuji-yamamoto/my-bookshelf",
  },
  {
    title: "Portfolio Site",
    description:
      "このポートフォリオサイトです。Next.js と Tailwind CSS でクラシックなデザインに仕上げました。Web3Forms によるお問い合わせフォーム付き。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    image: "/images/work-portfolio.webp",
    githubUrl: "https://github.com/syuji-yamamoto/myPortfolio",
  },
  {
    title: "Sample Java App",
    description:
      "Spring Boot + React のフルスタック学習用プロジェクト。REST API の基本構成と React フロントエンドの連携を実装。",
    tags: ["Java", "Spring Boot", "React", "Maven"],
    image: "/images/work-samplejava.webp",
    githubUrl: "https://github.com/syuji-yamamoto/sampleJava",
  },
];
