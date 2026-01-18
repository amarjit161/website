import './PdfViewer.css';

interface PdfViewerProps {
  pdfUrl: string;
}

export default function PdfViewer({ pdfUrl }: PdfViewerProps) {
  const handleViewPdf = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleDownloadPdf = () => {
    // Convert Google Drive view link to download link
    const downloadUrl = pdfUrl.replace('/view', '/download');
    window.open(downloadUrl, '_blank');
  };

  return (
    <div className="pdf-viewer">
      <div className="pdf-actions">
        <button className="pdf-button view-button" onClick={handleViewPdf}>
          <span className="button-icon">📄</span>
          View Invitation
        </button>
        <button className="pdf-button download-button" onClick={handleDownloadPdf}>
          <span className="button-icon">⬇️</span>
          Download PDF
        </button>
      </div>
    </div>
  );
}
