import React from 'react'

// eslint-disable-next-line
export default ({title, subtitle, children}) => 
	<div className='poster'>
		<h1>{title}</h1>
		<div></div>
		<p style={{fontStyle: 'italic', fontFamily: 'Lato'}}>{subtitle}</p>
		{children}
	</div>