import { configureStore } from '@reduxjs/toolkit';
import ItemSlice from './ItemSlice';


// A store to  call on to check the state
export const store = configureStore({
  reducer: {
    invItem: ItemSlice,
  },
});
