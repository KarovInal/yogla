import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HeaderSearch from './components/HeaderSearch';
import HeaderUser from './components/HeaderUser';
import HeaderLogin from './components/HeaderLogin';

import logo from './assets/img/logo.png';

const HeaderWrapContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: darkorange;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  max-width: 980px;
`;

const HeaderLogo = styled.a.attrs({
  target: '_blank',
  href: 'https://github.com/KarovInal/yogla'
})`
  color: white;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  line-height: 60px;
  vertical-align: middle;
  text-shadow: 0 0 3px black;
`;

const Logo = styled.img`
  height: 25px;
  vertical-align: sub;
  margin-right: 5px;
`;

const Header = ({ user }) => (
  <HeaderWrapContent>
    <HeaderContent>
      <HeaderLogo><Logo src={logo}/>Yogla.ru</HeaderLogo>
      <HeaderSearch />
      {
        user
          ? <HeaderUser {...user} />
          : <HeaderLogin />
      }
    </HeaderContent>
  </HeaderWrapContent>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    profile: PropTypes.string,
    avatar: PropTypes.string,
    bookmarks: PropTypes.string
  })
};

Header.defaultProps = {
  user: null
};

export default Header;
