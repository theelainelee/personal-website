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
  constructor(props){
    super(props)

    this.state = {
      width: window.innerWidth
    }
  }

        hamburgerToggle(event){  
          event.target.classList.toggle("is-active")

          let openMenu = document.querySelector(".nav-menu");
            if (openMenu.style.display === "block") {
                openMenu.style.display = "none";
                 document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
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
    const {width} = this.state;
    const isMobile = width < 600;
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

      <section className='work-1'>
      {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://tech.wearered.com', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nReactJS, React Router, NodeJS. WebPack'}/>
         <br/>
         <p>Click to view page</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://tech.wearered.com', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nReactJS, React Router, NodeJS. WebPack'}/>
         <br/>
         <p>Click to view website</p>
         </div> }
        </section>
         <section className='work-2'>
          {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://prod.wearered.com', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nPreactJS, React alias, NodeJS. WebPack, Mobile Responsive, Git'}/>
         <br/>
         <p>Click to view page</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://prod.wearered.com', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nPreactJS, React alias, NodeJS. WebPack, Mobile Responsive, Git'}/>
         <br/>
         <p>Click to view website</p>
         </div> }
        </section>
         <section className='work-3'>
           {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qmdbGm', '_blank')}>
        <h1>Production Feature</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nJavascript, jQuery, Sass, Media Queries, Mobile Responsive'}/>
         <br/>
         <p>Click to view page</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qmdbGm', '_blank')}>
        <h1>Production Feature</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
         <br/>
         <p>Click to view CodePen</p>
         </div> }
    
        </section>
          <section className='work-4'>
           {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} >
        <h1>Production Product Page</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nJavascript, jQuery, Sass, Media Queries, Mobile Responsive, Git'}/>
         <br/>
         <p>Click to view page</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} >
        <h1>Production Product Page</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nJavascript, jQuery, Sass, Media Queries, Mobile Responsive, Git, hosted on CodePen, also viewable on Beachbody website'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/pPjewO' target='_blank'>Click to view CodePen</a></p>
         <p style={{zIndex: '10000'}}><a href='https://www.beachbody.com/product/fitness_programs/3-week-yoga-retreat-beginners-dvds.do' target='_blank'>Click to view Beachbody page</a></p>
         </div> }

        </section>
        <section className='work-5'>
         {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/jBoEyw', '_blank')}>
        <h1>Mobile Alarm Clocke</h1>
         <Portfolio   title={'Built for:\nInterview Project'} text={'Technologies used:\n Vanilla Javascript, HTML5, CSS3, hosted on CodePen'}/>
         <br/>
         <p>Click to view page</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/jBoEyw', '_blank')}>
        <h1>Mobile Alarm Clock</h1>
         <Portfolio   title={'Built for:\nInterview Project'} text={'Technologies used:\n Vanilla Javascript, HTML5, CSS3, hosted on CodePen'}/>
         <br/>
         <p>Click to view CodePen</p>
         </div> }
         
        </section>
         <section className='work-6'>
          {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/RVRGrO', '_blank')}>
        <h1>Production Feature</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
         <br/>
         <p>Click to view page</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/RVRGrO', '_blank')}>
        <h1>Production Feature</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
         <br/>
         <p>Click to view CodePen</p>
         </div> }
        
        </section>  
        <section className='work-7'>
          {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qryjGx', '_blank')}>
        <h1>Sticky Notes</h1>
         <Portfolio   title={'Built for:\nInterview Question'} text={'Technologies used:\nJavascript, jQuery, Sass'}/>
         <br/>
         <p>Click to view page</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qryjGx', '_blank')}>
        <h1>Sticky Notes</h1>
         <Portfolio   title={'Built for:\nInterview Question'} text={'Technologies used:\nJavascript, jQuery, HTML5, CSS3'}/>
         <br/>
         <p>Click to view CodePen</p>
         </div> }
        
        </section>  
        <section className='work-8'>
         {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('www.elainelee.world', '_blank')}>
        <h1>Personal Website</h1>
         <Portfolio   title={'Built for:\nPublic, Freelance Work, Interviewers, Recruiters'} text={'Technologies used:\nReactJS, CSS3, ES6, NodeJS, Webpack, GitHub Pages'}/>
         <br/>
         <p>Click to view website</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('www.elainelee.world', '_blank')}>
        <h1>Personal Website</h1>
         <Portfolio   title={'Built for:\nPublic, Freelance Work, Interviewers, Recruiters'} text={'Technologies used:\nReactJS, CSS3, ES6, NodeJS, Webpack, GitHub Pages'}/>
         <br/>
         <p>Click to view website</p>
         </div> }
        </section> 
        {/*<section className='work-9'>

 
         {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qmdbGm', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nJavascript, jQuery, Sass'}/>
         <br/><br/>
         <p>Click to view page</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qmdbGm', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nJavascript, jQuery, Sass'}/>
         <br/><br/>
         <p>Click to view page</p>
         </div> }
        
        </section>*/}
        
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
         <div className='left-about-text'>Hello! My name is Elaine!  
         I got my start in programming during my senior year at Cornell University.  
         I had finished all of my required courses and decided to take a computer programming course as an elective.  
         I took CS101 Intro to Computer Science. I learned about COBOL, C++, C# and the evolution of programming.  
         It was a great foundation for my future career as a programmer. My first job out of college was at Computer Sciences Corporation as a computer analyst.  
         I had the best computer programming training with this company.  
         While I left the industry to try my hand at Wall Street, I eventually found my way back to my first love and passion.  
         I also found myself moving from the East Coast to the West. 
         To get up-to-date quickly on the modern technology stack in my new city of Los Angeles, I invested in obtaining a technical foundation.  
         I took an immersive full-time web development course at General Assembly.  
         During that time Ruby on Rails and AngularJS were quite popular and hence I learned those languages.
         After graduation I received a job offer at Beachbody LLC in Santa Monica. 
         During my 2 1/2 years at Beachbody I created landing pages and worked on exciting new features.
         </div>
         <div className='right-about-text'>
         I learned the difference between merging and rebasing, used Sass, and worked with a CMS.  
         I wanted to expand my programming skills by exploring Javascript animations and creating more unique, innovative web applications. 
         I began my career in the ad tech space at RED Interactive Agency, part of the EGM (Endeavour) family.  
         I have been at RED now for 2 years and created a multitude of web applications for our clients ranging from Nike, Hulu, Netflix, Disney, and Paramount.  
         I have also created responsive email templates and websites.  
         As always in my desire to keep up-to-date with modern technology, I have been using ReactJS for the past 2 years building both production sites as well as personal projects.  
         I was also able to explore using a lower K weight version of React, called Preact.  The best way to continue growing and to solidify knowledge is to teach.  
         I was a part-time teaching assistant at UCLA for their evening programming course. 
         This is me in a nutshell. <br/><br/> Pleasure to have you visit my world! 
         </div>
       </div>
     </div>
      </ParallaxProvider>
     
    );
  }
}



export default App;
