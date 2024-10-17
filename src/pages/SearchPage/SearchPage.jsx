import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./SearchPage.css"
import { search } from '../../utils/api';
import { Moviecard } from '../../components';

const SearchPage = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    setQuery(query);
    fetchSearchResults(query);
  } , [location.search]);



  // A function to fetch search results

  const fetchSearchResults = async (query) => {
    try {
      const searchResults = await search(query, 1);
      setSearchResults(searchResults.results);
      console.log(searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  } 

  

  return (
    <div className='search_container'>
      <h1>Search Results for: <span>{query}</span></h1>
      {/* Render search results here */}
      <div className="search_results">
        {searchResults.map((movie) => (
          <div className="movie_card" key={movie.id}>
            <Moviecard  movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
