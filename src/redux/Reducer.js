import { createSlice } from '@reduxjs/toolkit'

// intial State
const initialState = {
  invItemList: [],
};

export const ItemReducer = createSlice({
  name: 'invItem',
  initialState,
  reducers: {
    ADD_TO_ITEMLIST: (state, action) => {
      return {
        ...state,
        invItemList: [action.payload, ...state.invItemList],
      };
    },
    REMOVE_FROM_ITEMLIST: (state, action) => {
      return {
        ...state,
        invItemList: state.invItemList.filter(
          (data) => data.id !== action.payload
        ),
      };
    },
  },
});



// Action Creators
export const { ADD_TO_ITEMLIST, REMOVE_FROM_ITEMLIST } = ItemReducer.actions;

export default ItemReducer.reducer







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
