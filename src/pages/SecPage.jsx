import { useParams } from 'react-router-dom';
import { useState } from "react";
import Nav from '../FirstPage/nav';
import '../secondpage.css';
import { moviesData } from './movie';

function Sec() {
  const { id } = useParams();
  const movie = moviesData.find((e) => e.id === id);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [stateAll, setStateAll] = useState("idle");
  const [stateIos, setStateIos] = useState("idle");

  const openModal = (platform) => {
    setSelectedPlatform(platform);
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
    setSelectedPlatform("");
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'modalOverlay') {
      closeModal();
    }
  };

  const handleAllClick = () => {
    if (stateAll !== "idle") return;
    
    setStateAll("loading");
    setTimeout(() => {
      setStateAll("done");
      openModal("android");

      setTimeout(() => setStateAll("idle"), 1200);
    }, 1200);
  };

  const handleIosClick = () => {
    if (stateIos !== "idle") return;
    
    setStateIos("loading");
    setTimeout(() => {
      setStateIos("done");
      openModal("ios");

      setTimeout(() => setStateIos("idle"), 1200);
    }, 1200);
  };

  const activeLinks = movie?.DownloadLink || movie?.downloadLink || [];
  const activeRenames = movie?.Rename || movie?.rename || [];

  return (
    <div>
      <Nav />

      <main className="detail-container">
        <div className="movie-main">
          <div className="poster-wrapper">
            <img src={movie?.posterUrl} className="main-poster" alt={movie?.id} />
          </div>

          <div className="movie-details-side">
            <h1 className="movie-title-large">{movie?.id}</h1>
            <div className="movie-meta">
              <span>{movie?.year}</span> • <span>{movie?.genre}</span> • <span>{movie?.language}</span> • <span>{movie?.rating}</span>
            </div>
            <p className="movie-full-desc">{movie?.fullDesc}</p>
          </div>
        </div>

        <div className="screenshots-section">
          <h2 className="section-title">Movie Screenshots (Print Quality)</h2>
          <div className="screenshots-flex">
            {movie?.screenshots && movie.screenshots.map((src, index) => (
              <div className="screenshot-card" key={index}>
                <img src={src} alt={`SS ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="download-section">
          <a 
            href="#/" 
            className={`load-btn load-btn--${stateAll}`} 
            onClick={(e) => { e.preventDefault(); handleAllClick(); }}
          >
            <span>⬇️</span> 
            {stateAll === "idle" && "Download For All (HD - 1080p)"}
            {stateAll === "loading" && "Loading..."}
            {stateAll === "done" && "✅ Done!"}
            {stateAll === "loading" && <span className="spinner" />}
          </a>
        </div>

        <div className="download-section">
          <a 
            href="#/" 
            className={`load-btn load-btn--${stateIos}`} 
            onClick={(e) => { e.preventDefault(); handleIosClick(); }}
          >
            <span>⬇️</span> 
            {stateIos === "idle" && "Download For Ios (HD - 1080p)"}
            {stateIos === "loading" && "Loading..."}
            {stateIos === "done" && "✅ Done!"}
            {stateIos === "loading" && <span className="spinner" />}
          </a>
        </div>
      </main>

      {isOpen && (
        <div id="modalOverlay" onClick={handleOverlayClick} className="modal-overlay">
          <div className="card">
            <div className="top-row">
              <button onClick={closeModal} className="icon-btn">
                &times;
              </button>
            </div>

            <div className="tag">
              <span className="dot"></span>
              CLICK ON DOWNLOAD BUTTON
            </div>

            {selectedPlatform === "android" && activeLinks.map((url, index) => (
              <div className="option-box option-box-hover" key={index}>
                <div style={{ flex: 1, paddingRight: '10px', overflow: 'hidden' }}>
                  <div className="option-value" style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '13px' }}>
                    {activeRenames[index] ? activeRenames[index] : `Episode ${index + 1}`}
                  </div>
                </div>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noreferrer" 
                  download={activeRenames[index] || ""}
                  className="round-btn"
                  style={{ textDecoration: 'none', flexShrink: 0 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              </div>
            ))}

            {selectedPlatform === "ios" && activeLinks.map((url, index) => (
              <div className="option-box option-box-hover" key={index}>
                <div style={{ flex: 1, paddingRight: '10px', overflow: 'hidden' }}>
                  <div className="option-label">Get The App</div>
                  <div className="option-value" style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', fontSize: '13px' }}>
                    {activeRenames[index] ? activeRenames[index] : `Episode ${index + 1}`}
                  </div>
                </div>
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noreferrer" 
                  download={activeRenames[index] || ""}
                  className="round-btn"
                  style={{ textDecoration: 'none', flexShrink: 0 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sec;
