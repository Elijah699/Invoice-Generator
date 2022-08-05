import { configureStore } from '@reduxjs/toolkit';
import ItemReducer from './Reducer';


// A store to  call on to check the state
export const store = configureStore({
  reducer: {
    invItem: ItemReducer
  },
});
