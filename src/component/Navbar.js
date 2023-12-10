import React from 'react';
import Axios from "axios";
import {GoSearch} from "react-icons/go";
import {BiCameraMovie} from "react-icons/bi";
export const API_KEY = "5f221187";

const Navbar=(props)=>{
    const searchQuery=props.searchQuery;
    const updateSearchQuery=props.updateSearchQuery;
    const timeoutId=props.timeoutId;
    const updateTimeoutId=props.updateTimeoutId;
    
    const onMovieSelect=props.onMovieSelect;
   
    const updateMovieList=props.updateMovieList;

    const fetchData = async (searchString) => {
        const response = await Axios.get(
          `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
        );
        updateMovieList(response.data.Search);
      };

    const onTextChange = (e) => {
        onMovieSelect("")
        clearTimeout(timeoutId);
        updateSearchQuery(e.target.value);
        const timeout = setTimeout(() => fetchData(e.target.value), 500);
        updateTimeoutId(timeout);
      };
    return (
        <div className="w-full mx-auto flex bg-[#4b5563] text-white h-[70px] items-center flex-wrap rounded-xl">
           <div className='flex w-11/12 mx-auto max-w-[1160px] justify-between'>
                <div className='flex justify-center items-center gap-2'>
                    <BiCameraMovie className='w-[50px] h-[50px]'/>
                    <p className=' text-xl '>Movie Search App</p>
                </div>
              <div className='flex gap-2 '>
                    <div className="flex mx-auto justify-end bg-white rounded-xl h-[40px] mt-1">
                            <div className=" w-full flex mx-auto border-none gap-2 ">
                                <GoSearch className='w-[20px] my-4 mx-3 text-black'/>
                                    <input
                                    type="search"
                                    id="mySearch"
                                    name="q"
                                    placeholder="Search the site…"
                                    required  
                                    value={searchQuery}
                                    onChange={onTextChange}
                                    className='rounded-xl border-none outline-none text-black '
                                    />
                            </div>
                        
                        </div>
                       
              </div>
             
                
           </div>
        </div>
    );
}

export default Navbar;