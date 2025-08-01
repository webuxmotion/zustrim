import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { StyledEngineProvider } from '@mui/material/styles';
import { store } from './app/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <Provider store={store}>
          <App />
        </Provider>
      </StyledEngineProvider>
    </BrowserRouter>
  </StrictMode>,
)
