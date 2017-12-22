import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AsansTotalInfo from './AsansTotalInfo';

const ListAsansWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fa8e0b;
  color: white;
  overflow-y: auto;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
`;

class ListAsans extends Component {
  static propTypes = {
    totalTime: PropTypes.number,
    asans: PropTypes.arrayOf(
      PropTypes.shape({
        titleAsan: PropTypes.string.isRequired,
        descriptionAsan: PropTypes.string.isRequired,
        imageAsan: PropTypes.string.isRequired,
        iconAsan: PropTypes.string.isRequired,
        voiceAsan: PropTypes.string.isRequired,
        delayAsan: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
  };

  static defaultProps = {
    totalTime: null
  };

  render() {
    let { asans, totalTime } = this.props;

    const NUMBER_OF_ASANS = asans.length;

    return (
      <ListAsansWrap>
        <AsansTotalInfo totalTime={totalTime} numberOfAsans={NUMBER_OF_ASANS} />
      </ListAsansWrap>
    );
  }
}

export default ListAsans;
