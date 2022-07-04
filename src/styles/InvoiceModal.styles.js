import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.4); */
  /* display: none; */
  margin-left: -100vw;
  transition: 0.8s;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }


  &.active {
    /* display: block; */
    margin: 0;
  }

`;


export const FormWrapper = styled.form`
  position: relative;
  left: 50px;
  padding: 10px 56px;
  max-width: 650px;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.texttest};
  box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);


    @media (max-width: 768px) {
    left: 0;
    padding: 70px 10px 10px;
    width: 100%;
    max-width: 100%;
  }


  @media (max-width: 576px) {
    width: auto;
  }


  h1,
  billFrom,
  billTo {
    margin-bottom: 48px;
  }


  .actionBtn {
    display: flex;
    margin-top: 60px;
    margin-bottom: 25px;
    width: 100%;


    div {
      flex: 1;
    }


    .right {
      float: right;
    }
  }
`;


export const Invh3 = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.h3color};
`;


export const Invh4 = styled.h4`
  margin-bottom: 24px;
  font-size: 12px;
  color: ${({ theme }) => theme.h4color};
`;


export const FlexCon = styled.div`
  display: flex;
  gap: 16px;
`;


export const FlexColCon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;


  .desc {
    margin: 10px 0;

    select {
      width: 100%;
      background-color: ${({ theme }) => theme.inputbg};
      color: ${({ theme }) => theme.texttest};
      border-radius: 4px;
      padding: 12px 4px;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }
`;


export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 6px;
`;


export const InputCon = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.inputbg};
  color: ${({ theme }) => theme.texttest};
  border-radius: 4px;
  padding: 12px 4px;
  border: none;
  margin-bottom: 24px;

  &:focus {
    outline: none;
  }
`;


export const WorkItem = styled.div`
  .item-list {
    width: 100%;
  }

  .table-heading,
  .table-items {
    display: flex;
    gap: 16px;
    font-size: 12px;
  }

  .table-heading {
    margin-bottom: 16px;

    th {
      text-align: left;
    }
  }


  .table-items {
    position: relative;

    img {
      position: absolute;
      top: 15px;
      right: 0;
      width: 12px;
      height: 16px;
      cursor: pointer;
    }
  }


  .item-name {
    flex-basis: 50%;
  }


  .qty {
    flex-basis: 10%;
  }


  .price {
    flex-basis: 20%;
  }


  .total {
    flex-basis: 20%;
    align-self: center;
    margin-bottom: 15px;
  }
`;


export const AddItemBtn = styled.button`
  width: 100%;
  color: #fff;
  background-color: #252945;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 16px;
  border-radius: 30px;
  cursor: pointer;

  &:focus {
    outline: none;
  }


  img {
    margin-right: 4px;
  }
`;


export const Btn = styled.button`
  cursor: pointer;
  font-size: 12px;
  border: none;
  margin-right: 8px;
  border-radius: 30px;
  padding: 16px 24px;

  &:focus {
    outline: none;
  }


  @media (max-width: 576px) {
    margin-right: 6px;
    padding: 13px 20px;
  }
`;


export const RedBtn = styled(Btn)`
  color: ${({ theme }) => theme.texttest};
  background-color: #ec5757;
`;


export const PurpleBtn = styled(Btn)`
  color: ${({ theme }) => theme.texttest};
  background-color: #7c5dfa;
`;


export const GreenBtn = styled(Btn)`
  color: ${({ theme }) => theme.texttest};
  background-color: #33d69f;
`;
