/** @type {import("next").NextConfig} */
const config = {
  // Disable webpack 5 symlinks following to avoid Windows permission issues
  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ...config.watchOptions,
      followSymlinks: false,
    };
    config.resolve.symlinks = false;
    return config;
  },
};

export default config;
