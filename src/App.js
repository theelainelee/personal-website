import React, { Component } from 'react';
import logo from './el_logo.png';
import './App.css';
import ReactPlayer from 'react-player';
import Particles from 'react-particles-js'
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
            <Particles className="particles-js" 
             params={{
                  "particles": {
                  "number": {
                    "value": 60,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.9,
                    "random": false,
                    "anim": {
                      "enable": true,
                      "speed": 2,
                      "opacity_min": 0.9,
                      "sync": true
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 60,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.9,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "window",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 200,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 200,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
            />
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
