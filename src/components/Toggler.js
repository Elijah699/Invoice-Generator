import React from "react";
import { func, string } from 'prop-types';
import styled from "styled-components";


// icons
import sunicon from '../assets/icons8-sun.svg';
import moonicon from '../assets/icon-moon.svg';

// styles
const Button = styled.button`
  background: #1e2139;
  border: none;
  cursor: pointer;
`;

const TogglerImg = styled.img`
  width: auto;
`;



const Toggle = ({theme, toggleTheme}) => {

  const icon = theme === 'light' ? moonicon : sunicon;
    return (
      <Button onClick={toggleTheme}>
        <TogglerImg src={icon} alt={icon} />
      </Button>
    );
}


Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle;