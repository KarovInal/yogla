import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Preview from './Preview';
import Player from './Player';
import Slide from './Slide';

let AsansPlayerWrap = styled.div`
    position: fixed;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    background-color: rgba(0,0,0,.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export default class AsansPlayer extends Component {
    static propTypes = {
        onClose: PropTypes.func,
        handlePlay: PropTypes.func,
        id: PropTypes.number.isRequired,
        labelCard: PropTypes.string.isRequired,
        previewCard: PropTypes.string.isRequired,
        descriptionCard: PropTypes.string.isRequired,
        complexityCard: PropTypes.string.isRequired,
        totalTimeCard: PropTypes.number.isRequired,
        asans: PropTypes.arrayOf(PropTypes.shape({
            titleAsan: PropTypes.string.isRequired,
            descriptionAsan: PropTypes.string.isRequired,
            imageAsan: PropTypes.string.isRequired,
            iconAsan: PropTypes.string.isRequired,
            voiceAsan: PropTypes.string.isRequired,
            delayAsan: PropTypes.number.isRequired
        })).isRequired
    }

    state = {
        isPlay: false
    }

    handlePlay = () => {
        this.setState({
            isPlay: true
        })
    }

    handleClose = ({ target }) => {
        if(this.wrapPlayer == target) this.props.onClose();
    }

    render() {
        let {
            labelCard,
            descriptionCard,
            asans
        } = this.props;

        const IS_PLAY = this.state.isPlay;

        return (
            <AsansPlayerWrap innerRef={wrapPlayer => this.wrapPlayer = wrapPlayer} onClick={this.handleClose}>
                {
                    IS_PLAY
                        ? <Player slides={asans} Slide={Slide} />
                        : <Preview { ...this.props } handlePlay={this.handlePlay} />
                }
            </AsansPlayerWrap>
        )
    }
}