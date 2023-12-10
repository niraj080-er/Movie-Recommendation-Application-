import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "./Card";
import Spinner from "./Spinner";
import {toast} from "react-hot-toast";


export const API_KEY = "5f221187";
const HomePage = (props) => {
    const [searchQuery, updateSearchQuery] = useState("");
    
    const [selectedMovie, onMovieSelect] = useState();
    const [movielist, updatemovielist] = useState([]);


    const fetchData = async (searchString) => {
        updateSearchQuery("raz");
        const response = await Axios.get(
          `https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`,
        );
        updatemovielist(response.data.Search);
        onMovieSelect("");
        console.log("data aya hai");
        console.log(updatemovielist);
      };
    return(
        <div>
            {
                movielist?.length?(
                    movielist.map((movie,index)=>(
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
                     <Spinner></Spinner>
                   </div>
                )
            }
        </div>
    )
};
export default HomePage;
