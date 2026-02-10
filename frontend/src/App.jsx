import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import { MovieProvider } from "./contexts/movieContext";
import Navbar from "./Components/Navbar";
import "./css/App.css";

function App() {
  const location = useLocation();

  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={<Home key={location.key} />}
          />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
