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
    title: "Portfolio Site",
    description:
      "Next.js と Tailwind CSS で制作したポートフォリオサイトです。レスポンシブ対応で、Cloudflare Pages にデプロイしています。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudflare Pages"],
    image: "/images/work-portfolio.png",
    demoUrl: "#",
    githubUrl: "https://github.com/",
  },
  {
    title: "Sample App",
    description:
      "サンプルのWebアプリケーションです。ユーザー認証やCRUD操作などの基本機能を実装しています。",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/images/work-sample.png",
    demoUrl: "#",
    githubUrl: "https://github.com/",
  },
  {
    title: "CLI Tool",
    description:
      "開発効率を上げるためのコマンドラインツールです。日常業務の自動化に活用しています。",
    tags: ["Python", "Click", "Docker"],
    image: "/images/work-cli.png",
    githubUrl: "https://github.com/",
  },
];
