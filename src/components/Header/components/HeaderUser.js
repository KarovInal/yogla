import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DropDown from 'components/DropDown';

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

function generateUserDropDown(user) {
  const LIST_DATA = [
    { label: 'Профиль', link: user.profile },
    { label: 'Закладки', link: user.bookmarks },
    { label: 'Выход', link: '#' }
  ];

  return LIST_DATA;
};

const HeaderUser = (props) => (
  <UserWrapContainer>
    <a target='_blank' href={props.profile}>
      <UserIcon src={props.avatar} />
    </a>
    <DropDown componentList={ComponentList} listData={generateUserDropDown(props)} />
  </ UserWrapContainer>
);

HeaderUser.propTypes = {
  name: PropTypes.string,
  profile: PropTypes.string,
  avatar: PropTypes.string,
  bookmarks: PropTypes.string
};

HeaderUser.defaultProps = {
  name: 'user_none',
  profile: 'profle_none',
  avatar: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Worried_Face_Emoji_12fa1bbf-0297-4818-8298-d6c1a588c341_large.png?v=1480481058',
  bookmarks: 'bookmarks_none'
};

export default HeaderUser;
