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



