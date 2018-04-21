import React, { Component } from 'react';
import logo from './el_logo.png';
import './App.css';
import ReactPlayer from 'react-player';
// import ReactDOM from 'react-dom';
// import Media from 'react-media';

const VIDEOSTYLE = {
  backgroundColor: 'white'
};



class App extends Component {

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  };

  render() {
    return (
      <div className="Parent">
       <div className="hamburgerMenu" ></div>

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
            url='https://www.youtube.com/watch?v=XQu8TTBmGhA'
            className='react-player'
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
