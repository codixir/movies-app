import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage /> } />
          <Route path="/movie/:id" element={ <MovieDetailPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
