import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import AsansCardList from 'components/AsansCardList';

let getAsansCardList = (state) => state.asanCardListId;
let getAsansCardData = (state) => state.asanCardData;
let getAsansData = (state) => state.asanData;

let createAsansData = createSelector(
    [getAsansCardList, getAsansCardData, getAsansData],
    (asanCardListId, asanCardData, asanData) => {
        return asanCardListId.map(cardId => {
            return {
                ...asanCardData[cardId],
                totalTimeCard: asanCardData[cardId].asans.reduce((totalTime, asanItem) => asanItem.delayAsan + totalTime, 0),
                asans: asanCardData[cardId].asans.map(asanItem => {
                    return {
                        ...asanItem,
                        ...asanData[asanItem.id]
                    }
                })
            }
        })
    }
);

function mapStateToProps(state) {
    return {
        cardListData: createAsansData(state)
    }
}

export default connect(mapStateToProps)(AsansCardList);