import React from 'react'
import { Link } from 'react-router-dom'
import { Cover, Poster, DishContainer } from '../components'

// eslint-disable-next-line
export default () => 
	<>
		<Cover clsName='dishesCover'>
			<Poster subtitle='come with me to explore our dishes' title='Our artcraft'>
				<Link to='/' className='btn-primary' style={{fontFamily: 'Crushed'}}>return home</Link>
			</Poster>
		</Cover>
		<br />
		<div style={{display: 'flex', justifyContent: 'center'}}>
			<p style={{fontSize: '1.5em', fontFamily: 'Lato',fontStyle: 'italic', maxWidth: '94%' ,textAlign: 'center'}}>Each of our artcraft-dish-sets includes several different dishes allowing you to choose a complete meal, we built the menu in such a way that the meal will include a number of wonderful flavors that have many health ingredients, if you want to choose different dishes talk to one of the waiters next to you and build a meal to your satisfaction.</p>
		</div>
		<br />
		<DishContainer/>
		<br />
	</>
