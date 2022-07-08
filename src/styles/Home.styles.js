import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 40px 10px;


  @media (max-width: 1039px) {
    max-width: 700px;
  }


  @media (max-width: 875px) {
    max-width: 650px;
  }


  @media (max-width: 576px) {
    width: auto;
  }
`;


export const HomeNav = styled.div`
  display: flex;
`;


export const HomeNavLeft = styled.div`
  flex: 1;
`;


export const HomeTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 600;


  @media (max-width: 576px) {
    font-size: 24px;
  }
`;


export const HomeTitleSpan = styled.span`
  font-size: 12px;
  font-weight: 300;
`;


export const SmNone = styled.span`
  @media (max-width: 576px) {
    display: none;
  }
`;


export const HomeNavRight = styled.div`
  flex: 1;
  justify-content: flex-end;
  display: flex;
  margin-top: 10px;
`;


export const FilterDiv = styled.div`
  padding-top: 10px;
  cursor: pointer;
  position: relative;
`;


export const Filter = styled.div`
  font-size: 12px;
  font-weight: 300;
`;


export const ArrowDown = styled.img`
  margin-left: 3px;
`;


export const FilterMenu = styled.ul`
  display: none;
  padding: 0;
  list-style-type: none;
  position: absolute;
  width: 120px;
  top: 25px;
  background: ${({ theme }) => theme.inputbg};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

    &.active {
      display: block;
    }
`;


export const FilterItem = styled.li`
  font-size: 12px;
  font-weight: 300;
  cursor: pointer;
  padding: 10px;
  text-align: center;


  &:hover {
    background: ${({ theme }) => theme.texttest};
    color: ${({ theme }) => theme.inputbg};
  }
`;


export const InvoiceBtnDiv = styled.div`
  margin-left: 50px;
`;


export const NewInvoice = styled.button`
  border-radius: 40px;
  background-color: #7c5dfa;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  border: none;

  &:focus {
    outline: none;
  }
`;


export const PlusSpan = styled.span`
  border-radius: 50%;
  background-color: #fff;
  margin-right: 5px;
  padding: 4px;
  justify-content: center;
`;
