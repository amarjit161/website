import './VideoEmbed.css';

interface VideoEmbedProps {
  videoUrl: string;
}

export default function VideoEmbed({ videoUrl }: VideoEmbedProps) {
  return (
    <div className="video-embed">
      <div className="video-container">
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Wedding Invitation Video"
          className="video-iframe"
        ></iframe>
      </div>
    </div>
  );
}
