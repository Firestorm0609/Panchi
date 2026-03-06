import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// PANCHILIST TASKS CONFIG — edit these to change the tasks anytime
// Each task: { id, icon, title, description, actionLabel, actionLink }
// ─────────────────────────────────────────────────────────────────────────────
const PANCHILIST_TASKS = [
  {
    id: "twitter_follow",
    icon: "𝕏",
    title: "Follow PANCHI on X",
    description: "Follow @PANCHInft on X (Twitter) to stay updated.",
    actionLabel: "Follow on X",
    actionLink: "https://twitter.com/PANCHInft",
  },
  {
    id: "retweet",
    icon: "📣",
    title: "Spread the Word",
    description: "Retweet the pinned PANCHI announcement on X.",
    actionLabel: "Retweet",
    actionLink: "https://twitter.com/PANCHInft",
  },
  {
    id: "tag_friends",
    icon: "👥",
    title: "Bring Your People",
    description: "Tag 2 friends in the PANCHI announcement tweet.",
    actionLabel: "Tag Friends",
    actionLink: "https://twitter.com/PANCHInft",
  },
  {
    id: "banana_oath",
    icon: "🍌",
    title: "Take the Banana Oath",
    description: "Post a tweet saying \"I am ready for PANCHI 🍌\" with the hashtag #PANCHIArmy.",
    actionLabel: "Post Tweet",
    actionLink: "https://twitter.com/intent/tweet?text=I+am+ready+for+PANCHI+🍌+%23PANCHIArmy",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

function FloatingBanana({ style }) {
  return (
    <div style={{
      position: "absolute", fontSize: style.size, opacity: style.opacity,
      left: style.left, top: style.top,
      animation: `floatBanana ${style.duration}s ease-in-out infinite`,
      animationDelay: style.delay, pointerEvents: "none", zIndex: 0,
      filter: "drop-shadow(0 0 8px rgba(255,200,0,0.4))",
      transform: `rotate(${style.rotate}deg)`,
    }}>🍌</div>
  );
}

function SectionDivider() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "0 48px", gap: "20px", background: "#050300",
    }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.25))" }} />
      <span style={{ fontSize: "18px", opacity: 0.5 }}>🍌</span>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.25))" }} />
    </div>
  );
}

// ─── NAVBAR — logo only, minimal ─────────────────────────────────────────────
function Navbar({ onPanchilistClick }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(5,3,0,0.85)", backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(212,175,55,0.15)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 48px", height: "70px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "28px" }}>🍌</span>
        <span style={{
          fontFamily: "'Cinzel Decorative', serif", fontSize: "22px",
          background: "linear-gradient(135deg, #FFD700, #FFA500, #FFD700)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          fontWeight: "700", letterSpacing: "4px",
        }}>PANCHI</span>
      </div>
      <div />
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const bananas = Array.from({ length: 14 }, (_, i) => ({
    size: `${Math.random() * 20 + 16}px`, opacity: Math.random() * 0.12 + 0.04,
    left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
    duration: Math.random() * 6 + 4, delay: `${Math.random() * -8}s`, rotate: Math.random() * 360,
  }));

  return (
    <div style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", paddingTop: "70px",
      background: "radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.08) 0%, rgba(5,3,0,1) 70%)",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
        @keyframes floatBanana { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes goldPulse { 0%,100%{box-shadow:0 0 30px rgba(255,215,0,0.2)} 50%{box-shadow:0 0 60px rgba(255,215,0,0.5)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        @keyframes coinSpin { 0%{transform:rotateY(0deg)} 100%{transform:rotateY(360deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        @keyframes trialGlow { 0%,100%{box-shadow:0 0 0px rgba(255,215,0,0)} 50%{box-shadow:0 0 30px rgba(255,215,0,0.15)} }
        @keyframes checkPop { 0%{transform:scale(0) rotate(-20deg);opacity:0} 70%{transform:scale(1.2) rotate(5deg)} 100%{transform:scale(1) rotate(0deg);opacity:1} }
        @keyframes sealReveal { from{opacity:0;transform:scale(0.5) rotate(-15deg)} to{opacity:1;transform:scale(1) rotate(0deg)} }
        @keyframes scanLine { 0%{top:0%} 100%{top:100%} }
      `}</style>

      {bananas.map((b, i) => <FloatingBanana key={i} style={b} />)}

      <div style={{
        textAlign: "center", zIndex: 1, padding: "0 24px",
        opacity: visible ? 1 : 0, transition: "all 1.2s ease",
        transform: visible ? "translateY(0)" : "translateY(30px)",
      }}>
        <div style={{
          fontSize: "13px", letterSpacing: "6px", color: "rgba(212,175,55,0.6)",
          fontFamily: "'Cinzel', serif", marginBottom: "20px",
          animation: "fadeUp 1s ease 0.2s both",
        }}>THE SLEEKEST COLLECTION ON THE INTERNET</div>

        <h1 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(70px, 14vw, 140px)", fontWeight: "900", margin: "0 0 20px",
          background: "linear-gradient(135deg, #B8860B 0%, #FFD700 30%, #FFA500 50%, #FFD700 70%, #B8860B 100%)",
          backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: "shimmer 4s linear infinite, fadeUp 1s ease 0.4s both",
          lineHeight: "1.1", filter: "drop-shadow(0 0 40px rgba(255,215,0,0.25))",
        }}>PANCHI</h1>

        <p style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: "clamp(17px, 2.5vw, 22px)", color: "rgba(255,255,255,0.65)",
          maxWidth: "560px", margin: "0 auto 48px", lineHeight: "1.8", fontStyle: "italic",
          animation: "fadeUp 1s ease 0.6s both",
        }}>1,000 unique baby monkey NFTs. Mint free. Earn forever.</p>

        {/* Condensed stats — supply mentioned once, no repeats */}
        <div style={{
          display: "flex", justifyContent: "center", animation: "fadeUp 1s ease 0.8s both",
          background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.12)",
          borderRadius: "8px", overflow: "hidden", maxWidth: "560px", margin: "0 auto 52px",
        }}>
          {[["FREE", "Mint Price"], ["70%", "Fee to Holders"], ["1,000", "Total Supply"], ["15", "1/1 Legends"]].map(([num, label], i) => (
            <div key={label} style={{
              flex: 1, padding: "22px 12px", textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(212,175,55,0.1)" : "none",
            }}>
              <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(16px, 2.5vw, 24px)", color: "#FFD700", fontWeight: "700" }}>{num}</div>
              <div style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.35)", fontFamily: "'Cinzel', serif", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", animation: "fadeUp 1s ease 1s both", marginBottom: "80px" }}>
          <button style={{
            background: "linear-gradient(135deg, #FFD700, #FFA500)", border: "none", borderRadius: "4px", cursor: "pointer",
            padding: "18px 52px", fontFamily: "'Cinzel', serif", fontSize: "14px", letterSpacing: "3px", color: "#000", fontWeight: "700",
            boxShadow: "0 0 40px rgba(255,215,0,0.4)", animation: "goldPulse 3s ease-in-out infinite", transition: "transform 0.2s",
          }}
            onMouseOver={e => e.target.style.transform = "scale(1.05)"}
            onMouseOut={e => e.target.style.transform = "scale(1)"}
          >PANCHILIST</button>
          <button onClick={() => { const el = document.getElementById("pot"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} style={{
            background: "linear-gradient(135deg, #B8860B, #FFD700, #FFA500)", border: "none", borderRadius: "4px", cursor: "pointer",
            padding: "18px 52px", fontFamily: "'Cinzel', serif", fontSize: "14px", letterSpacing: "3px", color: "#000", fontWeight: "700",
            boxShadow: "0 0 24px rgba(255,215,0,0.25)", transition: "transform 0.2s",
          }}
            onMouseOver={e => e.target.style.transform = "scale(1.05)"}
            onMouseOut={e => e.target.style.transform = "scale(1)"}
          >PLAY COINFLIP</button>
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: "32px",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
        opacity: 0.4, animation: "scrollBob 2s ease-in-out infinite", zIndex: 1,
      }}>
        <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, transparent, #FFD700)" }} />
        <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#FFD700", fontFamily: "'Cinzel', serif" }}>SCROLL</div>
      </div>
    </div>
  );
}

// ─── COLLECTION ───────────────────────────────────────────────────────────────
function CollectionSection() {
  const nfts = [
    { id: 1, img: null },
    { id: 2, img: null },
    { id: 3, img: null },
    { id: 4, img: null },
    { id: 5, img: null },
    { id: 6, img: null },
  ];

  return (
    <div style={{ padding: "100px 48px 120px", background: "linear-gradient(180deg, #050300 0%, #07040080 40%, #060400 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "6px", color: "rgba(212,175,55,0.6)", fontFamily: "'Cinzel', serif", marginBottom: "16px" }}>THE COLLECTION</div>
          <h2 style={{
            fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(32px, 5vw, 52px)",
            background: "linear-gradient(135deg, #FFD700, #FFA500)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 20px",
          }}>Meet the PANCHI</h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "0 auto 24px", lineHeight: "1.8" }}>Each one different. Each one yours.</p>
          <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #FFD700, transparent)", margin: "0 auto" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {nfts.map(({ id, img }) => (
            <div key={id} style={{
              background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)",
              borderRadius: "12px", overflow: "hidden", transition: "all 0.4s", cursor: "pointer",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.5)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{
                width: "100%", aspectRatio: "1 / 1",
                background: img ? `url(${img}) center/cover no-repeat` : "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(255,165,0,0.04))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {!img && <div style={{ textAlign: "center", opacity: 0.3 }}><div style={{ fontSize: "52px", marginBottom: "8px" }}>🍌</div><div style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "3px", color: "#FFD700" }}>YOUR NFT HERE</div></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── UTILITY ──────────────────────────────────────────────────────────────────
function UtilitySection() {
  const pillars = [
    { icon: "💰", title: "Revenue Share", tag: "CORE UTILITY", tagColor: "#FFD700", description: "70% of all coinflip game fees are distributed directly to PANCHI holders every week. Every flip played on the platform — forever — generates income for you. No staking. No locking. Just hold and earn.", highlight: "70% of all fees → holders weekly" },
    { icon: "🎮", title: "Coinflip Perks", tag: "HOLDER BENEFIT", tagColor: "#FFA500", description: "PANCHI holders get exclusive access to higher bet limits and reduced fees on their own flips. Your NFT is your membership card to the platform. The more you hold, the better your perks.", highlight: "Reduced fees + higher limits" },
    { icon: "🗳️", title: "Governance", tag: "COMMUNITY POWER", tagColor: "#B8860B", description: "PANCHI holders vote on everything — fee percentages, treasury spending, new game additions, and the future direction of the platform. The community owns the platform. Your voice matters.", highlight: "1 PANCHI = 1 vote" },
  ];

  return (
    <div style={{ padding: "100px 48px 120px", background: "linear-gradient(180deg, #050300 0%, #07040080 40%, #060400 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(212,175,55,0.015) 60px, rgba(212,175,55,0.015) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(212,175,55,0.015) 60px, rgba(212,175,55,0.015) 61px)" }} />
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "6px", color: "rgba(212,175,55,0.6)", fontFamily: "'Cinzel', serif", marginBottom: "16px" }}>WHY HOLD PANCHI</div>
          <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(32px, 5vw, 52px)", background: "linear-gradient(135deg, #FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 20px" }}>Real Utility. Real Income.</h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "rgba(255,255,255,0.5)", maxWidth: "500px", margin: "0 auto 24px", lineHeight: "1.8" }}>PANCHI is not just an NFT. It is a revenue-generating asset. Every flip. Every fee. Every day.</p>
          <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #FFD700, transparent)", margin: "0 auto" }} />
        </div>
        <div style={{ background: "linear-gradient(135deg, rgba(255,215,0,0.08), rgba(255,165,0,0.04))", border: "1px solid rgba(255,215,0,0.25)", borderRadius: "12px", padding: "52px", marginBottom: "32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)" }} />
          <div style={{ fontSize: "48px", marginBottom: "20px" }}>💰</div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "5px", color: "#FFD700", marginBottom: "16px" }}>THE CORE PROMISE</div>
          <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(36px, 6vw, 64px)", color: "#FFD700", marginBottom: "16px", filter: "drop-shadow(0 0 20px rgba(255,215,0,0.4))" }}>70% of All Fees</div>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "20px", fontStyle: "italic", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto 32px", lineHeight: "1.8" }}>Every coinflip generates a fee. 70% goes directly to PANCHI holders. Proportionally. Automatically. Weekly. Forever.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            {[["70%", "To Holders"], ["30%", "To Treasury"], ["Weekly", "Payouts"], ["USDC", "Currency"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center", background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: "8px", padding: "20px 28px" }}>
                <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "24px", color: "#FFD700" }}>{num}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {pillars.map(({ icon, title, tag, tagColor, description, highlight }) => (
            <div key={title} style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "12px", padding: "36px", transition: "all 0.4s", cursor: "default", display: "flex", flexDirection: "column" }}
              onMouseOver={e => { e.currentTarget.style.background = "rgba(212,175,55,0.08)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)"; e.currentTarget.style.transform = "translateY(-6px)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "rgba(212,175,55,0.04)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: `${tagColor}18`, border: `1px solid ${tagColor}45`, borderRadius: "20px", padding: "4px 12px", marginBottom: "20px", alignSelf: "flex-start" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: tagColor }} />
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "2px", color: tagColor }}>{tag}</span>
              </div>
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>{icon}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "18px", letterSpacing: "2px", color: "#FFD700", margin: "0 0 16px" }}>{title}</h3>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "16px", lineHeight: "1.8", color: "rgba(255,255,255,0.55)", margin: "0 0 20px", flex: 1 }}>{description}</p>
              <div style={{ background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: "6px", padding: "12px 16px", fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "2px", color: "#FFD700", textAlign: "center" }}>{highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PANCHILIST — THE TRIALS ───────────────────────────────────────────────────
function PanchilistSection({ sectionRef }) {
  const [completed, setCompleted] = useState({});
  const [wallet, setWallet] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [scanActive, setScanActive] = useState(false);

  const allDone = PANCHILIST_TASKS.every(t => completed[t.id]);
  const completedCount = Object.values(completed).filter(Boolean).length;
  const progress = (completedCount / PANCHILIST_TASKS.length) * 100;

  const markDone = (id) => {
    setCompleted(prev => ({ ...prev, [id]: true }));
  };

  const handleSubmit = () => {
    if (!wallet.trim() || !allDone) return;
    setScanActive(true);
    setSubmitting(true);
    setTimeout(() => {
      setScanActive(false);
      setSubmitting(false);
      setSubmitted(true);
    }, 2800);
  };

  return (
    <div ref={sectionRef} style={{
      padding: "100px 48px 120px",
      background: "linear-gradient(180deg, #050300 0%, #0a0600 50%, #050300 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Atmospheric corner glows */}
      <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,165,0,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />

      {/* Faint diagonal line texture */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(212,175,55,0.012) 40px, rgba(212,175,55,0.012) 41px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "8px", color: "rgba(212,175,55,0.5)", fontFamily: "'Cinzel', serif", marginBottom: "20px" }}>PROVE YOUR WORTH</div>
          <h2 style={{
            fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(28px, 5vw, 52px)",
            background: "linear-gradient(135deg, #B8860B 0%, #FFD700 40%, #FFA500 60%, #FFD700 80%, #B8860B 100%)",
            backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            animation: "shimmer 6s linear infinite", margin: "0 0 16px", lineHeight: "1.2",
          }}>The Trials of PANCHI</h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: "0 auto 32px", lineHeight: "1.8" }}>
            The panchilist is not given. It is earned. Complete each trial below — then present your wallet and await judgement.
          </p>

          {/* Progress orb */}
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div style={{ position: "relative", width: "80px", height: "80px" }}>
              <svg width="80" height="80" viewBox="0 0 80 80" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="4" />
                <circle cx="40" cy="40" r="34" fill="none" stroke="#FFD700" strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - progress / 100)}`}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.6s ease", filter: "drop-shadow(0 0 6px rgba(255,215,0,0.6))" }}
                />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <span style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "16px", color: "#FFD700", lineHeight: 1 }}>{completedCount}</span>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "8px", color: "rgba(255,255,255,0.3)", letterSpacing: "1px" }}>/{PANCHILIST_TASKS.length}</span>
              </div>
            </div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "3px", color: allDone ? "#FFD700" : "rgba(212,175,55,0.45)" }}>
              {allDone ? "ALL TRIALS COMPLETE" : "TRIALS REMAINING"}
            </div>
          </div>
        </div>

        {!submitted ? (
          <>
            {/* Task cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "48px" }}>
              {PANCHILIST_TASKS.map((task, i) => {
                const done = completed[task.id];
                return (
                  <div key={task.id} style={{
                    position: "relative", overflow: "hidden",
                    background: done ? "rgba(255,215,0,0.06)" : "rgba(212,175,55,0.03)",
                    border: `1px solid ${done ? "rgba(255,215,0,0.35)" : "rgba(212,175,55,0.12)"}`,
                    borderRadius: "10px", padding: "24px 28px",
                    display: "flex", alignItems: "center", gap: "20px",
                    transition: "all 0.4s",
                    boxShadow: done ? "0 0 24px rgba(255,215,0,0.06)" : "none",
                    animation: done ? "trialGlow 3s ease-in-out infinite" : "none",
                  }}>
                    {/* Shimmer on complete */}
                    {done && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.03) 50%, transparent 100%)", pointerEvents: "none" }} />}

                    {/* Step number / check */}
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                      background: done ? "linear-gradient(135deg, #FFD700, #FFA500)" : "rgba(212,175,55,0.06)",
                      border: `2px solid ${done ? "#FFD700" : "rgba(212,175,55,0.2)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.4s",
                      boxShadow: done ? "0 0 16px rgba(255,215,0,0.4)" : "none",
                    }}>
                      {done
                        ? <span style={{ fontSize: "18px", animation: "checkPop 0.4s ease both" }}>✓</span>
                        : <span style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "rgba(212,175,55,0.5)", fontWeight: "700" }}>0{i + 1}</span>
                      }
                    </div>

                    {/* Icon */}
                    <div style={{ fontSize: "24px", flexShrink: 0, filter: done ? "none" : "grayscale(1) opacity(0.4)", transition: "all 0.4s" }}>{task.icon}</div>

                    {/* Text */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", letterSpacing: "1px", color: done ? "#FFD700" : "rgba(255,255,255,0.75)", marginBottom: "4px" }}>{task.title}</div>
                      <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: "1.5" }}>{task.description}</div>
                    </div>

                    {/* Action button */}
                    {!done ? (
                      <a href={task.actionLink} target="_blank" rel="noopener noreferrer"
                        onClick={() => setTimeout(() => markDone(task.id), 1200)}
                        style={{
                          flexShrink: 0, padding: "10px 20px",
                          background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.3)",
                          borderRadius: "6px", cursor: "pointer", textDecoration: "none",
                          fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "2px", color: "#FFD700",
                          transition: "all 0.2s", whiteSpace: "nowrap",
                        }}
                        onMouseOver={e => { e.currentTarget.style.background = "rgba(212,175,55,0.15)"; e.currentTarget.style.borderColor = "#FFD700"; }}
                        onMouseOut={e => { e.currentTarget.style.background = "rgba(212,175,55,0.08)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)"; }}
                      >{task.actionLabel} →</a>
                    ) : (
                      <div style={{ flexShrink: 0, padding: "10px 20px", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "6px", fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "2px", color: "#FFD700" }}>
                        DONE ✓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Wallet submission — only appears when all tasks done */}
            <div style={{
              background: allDone ? "rgba(255,215,0,0.07)" : "rgba(212,175,55,0.03)",
              border: `1px solid ${allDone ? "rgba(255,215,0,0.35)" : "rgba(212,175,55,0.1)"}`,
              borderRadius: "12px", padding: "40px",
              transition: "all 0.6s",
              opacity: allDone ? 1 : 0.35,
              position: "relative", overflow: "hidden",
            }}>
              {/* Scan line animation on submitting */}
              {scanActive && (
                <div style={{
                  position: "absolute", left: 0, right: 0, height: "2px",
                  background: "linear-gradient(to right, transparent, rgba(255,215,0,0.8), transparent)",
                  animation: "scanLine 1.4s linear infinite", pointerEvents: "none", zIndex: 2,
                }} />
              )}

              <div style={{ textAlign: "center", marginBottom: "28px" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>🏛️</div>
                <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "20px", color: "#FFD700", marginBottom: "8px" }}>
                  {allDone ? "Present Your Wallet" : "Complete All Trials First"}
                </div>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "16px", fontStyle: "italic", color: "rgba(255,255,255,0.45)", margin: 0 }}>
                  {allDone
                    ? "You have proven yourself worthy. Submit your Ethereum wallet address to claim your panchilist spot."
                    : `Complete all ${PANCHILIST_TASKS.length} trials above to unlock this.`
                  }
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <input
                  type="text"
                  placeholder="Your Ethereum wallet address (0x...)"
                  value={wallet}
                  onChange={e => setWallet(e.target.value)}
                  disabled={!allDone || submitting}
                  style={{
                    flex: 1, padding: "16px 20px",
                    background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.2)",
                    borderRadius: "6px", fontFamily: "'EB Garamond', serif", fontSize: "16px",
                    color: "rgba(255,255,255,0.8)", outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = "rgba(255,215,0,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(212,175,55,0.2)"}
                />
                <button
                  onClick={handleSubmit}
                  disabled={!allDone || !wallet.trim() || submitting}
                  style={{
                    padding: "16px 32px", borderRadius: "6px", border: "none", cursor: allDone && wallet.trim() ? "pointer" : "not-allowed",
                    background: allDone && wallet.trim() ? "linear-gradient(135deg, #FFD700, #FFA500)" : "rgba(212,175,55,0.08)",
                    fontFamily: "'Cinzel', serif", fontSize: "12px", letterSpacing: "2px",
                    color: allDone && wallet.trim() ? "#000" : "rgba(255,255,255,0.2)", fontWeight: "700",
                    boxShadow: allDone && wallet.trim() ? "0 0 24px rgba(255,215,0,0.35)" : "none",
                    transition: "all 0.3s", whiteSpace: "nowrap",
                  }}
                >
                  {submitting ? "VERIFYING..." : "SUBMIT →"}
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Success state */
          <div style={{
            textAlign: "center", padding: "64px 40px",
            background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.3)",
            borderRadius: "16px", position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ fontSize: "64px", marginBottom: "24px", animation: "sealReveal 0.6s ease both" }}>🍌</div>
            <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(24px, 4vw, 40px)", color: "#FFD700", marginBottom: "16px", filter: "drop-shadow(0 0 20px rgba(255,215,0,0.5))" }}>
              Trial Complete
            </div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "rgba(255,255,255,0.6)", maxWidth: "460px", margin: "0 auto 28px", lineHeight: "1.8" }}>
              Your wallet has been recorded. The PANCHI elders will review your application. Watch the Discord for the announcement.
            </p>
            <div style={{
              display: "inline-block", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)",
              borderRadius: "8px", padding: "14px 24px",
              fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "2px", color: "rgba(212,175,55,0.7)",
            }}>
              {wallet.slice(0, 6)}...{wallet.slice(-6)} — REGISTERED
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── ROADMAP ──────────────────────────────────────────────────────────────────
function RoadmapSection() {
  const phases = [
    { phase: "01", title: "Launch", status: "active", items: ["Free mint opens", "1,000 PANCHI released", "Community Discord & Twitter launch"] },
    { phase: "02", title: "Platform", status: "upcoming", items: ["Coinflip game goes live", "USDC wallet integration", "First weekly revenue distribution", "Holder dashboard released"] },
    { phase: "03", title: "Growth", status: "upcoming", items: ["Secondary marketplace listing", "Governance voting portal", "New game modes (community vote)", "Merch drop for holders"] },
    { phase: "04", title: "Expansion", status: "upcoming", items: ["Mobile app launch", "Cross-chain bridge exploration", "PANCHI 2 collection (holders get free mint)", "IRL events & meetups"] },
  ];

  return (
    <div style={{ padding: "100px 48px 120px", background: "linear-gradient(180deg, #050300, #060400, #050300)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "50%", top: "160px", bottom: "80px", width: "1px", transform: "translateX(-50%)", background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.2) 10%, rgba(212,175,55,0.2) 90%, transparent)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "6px", color: "rgba(212,175,55,0.6)", fontFamily: "'Cinzel', serif", marginBottom: "16px" }}>THE JOURNEY</div>
          <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(32px, 5vw, 52px)", background: "linear-gradient(135deg, #FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 20px" }}>Roadmap</h2>
          <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #FFD700, transparent)", margin: "0 auto" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {phases.map(({ phase, title, status, items }, i) => {
            const isLeft = i % 2 === 0;
            const card = (
              <div style={{ background: status === "active" ? "rgba(255,215,0,0.08)" : "rgba(212,175,55,0.04)", border: `1px solid ${status === "active" ? "rgba(255,215,0,0.4)" : "rgba(212,175,55,0.15)"}`, borderRadius: "12px", padding: "28px 32px", display: "inline-block", textAlign: "left", minWidth: "280px" }}>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "3px", color: status === "active" ? "#FFD700" : "rgba(212,175,55,0.5)", marginBottom: "8px" }}>{status === "active" ? "● LIVE NOW" : "COMING SOON"}</div>
                <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "22px", color: "#FFD700", marginBottom: "16px" }}>{title}</div>
                {items.map((item, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ color: status === "active" ? "#FFD700" : "rgba(212,175,55,0.4)", fontSize: "12px", marginTop: "2px" }}>—</span>
                    <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "15px", color: status === "active" ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.4)", lineHeight: "1.5" }}>{item}</span>
                  </div>
                ))}
              </div>
            );
            return (
              <div key={phase} style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", alignItems: "start", marginBottom: "48px" }}>
                <div style={{ paddingRight: "32px", textAlign: "right" }}>{isLeft ? card : null}</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "28px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: status === "active" ? "linear-gradient(135deg, #FFD700, #FFA500)" : "rgba(212,175,55,0.08)", border: `2px solid ${status === "active" ? "#FFD700" : "rgba(212,175,55,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Cinzel', serif", fontSize: "12px", color: status === "active" ? "#000" : "rgba(212,175,55,0.5)", fontWeight: "700", boxShadow: status === "active" ? "0 0 20px rgba(255,215,0,0.4)" : "none", flexShrink: 0 }}>{phase}</div>
                </div>
                <div style={{ paddingLeft: "32px" }}>{!isLeft ? card : null}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── POT OF PANCHI ────────────────────────────────────────────────────────────
function PotOfPanchiSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(null);
  const [entered, setEntered] = useState([false, false, false]);

  // Simulate a fixed draw time: next occurrence of minute 0 of the 23rd hour UTC
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utcH = now.getUTCHours();
      const utcM = now.getUTCMinutes();
      const utcS = now.getUTCSeconds();
      // Seconds until 23:00 UTC today, or tomorrow if past
      let target = (23 * 3600) - (utcH * 3600 + utcM * 60 + utcS);
      if (target <= 0) target += 86400;
      setSecondsLeft(target);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (s) => {
    if (s === null) return "--:--:--";
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  const isDrawing = secondsLeft !== null && secondsLeft <= 3600; // last hour = drawing soon

  const tiers = [
    {
      label: "COPPER POT",
      entry: "$1",
      entryNum: 1,
      icon: "🪙",
      accentColor: "#CD7F32",
      glowColor: "rgba(205,127,50,0.35)",
      pot: 147,
      players: 147,
      recentWinners: ["0x4a...f21", "0x9c...b77", "0x1d...e03"],
      holderPerk: "PANCHI holders get 1 free daily entry (up to 5)",
    },
    {
      label: "SILVER POT",
      entry: "$10",
      entryNum: 10,
      icon: "🥈",
      accentColor: "#C0C0C0",
      glowColor: "rgba(192,192,192,0.3)",
      pot: 430,
      players: 43,
      recentWinners: ["0x7e...c44", "0x3b...a19", "0xf2...d81"],
      holderPerk: null,
    },
    {
      label: "GOLD POT",
      entry: "$100",
      entryNum: 100,
      icon: "👑",
      accentColor: "#FFD700",
      glowColor: "rgba(255,215,0,0.4)",
      pot: 2400,
      players: 24,
      recentWinners: ["0x8d...552", "0x2a...e90", "0x6f...b33"],
      holderPerk: null,
    },
  ];

  const tier = tiers[activeTab];

  const handleEnter = () => {
    setEntered(prev => prev.map((v, i) => i === activeTab ? true : v));
  };

  return (
    <div style={{ padding: "100px 48px 120px", background: "linear-gradient(180deg, #050300 0%, #080500 50%, #050300 100%)", position: "relative", overflow: "hidden" }}>

      {/* Ambient radial glow behind pot */}
      <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(255,215,0,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "6px", color: "rgba(212,175,55,0.6)", fontFamily: "'Cinzel', serif", marginBottom: "16px" }}>DAILY JACKPOT</div>
          <h2 style={{
            fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(32px, 5vw, 56px)",
            background: "linear-gradient(135deg, #B8860B 0%, #FFD700 40%, #FFA500 60%, #B8860B 100%)",
            backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            animation: "shimmer 5s linear infinite", margin: "0 0 16px",
          }}>Pot of Panchi</h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: "0 auto 32px", lineHeight: "1.8" }}>
            Enter the pot. Wait for the draw. One winner takes 90%.
          </p>

          {/* Countdown */}
          <div style={{
            display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "8px",
            background: isDrawing ? "rgba(255,68,68,0.06)" : "rgba(212,175,55,0.05)",
            border: `1px solid ${isDrawing ? "rgba(255,68,68,0.3)" : "rgba(212,175,55,0.2)"}`,
            borderRadius: "10px", padding: "20px 40px",
          }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "4px", color: isDrawing ? "rgba(255,100,100,0.8)" : "rgba(212,175,55,0.6)" }}>
              {isDrawing ? "⚡ DRAW IMMINENT" : "DRAW IN"}
            </div>
            <div style={{
              fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(28px, 5vw, 44px)",
              color: isDrawing ? "#FF6464" : "#FFD700",
              filter: `drop-shadow(0 0 16px ${isDrawing ? "rgba(255,100,100,0.5)" : "rgba(255,215,0,0.4)"})`,
              letterSpacing: "4px",
            }}>{fmt(secondsLeft)}</div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "3px", color: "rgba(255,255,255,0.2)" }}>
              POT OPEN 22HRS · DRAW AT 23RD HOUR · DAILY
            </div>
          </div>
        </div>

        {/* Tier tabs */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "32px", justifyContent: "center" }}>
          {tiers.map((t, i) => (
            <button key={i} onClick={() => setActiveTab(i)} style={{
              padding: "12px 32px", borderRadius: "6px", border: `1px solid ${activeTab === i ? t.accentColor : "rgba(212,175,55,0.15)"}`,
              background: activeTab === i ? `${t.accentColor}18` : "transparent",
              cursor: "pointer", fontFamily: "'Cinzel', serif", fontSize: "12px", letterSpacing: "2px",
              color: activeTab === i ? t.accentColor : "rgba(255,255,255,0.4)",
              transition: "all 0.3s",
              boxShadow: activeTab === i ? `0 0 20px ${t.glowColor}` : "none",
            }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Main panel */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "24px" }}>

          {/* Left — pot display + entry */}
          <div style={{
            background: "rgba(212,175,55,0.03)", border: `1px solid ${tier.accentColor}30`,
            borderRadius: "16px", padding: "48px", position: "relative", overflow: "hidden",
            boxShadow: `0 0 60px ${tier.glowColor}`,
            transition: "all 0.5s",
          }}>
            {/* Background glow blob */}
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "240px", height: "240px", borderRadius: "50%", background: `radial-gradient(circle, ${tier.glowColor} 0%, transparent 70%)`, pointerEvents: "none" }} />

            {/* Pot visual */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <div style={{
                width: "140px", height: "140px", borderRadius: "50%", margin: "0 auto 24px",
                background: `radial-gradient(circle at 35% 35%, ${tier.accentColor}, ${tier.accentColor}66)`,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "60px",
                boxShadow: `0 0 60px ${tier.glowColor}, inset 0 0 30px rgba(0,0,0,0.3)`,
                animation: "goldPulse 3s ease-in-out infinite",
                transition: "all 0.5s",
              }}>{tier.icon}</div>

              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "4px", color: `${tier.accentColor}99`, marginBottom: "8px" }}>CURRENT POT</div>
              <div style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(40px, 7vw, 72px)",
                color: tier.accentColor,
                filter: `drop-shadow(0 0 24px ${tier.glowColor})`,
                lineHeight: 1, marginBottom: "8px",
                transition: "all 0.5s",
              }}>${tier.pot.toLocaleString()}</div>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "16px", fontStyle: "italic", color: "rgba(255,255,255,0.35)" }}>
                {tier.players} players · {tier.entry} per entry
              </div>
            </div>

            {/* Split display */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "36px" }}>
              {[["90%", `$${(tier.pot * 0.9).toFixed(0)}`, "Winner Takes"], ["10%", `$${(tier.pot * 0.1).toFixed(0)}`, "Treasury"]].map(([pct, amt, label]) => (
                <div key={label} style={{
                  flex: 1, textAlign: "center", padding: "20px 12px",
                  background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.1)", borderRadius: "10px",
                }}>
                  <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "26px", color: tier.accentColor, marginBottom: "4px" }}>{pct}</div>
                  <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "18px", color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>{amt}</div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Holder perk banner — copper pot only */}
            {tier.holderPerk && (
              <div style={{
                background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.2)",
                borderRadius: "8px", padding: "14px 20px", marginBottom: "28px",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <span style={{ fontSize: "20px" }}>🍌</span>
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "2px", color: "#FFD700", marginBottom: "3px" }}>PANCHI HOLDER PERK</div>
                  <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>{tier.holderPerk}</div>
                </div>
              </div>
            )}

            {/* Enter button */}
            {!entered[activeTab] ? (
              <button onClick={handleEnter} disabled={isDrawing} style={{
                width: "100%", padding: "20px",
                background: isDrawing ? "rgba(212,175,55,0.05)" : `linear-gradient(135deg, ${tier.accentColor}, ${tier.accentColor}bb)`,
                border: "none", borderRadius: "10px",
                cursor: isDrawing ? "not-allowed" : "pointer",
                fontFamily: "'Cinzel', serif", fontSize: "14px", letterSpacing: "3px",
                color: isDrawing ? "rgba(255,255,255,0.2)" : "#000", fontWeight: "700",
                boxShadow: isDrawing ? "none" : `0 0 32px ${tier.glowColor}`,
                transition: "all 0.3s",
              }}>
                {isDrawing ? "DRAW IN PROGRESS" : `ENTER POT — ${tier.entry}`}
              </button>
            ) : (
              <div style={{
                width: "100%", padding: "20px", borderRadius: "10px", textAlign: "center",
                background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.25)",
                fontFamily: "'Cinzel', serif", fontSize: "13px", letterSpacing: "2px", color: "#FFD700",
              }}>
                ✓ YOU'RE IN — GOOD LUCK 🍌
              </div>
            )}

            <div style={{ marginTop: "16px", textAlign: "center", fontFamily: "'Cinzel', serif", fontSize: "9px", color: "rgba(255,255,255,0.15)", letterSpacing: "1px" }}>
              90% to winner · 10% to treasury · draw at 23:00 UTC daily
            </div>
          </div>

          {/* Right — recent winners + how it works */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Recent winners */}
            <div style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "12px", padding: "28px" }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "3px", color: "#FFD700", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>RECENT WINNERS</span>
                <span style={{ background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.15)", borderRadius: "20px", padding: "2px 10px", fontSize: "9px", color: "rgba(255,215,0,0.6)" }}>{tier.label}</span>
              </div>
              {tier.recentWinners.map((w, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "12px 0", borderBottom: i < 2 ? "1px solid rgba(212,175,55,0.06)" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: `${tier.accentColor}22`, border: `1px solid ${tier.accentColor}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px" }}>🏆</div>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", color: "rgba(255,255,255,0.6)", letterSpacing: "1px" }}>{w}</span>
                  </div>
                  <span style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "14px", color: tier.accentColor }}>+${(tier.pot * 0.9).toFixed(0)}</span>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div style={{ background: "rgba(212,175,55,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "12px", padding: "28px" }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "3px", color: "rgba(212,175,55,0.6)", marginBottom: "18px" }}>HOW IT WORKS</div>
              {[
                ["💵", "Pay the entry fee to join the pot"],
                ["⏳", "Pot stays open for 22 hours"],
                ["🎲", "Random draw at the 23rd hour"],
                ["🏆", "Winner receives 90% of the pot"],
                ["🍌", "PANCHI holders get free $1 entries"],
              ].map(([icon, step], i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "14px" }}>
                  <span style={{ fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                  <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: "1.5" }}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "How do I mint a PANCHI?", a: "Connect your Ethereum wallet, click Mint Free, and confirm the transaction. You only pay the network gas fee — the PANCHI itself is completely free." },
    { q: "How does the revenue share work?", a: "70% of every coinflip fee is pooled and distributed proportionally to all PANCHI holders every week. If you hold 10 out of 1,000 PANCHI, you receive 10/1,000 of the weekly pool — automatically, in USDC, to your wallet." },
    { q: "Do I need to stake or lock my NFT to earn?", a: "No. Simply holding a PANCHI in your wallet is enough. No staking, no locking, no extra steps. Earn passively from day one." },
    { q: "What blockchain is PANCHI on?", a: "PANCHI is built on Ethereum — the most trusted and widely adopted NFT chain, with deep liquidity and marketplace support across the ecosystem." },
    { q: "What is the Pot of Panchi?", a: "Pot of Panchi is a daily jackpot game with three tiers — $1, $10, and $100 entry. The pot stays open for 22 hours, then a random winner is drawn at the 23rd hour. The winner takes 90% of the total pot; 10% goes to the PANCHI treasury." },
    { q: "How many PANCHI can I mint?", a: "Maximum 20 per wallet. Total supply is capped at 1,000 forever. Once they're gone, they're gone." },
    { q: "What are the 1/1 Legendaries?", a: "There are 15 hand-drawn 1 of 1 PANCHI NFTs in the collection. They are the rarest pieces and will have special perks and governance weight." },
  ];

  return (
    <div style={{ padding: "100px 48px 120px", background: "linear-gradient(180deg, #050300 0%, #07040080 50%, #050300 100%)", position: "relative" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "6px", color: "rgba(212,175,55,0.6)", fontFamily: "'Cinzel', serif", marginBottom: "16px" }}>GOT QUESTIONS</div>
          <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(32px, 5vw, 52px)", background: "linear-gradient(135deg, #FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 20px" }}>FAQ</h2>
          <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #FFD700, transparent)", margin: "0 auto" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map(({ q, a }, i) => (
            <div key={i} style={{ background: open === i ? "rgba(255,215,0,0.06)" : "rgba(212,175,55,0.04)", border: `1px solid ${open === i ? "rgba(255,215,0,0.3)" : "rgba(212,175,55,0.12)"}`, borderRadius: "10px", overflow: "hidden", transition: "all 0.3s" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", padding: "22px 28px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", letterSpacing: "1px", color: open === i ? "#FFD700" : "rgba(255,255,255,0.8)", textAlign: "left" }}>{q}</span>
                <span style={{ fontSize: "18px", color: "#FFD700", opacity: 0.7, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>+</span>
              </button>
              {open === i && <div style={{ padding: "0 28px 22px" }}><p style={{ fontFamily: "'EB Garamond', serif", fontSize: "17px", lineHeight: "1.8", color: "rgba(255,255,255,0.6)", margin: 0 }}>{a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#030200", borderTop: "1px solid rgba(212,175,55,0.1)", padding: "60px 48px 40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "48px", marginBottom: "48px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "24px" }}>🍌</span>
              <span style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "20px", background: "linear-gradient(135deg, #FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "700", letterSpacing: "3px" }}>PANCHI</span>
            </div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "15px", color: "rgba(255,255,255,0.35)", lineHeight: "1.8", maxWidth: "280px" }}>1,000 unique baby monkey NFTs. Mint free. Earn forever from every flip.</p>
          </div>
          {[
            { title: "Community", links: ["Twitter", "Discord"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "3px", color: "#FFD700", marginBottom: "20px" }}>{title.toUpperCase()}</div>
              {links.map(l => (
                <div key={l} style={{ fontFamily: "'EB Garamond', serif", fontSize: "15px", color: "rgba(255,255,255,0.35)", marginBottom: "10px", cursor: "pointer", transition: "color 0.2s" }}
                  onMouseOver={e => e.target.style.color = "#FFD700"}
                  onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.35)"}
                >{l}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(212,175,55,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "1px" }}>© 2025 PANCHI. All rights reserved.</div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "1px" }}>Built on Ethereum 🍌</div>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const panchilistRef = useState(null);

  const scrollToPanchilist = () => {
    const el = document.getElementById("panchilist");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#050300", minHeight: "100vh", color: "#fff" }}>
      <Navbar onPanchilistClick={scrollToPanchilist} />
      <div id="home"><HeroSection /></div>
      <SectionDivider />
      <div id="collection"><CollectionSection /></div>
      <SectionDivider />
      <div id="utility"><UtilitySection /></div>
      <SectionDivider />
      <div id="panchilist"><PanchilistSection sectionRef={panchilistRef} /></div>
      <SectionDivider />
      <div id="roadmap"><RoadmapSection /></div>
      <SectionDivider />
      <div id="pot"><PotOfPanchiSection /></div>
      <SectionDivider />
      <div id="faq"><FAQSection /></div>
      <Footer />
    </div>
  );
}
