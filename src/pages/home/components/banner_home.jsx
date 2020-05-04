import React from 'react';
import bgImg from '../../../assets/banner_whiplash-color.jpg';

const BannerHome = () => (
    <>
        <div className="bg-no-repeat bg-cover bg-indigo-400 px-4 md:px-16 py-16  text-white" style={ { backgroundImage: `url(${bgImg})` } } >
           <p className="font-bold text-5xl" >Welcome.</p>
           <p className="text-3xl mb-8" >Millions of movies, TV shows and people to discover. Explore now.</p>
           <div className="search-container relative" >
                <input type="text" className="w-full rounded-full h-12 px-4 text-black outline-none" placeholder="Search for a movie, tv show, person......" />
                <button className="bg-indigo-900 rounded-full px-8 py-3 absolute right-0 outline-none" >
                    Search
                </button>
           </div>
           
        </div>
    </>
);

export default BannerHome;