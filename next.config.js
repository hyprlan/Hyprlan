/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

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
