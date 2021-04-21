import React, {Component} from 'react'
import Vid from '../assets/video/vid.mp4'

class About extends Component {
    constructor (props) {
        super(props)

        this.state = {
            videoURL: Vid,
        }
    }

    render () {
        return (
            <div>
	            <video muted loop autoPlay id='aboutVideo' ref='vidRef'>
	                <source src={this.state.videoURL} type='video/mp4' />
	                Your browser does not support the video tag.
	            </video>
	            <div className='content'>
				  <h1>about de la chef</h1>
				  <p>
					No matter how you define 'de la chef' - the bar with the most delicious food origin from all over the world, or the cosmopolitan-restaurant with the most worthwhile bar, during its 12 years of existence, 'de la chef' has become a home and one of the favorite gastronomic establishments for people who love to eat, love to drink and love to love. Despite his Indonesian origins, Normat Matyas, the chef and owner, runs his kitchen like in Barcelona or any other metropolitan, ​​with lots of laughter behind the flames and fresh ingredients in everything to do with the refugees of the seas and oceans, spiced with grace and wit and served with love. Normat Matyas, a creator of meticulous and refreshing dishes that make up a personal and real kitchen, 'de la chef' named after the owner's beloved puppy - 'chaffy', has become a culinary institution well planted in the big city's nightlife, a pleasant and delicious place to hang out with good music and great drinks.
				  </p>
				</div>
			</div>
        )
    }
}

export default About
