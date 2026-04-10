import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@splinetool/runtime"],
  webpack: (config, { isServer }) => {
    // Enable async WebAssembly support
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };

    // Treat .wasm files as async assets
    config.module.rules.push({
      test: /\.wasm$/,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
