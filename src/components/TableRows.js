// import { useState } from 'react';

// styles
import { InputCon } from '../styles/InvoiceModal.styles';

// icons
import bin from '../assets/icon-delete.svg';

const TableRows = ({ rowsData, deleteTableRows, handleChange }) => {
  // const [itemName, setItemName] = useState('');
  // const [qty, setQty] = useState('');
  // const [price, setPrice] = useState('');

  // const handleInputData = (evt) => {
  //   const { name, value } = evt.data;

  //   switch (name) {
  //     case 'itemName':
  //       setItemName(value);
  //       break;
  //     case 'qty':
  //       setQty(value);
  //       break;
  //     case 'price':
  //       setPrice(value);
  //       break;
  //   }
  // }
  return (

    rowsData.map((data, index) => {
        const {itemName, qty, price} = data;
        return (
          <tr className="table-items" key={index}>
            <td className="item-name">
              <InputCon
                name="itemName"
                value={itemName}
                type="text"
                onChange={(evnt)=>(handleChange(index, evnt))}
              />
            </td>
            <td className="qty">
              <InputCon
                name="qty"
                value={qty}
                type="text"
                onChange={(evnt)=>(handleChange(index, evnt))}
              />
            </td>
            <td className="price">
              <InputCon
                name="price"
                value={price}
                type="text"
                onChange={(evnt)=>(handleChange(index, evnt))}
              />
            </td>
            <td  className="total">{qty * price}</td>
            <img src={bin} onClick={()=>(deleteTableRows(index))} alt="delete-icon" />
          </tr>
        );
    })

  );
};

export default TableRows;
