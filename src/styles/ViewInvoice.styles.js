import styled from 'styled-components';

export const ViewInvoiceWrapper = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 40px 10px;

  a {
    text-decoration: none;
  }

  .m-menu {
    display: none;
  }

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

  .back {
    color: ${({ theme }) => theme.generaltext};
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
        p:first-child {
          font-size: 20px;
          text-transform: uppercase;
          margin-bottom: 5px;
          color: ${({ theme }) => theme.generaltext};
        }

        p:nth-child(2) {
          font-size: 16px;
          color: ${({ theme }) => theme.sectext};
        }

        span {
          font-size: 12px;
          color: #888eb0;
        }
      }

      .col-right {
        font-size: 12px;
        align-items: flex-end;
        text-align: end;
        color: ${({ theme }) => theme.sectext};
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
        color: ${({ theme }) => theme.sectext};
      }

      .payment,
      .bill {
        flex: 1;
      }

      .bill {
        p:not(:first-child) {
          color: ${({ theme }) => theme.sectext};
          font-size: 12px;
        }

        p:nth-child(2) {
          font-size: 15px;
          color: ${({ theme }) => theme.generaltext};
        }
      }

      .send-to {
        flex: 2;

        p {
          color: ${({ theme }) => theme.generaltext};
        }
      }
    }

    .third {
      margin-top: 20px;

      .inv-items {
        padding: 32px;
        border-radius: 20px 20px 0 0;
        background-color: ${({ theme }) => theme.viewitembg};

        .header {
          color: ${({ theme }) => theme.sectext};
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
            color: ${({ theme }) => theme.generaltext};
          }
        }

        .empty {
          margin: 30px 10px;
          text-align: center;

          p {
            font-size: 14px;
          }
        }
      }

      .inv-total {
        padding: 12px;
        color: #fff;
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

    .m-menu {
      display: block;
      background-color: ${({ theme }) => theme.viewmenu};
      margin: 20px 0 0;
      padding: 20px 10px;
      border-radius: 8px;
      font-size: 12px;
      align-items: center;

      .flex {
        justify-content: space-around;
        margin-bottom: 15px;
      }

      .print {
        width: 100%;
      }
    }

    .menu {
      border-radius: 8px;

      .right {
        display: none;
      }
    }

    .invoice-info {
      padding: 20px;
      border-radius: 8px;

      /* First */
      .m1-flex {
        flex-direction: column;

        .col-left {
          p:first-child {
            font-size: 16px;
          }
        }

        .col-right {
          text-align: left;
        }
      }

      /* Second */
      .m2-flex {
        flex-direction: column;
        margin-top: 10px;
        gap: 10px;
      }

      /* Third */
      .inv-items {
        .header {
          display: none;
        }
      }
    }
  }
`;
