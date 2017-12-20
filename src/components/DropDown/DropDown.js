import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import up from './assets/img/up.png';
import down from './assets/img/down.png';

const POSITION = {
  bottomLeft:  { top: '100%', right: '0px' },
  bottomRight: { top: '100%', left: '0px' },
  topLeft:     { bottom: '100%', right: '0px' },
  topRight:    { bottom: '100%', left: '0px' },
}

const DropDownWrap = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  position: relative;
`;

const DropDownList = styled.div`
  display: flex;
  width: 150px;
  max-width: 150px;
  margin: 5px 0px;
  flex-direction: column;
  border: solid beige 1.5px;
  background-color: gainsboro;
  border-radius: 4px;
  position: absolute;
  ${props => props.position}
`;

const DropDownControl = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.isOpen ? up : down});
  background-size: 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

class DropDown extends Component {
  static propTypes = {
    componentList: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]).isRequired,
    listData: PropTypes.array,
    position: PropTypes.string
  };

  static defaultProps = {
    position: 'bottomLeft'
  };

  state = {
    isOpen: false
  };

  handleControl = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  rendererListData() {
    let { listData, componentList: ComponentList } = this.props;
    
    return listData.map((itemData, index) => <ComponentList key={index} {...itemData} />);
  }

  render() {
    let { position } = this.props;
    let { isOpen } = this.state;

    const rendererListData = this.rendererListData();

    return (
      <div>
        <DropDownWrap>
          <DropDownControl onClick={this.handleControl} isOpen={isOpen}/>
          {
            isOpen
              ? <DropDownList position={POSITION[position]}>
                  { rendererListData }
                </DropDownList>
              : null
          }
        </DropDownWrap>
      </div>
    );
  }
}

export default DropDown;
