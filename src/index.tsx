import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { globalStyle } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Global styles={globalStyle} />
    <App />
  </HashRouter>,
);

{
  /* <React.StrictMode></React.StrictMode>; */
}
reportWebVitals();
