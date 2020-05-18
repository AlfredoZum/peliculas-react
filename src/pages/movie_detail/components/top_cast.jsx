import React from 'react';
import { PATH_IMG } from '../../../consts/index.jsx';
import ImgDefault from '../../../assets/default-movie.jpg';

const TopCast = ( { casts } ) => (
  <>
    <div className="px-8 my-6 flex flex-col" >
      <p className="text-2xl font-medium mr-4" >Top Billed Cast</p>
      <div className="my-4 flex flex-row overflow-scroll" >
        {
          casts &&
          Array.apply(0, Array(8)).map( (movie, index) => (
            <CardCast cast={ casts[index] }  key={ index } />
          ))
        }
      </div>
      <p className="text-sm mr-4" >Full Cast & Crew</p>
      
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> 
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
      </div>
      


    </div>
  </>
);

const CardCast = ( { cast } ) => (
  <div style={ { minWidth: '155px', } } className="mb-6" >
    <div className="max-w-sm rounded overflow-hidden shadow-lg mr-4" >
      <img 
        src={ cast.profile_path ? `${PATH_IMG}${cast.profile_path}` : ImgDefault } 
        alt="props.movie.title" 
        className="rounded-lg mb-6 focus:scale-150 transition ease-in duration-700"
      />
      <div className="mx-4" style={ { height: '80px' } } >
        <p className="font-bold text-sm" >{ cast.name }</p>
        <p className="text-sm mb-6" >{ cast.character }</p>
      </div>
    </div>
  </div>
);

export default TopCast;