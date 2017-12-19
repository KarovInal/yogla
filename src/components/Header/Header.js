import React from 'react';
import styled from 'styled-components';

import HeaderSearch from './components/HeaderSearch';
import HeaderUser from './components/HeaderUser';

const USER_INFO = {
  icon: 'https://avatars1.githubusercontent.com/u/11422713?s=400&u=388b032b54b964dd80b28eb9ce3ac31e92226ea4&v=4',
  link: 'https://github.com/KarovInal'
};

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

const Header = () => {
  return (
    <HeaderWrapContent>
      <HeaderContent>
        <HeaderLogo>Yogla.ru</HeaderLogo>
        <HeaderSearch />
        <HeaderUser user={USER_INFO}/>
      </HeaderContent>
    </HeaderWrapContent>
  );
}

export default Header;
