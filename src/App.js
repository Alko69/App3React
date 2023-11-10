import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./context";
import Home from "./pages/Home";
import CocktailPage from "./pages/CocktailPage";
import Navbar from "./components/Navbar";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<FavoritesPage />} />
          <Route path="cocktail/:id" element={<CocktailPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
