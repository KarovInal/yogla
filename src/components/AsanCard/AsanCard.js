import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AsanCard extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        complexity: PropTypes.string.isRequired,
        totalTime: PropTypes.number.isRequired,
        asanas: PropTypes.arrayOf(PropTypes.shape({
            titleAsan: PropTypes.string.isRequired,
            descriptionAsan: PropTypes.string.isRequired,
            imageAsan: PropTypes.string.isRequired,
            iconAsan: PropTypes.string.isRequired,
            voiceAsan: PropTypes.string.isRequired,
            delayAsan: PropTypes.number.isRequired
        }))
    };
    
    render() {
        return (
            <div>Asan Card</div>
        );
    }
}

export default AsanCard;