import React, { Component } from 'react';
import Header from 'containers/Header';
import Footer from 'components/Footer';
import Content from './Content';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Home;
