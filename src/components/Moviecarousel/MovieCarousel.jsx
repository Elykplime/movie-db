import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Moviecard, Title } from '../../components';
import Moviecard from '../../components/Moviecard/Moviecard';
import Title from '../../components/Title/Title';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const MovieCarousel = ({ title, movies }) => (
  <div className="popular_container">
    <Title title={title} />
    <div>
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={500}
        containerClass="carousel-container"
      >
        {movies.map((movie) => (
          <div className="movie__" key={movie.id}>
            <Moviecard className="move" movie={movie} />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default MovieCarousel;