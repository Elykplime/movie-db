import { useEffect, useState } from "react"
import { Moviecard } from "../../components";
import empty from "../../assets/images/empty.png";
import { Title } from "../../components";
import "./Favourites.css";


const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    console.log(storedFavourites);

    setFavourites(storedFavourites);
  }, []);


  return (
    <div className="main_main">
      {favourites.length > 0 && <Title title="My Favourites" />}
      <div className="main_cont">
        {favourites.length > 0 ? (
          favourites.map((movie, index) => (
            <div className="favour_movies" key={index}>
              <div className="single">
                <Moviecard movie={movie} />
              </div>
            </div>
          ))
        ) : (
          <div className="empty">
            <h2>No Favourites Yet!</h2>
            <img src={empty} alt="Empty" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourites
