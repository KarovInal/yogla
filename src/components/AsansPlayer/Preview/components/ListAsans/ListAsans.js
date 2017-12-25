import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AsansTotalInfo from './AsansTotalInfo';
import AsansList from './AsansList';

const ListAsansWrap = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #fefefe;
  color: black;
  overflow-y: auto;
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
        <AsansList asans={asans} />
      </ListAsansWrap>
    );
  }
}

export default ListAsans;
