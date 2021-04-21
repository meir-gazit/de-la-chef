import React from 'react'
import { Link } from 'react-router-dom'
import { Cover, Poster } from '../components'

// eslint-disable-next-line
export default () => 
	<Cover clsName='error-404'>
		<Poster subtitle="404 - Let's go back to the eatery" title='are you lost?'>
			<Link to='/' className='btn-primary'>take me back</Link>
		</Poster>
	</Cover>