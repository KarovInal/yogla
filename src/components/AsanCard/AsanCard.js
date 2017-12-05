import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

let AsanCardWrap = styled.div`
    width: 100%;
    max-width: 250px;
`;

let AsanLabel = styled.p`
    font-weight: bold;
    font-size: 18px;
`;

let AsanDescription = styled.p`
    font-weight: light;
    font-size: 16px;
`;

let AsanComplexity = styled.div`
    color: ${props => props.theme.complexity[props.complexity].color};
    background-color: ${props => props.theme.complexity[props.complexity].backgroundColor}
`

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
            complexity
        } = this.props;

        return (
            <AsanCardWrap>
                <AsanLabel>{ label }</AsanLabel>
                <AsanDescription>{ description }</AsanDescription>
                <AsanComplexity complexity={complexity}>{ complexity }</AsanComplexity>
            </AsanCardWrap>
        );
    }
}

export default AsanCard;