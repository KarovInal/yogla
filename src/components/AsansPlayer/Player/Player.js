import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Timer from 'timer.js';
import Preload from './Preload';
import { Line } from 'rc-progress';

import Control from 'components/Control';

const PRELOAD_TIMER = 3;

const PlayerContentWrap = styled.div`
  width: 100%;
  height: 600px;
  max-width: 900px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  margin: 20px 0px;
  border-radius: 10px;
  overflow: hidden;
`;

class Player extends Component {
  static propTypes = {
    startBy: PropTypes.number,
    slidesById: PropTypes.object,
    slides: PropTypes.object.isRequired,
    Slide: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]).isRequired
  }

  componentDidMount() {
    this.startTimerPreload();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  constructor(props) {
    super(props);

    this.state = {
      isPlay: false,
      percent: 0,
      currentSlideId: this.props.startBy,
      isPreloadTimer: true,
      tickNumber: 1
    };
  }

  startTimerSlide = () => {
    const { currentSlideId } = this.state;
    const { slides } = this.props;

    this.timer = new Timer({
      tick: 1,
      ontick: this.onTick,
      onend: () => {
        if(this.nextSlide()) {
          this.startTimerSlide();
        }
      }
    });

    this.timer.start(slides[currentSlideId].delay / 1000);
  }

  startTimerPreload = () => {
    this.timer = new Timer({
      tick: 1,
      ontick: this.onTick,
      onend: this.endTimerPreload
    });

    if(this.state.isPlay) {
      this.timer.start(PRELOAD_TIMER);

      this.setState({
        isPreloadTimer: true,
        tickNumber: 1,
        isPlay: true
      });
    } else {
      this.setState({
        isPreloadTimer: true,
        tickNumber: 1,
        isPlay: false
      });
    }
  }

  endTimerPreload = () => {
    const { tickNumber } = this.state;

    this.setState({
      tickNumber: 1,
      isPreloadTimer: false,
      isPlay: true
    });

    this.startTimerSlide();
  }

  onTick = () => {
    let { tickNumber } = this.state;

    this.setState({
      tickNumber: tickNumber + 1
    });
  }

  playSlide = () => {
    if(this.state.isPreloadTimer) {
      this.timer.start(PRELOAD_TIMER);
      return;
    }

    this.timer.start();
    this.setState({
      isPlay: true
    })
  }

  pauseSlide = () => {
    this.timer.pause();
    this.setState({
      isPlay: false
    })
  }

  nextSlide = () => {
    const { slidesById } = this.props;
    const { currentSlideId } = this.state;

    const NEXT_SLIDE_ID = slidesById[currentSlideId].next || currentSlideId;

    this.setState(prevState => ({
      currentSlideId: NEXT_SLIDE_ID,
      tickNumber: 1
    }));

    return !(NEXT_SLIDE_ID == currentSlideId);
  }

  prevSlide = () => {
    const { slidesById } = this.props;
    const { currentSlideId } = this.state;

    const PREV_SLIDE_ID = slidesById[currentSlideId].prev || currentSlideId;

    this.setState({
      currentSlideId: PREV_SLIDE_ID,
      tickNumber: 1
    })

    return !(PREV_SLIDE_ID == currentSlideId);
  }

  onClickNextSlide = () => {
    if(this.nextSlide()) {
      this.clearTimer();
      this.startTimerPreload();
    }
  }

  onClickPrevSlide = () => {
    if(this.prevSlide()){
      this.clearTimer();
      this.startTimerPreload();
    }
  }

  clearTimer = () => {
    this.timer.off('all');
    this.timer.stop();
  }

  onPlay = (isPlay) => {
    this.setState({
      isPlay
    });

    if(isPlay) {
      this.playSlide();
    } else {
      this.pauseSlide();
    }
  }

  checkNext = () => {
    const { slidesById } = this.props;
    const { currentSlideId } = this.state;

    if(slidesById[currentSlideId].next == undefined) {
      return false;
    }

    return true;
  }

  checkPrev = () => {
    const { slidesById } = this.props;
    const { currentSlideId } = this.state;

    if(slidesById[currentSlideId].prev == undefined) {
      return false;
    }

    return true;
  }

  render() {
    const { Slide, slides, slidesById } = this.props;
    const {
      isPlay,
      tickNumber,
      isPreloadTimer,
      currentSlideId } = this.state;

    const TIME = isPreloadTimer
                  ? PRELOAD_TIMER
                  : slides[currentSlideId].delay / 1000;

    const percent = (tickNumber * 100) / TIME;

    return (
      <PlayerContentWrap>
        {
          isPreloadTimer && <Preload>{ tickNumber }</Preload>
        }

        <Line percent={percent} />

        <Slide {...slides[currentSlideId]} />

        <Control 
          onPlay = { this.onPlay }
          isPlay = { isPlay }
          isPlayable = { true }
          onNext = { this.onClickNextSlide }
          hasNext = { this.checkNext() }
          onPrev = { this.onClickPrevSlide }
          hasPrev = { this.checkPrev() }/>
      </PlayerContentWrap>
    );
  }
}

export default Player;
