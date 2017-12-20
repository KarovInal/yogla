import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DropDown from 'components/DropDown';

const LIST_DATA = [
  { label: 'Профиль', link: 'https://github.com/KarovInal' },
  { label: 'Закладки', link: 'https://github.com/KarovInal?tab=stars' },
  { label: 'Выход', link: '#' }
]

const UserWrapContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  border: solid white 1px;
  box-sizing: border-box;
  border-radius: 50%;
  &:hover {
    box-shadow: 0 5px 10px -5px black;
  }
`;

const Link = styled.a`
  color: black;
  font-size: 16px;
  padding: 2px 2px 2px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: solid rgba(0, 0, 0, 0.16) 1px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  };
  &:last-child {
    border-bottom: none;
  }
`;

const ComponentList = (({ label, link }) => {
  return (
    <Link target="_blank" href={link}>{ label }</Link>
  );
});

const HeaderUser = ({ user }) => {
  return (
    <UserWrapContainer>
      <a target='_blank' href={user.link}>
        <UserIcon src={user.icon} />
      </a>
      <DropDown componentList={ComponentList} listData={LIST_DATA} />
    </UserWrapContainer>
  );
}

HeaderUser.propTypes = {
  icon: PropTypes.string
}

export default HeaderUser;
