import React from 'react';
// import { string } from 'prop-types'
// import { useDarkMode } from './useDarkMode';
import Toggle from './Toggler';

// icons
import logo from '../assets/file-invoice-dollar-solid.png';

// styles
import {
  HeaderWrapper,
  HeaderBrand,
  HeaderImg,
  HeaderToggler,
} from '../styles/Header.styles';

const Header = ({theme, themeToggler}) => {
  // const [theme, themeToggler] = useDarkMode();

  return (
    <HeaderWrapper>
      <HeaderBrand>
        <HeaderImg src={logo} alt="Brand_Image" />
      </HeaderBrand>
      <HeaderToggler>
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </HeaderToggler>
    </HeaderWrapper>
  );
};

// Header.propTypes = {
//     themeMode: string.isRequired
// }


export default Header;
