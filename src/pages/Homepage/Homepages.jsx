import './Homepage.css';
import  { fetchMovies, fetchTrending } from '../../utils/api';
import Movieslider from '../../components/Movieslider/Movieslider';
import useFetchData from '../../hooks/useFetchData';
import MovieCarousel from '../../components/Moviecarousel/MovieCarousel';

const Homepage = () => {
  const { data: sliderData, isLoading: isSliderLoading } = useFetchData(fetchMovies, 'movie', 1);
  const { data: trendingShows, isLoading: isTrendingShowsLoading } = useFetchData(fetchTrending, 'tv', 1);
  const { data: trendingMovies, isLoading: isTrendingMoviesLoading } = useFetchData(fetchTrending, 'movie', 1);


  return (
    <div className="home_container">
      <div className="slider_container">
      <Movieslider data={sliderData} />
      </div>
      <MovieCarousel title="Trending TV Shows" movies={trendingShows} type='tv'/>
      <MovieCarousel title="Trending Movies" movies={trendingMovies} type='movie' />
    </div>
  );
};

export default Homepage;