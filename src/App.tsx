import { Outlet, Route, Routes, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import axios from 'axios';

import { MainPage, DownloadPage, DeletePage, FileListPage, ApiPage, NotFoundPage } from './pages';
import { ScrollArea } from '@/components/ui/scroll-area';

async function checkServerStatus() {
  return await axios.get(import.meta.env.VITE_APP_BACKEND_BASEURL);
}

export default function App() {
  const navigate = useNavigate();
  const [serverDown, setServerDown] = useState(false);

  useEffect(() => {
    // Replace this with a function that checks the status of the server
    checkServerStatus()
      .then(() => setServerDown(false))
      .catch(() => setServerDown(true));
  }, []);

  if (serverDown) {
    return <div>🛠️ 서버 점검 중.. 잠시만 기다려주세요.</div>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center h-screen">
              <a
                onClick={() => window.location.pathname !== '/' && navigate(-1)}
                className="cursor-pointer flex flex-col items-center justify-center w-full h-20 text-center"
              >
                <h1 className="scroll-m-20 text-3xl font-semibold">TEMPFILES</h1>
                <p className="text-sm text-muted-foreground">간단한 파일 공유 서비스</p>
              </a>
              <ScrollArea className="h-full w-[768px] rounded-md border p-4">
                <Outlet />
              </ScrollArea>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/" className={navigationMenuTriggerStyle()}>
                      Upload
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/api" className={navigationMenuTriggerStyle()}>
                      API
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/list" className={navigationMenuTriggerStyle()}>
                      File list
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Toaster />
            </div>
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
    </>
  );
}
