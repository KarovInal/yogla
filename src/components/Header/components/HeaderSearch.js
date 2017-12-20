import React from 'react';
import styled from 'styled-components';

const SearchWrapContent = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input.attrs({
  placeholder: 'Найти позу...'
})`
  border: none;
  border-radius: 5px 0 0 5px;
  height: 25px;
  width: 250px;
  background-color: floralwhite;
  padding-left: 10px;
  box-sizing: border-box;
`;

const SearchSendButton = styled.button`
  height: 25px;
  border: none;
  background-color: floralwhite;
  border-radius: 0 5px 5px 0;
  border-left: 1px solid black;
  font-weight: 700;
`;

const HeaderSearch = () => {
  return (
    <SearchWrapContent>
      <SearchInput />
      <SearchSendButton>Найти</SearchSendButton>
    </SearchWrapContent>
  );
};

export default HeaderSearch;
