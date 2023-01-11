import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import InvoicesContext from '../context/InvoicesContext';
import _ from 'lodash';
import InvoiceCard from './InvoiceCard';

// style
import { HomeWrapper } from '../styles/Home.styles';

// icons
import arrowdown from '../assets/icon-arrow-down.svg';
import plus from '../assets/icon-plus.svg';
import emptyIllustration from '../assets/illustration-empty.svg';

const Home = () => {
  const { invoices } = useContext(InvoicesContext);

  const [filterableArray, setFilterableArray] = useState(invoices);

  const InvoicesNum = filterableArray.length;

  const [filter, setFilter] = useState(false);

  const toggleFilter = () => {
    setFilter(!filter);
  };

  const handlePendingFilter = () => {
    const pendingInvoices = invoices.filter(
      (invoice) => invoice.invPending === true
    );

    setFilterableArray(pendingInvoices);
    toggleFilter();
  };

  const handlePaidFilter = () => {
    const paidInvoices = invoices.filter(
      (invoice) => invoice.invPending === false
    );

    setFilterableArray(paidInvoices);
    toggleFilter();
  };

  const handleAll = () => {
    setFilterableArray(invoices);
    toggleFilter();
  };

  return (
    <HomeWrapper>
      <div className="home-nav">
        <div className="home-nav-left">
          <h1 className="home-title">Invoices</h1>
          <span className="home-title-span">
            <span className="sm-none">There are </span>
            <span>{InvoicesNum}</span> total invoices
          </span>
        </div>

        <div className="home-nav-right">
          <div className="filter-div">
            <div className="filter" onClick={toggleFilter}>
              Filter <span className="sm-none">by status </span>{' '}
              <img src={arrowdown} alt="arrow_down" />{' '}
            </div>
            <ul className={filter ? 'active' : ''}>
              {/* <li>Draft</li> */}
              <li onClick={handlePendingFilter}>Pending</li>
              <li onClick={handlePaidFilter}>Paid</li>
              <li onClick={handleAll}>All</li>
            </ul>
          </div>

          <div className="inv-btn-div">
            <Link to="/create-invoice">
              <button className="new-inv">
                <span className="plus-icon">
                  <img src={plus} alt="plus" />
                </span>{' '}
                New <span className="sm-none">invoice</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="invoice-item">
        {!_.isEmpty(filterableArray) ? (
          filterableArray.map((invoice) => (
            <InvoiceCard key={invoice.id} {...invoice} />
          ))
        ) : (
          <div className="empty">
            <img src={emptyIllustration} alt="illustration-empty" />
            <h3>There is nothing here</h3>
            <p>
              Create a new invoice by clicking the New Invoice button and get
              started.
            </p>
          </div>
        )}
      </div>
    </HomeWrapper>
  );
};

export default Home;
