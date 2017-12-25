import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AsansTotalInfo from './AsansTotalInfo';
import AsanItem from './AsanItem';

const WrapAsansList = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffc87e;
  color: black;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
`;

const AsansList = styled.div`
    width: 100%;
    margin-top: 20px;
    padding-bottom: 10px;
    overflow: hidden;
    overflow-y: auto;
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
    const LIST_OF_ASANS = asans.map(asan => (
        <AsanItem key={asan.id} {...asan} />
    ));

    return (
      <WrapAsansList>
        <AsansTotalInfo totalTime={totalTime} numberOfAsans={NUMBER_OF_ASANS} />
        <AsansList>
            {
                LIST_OF_ASANS
            }
        </AsansList>
      </WrapAsansList>
    );
  }
}

export default ListAsans;
