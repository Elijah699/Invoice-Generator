import React from "react";
import { func, string } from 'prop-types';

// styles
import { Button, TogglerImg } from "../styles/TogglerButton.styles";

// icons
import sunicon from '../assets/icons8-sun.svg';
import moonicon from '../assets/icon-moon.svg';


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