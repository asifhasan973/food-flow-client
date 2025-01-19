import { Outlet } from 'react-router-dom';

import Footer from './../Shared/Footer';
import Navbar from './../Shared/Navbar';
import { ToastContainer } from 'react-toastify';
const FrontPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
};

export default FrontPage;
