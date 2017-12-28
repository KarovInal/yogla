import React from 'react';
import styled from 'styled-components';

const noop = () => {};

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin: 0 5px;
  border: none;
  background-color: #f1f1f1;
  border-radius: 50%;
  opacity: ${props => props.isEnabled ? '1' : '.4'};
  cursor: ${props => props.isEnabled ? 'pointer' : 'default'};
`;

const Button = ({ isEnabled, onClick, children }) =>
  <ButtonStyle isEnabled={ isEnabled } onClick={ isEnabled ? onClick : noop }>
    { children }
  </ButtonStyle>

export default Button;