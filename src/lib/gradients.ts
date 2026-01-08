import ColorHash from "color-hash";

const colorHash = new ColorHash({
  saturation: 0.8,
  lightness: 0.45
});

export function avatarFromString(seed: string, size: number) {
  const c1 = colorHash.hex(seed + "a");
  const c2 = colorHash.hex(seed + "b");

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <defs>
    <radialGradient id="glow" cx="35%" cy="30%" r="90%">
      <stop offset="0%" stop-color="${c1}" stop-opacity="1" />
      <stop offset="55%" stop-color="${c2}" stop-opacity=".95" />
    </radialGradient>

    <linearGradient id="shine" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,.25)" />
      <stop offset="50%" stop-color="rgba(255,255,255,0)" />
    </linearGradient>
  </defs>

  <rect width="100%" height="100%" rx="${size / 4}" fill="url(#glow)" />
  <rect width="100%" height="100%" rx="${size / 4}" fill="url(#shine)" />
</svg>
`;

  return `data:image/svg+xml;base64,${btoa(svg)}`;
}
