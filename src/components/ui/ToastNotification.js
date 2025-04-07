import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from '../../store/slices/uiSlice';

const ToastNotification = () => {
  const { toasts } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleClose = (id) => {
    dispatch(removeToast(id));
  };

  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      {toasts.map((toast) => (
        <div 
          key={toast.id}
          className={`toast show align-items-center text-white bg-${toast.type === 'error' ? 'danger' : 'success'} border-0`}
          role="alert" 
          aria-live="assertive" 
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">
              {toast.message}
            </div>
            <button 
              type="button" 
              className="btn-close btn-close-white me-2 m-auto" 
              onClick={() => handleClose(toast.id)}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastNotification;