// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addItems } from '../state/ItemSlice';

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
  invProp,
  rowsData,
  deleteTableRows,
  handleChange,
}) => {


  return rowsData.map((data, index) => {
    let { itemName, qty, price, total } = data;
    total = qty * price;
    console.log(total);

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
        {/* <td className="total">{total}</td> */}
        <td className="total">
          <InputCon
            name="total"
            value={total}
            disabled
            type="text"
            onChange={(evnt) => handleChange(index, evnt)}
          />
        </td>
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