import { cp, mkdir } from "node:fs/promises";

await mkdir("dist/server", { recursive: true });
await mkdir("dist/client/imgae", { recursive: true });
await cp("server/index.js", "dist/server/index.js");
await cp("imgae/hiiiiiiii.png", "dist/client/imgae/hiiiiiiii.png");
