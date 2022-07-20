import React from 'react';
import { NavLink } from 'react-router-dom';
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

const Header = ({ theme, themeToggler }) => {
  // const [theme, themeToggler] = useDarkMode();

  return (
    <HeaderWrapper>
      <HeaderBrand>
        <NavLink to="/">
          <HeaderImg src={logo} alt="Brand_Image" />
        </NavLink>
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
