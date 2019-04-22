import React, { Component } from 'react';
import logo from './el_logo.png';
import './App.css';
import ReactPlayer from 'react-player';
import Particles from 'react-particles-js'
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

        // animatePage()



  render() {
    return (
      <ParallaxProvider>

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
        <Parallax className="name-title" y={[-20, 20]} tagOuter="figure">
        {/*<img src={logo} />*/}
        <h1>ELAINE LEE</h1>
        <p>Front-End Developer and Engineer.</p>
      </Parallax>
       
          {/*<header className="App-header">*/}
            <Particles className="particles-js" 
             params={{
                  "particles": {
                  "number": {
                    "value": 40,
                    "density": {
                      "enable": true,
                      "value_area": 500
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
                      "width": 10,
                      "height": 10
                    }
                  },
                  "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 0.1,
                      "opacity_min": 0.1,
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
                    "color": "#0000ff",
                    "opacity": 0.6,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
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
                      "size": 10,
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
           
);
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
           
            
          {/*</header>*/}
          <div>      </div>
          {/*<button className="App-contact" onClick={this.animatePage}>
            Click Here
          </button>*/}
        </div>
      {/*  <div className="App-video" >
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
      </div>

      </ParallaxProvider>
     
    );
  }
}



export default App;
