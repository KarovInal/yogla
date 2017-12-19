import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import AsansCardList from './AsansCardList';

injectGlobal`
    body {
        font-family: Comfortaa;
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

function App(props) {
    return (
        <ThemeProvider theme={theme}>
            <AsansCardList />
        </ThemeProvider>
    )
}

export default App;