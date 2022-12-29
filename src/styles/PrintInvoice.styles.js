import styled from "styled-components";
// import bgBlob from '../assets/blob.svg'


export const PrintWrapper = styled.div`
  background-color: #fefefe;
  color: #000;

  .blue-one,
  .blue-two {
    background-color: #2f80ed;
    height: 10vh;
    width: 100%;
  }

  h2 {
    text-align: center;
    color: #000;
  }

  .blue {
    color: #2f80ed;
  }

  .info {
    padding: 0.5rem 2rem;

    .first {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      p, h5 {
        margin-block-end: 0;
        margin-block-start: 0;
      }

      p {
        font-size: 14px;
      }

      .caps {
        text-transform: uppercase;
      }
    }

    .second {
        margin: 3rem 0 1.5rem;

        table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid #fff;
            th {
                background: #315491;
                border: 1px solid #e4e4e4;
                color: #fff;
                padding: 0.5rem;
                text-align: center;
            }
            td {
                padding: 0.5rem;
                border: 1px solid #e4e4e4;
                background-color: #d8d8d8;
                text-align: center;

                &:first-child {
                    text-align: left;
                }
            }
        }
    }

    .third {
        text-align: right;
    }
  }
`;