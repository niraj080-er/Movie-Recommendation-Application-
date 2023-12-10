import React from 'react';
import Card from "../component/Card";
import {MdLocalMovies} from "react-icons/md";
import image from "../assets/bg.jpg";
import Spinner from './Spinner';
import HomePage from './HomePage';


const Cards=(props)=> {
    let movieList=props.movieList; 
    let onMovieSelect=props.onMovieSelect;

    return (
        <div className=' mt-10 flex flex-wrap gap-10 mx-auto w-11/12 items-center max-w-[1700px] justify-center'>
            {
                movieList?.length?(
                    movieList.map((movie,index)=>(
                        <Card 
                            key={index}
                            movie={movie}
                            onMovieSelect={onMovieSelect}
                        />
                    ))
                ):(
                   <div className=' flex  flex-col mx-auto items-center mt-[200px] text-[#2e2e48] h-screen'>
                     {/* <MdLocalMovies className='w-[200px] h-[200px]'/>
                     
                     <p className='text-[4rem]'>Serach Movie.... </p> */}
                     <HomePage onMovieSelect={onMovieSelect} movieList={movieList}/>
                   </div>
                )
            }
        </div>
    );
}

export default Cards;