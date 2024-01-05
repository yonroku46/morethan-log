const CONFIG = {
  // profile setting (required)
  profile: {
    name: "H.Youngrok",
    image: "/profile.svg",
    role: "Web Engineer",
    bio: "",
    email: "yr9601@gmail.com",
    linkedin: "yonroku46",
    github: "yonroku46",
    instagram: "yonroku46",
  },
  projects: [
    {
      name: `About`,
      href: "https://yonroku46.vercel.app/about",
    },
    {
      name: `Portfolio`,
      href: "https://dad-labo.com",
    },
  ],
  // blog setting (required)
  blog: {
    title: "4Log",
    description: "나의 개발메모장",
  },

  // CONFIG configration (required)
  link: "https://yonroku46.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
