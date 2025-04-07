import { createAsyncThunk } from '@reduxjs/toolkit';
import { addToast } from '../slices/uiSlice';

// Middleware to handle API errors and success messages
export const apiMiddleware = store => next => action => {
  // Check if the action is a rejected async thunk action
  if (action.type.endsWith('/rejected') && action.payload) {
    store.dispatch(addToast({
      type: 'error',
      message: action.payload
    }));
  }
  
  // Continue processing the action
  return next(action);
};

// Thunk middleware for handling loading states
export const withLoading = (name, asyncFn) => {
  return createAsyncThunk(
    name,
    async (args, thunkAPI) => {
      thunkAPI.dispatch({ type: `${name}/loading`, payload: true });
      try {
        const result = await asyncFn(args, thunkAPI);
        thunkAPI.dispatch({ type: `${name}/loading`, payload: false });
        return result;
      } catch (error) {
        thunkAPI.dispatch({ type: `${name}/loading`, payload: false });
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
};