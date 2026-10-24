/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML/CSS/JS export: `npm run build` writes the site to /out.
  // (cacheComponents / partialPrefetching were removed: they enable partial
  // prerendering, which needs a server and can't be used with an export.)
  output: "export",
  // Export /contact as /contact/index.html so links work on any static host
  // without rewrite rules
  trailingSlash: true,
};

export default nextConfig;
