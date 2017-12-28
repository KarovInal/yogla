import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SlideWrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Slide = ({label, image}) => (
  <SlideWrap image={image} />
);

Slide.propTypes = {
  label: PropTypes.string,
  image: PropTypes.string
}

export default Slide;
