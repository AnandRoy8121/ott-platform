import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { TMDB_APIOptions, TMDB_TopRatedMoviesAPI } from "../utils/constants"
import { addTopRatedMovies } from "../utils/movieSlice"

const useTopRatedMovies = ()=>{
    // Fetch Now Playing Movies from TMDB and add it in the redux store
    const dispatch = useDispatch()
  useEffect(()=>{
    topRatedMovies()
  },[])
  const topRatedMovies = async()=>{
    const data = await fetch(TMDB_TopRatedMoviesAPI,TMDB_APIOptions);
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))
  }
}

export default useTopRatedMovies