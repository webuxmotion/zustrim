import './polyfills';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store';
import { StyledEngineProvider } from '@mui/material';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <App />
          <Toaster />
        </Provider>
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>,
)
