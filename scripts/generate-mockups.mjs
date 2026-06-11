import sharp from "sharp";
import { mkdirSync } from "fs";

const OUT = "public/images/projects";

const projects = [
  {
    name: "eduplatform",
    label: "EduPlatform",
    gradient: ["#1e40af", "#3b82f6"],
    badge: "EDTECH",
    features: ["Student Management", "Online Assessments", "Analytics Dashboard"],
  },
  {
    name: "medconnect",
    label: "MedConnect",
    gradient: ["#0d9488", "#14b8a6"],
    badge: "HEALTHCARE",
    features: ["Cloud EHR System", "Patient Portal", "Telemedicine"],
  },
  {
    name: "logitrack",
    label: "LogiTrack",
    gradient: ["#dc2626", "#f97316"],
    badge: "LOGISTICS",
    features: ["Fleet Tracking", "Route Optimization", "Real-time Analytics"],
  },
];

function generateLandscapeSVG(p) {
  const w = 640;
  const h = 420;
  const c = p.gradient;

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c[0]}"/>
        <stop offset="100%" stop-color="${c[1]}"/>
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="6" flood-opacity="0.15"/>
      </filter>
    </defs>

    <!-- Screen bezel -->
    <rect x="20" y="20" width="600" height="380" rx="10" fill="#1a1a2e" filter="url(#shadow)"/>

    <!-- Mac traffic lights -->
    <circle cx="40" cy="42" r="5" fill="#ff5f57"/>
    <circle cx="58" cy="42" r="5" fill="#febc2e"/>
    <circle cx="76" cy="42" r="5" fill="#28c840"/>

    <!-- Browser bar -->
    <rect x="96" y="35" width="200" height="14" rx="7" fill="rgba(255,255,255,0.12)"/>
    <rect x="480" y="36" width="120" height="12" rx="4" fill="rgba(255,255,255,0.08)"/>

    <!-- Screen background -->
    <rect x="24" y="56" width="592" height="340" rx="2" fill="url(#bg)"/>

    <!-- Navbar on screen -->
    <rect x="24" y="56" width="592" height="44" fill="rgba(0,0,0,0.12)" rx="2"/>
    <rect x="40" y="72" width="80" height="14" rx="3" fill="rgba(255,255,255,0.5)"/>
    <rect x="470" y="72" width="60" height="10" rx="2" fill="rgba(255,255,255,0.25)"/>
    <rect x="540" y="72" width="60" height="10" rx="2" fill="rgba(255,255,255,0.25)"/>

    <!-- Content area -->
    <text x="40" y="130" fill="white" font-family="system-ui" font-size="18" font-weight="700">${p.label}</text>
    <rect x="40" y="140" width="80" height="3" rx="1.5" fill="rgba(255,255,255,0.3)"/>

    <text x="40" y="162" fill="rgba(255,255,255,0.7)" font-family="system-ui" font-size="10">${p.badge}</text>

    ${p.features
      .map(
        (f, i) => `<rect x="40" y="${180 + i * 30}" width="280" height="22" rx="4" fill="rgba(255,255,255,0.08)"/>
      <circle cx="52" cy="${191 + i * 30}" r="3" fill="rgba(255,255,255,0.5)"/>
      <text x="64" y="${195 + i * 30}" fill="rgba(255,255,255,0.85)" font-family="system-ui" font-size="11">${f}</text>`
      )
      .join("\n    ")}

    <!-- Right side illustration blocks -->
    <rect x="360" y="120" width="200" height="120" rx="8" fill="rgba(255,255,255,0.06)"/>
    <rect x="380" y="140" width="120" height="8" rx="4" fill="rgba(255,255,255,0.15)"/>
    <rect x="380" y="156" width="160" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
    <rect x="380" y="168" width="140" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
    <rect x="380" y="186" width="100" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
    <rect x="380" y="210" width="80" height="18" rx="4" fill="rgba(255,255,255,0.15)"/>
  </svg>`);
}

function generatePortraitSVG(p) {
  const w = 320;
  const h = 520;
  const c = p.gradient;

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${c[0]}"/>
        <stop offset="100%" stop-color="${c[1]}"/>
      </linearGradient>
      <filter id="shadow">
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.2"/>
      </filter>
    </defs>

    <!-- Phone body -->
    <rect x="40" y="20" width="240" height="480" rx="24" fill="#111" filter="url(#shadow)"/>
    <rect x="40" y="20" width="240" height="480" rx="24" fill="none" stroke="#333" stroke-width="0.5"/>

    <!-- Notch -->
    <rect x="130" y="28" width="60" height="6" rx="3" fill="#000"/>

    <!-- Screen -->
    <rect x="48" y="42" width="224" height="450" rx="4" fill="url(#bg)"/>

    <!-- Status bar -->
    <rect x="48" y="42" width="224" height="10" fill="rgba(0,0,0,0.1)" rx="4"/>
    <rect x="230" y="44" width="30" height="5" rx="2" fill="rgba(255,255,255,0.3)"/>

    <!-- Content -->
    <text x="64" y="90" fill="white" font-family="system-ui" font-size="14" font-weight="700">${p.label}</text>
    <rect x="64" y="98" width="40" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>

    <text x="64" y="116" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="8">${p.badge}</text>

    ${p.features
      .map(
        (f, i) => `<rect x="64" y="${132 + i * 28}" width="192" height="20" rx="4" fill="rgba(255,255,255,0.06)"/>
      <circle cx="76" cy="${142 + i * 28}" r="2.5" fill="rgba(255,255,255,0.4)"/>
      <text x="88" y="${146 + i * 28}" fill="rgba(255,255,255,0.85)" font-family="system-ui" font-size="9">${f}</text>`
      )
      .join("\n    ")}

    <!-- Chart block -->
    <rect x="64" y="216" width="192" height="100" rx="6" fill="rgba(255,255,255,0.05)"/>
    <rect x="80" y="240" width="60" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
    <rect x="80" y="254" width="160" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
    <rect x="80" y="268" width="140" height="4" rx="2" fill="rgba(255,255,255,0.06)"/>

    <!-- Bottom nav -->
    <rect x="48" y="480" width="224" height="12" fill="rgba(0,0,0,0.1)" rx="0 0 4 4"/>
    <circle cx="100" cy="486" r="3" fill="rgba(255,255,255,0.3)"/>
    <circle cx="160" cy="486" r="3" fill="rgba(255,255,255,0.5)"/>
    <circle cx="220" cy="486" r="3" fill="rgba(255,255,255,0.3)"/>

    <!-- Home indicator -->
    <rect x="140" y="494" width="40" height="3" rx="1.5" fill="rgba(255,255,255,0.15)"/>
  </svg>`);
}

mkdirSync(OUT, { recursive: true });

(async () => {
  for (const p of projects) {
    console.log(`\n--- ${p.label} ---`);

    const landBuf = generateLandscapeSVG(p);
    const landPath = `${OUT}/${p.name}-landscape.png`;
    await sharp(landBuf).resize(640 * 2, 420 * 2).png().toFile(landPath);
    console.log(`  ✓ ${landPath}`);

    const portBuf = generatePortraitSVG(p);
    const portPath = `${OUT}/${p.name}-portrait.png`;
    await sharp(portBuf).resize(320 * 2, 520 * 2).png().toFile(portPath);
    console.log(`  ✓ ${portPath}`);
  }
})();
