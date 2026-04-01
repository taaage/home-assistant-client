import { useNowPlaying } from "./useNowPlaying";

export default function NowPlaying() {
  const { data } = useNowPlaying();

  if (!data) {
    return (
      <div className="card now-playing">
        <h2>🎵 Now Playing</h2>
        <p className="now-playing-idle">Nothing playing</p>
      </div>
    );
  }

  return (
    <div className="card now-playing">
      <h2>🎵 Now Playing</h2>
      <div className="now-playing-track">
        <img className="now-playing-art" src={data.albumArt} alt={data.album} />
        <div className="now-playing-info">
          <span className="now-playing-name">{data.name}</span>
          <span className="now-playing-artist">{data.artist}</span>
        </div>
      </div>
    </div>
  );
}
