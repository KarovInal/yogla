import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListAsans from './ListAsans';
import DescriptionAsans from './DescriptionAsans';

const PreviewContentWrap = styled.div`
  width: 100%;
  height: 600px;
  max-width: 900px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin: 20px 0px;
  border-radius: 10px;
  overflow: hidden;
`;

class Preview extends Component {
  static = {
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

  render() {
    const { 
      asans, 
      totalTimeCard, 
      labelCard, 
      descriptionCard,
      previewCard } = this.props;
    
    const DESCRIPTION_PROPS = {
      labelCard,
      previewCard,
      descriptionCard
    };

    return (
      <PreviewContentWrap>
        <ListAsans asans={ asans } totalTime={totalTimeCard} />
        <DescriptionAsans { ...DESCRIPTION_PROPS } />
      </PreviewContentWrap>
    );
  }
};

export default Preview;
