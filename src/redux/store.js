import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './messages/messageSlice';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
