import React from 'react';
import { Play, X, ArrowRight, Mail } from 'lucide-react';

const BLUE = '#3B60E4';
const BLUE_DEEP = '#2F4FC9';
const GREEN = '#1E8E5A';
const GREEN_DEEP = '#176E46';
const SLATE = '#3D4654';
const MUTED = '#6B7280';
const INK = '#2E4259';
const BG = '#FAFBFD';

// Fixed nav is ~80-90px tall — without this, jumping to an anchor lands the
// section heading half-hidden underneath it.
const ANCHOR_OFFSET = { scrollMarginTop: 96 };

// Native href="#id" anchor scrolling doesn't reliably fire in every context
// (confirmed: even a direct location.hash assignment sometimes updates the
// URL without scrolling) — so anchor links here scroll explicitly via JS
// instead of depending on default browser fragment-navigation behavior.
function scrollToId(e, id) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function HomePage({ onContactClick, onNavigate }) {
  const [videoReady, setVideoReady] = React.useState(false);
  const [filmPlaying, setFilmPlaying] = React.useState(false);
  const filmRef = React.useRef(null);

  React.useEffect(() => {
    if (filmPlaying && filmRef.current) {
      filmRef.current.currentTime = 0;
      filmRef.current.play().catch(() => {});
    }
  }, [filmPlaying]);

  return (
    <div>
      {/* HERO — the narrated film plays inline inside this same section
          (absolutely positioned within it) rather than as a full-screen
          modal, and only starts when the visitor clicks "Watch Our Story."
          No auto-play on load: it read as an ad and, on mobile, obscured
          the page instead of sitting inside it. */}
      <section className="relative w-full" style={{ height: '100vh', minHeight: 560, backgroundColor: INK, backgroundImage: 'url(/images/hero-poster.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: videoReady && !filmPlaying ? 1 : 0, transition: 'opacity 700ms' }} onPlaying={() => setVideoReady(true)} onLoadedData={() => setVideoReady(true)}>
          <source src="/videos/secobio2.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,16,24,0.72) 0%, rgba(12,16,24,0.34) 26%, rgba(12,16,24,0) 55%)', opacity: filmPlaying ? 0 : 1, transition: 'opacity 300ms' }} />

        {!filmPlaying && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 1.5rem 8vh' }}>
            <div style={{ maxWidth: 760 }}>
              <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 56px)', fontWeight: 700, color: 'white', lineHeight: 1.15, letterSpacing: '-0.01em', textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}>
                Protecting what matters.
              </h1>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.95)', lineHeight: 1.65, marginTop: '1.5rem', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}>
                Probiotics die before they arrive. Seco Bio's proprietary AI and robotics-driven formulation platform keeps them alive from the factory to the moment they're used — so what's on the label is what's inside.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <a
                  href="#platform"
                  onClick={(e) => scrollToId(e, 'platform')}
                  style={{ display: 'inline-block', padding: '14px 28px', borderRadius: '999px', background: `linear-gradient(90deg, ${BLUE} 0%, ${BLUE_DEEP} 100%)`, color: 'white', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}
                >
                  Learn more
                </a>
                <button
                  onClick={() => setFilmPlaying(true)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '999px', border: '1.5px solid rgba(255,255,255,0.7)', background: 'transparent', color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
                >
                  <Play size={16} fill="white" />
                  Watch Our Story
                </button>
              </div>
            </div>
          </div>
        )}

        {filmPlaying && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: '#000', zIndex: 2 }}>
            <video
              ref={filmRef}
              controls
              playsInline
              className="w-full h-full"
              style={{ objectFit: 'contain', display: 'block' }}
              poster="/images/video-poster.jpg"
            >
              <source src="/videos/secobiointro.mp4" type="video/mp4" />
            </video>
            <button
              onClick={() => setFilmPlaying(false)}
              aria-label="Close video"
              className="inline-flex items-center gap-2 pl-4 pr-3 py-2.5 rounded-full font-semibold transition-opacity hover:opacity-80"
              style={{ position: 'absolute', top: 84, right: 16, color: '#fff', backgroundColor: 'rgba(255,255,255,0.16)', fontSize: 14, zIndex: 3 }}
            >
              Close
              <X size={18} />
            </button>
          </div>
        )}

        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 'clamp(70px, 13vw, 200px)', display: 'block', opacity: filmPlaying ? 0 : 1 }}>
          <path d="M0,200 L0,8 C360,150 1080,150 1440,8 L1440,200 Z" fill={BG} />
        </svg>
      </section>

      {/* PLATFORM PROOF — abbreviated version of the Platform & Science page's
          opening proof block, so "Learn more" has somewhere to land without
          leaving the homepage. */}
      <section id="platform" style={{ padding: '4rem 1.5rem', backgroundColor: BG, ...ANCHOR_OFFSET }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '1.5rem', lineHeight: 1.2 }}>This is published science, not a marketing pitch.</h2>
          <div className="grid sm:grid-cols-3 gap-6" style={{ marginBottom: '2rem' }}>
            {[
              { value: '10,000×', caption: 'more surviving cells than an uncoated commercial strain' },
              { value: '6.5 months', caption: 'sustained viability at body temperature' },
              { value: '2,080', caption: 'formulations tested to find what works' }
            ].map(({ value, caption }) => (
              <div key={caption}>
                <div style={{ fontSize: '22px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}>{value}</div>
                <div style={{ fontSize: '14px', color: MUTED }}>{caption}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate && onNavigate('platform-science')}
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: BLUE, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            See the full platform & science <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* OUR STORY — abbreviated, links to the full About page. */}
      <section id="our-story" className="px-6" style={{ padding: '4rem 1.5rem', backgroundColor: 'white', ...ANCHOR_OFFSET }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: BLUE, marginBottom: '1rem' }}>Our Story</h2>
          <p style={{ fontSize: '17px', color: MUTED, lineHeight: 1.78, marginBottom: '1.5rem' }}>
            From 2017 to 2024, NASA and DARPA funded research at MIT aimed at keeping bacteria alive for soldiers in the field and astronauts on long missions. The findings were published in <em>Nature Materials</em> in 2024. Seco Bio exists to bring it to the industries that need it now.
          </p>
          <button
            onClick={() => onNavigate && onNavigate('about')}
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: BLUE, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            Read our full story <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* FOR PARTNERS — abbreviated, links to the full Partners page. */}
      <section id="for-partners" style={{ padding: '4rem 1.5rem', backgroundColor: BG, ...ANCHOR_OFFSET }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: GREEN_DEEP, marginBottom: '1rem' }}>For Partners</h2>
          <p style={{ fontSize: '17px', color: MUTED, lineHeight: 1.78, marginBottom: '2rem', maxWidth: '58ch' }}>
            Whether you make a living product or you're looking at where this industry goes next, it begins with a conversation.
          </p>
          <div className="grid md:grid-cols-2 gap-5" style={{ marginBottom: '2rem' }}>
            <div className="rounded-2xl p-6" style={{ backgroundColor: 'white', borderTop: `4px solid ${BLUE}` }}>
              <h3 className="font-bold mb-2" style={{ color: SLATE, fontSize: '16px' }}>Business Partners</h3>
              <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.6 }}>Brands, manufacturers, and ingredient partners bringing us a strain to protect — licensed back to you once it's solved.</p>
            </div>
            <div className="rounded-2xl p-6" style={{ backgroundColor: '#E1F4EE', borderTop: `4px solid ${GREEN}` }}>
              <h3 className="font-bold mb-2" style={{ color: SLATE, fontSize: '16px' }}>Capital Partners</h3>
              <p style={{ color: MUTED, fontSize: '14px', lineHeight: 1.6 }}>Scale the platform with us.</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate && onNavigate('partners')}
            className="px-7 py-3 rounded-full text-sm font-semibold text-white"
            style={{ background: `linear-gradient(90deg, ${GREEN} 0%, ${GREEN_DEEP} 100%)`, border: 'none', cursor: 'pointer' }}
          >
            Partner with Seco
          </button>
        </div>
      </section>

      {/* GET IN TOUCH — closes the homepage narrative. */}
      <section id="get-in-touch" className="py-20 px-6 text-center" style={{ backgroundColor: INK, ...ANCHOR_OFFSET }}>
        <h2 className="text-white font-bold mb-8" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)', letterSpacing: '-0.03em' }}>
          Get in touch.
        </h2>
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-sm font-semibold"
          style={{ color: BLUE_DEEP, border: 'none', cursor: 'pointer' }}
        >
          <Mail size={17} />
          Get in touch
        </button>
      </section>
    </div>
  );
}
