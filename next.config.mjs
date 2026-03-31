import path from 'path'
import { fileURLToPath } from 'url'
import { realpathSync } from 'fs'

// Resolve the canonical path to avoid Windows OneDrive case-mismatch
// loading React/Next.js twice (e.g. OneDrive vs onedrive).
const appDir = realpathSync(fileURLToPath(new URL('.', import.meta.url)))
const r = (pkg) => path.join(appDir, 'node_modules', pkg)

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: r('react'),
      'react-dom': r('react-dom'),
      'react/jsx-runtime': r('react/jsx-runtime'),
      'react/jsx-dev-runtime': r('react/jsx-dev-runtime'),
    }
    return config
  },
};

export default nextConfig;
