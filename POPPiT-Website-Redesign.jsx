import { useState, useEffect } from "react";

const COLORS = {
  black: "#0a0a0a",
  white: "#f5f5f0",
  magenta: "#ff2d7b",
  electric: "#00d4ff",
  lime: "#b8ff00",
  yellow: "#ffe600",
  darkGray: "#1a1a1a",
  midGray: "#2a2a2a",
  goldLight: "#f5d44b",
  goldMid: "#e8b820",
  goldDark: "#c49518",
  red: "#a81c1c",
  deepRed: "#7a1414",
  orange: "#d4701a",
};

const FLAVORS = [
  {
    name: "Blue Raspberry",
    subtitle: "Electric. Tangy. Unhinged.",
    bg: "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1a0a2e 100%)",
    accent: "#00d4ff",
    protein: "10g", fiber: "5g", calories: "80", sugar: "2g",
    gummyColor1: "#00b4ff", gummyColor2: "#0066cc", gummyColor3: "#44ddff",
    price: "$34.99", unit: "12-Pack",
  },
  {
    name: "Strawberry",
    subtitle: "Sweet. Bold. Absolutely feral.",
    bg: "linear-gradient(135deg, #1a0a12 0%, #3d0a1e 40%, #1a0a2e 100%)",
    accent: "#ff2d7b",
    protein: "10g", fiber: "5g", calories: "80", sugar: "2g",
    gummyColor1: "#ff2d7b", gummyColor2: "#cc0055", gummyColor3: "#ff69b4",
    price: "$34.99", unit: "12-Pack",
  },
  {
    name: "Lemon-Lime",
    subtitle: "Sour. Bright. Absolutely electric.",
    bg: "linear-gradient(135deg, #0a1a0a 0%, #1a2e0a 40%, #0a1a12 100%)",
    accent: "#b8ff00",
    protein: "10g", fiber: "5g", calories: "75", sugar: "2g",
    gummyColor1: "#b8ff00", gummyColor2: "#7acc00", gummyColor3: "#e0ff66",
    price: "$34.99", unit: "12-Pack",
  },
];

const REVIEWS = [
  { text: "One of the top five best things I've ever put in my mouth.", name: "Alex R.", stars: 5 },
  { text: "Wait these are actually candy?? With 10g protein?? Shut up.", name: "Jess M.", stars: 5 },
  { text: "My gym bros think I'm eating candy. I am. It just has protein.", name: "Derek T.", stars: 5 },
  { text: "Replaced my 3pm protein bar habit. Never going back.", name: "Sam K.", stars: 4 },
  { text: "The blue raspberry ones are genuinely addictive. Help.", name: "Mia L.", stars: 5 },
  { text: "Bought one bag. Now I subscribe. It happened that fast.", name: "Chris P.", stars: 5 },
];

const FAQS = [
  { q: "How much protein is in each serving?", a: "10 grams of clean peptide protein per serving. That's not a typo. These are gummies that actually do something." },
  { q: "Are these actually gummies or are you lying to me?", a: "Real gummies. Real candy texture. Real protein. We spent over a year in R&D making sure these taste like something you'd steal from a candy store, not something you'd choke down at the gym." },
  { q: "What's the sugar situation?", a: "Low. Like, embarrassingly low for something this delicious. We're talking 2g of sugar per serving. The sweetness comes from allulose and natural flavors, not a sugar bomb." },
  { q: "Are these safe for kids?", a: "They're safe for anyone who eats food. No weird stuff, no banned substances, just clean ingredients. That said, they're formulated for adults who want functional nutrition that doesn't taste like chalk." },
  { q: "Do you ship internationally?", a: "Not yet, but it's coming. Right now we ship everywhere in the US. Sign up for our email list and we'll let you know when we go global." },
];

function PoppitLogo({ size = "hero" }) {
  const sizes = {
    hero: { maxWidth: "min(500px, 85vw)", height: "auto" },
    large: { maxWidth: "min(360px, 70vw)", height: "auto" },
    medium: { maxWidth: "min(260px, 55vw)", height: "auto" },
    small: { maxWidth: "min(200px, 45vw)", height: "auto" },
    nav: { maxWidth: "120px", height: "auto" },
    footer: { maxWidth: "140px", height: "auto" },
    product: { maxWidth: "120px", height: "auto" },
  };
  const s = sizes[size] || sizes.medium;
  // NOTE: Replace LOGO_HERO and LOGO_NAV with actual base64 strings or image paths
  const src = size === "nav" ? "/logo-nav.png" : "/logo-hero.png";

  return (
    <img
      src={src}
      alt="POPPiT"
      style={{
        ...s,
        display: "block",
        objectFit: "contain",
        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
      }}
      draggable={false}
    />
  );
}

function Tagline({ size = "hero" }) {
  const fontSizes = {
    hero: "clamp(16px, 3vw, 28px)",
    large: "clamp(14px, 2.5vw, 22px)",
    medium: "clamp(12px, 2vw, 18px)",
  };
  return (
    <div style={{
      fontFamily: "'Boogaloo', 'Lilita One', cursive",
      fontSize: fontSizes[size] || fontSizes.medium,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      backgroundImage: "linear-gradient(180deg, #fce588 0%, #e8b820 50%, #c49518 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "none",
      filter: "drop-shadow(1px 2px 0px #7a1414)",
      textAlign: "center",
    }}>
      savor the moment
    </div>
  );
}

function SectionHeading({ children, size = "large" }) {
  const fontSizes = {
    large: "clamp(36px, 6vw, 64px)",
    medium: "clamp(28px, 5vw, 48px)",
    small: "clamp(24px, 4vw, 36px)",
  };
  return (
    <h2 style={{
      fontFamily: "'Boogaloo', 'Lilita One', cursive",
      fontSize: fontSizes[size] || fontSizes.medium,
      fontWeight: 400,
      lineHeight: 1.05,
      color: "transparent",
      backgroundImage: "linear-gradient(180deg, #fce588 0%, #f5d44b 25%, #e8b820 55%, #c49518 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      filter: "drop-shadow(3px 4px 0px #7a1414) drop-shadow(2px 3px 0px #a81c1c)",
      textAlign: "center",
      margin: 0,
    }}>
      {children}
    </h2>
  );
}

function TopBanner() {
  const msgs = [
    "FREE SHIPPING ON ORDERS $40+",
    "SUBSCRIBE & SAVE 15%",
    "10G PROTEIN • 5G FIBER • LOW SUGAR",
    "CANDY, REIMAGINED",
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % msgs.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{
      background: COLORS.red, color: "#fce588", textAlign: "center",
      padding: "8px 16px", fontFamily: "'Space Mono', monospace",
      fontSize: 11, letterSpacing: 2, fontWeight: 700, zIndex: 100,
    }}>
      {msgs[idx]}
    </div>
  );
}

function Nav({ scrolled }) {
  const [shopOpen, setShopOpen] = useState(false);
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 99,
      background: scrolled ? "rgba(10,10,10,0.97)" : "rgba(10,10,10,0.85)",
      backdropFilter: "blur(20px)", padding: "0 32px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 64,
      borderBottom: scrolled ? "1px solid #2a2a2a" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <div style={{ position: "relative" }}
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <span style={{
            color: COLORS.white, fontFamily: "'Space Mono', monospace",
            fontSize: 13, letterSpacing: 2, cursor: "pointer", textTransform: "uppercase",
          }}>Shop</span>
          {shopOpen && (
            <div style={{
              position: "absolute", top: "100%", left: -16, background: COLORS.darkGray,
              border: "1px solid #2a2a2a", borderRadius: 12, padding: 20,
              display: "flex", gap: 16, minWidth: 420, marginTop: 8,
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}>
              {FLAVORS.map((f, i) => (
                <div key={i} style={{
                  textAlign: "center", cursor: "pointer", padding: 12,
                  borderRadius: 8, transition: "background 0.2s", flex: 1,
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <div style={{
                    width: 80, height: 80, borderRadius: "50%", margin: "0 auto 8px",
                    background: `radial-gradient(circle, ${f.gummyColor3}, ${f.gummyColor1})`,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32,
                  }}>🍬</div>
                  <div style={{
                    color: f.accent, fontFamily: "'Space Mono', monospace",
                    fontSize: 11, letterSpacing: 1, fontWeight: 700,
                  }}>{f.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <span style={{
          color: COLORS.white, fontFamily: "'Space Mono', monospace",
          fontSize: 13, letterSpacing: 2, cursor: "pointer", textTransform: "uppercase",
        }}>Learn</span>
      </div>

      <div style={{
        position: "absolute", left: "50%", transform: "translateX(-50%)",
        display: "flex", alignItems: "center",
      }}>
        <PoppitLogo size="nav" />
      </div>

      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <span style={{
          color: COLORS.white, fontFamily: "'Space Mono', monospace",
          fontSize: 13, letterSpacing: 2, cursor: "pointer", textTransform: "uppercase",
        }}>Subscribe</span>
        <div style={{
          width: 36, height: 36, borderRadius: "50%", border: "1px solid #2a2a2a",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: COLORS.white, fontSize: 16,
        }}>🛒</div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: `
        radial-gradient(ellipse at 20% 40%, rgba(168,28,28,0.2) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 30%, rgba(245,212,75,0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 80%, rgba(212,112,26,0.08) 0%, transparent 50%),
        ${COLORS.black}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden", flexDirection: "column",
      padding: "40px 24px",
    }}>
      {[...Array(16)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: 20 + Math.random() * 55,
          height: 20 + Math.random() * 55,
          borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
          background: ["#ff2d7b", "#00d4ff", "#b8ff00", "#f5d44b", "#a81c1c", "#d4701a"][i % 6],
          opacity: 0.08 + Math.random() * 0.1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `floatGummy ${4 + Math.random() * 6}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
          filter: "blur(1px)",
        }} />
      ))}

      <div style={{
        textAlign: "center", zIndex: 2, maxWidth: 900,
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        <div style={{
          fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: 6,
          color: "rgba(245,245,240,0.35)", marginBottom: 28, textTransform: "uppercase",
        }}>Introducing</div>

        <PoppitLogo size="hero" />

        <div style={{ marginTop: 16 }}>
          <Tagline size="hero" />
        </div>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(15px, 2.2vw, 20px)",
          color: "rgba(245,245,240,0.45)",
          marginTop: 24, marginBottom: 36, lineHeight: 1.5,
        }}>
          10g protein. 5g fiber. Low sugar. All attitude.
        </p>

        <button style={{
          fontFamily: "'Space Mono', monospace", fontSize: 14, letterSpacing: 3,
          textTransform: "uppercase", background: COLORS.red, color: "#fce588",
          border: "none", padding: "18px 48px", borderRadius: 50,
          cursor: "pointer", fontWeight: 700, transition: "all 0.3s ease",
          boxShadow: "0 0 40px rgba(168,28,28,0.4)",
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 60px rgba(168,28,28,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 0 40px rgba(168,28,28,0.4)";
          }}
        >Shop Now</button>
      </div>

      <div style={{
        position: "absolute", bottom: 32, left: "50%",
        transform: "translateX(-50%)", animation: "bounce 2s ease-in-out infinite",
      }}>
        <div style={{
          width: 28, height: 44, border: "2px solid rgba(245,245,240,0.15)",
          borderRadius: 14, display: "flex", justifyContent: "center", paddingTop: 8,
        }}>
          <div style={{
            width: 4, height: 10, background: COLORS.goldMid,
            borderRadius: 2, animation: "scrollDot 2s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}

function TickerBanner() {
  const line1 = "SAVOR THE MOMENT • SAVOR THE MOMENT • SAVOR THE MOMENT • SAVOR THE MOMENT • SAVOR THE MOMENT • SAVOR THE MOMENT • ";
  const line2 = "10G PROTEIN PER SERVING ✦ NO ARTIFICIAL COLORS ✦ BOUNCY & CHEWY ✦ TASTES LIKE CANDY ✦ 5G FIBER ✦ LOW SUGAR ✦ POWERED BY PEPTIDES ✦ ";
  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{
        padding: "14px 0", fontFamily: "'Boogaloo', cursive", fontSize: 20,
        letterSpacing: 4, color: "#fce588",
        whiteSpace: "nowrap", animation: "ticker 18s linear infinite",
        background: COLORS.red,
      }}>{line1}{line1}</div>
      <div style={{
        padding: "10px 0", fontFamily: "'DM Sans', sans-serif", fontSize: 12,
        letterSpacing: 2, color: COLORS.deepRed,
        background: COLORS.goldLight, fontWeight: 600,
        whiteSpace: "nowrap", animation: "tickerReverse 25s linear infinite",
      }}>{line2}{line2}</div>
    </div>
  );
}

function FloatingGummy({ color, size, left, top, delay }) {
  return (
    <div style={{
      position: "absolute",
      width: size, height: size * 0.85,
      borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
      background: `radial-gradient(ellipse at 35% 30%, ${color}dd, ${color}88)`,
      boxShadow: `0 4px 20px ${color}44, inset 0 -3px 8px ${color}33`,
      left, top,
      animation: `floatGummy ${5 + Math.random() * 4}s ease-in-out infinite`,
      animationDelay: `${delay}s`, opacity: 0.7,
    }} />
  );
}

function ProductSection({ flavor, index }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;
  const gummies = [
    { size: 45, left: "5%", top: "15%", delay: 0 },
    { size: 35, left: "12%", top: "60%", delay: 1.2 },
    { size: 50, left: "20%", top: "35%", delay: 0.5 },
    { size: 30, left: "75%", top: "20%", delay: 2 },
    { size: 40, left: "82%", top: "55%", delay: 0.8 },
    { size: 55, left: "88%", top: "75%", delay: 1.5 },
  ];

  return (
    <section style={{
      background: flavor.bg, minHeight: 500, position: "relative",
      overflow: "hidden", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "60px 32px",
    }}>
      {gummies.map((g, i) => (
        <FloatingGummy key={i}
          color={[flavor.gummyColor1, flavor.gummyColor2, flavor.gummyColor3][i % 3]}
          size={g.size} left={g.left} top={g.top} delay={g.delay}
        />
      ))}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: `radial-gradient(circle, ${flavor.accent}15, transparent)`,
        left: "50%", top: "50%", transform: "translate(-50%, -50%)",
        filter: "blur(60px)",
      }} />

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 60, maxWidth: 1000, width: "100%",
        position: "relative", zIndex: 2,
        flexDirection: isEven ? "row" : "row-reverse", flexWrap: "wrap",
      }}>
        <div style={{
          flex: "1 1 280px", display: "flex", alignItems: "center",
          justifyContent: "center", minHeight: 300,
        }}>
          <div style={{
            width: 210, height: 270, borderRadius: 20,
            background: `linear-gradient(180deg, ${flavor.accent}18, ${flavor.accent}05)`,
            border: `2px solid ${flavor.accent}33`,
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", gap: 10,
            boxShadow: `0 20px 60px ${flavor.accent}11`,
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.05) translateY(-8px)" : "scale(1)",
          }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div style={{ fontSize: 64 }}>🍬</div>
            <PoppitLogo size="product" />
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: 10,
              letterSpacing: 2, color: "rgba(245,245,240,0.5)",
              textTransform: "uppercase",
            }}>Protein Candy</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 14,
              color: flavor.accent, fontWeight: 700,
            }}>{flavor.name}</div>
          </div>
        </div>

        <div style={{ flex: "1 1 320px", maxWidth: 400 }}>
          <h3 style={{
            fontFamily: "'Boogaloo', cursive",
            fontSize: "clamp(36px, 5vw, 56px)",
            color: COLORS.white, margin: 0, lineHeight: 1,
          }}>{flavor.name}</h3>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16,
            color: "rgba(245,245,240,0.6)", margin: "12px 0 24px", lineHeight: 1.5,
          }}>{flavor.subtitle}</p>

          <div style={{ display: "flex", gap: 16, marginBottom: 28, flexWrap: "wrap" }}>
            {[
              { label: "PROTEIN", value: flavor.protein },
              { label: "FIBER", value: flavor.fiber },
              { label: "SUGAR", value: flavor.sugar },
              { label: "CALORIES", value: flavor.calories },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign: "center", padding: "12px 14px",
                background: "rgba(255,255,255,0.04)", borderRadius: 12,
                border: `1px solid ${flavor.accent}22`, minWidth: 65,
              }}>
                <div style={{
                  fontFamily: "'Boogaloo', cursive", fontSize: 26,
                  color: flavor.accent,
                }}>{s.value}</div>
                <div style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 9,
                  letterSpacing: 2, color: "rgba(245,245,240,0.4)", marginTop: 4,
                }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <button style={{
              fontFamily: "'Space Mono', monospace", fontSize: 12,
              letterSpacing: 2, textTransform: "uppercase",
              background: flavor.accent, color: COLORS.black,
              border: "none", padding: "16px 32px", borderRadius: 50,
              cursor: "pointer", fontWeight: 700, transition: "all 0.2s ease",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Add to Cart — {flavor.price}
            </button>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 12,
              color: "rgba(245,245,240,0.4)", cursor: "pointer",
              textDecoration: "underline",
            }}>Nutrition Info</span>
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 11,
            color: "rgba(245,245,240,0.3)", marginTop: 8,
          }}>{flavor.unit}</div>
        </div>
      </div>
    </section>
  );
}

function VarietyPackBanner() {
  return (
    <section style={{ background: COLORS.darkGray, padding: "60px 32px", textAlign: "center" }}>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: 11,
        letterSpacing: 4, color: COLORS.goldMid,
        textTransform: "uppercase", marginBottom: 16,
      }}>Can't decide?</div>
      <SectionHeading size="medium">Variety Pack</SectionHeading>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 16,
        color: "rgba(245,245,240,0.5)", marginTop: 8, marginBottom: 32,
      }}>All three flavors. One box. Zero regret.</p>
      <div style={{
        display: "flex", justifyContent: "center", gap: 24,
        marginBottom: 32, flexWrap: "wrap",
      }}>
        {FLAVORS.map((f, i) => (
          <div key={i} style={{
            width: 80, height: 80, borderRadius: "50%",
            background: `radial-gradient(circle, ${f.gummyColor3}, ${f.gummyColor1})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, boxShadow: `0 4px 20px ${f.accent}33`,
          }}>🍬</div>
        ))}
      </div>
      <button style={{
        fontFamily: "'Space Mono', monospace", fontSize: 12,
        letterSpacing: 2, textTransform: "uppercase",
        background: "transparent", color: COLORS.white,
        border: `2px solid ${COLORS.red}`,
        padding: "16px 40px", borderRadius: 50,
        cursor: "pointer", fontWeight: 700, transition: "all 0.2s ease",
      }}
        onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.red; e.currentTarget.style.color = "#fce588"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = COLORS.white; }}
      >
        Add Variety Pack — $44.99
      </button>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section style={{
      background: COLORS.black, padding: "80px 32px",
      textAlign: "center", overflow: "hidden",
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: 11,
        letterSpacing: 4, color: COLORS.goldMid,
        textTransform: "uppercase", marginBottom: 16,
      }}>What people are saying</div>
      <div style={{ marginBottom: 48 }}>
        <SectionHeading size="medium">Real Talk</SectionHeading>
      </div>
      <div style={{
        display: "flex", gap: 24, justifyContent: "center",
        flexWrap: "wrap", maxWidth: 900, margin: "0 auto",
      }}>
        {REVIEWS.slice(0, 3).map((r, i) => (
          <div key={i} style={{
            flex: "1 1 250px", maxWidth: 280, background: COLORS.darkGray,
            borderRadius: 16, padding: 28, border: "1px solid #2a2a2a",
            textAlign: "left", transition: "transform 0.3s ease, border-color 0.3s ease",
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = COLORS.goldMid + "44";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#2a2a2a";
            }}
          >
            <div style={{ color: COLORS.goldLight, fontSize: 16, marginBottom: 12, letterSpacing: 2 }}>
              {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              color: "rgba(245,245,240,0.8)", lineHeight: 1.6,
              margin: "0 0 16px", fontStyle: "italic",
            }}>"{r.text}"</p>
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: 11,
              color: COLORS.goldMid, letterSpacing: 1,
            }}>— {r.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SubscribeSection() {
  return (
    <section style={{
      background: `linear-gradient(135deg, rgba(168,28,28,0.1), rgba(245,212,75,0.05), rgba(212,112,26,0.05))`,
      borderTop: "1px solid #2a2a2a", borderBottom: "1px solid #2a2a2a",
      padding: "80px 32px", textAlign: "center",
    }}>
      <SectionHeading size="large">Never Run Dry.</SectionHeading>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 18,
        color: "rgba(245,245,240,0.5)", marginTop: 12,
        marginBottom: 40, maxWidth: 500, marginLeft: "auto", marginRight: "auto",
      }}>
        Subscribe and never think about it again. Your protein candy shows up, you eat it, life is good.
      </p>
      <div style={{
        display: "flex", justifyContent: "center", gap: 32,
        marginBottom: 40, flexWrap: "wrap",
      }}>
        {[
          { icon: "💰", label: "Save 15% every order" },
          { icon: "🚀", label: "Early access to drops" },
          { icon: "📦", label: "Free shipping, always" },
          { icon: "✌️", label: "Skip or cancel anytime" },
        ].map((b, i) => (
          <div key={i} style={{ textAlign: "center", flex: "0 0 140px" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>{b.icon}</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 13,
              color: "rgba(245,245,240,0.7)", lineHeight: 1.4,
            }}>{b.label}</div>
          </div>
        ))}
      </div>
      <button style={{
        fontFamily: "'Space Mono', monospace", fontSize: 14,
        letterSpacing: 3, textTransform: "uppercase",
        background: COLORS.goldMid, color: COLORS.black,
        border: "none", padding: "18px 48px", borderRadius: 50,
        cursor: "pointer", fontWeight: 700, transition: "all 0.3s ease",
      }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >Subscribe & Save</button>
    </section>
  );
}

function FindUsSection() {
  return (
    <section style={{ background: COLORS.darkGray, padding: "60px 32px", textAlign: "center" }}>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: 11,
        letterSpacing: 4, color: COLORS.goldMid,
        textTransform: "uppercase", marginBottom: 24,
      }}>Coming soon</div>
      <SectionHeading size="small">Find Us Near You</SectionHeading>
      <div style={{
        display: "flex", justifyContent: "center", gap: 40,
        flexWrap: "wrap", marginTop: 24, marginBottom: 32, opacity: 0.3,
      }}>
        {["TARGET", "WHOLE FOODS", "SPROUTS", "EREWHON", "GNC"].map((r, i) => (
          <span key={i} style={{
            fontFamily: "'Space Mono', monospace", fontSize: 14,
            letterSpacing: 3, color: COLORS.white,
          }}>{r}</span>
        ))}
      </div>
      <button style={{
        fontFamily: "'Space Mono', monospace", fontSize: 12,
        letterSpacing: 2, textTransform: "uppercase",
        background: "transparent", color: COLORS.goldMid,
        border: `1px solid ${COLORS.goldMid}44`,
        padding: "14px 32px", borderRadius: 50, cursor: "pointer",
      }}>Get Notified When We Drop</button>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section style={{ background: COLORS.black, padding: "80px 32px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <SectionHeading size="medium">FAQ</SectionHeading>
        </div>
        {FAQS.map((faq, i) => (
          <div key={i} style={{
            borderBottom: "1px solid #2a2a2a", padding: "20px 0", cursor: "pointer",
          }} onClick={() => setOpen(open === i ? null : i)}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 16,
                color: COLORS.white, fontWeight: 500,
              }}>{faq.q}</span>
              <span style={{
                color: COLORS.goldMid, fontSize: 24, fontWeight: 300,
                transition: "transform 0.3s ease",
                transform: open === i ? "rotate(45deg)" : "rotate(0)",
                flexShrink: 0, marginLeft: 16,
              }}>+</span>
            </div>
            {open === i && (
              <p style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                color: "rgba(245,245,240,0.6)", lineHeight: 1.7,
                marginTop: 12, paddingRight: 40,
              }}>{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section style={{
      background: `linear-gradient(180deg, ${COLORS.black}, ${COLORS.darkGray})`,
      padding: "80px 32px", textAlign: "center",
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: 11,
        letterSpacing: 4, color: COLORS.goldMid,
        textTransform: "uppercase", marginBottom: 16,
      }}>Community</div>
      <SectionHeading size="medium">Join the Rebellion</SectionHeading>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 16,
        color: "rgba(245,245,240,0.5)", marginTop: 12,
        marginBottom: 40, maxWidth: 500, marginLeft: "auto", marginRight: "auto",
      }}>
        Tag #POPPiT and show us how you savor the moment.
      </p>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        {["#ff2d7b", "#00d4ff", "#b8ff00", "#e8b820", "#a81c1c"].map((c, i) => (
          <div key={i} style={{
            width: 150, height: 190, borderRadius: 16,
            background: `linear-gradient(135deg, ${c}22, ${c}08)`,
            border: `1px solid ${c}22`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: 8,
          }}>
            <div style={{ fontSize: 36, opacity: 0.4 }}>▶</div>
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: 9,
              letterSpacing: 2, color: "rgba(245,245,240,0.3)",
              textTransform: "uppercase",
            }}>UGC Coming Soon</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EmailCapture() {
  const [email, setEmail] = useState("");
  return (
    <section style={{ background: COLORS.red, padding: "60px 32px", textAlign: "center" }}>
      <SectionHeading size="small">Get Early Access</SectionHeading>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 15,
        color: "rgba(255,255,255,0.85)", marginTop: 8, marginBottom: 24,
      }}>15% off your first order. No spam. Just candy.</p>
      <div style={{
        display: "flex", gap: 8, justifyContent: "center",
        maxWidth: 440, margin: "0 auto", flexWrap: "wrap",
      }}>
        <input type="email" placeholder="your@email.com"
          value={email} onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: "1 1 240px", padding: "14px 20px", borderRadius: 50,
            border: "2px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.1)", color: COLORS.white,
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, outline: "none",
          }}
        />
        <button style={{
          fontFamily: "'Space Mono', monospace", fontSize: 12,
          letterSpacing: 2, textTransform: "uppercase",
          background: COLORS.goldMid, color: COLORS.black,
          border: "none", padding: "14px 28px", borderRadius: 50,
          cursor: "pointer", fontWeight: 700,
        }}>Join</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: COLORS.black, padding: "48px 32px 24px",
      textAlign: "center", borderTop: "1px solid #2a2a2a",
    }}>
      <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
        <PoppitLogo size="footer" />
      </div>
      <div style={{
        fontFamily: "'Boogaloo', cursive", fontSize: 14,
        letterSpacing: 3, color: "rgba(245,212,75,0.4)",
        textTransform: "uppercase", marginBottom: 20,
      }}>savor the moment</div>
      <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 24 }}>
        {["TikTok", "Instagram", "Twitter"].map((s, i) => (
          <span key={i} style={{
            fontFamily: "'Space Mono', monospace", fontSize: 11,
            letterSpacing: 2, color: "rgba(245,245,240,0.4)",
            cursor: "pointer", textTransform: "uppercase",
          }}>{s}</span>
        ))}
      </div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 11,
        color: "rgba(245,245,240,0.2)",
      }}>
        © 2026 Roadies Nutrition LLC. All Rights Reserved. | Privacy Policy | Terms of Service
      </div>
    </footer>
  );
}

export default function POPPiTSite() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ background: COLORS.black, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Boogaloo&family=Lilita+One&family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0a0a0a; }
        ::selection { background: #a81c1c; color: #fce588; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #a81c1c; }
        @keyframes floatGummy {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(5deg); }
          66% { transform: translateY(8px) rotate(-3deg); }
        }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes tickerReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes bounce { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(8px); } }
        @keyframes scrollDot { 0%, 100% { opacity: 0; transform: translateY(0); } 50% { opacity: 1; transform: translateY(6px); } }
        input::placeholder { color: rgba(255,255,255,0.5); }
      `}</style>

      <TopBanner />
      <Nav scrolled={scrolled} />
      <Hero />
      <TickerBanner />

      <div style={{
        background: COLORS.black, padding: "80px 32px 40px", textAlign: "center",
      }}>
        <SectionHeading size="large">Meet the Lineup</SectionHeading>
      </div>

      {FLAVORS.map((f, i) => (
        <ProductSection key={i} flavor={f} index={i} />
      ))}
      <VarietyPackBanner />
      <ReviewsSection />
      <SubscribeSection />
      <FindUsSection />
      <FAQSection />
      <CommunitySection />
      <EmailCapture />
      <Footer />
    </div>
  );
}
