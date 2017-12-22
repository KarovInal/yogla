import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    AsanDetailsWrap,
    AsanPreviw,
    AsanCardWrap,
    AsanLabel,
    AsanDescription,
    AsanDelay,
    AsanComplexity,
    AsanStart
} from './style.js';

class AsanCard extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        labelCard: PropTypes.string.isRequired,
        descriptionCard: PropTypes.string.isRequired,
        previewCard: PropTypes.string.isRequired,
        totalTimeCard: PropTypes.number.isRequired,
        onClickStart: PropTypes.func
    };

    static defaultProps = {
        onClickStart: new Function
    };
    
    render() {
        let {
            id,
            previewCard,
            labelCard,
            descriptionCard,
            complexityCard,
            totalTimeCard,
            onClickStart
        } = this.props;

        return (
            <AsanCardWrap>
                <AsanPreviw preview={previewCard} />
                <AsanDetailsWrap>
                    <AsanComplexity complexity={complexityCard}>{ complexityCard }</AsanComplexity>
                    <AsanDelay>{ `${ totalTimeCard }m` }</AsanDelay>
                </AsanDetailsWrap>
                <AsanLabel>{ labelCard }</AsanLabel>
                <AsanDescription>{ descriptionCard }</AsanDescription>
                <AsanStart onClick={() => onClickStart(id)}>Начать</AsanStart>
            </AsanCardWrap> 
        );
    }
}

export default AsanCard;