import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_IMG } from '../../../consts/index.jsx';
import moment from 'moment';
import ImgDefault from '../../../assets/default-movie.jpg';

const ListMovieHome = ( props ) => (
    <>
        <div className="pt-5 text-black"  >
            <div className="px-4  flex flex-col md:flex-row items-baseline" >
                <p className="text-2xl font-medium mr-4" >{props.name}</p>
                <div className="inline-block border-solid border rounded-full border-indigo-900 py-0" >
                    {
                        props.btns.map( ( name, index ) => (
                            <button
                                key={index} 
                                className={`
                                    ${index === props.index ? "bg-indigo-900" : ""} 
                                    ${index === props.index ? "text-white" : "text-indigo-900"} 
                                    rounded-full py-1 px-4 text-sm ease-linear duration-500`}
                                onClick={ () => props.onCallback( index, props.title, name ) }
                            >
                                { name }
                            </button>
                            
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-row  text-black mt-8 pb-4 overflow-auto" >
                {             
                    props.isReady ? props.movies.map( (movie) => (
                        <Link key={ movie.id } to="/" >
                            <CardMovieHome 
                                movie = { movie }
                            />
                        </Link>
                    )) : Array.apply(0, Array(10)).map( (movie, index) => (
                        <LoadingMovie/>
                    ))
                }
            </div>
        </div>
    </>
);

//default-trailer.jpg

const CardMovieHome = ( props ) => (
    <>
        <div className=" w-1/3 md:w-40 mx-4" style={ { minWidth: '135px', } } >  
            <img 
                src={ `${PATH_IMG}${props.movie.poster_path}` } 
                alt="props.movie.title" 
                className="rounded-lg mb-6"
            />
            <div className="relative bg-red-900 relative w-full h-auto" >
                <div 
                    className="absolute rounded-full h-10 w-10 flex items-center justify-center bg-gray-900 text-white" 
                    style={ { top: '-44px', left: '10px', padding: '0.15rem' } }
                >
                    <div className="flex items-center justify-center rounded-full h-full w-full border-2 border-indigo-900" >
                        <p style={{ fontSize: '11px' }} >{props.movie.vote_average * 10}</p>
                        <label style={{ fontSize: '6px' }} >%</label>
                    </div>
                </div>
            </div>
            <p className="font-bold" >{ props.movie.title }</p>
            <p className="font-hairline text-gray-700 text-sm" > { moment( props.movie.release_date ).format('MMM DD, YYYY') }</p>
        </div>
    </>
);

const LoadingMovie = () => (
    <>
        <div className=" w-1/3 md:w-40 mx-4" style={ { minWidth: '135px', } } >  
            <img 
                src={ ImgDefault } 
                alt="props.movie.title" 
                className="rounded-lg mb-6"
            />
            <div className="relative bg-red-900 relative w-full h-auto" >
                <div 
                    className="absolute rounded-full h-10 w-10 flex items-center justify-center bg-gray-900 text-white" 
                    style={ { top: '-44px', left: '10px', padding: '0.15rem' } }
                >
                </div>
            </div>
            
        </div>
    </>
);

export default ListMovieHome;
                