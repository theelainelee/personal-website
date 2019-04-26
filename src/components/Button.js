import React, {Component} from 'react'
import styled from 'styled-components';
import App from '../App.css'



const ButtonStyles = styled.button`
cursor: pointer;
  display: inline-block;
  margin-bottom: auto;
  position:relative;
  border-radius: 10px;
  margin-top: 500px;
  width: 8rem;
  height: 2rem;
  background: #18CAE6;
  color: white;
  border: 2px solid white;
  `


const Button = ({click, text}) =>{
	
		return(
			<div className='button-container' onClick={() => {
				document.querySelector(".button-container").style.display = 'none';    
				document.querySelector("#portfolio-flex-container").style.display = 'flex';    
			}}>
			<button className='button-styles'> {text}</button>
			</div>
			)
	
}

export default Button;