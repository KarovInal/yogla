import React from 'react';
import styled from 'styled-components';

import github from './assets/img/github.png';
import twitter from './assets/img/twitter.png';
import telegram from './assets/img/telegram.png';

const ContactsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const ContactItem = styled.a.attrs({
  target: "_blank"
})`
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  opacity: .5;
  transition: opacity .5s;
  &: hover {
    opacity: 1;
  }
`;

const ContactItemImg = styled.img`
  height: 35px;
`;

const ContactItemLabel = styled.p`
  margin-top: 4px;
  font-size: 13px;
  color: black;
`;

const Contacts = () => (
  <ContactsWrap>
    <ContactItem href="https://github.com/KarovInal/yogla">
      <ContactItemImg src={github} />
      <ContactItemLabel>github</ContactItemLabel>
    </ContactItem>
    <ContactItem href="https://twitter.com/inal_karov">
      <ContactItemImg src={twitter} />
      <ContactItemLabel>twitter</ContactItemLabel>
    </ContactItem>
    <ContactItem href="t.me/ikarov">
      <ContactItemImg src={telegram} />
      <ContactItemLabel>telegram</ContactItemLabel>
    </ContactItem>
  </ContactsWrap>
);

export default Contacts;