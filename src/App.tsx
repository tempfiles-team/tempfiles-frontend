import React from 'react';
import { Provider } from 'react-redux';
import { Outlet, Route, Routes, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { store } from './state/store';
import { Navbar } from './components';
import * as S from './styles/app';

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
              <Link className="LinkBox" to="/">
                <div className="Text">TEMPFILES</div>
                <div className="SubText">간단한 파일 공유 서비스</div>
              </Link>
              <Outlet />
            </div>
            <Navbar />
          </S.RootLayout>
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
