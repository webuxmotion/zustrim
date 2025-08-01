import React from 'react';
import { Routes, Route } from "react-router";

import MarketingPage from './features/marketing/MarketingPage';
import CounterWrapper from './features/counter/CounterWrapper';
import SignInPage from './features/auth/SignInPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MarketingPage />} />
        
        <Route path="/sign-in" element={<SignInPage />} />
      </Route>

      <Route path="/test-app" element={<CounterWrapper />} />
    </Routes>
  );
}

export default App;
