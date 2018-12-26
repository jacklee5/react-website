import React, { Component } from 'react';

import Header from './Header';
import Display from './Display';
import Hero from './Hero';

import '../css/App.css';
import '../css/page.css';

class App extends Component {

  render() {
    //unfortunately header is at the bottom so it renders on top
    return (
      <div className="App">

        <Hero />
        <Display />

        <Header />
      </div>
    );
  }
}

export default App;
