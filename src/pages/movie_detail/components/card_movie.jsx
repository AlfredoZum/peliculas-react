import React from 'react';
import moment from 'moment';
import './../index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faHeart, faBookmark, faStar, faPlay } from "@fortawesome/free-solid-svg-icons";

const CardMovie = ( props ) => {

  const { result, crew } = props;

  return (
    <>
        <div className="bg-no-repeat bg-cover" style={ { backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${result.backdrop_path})` } } >
          <div className="bg-header flex justify-center items-center flex-wrap py-8 px-10 text-white">
            <Poster posterPath={ result.poster_path } />
            <InfoCard result={result} crew={crew} />
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

const InfoCard = ( { result, crew } ) => {

  const { genres } = result;
  const listGenres = [];

  let SGenres = ''

  for ( const genre in genres) {
    SGenres += `${genres[genre]['name']}, `;
  }

  return (
    <div className="poster w-3/4 block pl-10 flex flex-col" >
      <div className="flex flex-row items-center" >
        <p className="text-3xl font-bold mr-2" >{ result.title }</p>
        <p className="text-4xl font-hairline" >({ moment( result.release_date ).format('YYYY') })</p>
      </div>
      <div className="flex flex-row font-hairline" >
        <p className="mr-1" >{ moment( result.release_date ).format('MM/DD/YYYY') }</p>
        <p className="uppercase mr-1" >({ result.original_language }) </p>
        <p className="mr-1" >{ SGenres.substring(0, SGenres.length - 2) }</p><p> * </p>
      </div>
      <div className="flex flex-row font-hairline mt-6 items-center" >
        <CircleRaiting voteAverage={ result.vote_average } />
        <p className="font-semibold ml-2 text-sm" >User<br/>Score</p>
        {
          [faList, faHeart, faBookmark, faStar].map( (icon, index) => (
            <CircleOption icon={icon} key={index} />
         ))
        }
        <div className="flex items-center flex-row ml-6" >
          <FontAwesomeIcon icon={faPlay} className="mr-4" />
          <p>Play trailer</p>
        </div>
      </div>
      <div className="mt-4" >
        <p className="font-hairline mb-4" >{ result.tagline }</p>
        <p className="font-semibold text-lg">Overview</p>
        <p className="font-hairline mb-4" >{ result.overview }</p>
      </div>
      <Crew crew = { crew } />
    </div>
  );

}

const Crew = ( { crew } ) => (
  <div className="h-auto w-full flex flex-row justify-around" >
    {
      crew &&
      Array.apply(0, Array(3)).map( (movie, index) => (
        <div key={ index } >
          <p className="font-semibold" >{ crew[index].name }</p>
          <p className="font-hairline text-sm" >{ crew[index].job }</p>
        </div>
      ))
    }
  </div>
); 

//create component for show the raiting of movie
const CircleRaiting = ( { voteAverage } ) => (
  <div className="h-auto" >
    <div 
      className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-900 text-white" 
      style={ { padding: '0.15rem' } }
    >
      <div className="flex items-center justify-center rounded-full h-full w-full border-4 border-indigo-900" >
        <p className="font-bold" style={{ fontSize: '18px' }} >{ voteAverage ? voteAverage * 10 : ''}</p>
        <label style={{ fontSize: '12px' }} >%</label>
      </div>         
    </div>
  </div>
);

//circle option 
const CircleOption = ( { icon } ) => (
  <div 
    className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-900 text-white ml-4" 
    style={ { padding: '1.5rem' } }
  >
    <FontAwesomeIcon icon={icon} />
    
  </div>   
);

export default CardMovie;