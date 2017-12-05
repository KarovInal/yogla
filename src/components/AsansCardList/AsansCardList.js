import React, { Component } from 'react';
import AsanCard from '../AsanCard';

import AsansData from 'Data/asansData.json';

class AsansCardList extends Component {
    generateListAsans() {
        return AsansData.map(asansGroup => 
            <AsanCard key={asansGroup.id} {...asansGroup} />
        );
    }
    render() {
        let ListAsans = this.generateListAsans();
        
        return (
            <div>
                { ListAsans }
            </div>
        )
    }
}

export default AsansCardList;