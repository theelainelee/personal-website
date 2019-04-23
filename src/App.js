import React, { Component } from 'react';

import './App.css';
import ReactPlayer from 'react-player';
import ParticlesContainer from './Particles'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
// import ReactDOM from 'react-dom';
// import Media from 'react-media';





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

      <header>
       <button type="button" className="hamburger-menu hamburger--3dxy" onClick= {this.hamburgerToggle}>
             <span className="hamburger-box" >
            <span className="hamburger-inner" ></span>
            </span>
            
       </button>
       <nav className="nav-menu" onClick={this.hamburgerToggle}>
               <li>home</li>
               <li>about</li>
               <li>portfolio</li>
               <li>contact</li>
             </nav>
       
       
        {/*<Parallax className="name-title" y={[-20, 20]} tagOuter="figure">*/}
        <div className='header__info__container'>
        <h1>ELAINE LEE</h1>
        <p className='job-title'>Front-End Developer and Engineer.</p>

        </div>
      {/*</Parallax>*/}
       
        </header> 
           
<ParticlesContainer/>
           
          {/*<div>      
          </div>*/}
      
    
  {/* <section>

   <Parallax className="name-title"  >
          <ReactPlayer 
            playing
            url='https://www.youtube.com/watch?v=XQu8TTBmGhA'
            className='react-player'
            controls
          
            height='300px'
          


          />
       
         </Parallax>
        </section>*/}
       {/* <section>
         <Parallax className="name-title" >
       <ReactPlayer 
            playing
            url='https://www.youtube.com/watch?v=XQu8TTBmGhA'
            className='react-player'
            controls
          
            height='300px'
            // style={VIDEOSTYLE}


          />
      </Parallax>
      </section>*/}
     {/* <section>
         <Parallax className="name-title" >
       <ReactPlayer 
            playing
            url='https://www.youtube.com/watch?v=XQu8TTBmGhA'
            className='react-player'
            controls
          
            height='300px'
            // style={VIDEOSTYLE}


          />
      </Parallax>
      </section>*/}
           </div>
      </ParallaxProvider>
     
    );
  }
}



export default App;
