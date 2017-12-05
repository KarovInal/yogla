import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

let AsansContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
`;

let AsansCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    width: 100%;
`;

let Label = styled.p`
    font-size: 20px;
`;

let Description = styled.p`
    font-size: 14px;
`;

export default class AsansPlayer extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        asanas: PropTypes.arrayOf(
            PropTypes.shape({
                titleAsan: PropTypes.isRequired,
                descriptionAsan: PropTypes.isRequired,
                imageAsan: PropTypes.isRequired,
                iconAsan: PropTypes.isRequired,
                voiceAsan: PropTypes.isRequired,
                delayAsan: PropTypes.isRequired
            })
        ).isRequired
    }

    render() {
        let {
            name,
            description,
            asanas
        } = this.props;

        return (
            <AsansContainer>
                <AsansCard>
                    <Label>{ name }</Label>
                    <Description>{ description }</Description>
                </AsansCard>
            </AsansContainer>
        )
    }
}