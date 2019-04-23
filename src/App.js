import React, { Component } from 'react';

import './App.css';
import ReactPlayer from 'react-player';
import video from './assets/ElaineLee_Portfolio_aminated_works.mov'
import ParticlesContainer from './components/Particles'
import Portfolio from './components/Portfolio'
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
       
       
        <div className='header__info__container'>
        <h1>ELAINE LEE</h1>
        <p className='job-title'>Front-End Developer and Engineer.</p>

        </div>
       
        </header> 
           
    <ParticlesContainer/>
           
       
     <div id='portfolio-flex-container'> 
      <section>

        <h1>Work 1</h1>
         <Portfolio imgPath='abstract-art.jpg' onClick={() => window.open('https://google.com', '_blank')} title='React Website' text='long scroll website built with React, React Router'/>
        </section>
         <section>

          <h1>Work 2</h1>
      <Portfolio imgPath='abstract-art.jpg' title='React Website' text='long scroll website built with React, React Router'/>
        </section>
         <section>

   
          <h1>Work 3</h1>
      <Portfolio imgPath='abstract-art.jpg' title='React Website' text='long scroll website built with React, React Router'/>
    
        </section>
          <section>

          <h1>Work 4</h1>
      <Portfolio imgPath='abstract-art.jpg' title='React Website' text='long scroll website built with React, React Router'/>

        </section>
        <section>

 
          <h1>Work 5</h1>
      <Portfolio imgPath='abstract-art.jpg' title='React Website' text='long scroll website built with React, React Router'/>
         
        </section>
         <section>

 
          <h1>Work 6</h1>
      <Portfolio imgPath='abstract-art.jpg' title='React Website' text='long scroll website built with React, React Router'/>
        
        </section>  
        <section>

 
          <h1>Work 7</h1>
      <Portfolio imgPath='abstract-art.jpg' title='React Website' text='long scroll website built with React, React Router'/>
        
        </section>  
        <section>

 
          <h1>Work 8</h1>
      <Portfolio imgPath='abstract-art.jpg' title='React Website' text='long scroll website built with React, React Router'/>
        
        </section>
        
        </div>
        <div>
        
       <ReactPlayer 
            playing
            url={video}
            className='react-player'
            controls
            height='300px'
          />
      
      </div>
     
     </div>
      </ParallaxProvider>
     
    );
  }
}



export default App;
