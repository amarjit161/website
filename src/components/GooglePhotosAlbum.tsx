import './GooglePhotosAlbum.css';

interface GooglePhotosAlbumProps {
  albumUrl: string;
  embedUrl?: string;
}

export default function GooglePhotosAlbum({ albumUrl, embedUrl }: GooglePhotosAlbumProps) {
  // If embedUrl is provided, use iframe embed
  // Otherwise, provide a link to open the album
  
  if (embedUrl) {
    return (
      <div className="photos-album">
        <div className="album-container">
          <iframe
            src={embedUrl}
            className="album-iframe"
            allowFullScreen
            title="Wedding Photo Gallery"
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div className="photos-album">
      <div className="album-link-container">
        <h2 className="album-title">Wedding Photo Gallery</h2>
        <p className="album-description">
          View and enjoy our wedding photos! New photos are added regularly.
        </p>
        <a
          href={albumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="album-button"
        >
          <span className="album-icon">📸</span>
          Open Photo Album
        </a>
        <p className="album-note">
          This will open in Google Photos. The album updates automatically when new photos are added.
        </p>
      </div>
    </div>
  );
}
