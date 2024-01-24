import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { globalStyle } from './styles';
import { createRoot } from 'react-dom/client';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Global styles={globalStyle} />
    <App />

    <Analytics />
    <SpeedInsights />
  </BrowserRouter>
);
