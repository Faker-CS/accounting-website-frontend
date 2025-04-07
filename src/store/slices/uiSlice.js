import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  sidebarCollapsed: false,
  theme: localStorage.getItem('theme') || 'light',
  toasts: [],
  loading: false
};

// UI slice for managing UI state across the application
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
    },
    addToast: (state, action) => {
      state.toasts.push({
        id: Date.now(),
        ...action.payload
      });
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(toast => toast.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { toggleSidebar, setTheme, addToast, removeToast, setLoading } = uiSlice.actions;
export default uiSlice.reducer;