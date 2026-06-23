// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };
//
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

module.exports = nextConfig;