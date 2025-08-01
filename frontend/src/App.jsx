import React from 'react';
import { Routes, Route } from "react-router";

import MarketingPage from './features/marketing/MarketingPage';
import CounterWrapper from './features/counter/CounterWrapper';
import SignInPage from './features/auth/SignInPage';
import MainLayout from './layouts/MainLayout';
import SignUpPage from './features/auth/SignUpPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './features/dashboard/Dashboard';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MarketingPage />} />
        
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      <Route path="/test-app" element={<CounterWrapper />} />
    </Routes>
  );
}

export default App;
