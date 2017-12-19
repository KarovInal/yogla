import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const HeaderUser = ({ user }) => {
  return (
    <UserWrapContainer>
      <a target='_blank' href={user.link}>
        <UserIcon src={user.icon} />
      </a>
      {/* <DropDown itemList={Item} listData={[{}, {}]} /> */}
    </UserWrapContainer>
  );
}

HeaderUser.propTypes = {
  icon: PropTypes.string
}

export default HeaderUser;
