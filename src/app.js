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
        background-color: rgba(153, 153, 153, 0.02);
    }
    
    p, div, h1, h2, h3, h4, h5, h6 {
      margin: 0px;
    }
`;

const theme = {
    complexity: {
        light: {
            'color': 'black',
            'background-color': 'lightgreen'
        },
        middle: {
            'color': 'black',
            'background-color': 'coral'
        },
        hard: {
            'color': 'white',
            'background-color': 'crimson'
        }
    }
};

render(
  <Provider store={ store }>
    <ThemeProvider theme={theme}>
      <Home />  
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);
