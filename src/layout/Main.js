import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';

const Main = () => {
      return (
            <div>
                  <Header></Header>
                  <div>
                        <Outlet></Outlet>
                  </div>
                  <Footer></Footer>
            </div>
      );
};

export default Main;