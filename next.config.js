/** @type {import("next").NextConfig} */
const config = {
  // Enable static export for Netlify
  output: "export",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default config;
