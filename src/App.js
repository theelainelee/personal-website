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

        hamburgerToggle(event){  
          event.target.classList.toggle("is-active")

          let openMenu = document.querySelector(".nav-menu");
            if (openMenu.style.display === "block") {
                openMenu.style.display = "none";
            } else {
                openMenu.style.display = "block";
            }
        }

        // animatePage()


  render() {
    return (
      <div className="Parent">
      
       <button type="button" className="hamburger-menu hamburger--3dxy" onClick= {this.hamburgerToggle}>
             <span className="hamburger-box" >
            <span className="hamburger-inner" ></span>
            </span>
            
       </button>
       <nav className="nav-menu" onClick={this.hamburgerToggle}>
               <li>home</li>
               <li>about</li>
               <li>portfolio</li>
             </nav>
       
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-name">Elaine Lee </h1>

             <p className="App-title">
            Developer. Engineer.
            </p>
          </header>
          <div>      </div>
          <button className="App-contact" onClick={this.animatePage}>
            Click Here
          </button>
        </div>
        <div className="App-video" >
          <ReactPlayer 
            playing
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
