import React from 'react';
import AsansPlayer from 'components/AsansPlayer';
import styled from 'styled-components';

import AsansData from '../../data/asansData.json';

export default function App(props) {
    return (
        <div>
            <AsansPlayer {...AsansData}/>
        </div>
    )
}