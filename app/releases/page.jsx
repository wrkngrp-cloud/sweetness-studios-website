import Link from "next/link";
import WaveDivider from "../../components/WaveDivider";
import Reveal from "../../components/Reveal";
import Intro from "../../components/Intro";
import Signal from "../../components/Signal";
import SpotifyEmbed from "../../components/SpotifyEmbed";

export const metadata = {
  title: "Releases · Sweetness Studios",
  description:
    "Sweetness Releases. Tell Me, the first single from the Sweetness EP, featuring Dwin, The Stoic and Ṣẹwà. Where the studio starts putting out its own.",
};

const ARTISTS = [
  {
    glyph: "A",
    name: "Dwin, The Stoic",
    bio: "Dwin, The Stoic (Edwin Madu) is a Lagos singer, songwriter and poet, and the founder of St. Claire Records. One half of the indie duo Ignis Brothers, whose 2020 debut The Cost of Our Lives was named among the best Nigerian albums of that year, he has since put out two solo albums, Heavy Heart and Master of Ballads, a fifteen-track record on love, loss and grief. He has opened for Fireboy DML in Lagos, played Felabration and Aké Festival, and written for Adekunle Gold and Ibejii. Handed the man's side of the story, he wrote his verse exactly where the average guy sits right before he finally speaks. That honesty is what makes the record believable.",
  },
  {
    glyph: "B",
    name: "Ṣẹwà",
    bio: "Ṣẹwà is a Nigerian-born, Toronto-based singer, songwriter, multi-instrumentalist and producer whose sound pulls from Afrobeat, Fuji, jazz, R&B, soul and blues. One listener called her voice the after-smell of rain. She sold out her first Nigerian concert in 2021 before relocating to Toronto, where she has opened for Asa, Johnny Drille and Kiss Daniel, heard most clearly on her breakout Lagos Lovin'. Answering Dwin's confession with one of her own, she wrote in English, Pidgin and Yoruba at once, open about her fears and about what she needs before she can say yes.",
  },
];

export default function Releases() {
  return (
    <main>
      <section className="section bg-glow" style={{ paddingTop: "clamp(8.5rem, 20vh, 13rem)" }}>
        <div className="container">
          <Intro delay={0.1}>
            <p className="kicker mb-2">Releases</p>
          </Intro>
          <Intro delay={0.25} blur={8}>
            <h1 className="display-2" style={{ maxWidth: "20ch" }}>
              Sweetness Releases. Where the studio starts putting out{" "}
              <em>its own.</em>
            </h1>
          </Intro>
          <Intro delay={0.6}>
            <p className="body-lg dim mt-2">
              It starts with a single. <em>Tell Me</em> is out now.
            </p>
          </Intro>
        </div>
      </section>

      <WaveDivider />

      {/* Featured single: Tell Me */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <p className="kicker mb-2">Out now · First single</p>
            <h2 className="display-2 mb-1">Tell Me</h2>
            <p className="dim mb-3" style={{ fontSize: "1.02rem" }}>
              Dwin, The Stoic &middot; Ṣẹwà. The first single from the Sweetness
              EP, produced by Sweetness.
            </p>
          </Reveal>

          <Reveal>
            <div className="tellme-player">
              <SpotifyEmbed id="4kYo4gwBmu2MJVrUBeYkbO" title="Tell Me on Spotify" />
              <p className="dim mt-2" style={{ fontSize: "0.82rem" }}>
                <a
                  href="https://open.spotify.com/track/4kYo4gwBmu2MJVrUBeYkbO"
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Open in Spotify ↗
                </a>
              </p>
            </div>
          </Reveal>

          <div className="tellme-story stack-lg">
              <Reveal>
                <p className="body-lg">
                  Two people can know exactly how they feel and still never say
                  it. You text every day. You are already choosing each other in
                  a hundred small ways. But nobody names it, because naming it
                  means risking it, and you have both been burned before.
                </p>
              </Reveal>
              <Reveal>
                <p className="dim">
                  <em>Tell Me</em> breaks the silence. It is one question, asked
                  twice. Once by a man, once by a woman. Both sides of the same
                  fear, because in real life both people are scared, and both are
                  waiting for the other to go first.
                </p>
              </Reveal>
              <Reveal>
                <p className="dim">
                  The man goes first. He admits he waited too long, and that he
                  waited because she matters more than he was ready for. Then he
                  asks her to be his, and he asks with his history attached,
                  because his heart has been here before and cannot do it again.
                </p>
              </Reveal>
              <Reveal>
                <p className="dim">
                  The woman does not answer softly. She has heard the talk about
                  him and where he has been. She has been waiting for him to
                  speak, because she feels the same, and she says so plainly.
                  Then she asks him the same thing he just asked her, because
                  being wanted does not cancel out being afraid.
                </p>
              </Reveal>
              <Reveal>
                <p className="body-lg">
                  It is a song for the talking stage that has gone on too long.
                  For the person who has typed and deleted the same message four
                  nights running. Send it to the girl you have been talking to
                  for three weeks, and it says what you could not. Send it to
                  that boy, and shoot your shot.
                </p>
              </Reveal>
          </div>
        </div>
      </section>

      {/* The voices */}
      <section className="section section-lift">
        <div className="container">
          <Reveal>
            <p className="kicker mb-2">The voices</p>
          </Reveal>
          {ARTISTS.map((a) => (
            <Reveal key={a.name}>
              <article className="work-block">
                <span className="glyph">{a.glyph}</span>
                <div>
                  <h3 className="display-3 mb-1">{a.name}</h3>
                  <p className="dim measure">{a.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The signal: the studio's own catalogue, quietly building */}
      <section className="signal-band" aria-hidden>
        <Signal lines={30} points={130} amp={0.62} speed={0.5} pinkLine={7} camY={1.4} camZ={6.5} />
      </section>

      {/* Why the studio releases its own + what's next */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid-2" style={{ paddingTop: "clamp(3.5rem, 8vh, 6rem)" }}>
          <div>
            <Reveal>
              <p className="kicker mb-1">Why this exists</p>
              <h2 className="display-3" style={{ maxWidth: "16ch" }}>
                The ear that shaped the records has its own thing to say.
              </h2>
            </Reveal>
          </div>
          <div className="stack-lg">
            <Reveal>
              <p className="body-lg">
                For years, this studio made other people&rsquo;s records. Now
                it&rsquo;s building a house of its own, and calling the voices
                home. A producer&rsquo;s ear is its own kind of artist
                statement, and <em>Tell Me</em> is the first time it speaks in
                full.
              </p>
            </Reveal>
            <Reveal>
              <p className="dim">
                The single is the first taste of the Sweetness EP, a short run
                of records that keep returning to the three things every
                Sweetness record returns to. Life. Love. God. A rotating cast of
                trusted voices, produced under Sweetness. When the rest lands,
                it lands here first.
              </p>
            </Reveal>
            <Reveal>
              <p className="body-lg">
                If this reads like a room you&rsquo;d want your music to live in,
                the door is open.
              </p>
              <Link href="/contact/" className="btn mt-2">
                Send the music
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
