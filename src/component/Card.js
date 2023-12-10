import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

const  Card=(props)=> {
    const { Title, Year, imdbID, Type, Poster } = props.movie;
    return (
        <div className="border bottom-1 w-[350px] mt-5 rounded-xl 
        hover:scale-125  duration-[2000ms] bg-[#e58d45]"
            onClick={() => {
            props.onMovieSelect(imdbID);
            window.scrollTo({ top: 0, behavior: "smooth" });}}
        >
            <img className='w-[340px] h-[300px] m-1 rounded-2xl' src={Poster} alt={Title}/>
            <div className='w-[340px] h-[2px] bg-slate-500 m-1 '></div>
            <div className='flex flex-col mb-1 mx-2 mt-6'>
                <p ><span className=' font-bold'>Title:</span> {Title}</p>
                <p ><span className=' font-bold'>Released In:</span> {Year}</p>
            </div>
        </div>
    );
}

export default Card;