import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { GloabelContext } from "./gloabelContext";
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './pages/App.jsx'
import Explore from './pages/Explore.jsx'
import Details from './pages/details.jsx'
import SeeMore from './pages/seemore.jsx'
import CheckoutForm from "./pages/checkout.jsx";
import Seats from './pages/seats.jsx'
import Checkout from './pages/checkout.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/Explore",
    element: <Explore />
  },

  {
    path: "/details/:movieId",
    element: <Details />
  },

  {
    path: "/seemore",
    element: <SeeMore />
  },
 {
    path: "/checkout",
    element: <CheckoutForm />
  },

  {
    path: "/seats",
    element: <Seats />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },



])

const MyProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  return <GloabelContext.Provider value={{ color, setColor }}>{children}</GloabelContext.Provider>;
};






createRoot(document.getElementById('root')).render(
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>



)
