import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_ITEMLIST, REMOVE_FROM_ITEMLIST } from '../redux/Reducer';

import TableRows from './TableRows';
import NewInvoiceBtn from './NewInvoiceBtn';
import EditInvoiceBtn from './EditInvoiceBtn';

// styles
import {
  StyledModal,
  FormWrapper
} from '../styles/InvoiceForm.styles';

// icons
import plus from '../assets/icon-plus.svg';

const InvoiceForm = ({ invProp, title, submitText, handleOnSubmit }) => {
  const invoiceTitle = title === 'New Invoice';

  const items = useSelector((state) => state.invItem.invItemList);
  console.log(items);
  
  const dispatch = useDispatch();

  const [invoice, setInvoice] = useState(() => {
    return {
      billerStreet: invProp ? invProp.billerStreet : '',
      billerCity: invProp ? invProp.billerCity : '',
      billerZip: invProp ? invProp.billerZip : '',
      billerCountry: invProp ? invProp.billerCountry : '',
      clientName: invProp ? invProp.clientName : '',
      clientEmail: invProp ? invProp.clientEmail : '',
      clientStreet: invProp ? invProp.clientStreet : '',
      clientCity: invProp ? invProp.clientCity : '',
      clientZip: invProp ? invProp.clientZip : '',
      clientCountry: invProp ? invProp.clientCountry : '',
      invDate: invProp ? invProp.invDate : '',
      payDue: invProp ? invProp.payDue : '',
      payTerm: invProp ? invProp.payTerm : 30,
      proDesc: invProp ? invProp.proDesc : '',
    };
  });

  const {
    billerStreet,
    billerCity,
    billerZip,
    billerCountry,
    clientName,
    clientEmail,
    clientStreet,
    clientCity,
    clientZip,
    clientCountry,
    payTerm,
    proDesc,
  } = invoice;

  // ======= date handler =======
  const dateOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };

  const invoiceDate = new Date(Date.now()).toLocaleDateString(
    'en-GB',
    dateOptions
  );

  const invoiceDueDate = new Date(
    Date.now() + `${payTerm}` * 24 * 60 * 60 * 1000
  ).toLocaleDateString('en-GB', dateOptions);

  // ======= end of date handler =======

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInvoice((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = (event) => {
    event.preventDefault();

    const id = () => Math.random().toString(36).substring(2);

    const invoice = {
      id: id(),
      billerStreet,
      billerCity,
      billerZip,
      billerCountry,
      clientName,
      clientEmail,
      clientStreet,
      clientCity,
      clientZip,
      clientCountry,
      invoiceDate,
      invoiceDueDate,
      payTerm,
      proDesc,
      invItemList: items,
      invTotal: 0,
      invPending: true,
      invDraft: false,
      invPaid: false,
    };

    handleOnSubmit(invoice);
    // console.log(invoice);
  };

  // ======= Add Item handlers =======
  // Table
  const [rowsData, setRowsData] = useState([]);

  const handleItemData = (data) => {
    console.log(data);
    // dispatch(ADD_TO_ITEMLIST(data));
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

    // const dispatchfunction = () => dispatch(REMOVE_FROM_ITEMLIST());
    // dispatchfunction();
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  // ====== End of Add Item handler =======

  return (
    <StyledModal>
      <FormWrapper onSubmit={submitForm}>
        <h1>{title}</h1>

        {/* Bill From */}
        <div className="billFrom">
          <h4>Bill From</h4>

          <div className="flex-col-con">
            <label htmlFor="billerStreetAddress">Street Address</label>
            <input
              name="billerStreet"
              value={billerStreet}
              type="text"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex-con">
            <div className="flex-col-con">
              <label htmlFor="billerCity"> City</label>
              <input
                name="billerCity"
                value={billerCity}
                type="text"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex-col-con">
              <label htmlFor="billerZipCode">Zip Code</label>
              <input
                name="billerZip"
                value={billerZip}
                type="text"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex-col-con">
              <label htmlFor="billerCountry">Country</label>
              <input
                name="billerCountry"
                value={billerCountry}
                type="text"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Bill To */}
        <div className="billTo">
          <h4>Bill To</h4>
          <div className="flex-col-con">
            <label htmlFor="clientName">Client's Name</label>
            <input
              name="clientName"
              value={clientName}
              type="text"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex-col-con">
            <label htmlFor="clientEmail">Client's Email</label>
            <input
              name="clientEmail"
              value={clientEmail}
              type="email"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex-col-con">
            <label htmlFor="clientStreetAddress">Street Address</label>
            <input
              name="clientStreet"
              value={clientStreet}
              type="text"
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="flex-con">
            <div className="flex-col-con">
              <label htmlFor="clientCity">City</label>
              <input
                name="clientCity"
                value={clientCity}
                type="text"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex-col-con">
              <label htmlFor="clientZipCode">Zip Code</label>
              <input
                name="clientZip"
                value={clientZip}
                type="text"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex-col-con">
              <label htmlFor="clientCountry">Country</label>
              <input
                name="clientCountry"
                value={clientCountry}
                type="text"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Invoice Work Details */}
        <div className="flex-col-con">
          <div className="date">
            <div className="flex-con">
              <div className="flex-col-con">
                <label htmlFor="invoiceDate">Invoice Date</label>
                <input
                  name="invDate"
                  value={invoiceDate}
                  disabled
                  type="text"
                />
              </div>
              <div className="flex-col-con">
                <label htmlFor="paymentDueDate">Payment Due</label>
                <input
                  name="payDue"
                  value={invoiceDueDate}
                  disabled
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="desc">
            <div className="flex-col-con">
              <label htmlFor="paymentTerms">Payment Terms</label>
              <select
                name="payTerm"
                value={payTerm}
                onChange={handleInputChange}
                required
              >
                <option value={30}>Next 30 Days</option>
                <option value={60}>Next 60 Days</option>
              </select>
            </div>
          </div>

          <div className="desc">
            <div className="flex-col-con">
              <label htmlFor="productDescription">Product Description</label>
              <input
                name="proDesc"
                value={proDesc}
                type="text"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Work Items */}
          <div className="work-item">
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
                  // handleItemData={handleItemData}
                />
              </tbody>
            </table>

            <button
              className="add-item-btn"
              type="button"
              onClick={addTableRows}
            >
              <img src={plus} alt="plus-icon" />
              Add New Item
            </button>
          </div>
        </div>

       {invoiceTitle ? <NewInvoiceBtn submitText={submitText} /> : <EditInvoiceBtn submitText={submitText} />}
      </FormWrapper>
    </StyledModal>
  );
};

export default InvoiceForm;
