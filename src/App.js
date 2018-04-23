import React, { Component } from 'react';
import logo from './el_logo.png';
import './App.css';
import ReactPlayer from 'react-player';
// import ReactDOM from 'react-dom';
// import Media from 'react-media';

// const VIDEOSTYLE = {
//   backgroundColor: 'white'
// };



class App extends Component {

  hamburgerToggle(event) {
    let hamburger = document.querySelector('.hamburger-menu');

      
        hamburger.addEventListener("click", function(){
          console.log('CLICKED')
          // this.classList.toggle("is-active");
          if (this.classList.toggle('is-active')){
            console.log("OPEN MENU SHOW X")
            function x_openMenu(){
              document.getElementById('hamburger--3dxy.is-active');
            }
          } else {
            console.log("CLOSE MENU SHOW 3 LINES")
            function threeLines_closeMenu(){
              document.getElementById('hamburger--3dxy');
            }
          }
        });
      
  };

  render() {
    return (
      <div className="Parent">
       <button type="button" className="hamburger-menu hamburger--3dxy" onClick={this.hamburgerToggle}>

          <span className="hamburger-box" >
            <span className="hamburger-inner" ></span>
          </span>
       </button>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-name">Elaine Lee </h1>

             <p className="App-title">
            Developer and Designer
            </p>
          </header>
          <div>      </div>
          <p className="App-contact">
            Start a Project
          </p>
        </div>
        <div className="App-video" >
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=XQu8TTBmGhA'
            className='react-player'
            controls
            width='100%'
            height='300px'
            // style={VIDEOSTYLE}


          />
        </div>
      </div>
     
    );
  }
}



export default App;
