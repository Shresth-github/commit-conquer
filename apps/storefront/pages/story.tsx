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
          It all began in a small workshop where we tore apart standard issue apparel to see why it failed so quickly.
          We realized that by cutting corners, the industry had forgotten what it meant to build something durable.
          Our mission became clear: engineer garments that withstand the test of time and look better with every wear
        </p>
      </section>

      <div style={s.cards}>
        {[
          { icon: "◈", title: "Radical Utility", body: "We get rid of the noise. A seam that doesn’t reinforce a stress point or a pocket that serves a purpose doesn’t make the cut." },
          { icon: "⬡", title: "Built to Last", body: "This is armor for the daily grind. We use heavyweight cotton and construction techniques borrowed from military gear." },
          { icon: "○", title: "Radical Transparency", body: "You deserve to know what you’re paying for. We break down the cost of every garment so you know exactly where your money goes." },
        ].map((c) => (
          <div key={c.title} className="au-card" style={s.card}>
            <div style={s.cardIcon}>{c.icon}</div>
            <h3 style={s.cardTitle}>{c.title}</h3>
            <p style={s.cardBody}>{c.body}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 60 }}>
        <Link to="/" style={s.cta}>Shop the Collection →</Link>
      </div>
    </div>
  );
}

const s: Record<string, any> = {
  page: { maxWidth: 900, margin: "0 auto", padding: "60px 24px 100px" },
  hero: { textAlign: "center", marginBottom: 80 },
  eyebrow: { fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#7c6aff", textTransform: "uppercase", marginBottom: 20 },
  heroTitle: { fontSize: "clamp(36px,6vw,64px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 24 },
  heroSub: { fontSize: 18, color: "#aaa", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24, marginBottom: 80 },
  card: { background: "#141417", border: "1px solid #2a2a31", borderRadius: 16, padding: 32 },
  cardIcon: { fontSize: 28, marginBottom: 16, color: "#7c6aff" },
  cardTitle: { fontSize: 18, fontWeight: 700, marginBottom: 10 },
  cardBody: { color: "#aaa", lineHeight: 1.7, fontSize: 15 },
  section: { borderTop: "1px solid #1c1c21", paddingTop: 60, marginBottom: 60 },
  sectionTitle: { fontSize: 28, fontWeight: 800, marginBottom: 20 },
  sectionBody: { color: "#aaa", lineHeight: 1.8, fontSize: 16, maxWidth: 680 },
  cta: { display: "inline-block", padding: "16px 40px", background: "#7c6aff", color: "#fff", textDecoration: "none", borderRadius: 12, fontWeight: 700, fontSize: 16 },
};
