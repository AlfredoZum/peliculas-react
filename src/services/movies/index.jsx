import { API_URL, moviesEndpoint, mUpCominggEndpoint, tvEndpoint, API_KEY } from '../../consts/index.jsx';
import axios from 'axios';

/**
 * Get list of popular movies
 * @param { String } type type o movies to get 
 * @param { int } page 
 */
export const getPopular = async ( type, page ) => {

    try{

        let url = `${API_URL}`;
        switch (type) {
            case 'On TV':
                url = `${url}${tvEndpoint}${API_KEY}&language=en-US&with_genres=35&with_cast=23659&sort_by=revenue.desc`;
              break;
            case 'For Rent':
                url = `${url}${moviesEndpoint}${API_KEY}&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;     
              break;
            default:
                url = `${url}${moviesEndpoint}${API_KEY}&language=en-US&sort_by=popularity.desc`;
                console.log( url );
                
            break;
        }

        console.log( url, `url` );

        const response = await axios.get( url );
        if( response.data ){
            return response.data;
        }
    }catch( error ){
        return {
            hasError : true,
            error
        }     
    }

}

/**
 * Get list of movies free
 * @param { String } type type o movies to get 
 * @param { int } page 
 */
export const getFree = async ( type, page ) => {

    try{

        let url = ``;
   
        switch (type) {
            case 'TV':
                url = `${API_URL}/movie/top_rated?${API_KEY}&language=en-US&page=1`; 
                //url = `${API_URL}/tv/airing_today?${API_KEY}&language=en-US&page=1`;    
            //url = `${API_URL}/tv/latest?${API_KEY}&language=en-US&page=1`;
              break;
            default:
                url = `${API_URL}/movie/upcoming?${API_KEY}&language=en-US&page=1`;
                //url = `${url}${moviesEndpoint}${API_KEY}&language=en-US&sort_by=popularity.desc`;
                //url = `${API_URL}/movie/latest?${API_KEY}&language=en-US&page=1`;
            break;
        }

        const response = await axios.get( url );
        if( response.data ){
            return response.data;
        }
    }catch( error ){
        return {
            hasError : true,
            error
        }     
    }

}

/**
 * Get list of latest trailers
 * @param { String } type type o movies to get 
 * @param { int } page 
 */
export const getLatestTrailers = async ( type, page ) => {

    try{

        let url = `${API_URL}${mUpCominggEndpoint}${API_KEY}`;
        console.log( url );
        switch (type) {
            case 'On Tv':
                url = `${API_URL}/tv/airing_today?${API_KEY}&language=en-US&page=1`;
              break;
            case 'For Rent':
                url = `${API_URL}/movie/top_rated?${API_KEY}&language=en-US&page=1`;   
              break;
            default:
                url = `${API_URL}/movie/upcoming?${API_KEY}&language=en-US&page=1`;
            break;
        }

        const response = await axios.get( url );
        if( response.data ){
            return response.data;
        }
    }catch( error ){
        return {
            hasError : true,
            error
        }     
    }

}

export const getMovieDetail = async ( movieId ) => {

    try{

        const url = `${API_URL}/movie/${movieId}?${API_KEY}&language=en-US&page=1`;

        console.log( url );

        const response = await axios.get( url );
        if( response.data ){
            return response.data;
        }
    }catch( error ){
        return {
            hasError : true,
            error
        }     
    }

}

export const getMovieCredits = async ( movieId ) => {

    try{

        const url = `${API_URL}/movie/${movieId}/credits?${API_KEY}&language=en-US&page=1`;

        const response = await axios.get( url );
        if( response.data ){
            return response.data;
        }
    }catch( error ){
        return {
            hasError : true,
            error
        }     
    }

}
