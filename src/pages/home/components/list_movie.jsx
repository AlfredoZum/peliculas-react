import React from 'react';
import { Link } from 'react-router-dom';
import CardMovieHome from './card_movie_home.jsx';

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
                                onClick={ () => props.onCallback( index, props.title ) }
                            >
                                { name }
                            </button>
                            
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-row  text-black mt-8 pb-4 overflow-auto" >
                {
                    Array.apply(0, Array(10)).map( (movie, index) => (
                        <Link key={ /*props.movies[0].id*/ index } to="/" >
                            <CardMovieHome 
                                movie = { props.movies[0] }
                            />
                        </Link>
                        
                    ))
                    /*props.movies.map( (movie) => (
                        <Link key={ movie.id } to="/" >
                            <CardMovieHome 
                                movie = { movie }
                            />
                        </Link>
                        
                    ))*/
                }
            </div>
        </div>
    </>
);

export default ListMovieHome;