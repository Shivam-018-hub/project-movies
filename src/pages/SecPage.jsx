import { useParams } from 'react-router-dom';
import Nav from '../FirstPage/nav';
import '../secondpage.css'
import { moviesData } from './movie';

function Sec() {
    const { id } = useParams()
    const movie = moviesData.find((e) => e.id === id)
    return (
        <div>
            <Nav />

            <main className="detail-container">

                <div className="movie-main">
                    <div className="poster-wrapper">
                        <img src={movie.posterUrl} className="main-poster" />
                    </div>

                    <div className="movie-details-side">
                        <h1 className="movie-title-large">{movie.id}</h1>
                        <div className="movie-meta">
                            <span>{movie.year}</span> • <span>{movie.genre}</span> • <span>{movie.language}</span> • <span>{movie.rating}</span>
                        </div>
                        <p className="movie-full-desc">
                           {movie.fullDesc}
                        </p>
                    </div>
                </div>

                <div className="screenshots-section">
                    <h2 className="section-title">Movie Screenshots (Print Quality)</h2>
                    <div className="screenshots-flex">
                        <div className="screenshot-card">
                            <img src={movie.screenshots[0]} alt="SS 1" /></div>
                        <div className="screenshot-card">
                            <img src={movie.screenshots[1]} alt="SS 2" /></div>
                        <div className="screenshot-card">
                            <img src={movie.screenshots[2]} alt="SS 3" /></div>
                        <div className="screenshot-card">
                            <img src={movie.screenshots[3]} alt="SS 4" /></div>
    
                    </div>
                </div>

                <div className="download-section">
                    <a href="img/s.mp4" className="download-btn" target="blank" download="Solo_Leveling[Hindi]_1080P_S01_E01.mp4">
                        <span>⬇️</span> Download Movie (HD - 1080p)
                    </a>
                </div>

            </main>
        </div>
    )
}
export default Sec;