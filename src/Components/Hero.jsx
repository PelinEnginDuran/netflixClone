import { useSelector } from "react-redux"
import { baseImgUrl } from "../constant"
import Loading from "./loading"

const Hero=()=>{
    const state = useSelector((store)=>store.movie)

    const i=Math.round(Math.random() * state.popularMovies.length)
   const randomMovie= state.popularMovies[i]



    


    return (
    <div className="hero row p-4">
        {!randomMovie ? (
        <Loading />
        ) : (
            <>
            <div className="col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center">
                <h1>{randomMovie.title}</h1>
                <p className="text-start">{randomMovie.overview}
                </p>
                <p>
                    <span>IMDB: </span>
                    <span className="text-warning px-2">{randomMovie.vote_average}</span>

                </p>
                <div className="d-flex gap-3">
                    <button className="btn btn-danger">Filmi izle</button>
                    <button className="btn-info">Listeye Ekle</button>
                </div>
            </div>
            <div className="col-md-6">
                <img  className="img-fluid rounded shadow my-4"src={baseImgUrl + randomMovie.backdrop_path} alt="" />
            </div>
            
            </>
        )}
    </div>)
}
export default Hero