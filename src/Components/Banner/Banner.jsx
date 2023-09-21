// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from "./../../constants/axios";
import "./Banner.css";
import Youtube from 'react-youtube';  

function Banner() {
  const [pop, setPop] = useState(false);
  const [urlId, seturlId] = useState('');
  const [movie, setMovie] = useState();
  const randomNumber = Math.floor(Math.random() * 20);

  const closeVideo = () => {
    setPop(false);
  };

  const handleMovie = async (id) => {
    try {
      const response = await axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
      if (response.data.results.length !== 0) {
        seturlId(response.data.results[0]);
        setPop(true);
      } else {
        window.alert('No videos found for this movie.');
      }
    } catch (error) {
      window.alert('Error fetching movie videos:', error);
    }
  };

  const opts = {
    height: '390',
    width: '800',
    playerVars: {
      autoplay: 1,
    },
  };
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
                <button onClick={() => handleMovie(movie.id)} className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h2 className="description">
           {movie ? movie.overview:""}
            </h2>
        </div>
        <div className="fade_bottom"></div>
        {pop && (
        <div className='video-popup'>
          <button className='close-button' onClick={closeVideo}>
            X
          </button>
          <div className='video-content'>
            <Youtube videoId={urlId.key} opts={opts} />
            <h2 className='video-title'>{urlId.name}</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default Banner