import React from 'react';
import { Provider } from 'react-redux';
import { Outlet, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from './components';
import { MainPage, SuccessPage, DownloadPage, DeletePage } from './pages';
import { store } from './state/store';

export const App: React.FC = () => (
  <Provider store={store}>
    <Routes>
      <Route
        path=""
        element={
          <>
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <ToastContainer />
              <div>
                <Link to="" style={{ textAlign: 'center', textDecoration: 'none' }}>
                  <div className="MainLogoText">TEMPFILES</div>
                  <div className="MainLogoSubText">간단한 파일 공유 서비스</div>
                </Link>
                <Outlet />
              </div>
              <Navbar />
            </div>
          </>
        }
      >
        <Route index element={<MainPage />} />
        <Route path="success" element={<SuccessPage />} />
        <Route path="download" element={<DownloadPage />} />
        <Route path="delete" element={<DeletePage />} />
      </Route>
    </Routes>
  </Provider>
);
