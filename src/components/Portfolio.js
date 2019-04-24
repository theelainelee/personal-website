import React, {Component} from 'react'


const Portfolio = ({title, imgPath, text, handleClick}) => {
	return(
	<div> 
		<img src={imgPath} onClick={handleClick}/>
		<p>{title}</p>
		<p>{text}</p>
	</div>
	)
}

export default Portfolio