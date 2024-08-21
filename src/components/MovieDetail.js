import { useParams } from "react-router-dom";
import useSearchStore from '../store/useSearchStore';
import { useEffect } from "react";
import './MovieDetail.css';

const MovieDetail = () => {
    const { id } = useParams()
    const { movieDetail, fetchMovieDetail } = useSearchStore();

    useEffect(() => {
        fetchMovieDetail(id);
    }, [id, fetchMovieDetail])

 
    return movieDetail ? (
        <div>
            <h2>{movieDetail.Title}</h2>
            <img src={movieDetail.Poster}/> 
            <p>{movieDetail.Plot}</p>
        </div>) : <p>Loading...</p>;    
};

export default MovieDetail;