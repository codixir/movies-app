import create from 'zustand';

const useSearchStore = create((set) => ({
  movies: [],
  movieDetail: null,
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  fetchMovies: async (query) => {
    const apikey = process.env.REACT_APP_OMDB_API_KEY;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${query}`);
    const data = await response.json();
    if (data.Response === "True") {
        set({ movies: data.Search })
    } else {
        set( { movies: [] })
    }
  },
  fetchMovieDetail: async (id) => {
    const apikey = process.env.REACT_APP_OMDB_API_KEY;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`);
    const data = await response.json()

    set({ movieDetail: data });
  },
}));

export default useSearchStore;

