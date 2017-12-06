import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

let AsanCardWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 250px;
    &:hover {
        &::before {
            position: absolute;
            content: 'Play';
        }
    }
`;

let AsanLabel = styled.p`
    font-weight: bold;
    font-size: 18px;
`;

let AsanDescription = styled.p`
    font-weight: light;
    font-size: 16px;
`;


let AsanDelay = styled.div`
    color: black;
    background-color: gray;
    align-self: flex-end;
    max-width: 200px; 
    padding: 0 5px;
    border-radius: 10px;   
`;

let AsanComplexity = AsanDelay.extend`
    color: ${props => props.theme.complexity[props.complexity].color};
    background-color: ${props => props.theme.complexity[props.complexity].backgroundColor};
`;

class AsanCard extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        complexity: PropTypes.string.isRequired,
        totalTime: PropTypes.number.isRequired,
        asanas: PropTypes.arrayOf(PropTypes.shape({
            titleAsan: PropTypes.string.isRequired,
            descriptionAsan: PropTypes.string.isRequired,
            imageAsan: PropTypes.string.isRequired,
            iconAsan: PropTypes.string.isRequired,
            voiceAsan: PropTypes.string.isRequired,
            delayAsan: PropTypes.number.isRequired
        }))
    };

    render() {
        let {
            label,
            description,
            complexity,
            totalTime
        } = this.props;

        return (
            <AsanCardWrap>
                <AsanComplexity complexity={complexity}>{ complexity }</AsanComplexity>
                <AsanDelay complexity={totalTime}>{ totalTime }</AsanDelay>
                <AsanLabel>{ label }</AsanLabel>
                <AsanDescription>{ description }</AsanDescription>
            </AsanCardWrap>
        );
    }
}

export default AsanCard;