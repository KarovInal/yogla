import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import AsansCardList from 'components/AsansCardList';

let AppWrap = styled.div`
    font-family: "Comfortaa"
`

const theme = {
    complexity: {
        hard: {
            color: 'black',
            backgroundColor: 'red'
        },
        light: {
            color: 'black',
            backgroundColor: 'skyblue'
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