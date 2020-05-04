import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../../assets/banner_forma_agua.jpg';

const btnPlay = "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg";

const ListTrailersHome = ( props ) => (
    <>
        <div className="bg-no-repeat bg-cover bg-indigo-400 px-4 pt-8  text-white" style={ { backgroundImage: `url(${bgImg})` } } >
            <div className="px-4  flex flex-col md:flex-row items-baseline" >
                <p className="text-2xl font-medium mr-4" >{props.name}</p>
                <div className="inline-block border-solid border rounded-full border-white py-0" >
                    {
                        props.btns.map( ( name, index ) => (
                            <button
                                key={index} 
                                className={`
                                    ${index === props.index && 'bg-white' } 
                                    ${index === props.index ? 'text-indigo-900' : 'text-white'} 
                                    rounded-full py-1 px-4 text-sm ease-linear duration-500`}
                                onClick={ () => props.onCallback( index, props.title ) }
                            >
                                { name }
                            </button>
                            
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-row  text-black mt-8 pb-4 overflow-auto pb-8" >
            {
                Array.apply(0, Array(10)).map( (trailer, index) => (
                    <Link key={ /*props.trailers[0].id*/ index } to="/" >
                        <CardTrailers 
                            trailer = { props.trailers[0] }
                        />
                    </Link>
                    
                ))
            }
            </div>
        </div>
    </>
);

const CardTrailers = ( props ) => (
    <>
        <div className=" w-1/3 md:w-64 mx-4 text-white text-center" style={ { minWidth: '250px', } } >  
            <div className="relative" >
                <img 
                    src={ props.trailer.img } 
                    alt="props.movie.title" 
                    className="rounded-lg mb-6 focus:scale-150"
                />
            </div>
            <p className="font-medium text-lg" >{ props.trailer.title }</p>
            <p className="font-thin text-sm focus:shadow-outline" > { props.trailer.description }</p>
        </div>
    </>
); 

export default ListTrailersHome;