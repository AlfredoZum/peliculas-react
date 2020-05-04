import React from 'react';
import bgImg from '../../../assets/banner_info.jpg';

const InformativeSection = () => (
    <>
        <div className="bg-no-repeat bg-cover bg-indigo-400 px-4 py-10 mt-4 text-white" style={ { backgroundImage: `url(${bgImg})` } } >
            <p className="text-3xl font-semibold pb-6" >Join Today</p>
            <div className="flex flex-col md:flex-row" >
                <div className="md:w-3/5 md:mr-10" >
                    <p className="text-base font-hairline pb-4" >Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, and Claro video.</p>
                    <button className="bg-indigo-900 rounded-lg px-6 py-2" >Sign Up</button>
                </div>
                <div className="mw-3/5 px-4 mt-10 md:mt-0 md:mr-10 " >
                    <ul className="text-sm font-hairline list-disc">
                        <li>Enjoy TMDb ad free</li>
                        <li>Maintain a personal watchlist</li>
                        <li>Filter by your subscribed streaming services and find something to watch</li>
                        <li>Log the movies and TV shows you've seen</li>
                        <li>Build custom lists</li>
                        <li>Contribute to and improve our database</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);

export default InformativeSection;