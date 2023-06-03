import { configureStore, Store } from '@reduxjs/toolkit';
import { exampleSlice } from './slices/exampleSlice';

const store: Store = configureStore({
  reducer: {
    example: exampleSlice.reducer,
  },
});

export default store;
