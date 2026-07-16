import { Link } from "react-router";


function Card({ elem }) {

    return (


        <a href="SecPage.jsx" className="movie-card">
            <img src={elem.posterUrl}
                alt={elem.id} className="movie-poster" />
            <div className="movie-info">
                <h3 className="movie-title">{elem.id}</h3>
                <p className="movie-desc">{elem.shortDesc}</p>
            </div>
        </a>
    )
}
export default Card;