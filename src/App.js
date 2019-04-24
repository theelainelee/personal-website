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
                document.documentElement.style.overflow = 'hidden';
                document.body.scroll = "no";
            }
        }
    closeOverlay = () =>{

    console.log('HIDE OVERLAY')
    let openMenu = document.querySelector(".nav-menu");
    openMenu.style.display = "none";
    window.scrollTo(0,document.body.scrollTop);
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
  }
   closeOverlayAbout = () =>{

    console.log('HIDE OVERLAY')
    let openMenu = document.querySelector(".nav-menu");
    openMenu.style.display = "none";
    // window.scrollTo({
    //   top: window.innerHeight - 200,
    //   behavior: 'smooth'
    // }); 
    window.scrollTo(0, document.body.scrollHeight);
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
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
       <nav className="nav-menu" >
               <li onClick={this.closeOverlay}>home</li>
               <li onClick={this.closeOverlay}>portfolio</li>
               <li onClick={this.closeOverlayAbout}>about</li>
               <li onClick={this.closeOverlay}>contact</li>
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
         <Portfolio  onClick={() => window.open('https://google.com', '_blank')} title='React Website' text='long scroll website built with React, React Router'/>
        </section>
         <section>

          <h1>Work 2</h1>
      <Portfolio  title='React Website' text='long scroll website built with React, React Router'/>
        </section>
         <section>

   
          <h1>Work 3</h1>
      <Portfolio  title='React Website' text='long scroll website built with React, React Router'/>
    
        </section>
          <section>

          <h1>Work 4</h1>
      <Portfolio  title='React Website' text='long scroll website built with React, React Router'/>

        </section>
        <section>

 
          <h1>Work 5</h1>
      <Portfolio  title='React Website' text='long scroll website built with React, React Router'/>
         
        </section>
         <section>

 
          <h1>Work 6</h1>
      <Portfolio  title='React Website' text='long scroll website built with React, React Router'/>
        
        </section>  
        <section>

 
          <h1>Work 7</h1>
      <Portfolio  title='React Website' text='long scroll website built with React, React Router'/>
        
        </section>  
        <section>

 
          <h1>Work 8</h1>
      <Portfolio  title='React Website' text='long scroll website built with React, React Router'/>
        
        </section>
        
        </div>
        <div id='portfolio-video-container'>

        <h3 className='text-portfolio-video'>This is a video compilation of some ad agency work I have done with banner HTML ads for clients such as Disney, Lego, Nike, Pixar. The technologies used are Javascript and Greensock for animation.</h3>
       <ReactPlayer 
            playing
            url={video}
            className='react-player'
            controls
            width='400px'
            height='400px'
          />
      
      </div>
      <div id='about-container'>
      <h1>ABOUT</h1>
         <div className='left-about-text'>Hello! My name is Elaine and welcome to my world!  
         I got my start in programming during my senior year at Cornell University.  
         I had finished all of my required courses and decided to take a computer programming course as an elective.  
         I took CS101 Intro to Computer Science. I learned about COBOL, C++, C# and the evolution of programming.  
         It was a great foundation for my future career as a consummate programmer. My first job out of college was at Computer Sciences Corporation as a computer analyst.  
         I had the best computer programming training with this company.  
         While I left the industry to try my hand at Wall Street, I eventually found my way back to my first love and passion.  
         I also found myself moving from the East Coast to the West. 
         To get up-to-date quickly on the modern technology stack in my new city of Los Angeles, I invested in obtaining a technical foundation.  
         I took an immersive full-time web development course at General Assembly.  
         During that time Ruby on Rails and AngularJS were quite popular and hence I learned those languages.
         After graduation I immediately received a job offer at Beachbody LLC in Santa Monica. 
         Learning on the job is something you cannot pay to obtain. 
         </div>
         <div className='right-about-text'>
         During my 2 1/2 years at Beachbody I created landing pages, work on exciting new features, and worked in a high-performing team. 
         I learned the difference between merging and rebasing, used Sass, and worked with a CMS.  
         I wanted to expand my programming skills by exploring Javascript animations and creating more unique, innovative web applications. 
         I began my career in the ad tech space at RED Interactive Agency, part of the EGM (Endeavour) family.  
         I have been at RED now for 2 years and created a multitude of web applications for our clients ranging from Nike, Hulu, Netflix, Disney, and Paramount.  
         I have also created responsive email templates and websites.  
         As always in my desire to keep up-to-date with modern technology, I have been using ReactJS for the past 2 years building both production sites as well as personal projects.  
         I was also able to explore using a lower K weight version of React, called Preact.  The best way to continue growing and to solidify knowledge is to teach.  
         I was a part-time evening teaching assistant at UCLA for their programming course. 
         This is me in a nutshell. <br/> Pleasure to have you visit my world! 
         </div>
       </div>
     </div>
      </ParallaxProvider>
     
    );
  }
}



export default App;
