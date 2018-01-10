import React from 'react';
import styled from 'styled-components';

const PreloadWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.71);
  position: absolute;
  top: 0;
  left: 0;
`;

const PreloadTimer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  color: black;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
`

const Preload = ({ children }) => (
  <PreloadWrap>
    <PreloadTimer>
      { children }
    </PreloadTimer>
  </PreloadWrap>
)

export default Preload;