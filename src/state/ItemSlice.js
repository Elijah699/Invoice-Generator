import { createSlice } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit'

// intial State
const initialState = {
  items: localStorage.getItem('invItems')
    ? JSON.parse(localStorage.getItem('invItems'))
    : [],
  itemsTotalAmount: 0,
};

const ItemSlice = createSlice({
  name: 'invItem',
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('invItems', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items.map((item, index) => {
        if (item.id === action.payload) {
          state.items.splice(index, 1);
        }
      });
    },
    getTotalAmount: (state, action) => {
      state.itemsTotalAmount = action.payload;
    },
  },
});

// Action Creators
export const { addItems, removeItem } = ItemSlice.actions;

export default ItemSlice.reducer;

// export default ItemReducer;

// const addInvItemList = {
//    type: 'ADD_DATA_TO_ITEMLIST',
// };

// const removeInvItemList = {
//    type: 'REMOVE_DATA_FROM_ITEMLIST',
// };

// switch (action.type) {
//   case 'ADD_DATA_TO_ITEMLIST':
//     return {
//       ...state,
//       invItemList: [action.payload, ...state.invItemList],
//     };
//   case 'REMOVE_DATA_FROM_ITEMLIST':
//     return {
//       ...state,
//       invItemList: state.invItemList.filter(
//         (data) => data.id !== action.payload
//       ),
//     };
//   default:
//     return state;
// }
