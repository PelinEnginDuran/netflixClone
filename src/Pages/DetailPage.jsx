import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { baseImgUrl, options } from "../constant"
import millify from "millify"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ReactPlayer from "react-player"

const DetailPage =()=>{
    const [movie,setMovie]=useState(null)
      const {id} =useParams()
    useEffect(()=>{
        axios
        .get(`/movie/${id}?append_to_response=Images,videos,credits,reviews&language=tr-TR`,options)
        .then((res)=>setMovie(res.data))
    },[])
   console.log(movie)
    
    return ( 
        <div className="row">
        { !movie ? ( 
        <div className="spinner-border text-primary" role="status">
</div> ) : (
    <>
    <div className="col-12 banner">
        <img className="w-100 h-100 object-fit-cover"
        src={baseImgUrl + movie.backdrop_path}/>
        <div className="banner-bg">
        <span>{movie.title}</span>
    </div>
    </div>
    <div className="col-md-6 mt-4 p-4">
        <h3 className="mt-4">Production Companies</h3>
        <div className="d-flex flex-wrap gap-4">
            {movie.production_companies.map((i)=>(
                <div className="bg-white rounded p-2 d-flex align-items-center">

               { i.logo_path ? 
                
                    (
                    <img className="object-fit-contain"
                    width={100}
                    height={100}
                    src={baseImgUrl + i.logo_path} />) : (
                        <span className="company">{i.name}</span>

                    )}
                </div>
                

        ))}
        
        </div>
        <h3 className="mt-4">Spoken Language</h3>
        <div className="d-flex flex-wrap gap-4">
            {movie.spoken_languages.map((i)=>(
                <div className="bg-white rounded p-2 d-flex align-items-center">

                 <span className="other">{i.name}</span>

                </div>
                

        ))}
        
        </div>
        <h3 className="mt-4">Production Countries</h3>
        <div className="d-flex flex-wrap gap-4">
            {movie.production_countries.map((i)=>(
                <div className="bg-white rounded p-2 d-flex align-items-center">

               
                        <span className="other">{i.name}</span>

                   
                </div>
                

        ))}
        
        </div>
    </div>
    <div className="col-md-6 mt-4 p-4">
        <p className="lead">{movie.overview}</p>
        <p className="fs-5">
            <span className="fw-bold">Budget: </span>
            <span className="text-success">{millify(movie.budget)}$</span>
        </p>
        <p className="fs-5">
            <span>Revenue: </span>
            <span className="text-success">{millify(movie.revenue)}$</span>
        </p>

    </div>
    <div className="col-12 p-4 my-3">
        <h2>Oyuncular</h2>
        <Splide options={{
            height:"200px",
            gap:"10px",
            pagination:false,
            autoWidth:true,


        }}>
            {movie.credits.cast.map((i)=>(
                <SplideSlide>
               <div className="actor-card h-100">
               <img className="movie"
                src={i.profile_path ? baseImgUrl + i.profile_path : "/def-actor.jpg"} alt="" />
                <p>
                    <span>{i.name}</span>
                    <span>{i.character}</span>

                </p>
               </div>
            </SplideSlide>
            ))}
         

        </Splide>

        
    </div>
    <div>
        <h2>Videos</h2>
        <Splide>
        {movie.videos.results.map((video)=>(
           
          video.site === "YouTube" &&(
            <ReactPlayer
             url={`https://www.youtube.com/watch?v=${video.key}`}/>

          )  
        
        ))}
        </Splide>

    </div>
    
    

  
  

    </>
    
)}
     </div>
  ) 
}
export default DetailPage