import React from 'react';

const CardMovieHome = ( props ) => (
    <>
        <div className=" w-1/3 md:w-40 mx-4" style={ { minWidth: '135px', } } >  
            <img 
                src={ props.movie.img } 
                alt="props.movie.title" 
                className="rounded-lg mb-6"
            />
            <div className="relative bg-red-900 relative w-full h-auto" >
                <div 
                    className="absolute rounded-full h-10 w-10 flex items-center justify-center bg-gray-900 text-white" 
                    style={ { top: '-44px', left: '10px', padding: '0.15rem' } }
                >
                    <div className="flex items-center justify-center rounded-full h-full w-full border-2 border-indigo-900" >
                        <p style={{ fontSize: '11px' }} >{props.movie.range}</p>
                        <label style={{ fontSize: '6px' }} >%</label>
                    </div>
                </div>
            </div>
            <p className="font-bold" >{ props.movie.title }</p>
            <p className="font-hairline text-gray-700 text-sm" > { props.movie.date }</p>
        </div>
    </>
);

export default CardMovieHome;

/*
<img 
                src={ props.movie.img } 
                alt="props.movie.title" 
                className="rounded-lg mb-6"
            />
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-indigo-900" >

                </div>
                {/*<div 
                        className="rounded-full h-10 w-10 flex items-center justify-center bg-indigo-900 text-white absolute "
                    >
                    <p className="text-sm" >{props.movie.range}</p>
                    <label className="text-xs" >%</label>
                </div>*///}
        
               /* <p className="font-bold" >{ props.movie.title }</p>
                <p className="font-hairline text-gray-700 text-sm" > { props.movie.date }</p>
*/