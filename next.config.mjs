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
        hostname: '**.nexus-assembly.vercel.app',
      },
    ],
  },
  async redirects() {
    return [
      // Legacy routes from the previous site → trilingual equivalents
      { source: '/en/assembly-home', destination: '/en', permanent: true },
      { source: '/assembly-centre', destination: '/en/assembly', permanent: true },
      { source: '/why-nexus', destination: '/en/about', permanent: true },
      { source: '/compliance', destination: '/en/engineering-compliance', permanent: true },
      { source: '/resources', destination: '/en/products', permanent: true },
      { source: '/food-trailers', destination: '/en/products/mobile-commercial-units', permanent: true },
      { source: '/modular-spaces', destination: '/en/products/modular-living-spaces', permanent: true },
      { source: '/enclosed-cargo', destination: '/en/products/enclosed-trailers', permanent: true },
      { source: '/waste-solutions', destination: '/en/products/commercial-waste-solutions', permanent: true },
      { source: '/utility-trailers', destination: '/en/products', permanent: true },
    ]
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
