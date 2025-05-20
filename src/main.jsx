import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { GloabelContext } from "./gloabelContext";
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './pages/App.jsx'
import Explore from './pages/Explore.jsx'
// import Details from "./details.jsx";
// import Search from "./search.jsx";
// import Searchpage from "./searchpage.jsx";
// import Cast from "./cast-details.jsx";
// import Genre from "./genre-details.jsx";
// import GenreListFetch from "./genre-list.jsx";




//router hvor vi putter komponenter ind og laver flere sider
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/Explore",
    element: <Explore />
  },


  // {
  //   //vi definere vores details side path 
  //   path: "/details/:movieId",
  //   element: <Details />
  // },
  // {

  //   path: "/search",
  //   element: <Search />
  // }
  // ,
  // {

  //   path: "/searchpage",
  //   element: <Searchpage />
  // },


  // {

  //   path: "/cast-details/:media_type/:castId",
  //   element: <Cast />
  // }, {

  //   path: "/genre-details/:genreId",
  //   element: <Genre />
  // },
  // {

  //   path: "/genre-list/",
  //   element: <GenreListFetch />
  // }
])
//vi laver et state som vi ka gemme i vores context
const MyProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  return <GloabelContext.Provider value={{ color, setColor }}>{children}</GloabelContext.Provider>;
};






createRoot(document.getElementById('root')).render(



  //vi putter vores context rundt om vores projekt
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>



)
