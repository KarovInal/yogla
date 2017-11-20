import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import './style.css';

let Yogla = styled.h1`
  font-family: sans-serif;
  color: black;
`;

render(
  <Yogla>Yogla.io</Yogla>,
  document.getElementById('app')
);