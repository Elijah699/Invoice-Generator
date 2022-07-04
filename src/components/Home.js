import React, { useState } from 'react';
import InvoiceModal from '../components/InvoiceModal';
import {
  HomeWrapper,
  HomeNav,
  HomeNavLeft,
  HomeTitle,
  HomeTitleSpan,
  SmNone,
  HomeNavRight,
  FilterDiv,
  Filter,
  FilterMenu,
  FilterItem,
  ArrowDown,
  InvoiceBtnDiv,
  NewInvoice,
  PlusSpan,
} from '../styles/Home.styles';

// icons
import arrowdown from '../assets/icon-arrow-down.svg';
import plus from '../assets/icon-plus.svg';

const Home = () => {
  // const emptyInvoice = ''
  const [active, setActive] = useState(false);

  const toggleModal = () => {
    setActive(!active);
  }
  return (
    <HomeWrapper>
      <HomeNav>
        <HomeNavLeft>
          <HomeTitle>Invoices</HomeTitle>
          <HomeTitleSpan>
            <SmNone>There are </SmNone>
            <span>4</span> total invoices
          </HomeTitleSpan>
        </HomeNavLeft>

        <HomeNavRight>
          <FilterDiv>
            <Filter>
              Filter <SmNone>by status </SmNone>{' '}
              <ArrowDown src={arrowdown} alt="arrow_down" />{' '}
            </Filter>
            <FilterMenu>
              <FilterItem>Draft</FilterItem>
              <FilterItem>Pending</FilterItem>
              <FilterItem>Paid</FilterItem>
              <FilterItem>All</FilterItem>
            </FilterMenu>
          </FilterDiv>

          <InvoiceBtnDiv>
            <NewInvoice onClick={toggleModal}>
              <PlusSpan>
                <img src={plus} alt="plus" />
              </PlusSpan>{' '}
              New <SmNone>invoice</SmNone>
            </NewInvoice>
          </InvoiceBtnDiv>
        </HomeNavRight>
      </HomeNav>
      <InvoiceModal active={active} setActive={toggleModal} />
    </HomeWrapper>
  );
};

export default Home;
