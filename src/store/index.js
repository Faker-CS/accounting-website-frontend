import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import companiesReducer from './slices/companiesSlice';
import uiReducer from './slices/uiSlice';
import { apiMiddleware } from './middleware/apiMiddleware';

const store = configureStore({
  reducer: {
    auth: authReducer,
    companies: companiesReducer,
    ui: uiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiMiddleware),
});

export default store;