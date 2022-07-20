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
    align-items: center;
    flex-basis: 60%;
    gap: 16px;

    span {
      flex: 1;
      margin: 0 7px;
    }

    .track-id {
      text-transform: uppercase;
    }

    .date-due,
    .client-name {
      color: ${({ theme }) => theme.duecolor};
    }
  }

  .flex-right {
    gap: 16px;
    flex-basis: 40%;
    align-items: center;

    .total {
      flex: 1;
      font-size: 16px;
      font-weight: 600;
    }
  }


  .status-button {
    &::before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 8px;
    }
    font-size: 12px;
    margin-right: 30px;
    align-items: center;
    padding: 8px 30px;
    border-radius: 10px;
  }

  .paid {
    &::before {
      background-color: #33d69f;
    }

    color: #33d69f;
    background-color: rgba(51, 214, 160, 0.1);
  }

  .pending {
    &::before {
      background-color: #ff8f00;
    }
    color: #ff8f00;
    background-color: rgba(255, 145, 0, 0.1);
  }

  .draft {
    &::before {
      background-color: #dfe3fa;
    }
    color: #dfe3fa;
    background-color: rgba(223, 227, 250, 0.1);
  }
`;
