// src/utils/api.js
import axios from 'axios';

const API_KEY = 'e91b1affc19ec2925180505ee77a8220';
const API_HOST = 'https://api.themoviedb.org/3';
const API_LANG = 'en-US';



const buildParams = (params) => {
    return {
        api_key: API_KEY,
        language: API_LANG,
        ...params
    };
};

export const fetchMovies = async (mediaType, page) => {
    const params = buildParams({ page: page.toString() });

    const options = {
        method: 'GET',
        url: `${API_HOST}/${mediaType}/now_playing`,
        params
    };

    try {
        const response = await axios.request(options);        
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const fetchTrending = async (mediaType, page) => {
    const params = buildParams({ page: page.toString() });

    const options = {
        method: 'GET',
        url: `${API_HOST}/trending/${mediaType}/week`,
        params
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


export const fetchMovieDetails = async (mediaType, id) => {
    const params = buildParams();

    const options = {
        method: 'GET',
        url: `${API_HOST}/${mediaType}/${id}`,
        params
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};


export const search = async (query, page) => {
    const params = buildParams({ query, page: page.toString() });

    const options = {
        method: 'GET',
        url: `${API_HOST}/search/multi`,
        params
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// export default fetchMovies;
