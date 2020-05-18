import React, { Component } from 'react';
import { CardMovie, TopCast } from './components/index.jsx';
import { getMovieDetail, getMovieCredits } from '../../services/index.jsx';

export default class MovieDetailPage extends Component {

  constructor( props ){
    super();
    this.state = {
      result : {},
      isReady: false,
      hasError : false,
      error : null,
      credits: {},
    }
  };

  componentDidMount = async () => {
    try{
      const movieId = this.props.match.params.movieId;
      
      this.getMovieDetail( movieId );
      this.getMovieCredits( movieId );

    }catch( err ){
        this.setState({
            hasError : true,
            error : `No se encontro identificador de la pelicula: ${err}`
        });
    }

  };

  getMovieDetail = async movieId => {

    try{

      if( !movieId ){
        this.setState({
            hasError : true,
            error : 'No se encontro identificador de la pelicula'
        });
      }else{
        const response = await getMovieDetail( movieId );
        if( !response.hasError ){
            this.setState({
                result : response,
                isReady: true
            });
        }else{
            throw Error( '' );
        }
      }

    }catch( err ){
      this.setState({
        hasError : true,
        error : `No se encontro identificador de la pelicula: ${err}`
      });
    }

  }

  getMovieCredits = async movieId => {
    try{

      const response = await getMovieCredits( movieId );
      console.log( response );
      console.log( "se ha agregado getMovieCredits" );
      if( !response.hasError ){
        this.setState({
          credits : response
        });
      }else{
          throw Error( response.error );
      }

    }catch( err ){
      this.setState({
        credits : {}
      });
    }
  }

  render(){

    const { result, credits } = this.state;

    return (
      <>
        <CardMovie result = { result } crew= { credits.crew } />
        <div className="w-3/4" >
          <TopCast casts = { credits.cast } />
        </div>
      </>
    )
  }

}