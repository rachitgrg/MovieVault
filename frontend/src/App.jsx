import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/movieContext";
import Navbar from "./Components/Navbar";
import "./css/App.css";

function App() {
  return (
    <MovieProvider>
      <Navbar></Navbar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Favourites" element={<Favourites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
