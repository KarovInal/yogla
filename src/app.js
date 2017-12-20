import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import store from 'config/store';

import Home from 'components/Home';

injectGlobal`
    body {
        font-family: Comfortaa;
        margin: 0px;
    }
    
    p, div, h1, h2, h3, h4, h5, h6 {
      margin: 0px;
    }
`;


render(
  <Provider store={ store }>
    <Home />
  </Provider>,
  document.getElementById('app')
);
