import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <main style={{marginTop: '64px'}}>
          <p>This is the page content!</p>
        </main>

      </div>
    );
  }  
}

export default App;
