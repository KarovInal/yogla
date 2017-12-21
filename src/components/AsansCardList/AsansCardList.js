import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AsanCard from '../AsanCard';
import AsanPlayer from 'components/AsansPlayer';

const AsansCardListWrap = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    max-width: 1000px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-center;
`;

class AsansCardList extends Component {
    static propTypes = {
        cardListData: PropTypes.arrayOf(PropTypes.shape({
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
        })).isRequired
    };

    static childContextTypes = {
        onPickedAsan: PropTypes.func
    };

    getChildContext() {
        return {
            onPickedAsan: this.onPickedAsan
        }
    };

    state = {
        pickedAsan: null
    };

    generateListAsans() {
        let { cardListData } = this.props;

        return cardListData.map(asansGroup =>
            <AsanCard key={asansGroup.id} {...asansGroup} />
        );
    };

    generateAsanPlayer() {
        let { pickedAsan } = this.state;
        let { cardListData } = this.props;

        if (!pickedAsan) return null;

        let asanCardObject = cardListData.filter(({ id }) => id == pickedAsan)[0];

        return (
            <AsanPlayer {...asanCardObject} />
        )
    };

    onPickedAsan = (id) => {
        this.setState(prevState => {
            return {
                ...prevState,
                pickedAsan: id
            }
        })
    };

    render() {
        let ListAsans = this.generateListAsans();
        let DisplayAsanPlayer = this.generateAsanPlayer();

        return (
            <AsansCardListWrap>
                {ListAsans}
                {DisplayAsanPlayer}
            </AsansCardListWrap>
        )
    }
}

export default AsansCardList;