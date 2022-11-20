import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import NotFound from "../../Pages/NotFound/NotFound";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import ShowAllServices from "../../Pages/Services/ShowAllServices";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/blog',
                        element: <Blog></Blog>
                  },
                  {
                        path: '/services',
                        element: <ShowAllServices></ShowAllServices>,
                        loader: () => fetch('https://service-review-server-six-phi.vercel.app/allServices')
                  },
                  {
                        path: '/servicesDetails/:id',
                        element: <ServiceDetails></ServiceDetails>,
                        loader: ({ params }) => fetch(`https://service-review-server-six-phi.vercel.app/serviceDetails/${params.id}`)
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/register',
                        element: <Register></Register>
                  },
                  {
                        path: '/addservice',
                        element: <PrivateRoute><AddService></AddService></PrivateRoute>
                  },
                  {
                        path: '/myreviews',
                        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
                  },
            ]
      },
      {
            path: '*',
            element: <NotFound></NotFound>
      }
]);

export default router;