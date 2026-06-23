// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };
//
// export default nextConfig;

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
console.log(process.env.NODE_ENV);
const repoName = "blog"; // 仓库名称

const nextConfig = {
    output: 'export',
    basePath: isProd ? `/${repoName}` : "",
    assetPrefix: isProd ? `/${repoName}/` : "",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;