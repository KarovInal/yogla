import React from 'react';
import styled from 'styled-components';
import Contacts from './Contacts';

const FooterWrapContent = styled.div`
  width: 100%;
  padding: 20px 0 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: darkorange;
`;

const DescriptionProject = styled.p`
  font-size: 14px;
  max-width: 400px;
  text-align: center;
  color: white;
`;

const Author = styled.a.attrs({
  target: "_blank"
})`
  margin: 10px 0px;
  color: white;
  font-size: 15px;
  font-weight: 900;
  font-style: italic;
  text-decoration: none;
`;

const Footer = () => (
  <FooterWrapContent>
    <DescriptionProject>
      YOGLA - это приложения для занятия йогой. 
      Мы собрали лучшие подборки асан под разные тематики.
      Выбири подходящую подборку, и начни заниматься прямой сейчас!
    </DescriptionProject>
    <Author href="https://t.me/ikarov">dev: @ikarov</Author>
    <Contacts />
  </FooterWrapContent>
);

export default Footer;
