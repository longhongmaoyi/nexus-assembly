/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve pre-compressed assets as-is — Vercel Hobby image optimization
    // is quota-limited (HTTP 402 when exhausted); our assets are already
    // optimized WebP/PNG/JPEG sized for the UI.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.nexusassembly.ca',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
