import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import timeConversion from 'utils/timeConversion';

const AsanItemWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px 0px;
    padding: 3px;
    box-sizing: border-box;
    background-color: #fefefe;
    border-radius: 5px;
    box-shadow: 0 5px 10px -6px #474747;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        box-shadow: 0 5px 20px -6px #474747;
    }
`;

const AsanImage = styled.img`
    height: 30px;
    width: auto;
    margin: 0 10px;
`;

const AsanInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const AsanLabel = styled.p`
    font-size: 16px;
    font-weight: bolder;
`;

const AsanTime = styled.p`
    font-size: 14px;
    font-weight: 100;    
`;

function AsanItem({ iconAsan, titleAsan, delayAsan }) {
    return (
        <AsanItemWrap>
            <AsanImage src={ iconAsan } />
            <AsanInfoWrap>
                <AsanLabel>{ titleAsan }</AsanLabel>
                <AsanTime>{ timeConversion(delayAsan) }</AsanTime>
            </AsanInfoWrap>
        </AsanItemWrap>
    );
}

AsanItem.propTypes = {
    delayAsan: PropTypes.number,
    titleAsan: PropTypes.string,
    iconAsan: PropTypes.string
}

export default AsanItem;
