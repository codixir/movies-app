import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const HomePage = () => {
    return (
        <div className="home-page">
            <SearchBar />

            <MovieList />
        </div>
    )
};

export default HomePage;
