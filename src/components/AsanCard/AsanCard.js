import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    AsanDetailsWrap,
    AsanPreviw,
    AsanCardWrap,
    AsanLabel,
    AsanDescription,
    AsanDelay,
    AsanComplexity
} from './style.js';

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
            preview,
            label,
            description,
            complexity,
            totalTime
        } = this.props;

        return (
            <AsanCardWrap>
                <AsanPreviw preview={preview} />
                <AsanDetailsWrap>
                    <AsanComplexity complexity={complexity}>{ complexity }</AsanComplexity>
                    <AsanDelay complexity={totalTime}>{ `${totalTime}m` }</AsanDelay>
                </AsanDetailsWrap>
                <AsanLabel>{ label }</AsanLabel>
                <AsanDescription>{ description }</AsanDescription>
            </AsanCardWrap>
        );
    }
}

export default AsanCard;