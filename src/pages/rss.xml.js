import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "AIGC提示词",
    description: "提示词大全",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
  });
