import React, { Component } from 'react';
import SearchPaneContainer from './SearchPaneContainer';
import WatchPaneContainer from './WatchPaneContainer';

class App extends Component {
  render() {
    return (
      <div className="section">
        <div className="columns">
          <SearchPaneContainer />
          <WatchPaneContainer />
        </div>
      </div>
    );
  }
}

export default App;
