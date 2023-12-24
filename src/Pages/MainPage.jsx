import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPopular, getGenres} from "../redux/actions/movieActions"
import MovieList  from "../Components/MovieList"
import Hero from "../Components/Hero"



const MainPage =()=>{
    const state = useSelector((store)=>store.genre)
    
    const dispatch = useDispatch()
  

    useEffect(()=>{
        dispatch(getPopular())
        dispatch(getGenres())


    }, [])
    return (
    <div>
         <Hero />
         {state.isLoading ? (
            <div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
        ) : state.isError ? (
        <p>üzgünüz bir hata oluştu {state.isError}</p>
        ) : (
            state.genres.map((genre)=> <MovieList key={genre.id} genre={genre} />)
        )
    }
    

     </div>
    )
}
export default MainPage