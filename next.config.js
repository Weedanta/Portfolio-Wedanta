/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // These are barrel-file packages: importing one symbol pulls the whole
    // index into the client bundle, which is what showed up as unused
    // JavaScript in the Lighthouse report.
    optimizePackageImports: ['react-icons', 'framer-motion', 'lucide-react'],
  },
};

module.exports = nextConfig;
