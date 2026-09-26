import path from "node:path";
import { spawnSync } from "node:child_process";

if (process.env.CF_PAGES !== "1") {
  process.exit(0);
}

console.log("[cloudflare] Building Next.js static export during dependency install...");

const nextBin = path.resolve("node_modules", "next", "dist", "bin", "next");
const result = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  env: process.env,
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
