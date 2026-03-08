/** @type {import("next").NextConfig} */
const config = {
  // Disable webpack 5 symlinks following to avoid Windows permission issues
  webpack: (config, { isServer, dev }) => {
    config.watchOptions = {
      ignored: '**/*',
      followSymlinks: false,
    };
    config.snapshot = {
      managedPaths: [/^(.+?[\\/].+?)(?:[\\/]|$)/],
    };
    config.resolve.symlinks = false;
    config.resolve.modules = ['node_modules'];
    return config;
  },
};

export default config;
