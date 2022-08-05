import styled from 'styled-components';

export const ViewInvoiceWrapper = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 40px 10px;

  a {
    text-decoration: none;
  }

  .back {
    color: ${({ theme }) => theme.generaltext};
  }

  .main {
    color: ${({ theme }) => theme.generaltext};
  }

  .sec {
    color: ${({ theme }) => theme.sectext};
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .menu {
    background-color: ${({ theme }) => theme.viewmenu};
    margin: 10px 0;
    padding: 20px 10px;
    border-radius: 20px;
    font-size: 12px;
    align-items: center;

    .left {
      align-items: center;

      span {
        margin-right: 10px;
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
    }

    .right {
      flex: 1;
      justify-content: flex-end;

      .btn {
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
      }

      .edit {
        background-color: #252945;
        color: #e7e8f0;
      }

      .delete {
        color: ${({ theme }) => theme.generaltext};
        background-color: #ec5757;
      }

      .mark-paid {
        color: ${({ theme }) => theme.generaltext};
        background-color: #7c5dfa;
      }

      .print {
        color: ${({ theme }) => theme.generaltext};
        background-color: #33d69f;
      }
    }
  }

  .invoice-info {
    background-color: ${({ theme }) => theme.viewmenu};
    padding: 48px;
    margin-top: 24px;
    border-radius: 20px;

    .first {
      div {
        flex: 1;
      }

      .col-left {
        font-size: 12px;

        p:first-child {
          font-size: 20px;
          text-transform: uppercase;
          margin-bottom: 5px;
        }

        p:nth-child(2) {
          font-size: 16px;
        }

        span {
          color: #888eb0;
        }
      }

      .col-right {
        font-size: 12px;
        align-items: flex-end;
        text-align: end;
      }
    }

    .second {
      margin-top: 20px;
      gap: 40px;

      p {
        margin: 5px;
      }

      h6 {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 10px;
      }

      .payment,
      .bill {
        flex: 1;
      }

      .bill {
        p:nth-child(2) {
          font-size: 15px;
        }

        p {
          font-size: 12px;
        }
      }

      .send-to {
        flex: 2;
      }
    }

    .third {
      margin-top: 20px;

      .inv-items {
        padding: 32px;
        border-radius: 20px 20px 0 0;
        background-color: ${({ theme }) => theme.viewitembg};

        .header {
          /* color: ; */
          font-size: 12px;
          margin-bottom: 22px;

          p:first-child {
            flex: 3;
            text-align: left;
          }

          p {
            flex: 1;
            text-align: right;
          }
        }

        .item {
          margin-bottom: 10px;
          font-size: 13px;

          &:last-child {
            margin-bottom: 0;
          }

          p:first-child {
            flex: 3;
            text-align: left;
          }

          p {
            flex: 1;
            text-align: right;
          }
        }

        .empty {
          margin: 30px 10px;
          text-align: center;
        }
      }

      .inv-total {
        padding: 12px;
        color: ${({ theme }) => theme.generaltext};
        background-color: ${({ theme }) => theme.totalbg};
        align-items: center;
        border-radius: 0 0 20px 20px;

        p {
          flex: 1;
          font-size: 12px;
        }

        p:nth-child(2) {
          font-size: 16px;
          text-align: right;
        }
      }
    }
  }

  /* ======= MEDIA QUERIES ======= */
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
