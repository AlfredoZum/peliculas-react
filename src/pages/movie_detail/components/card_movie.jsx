import React from 'react';
import moment from 'moment';
import './../index.scss';

const CardMovie = ( props ) => {

  const { result } = props;

  return (
    <>
        <div className="bg-no-repeat bg-cover" style={ { backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${result.backdrop_path})` } } >
          <div className="bg-header flex justify-center items-center flex-wrap py-8 px-10 text-white">
            <Poster posterPath={ result.poster_path } />
            <InfoCard result={result}  />
            
          </div>
        </div>
    </>
  );
}

const Poster = ( { posterPath } ) => (
  <div className="poster w-1/4 block" >
    <img className="rounded-t-md" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${posterPath}`} alt=""/>
    <div className="bg-indigo-900 h-10 rounded-b-md" ></div>
  </div>
)

const InfoCard = ( { result } ) => {

  

  return (
    <div className="poster w-3/4 block pl-10 flex flex-col" >
      <div className="flex flex-row items-center" >
        <p className="text-3xl font-bold mr-2" >{ result.title }</p>
        <p className="text-4xl font-hairline" >({ moment( result.release_date ).format('YYYY') })</p>
      </div>
      <div className="flex flex-row font-hairline" >
        <p className="mr-1" >{ moment( result.release_date ).format('MM/DD/YYYY') }</p>
        <p className="uppercase" >({ result.original_language }) </p>
        {
          
        }
      </div>
    </div>
  );

}

export default CardMovie;

/*
  result.genres.map( (movie) => (
          <p>hola</p>
        ))
 */