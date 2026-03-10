import { useState, useEffect, useRef } from "react";
import p1 from "./assets/panchi1.png";
import p2 from "./assets/panchi2.png";
import p3 from "./assets/panchi3.png";
import p4 from "./assets/panchi4.png";
import p5 from "./assets/panchi5.png";
import p6 from "./assets/panchi6.png";

const NFT_IMAGES = [p1, p2, p3, p4, p5, p6];

const PANCHILIST_TASKS = [
  { id: "twitter_follow", icon: "𝕏", title: "Follow PANCHI on X", description: "Follow @PANCHInft on X (Twitter) to stay updated.", actionLabel: "Follow on X", actionLink: "https://twitter.com/PANCHInft" },
  { id: "retweet", icon: "📣", title: "Spread the Word", description: "Repost the pinned PANCHI announcement on X.", actionLabel: "Repost", actionLink: "https://twitter.com/PANCHInft" },
  { id: "tag_friends", icon: "👥", title: "Bring Your People", description: "Tag 2 friends in the PANCHI announcement tweet.", actionLabel: "Tag Friends", actionLink: "https://twitter.com/PANCHInft" },
];

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

  @keyframes floatBanana { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
  @keyframes goldPulse { 0%,100%{box-shadow:0 0 30px rgba(255,215,0,0.2)} 50%{box-shadow:0 0 60px rgba(255,215,0,0.5)} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
  @keyframes shimmer { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
  @keyframes scrollBob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
  @keyframes trialGlow { 0%,100%{box-shadow:0 0 0px rgba(255,215,0,0)} 50%{box-shadow:0 0 30px rgba(255,215,0,0.15)} }
  @keyframes checkPop { 0%{transform:scale(0) rotate(-20deg);opacity:0} 70%{transform:scale(1.2) rotate(5deg)} 100%{transform:scale(1) rotate(0deg);opacity:1} }
  @keyframes sealReveal { from{opacity:0;transform:scale(0.5) rotate(-15deg)} to{opacity:1;transform:scale(1) rotate(0deg)} }
  @keyframes scanLine { 0%{top:0%} 100%{top:100%} }

  /* ── MOBILE OVERRIDES ── */
  @media (max-width: 768px) {
    .navbar { padding: 0 20px !important; }
    .section-pad { padding: 72px 20px 80px !important; }
    .section-pad-sm { padding: 60px 20px 72px !important; }
    .hero-buttons { flex-direction: column !important; align-items: stretch !important; }
    .hero-buttons button { padding: 16px 24px !important; font-size: 13px !important; }
    .nft-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 14px !important; }
    .task-row { flex-wrap: wrap !important; gap: 12px !important; padding: 18px 16px !important; }
    .task-action { width: 100% !important; text-align: center !important; margin-top: 4px !important; }
    .wallet-row { flex-direction: column !important; }
    .wallet-row input { font-size: 14px !important; }
    .wallet-row button { width: 100% !important; }
    .roadmap-grid { grid-template-columns: 40px 1fr !important; }
    .roadmap-left { display: none !important; }
    .roadmap-right { padding-left: 20px !important; padding-right: 0 !important; }
    .roadmap-center { padding-top: 24px !important; }
    .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
    .footer-bottom { flex-direction: column !important; gap: 8px !important; text-align: center !important; }
    .hero-tagline { font-size: 11px !important; letter-spacing: 3px !important; }
    .stats-bar { max-width: 100% !important; }
  }

  @media (max-width: 480px) {
    .nft-grid { grid-template-columns: 1fr 1fr !important; }
    .task-icon-num { display: none !important; }
  }
`;

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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 20px", gap: "20px", background: "#050300" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.25))" }} />
      <span style={{ fontSize: "18px", opacity: 0.5 }}>🍌</span>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(212,175,55,0.25))" }} />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar" style={{
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
      <style>{GLOBAL_STYLES}</style>
      {bananas.map((b, i) => <FloatingBanana key={i} style={b} />)}

      <div style={{
        textAlign: "center", zIndex: 1, padding: "0 20px", width: "100%", maxWidth: "800px",
        opacity: visible ? 1 : 0, transition: "all 1.2s ease",
        transform: visible ? "translateY(0)" : "translateY(30px)",
      }}>
        <div className="hero-tagline" style={{
          fontSize: "13px", letterSpacing: "6px", color: "rgba(212,175,55,0.6)",
          fontFamily: "'Cinzel', serif", marginBottom: "20px",
          animation: "fadeUp 1s ease 0.2s both",
        }}>THE SLEEKEST COLLECTION ON THE INTERNET</div>

        <h1 style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(60px, 14vw, 140px)", fontWeight: "900", margin: "0 0 20px",
          background: "linear-gradient(135deg, #B8860B 0%, #FFD700 30%, #FFA500 50%, #FFD700 70%, #B8860B 100%)",
          backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: "shimmer 4s linear infinite, fadeUp 1s ease 0.4s both",
          lineHeight: "1.1", filter: "drop-shadow(0 0 40px rgba(255,215,0,0.25))",
        }}>PANCHI</h1>

        <p style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: "clamp(16px, 2.5vw, 22px)", color: "rgba(255,255,255,0.65)",
          maxWidth: "560px", margin: "0 auto 40px", lineHeight: "1.8", fontStyle: "italic",
          animation: "fadeUp 1s ease 0.6s both",
        }}>Born in the jungle. Raised on the blockchain. Here to cause beautiful chaos.</p>

        <div className="stats-bar" style={{
          display: "flex", justifyContent: "center", animation: "fadeUp 1s ease 0.8s both",
          background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.12)",
          borderRadius: "8px", overflow: "hidden", maxWidth: "560px", margin: "0 auto 40px",
        }}>
          {[["FREE", "Mint Price"], ["2,222", "Total Supply"]].map(([num, label], i) => (
            <div key={label} style={{
              flex: 1, padding: "20px 12px", textAlign: "center",
              borderRight: i < 1 ? "1px solid rgba(212,175,55,0.1)" : "none",
            }}>
              <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(16px, 2.5vw, 24px)", color: "#FFD700", fontWeight: "700" }}>{num}</div>
              <div style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.35)", fontFamily: "'Cinzel', serif", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>

        <div className="hero-buttons" style={{ display: "flex", gap: "14px", justifyContent: "center", animation: "fadeUp 1s ease 1s both", marginBottom: "80px" }}>
          <button onClick={() => { const el = document.getElementById("panchilist"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} style={{
            background: "linear-gradient(135deg, #FFD700, #FFA500)", border: "none", borderRadius: "4px", cursor: "pointer",
            padding: "18px 52px", fontFamily: "'Cinzel', serif", fontSize: "14px", letterSpacing: "3px", color: "#000", fontWeight: "700",
            boxShadow: "0 0 40px rgba(255,215,0,0.4)", animation: "goldPulse 3s ease-in-out infinite", transition: "transform 0.2s",
          }}>JOIN PANCHILIST</button>
          <button onClick={() => { const el = document.getElementById("collection"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} style={{
            background: "linear-gradient(135deg, #B8860B, #FFD700, #FFA500)", border: "none", borderRadius: "4px", cursor: "pointer",
            padding: "18px 52px", fontFamily: "'Cinzel', serif", fontSize: "14px", letterSpacing: "3px", color: "#000", fontWeight: "700",
            boxShadow: "0 0 24px rgba(255,215,0,0.25)", transition: "transform 0.2s",
          }}>SEE THE COLLECTION</button>
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

function CollectionSection() {
  return (
    <div className="section-pad" style={{ padding: "100px 48px 120px", background: "linear-gradient(180deg, #050300 0%, #07040080 40%, #060400 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "6px", color: "rgba(212,175,55,0.6)", fontFamily: "'Cinzel', serif", marginBottom: "16px" }}>THE COLLECTION</div>
          <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(28px, 5vw, 52px)", background: "linear-gradient(135deg, #FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 20px" }}>Meet the PANCHI</h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "0 auto 24px", lineHeight: "1.8" }}>Each one different. Each one yours.</p>
          <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #FFD700, transparent)", margin: "0 auto" }} />
        </div>
        <div className="nft-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {NFT_IMAGES.map((src, i) => (
            <div key={i} style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "12px", overflow: "hidden", transition: "all 0.4s", cursor: "pointer" }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.5)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <img src={src} alt={`PANCHI #${i + 1}`} style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PanchilistSection({ sectionRef }) {
  const [completed, setCompleted] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allDone = PANCHILIST_TASKS.every(t => completed[t.id]);
  const completedCount = Object.values(completed).filter(Boolean).length;
  const progress = (completedCount / PANCHILIST_TASKS.length) * 100;
  const [pendingId, setPendingId] = useState(null);
  const [countdown, setCountdown] = useState(0);

  const markDone = (id) => setCompleted(prev => ({ ...prev, [id]: true }));

  const startTrial = (id) => {
    setPendingId(id);
    setCountdown(40);
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setPendingId(null);
          markDone(id);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = () => {
    if (!allDone) return;
    window.open("https://forms.gle/eXnovSXm9GQesrgK7", "_blank");
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <div ref={sectionRef} className="section-pad" style={{ padding: "100px 48px 120px", background: "linear-gradient(180deg, #050300 0%, #0a0600 50%, #050300 100%)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,215,0,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,165,0,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "820px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "8px", color: "rgba(212,175,55,0.5)", fontFamily: "'Cinzel', serif", marginBottom: "20px" }}>PROVE YOUR WORTH</div>
          <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(24px, 5vw, 52px)", background: "linear-gradient(135deg, #B8860B 0%, #FFD700 40%, #FFA500 60%, #FFD700 80%, #B8860B 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 6s linear infinite", margin: "0 0 16px", lineHeight: "1.2" }}>The Trials of PANCHI</h2>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "17px", fontStyle: "italic", color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: "0 auto 32px", lineHeight: "1.8" }}>
            The panchilist is not given. It is earned. Complete each trial — then present your wallet and await judgement.
          </p>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
              {PANCHILIST_TASKS.map((task, i) => {
                const done = completed[task.id];
                return (
                  <div key={task.id} className="task-row" style={{ position: "relative", overflow: "hidden", background: done ? "rgba(255,215,0,0.06)" : "rgba(212,175,55,0.03)", border: `1px solid ${done ? "rgba(255,215,0,0.35)" : "rgba(212,175,55,0.12)"}`, borderRadius: "10px", padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px", transition: "all 0.4s", boxShadow: done ? "0 0 24px rgba(255,215,0,0.06)" : "none", animation: done ? "trialGlow 3s ease-in-out infinite" : "none" }}>
                    {done && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.03) 50%, transparent 100%)", pointerEvents: "none" }} />}
                    <div className="task-icon-num" style={{ width: "40px", height: "40px", borderRadius: "50%", flexShrink: 0, background: done ? "linear-gradient(135deg, #FFD700, #FFA500)" : "rgba(212,175,55,0.06)", border: `2px solid ${done ? "#FFD700" : "rgba(212,175,55,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.4s", boxShadow: done ? "0 0 16px rgba(255,215,0,0.4)" : "none" }}>
                      {done ? <span style={{ fontSize: "16px", animation: "checkPop 0.4s ease both" }}>✓</span> : <span style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", color: "rgba(212,175,55,0.5)", fontWeight: "700" }}>0{i + 1}</span>}
                    </div>
                    <div style={{ fontSize: "22px", flexShrink: 0, filter: done ? "none" : "grayscale(1) opacity(0.4)", transition: "all 0.4s" }}>{task.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", letterSpacing: "1px", color: done ? "#FFD700" : "rgba(255,255,255,0.75)", marginBottom: "4px" }}>{task.title}</div>
                      <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: "1.5" }}>{task.description}</div>
                    </div>
                    {done ? (
                      <div className="task-action" style={{ flexShrink: 0, padding: "10px 18px", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "6px", fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "2px", color: "#FFD700" }}>DONE ✓</div>
                    ) : pendingId === task.id ? (
                      <div className="task-action" style={{ flexShrink: 0, padding: "10px 18px", background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "6px", fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "2px", color: "rgba(212,175,55,0.7)", minWidth: "90px", textAlign: "center" }}>
                        VERIFYING...
                      </div>
                    ) : (
                      <a href={task.actionLink} target="_blank" rel="noopener noreferrer"
                        onClick={() => startTrial(task.id)}
                        className="task-action"
                        style={{ flexShrink: 0, padding: "10px 18px", background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "6px", cursor: "pointer", textDecoration: "none", fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "2px", color: "#FFD700", transition: "all 0.2s", whiteSpace: "nowrap" }}
                        onMouseOver={e => { e.currentTarget.style.background = "rgba(212,175,55,0.15)"; e.currentTarget.style.borderColor = "#FFD700"; }}
                        onMouseOut={e => { e.currentTarget.style.background = "rgba(212,175,55,0.08)"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)"; }}
                      >{task.actionLabel} →</a>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ background: allDone ? "rgba(255,215,0,0.07)" : "rgba(212,175,55,0.03)", border: `1px solid ${allDone ? "rgba(255,215,0,0.35)" : "rgba(212,175,55,0.1)"}`, borderRadius: "12px", padding: "36px 28px", transition: "all 0.6s", opacity: allDone ? 1 : 0.35, position: "relative", overflow: "hidden", textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "10px" }}>🏛️</div>
              <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "18px", color: "#FFD700", marginBottom: "10px" }}>{allDone ? "Present Your Wallet" : "Complete All Trials First"}</div>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "15px", fontStyle: "italic", color: "rgba(255,255,255,0.45)", margin: "0 0 24px" }}>{allDone ? "You have proven yourself worthy. Click below to submit your wallet and claim your spot." : `Complete all ${PANCHILIST_TASKS.length} trials above to unlock this.`}</p>
              <button onClick={handleSubmit} disabled={!allDone}
                style={{ padding: "16px 48px", borderRadius: "6px", border: "none", cursor: allDone ? "pointer" : "not-allowed", background: allDone ? "linear-gradient(135deg, #FFD700, #FFA500)" : "rgba(212,175,55,0.08)", fontFamily: "'Cinzel', serif", fontSize: "13px", letterSpacing: "3px", color: allDone ? "#000" : "rgba(255,255,255,0.2)", fontWeight: "700", boxShadow: allDone ? "0 0 24px rgba(255,215,0,0.35)" : "none", transition: "all 0.3s" }}
              >CLAIM YOUR SPOT →</button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "56px 24px", background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.3)", borderRadius: "16px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(255,215,0,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
            <div style={{ fontSize: "64px", marginBottom: "24px", animation: "sealReveal 0.6s ease both" }}>🍌</div>
            <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(22px, 4vw, 40px)", color: "#FFD700", marginBottom: "16px", filter: "drop-shadow(0 0 20px rgba(255,215,0,0.5))" }}>You're on the list.</div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "17px", fontStyle: "italic", color: "rgba(255,255,255,0.6)", maxWidth: "460px", margin: "0 auto 28px", lineHeight: "1.8" }}>The PANCHI elders have received your application. Watch the Discord for the announcement. The jungle remembers.</p>
            <div style={{ display: "inline-block", background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: "8px", padding: "12px 20px", fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "2px", color: "rgba(212,175,45,0.7)" }}>
              🍌 PANCHILIST — REGISTERED
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "How do I mint a PANCHI?", a: "Connect your Ethereum wallet, click Mint Free, and confirm the transaction. You only pay the network gas fee — the PANCHI itself is completely free." },
    { q: "What blockchain is PANCHI on?", a: "PANCHI is built on Ethereum — the most trusted and widely adopted NFT chain, with deep liquidity and marketplace support across the ecosystem." },
    { q: "How many PANCHI can I mint?", a: "Maximum 20 per wallet. Total supply is capped at 2,222 forever. Once they're gone, they're gone." },
    { q: "What makes each PANCHI unique?", a: "Every PANCHI is algorithmically generated with a unique combination of traits — backgrounds, fur, accessories, expressions, and more. No two are the same." },
    { q: "What is the Panchilist?", a: "The Panchilist is an early access list for dedicated community members. Complete the trials, submit your wallet, and secure your spot before the public mint opens." },
  ];

  return (
    <div className="section-pad" style={{ padding: "100px 48px 120px", background: "linear-gradient(180deg, #050300 0%, #07040080 50%, #050300 100%)", position: "relative" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "6px", color: "rgba(212,175,55,0.6)", fontFamily: "'Cinzel', serif", marginBottom: "16px" }}>GOT QUESTIONS</div>
          <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(28px, 5vw, 52px)", background: "linear-gradient(135deg, #FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 20px" }}>FAQ</h2>
          <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #FFD700, transparent)", margin: "0 auto" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map(({ q, a }, i) => (
            <div key={i} style={{ background: open === i ? "rgba(255,215,0,0.06)" : "rgba(212,175,55,0.04)", border: `1px solid ${open === i ? "rgba(255,215,0,0.3)" : "rgba(212,175,55,0.12)"}`, borderRadius: "10px", overflow: "hidden", transition: "all 0.3s" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "12px", letterSpacing: "1px", color: open === i ? "#FFD700" : "rgba(255,255,255,0.8)", textAlign: "left" }}>{q}</span>
                <span style={{ fontSize: "18px", color: "#FFD700", opacity: 0.7, flexShrink: 0, transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>+</span>
              </button>
              {open === i && <div style={{ padding: "0 24px 20px" }}><p style={{ fontFamily: "'EB Garamond', serif", fontSize: "16px", lineHeight: "1.8", color: "rgba(255,255,255,0.6)", margin: 0 }}>{a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#030200", borderTop: "1px solid rgba(212,175,55,0.1)", padding: "56px 24px 36px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "48px", marginBottom: "40px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span style={{ fontSize: "24px" }}>🍌</span>
              <span style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "20px", background: "linear-gradient(135deg, #FFD700, #FFA500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "700", letterSpacing: "3px" }}>PANCHI</span>
            </div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "15px", color: "rgba(255,255,255,0.35)", lineHeight: "1.8", maxWidth: "280px" }}>Born in the jungle. Raised on the blockchain. Here to cause beautiful chaos.</p>
          </div>
          <div>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "3px", color: "#FFD700", marginBottom: "20px" }}>COMMUNITY</div>
            {["Twitter", "Discord"].map(l => (
              <div key={l} style={{ fontFamily: "'EB Garamond', serif", fontSize: "15px", color: "rgba(255,255,255,0.35)", marginBottom: "10px", cursor: "pointer", transition: "color 0.2s" }}
                onMouseOver={e => e.target.style.color = "#FFD700"}
                onMouseOut={e => e.target.style.color = "rgba(255,255,255,0.35)"}
              >{l}</div>
            ))}
          </div>
        </div>
        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(212,175,55,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "1px" }}>© 2026 PANCHI. All rights reserved.</div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "1px" }}>Built on Ethereum 🍌</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const panchilistRef = useRef(null);
  return (
    <div style={{ background: "#050300", minHeight: "100vh", color: "#fff" }}>
      <Navbar />
      <div id="home"><HeroSection /></div>
      <SectionDivider />
      <div id="collection"><CollectionSection /></div>
      <SectionDivider />
      <div id="panchilist"><PanchilistSection sectionRef={panchilistRef} /></div>
      <SectionDivider />
      <div id="faq"><FAQSection /></div>
      <Footer />
    </div>
  );
}
