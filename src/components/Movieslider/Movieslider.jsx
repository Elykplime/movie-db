import "./Movieslider.css"
import { FaStar } from "react-icons/fa6";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 3 
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};
const Movieslider = ({ data }) => {
    return (
        <Carousel
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 1"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            arrows={false}
        >
            {
                data.map((movie, index) => (
                    <div className="carousel-item active" key={index}>
                        <div className="overlay">
                            <div className="movie_info">
                                <div className="movie_title">
                                    <h1>{movie.title}</h1>
                                    {/* <p>Movie Genre</p> */}
                                </div>
                                <div className="release_date">
                                    <p>Released: <span>{movie.release_date}</span></p>
                                </div>
                                <div className="rating">
                                    <FaStar className="star" />
                                    <p>{(movie.vote_average / 2).toFixed(1)} / 5 </p>
                                </div>
                                <div className="description">
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        </div>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="d-block w-100" alt="..." />
                    </div>
                ))

            }
        </Carousel>
    )
}

export default Movieslider
