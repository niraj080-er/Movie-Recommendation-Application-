import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Cards from './component/Cards';
import MovieInfoComponent from './component/MovieInfoComponent';
import HomePage from './component/HomePage';

function App() {
  const [searchQuery, updateSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  console.log(movieList);


  return (
    <div className='bg-[#4b5563]'>
      <Navbar searchQuery={searchQuery} updateSearchQuery={updateSearchQuery}
      timeoutId={timeoutId} updateTimeoutId={updateTimeoutId} selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} movieList={movieList}
      updateMovieList={updateMovieList}/>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <Cards onMovieSelect={onMovieSelect} movieList={movieList}/>
    </div>
  );
}

export default App;
