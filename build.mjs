import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/client/imgae", { recursive: true });
await mkdir("dist/server", { recursive: true });

for (const file of ["index.html", "home.html", "about.html", "project.html", "contact.html", "style.css", "script.js"]) {
  await cp(file, `dist/client/${file}`);
}
await cp("imgae/hiiiiiiii.png", "dist/client/imgae/hiiiiiiii.png");
await cp("server/index.js", "dist/server/index.js");
