import { configureStore } from '@reduxjs/toolkit';
import authReducer from './state/authStateSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
