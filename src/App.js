import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';
import ProtectedRoute from './components/layout/ProtectedRoute';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import Dashboard from './pages/dashboard/Dashboard';
import CompaniesPage from './pages/companies/CompaniesPage';
import CompanyCreatePage from './pages/companies/CompanyCreatePage';
import CompanyEditPage from './pages/companies/CompanyEditPage';
import CompanyDetailPage from './pages/companies/CompanyDetailPage';
import ToastNotification from './components/ui/ToastNotification';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Import CSS from template (you'll need to copy these from the template)
// import './assets/css/core.css';
// import './assets/css/theme-default.css';
import './assets/css/demo.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <ToastNotification />
        <LoadingSpinner />
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Company routes */}
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/companies/create" element={<CompanyCreatePage />} />
            <Route path="/companies/edit/:id" element={<CompanyEditPage />} />
            <Route path="/companies/:id" element={<CompanyDetailPage />} />
            
            {/* Redirect to dashboard if authenticated user visits root */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Route>
          
          {/* Redirect to login for any unmatched routes */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;