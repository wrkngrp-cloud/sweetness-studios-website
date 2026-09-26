import Link from "next/link";
import WaveDivider from "../../../components/WaveDivider";
import Reveal from "../../../components/Reveal";
import Intro from "../../../components/Intro";
import MediaFrame from "../../../components/MediaFrame";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Kuda · The Sound of More Life · Sweetness Studios",
  description:
    "The sonic identity for Kuda's More Life rebrand: a three-second Yoruba welcome, a kalimba played close to its real tone, and naira counted by hand. Plus the sound design for the launch film.",
};

const PRINCIPLES = [
  {
    name: "Pulse",
    role: "Movement lives in the cadence, not a climb.",
    copy: "The mark rises and falls the way people actually greet each other, not in a steep ascent. E Kaabo opens under the rising KUDA wordmark: the welcome into a new reality, spoken to the Nigerian who wants to know their money on a different level. E shey answers under the descriptor line. You say thank you when someone hands you the life you were reaching for, and a little more than you expected.",
  },
  {
    name: "Real",
    role: "The texture is barely touched.",
    copy: "The kalimba sits close to its real tone, percussive and honest: the Ugede or Molo of Igbo tradition, a cousin to the Yoruba Agidigbo. Under the E Kaabo lift and the rising wordmark runs a counted-money sound, so the welcome carries a literal message. Your money is at home here, and so are you.",
  },
  {
    name: "Strong Spirit",
    role: "It lands on the sound of money showing up.",
    copy: "As the second phrase settles, a real cash-register recording closes it out, clipped short so you catch the suggestion of the kaching without the full ring. Not a slot machine paying out. The steady confidence of getting more from your money, and more for your life. A soft ethereal rise sits under the whole thing and carries that lifting feeling to the end.",
  },
];

function MiniWave({ seed = 1 }) {
  // A short, deterministic waveform tag echoing the studio's signal motif.
  const bars = Array.from({ length: 34 }, (_, i) => {
    const v =
      Math.abs(Math.sin(i * 0.7 + seed * 2.2)) * 0.6 +
      Math.abs(Math.sin(i * 1.9 + seed)) * 0.4;
    return 0.2 + v * 0.8;
  });
  return (
    <svg className="mini-wave" viewBox={`0 0 ${bars.length * 5} 28`} preserveAspectRatio="none" aria-hidden>
      {bars.map((h, i) => (
        <rect key={i} x={i * 5} y={14 - h * 12} width={2.4} height={h * 24} rx={1.2} />
      ))}
    </svg>
  );
}

export default function KudaCaseStudy() {
  return (
    <main>
      {/* Hero */}
      <section className="section bg-glow" style={{ paddingTop: "clamp(8.5rem, 20vh, 13rem)" }}>
        <div className="container">
          <Intro delay={0.1}>
            <p className="kicker mb-2">
              <Link href="/work/" className="cs-back">Work</Link> · Case study
            </p>
          </Intro>
          <Intro delay={0.25} blur={8}>
            <h1 className="display-2" style={{ maxWidth: "18ch" }}>
              Kuda. The sound of <em>More Life.</em>
            </h1>
          </Intro>
          <Intro delay={0.55}>
            <p className="body-lg dim measure mt-2">
              Nigeria&rsquo;s biggest digital bank rebuilt itself around one
              promise: more life. The studio gave that promise a voice you can
              hear in three seconds. A welcome, answered. Built from a Yoruba
              greeting, a thumb piano played close to its real tone, and the
              sound of naira counted by hand.
            </p>
          </Intro>
          <Intro delay={0.8}>
            <dl className="cs-meta mt-3">
              <div><dt>Client</dt><dd>Kuda</dd></div>
              <div><dt>Work</dt><dd>Sonic identity, brand mnemonic, launch sound design</dd></div>
              <div><dt>Year</dt><dd>2026</dd></div>
            </dl>
          </Intro>
        </div>
      </section>

      {/* The mark: the sonic logo, front and centre */}
      <section className="section" style={{ paddingTop: "clamp(1rem, 3vw, 2rem)" }}>
        <div className="container">
          <Reveal>
            <p className="kicker mb-2" style={{ textAlign: "center" }}>The mark</p>
            <div className="cs-media-wrap">
              <MediaFrame
                src={`${basePath}/kuda/sonic-logo.mp4`}
                poster={`${basePath}/kuda/sonic-poster.jpg`}
                label="Play the sound"
                hint="7 seconds · sound on"
                accent
                fit="contain"
              />
            </div>
            <p className="dim mt-2" style={{ textAlign: "center", fontSize: "0.92rem" }}>
              The brand mnemonic. Welcome, then thank you, in the time it takes
              to open the app.
            </p>
          </Reveal>
        </div>
      </section>

      <WaveDivider />

      {/* The brief */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2">
          <div>
            <Reveal>
              <p className="kicker mb-1">The brief</p>
              <h2 className="display-3" style={{ maxWidth: "16ch" }}>
                A bank that wanted to mean more.
              </h2>
            </Reveal>
          </div>
          <div className="stack-lg">
            <Reveal>
              <p className="body-lg">
                In August 2026, Kuda unveiled More Life, its biggest rebrand
                since launch. The standalone K became a full wordmark. New type,
                a deeper purple, and photography that traded cards and phone
                screens for everyday Nigerian life: markets, danfos, a plate of
                food, a face that just got good news. The positioning moved with
                it, from the bank of the free to the digital bank built for
                Nigerians who want more from life.
              </p>
            </Reveal>
            <Reveal>
              <p className="dim">
                The sound had one brief. Feel unmistakably Nigerian to anyone
                who hears it, anywhere. Stay short, polished and functional
                enough to live inside a banking app, right next to a successful
                transfer. And carry the whole feeling of More Life in the time
                it takes to open the app. Nigerian music is warm, so the palette
                leaned on instruments with natural resonance: kalimba, agogo,
                shekere, muted guitar, wooden percussion. Even when a sound was
                synthesised, it had to keep its harmonic warmth. Never cold,
                never digitally flat.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The idea: the one Kuda-purple band */}
      <section className="kuda-band" aria-label="The idea">
        <div className="container">
          <Reveal>
            <p className="kuda-band-kicker">The idea</p>
            <p className="kuda-band-lead">
              The whole mark is an arrival, written as a short conversation. Two
              phrases, shaped after Yoruba, the language of Lagos, where Kuda is
              at home.
            </p>
          </Reveal>
          <div className="kuda-exchange">
            <Reveal>
              <div className="kuda-line">
                <span className="kuda-phrase">E Kaabo</span>
                <span className="kuda-gloss">Welcome. Kuda speaks first, as the host.</span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="kuda-line kuda-line-answer">
                <span className="kuda-phrase">E shey</span>
                <span className="kuda-gloss">
                  Thank you. The listener answers, in the relieved, grateful
                  tone of someone just let into something better.
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="kuda-band-foot">That back and forth is the entire logo.</p>
          </Reveal>
        </div>
      </section>

      {/* Three principles */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="kicker mb-1">How it was built</p>
            <h2 className="display-3 mb-3" style={{ maxWidth: "20ch" }}>
              Three principles of the new Kuda, made audible.
            </h2>
          </Reveal>

          <div className="principle-list">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <article className="principle">
                  <div className="principle-head">
                    <h3 className="principle-name">{p.name}</h3>
                    <MiniWave seed={i + 1} />
                  </div>
                  <p className="principle-role">{p.role}</p>
                  <p className="dim measure">{p.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider flip />

      {/* The tape / process */}
      <section className="section section-lift" style={{ paddingTop: 0 }}>
        <div className="container grid-2" style={{ paddingTop: "clamp(3.5rem, 8vh, 6rem)" }}>
          <div className="stack-lg">
            <Reveal>
              <p className="kicker mb-1">The tape</p>
              <h2 className="display-3" style={{ maxWidth: "14ch" }}>
                Some of it was recorded, not sampled.
              </h2>
            </Reveal>
            <Reveal>
              <p className="dim measure">
                For the money under the welcome, the studio recorded someone
                flicking through naira notes, counting by hand, the way you do
                when the amount matters. That raw sound is what sits beneath E
                Kaabo. It is the bank you can hear before you read a single word.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <MediaFrame
              src={null}
              poster={`${basePath}/kuda/nigerian-life.jpg`}
              label=""
              caption="The world the sound had to belong to. Everyday Nigerian life, from Kuda's More Life film."
            />
          </Reveal>
        </div>
      </section>

      {/* The launch film */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="kicker mb-1">The film</p>
            <h2 className="display-3 mb-2" style={{ maxWidth: "22ch" }}>
              Then the three-second mark grew into a world.
            </h2>
            <p className="dim measure mb-3">
              For the launch, the studio scored the whole rebrand film. Field
              recordings of Lagos and the wider Nigerian space carry the middle
              of it, around the eleven-second mark. Foley and sound design were
              cut to the motion graphics frame by frame, and the mnemonic was
              opened up into a full soundtrack, returning as a melodic line so
              the mark could become a place you walk into.
            </p>
          </Reveal>
          <Reveal>
            <MediaFrame
              src={`${basePath}/kuda/launch-film.mp4`}
              poster={`${basePath}/kuda/launch-poster.jpg`}
              label="Watch the launch film"
              hint="1:13 · sound on"
            />
          </Reveal>
        </div>
      </section>

      {/* Palette + credits */}
      <section className="section section-lift">
        <div className="container grid-2">
          <div>
            <Reveal>
              <p className="kicker mb-2">Kuda · More Life</p>
              <div className="swatches">
                <span className="swatch" style={{ background: "#3a1a8c" }}><small>Purple</small></span>
                <span className="swatch" style={{ background: "#b985f5" }}><small>Lilac</small></span>
                <span className="swatch" style={{ background: "#f3efe6", color: "#1a1020" }}><small>Cream</small></span>
              </div>
            </Reveal>
          </div>
          <div className="stack-lg">
            <Reveal>
              <p className="dim measure">
                Sonic identity, brand mnemonic and launch sound design by
                Sweetness Studios. The More Life rebrand, its wordmark, palette
                and film, belongs to Kuda and the brand team behind it. The
                studio&rsquo;s job was the part you hear.
              </p>
            </Reveal>
            <Reveal>
              <blockquote className="pull-quote" style={{ maxWidth: "26ch" }}>
                A brand has a voice whether it plans one or not. This one was on
                purpose.
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <hr className="hairline mb-3" />
            <div className="cs-close">
              <p className="body-lg measure">
                Sonic branding is a door this studio keeps open. If a brand
                needs a sound that means something, this is where it starts.
              </p>
              <div className="hero-actions mt-2">
                <Link href="/what-we-do/" className="btn">What we do</Link>
                <Link href="/contact/" className="text-link">Start something →</Link>
              </div>
              <p className="mt-3">
                <Link href="/work/" className="text-link">← All the work</Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
