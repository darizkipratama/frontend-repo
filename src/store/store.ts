import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Example Slice
import userReducer from './userSlices';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;