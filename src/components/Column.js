import React from 'react'
import '../assets/css/fa.css'

export default (props) => {
	const { service, index } = props
	return(
        <div className="col-md-4" id={index} key={index}>
            <div className="box" key={index+1}>
                <div className={service.bgHover}>
                    <div className="icon"> 
                    	<img src='' className={service.imClass} width="93px" height="85px" alt="" />
                    </div>
                    <h4 key={index+4}>{service.title}</h4>
                    <p className={service.cardDescription} key={index+5}>{service.description}</p>
                    <span className={service.learnMore}  key={index+6}>
			      		Learn More&nbsp;<i className={service.icon} key={index+7}></i>
			    	</span>
                </div>
            </div>
        </div>
	)
}

{/*		<div className="column" id={index} key={index}>
			<a className={service.card} href={service.href} key={index+1}>
			  <div className={service.circle} key={index+2}>{service.svg}</div>
			  <div className={service.cardBody} key={index+3}>
			    <h3 className={service.cardTitle}  key={index+4}>{service.title}</h3>
			    <p className={service.cardDescription} key={index+5}>{service.description}</p>
			    <span className={service.learnMore}  key={index+6}>
			      Learn More&nbsp;<i className={service.icon} key={index+7}></i>
			    </span>
			  </div>
			</a>
		</div>*/}