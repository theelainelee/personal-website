import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ReactPlayer from 'react-player';

const VIDEOSTYLE = {
  backgroundColor: 'white'
};

class App extends Component {
  render() {
    return (
      <div className="Parent">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-name">Elaine Lee </h1>

             <p className="App-title">
            Creative Developer and Programmer
            </p>
          </header>
          <div>      </div>
          <p className="App-contact">
            CONTACT ME
          </p>
        </div>
        <div className="App-video" >
          <ReactPlayer 
            url='https://vimeo.com/243556536'
            className='react-player'
            playing
            controls
            width='100%'
            height='300px'
            style={VIDEOSTYLE}


          />
        </div>
      </div>
    );
  }
}



export default App;
