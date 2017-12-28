import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import play from './assets/img/play.png';

const DescriptionAsansWrap = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgba(0,0,0,.2);

  &:before {
    content: "";
    position: absolute;
    width: 110%;
    height: 110%;
    z-index: -1;
    width: 110%;
    height: 110%;
    background-image: url(${props => props.previewCard});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(10px);
  }
`;

const DescriptionContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conetnt: center;
`;

const Label = styled.h2`
`;

const Description = styled.p`
  margin: 10px 0px;
  text-align: center;
`;

const Play = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  margin-top: 10px;
  background: linear-gradient(45deg, #FF5722, #673AB7);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 10px 40px -10px #FF5722;
  transition: all .2s;

  &:hover {
    box-shadow: 0 10px 50px -7px #FF5722;
  }

  &:after {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    margin: auto;
    background-image: url(img/play.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

class DescriptionAsans extends Component {
  static propTypes = {
    labelCard: PropTypes.string,
    previewCard: PropTypes.string,
    descriptionCard: PropTypes.string,
    handlePlay: PropTypes.func
  };

  static defaultProps = {
    labelCard: 'labelCard is empty',
    descriptionCard: 'descriptionCard is empty'
  }

  render() {
    const { labelCard, descriptionCard, previewCard, handlePlay } = this.props;

    return (
      <DescriptionAsansWrap previewCard={ previewCard }>
        <DescriptionContentWrap>
          <Label>{ labelCard }</Label>
          <Description>{ descriptionCard }</Description>
          <Play onClick={ handlePlay }/>
        </DescriptionContentWrap>
      </DescriptionAsansWrap>
    );
  }
}

export default DescriptionAsans;
