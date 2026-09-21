import React from 'react';
import { ArrowRight, Check, Mail } from 'lucide-react';
import {
  PageTopBand, Eyebrow,
  SLATE, MUTED, BLUE, GREEN, GREEN_DEEP, INK
} from './ui';

export default function PartnersPage({ onContactClick }) {
  const connectCapital = () => onContactClick('Partnership', 'Interested in connecting as a capital partner.');
  const connectBusiness = () => onContactClick('Partnership', 'Interested in exploring licensing opportunities.');

  return (
    <div>
      <PageTopBand image="/images/photo/wellness.jpg" />

      {/* Two-panel positioning — Capital vs Business, leading with capital per updated flow */}
      <section className="pt-16 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div
            className="rounded-2xl p-10"
            style={{ backgroundColor: '#E1F4EE', borderTop: `4px solid ${GREEN}` }}
          >
            <Eyebrow color={GREEN_DEEP} className="mb-3">Capital Partners</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: '19px' }}>
              Partners scaling the platform with us
            </h3>
            <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7, marginBottom: 24 }}>
              We work with capital partners aligned to the long-term platform opportunity.
            </p>
            <button
              onClick={connectCapital}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: GREEN_DEEP, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Connect With Us to Learn More <ArrowRight size={14} />
            </button>
          </div>

          <div
            className="rounded-2xl p-10"
            style={{ backgroundColor: '#EEF2FE', borderTop: `4px solid ${BLUE}` }}
          >
            <Eyebrow className="mb-3">Business Partners</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: '19px' }}>
              Brands, manufacturers, and ingredient partners
            </h3>
            <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7, marginBottom: 24 }}>
              We formulate protection and license it to you — your product delivers what the
              label promises. Built to scale with you, not around you.
            </p>
            <div
              className="text-sm font-semibold px-4 py-3 rounded-md mb-3"
              style={{ backgroundColor: 'white', color: SLATE, borderLeft: `3px solid ${BLUE}` }}
            >
              Licensed by Strain · Field · Formula
            </div>
            <button
              onClick={connectBusiness}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: BLUE, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Connect With Us to Explore Opportunities <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* FOR BUSINESS PARTNERS — track divider */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-4">
        <div
          className="inline-flex items-center px-5 py-2 rounded-full"
          style={{ backgroundColor: BLUE, color: 'white' }}
        >
          <span className="text-xs font-bold uppercase" style={{ letterSpacing: '0.16em' }}>For Business Partners</span>
        </div>
      </div>

      {/* Redesigned: caption promoted to centerpiece, X/check list split into
          plain-text cards, blue swapped for green, dead-space band closed. */}
      <section className="pt-4 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Eyebrow color={GREEN_DEEP} className="mb-3">For brands &amp; manufacturers</Eyebrow>
          <h2
            className="font-bold mb-10"
            style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
          >
            You already pay for die-off. <span style={{ color: GREEN, fontStyle: 'italic' }}>You just pay for it upstream.</span>
          </h2>

          <p style={{ color: MUTED, fontSize: '15px', marginBottom: 24 }}>
            Overfilling is a tax. Every unit absorbs the cost of what you can't control.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              'You buy more organism than you sell',
              "You carry shelf life you can't fully predict",
              "You make a claim you can't verify"
            ].map((t) => (
              <div key={t} className="rounded-xl p-6" style={{ backgroundColor: '#F7F8FA', border: '1px solid #E4E8F2' }}>
                <p style={{ color: SLATE, fontSize: '15px', lineHeight: 1.6, fontWeight: 600 }}>{t}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #E4E8F2', borderBottom: '1px solid #E4E8F2', padding: '2.5rem 0', textAlign: 'center', marginBottom: 40 }}>
            <p
              className="font-bold mx-auto mb-4"
              style={{ color: SLATE, fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', lineHeight: 1.3, maxWidth: '32ch' }}
            >
              A program is scoped to one strain and one format. We formulate it, prove it at your scale, and transfer it to your line.
            </p>
            <p style={{ color: MUTED, fontSize: '15px' }}>
              Without changing your strain, your ingredients, or your line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-10" style={{ border: '1px solid #E4E8F2' }}>
              <Eyebrow className="mb-6">What we need from you</Eyebrow>
              <ul className="space-y-4">
                {[
                  'The organism — strain name and source',
                  'The format — tablets, capsules, powder',
                  'The claim and shelf life you’re targeting',
                  'Your markets and regulatory requirements',
                  'Volume and manufacturing constraints'
                ].map((t) => (
                  <li key={t} className="flex gap-3" style={{ color: MUTED, fontSize: '15px', lineHeight: 1.6 }}>
                    <span style={{ color: MUTED, flexShrink: 0 }}>›</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-10" style={{ backgroundColor: '#E1F4EE' }}>
              <Eyebrow color={GREEN_DEEP} className="mb-6">What you get back</Eyebrow>
              <ul className="space-y-4">
                {[
                  'A protective formulation built for your strain',
                  'A transfer package for your line',
                  'Stability data under your storage conditions',
                  'A license to sell it in your markets',
                  'Documentation for regulatory filings'
                ].map((t) => (
                  <li key={t} className="flex gap-3" style={{ color: SLATE, fontSize: '16px', lineHeight: 1.6 }}>
                    <Check size={17} style={{ color: GREEN_DEEP, flexShrink: 0, marginTop: 3 }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section
        className="py-28 px-6 text-center"
        style={{ backgroundColor: INK }}
      >
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: 46,
            height: 3,
            borderRadius: 2,
            backgroundColor: GREEN,
            margin: '0 auto 34px'
          }}
        />
        <h2
          className="text-white font-bold mb-10"
          style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', letterSpacing: '-0.03em' }}
        >
          Let's start the conversation.
        </h2>
        <button
          onClick={connectBusiness}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-sm font-semibold"
          style={{ color: INK }}
        >
          <Mail size={17} />
          Get in touch
        </button>
      </section>
    </div>
  );
}
