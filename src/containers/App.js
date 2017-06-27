import React, { Component } from 'react';
import SearchPane from './SearchPane';
import WatchPane from './WatchPane';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <SearchPane />
          <WatchPane />
        </div>
      </div>
    );
  }
}

export default App;
