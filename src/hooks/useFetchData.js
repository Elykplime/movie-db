import { useState, useEffect } from 'react';

const useFetchData = (fetchFunction, type, page) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction(type, page);        
        setData(result.results || result);
      } catch (error) {
        console.error(`Error fetching ${type}:`, error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [fetchFunction, type, page]);

  return { data, isLoading };
};

export default useFetchData;