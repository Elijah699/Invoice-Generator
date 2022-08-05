// import { useState } from 'react';
// styles
import styled from 'styled-components';

// icons
import bin from '../assets/icon-delete.svg';

const InputCon = styled.input`
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

const TableRows = ({
  rowsData,
  deleteTableRows,
  handleItemData,
  handleChange,
}) => {
  // const [errorMsg, setErrorMsg] = useState('');
  // const itemData = () => {
  //   const values = [itemName, qty, price];
  //   let errorMsg = '';

  //   const allInputFilled = values.every((input) => {
  //     const value = `${input}`.trim();
  //     return value !== '' && value !== '0';
  //   });

  //   if (allInputFilled) {
  //     const newItem = {
  //       id: index + 1,
  //       itemName,
  //       qty,
  //       price,
  //       total: qty * price,
  //     };

  //     handleItemData(newItem);
  //   } else {
  //     errorMsg = 'Please fill the input';
  //   }

  //   setErrorMsg(errorMsg);
  // };

  return rowsData.map((data, index) => {
    const { itemName, qty, price } = data;

    const newItem = {
      id: index + 1,
      itemName,
      qty,
      price,
      total: qty * price,
    };

    // handleItemData(newItem);

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
