import { execSync } from "child_process";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { createServer } from "net";

const CHROME = "google-chrome";
const OUT = "public/images/projects";

const sites = [
  { name: "eduplatform", url: "https://eduplatform.in" },
  { name: "medconnect", url: "https://medconnecthealth.com" },
  { name: "logitrack", url: "https://logitrack.vip" },
];

function screenshot(url, file, width, height) {
  const path = `${OUT}/${file}`;
  console.log(`Capturing ${url} at ${width}x${height} → ${path}`);
  try {
    execSync(
      `${CHROME} --headless=new --no-sandbox --disable-gpu --disable-dev-shm-usage ` +
        `--window-size=${width},${height} --screenshot="${path}" --screenshot-encoding=png ` +
        `--virtual-time-budget=5000 --hide-scrollbars "${url}" 2>/dev/null`,
      { timeout: 30000 }
    );
    console.log(`  ✓ Done`);
    return path;
  } catch (e) {
    console.error(`  ✗ Failed: ${e.message.slice(0, 100)}`);
    return null;
  }
}

mkdirSync(OUT, { recursive: true });

for (const site of sites) {
  console.log(`\n--- ${site.name} ---`);
  screenshot(site.url, `${site.name}-landscape.png`, 1440, 900);
  screenshot(site.url, `${site.name}-portrait.png`, 390, 844);
}

console.log("\nAll captures complete.");
