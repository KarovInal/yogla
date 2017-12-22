import React from 'react';
import styled from 'styled-components';

const DescriptionAsansWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 10px;
  box-sizing: border-box;
`;

const DescriptionAsans = () => (
  <DescriptionAsansWrap>
    <p>DESCRIPTION ASANS</p>
  </DescriptionAsansWrap>
);

export default DescriptionAsans;
