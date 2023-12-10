import React, { useEffect, useState } from "react";
import Axios from "axios";
import Spinner from "./Spinner";
import {toast} from "react-hot-toast";


export const API_KEY = "5f221187";
const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);

  function clickhandler()
  {
    toast.success("Logged Out");  
  }
  return (
    <div className="w-11/12 max-w-[1160px] mx-auto flex gap-8 m-8 ">
      {movieInfo ? (
        <>
          <img className="h-[400px] w-[600px] " src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <div className="mt-5 leading-[1.8rem]">
            <p className>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </p>
            <p>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </p>
            <p>
              Year: <span>{movieInfo?.Year}</span>
            </p>
            <p>
              Language: <span>{movieInfo?.Language}</span>
            </p>
            <p>
              Rated: <span>{movieInfo?.Rated}</span>
            </p>
            <p>
              Released: <span>{movieInfo?.Released}</span>
            </p>
            <p>
              Runtime: <span>{movieInfo?.Runtime}</span>
            </p>
            <p>
              Genre: <span>{movieInfo?.Genre}</span>
            </p>
            <p>
              Director: <span>{movieInfo?.Director}</span>
            </p>
            <p>
              Actors: <span>{movieInfo?.Actors}</span>
            </p>
            <p>
              Plot: <span>{movieInfo?.Plot}</span>
            </p>
          </div>
          <div className=" text-black font-bold text-[1.2rem] hover: cursor-pointer  bg-red-500 h-[2rem] w-[4rem]
           rounded-full text-center"
           onClick={() => 
            props.onMovieSelect()
           }><p>X</p>
                 
           </div>
          
        </>
       ) : (
       <div className="flex flex-col mx-auto mt-10">
         <Spinner/> 
       </div>
      )}
    </div>
  );
};
export default MovieInfoComponent;
