import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

// styles
import { ViewInvoiceWrapper } from '../styles/ViewInvoice.styles';

// icons
import arrowLeft from '../assets/icon-arrow-left.svg';

const ViewInvoice = ({ }) => {
  

  const invItemList = [];
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
            <span>Pending</span>
          </div>
        </div>

        <span className="right flex">
          <button className="btn edit">Edit</button>
          <button className="btn delete">Delete</button>
          <button className="btn mark-paid">Mark as Paid</button>
          <button className="btn print">Print</button>
        </span>
      </div>

      <div className="invoice-info flex flex-column">
        <div className="first flex">
          <div className="col-left">
            <p>
              <span>#</span>id
            </p>
            <p>desc</p>
          </div>
          <div className="col-right">
            <p>billerAddress</p>
            <p>billerCity</p>
            <p>billerZip</p>
            <p>billerCountry</p>
          </div>
        </div>

        <div className="second flex">
          <div className="payment flex flex-column">
            <h6>Invoice Date</h6>
            <p>invoiceDate</p>

            <h6>Payment Due</h6>
            <p>invoiceDueDate</p>
          </div>

          <div className="bill flex flex-column">
            <h6>Bill To</h6>
            <p>clientName</p>
            <p>clientAddress</p>
            <p>clientCity</p>
            <p>clientZip</p>
            <p>clientCountry</p>
          </div>

          <div className="send-to flex flex-column">
            <h6>Sent to</h6>
            <p>devcreed18@gmail.com </p>
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

            {!_.isEmpty(invItemList) ? (
              invItemList.map((item, index) => (
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
            <p>AmountDue</p> <p>$556.00</p>
          </div>
        </div>
      </div>
    </ViewInvoiceWrapper>
  );
};

export default ViewInvoice;
