// import { useState } from 'react';
// styles
import styled from 'styled-components';

// icons
import bin from '../assets/icon-delete.svg';

export const InputCon = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.inputbg};
  color: ${({ theme }) => theme.generaltext};
  border-radius: 4px;
  padding: 12px 4px;
  border: none;
  margin-bottom: 24px;

  &:focus {
    outline: none;
  }
`;

const TableRows = ({ invProp, rowsData, deleteTableRows, handleChange }) => {
  console.log(invProp);

  // const tempRowsData = invProp.invItemList;

  // return invProp
  //   ? tempRowsData.map((item, index) => {
  //       // const { itemName, qty, price } = data;

  //       return (
  //         <tr className="table-items" key={index}>
  //           <td className="item-name">
  //             <InputCon
  //               name="itemName"
  //               value={item.itemName}
  //               type="text"
  //               onChange={(evnt) => handleChange(index, evnt)}
  //             />
  //           </td>
  //           <td className="qty">
  //             <InputCon
  //               name="qty"
  //               value={item.qty}
  //               type="text"
  //               onChange={(evnt) => handleChange(index, evnt)}
  //             />
  //           </td>
  //           <td className="price">
  //             <InputCon
  //               name="price"
  //               value={item.price}
  //               type="text"
  //               onChange={(evnt) => handleChange(index, evnt)}
  //             />
  //           </td>
  //           <td className="total">{item.qty * item.price}</td>
  //           <img
  //             src={bin}
  //             onClick={() => deleteTableRows(index)}
  //             alt="delete-icon"
  //           />
  //         </tr>
  //       );
  //     })
  //   : 
    
    return rowsData.map((data, index) => {
        const { itemName, qty, price } = data;

        return (
          <tr className="table-items" key={index}>
            <td className="item-name">
              <InputCon
                name="itemName"
                value={itemName}
                type="text"
                onChange={(evnt) => handleChange(index, evnt)}
              />
            </td>
            <td className="qty">
              <InputCon
                name="qty"
                value={qty}
                type="text"
                onChange={(evnt) => handleChange(index, evnt)}
              />
            </td>
            <td className="price">
              <InputCon
                name="price"
                value={price}
                type="text"
                onChange={(evnt) => handleChange(index, evnt)}
              />
            </td>
            <td className="total">{qty * price}</td>
            <img
              src={bin}
              onClick={() => deleteTableRows(index)}
              alt="delete-icon"
            />
          </tr>
        );
      });
};

export default TableRows;
