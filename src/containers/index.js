import React from 'react';
import styled from 'styled-components';
import AsansCardList from 'components/AsansCardList';

let AppWrap = styled.div`
    font-family: "Comfortaa"
`

function App(props) {
    return (
        <AppWrap>
            <AsansCardList />
        </AppWrap>
    )
}

export default App;