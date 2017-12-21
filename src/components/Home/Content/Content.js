import React from 'react';
import styled from 'styled-components';

import AsansCardList from 'containers/AsansCardList';

const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  margin: 20px auto;
  max-width: 1000px;
  background-color: #fff;
  border-radius: 10px;
  border: solid rgba(255, 140, 0, 0.16) 1.5px;
  padding: 10px;
  box-sizing: border-box;
`;

const Content = () => (
  <ContentWrap>
    <AsansCardList />
  </ContentWrap>
);

export default Content;
