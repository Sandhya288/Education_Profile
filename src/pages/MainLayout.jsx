import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import React from 'react';
import Products from './Products';

const MainLayout = () => {
  const location = useLocation();
  const isProductDetailsPage = location.pathname.includes('/products/');

  return (
    <>
      <Header />
      <Outlet />
      {!isProductDetailsPage && <Products />}
      {!isProductDetailsPage && <Footer />}
    </>
  );
};

export default MainLayout;
