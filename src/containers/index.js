import React from 'react';
import AsansPlayer from 'components/AsansPlayer';
import styled from 'styled-components';

import AsansData from '../../data/asansData.json';

let AppContainer = styled.div`
`

export default function App(props) {
    return (
        <AppContainer>
            <AsansPlayer {...AsansData}/>
        </AppContainer>
    )
}