import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Timer from 'timer.js';

import Control from 'components/Control';

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

const PreloadTimer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  color: black;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
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
    this.preloadTimer();
  }

  constructor(props) {
    super(props);

    this.state = {
      isPlay: true,
      currentSlideId: this.props.startBy,
      isPreloadTimer: true,
      tickNumber: 1
    };
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startSlide = () => {
    const { currentSlideId } = this.state;
    const { slides } = this.props;

    this.timer = new Timer({
      onend: () => {
        if(this.nextSlide()) {
          this.startSlide();
        }
      }
    });

    this.timer.start(slides[currentSlideId].delay / 1000);
  }

  preloadTimer = () => {
    this.timer = new Timer({
      tick: 1,
      ontick: this.onTick,
      onend: this.preloadTimerEnd
    });

    this.timer.start(3);

    this.setState({
      isPreloadTimer: true,
      tickNumber: 1,
      isPlay: true
    })
  }

  preloadTimerEnd = () => {
    this.setState({
      tickNumber: 1,
      isPreloadTimer: false,
      isPlay: true
    });

    this.startSlide();
  }

  onTick = () => {
    let { tickNumber } = this.state;

    this.setState({
      tickNumber: tickNumber + 1
    });
  }

  playSlide = () => {
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
      currentSlideId: NEXT_SLIDE_ID
    }));

    return !(NEXT_SLIDE_ID == currentSlideId);
  }

  prevSlide = () => {
    const { slidesById } = this.props;
    const { currentSlideId } = this.state;

    const PREV_SLIDE_ID = slidesById[currentSlideId].prev || currentSlideId;

    this.setState({
      currentSlideId: PREV_SLIDE_ID
    })

    return !(PREV_SLIDE_ID == currentSlideId);
  }

  onClickNextSlide = () => {
    if(this.nextSlide()) {
      this.clearTimer();
      this.preloadTimer();
    }
  }

  onClickPrevSlide = () => {
    if(this.prevSlide()){
      this.clearTimer();
      this.preloadTimer();
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
      currentSlideId,
      tickNumber,
      isPreloadTimer,
      isPlay } = this.state;

    return (
      <PlayerContentWrap>
        {
          isPreloadTimer
            ? <PreloadTimer>{ tickNumber }</PreloadTimer>
            : null
        }

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
