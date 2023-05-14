import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CheckOut from "./pages/CheckOut";
import Booking from "./pages/Booking";
import PrivateRoutes from "./PrivateRoutes";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'register',
          element: <Register/>
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoutes><CheckOut/></PrivateRoutes>,
          loader: ({params}) => fetch(`https://car-doctor-server-akkhan06.vercel.app/services/${params.id}`)
        },
        {
          path: "booking",
          element:<Booking/>
        }
      ]
    },
  ]);



export default router;