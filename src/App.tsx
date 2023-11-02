import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components';
import * as S from './styles/app';
import { Analytics } from '@vercel/analytics/react';

import { MainPage, DownloadPage, DeletePage, FileListPage, ApiPage, NotFoundPage } from './pages';

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <S.RootLayout>
              <div>
                <Toaster
                  toastOptions={{
                    style: {
                      backgroundColor: '#757BAB',
                      color: '#FFFFFF',
                    },
                  }}
                />
              </div>
              <div className="RootWrapper">
                <a
                  className="LinkBox"
                  onClick={() => {
                    if (window.location.pathname !== '/') {
                      navigate(-1);
                    }
                  }}
                >
                  <div className="Text">TEMPFILES</div>
                  <div className="SubText">간단한 파일 공유 서비스</div>
                </a>
                <Outlet />
              </div>
              <Navbar />
            </S.RootLayout>
          }
        >
          <Route index element={<MainPage />} />
          <Route path="/dl/:folderid" element={<DownloadPage />} />
          <Route path="/del/:folderid" element={<DeletePage />} />
          <Route path="/list" element={<FileListPage />} />
          <Route path="/api/*" element={<ApiPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  );
}
