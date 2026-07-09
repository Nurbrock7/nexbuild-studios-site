/** @type {import('next').NextConfig} */
const nextConfig = {
  // Phase 1 scaffold: keep builds green while the port stabilizes.
  // Revisit once ESLint is wired up in a later phase.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
