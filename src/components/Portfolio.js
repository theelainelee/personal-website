import React, {Component} from 'react'


const Portfolio = ({title, imgPath, text, handleClick}) => {
	return(
	<div> 
		<img src={imgPath} onClick={handleClick}/>
		<h1>{title}</h1>
		<p>{text}</p>
	</div>
	)
}

export default Portfolio