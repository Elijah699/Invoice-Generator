import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: #1e2139;
  display: flex;
  flex-direction: column;
  z-index: 99;
  border-radius: 0 20px 20px 0;
  position: fixed;
  height: 100%;
  width: 85px;

  @media(max-width: 829px) {
    position: relative;
      flex-direction: row;
      width: 100%;
      height: 85px;
      border-radius: 0;
  }
`;

export const HeaderBrand = styled.div`
  background-color: #7c5dfa;
  border-radius: 0 20px 20px 0;
  justify-content: center;
  padding: 20px;
`;

export const HeaderImg = styled.img`
  width: auto;
  height: 30px;
`;


export const HeaderToggler = styled.div`
padding: 25px;
margin-top: auto;
border-top: 1px solid #777f98;
margin-bottom: 30px;

@media(max-width: 768px) {
    margin-left: auto;
}
`;