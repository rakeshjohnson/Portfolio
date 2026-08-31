import Crystal from "./Crystal";

const CRYSTALS = [
  { top: "6%", left: "4%", size: 80, depth: 16, duration: 9, delay: 0, rotate: -14 },
  { top: "14%", left: "93%", size: 110, depth: 26, duration: 11, delay: 0.6, rotate: 10 },
  { top: "40%", left: "2%", size: 60, depth: 12, duration: 8, delay: 0.3, rotate: 22 },
  { top: "52%", left: "95%", size: 90, depth: 20, duration: 10, delay: 1.4, rotate: -18 },
  { top: "74%", left: "5%", size: 100, depth: 22, duration: 12, delay: 0.9, rotate: 8 },
  { top: "86%", left: "90%", size: 70, depth: 15, duration: 9.5, delay: 0.4, rotate: -8 },
  { top: "94%", left: "12%", size: 55, depth: 10, duration: 7.5, delay: 1.1, rotate: 16 },
];

export default function CrystalField() {
  return (
    <div className="crystal-field" aria-hidden="true">
      {CRYSTALS.map((c, i) => (
        <div
          key={i}
          className="crystal-slot"
          style={{
            top: c.top,
            left: c.left,
            width: c.size,
            height: c.size * 1.4,
            "--depth": c.depth,
          }}
        >
          <div
            className="crystal-float"
            style={{
              "--rot": `${c.rotate}deg`,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
            }}
          >
            <Crystal gradientId={`crystalGrad-${i}`} facets={6 + (i % 3)} />
          </div>
        </div>
      ))}
    </div>
  );
}
