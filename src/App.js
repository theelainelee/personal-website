import React, { Component } from 'react';
import logo from './el_logo.png';
import './App.css';
import ReactPlayer from 'react-player';
import ParticlesContainer from './Particles'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
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

    

  render() {
    return (
      <ParallaxProvider>

      <div className="App">

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
       
      
        <Parallax className="name-title" y={[-20, 20]} tagOuter="figure">
      
        <h1>ELAINE LEE</h1>
        <p>Front-End Developer and Engineer.</p>
      </Parallax>
        {/*<div className="App-video" >
          <ReactPlayer 
            playing
            url='https://www.youtube.com/watch?v=XQu8TTBmGhA'
            className='react-player'
            controls
            width='100%'
            height='300px'
            // style={VIDEOSTYLE}


          />
        </div>*/}
          <ParticlesContainer/>
           
);
           
          <div>      
          </div>
      
    
      </div>

      </ParallaxProvider>
     
    );
  }
}



export default App;
