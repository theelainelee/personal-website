import React, { Component } from 'react';

import './App.css';
import ReactPlayer from 'react-player';
import video from './assets/ElaineLee_Portfolio_aminated_works.mov'
import myPhoto from './assets/myPhoto.png'
import ParticlesContainer from './components/Particles'
import Portfolio from './components/Portfolio'
import Button from './components/Button'
import ThreeScene from './components/ThreeScene'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import classNames from 'classnames'
// var classNames = require('classnames');

// import ReactDOM from 'react-dom';
// import Media from 'react-media';





class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      width: window.innerWidth,
      addClass: false,
      isHidden: true,
      clicked: false
    }
    this.buttonClick = this.buttonClick.bind(this)
    this.hamburgerToggle = this.hamburgerToggle.bind(this)
  }

    buttonClick(e){
        console.log('BUTTON CLICKED')
        // this.setState({
        //     addClass: true,
        //     isHidden: false,
        //     clicked:true
        // }) 
        document.querySelector(".button-container").style.display = 'none';    
    }

        hamburgerToggle(event){  
          event.target.classList.toggle('is-active');
        
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
        console.log('Home')
        let openMenu = document.querySelector(".nav-menu");
        openMenu.style.display = "none";
         let hamburgerMenu = document.querySelector('.hamburger--3dxy');
        hamburgerMenu.classList.remove('is-active')
        window.scrollTo(0,document.body.scrollTop);
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
        let portfolioMenu = document.querySelector('#portfolio-flex-container')
        portfolioMenu.style.display = 'none'
        let videoMenu = document.querySelector('#portfolio-video-container')
        videoMenu.style.display = 'none'
        let aboutMenu = document.querySelector('#about-container')
        aboutMenu.style.display = 'none'
        document.querySelector(".button-container").style.display = 'block';  
  }

  showPortfolioOverlay=() =>{
        console.log('Portfolio')
        let openMenu = document.querySelector(".nav-menu");
        openMenu.style.display = "none";
        let hamburgerMenu = document.querySelector('.hamburger--3dxy');
        hamburgerMenu.classList.remove('is-active')
        let portfolioMenu = document.querySelector('#portfolio-flex-container')
        portfolioMenu.style.display = 'flex'
        let videoMenu = document.querySelector('#portfolio-video-container')
        videoMenu.style.display = 'none'
        let aboutMenu = document.querySelector('#about-container')
        aboutMenu.style.display = 'none'
        document.querySelector(".button-container").style.display = 'none'; 
         document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
  }
   showAboutOverlay = () =>{
        console.log('About')
        let openMenu = document.querySelector(".nav-menu");
        openMenu.style.display = "none";
        let hamburgerMenu = document.querySelector('.hamburger--3dxy');
        hamburgerMenu.classList.remove('is-active')
        let portfolioMenu = document.querySelector('#portfolio-flex-container')
        portfolioMenu.style.display = 'none'
        let videoMenu = document.querySelector('#portfolio-video-container')
        videoMenu.style.display = 'none'
        let aboutMenu = document.querySelector('#about-container')
        aboutMenu.style.display = 'block'
        document.querySelector(".button-container").style.display = 'none'; 
        // window.scrollTo({
        //   top: window.innerHeight - 200,
        //   behavior: 'smooth'
        // }); 
        window.scrollTo(0, document.body.scrollTop);
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
  }

  showSectionOverlay = () =>{
    console.log('Section clicked show overlay')
    this.setState=({
        addClass: true
    })
  }
   
    

  render() {
    const {width} = this.state;
    const isMobile = width < 600;
    const className = this.state.clicked ? 'anim' : null;
    
    return (
    

      <div className="App">
      <ThreeScene id='rotating-cube'/>

      <header>
       <button type="button" className="hamburger-menu hamburger--3dxy" onClick= {this.hamburgerToggle}>
             <span className="hamburger-box" >
            <span className="hamburger-inner" ></span>
            </span>
            
       </button>
       <nav className="nav-menu" >
               <li onClick={this.closeOverlay}>home</li>
               <li onClick={this.showPortfolioOverlay}>portfolio</li>
               <li onClick={this.showAboutOverlay}>about</li>
               <li ><a id='email-link' href="mailto:elaneylee@gmail.com" target="_top" onClick={this.closeOverlay}>email me</a></li>
             </nav>
       
       
        <div className='header__info__container'>
        <h1>ELAINE LEE</h1>
        <p className='job-title'>Front-End Developer and Engineer.</p>

        </div>
       
        </header> 
           
    <ParticlesContainer/>
         <Button text='Click To Enter' onClick={this.buttonClick} style={{margin: '0 auto'}}/>

       
     <div id='portfolio-flex-container' className='anim' > 

      <section className='work-1' className={classNames(
            this.state.addClass ? "overlay" : "work-1" 
          )}
          onClick={e => this.showSectionOverlay(e)}>
      {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://tech.wearered.com', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nReactJS, React Router, NodeJS. WebPack'}/>
         
         <p><a href='https://tech.wearered.com' target='_blank'>Click to view page</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://tech.wearered.com', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nReactJS, React Router, NodeJS. WebPack'}/>
        
         <p><a href='https://tech.wearered.com' target='_blank'>Click to view website</a></p>
         </div> }
        </section>
         <section className='work-2'>
          {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://prod.wearered.com', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nPreactJS, React alias, NodeJS. WebPack, Mobile Responsive, Git'}/>
        
         <p><a href='https://prod.wearered.com' target='_blank'>Click to view page</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://prod.wearered.com', '_blank')}>
        <h1>Production Website</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nPreactJS, React alias, NodeJS. WebPack, Mobile Responsive, Git'}/>
         
         <p><a href='https://prod.wearered.com' target='_blank'>Click to view website</a></p>
         </div> }
        </section>
         <section className='work-3'>
           {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qmdbGm', '_blank')}>
        <h1>Production Feature</h1>
          <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
         <p><a href='https://codepen.io/elaineleeworld/pen/qmdbGm' target='_blank'>Click to view page</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qmdbGm', '_blank')}>
        <h1>Production Feature</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
        
         <p><a href='https://codepen.io/elaineleeworld/pen/qmdbGm' target='_blank'>Click to view CodePen</a></p>
         </div> }
    
        </section>
          <section className='work-4'>
           {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} >
        <h1>Production Product Page</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nJavascript, jQuery, Sass, Media Queries, Mobile Responsive, Git'}/>
         <p>Click to view page</p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} >
        <h1>Production Product Page</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nJS, jQuery, Mobile Responsive, Git, on CodePen and Beachbody website'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/pPjewO' target='_blank'>Click to view CodePen</a></p>
         <p style={{zIndex: '10000'}}><a href='https://www.beachbody.com/product/fitness_programs/3-week-yoga-retreat-beginners-dvds.do' target='_blank'>Click to view Beachbody page</a></p>
         </div> }

        </section>
        <section className='work-5'>
         {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/jBoEyw', '_blank')}>
        <h1>Mobile Alarm Clocke</h1>
         <Portfolio   title={'Built for:\nInterview Project'} text={'Technologies used:\n Vanilla Javascript, HTML5, CSS3, hosted on CodePen'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/jBoEyw' target='_blank'>Click to view page</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/jBoEyw', '_blank')}>
        <h1>Mobile Alarm Clock</h1>
         <Portfolio   title={'Built for:\nInterview Project'} text={'Technologies used:\n Vanilla Javascript, HTML5, CSS3, hosted on CodePen'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/jBoEyw' target='_blank'>Click to view CodePen</a></p>
         </div> }
         
        </section>
         <section className='work-6'>
          {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/RVRGrO', '_blank')}>
        <h1>Production Feature</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/RVRGrO' target='_blank'>Click to view CodePen</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/RVRGrO', '_blank')}>
        <h1>Production Feature</h1>
         <Portfolio   title={'Built for:\nBeachbody LLC'} text={'Technologies used:\nHTML5, CSS3, Sass, Media Queries, Mobile Responsive, Git'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/RVRGrO' target='_blank'>Click to view CodePen</a></p>
         </div> }
        
        </section>  
        <section className='work-7'>
          {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qryjGx', '_blank')}>
        <h1>Sticky Notes</h1>
         <Portfolio   title={'Built for:\nInterview Question'} text={'Technologies used:\nJavascript, jQuery, Sass'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/qryjGx' target='_blank'>Click to view CodePen</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('https://codepen.io/elaineleeworld/pen/qryjGx', '_blank')}>
        <h1>Sticky Notes</h1>
         <Portfolio   title={'Built for:\nInterview Question'} text={'Technologies used:\nJavascript, jQuery, HTML5, CSS3'}/>
         
         <p><a href='https://codepen.io/elaineleeworld/pen/qryjGx' target='_blank'>Click to view CodePen</a></p>
         </div> }
        
        </section>  
        <section className='work-8'>
         {isMobile ? 
        <div><div className='fade-in'  style={{textAlign: 'center'}} onClick={() => window.open('http://portfolio.ff0000.com/ua_willtrips_2018/', '_blank')}>
        <h1>UnderArmour Case Study</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency'} text={'Technologies used:\nReactJS, CSS3, ES6, NodeJS, Webpack, GitHub Pages'}/>
         
         <p><a href='http://portfolio.ff0000.com/ua_willtrips_2018/' target='_blank'>Click to view website</a></p>
         </div></div> : <div className='overlay'  style={{textAlign: 'center'}} onClick={() => window.open('http://portfolio.ff0000.com/ua_willtrips_2018/', '_blank')}>
        <h1>UnderArmour Case Study</h1>
         <Portfolio   title={'Built for:\nRED Interactive Agency for UA'} text={'Technologies used:\nJS, CSS3, Mobile Responsive, Media Queries'}/>
        
         <p><a href='http://portfolio.ff0000.com/ua_willtrips_2018/' target='_blank'>Click to view website</a></p>
         </div> }
        </section> 
        
        </div>
        <div id='portfolio-video-container' style={{display: 'none'}}>

        <h3 className='text-portfolio-video' >This is a video compilation of some ad agency work I have done for clients such as Disney, Lego, Nike, Pixar. The technologies used for these HTML5 banner ads are Javascript and Greensock for animation.  Some are Flashtalking, Sizmek, DoubleClick Studio, and RED's open-source, homegrown framework.  You can find more information <a href='htttps://tech.wearered.com' target='_blank' style={{color: 'lightblue'}}> by clicking here</a> to visit the website I built for RED Ad Tech.  </h3>
       <ReactPlayer 
            playing
            url={video}
            className='react-player'
            controls
            width='400px'
            height='400px'
          />
      
      </div>
      <div id='about-container' style={{display: 'none'}}>
      <img src={myPhoto}/>
      <h1>ABOUT</h1>
         <div className='left-about-text'>
         Elaine began her programming career in her senior year at Cornell University.  
         Her first job out of college was at Computer Sciences Corporation (CSC) as a computer analyst.  
         After a few years, she left the industry to work on Wall Street, but eventually found her way back to her first love and passion.  
         To get up-to-date quickly on the modern technology stack in Los Angeles, she invested in obtaining a technical foundation.  
         Elaine took an immersive full-time web development course at General Assembly.  
         During that time Ruby on Rails and AngularJS were quite popular and hence she learned those languages.
         After graduating from the course she received a job offer at Beachbody LLC in Santa Monica. 
         During her 2 1/2 years at Beachbody she created landing pages and worked on exciting new features as a full-stack developer.
         </div>
         <div className='right-about-text'>  
         Elaine wanted to expand her programming skills by exploring Javascript animations and creating more unique, innovative web applications. 
         She joined the ad tech space at RED Interactive Agency, part of the EGM (Endeavour) family.  
         At RED now for 2 years, Elaine has created a multitude of web applications for RED's clients ranging from Nike, Hulu, Netflix, Disney, and Paramount.  
         She has also created responsive email templates and websites.  
         Elaine has been using ReactJS in production for the past 2 years.  
         She was a part-time teaching assistant at UCLA for their evening programming course. 
         Elaine loves working with ReactJS, NodeJS, Redux to creating dynamic web applications that are visually stimulating and innovative.
         </div>
       </div>
       <div id='about-container' style={{display: 'none'}}>
      <h1>CONTACT</h1>
      <p>click to email me:{'\n'}<a href='mailto:elaneylee@gmail.com'>{'\n'}elaneylee@gmail.com</a></p>

      </div>
     </div>
     
     
     
    );
  }
}



export default App;
