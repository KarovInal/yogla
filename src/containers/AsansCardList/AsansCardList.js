import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import AsansCardList from 'components/AsansCardList';

let getAsansCardList = (state) => state.asansCardList;
let getAsansCardData = (state) => state.asansCardData;
let getAsansData = (state) => state.asansData;

let createAsansData = createSelector(
    [getAsansCardList, getAsansCardData, getAsansData],
    (asansCardList, asansCardData, asansData) => {
        return asansCardList.map(cardId => {
            return {
                ...asansCardData[cardId],
                asans: asansCardData[cardId].asans.map(asanItem => {
                    return {
                        ...asanItem,
                        ...asansData[asanItem.id]
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