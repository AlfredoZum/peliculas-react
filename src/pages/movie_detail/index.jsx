import React, { Component } from 'react';
import { CardMovie } from './components/index.jsx';
import { getMovieDetail } from '../../services/index.jsx';

export default class MovieDetailPage extends Component {

  constructor( props ){
    super();
    this.state = {
      result : {},
      isReady: false,
      hasError : false,
      error : null
    }
  };

  componentDidMount = async () => {
    try{
      const movieId = this.props.match.params.movieId;
      
    if( !movieId ){
        this.setState({
            hasError : true,
            error : 'No se encontro identificador de la pelicula'
        });
    }else{
        const response = await getMovieDetail( movieId );
        console.log( response );
        if( !response.hasError ){
            this.setState({
                result : response,
                isReady: true
            });
        }else{
            throw Error( '' );
        }
    }
    }catch( error ){
        this.setState({
            hasError : true,
            error : `No se encontro identificador de la pelicula: ${error}`
        });
    }
  };

  render(){

    const { result } = this.state;

    return (
      <>
        <CardMovie result = { result } />
      </>
    )
  }

}