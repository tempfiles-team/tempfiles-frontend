import React from 'react';
import { Provider } from 'react-redux';
import { Outlet, Route, Routes, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { store } from './state/store';
import { Navbar } from './components';
import {
  MainPage,
  DownloadPage,
  DeletePage,
  FileListPage,
  ApiPage,
  NotFoundPage,
  CheckPasswordPage,
} from './pages';

export const App: React.FC = () => (
  <Provider store={store}>
    <Routes>
      <Route
        path=""
        element={
          <div
            style={{
              height: '100dvh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Toaster
                toastOptions={{
                  className: '',
                  style: {
                    // border: '2px solid #757BAB',
                    padding: '16px',
                    backgroundColor: '#757BAB',
                    color: '#FFFFFF',
                  },
                }}
              />
            </div>
            <div>
              <Link to="" style={{ textAlign: 'center', textDecoration: 'none' }}>
                <div className="MainLogoText">TEMPFILES</div>
                <div className="MainLogoSubText">간단한 파일 공유 서비스</div>
              </Link>
              <Outlet />
            </div>
            <Navbar />
          </div>
        }
      >
        <Route index element={<MainPage />} />
        <Route path="/dl/:fileid" element={<DownloadPage />} />
        <Route path="/del" element={<DeletePage />} />
        <Route path="/list" element={<FileListPage />} />
        <Route path="/api/*" element={<ApiPage />} />
        <Route path="/check/:checkfileid" element={<CheckPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Provider>
);
