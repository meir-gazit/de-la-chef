import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DishContext } from '../context'
import defaultBcg from '../assets/images/defaultBcg.jpeg'
import { StyledCover, Poster, Title } from '../components'

export default class Dish extends Component {
	constructor(props) {
    	super(props)
    	this.state = {
      		preatyUrl: this.props.match.params.preatyUrl,
      		defaultBcg: defaultBcg
    	}
  	}

  	static contextType = DishContext
		
  	render() {
	    const { getDish } = this.context
	    const dish = getDish(this.state.preatyUrl)

	    if (!dish) {
	      return (
	        <div className="error">
	          <h3> no such dish could be found...</h3>
	          <Link to="/dishes" className="btn-primary">
	            back to dishes
	          </Link>
	        </div>
	      )
	    }

	    let {
      name,
      description,
      dishSet,
      size,
      price,
      extrasArray,
      images
    } = dish;
    const [...defaultImages] = images
    
    if(extrasArray === undefined){
      extrasArray = []
    }

    return (
      <>
        <StyledCover img={images[0] || this.state.defaultBcg}>
          <Poster title={`${name} dish`}>
            <Link to="/dishes" className="btn-primary">
              back to dishes
            </Link>
          </Poster>
        </StyledCover>

        <section className="single-dish">
          
          <Title clsName='section-title-sisters' title="sister dishes" />
          
          <div className="single-dish-images">
            {
              defaultImages.map((item, index) => (
                <img key={item.name} src={item} alt={name} />
              ))
            }
          </div>

          <div className="single-dish-info">
            
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size}</h6>
              <h6>
                number of diners :
                {
                  dishSet > 1 
                  ? `${dishSet} people` 
                  : `${dishSet} person`
                }
              </h6>
            </article>

          </div>
        </section>

        <section className="dish-extras">

          <h6>extras</h6>

          <ul className="extras">
            { 
              extrasArray.map((item, index) => (
                <li key={index}>- {item}</li>
              ))
            }
          </ul>
        </section>
      </>
    );
  }
}

