import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

// Derive web assets from the supplied artwork without redrawing the logo.
// Keep the original so every generated size can be reproduced.
const source = new URL("../src/assets/brand/logo-original.png", import.meta.url);
const publicDir = new URL("../public/", import.meta.url);
const logo = await sharp(await readFile(source))
  .extract({ left: 350, top: 850, width: 1280, height: 420 })
  .png()
  .toBuffer();

await writeFile(new URL("logo.png", publicDir), logo);

// The W and its network detail remain legible at browser-icon sizes.
const mark = await sharp(await readFile(source))
  .extract({ left: 598, top: 870, width: 288, height: 190 })
  .png()
  .toBuffer();

async function icon(size) {
  const inset = Math.max(1, Math.round(size * 0.08));
  return sharp(mark)
    .resize(size - inset * 2, size - inset * 2, {
      fit: "contain",
      background: "white",
    })
    .extend({ top: inset, bottom: inset, left: inset, right: inset, background: "white" })
    .ensureAlpha()
    .png()
    .toBuffer();
}

await writeFile(new URL("favicon.png", publicDir), await icon(192));
await writeFile(new URL("apple-icon.png", publicDir), await icon(180));

// ICO supports PNG payloads. Include multiple native sizes for browser tabs.
const sizes = [16, 32, 48, 64, 128];
const images = await Promise.all(sizes.map(icon));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (const [i, png] of images.entries()) {
  const entry = 6 + i * 16;
  header[entry] = sizes[i];
  header[entry + 1] = sizes[i];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(png.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += png.length;
}
const ico = Buffer.concat([header, ...images]);
await writeFile(new URL("favicon.ico", publicDir), ico);
await writeFile(new URL("../src/app/favicon.ico", import.meta.url), ico);

const socialLogo = await sharp(logo).resize({ width: 1000 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "white" } })
  .composite([{ input: socialLogo, gravity: "centre" }])
  .png()
  .toFile(new URL("og-image.png", publicDir).pathname);

console.log("Generated logo, social preview, browser icons, and Apple icon from the official artwork.");
