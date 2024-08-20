import { Link } from 'react-router-dom';
import useSearchStore from "../store/useSearchStore";
import './MovieList.css';

const MovieList = () => {
    const { movies } = useSearchStore();

    return (
        <div className="movie-list">
            { 
                movies.map((movie) => {
                    return (
                        <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                            <div className="movie-item">                            
                                <img src={movie.Poster}  />
                                <h3>{movie.Title}</h3>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default MovieList;