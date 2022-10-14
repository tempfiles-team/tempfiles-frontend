import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './components';
import { MainPage, SuccessPage } from './pages';

export const App: React.FC = () => (
  <Routes>
    <Route
      path=""
      element={
        <>
          <div style={{ textAlign: 'center' }}>
            <div className="MainLogoText">TEMPFILES</div>
            <div className="MainLogoSubText">간단한 파일 공유 서비스</div>
          </div>
          <div style={{ margin: '0 auto' }}>
            <ToastContainer />
            <Outlet />
            <Navbar />
          </div>
        </>
      }
    >
      <Route index element={<MainPage />} />
      <Route path="success" element={<SuccessPage />} />
    </Route>
  </Routes>
);
