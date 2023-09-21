
import React,{useState,useEffect} from 'react';
import axios from "./../../constants/axios";
import Youtube from 'react-youtube';  
  
import {API_KEY, imageUrl} from "../../constants/constants"
import './RowPost.css'
function RowPost(props) {
    const[pop,setPop] = useState(false);
    const[movies,setMovies] = useState([]);
    const[urlId,setUrlId] =useState('');
    useEffect(()=>{
       
        axios.get(props.url).then((response)=>{
           console.log(response.data);
           setMovies(response.data.results)
        })
 
   },[])

   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
    
      autoplay: 1,
    },
  };

  const handleMovieTrailer =(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data);
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
             setPop(true);
        }else{
            console.log('Array empty');
        }
    }
    )}

    const closeVideo=()=>{
        setPop(false)
        }
    return (
        
        
        <div className='row'>
            
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movies.map((obj)=>
                    
                    <img  onClick={()=>handleMovieTrailer(obj.id)}  className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                    )
                }
                
              
            </div>
            { pop  && 
            
            <div className="video-popup">
                <button className="close-button" onClick={closeVideo}> X</button>
                <div className="video-content">

                    < Youtube videoId={urlId.key} opts={opts} />
                <h2 className='video-title'>{urlId.name}</h2>
     
            </div>
          </div>}
        </div>
    )
}

export default RowPost