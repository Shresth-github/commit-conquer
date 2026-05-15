import { Link } from "react-router-dom";

export default function StoryPage() {
  return (
    <div style={s.page}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        .au-card { animation: fadeUp 0.5s ease both; }
        .au-card:nth-child(2) { animation-delay: 0.1s; }
        .au-card:nth-child(3) { animation-delay: 0.2s; }
      `}</style>

      <section style={s.hero}>
        <div style={s.eyebrow}>Our Story</div>
        <h1 style={s.heroTitle}>From the ground up.</h1>
        <p style={s.heroSub}>
          Commit &amp; Conquer started with a simple belief: clothing should work as hard as you do.
          No logos screaming for attention, no fast-fashion compromise — just thoughtful garments
          built to last.
        </p>
      </section>

      <section style={s.section}>
        <h2 style={s.sectionTitle}>The Journey</h2>
        <p style={s.sectionBody}>
          It all began in a small workshop where we tore apart standard issue apparel to see why it failed so quickly. 
          We realized that by cutting corners, the industry had forgotten what it meant to build something durable.
          Our mission became clear: engineer garments that withstand the test of time and look better with every wear.
        </p>
      </section>

      <div style={{ textAlign: "center", marginTop: 60 }}>
        <Link to="/" style={s.cta}>Shop the Collection →</Link>
      </div>
    </div>
  );
}

const s: Record<string, any> = {
  page:       { maxWidth: 900, margin: "0 auto", padding: "60px 24px 100px" },
  hero:       { textAlign: "center", marginBottom: 80 },
  eyebrow:    { fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#7c6aff", textTransform: "uppercase", marginBottom: 20 },
  heroTitle:  { fontSize: "clamp(36px,6vw,64px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 24 },
  heroSub:    { fontSize: 18, color: "#aaa", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" },
  section:    { borderTop: "1px solid #1c1c21", paddingTop: 60, marginBottom: 60 },
  sectionTitle: { fontSize: 28, fontWeight: 800, marginBottom: 20 },
  sectionBody:  { color: "#aaa", lineHeight: 1.8, fontSize: 16, maxWidth: 680 },
  cta:        { display: "inline-block", padding: "16px 40px", background: "#7c6aff", color: "#fff", textDecoration: "none", borderRadius: 12, fontWeight: 700, fontSize: 16 },
};
