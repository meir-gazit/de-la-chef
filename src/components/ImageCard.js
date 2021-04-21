import React from 'react'
import PropTypes from 'prop-types'

const imgPath = '/imageGallery/foodColors/images_'
const imgExtension = '.jpeg'

const Card = ({property}) => {

    return (
        <div id={`card-${property.index}`} className="card">
            <img src={imgPath + property._id + imgExtension} alt='' />
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;

