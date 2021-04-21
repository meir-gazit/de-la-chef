import React, { Component } from 'react'
import Title from './Title'
import { 
	FaCocktail, 
	FaUtensils, 
	FaAngellist, 
	FaBeer
} from 'react-icons/fa'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

// eslint-disable-next-line
export default class extends Component {
	state={
		specials:[
			{
				icon: <FaCocktail/>,
				title: 'free cocktails',
				info: 'We are proud to present you with a unique and rare collection of the happiest and most vibrant drink that exists. Today between 16:00 and 19:00 - at our expense.'
			},
			{
				icon: <FaUtensils/>,
				title: 'best foods ever',
				info: 'Our menu will leave you stunned, 1000 flavors per bite, you will enjoy so much that we have no doubt you will return to us for another meal full of pleasure.'
			},
			{
				icon: <FaAngellist/>,
				title: 'amazing music',
				info: 'The best music in town, live performances by musicians from all over the world, Muly Zokary, Tityan Gogler and many many more, Get ready to enjoy an amazing music.'
			},
			{
				icon: <FaBeer/>,
				title: 'birthday !',
				info: 'it\'s your birthday !!! come and celebrate your birthday with us, we promise, you will never forget it, and more then that, you and your friends going to have an amazing surprises.'
			},
		]
	}

	render() {
		return (
			<section className='TodaysSpecial'>
				<Title title="Today's Specials" />
				<div className='TodaysSpecial-center'>
					{
						this.state.specials.map(item => {
							return (
								<artical key={item.title} className='Todays'>
									<span>{item.icon}</span>
									<Tippy content={item.title}><h6>{item.title}</h6></Tippy>
									<p>{item.info}</p>
									<br/>
								</artical>
							)
						})
					}
				</div>	
			</section>
		)
	}
}