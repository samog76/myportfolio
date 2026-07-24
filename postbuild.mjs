import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { render } from "./dist/ssr/entry-server.js";

const siteUrl = "https://www.gbeminiyi.me";
const projectPages = [
  {
    path: "/projects/movway",
    slug: "movway",
    name: "Movway",
    title: "Movway Case Study | Gbeminiyi Ogunleye",
    description: "How Gbeminiyi Ogunleye built Movway, a React and TMDB-powered movie, TV and anime discovery and streaming experience.",
    image: `${siteUrl}/imgae/projects/movway.webp`,
    imageWidth: 1280,
    imageHeight: 720,
    live: "https://movway.netlify.app/",
    repo: "https://github.com/samog76/movway",
    keywords: ["React", "TypeScript", "TMDB", "Streaming"]
  },
  {
    path: "/projects/riba-x",
    slug: "riba-x",
    name: "Riba-X",
    title: "Riba-X Case Study | Gbeminiyi Ogunleye",
    description: "How Gbeminiyi Ogunleye built Riba-X, a full-stack social-commerce platform with Next.js, NestJS, PostgreSQL and Stripe.",
    image: `${siteUrl}/imgae/projects/riba-x.webp`,
    imageWidth: 1400,
    imageHeight: 1050,
    live: "https://r-xprototype.vercel.app",
    repo: "https://github.com/samog76/RXprototype",
    keywords: ["Next.js", "NestJS", "PostgreSQL", "Stripe"]
  },
  {
    path: "/projects/sentinel",
    slug: "sentinel",
    name: "Sentinel",
    title: "Sentinel Case Study | Gbeminiyi Ogunleye",
    description: "How Gbeminiyi Ogunleye built Sentinel, an AI clinical companion that measures cognitive baselines and shift fatigue for medical professionals.",
    image: `${siteUrl}/imgae/projects/sentinel.webp`,
    imageWidth: 1400,
    imageHeight: 1050,
    live: "https://sentinel-lyart.vercel.app",
    repo: "https://github.com/samog76/sentinel",
    keywords: ["Next.js", "Gemini AI", "TypeScript", "HealthTech"]
  }
];

const person = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Gbeminiyi Ogunleye",
  givenName: "Gbeminiyi",
  familyName: "Ogunleye",
  alternateName: ["samog76", "Gbeminiyi"],
  url: `${siteUrl}/`,
  image: `${siteUrl}/imgae/hero-portrait.webp`,
  jobTitle: "Full-Stack Developer",
  description: "Gbeminiyi Ogunleye is a full-stack developer based in Lagos, Nigeria, building modern web applications and digital products.",
  sameAs: [
    "https://github.com/samog76",
    "https://www.linkedin.com/in/gbeminiyi-ogunleye-245163228",
    "https://twitter.com/gbeminiyi_og",
    "https://www.instagram.com/ufw._niyi",
    "https://linktr.ee/gbeminiyi76"
  ]
};

const replaceMeta = (html, attribute, key, value) => {
  const matcher = new RegExp(`<meta ${attribute}="${key}" content="[^"]*">`);
  return html.replace(matcher, `<meta ${attribute}="${key}" content="${value}">`);
};

function projectSchema(project) {
  const canonical = `${siteUrl}${project.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: project.title,
        description: project.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${canonical}#project` },
        primaryImageOfPage: project.image,
        inLanguage: "en-NG"
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${canonical}#project`,
        name: project.name,
        description: project.description,
        url: canonical,
        image: project.image,
        codeRepository: project.repo,
        runtimePlatform: "Web",
        keywords: project.keywords.join(", "),
        author: { "@id": `${siteUrl}/#person` }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${siteUrl}/#work` },
          { "@type": "ListItem", position: 3, name: project.name, item: canonical }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "Gbeminiyi Ogunleye",
        alternateName: ["Gbeminiyi", "Gbeminiyi Ogunleye Portfolio"],
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-NG"
      },
      person
    ]
  };
}

function createPage(template, page) {
  const canonical = `${siteUrl}${page.path}`;
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`)
    .replace(/<link rel="alternate" hreflang="en" href="[^"]*">/, `<link rel="alternate" hreflang="en" href="${canonical}">`)
    .replace(/<link rel="alternate" hreflang="x-default" href="[^"]*">/, `<link rel="alternate" hreflang="x-default" href="${canonical}">`);

  html = replaceMeta(html, "name", "description", page.description);
  html = replaceMeta(html, "property", "og:type", "article");
  html = replaceMeta(html, "property", "og:url", canonical);
  html = replaceMeta(html, "property", "og:title", page.title);
  html = replaceMeta(html, "property", "og:description", page.description);
  html = replaceMeta(html, "property", "og:image", page.image);
  html = replaceMeta(html, "property", "og:image:width", String(page.imageWidth));
  html = replaceMeta(html, "property", "og:image:height", String(page.imageHeight));
  html = replaceMeta(html, "property", "og:image:alt", `${page.name} application interface`);
  html = replaceMeta(html, "name", "twitter:title", page.title);
  html = replaceMeta(html, "name", "twitter:description", page.description);
  html = replaceMeta(html, "name", "twitter:image", page.image);
  html = replaceMeta(html, "name", "twitter:image:alt", `${page.name} application interface`);
  html = html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script id="structured-data" type="application/ld+json">${JSON.stringify(projectSchema(page))}</script>`
  );
  return html.replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
}

await mkdir("dist/server", { recursive: true });
await mkdir("dist/client/imgae", { recursive: true });
await mkdir("dist/client/projects", { recursive: true });
await cp("server/index.js", "dist/server/index.js");
await cp("imgae/hero-portrait.webp", "dist/client/imgae/hero-portrait.webp");
await cp("imgae/projects", "dist/client/imgae/projects", { recursive: true });

const template = await readFile("dist/client/index.html", "utf8");
const home = template.replace('<div id="root"></div>', `<div id="root">${render("/")}</div>`);
await writeFile("dist/client/index.html", home);

for (const page of projectPages) {
  await writeFile(`dist/client/projects/${page.slug}.html`, createPage(template, page));
}

await rm("dist/ssr", { recursive: true, force: true });
