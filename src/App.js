import './App.css';
import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FavoritesPage from './pages/FavoritesPage';
import { FavoritesContext } from './state/FavoritesContext'
import { useEffect, useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ListPage />
    ),
  },
  {
    path: ":imdbId",
    element: (<DetailsPage />),
  },
  {
    path: "favorites",
    element: (<FavoritesPage />),
  },
]);

function App() {

  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      setFavorites(JSON.parse(localStorage.getItem("favorites")))
    }

  }, [])

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      <div className="App">

        <RouterProvider router={router} />

      </div>
    </FavoritesContext.Provider>
  );
}

export default App;
