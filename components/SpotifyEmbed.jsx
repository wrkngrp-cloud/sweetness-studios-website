/*
 * Spotify inline player. Server component: it's just an iframe, so it
 * renders in the static export and loads Spotify's player in the browser.
 */
export default function SpotifyEmbed({ id, kind = "track", height = 352, title = "Spotify player" }) {
  return (
    <div className="spotify-embed">
      <iframe
        src={`https://open.spotify.com/embed/${kind}/${id}?utm_source=generator`}
        width="100%"
        height={height}
        title={title}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
