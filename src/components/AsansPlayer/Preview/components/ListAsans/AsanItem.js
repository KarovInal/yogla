import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AsanItemWrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 5px 0px;
    background-color: #eee;
`;

const AsanImage = styled.img`
    height: 20px;
    width: auto;
`;

const AsanInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const AsanLabel = styled.p`
    font-size: 16px;
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
                <AsanTime>{ delayAsan }</AsanTime>
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
