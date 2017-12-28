import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Play from './Play';
import Pause from './Pause';
import Prev from './Prev';
import Next from './Next';

const { bool, func } = PropTypes;

const noop = () => {};

const ControlWrap = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
`;

const ControlContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Control extends Component {
  static propTypes = {
    onPlay: func.isRequired,
    isPlay: bool,
    isPlayable: bool,
    onNext: func,
    hasNext: bool,
    onPrev: func,
    hasPrev: bool
  };

  static defaultProps = {
    isPlay: false,
    isPlayable: false,
    onNext: noop,
    hasNext: false,
    onPrev: noop,
    hasPrev: false
  };

  onPlay = () => {
    if(this.props.isPlayable) {
      this.props.onPlay(true);
    }
  };

  onPause = () => {
    this.props.onPlay(false);
  };

  render() {
    const {
      onPlay, isPlay, isPlayable,
      onPrev, hasPrev,
      onNext, hasNext
    } = this.props;
  
    return (
      <ControlWrap>
        <ControlContent>
          <Prev
            isEnabled = { hasPrev }
            onClick   = { onPrev } />

          {
            isPlay && isPlayable
              ? <Pause
                  isEnabled = { isPlayable }
                  onClick   = { this.onPause } />
              : <Play
                  isEnabled = { isPlayable }
                  onClick   = { this.onPlay } />
          }

          <Next
            isEnabled = { hasNext }
            onClick   = { onNext } />
        </ControlContent>
      </ControlWrap>
    );
  }
}

export default Control;
