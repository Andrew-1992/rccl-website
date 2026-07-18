import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Fixes "Next.js inferred your workspace root, but it may not be
    // correct" on machines where a parent folder (e.g. another package.json
    // or lockfile higher up in Users\<name>\...) confuses Turbopack's
    // automatic root detection. This pins the root to this project folder.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
