// import React, { createContext, useReducer, useEffect } from 'react';
// import ItemReducer from './Reducer';

// // intial State
// const initialState = {
//   invItemList: localStorage.getItem('invItemList')
//     ? JSON.parse(localStorage.getItem('invItemList'))
//     : [],
// };

// invItemList context
// export const invItemContext = createContext(initialState);

// provider component
// export const invItemProvider = ()  => {
//     const [state, dispatch] = useReducer(ItemReducer, initialState);

//     useEffect(() => {
//         localStorage.setItem('invItemList', JSON.stringify(state.invItemList))
//     }, [state]);

//     // actions
//     const addInvItemList = item => {
//         dispatch({ type: "ADD_DATA_TO_ITEMLIST", payload: item });
//     }

//     const removeInvItemList = id => {
//         dispatch({ type: "REMOVE_DATA_FROM_ITEMLIST", payload: id})
//     }

//     return (
//         <invItemContext.Provider value={{invItemList: state.invItemList, addInvItemList, removeInvItemList}}>
//         </invItemContext.Provider>
//     );
// }

// const addInvItemList = (invItemValue) {
//    type: 'ADD_DATA_TO_ITEMLIST',
//    invItem: invItemValue,
// };

// const removeInvItemList = {
//    type: 'REMOVE_DATA_FROM_ITEMLIST',
// };
