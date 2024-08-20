import useSearchStore from "../store/useSearchStore";
import './SearchBar.css';

const SearchBar = () => {
    const { searchQuery, setSearchQuery, fetchMovies } = useSearchStore();

    const handleSearch = async (event) => {
        setSearchQuery(event.target.value);
        if (event.target.value.length > 2) {
            await fetchMovies(event.target.value);
        }
    }

    return (
        <input 
            className="search-bar"
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearch}
        />
    );
}

export default SearchBar;