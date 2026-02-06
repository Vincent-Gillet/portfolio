/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    rules: {
      '*.pdf': {
        loaders: ['file-loader'],
        as: '*.pdf',
      },
    },
  },
}

export default nextConfig