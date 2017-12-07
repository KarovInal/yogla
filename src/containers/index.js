import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import AsansCardList from 'components/AsansCardList';

let AppWrap = styled.div`
    font-family: "Comfortaa"
`

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
}

function App(props) {
    return (
        <ThemeProvider theme={theme}>
            <AppWrap>
                <AsansCardList />
            </AppWrap>
        </ThemeProvider>
    )
}

export default App;