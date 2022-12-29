import React, { useContext } from 'react';
import _ from 'lodash';
import { Link, useParams, useNavigate } from 'react-router-dom';
import InvoicesContext from '../context/InvoicesContext';

// styles
import { ViewInvoiceWrapper } from '../styles/ViewInvoice.styles';

// icons
import arrowLeft from '../assets/icon-arrow-left.svg';

const ViewInvoice = () => {
  const { invoices, setInvoices } = useContext(InvoicesContext);
  const { id } = useParams();
  let navigate = useNavigate();

  const getInvoice = invoices.find((invoice) => invoice.id === id);

  const itemArray = getInvoice.invItemList;
  const invoiceStatus = getInvoice.invPending;


  // Set invoice as paid or pending
  const markAsPaid = () => {
    getInvoice.invPending = !invoiceStatus;
    const filteredInvoices = invoices.filter((invoice) => invoice.id !== id);
    setInvoices([getInvoice, ...filteredInvoices]);
  };

  // Delete Invoice
  const handleRemoveInvoice = (id) => {
    setInvoices(invoices.filter((invoice) => invoice.id !== id));
    navigate('/');
  };

  // Print Invoice

  const handlePrint = () => {
    navigate(`/print-invoice/${id}`);
  };

  return (
    <ViewInvoiceWrapper>
      <Link to="/">
        <div className="back">
          {' '}
          <img src={arrowLeft} alt="arrow-left" /> Go back
        </div>
      </Link>

      <div className="menu flex">
        <div className="left flex">
          <span>Status</span>
          <div className="status-btn flex">
            <span
              className={`status ${
                invoiceStatus === true ? 'pending' : 'paid'
              }`}
            >
              {invoiceStatus === true ? 'pending' : 'paid'}
            </span>
          </div>
        </div>

        <span className="right flex">
          <button
            onClick={() => navigate(`/edit-invoice/${id}`)}
            className="btn edit"
          >
            Edit
          </button>
          <button
            onClick={() => handleRemoveInvoice(id)}
            className="btn delete"
          >
            Delete
          </button>
          <button onClick={markAsPaid} className="btn mark-paid">
            {invoiceStatus === true ? 'Mark as Paid' : 'Mark as Pending'}
          </button>
          <button onClick={handlePrint} className="btn print">
            Print
          </button>
        </span>
      </div>

      <div className="invoice-info flex flex-column">
        <div className="first flex m1-flex">
          <div className="col-left">
            <p>
              <span>#</span> {id}
            </p>
            <p>{getInvoice.proDesc}</p>
          </div>
          <div className="col-right">
            <p>{getInvoice.billerName}</p>
            <p>{getInvoice.billerStreet}</p>
            <p>{getInvoice.billerCity}</p>
            <p>{getInvoice.billerZip}</p>
            <p>{getInvoice.billerCountry}</p>
          </div>
        </div>

        <div className="second flex m2-flex">
          <div className="payment flex flex-column">
            <h6>Invoice Date</h6>
            <p>{getInvoice.invoiceDate}</p>

            <h6>Payment Due</h6>
            <p>{getInvoice.invoiceDueDate}</p>
          </div>

          <div className="bill flex flex-column">
            <h6>Bill To</h6>
            <p>{getInvoice.clientName}</p>
            <p>{getInvoice.clientStreet}</p>
            <p>{getInvoice.clientCity}</p>
            <p>{getInvoice.clientZip}</p>
            <p>{getInvoice.clientCountry}</p>
          </div>

          <div className="send-to flex flex-column">
            <h6>Sent to</h6>
            <p>{getInvoice.clientEmail}</p>
          </div>
        </div>

        <div className="third flex flex-column">
          <div className="inv-items">
            <div className="header flex">
              <p>Item Name</p>
              <p>QTY</p>
              <p>Price</p>
              <p>Total</p>
            </div>

            {!_.isEmpty(itemArray) ? (
              itemArray.map((item, index) => (
                <div className="item flex" key={index}>
                  <p>{item.itemName}</p>
                  <p>{item.qty}</p>
                  <p>{item.price}</p>
                  <p>{item.total}</p>
                </div>
              ))
            ) : (
              <div className="empty">
                <h4>There is nothing here</h4>
                <p>Add items</p>
              </div>
            )}
          </div>

          <div className="inv-total flex">
            <p>Grand Total</p> <p>£{getInvoice.invTotal}</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="m-menu">
        <div className="flex">
          <button
            onClick={() => navigate(`/edit-invoice/${id}`)}
            className="btn edit"
          >
            Edit
          </button>
          <button className="btn mark-paid">Mark as Paid</button>
          <button
            onClick={() => handleRemoveInvoice(id)}
            className="btn delete"
          >
            Delete
          </button>
        </div>

        <div>
          <button className="btn print">Print</button>
        </div>
      </div>
    </ViewInvoiceWrapper>
  );
};

export default ViewInvoice;
