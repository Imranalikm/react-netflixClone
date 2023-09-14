// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from "./../../constants/axios";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState();
  const randomNumber = Math.floor(Math.random() * 20);
  useEffect(()=>{
         axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data.results[0]);
          setMovie(response.data.results[randomNumber]);
         })
  
  },[])
 

  return (
    <div className="banner" style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}>
        <div className="content">
            <h1 className="title">{movie ? movie.title || movie.name :""}</h1>
            <div className="banner-buttons">  
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h2 className="description">
           {movie ? movie.overview:""}
            </h2>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner