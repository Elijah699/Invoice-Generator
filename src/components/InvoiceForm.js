import { useState } from 'react';
import TableRows from './TableRows';

// styles
import {
  FormWrapper,
  GreenBtn,
  PurpleBtn,
  RedBtn,
} from '../styles/InvoiceForm.styles';

// icons
import plus from '../assets/icon-plus.svg';

const InvoiceForm = ({active, setActive}) => {
  // Table
  const [rowsData, setRowsData] = useState([]);

  // Form
  const [billerStreet, setBillerStreet] = useState('');
  const [billerCity, setBillerCity] = useState('');
  const [billerZip, setBillerZip] = useState('');
  const [billerCountry, setBillerCountry] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientStreet, setClientStreet] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientZip, setClientZip] = useState('');
  const [clientCountry, setClientCountry] = useState('');
  // const [invDate, setInvDate] = useState('');
  // const [payDue, setPayDue] = useState('');
  const [payTerm, setPayTerm] = useState('');
  const [proDesc, setProDesc] = useState('');

  const date = new Date();
  const currentDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  // const id = () => Math.random().toString(36).substring(2);

  const handleSubmit = (e) => {
    e.preventDefault();


  };

  const addTableRows = () => {
    const rowsInput = {
      itemName: '',
      qty: '',
      price: '',
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>New Invoice</h1>

      {/* Bill From */}
      <div className="billFrom">
        <h4>Bill From</h4>

        <div className='flex-col-con'>
          <label htmlFor="billerStreetAddress">Street Address</label>
          <input
            name="billerStreet"
            value={billerStreet}
            type="text"
            onChange={(e) => setBillerStreet(e.target.value)}
            required
          />
        </div>

        <div className='flex-con'>
          <div className='flex-col-con'>
            <label htmlFor="billerCity"> City</label>
            <input
              name="billerCity"
              value={billerCity}
              type="text"
              onChange={(e) => setBillerCity(e.target.value)}
              required
            />
          </div>
          <div className='flex-col-con'>
            <label htmlFor="billerZipCode">Zip Code</label>
            <input
              name="billerZip"
              value={billerZip}
              type="text"
              onChange={(e) => setBillerZip(e.target.value)}
              required
            />
          </div>
          <div className='flex-col-con'>
            <label htmlFor="billerCountry">Country</label>
            <input
              name="billerCountry"
              value={billerCountry}
              type="text"
              onChange={(e) => setBillerCountry(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* Bill To */}
      <div className="billTo">
        <h4>Bill To</h4>
        <div className='flex-col-con'>
          <label htmlFor="clientName">Client's Name</label>
          <input
            name="clientName"
            value={clientName}
            type="text"
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </div>
        <div className='flex-col-con'>
          <label htmlFor="clientEmail">Client's Email</label>
          <input
            name="clientEmail"
            value={clientEmail}
            type="email"
            onChange={(e) => setClientEmail(e.target.value)}
            required
          />
        </div>
        <div className='flex-col-con'>
          <label htmlFor="clientStreetAddress">Street Address</label>
          <input
            name="clientStreet"
            value={clientStreet}
            type="text"
            onChange={(e) => setClientStreet(e.target.value)}
            required
          />
        </div>

        <div className='flex-con'>
          <div className='flex-col-con'>
            <label htmlFor="clientCity">City</label>
            <input
              name="clientCity"
              value={clientCity}
              type="text"
              onChange={(e) => setClientCity(e.target.value)}
              required
            />
          </div>
          <div className='flex-col-con'>
            <label htmlFor="clientZipCode">Zip Code</label>
            <input
              name="clientZip"
              value={clientZip}
              type="text"
              onChange={(e) => setClientZip(e.target.value)}
              required
            />
          </div>
          <div className='flex-col-con'>
            <label htmlFor="clientCountry">Country</label>
            <input
              name="clientCountry"
              value={clientCountry}
              type="text"
              onChange={(e) => setClientCountry(e.target.value)}
              required
            />
          </div>
        </div>
      </div>

      {/* Invoice Work Details */}
      <div className='flex-col-con'>
        <div className='flex-con'>
          <div className='flex-col-con'>
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input name="invDate" value={currentDate} disabled type="text" />
          </div>
          <div className='flex-col-con'>
            <label htmlFor="paymentDueDate">Payment Due</label>
            <input
              name="payDue"
              // value={}
              disabled
              type="text"
              // onChange={handleInputData}
            />
          </div>
        </div>

        <div className="desc">
          <div className='flex-col-con'>
            <label htmlFor="paymentTerms">Payment Terms</label>
            <select
              name="payTerm"
              value={payTerm}
              onChange={(e) => setPayTerm(e.target.value)}
              required
            >
              <option value={30}>Next 30 Days</option>
              <option value={60}>Next 60 Days</option>
            </select>
          </div>
        </div>

        <div className="desc">
          <div className='flex-col-con'>
            <label htmlFor="productDescription">Product Description</label>
            <input
              name="proDesc"
              value={proDesc}
              type="text"
              onChange={(e) => setProDesc(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Work Items */}
        <div className='work-item'>
          <h3>Item List</h3>
          <table className="item-list">
            <thead>
              <tr className="table-heading">
                <th className="item-name">Item Name</th>
                <th className="qty">Qty</th>
                <th className="price">Price</th>
                <th className="total">Total</th>
              </tr>
            </thead>
            <tbody>
              <TableRows
                rowsData={rowsData}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
            </tbody>
          </table>

          <button className='add-item-btn' type="button" onClick={addTableRows}>
            <img src={plus} alt="plus-icon" />
            Add New Item
          </button>
        </div>
      </div>

      {/* Save/Print/Exit */}
      <div className="actionBtn">
        <div>
          <RedBtn type="button" onClick={() => setActive(!active)}>
            Cancel
          </RedBtn>
        </div>
        <div>
          <div className="right">
            <PurpleBtn>Save Draft</PurpleBtn>
            <GreenBtn type="submit">Create Invoice</GreenBtn>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default InvoiceForm;
