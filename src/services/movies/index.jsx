import { API_URL, moviesEndpoint, API_KEY } from '../../consts/index.jsx';
import axios from 'axios';

export const getPopular = async ( type, page ) => {

    try{

        let url = `${API_URL}${moviesEndpoint}${API_KEY}`;
        switch (type) {
            case 'On TV':
                url = `${url}&language=en-US&with_genres=35&with_cast=23659&sort_by=revenue.desc`;
              break;
            case 'For Rent':
                url = `${url}&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`;     
              break;
            default:
                url = `${url}&language=en-US&sort_by=popularity.desc`;
                console.log( url );
                
            break;
          }

        console.log( url );
        console.log( "this is the url paps!!!!" );


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