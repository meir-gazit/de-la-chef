import React from 'react'
import { Link } from 'react-router-dom'
import { Cover, Poster } from '../components'
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'

// eslint-disable-next-line
export default () => 
  <>
    <Cover>
      <Poster title='De La Chef' subtitle='join our community'>
        <form className='form-control'>
          <input name="firstName" type="firstName" placeholder="firstName"/><br />
          <input name="lastName" type="lastName" placeholder="lastName"/><br />
          <input name="email" type="email" placeholder="email"/><br />
          <input name="password" type="password" placeholder="Password"/><br /><br />
          <Tippy content='Join Us'>
            <Link to='/' className='btn-primary'>Join</Link>
          </Tippy>  
        </form>
      </Poster>
    </Cover>        
  </>