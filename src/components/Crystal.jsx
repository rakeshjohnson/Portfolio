function polar(cx, cy, rx, ry, angle) {
  return [cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)];
}

export default function Crystal({ gradientId, facets = 7 }) {
  const cx = 50;
  const topY = 6;
  const bottomY = 134;
  const girdleY = 50;
  const rx = 42;
  const ry = 11;

  const girdle = Array.from({ length: facets }, (_, i) => polar(cx, girdleY, rx, ry, (i / facets) * Math.PI * 2));

  return (
    <svg viewBox="0 0 100 140" className="crystal-svg" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#c9cdd6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#7d818c" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {girdle.map((pt, i) => {
        const next = girdle[(i + 1) % facets];
        return (
          <polygon
            key={`crown-${i}`}
            points={`${cx},${topY} ${pt[0]},${pt[1]} ${next[0]},${next[1]}`}
            fill={`url(#${gradientId})`}
            opacity={0.35 + 0.45 * Math.abs(Math.sin(i * 1.7))}
            stroke="rgba(201,205,214,0.35)"
            strokeWidth="0.4"
          />
        );
      })}

      {girdle.map((pt, i) => {
        const next = girdle[(i + 1) % facets];
        return (
          <polygon
            key={`pavilion-${i}`}
            points={`${cx},${bottomY} ${pt[0]},${pt[1]} ${next[0]},${next[1]}`}
            fill={`url(#${gradientId})`}
            opacity={0.2 + 0.35 * Math.abs(Math.cos(i * 1.3))}
            stroke="rgba(201,205,214,0.22)"
            strokeWidth="0.4"
          />
        );
      })}
    </svg>
  );
}
