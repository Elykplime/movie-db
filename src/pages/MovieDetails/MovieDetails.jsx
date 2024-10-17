import { FaStar, FaLink } from "react-icons/fa6";
import "./MovieDetails.css"
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from "../../utils/api";
import { useEffect, useState } from "react";
const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movie = await fetchMovieDetails("movie", id);
                setMovie(movie);
                console.log("Movie details:", movie);

            } catch (error) {
                console.error("Error fetching movie details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovie();
    }
        , [id]);





    return (
        // <div></div>
        <div className="details_container">
            <div className="carousel-item active">
                <div className="overlay">
                    <div className="movie_info">
                        <div className="movie_title">
                            <h1>{movie.title}</h1>
                            {/* <h1>Title</h1> */}
                            {/* <p>Movie Genre</p> */}
                        </div>
                        <div className="release_date">
                            <p>Released: <span>{movie.release_date}</span></p>
                            {/* <p>Released: <span>2024-12-03</span></p> */}
                        </div>
                        <div className="rating">
                            <FaStar className="star" />
                            <p>{(movie.vote_average / 2).toFixed(1)} / 5 </p>
                            {/* <p>4.2 / 5</p> */}
                        </div>
                        <div className="description">
                            <p>{movie.overview}</p>
                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo sed eos at commodi odio labore consequuntur omnis, quidem corrupti!</p> */}
                        </div>
                    </div>
                </div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
            </div>
            <div className="story">
                <div className="left_story">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
                </div>
                <div className="right_story">
                    <div className="story_line">
                        <h1>Story Line</h1>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="release">
                        <h1>Release Date:</h1>
                        <p>{movie.release_date}</p>
                    </div>
                    <div className="release">
                        <h1>Status:</h1>
                        <p>{movie.status}</p>
                    </div>
                    <div className="release">
                        <h1>Production Company:</h1>
                        {
                            movie.production_companies && movie.production_companies.map((company, index) => (
                                <p>{company.name}</p>
                            ))
                        }
                    </div>
                    <div className="genre">
                        <h1>Genre:</h1>
                        <div className="genres">
                            {
                                movie.genres && movie.genres.map((genre, index) => (
                                    <div className="all_genre" key={index}>
                                        <p>{genre.name}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="genre">
                        <h1>Language:</h1>
                        <div className="genres">
                            {
                                movie.spoken_languages && movie.spoken_languages.map((language, index) => (
                                    <div className="all_genre" key={index}>
                                        <p>{language.english_name}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="socials">
                        {/* <FaFacebook className="icon" />
                        <FaInstagram className="icon" /> */}
                        <a href={movie
                            .homepage}>
                            <FaLink className="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieDetails
