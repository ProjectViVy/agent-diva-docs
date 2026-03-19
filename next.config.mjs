import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  images: { unoptimized: true },
  // GitHub Pages 部署需要 basePath（项目页为 /repo-name）
  ...(process.env.GITHUB_REPOSITORY && {
    basePath: `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`,
    assetPrefix: `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`,
  }),
  serverExternalPackages: ['@takumi-rs/image-response'],
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
};

export default withMDX(config);
