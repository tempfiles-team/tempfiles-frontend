import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { globalStyle } from './styles';
import { createRoot } from 'react-dom/client';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start();
}

const root = createRoot(document.getElementById('root') as HTMLElement);
enableMocking().then(() => {
  root.render(
    <BrowserRouter>
      <Global styles={globalStyle} />
      <App />

      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
});
