import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import {
  ArrowRight, ArrowLeft, Calendar, MapPin, BarChart3, Users, Settings, Leaf,
  Cpu, Factory, Waypoints, Coins, ShoppingCart, User, Briefcase, Landmark,
  Laptop, Crown, Building2, LineChart, Lightbulb, Send,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import summitLogo from "@/assets/summit-logo.png.asset.json";
import heroAsset from "@/assets/supplied-background-1.jpg.asset.json";
import trophyAsset from "@/assets/supplied-background-3.jpg.asset.json";
import whyAsset1 from "@/assets/supplied-section-1.jpg.asset.json";
import whyAsset2 from "@/assets/supplied-section-2.jpg.asset.json";
import whyAsset3 from "@/assets/supplied-section-3.jpg.asset.json";
import whyAsset4 from "@/assets/supplied-section-4.jpg.asset.json";
import sectorAsset1 from "@/assets/original-sector-1.jpg.asset.json";
import sectorAsset2 from "@/assets/original-sector-2.jpg.asset.json";
import sectorAsset3 from "@/assets/original-sector-3.jpg.asset.json";
import sectorAsset4 from "@/assets/original-sector-4.jpg.asset.json";
import sectorAsset5 from "@/assets/original-sector-5.jpg.asset.json";
import sectorAsset6 from "@/assets/original-sector-6.jpg.asset.json";
import attendeeAsset1 from "@/assets/supplied-section-5.jpg.asset.json";
import attendeeAsset2 from "@/assets/supplied-section-6.jpg.asset.json";
import attendeeAsset3 from "@/assets/supplied-section-7.jpg.asset.json";
import attendeeAsset4 from "@/assets/supplied-section-8.jpg.asset.json";
import attendeeAsset5 from "@/assets/supplied-section-9.jpg.asset.json";
import attendeeAsset6 from "@/assets/supplied-section-10.jpg.asset.json";
import attendeeAsset7 from "@/assets/supplied-section-11.jpg.asset.json";
import attendeeAsset8 from "@/assets/supplied-section-12.jpg.asset.json";
import attendeeAsset9 from "@/assets/supplied-section-13.jpg.asset.json";

import attendeeBackground from "@/assets/supplied-background-2.jpg.asset.json";
import categoriesBackground from "@/assets/supplied-background-4.jpg.asset.json";
import iconsBackground from "@/assets/supplied-background-5.jpg.asset.json";
import closingBackground from "@/assets/supplied-background-6.jpg.asset.json";
import legacyArtwork from "@/assets/supplied-section-14.jpg.asset.json";
import startupArtwork from "@/assets/supplied-section-15.jpg.asset.json";
import capitalArtwork from "@/assets/supplied-section-16.jpg.asset.json";
import digitalArtwork from "@/assets/supplied-section-17.jpg.asset.json";
import recognitionArtwork from "@/assets/supplied-section-18.jpg.asset.json";
import leadershipArtwork from "@/assets/supplied-section-19.jpg.asset.json";
import globalArtwork from "@/assets/supplied-section-20.jpg.asset.json";
import collaborationArtwork from "@/assets/supplied-section-21.jpg.asset.json";

const hero = heroAsset.url;
const trophy = trophyAsset.url;
const why1 = whyAsset1.url;
const why2 = whyAsset2.url;
const why3 = whyAsset3.url;
const why4 = whyAsset4.url;
const sTech = sectorAsset1.url;
const sMan = sectorAsset2.url;
const sInfra = sectorAsset3.url;
const sFin = sectorAsset4.url;
const sSus = sectorAsset5.url;
const sCon = sectorAsset6.url;
const attendeeImages = [attendeeAsset1.url, attendeeAsset2.url, attendeeAsset3.url, attendeeAsset4.url, attendeeAsset5.url, attendeeAsset6.url, attendeeAsset7.url, attendeeAsset8.url, attendeeAsset9.url];
const topicImages = [legacyArtwork.url, startupArtwork.url, capitalArtwork.url, digitalArtwork.url, collaborationArtwork.url, globalArtwork.url, leadershipArtwork.url, recognitionArtwork.url];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ET Edge Bharat Growth Summit – South Edition | 10 Dec 2026, Bengaluru" },
      { name: "description", content: "Two Forces, One Bharat: bridging generations of enterprise to build the businesses of tomorrow. 10 December 2026, Bengaluru." },
      { property: "og:title", content: "ET Edge Bharat Growth Summit – South Edition" },
      { property: "og:description", content: "Bharat's growth story is being written in Bengaluru. 10 December 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const btnPrimary = "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-card transition hover:brightness-110";
const btnOutline = "inline-flex items-center gap-2 rounded-md border border-foreground/30 bg-card/70 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-card";

function CTAs() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href="#invite" className={btnPrimary}>Request an Invite <ArrowRight className="h-4 w-4" /></a>
      <a href="#partner" className={btnOutline}>Partnership Opportunities</a>
    </div>
  );
}

function Logo() {
  return (
    <div className="inline-flex flex-col items-center">
      <img src={summitLogo.url} alt="ET Edge Bharat Growth Summit" width={754} height={259} className="summit-logo" />
      <p className="mt-2 text-xs font-bold text-foreground">S O U T H  E D I T I O N</p>
      <p className="mt-1 text-[10px] font-bold text-foreground">B U I L D I N G  W H A T ’ S  N E X T</p>
    </div>
  );
}

const why = [
  { icon: BarChart3, t: "A powerful economic engine", d: "Driving innovation, investment and next-gen industries.", img: why1 },
  { icon: Users, t: "A hub for talent and technology", d: "Home to world-class talent and a thriving startup ecosystem.", img: why2 },
  { icon: Settings, t: "A leader in manufacturing and exports", d: "Strengthening India's global competitiveness.", img: why3 },
  { icon: Leaf, t: "A model for sustainable and inclusive growth", d: "Building a more resilient, equitable and future-ready Bharat.", img: why4 },
];
const sectors = [
  { icon: Cpu, t: "Technology & AI", img: sTech },
  { icon: Factory, t: "Manufacturing", img: sMan },
  { icon: Waypoints, t: "Infrastructure", img: sInfra },
  { icon: Coins, t: "Financial Services", img: sFin },
  { icon: Leaf, t: "Sustainability", img: sSus },
  { icon: ShoppingCart, t: "Consumer & Retail", img: sCon },
];
const topics = [
  ["Legacy and reinvention", "Understanding how established enterprises can transform business models while retaining their core strengths."],
  ["From startup to scale-up", "Exploring the transition from early traction to profitability, sustainable growth and long-term market leadership."],
  ["Capital and growth", "Examining funding opportunities, investor expectations, valuations, acquisitions and exit strategies."],
  ["Digital transformation", "Understanding how AI, automation and technology can improve business performance and competitiveness."],
  ["The power of collaboration", "Identifying opportunities for partnerships between corporates, startups, investors and research institutions."],
  ["Building global champions", "Exploring how Indian businesses can expand into new markets and strengthen their global competitiveness."],
  ["Future-ready leadership", "Understanding the leadership capabilities, governance and organisational culture needed to navigate business transformation."],
  ["Recognising enterprise excellence", "Celebrating organisations and individuals contributing to innovation, transformation and India's growth story."],
];
const attend = [
  { t: "Founders & Co-Founders", i: User }, { t: "CEOs & Managing Directors", i: Briefcase },
  { t: "Policymakers & Government Officials", i: Landmark }, { t: "CIO & COO", i: Laptop },
  { t: "Heads of Strategy & Digital Transformation", i: Crown }, { t: "Venture Capitalists & Angel Investors", i: Building2 },
  { t: "Private Equity Leaders", i: LineChart }, { t: "Startup Ecosystem Enablers & Incubators", i: Lightbulb },
  { t: "Corporate Venture Arms & Accelerators", i: Send },
];
const awards = [
  { c: "Startups & Entrepreneurs", tone: "bg-primary", items: ["Emerging Startup of the Year", "Startup of the Year", "Startup of the Year – South", "South Indian Startup to Watch", "Bootstrap Champion", "Emerging Entrepreneur of the Year"] },
  { c: "Growth & Disruption", tone: "bg-brand-green", items: ["Market Disruptor of the Year", "High Growth Company of the Year", "Business Model Innovation Award", "Customer Experience Excellence Award", "Export Growth Leader", "Make in India Innovation Leader"] },
  { c: "Consumer & Commerce", tone: "bg-accent", items: ["Emerging Consumer Brand of the Year", "D2C Brand of the Year", "E-commerce Innovation Leader", "Most Loved Consumer Brand"] },
  { c: "Technology & Sectors", tone: "bg-foreground", items: ["SaaS Company of the Year", "AI Innovation Leader of the Year", "Business Technology Innovator of the Year", "DeepTech Innovation Leader", "FinTech Innovator of the Year", "HealthTech Innovator of the Year", "EdTech Innovator of the Year", "Mobility Innovation Leader"] },
];
const partners = ["Title Partner", "Powered By", "Associate Partner", "Knowledge Partner", "Community Partner", "Media Partner"];

function SectionHead({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mb-10 grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end">
      <div className="border-l-2 border-primary pl-5">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl leading-tight md:text-[38px]">{title}</h2>
      </div>
      {desc && <p className="border-l border-primary/50 pl-5 text-sm leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

function Index() {
  const slider = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => slider.current?.scrollBy({ left: d * 260, behavior: "smooth" });
  let n = 0;

  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="summit-hero relative bg-background">
        <img src={hero} alt="Bengaluru skyline with Vidhana Soudha and metro" width={1920} height={1080} className="summit-hero-art" />
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-12">
          <div className="summit-hero-copy">
            <div className="inline-block"><Logo /></div>
            <div className="mt-6 flex items-center gap-4 text-xs font-bold tracking-[0.25em] text-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> 10 DEC 2026</span>
              <span className="h-4 w-px bg-foreground/40" />
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> BENGALURU</span>
            </div>
            <h1 className="summit-heading mt-6 text-primary">
              Bharat’s growth story<br className="hidden md:block" /> is being written in <span className="text-brand-green">Bengaluru.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
              Two Forces, One Bharat : Bridging generations of enterprise to build the businesses of tomorrow.
            </p>
            <p className="mt-3 font-semibold text-primary">10<sup>th</sup> December 2026 | Bengaluru</p>
            <div className="mt-8"><CTAs /></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[140px_1.2fr_1.5fr]">
          <p className="eyebrow text-foreground md:border-r md:border-primary/50">About<br />the Summit</p>
          <h2 className="text-3xl leading-tight md:text-[38px]">A platform for the leaders shaping what's next.</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>As established organisations reinvent themselves and emerging ventures move towards sustainable scale, the opportunities for collaboration are expanding.</p>
            <p>The ET Edge Bharat Growth Summit – South Edition brings together founders, business leaders, investors, policymakers and ecosystem enablers to explore how experience and innovation can come together to shape the next phase of Indian enterprise.</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHead eyebrow="Why this matters" title="South India is a key engine of the nation's growth." desc="From innovation and manufacturing to infrastructure and consumer markets, South India is powering a new phase of India's economic journey." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <article key={w.t} className="why-card relative overflow-hidden rounded-lg bg-card shadow-card">
                <img src={w.img} alt="" loading="lazy" width={400} height={400} className="why-card-art" />
                <div className="relative z-10 p-6">
                  <w.icon className="h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-sans text-lg font-bold leading-snug text-foreground">{w.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10"><CTAs /></div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The Growth Engines</p>
              <h2 className="mt-3 text-3xl md:text-[38px]">Sectors in focus.</h2>
            </div>
            <div className="flex items-center gap-6">
              <p className="max-w-xs text-sm text-muted-foreground">Conversations, insights and collaborations across the industries shaping India's next decade.</p>
              <div className="flex gap-2">
                <button aria-label="Previous" onClick={() => scroll(-1)} className="grid h-10 w-10 place-items-center rounded-full border border-foreground/30 hover:bg-card"><ArrowLeft className="h-4 w-4" /></button>
                <button aria-label="Next" onClick={() => scroll(1)} className="grid h-10 w-10 place-items-center rounded-full border border-foreground/30 hover:bg-card"><ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
          <div ref={slider} className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">
            {sectors.map((s) => (
              <article key={s.t} className="relative w-56 shrink-0 snap-start overflow-hidden rounded-lg bg-card shadow-card">
                <div className="p-5">
                  <s.icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-3 font-sans text-base font-bold text-foreground">{s.t}</h3>
                </div>
                <img src={s.img} alt={s.t} loading="lazy" className="h-44 w-full object-cover" />
                <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-card shadow-card"><ArrowRight className="h-4 w-4" /></span>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-3xl md:text-4xl">Topics of Discussion at the Summit</h3>
            <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {topics.map(([t, d], i) => (
                <div key={t} className="flex items-start gap-4 border-t border-border pt-5">
                  <img src={topicImages[i]} alt="" loading="lazy" width={400} height={500} className="topic-art" />
                  <div>
                    <span className="font-display text-2xl text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground"><strong className="block font-sans text-base text-foreground">{t}</strong>{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10"><CTAs /></div>
        </div>
      </section>

      {/* ATTEND */}
      <section className="reference-band relative bg-secondary">
        <img src={attendeeBackground.url} alt="" loading="lazy" width={1920} height={1080} className="reference-band-art" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <SectionHead eyebrow="Who should attend" title="A platform for every builder of Bharat's next chapter." desc="Join a distinguished community of leaders, innovators, investors and policymakers driving India's next phase of growth from the South and beyond." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {attend.map((a, i) => (
              <div key={a.t} className="flex min-h-32 items-center justify-between gap-3 overflow-hidden rounded-lg border border-border/50 bg-card pl-6 pt-4 shadow-card">
                <div>
                  <p className="font-display text-xl text-primary">{String(i + 1).padStart(2, "0")}</p>
                  <span className="my-2 block h-px w-6 bg-primary" />
                  <p className="font-display text-lg leading-snug text-foreground">{a.t}</p>
                </div>
                <div className={`attendee-art-frame attendee-art-${i % 2 === 0 ? "warm" : "cool"}`}>
                  <img src={attendeeImages[i]} alt="" loading="lazy" width={400} height={400} className="attendee-art" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10"><CTAs /></div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="awards-band reference-band relative bg-background">
        <img src={trophy} alt="Bharat Growth Awards trophy" loading="lazy" width={1920} height={1080} className="reference-band-art" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-[560px] border-l-2 border-primary pl-6">
            <p className="eyebrow">Bharat Growth Awards</p>
            <h2 className="mt-4 text-5xl leading-[1.05] md:text-[44px]">Recognising the businesses and leaders growing Bharat.</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">The Bharat Growth Awards celebrate bold ideas, transformative businesses and exceptional leaders who are driving India's next phase of growth, with a special focus on startups, unicorns and high-impact enterprises from across the country.</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">The Bharat Growth Awards recognise organisations and individuals demonstrating business growth, innovation, market relevance and the ability to create lasting impact.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#nominate" className={`${btnPrimary} tracking-widest`}>NOMINATE NOW <ArrowRight className="h-4 w-4" /></a>
              <Dialog>
                <DialogTrigger className={btnOutline}>Evaluation Approach &amp; Selection</DialogTrigger>
                <DialogContent className="bg-card">
                  <DialogHeader><DialogTitle className="font-display text-2xl">Evaluation Approach &amp; Selection</DialogTitle></DialogHeader>
                  <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                    <h4 className="font-bold text-foreground">Evaluation Approach</h4>
                    <p>Organisations are assessed on the strength of their performance across these parameters, taking into account their business stage, sector, operating model and growth trajectory.</p>
                    <p>The evaluation considers relevant business information and available supporting evidence to identify organisations demonstrating growth, innovation, market impact and long-term potential.</p>
                    <h4 className="font-bold text-foreground">Selection Process</h4>
                    <p>The selection process is conducted internally by the ET Edge editorial team, based on an assessment of the defined parameters and relevant business information.</p>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger className={btnOutline}>Selection Criteria</DialogTrigger>
                <DialogContent className="bg-card">
                  <DialogHeader><DialogTitle className="font-display text-2xl">Selection Criteria</DialogTitle></DialogHeader>
                  <p className="text-sm text-muted-foreground">The selection criteria table will be published here shortly.</p>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="reference-band relative bg-secondary">
        <img src={categoriesBackground.url} alt="" loading="lazy" width={1920} height={1080} className="reference-band-art" />
        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <p className="eyebrow">— Award Categories</p>
            <h2 className="mt-3 text-3xl md:text-[38px]">Twenty-four ways to be recognised.</h2>
            <p className="mt-3 font-sans text-lg font-bold">24 awards. One platform.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {awards.map((g, gi) => (
              <article key={g.c} className="overflow-hidden rounded-lg bg-card shadow-card">
                <div className={`h-1.5 ${g.tone}`} />
                <div className="p-6">
                  <p className="text-xs font-bold text-primary">{String(gi + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-2xl leading-tight">{g.c}</h3>
                  <ul className="mt-5 divide-y divide-border">
                    {g.items.map((it) => { n++; return (
                      <li key={it} className="flex gap-3 py-2.5 text-sm">
                        <span className="w-6 shrink-0 text-xs font-bold text-primary">{String(n).padStart(2, "0")}</span>
                        <span className="text-foreground/80">{it}</span>
                      </li>
                    ); })}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10"><CTAs /></div>
        </div>
      </section>

      {/* ICONS */}
      <section className="icons-band reference-band relative bg-background">
        <img src={iconsBackground.url} alt="" loading="lazy" width={1920} height={1080} className="reference-band-art" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="eyebrow">Recognition</p>
          <h2 className="mt-3 text-3xl md:text-[38px]">Bharat Growth Icons</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Alongside the Bharat Growth Awards, the summit will host the <strong className="text-foreground">Bharat Growth Icon recognitions</strong>, acknowledging individuals contributing to India's evolving enterprise landscape through leadership, innovation, transformation and sustainable growth.
          </p>
          <div className="mt-8 flex justify-center"><CTAs /></div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-muted">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-6 py-10">
          <div className="mr-4">
            <p className="eyebrow">Partners</p>
            <h2 className="text-3xl">Our partners</h2>
          </div>
          {partners.map((p) => (
            <div key={p} className="flex h-20 w-36 flex-col items-center justify-center rounded-lg bg-card shadow-card">
              <span className="text-[10px] text-muted-foreground">{p}</span>
              <span className="mt-1 tracking-widest text-muted-foreground/70">LOGO</span>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="invite" className="closing-band reference-band relative overflow-hidden bg-background">
        <img src={closingBackground.url} alt="" loading="lazy" width={1920} height={540} className="reference-band-art" />
        <div id="partner" className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl leading-tight text-primary md:text-[38px]">Be part of the conversations shaping what's next.</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">Join the ET Edge Bharat Growth Summit – South Edition as founders, established enterprises, investors and ecosystem leaders explore the opportunities and challenges shaping the next phase of Indian business.</p>
            <p className="mt-4 font-semibold text-foreground">10 December 2026 | Bengaluru</p>
            <div className="mt-8"><CTAs /></div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground py-6 text-center text-xs text-primary-foreground/70">
        © 2026 ET Edge · Bharat Growth Summit – South Edition
      </footer>
    </main>
  );
}
