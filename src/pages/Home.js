import React from 'react'
import { Link } from 'react-router-dom'
import { Cover, Poster, Specials, FeaturedDishes } from '../components'
import Tippy from '@tippy.js/react'
import '../assets/css/tippy.css'

// eslint-disable-next-line
export default () => 
<>
	<Cover>
		<Poster title='De La Chef' subtitle='To love people is to feed them art.'>
            <Tippy content='Discover Our Dishes'>
				<Link to='/Dishes' className='btn-primary'>Our Dishes</Link>
			</Tippy>
		</Poster>
	</Cover>
	<FeaturedDishes />
	<Specials />
</>