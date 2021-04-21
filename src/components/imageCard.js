import React from 'react';
import PropTypes from 'prop-types';

export default ({property}) => {
    const {index, picture, color, type, amount, size, firm} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={color} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {color}<br />
                    {type}
                </p>
                <ul className="features">
                    <li className="icon-bed">{amount} <span>amount</span></li>
                    <li className="icon-bath">{size} <span>size</span></li>
                    <li className="icon-car">{firm} <span>firm</span></li>
                </ul>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

