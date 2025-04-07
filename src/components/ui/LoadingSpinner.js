import React from 'react';
import { useSelector } from 'react-redux';

// Loading spinner component that shows during API calls
const LoadingSpinner = ({ size = 'md', color = 'primary' }) => {
  const { loading } = useSelector((state) => state.ui);
  
  if (!loading) return null;
  
  const spinnerSize = {
    sm: 'spinner-border-sm',
    md: '',
    lg: 'spinner-border-lg'
  };
  
  return (
    <div className="loading-overlay">
      <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-25" style={{ zIndex: 1050 }}>
        <div className={`spinner-border text-${color} ${spinnerSize[size]}`} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;