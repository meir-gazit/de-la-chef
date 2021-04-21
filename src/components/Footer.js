import React from 'react'
import {
  classPass,
  deliveroo,
  dropbox,
  github,
  microsoft,
  nytimes,
  coinbase,
  slack,
  square,
  twitter,
  walgreens,
  zoom  
}  from '../assets'
import '../assets/css/footer.css'
import Tippy from '@tippy.js/react'
import '../assets/css/tippy.css'

export default () => 
<section className="css-8qn308">
    <div className="css-1ujqg4j">
      <div className="css-uo4fcy">Brands that loves us</div>
      <div className="css-5r4unj">
         <div><Tippy content='classpass'><a target='_blank' href="https://www.classpass.com/" className="classpass social"><img src={classPass} alt="ClassPass"/></a></Tippy></div>
         <div><Tippy content='deliveroo'><a target='_blank' href="https://www.deliveroo.com/" className="deliveroo social"><img src={deliveroo} alt="Deliveroo"/></a></Tippy></div>
         <div><Tippy content='dropbox'><a target='_blank' href="https://www.dropbox.com/"   className="dropbox social"><img   src={dropbox}   alt="Dropbox"/></a></Tippy></div>
         <div><Tippy content='github'><a target='_blank' href="https://www.github.com/"    className="github social"><img    src={github}    alt="Github"/></a></Tippy></div>
         <div><Tippy content='microsoft'><a target='_blank' href="https://www.microsoft.com/" className="microsoft social"><img src={microsoft} alt="Microsoft"/></a></Tippy></div>
         <div><Tippy content='nytimes'><a target='_blank' href="https://www.nytimes.com/"   className="nytimes social"><img   src={nytimes}   alt="NYTimes"/></a></Tippy></div>
         <div className='coinbase'><Tippy content='coinbase'><a target='_blank' href="https://www.coinbase.com/"  className="coinbase social"><img  src={coinbase}  alt="Coinbase"/></a></Tippy></div>
         <div><Tippy content='slack'><a target='_blank' href="https://www.slack.com/"     className="slack social"><img     src={slack}     alt="Slack"/></a></Tippy></div>
         <div><Tippy content='square'><a target='_blank' href="https://www.square.com/"    className="square social"><img    src={square}    alt="Square"/></a></Tippy></div>
         <div><Tippy content='twitter'><a target='_blank' href="https://www.twitter.com/"   className="twitter social"><img   src={twitter}   alt="Twitter"/></a></Tippy></div>
         <div><Tippy content='walgreens'><a target='_blank' href="https://www.walgreens.com/" className="walgreens social"><img src={walgreens} alt="Walgreens"/></a></Tippy></div>
         <div><Tippy content='zoom'><a target='_blank' href="https://www.zoom.com/"      className="zoom social"><img      src={zoom}      alt="Zoom"/></a></Tippy></div>
      </div>
    </div>
    <hr className='hr' />
    <div className='footerTitle'>
      <p>&copy;{new Date().getFullYear()} De La Chef | All rights reserved | Terms Of Service | Privacy | de.la.chef.mail@gmail.com | 972+077-33-9292</p>
    </div>
</section>