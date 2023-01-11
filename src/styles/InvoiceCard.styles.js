import styled from 'styled-components';

export const InvoiceCardWrapper = styled.div`
  text-decoration: none;
  cursor: pointer;
  margin-top: 8px;
  gap: 16px;
  margin-bottom: 14px;
  border-radius: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.cardbg};
  align-items: center;
  display: flex;

  span {
    font-size: 13px;
  }

  .flex-left {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-basis: 60%;
    gap: 16px;


    .track-id {
      text-transform: uppercase;
    }

    .date-due,
    .client-name {
      color: ${({ theme }) => theme.duecolor};
    }
  }

  .flex-right {
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    flex-basis: 40%;
    align-items: center;

    .total {
      flex: 1;
      font-size: 14px;
      font-weight: 600;
    }
  }


  @media (max-width: 576px) {

    .flex-left {
      flex-direction: column;
      flex-basis: 50%;
    }

    .flex-right {
      flex-direction: column;
      flex-basis: 50%;

      .right-icon {
        display: none;
      }
    }
  }
`;
