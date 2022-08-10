import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  padding: 40px 10px;

  .home-nav {
    display: flex;
  }

  .home-nav-left {
    flex: 1;
  }

  .home-title {
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: 600;
  }

  .home-title-span {
    font-size: 12px;
    font-weight: 300;
  }

  .home-nav-right {
    flex: 1;
    justify-content: flex-end;
    display: flex;
    margin-top: 10px;
  }

  /* ====== Filter ======= */
  .filter-div {
    padding-top: 10px;
    cursor: pointer;
    position: relative;

    .filter {
      font-size: 12px;
      font-weight: 300;
    }

    img {
      margin-left: 3px;
    }

    ul {
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

      li {
        font-size: 12px;
        font-weight: 300;
        cursor: pointer;
        padding: 10px;
        text-align: center;

        &:hover {
          background: ${({ theme }) => theme.generaltext};
          color: ${({ theme }) => theme.inputbg};
        }
      }
    }
  }
  /* ======= End of Filter ======= */

  .inv-btn-div {
    margin-left: 50px;

    @media (max-width: 576px) {
      margin-left: 20px;
    }
  }

  .new-inv {
    border-radius: 40px;
    background-color: #7c5dfa;
    padding: 10px;
    color: #fff;
    cursor: pointer;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .plus-icon {
    border-radius: 50%;
    background-color: #fff;
    margin-right: 5px;
    padding: 4px;
    justify-content: center;
  }

  /* ======= End of HOME NAV ======= */

  .invoice-item {
    margin-top: 30px;
  }

  .empty {
    text-align: center;
    margin-top: 80px;

    h3 {
      font-size: 20px;
      margin-top: 40px;
    }

    p {
      font-size: 12px;
      font-weight: 300;
      margin-top: 16px;
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

    .home-title {
      font-size: 24px;
    }

    .sm-none {
      display: none;
    }
  }
`;
