import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";

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
                        element: <Services></Services>
                  }
            ]
      }
]);

export default router;