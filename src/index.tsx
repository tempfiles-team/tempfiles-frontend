import { Global } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { globalStyle } from './styles';

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <Global styles={globalStyle} />
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);

{
  /* <React.StrictMode></React.StrictMode>; */
}
reportWebVitals();
