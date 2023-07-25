import React from 'react';
import { Provider } from 'react-redux';
import { Outlet, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

//react-toastify/dist/ReactToastify.css
import { Navbar } from './components';
import {
  MainPage,
  DownloadPage,
  DeletePage,
  FileListPage,
  ApiPage,
  NotFoundPage,
  CheckPasswordPage,
  TextList,
  Text,
} from './pages';
import { TextDelete } from './pages/textDelete';
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
        <Route path="/download/:fileid" element={<DownloadPage />} />
        <Route path="/delete" element={<DeletePage />} />
        <Route path="/filelist" element={<FileListPage />} />
        <Route path="/api/*" element={<ApiPage />} />
        <Route path="/checkpw/:checkfileid" element={<CheckPasswordPage />} />
        <Route path="/text">
          <Route index element={<TextList />} />
          <Route path="/text/:textId" element={<Text />} />
          <Route path=":textId/delete" element={<TextDelete />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Provider>
);
