import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import timeConversion from 'utils/timeConversion';

const AsansTotalInfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoLabel = styled.p`
  font-size: 12px;
  font-weight: 100;
`;

const InfoValue = styled.h2`
  font-style: italic;
`;

const AsansTotalInfo = ({ totalTime, numberOfAsans }) => {
  const CONVERT_TO_TIME = timeConversion(totalTime);

  return (
    <AsansTotalInfoWrap>
      <InfoWrap>
        <InfoValue>{CONVERT_TO_TIME}</InfoValue>
        <InfoLabel>Время</InfoLabel>
      </InfoWrap>
      <InfoWrap>
        <InfoValue>{numberOfAsans}</InfoValue>
        <InfoLabel>Всего поз</InfoLabel>
      </InfoWrap>
    </AsansTotalInfoWrap>
  );
};

AsansTotalInfo.propTypes = {
  totalTime: PropTypes.number.isRequired,
  numberOfAsans: PropTypes.number.isRequired
}

AsansTotalInfo.defaultProps = {
  totalTime: 0,
  numberOfAsans: 0
};

export default AsansTotalInfo;
