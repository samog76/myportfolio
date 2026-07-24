import { cp, mkdir } from "node:fs/promises";

await mkdir("dist/server", { recursive: true });
await mkdir("dist/client/imgae", { recursive: true });
await cp("server/index.js", "dist/server/index.js");
await cp("imgae/hero-portrait.jpg", "dist/client/imgae/hero-portrait.jpg");
await cp("imgae/projects", "dist/client/imgae/projects", { recursive: true });
