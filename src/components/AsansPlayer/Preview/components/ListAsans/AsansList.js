import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AsanItem from './AsanItem';

const AsansListWrap = styled.div`
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
`;

const AsansList = ({ asans }) => {
    const LIST_OF_ASANS = asans.map(asan => (
        <AsanItem key={asan.id} {...asan} />
    ));

    return(
        <AsansListWrap>
            {
                LIST_OF_ASANS
            }
        </AsansListWrap>
    );
};

AsansList.propTypes = {
    asans: PropTypes.array.isRequired
}

export default AsansList;
