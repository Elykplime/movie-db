import "./Moviecard.css";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useState, useEffect } from "react";
import empty from "../../assets/images/empty-img.png"



const Moviecard = ({ movie, type }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Load favourites from local storage on component mount
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  const handleFavouriteClick = () => {
    let updatedFavourites;
    if (favourites.some(fav => fav.id === movie.id)) {
      // Remove from favourites
      updatedFavourites = favourites.filter(fav => fav.id !== movie.id);
    } else {
      // Add to favourites
      updatedFavourites = [...favourites, movie];
    }
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  const isFavourite = favourites.some(fav => fav.id === movie.id);




  return (
    <div className='moviecard_container'>
      <a href={`/${movie.media_type}/${movie.id}`}>
        <div className="image_container">
          <img src={movie.backdrop_path ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` : empty} alt="Movie" />
          <div className="rating">
            {(movie.vote_average / 2).toFixed(1)} / 5
          </div>
        </div>
        </a>
        <div className="fav_genre">
          <div className="year_genre">
            <div className="year">
              {movie.media_type === "tv" ? movie.first_air_date : movie.release_date}
            </div>
          </div>
          <div className="fav">
            <div onClick={handleFavouriteClick} className='icon'>
              {isFavourite ? <MdFavorite /> : <MdFavoriteBorder />}
            </div>
          </div>
        </div>

        <div className="movie_title">
          {movie.media_type === "tv" ? movie.name : movie.title}
        </div>

    </div>

  );
};

export default Moviecard;
