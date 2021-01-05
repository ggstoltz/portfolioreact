import React from 'react'
import Carditem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>One</h1>
            <div classname='cards__container'>
              <ul className='cards__items' >
                  <Carditem 
                  src="img-1.png"
                  text="this is app 1"
                  label='Application'
                  path='/services'
                  />
                  <Carditem 
                  src="img-2.png"
                  text="this is app 2"
                  label='Application'
                  path='/services'
                  />
                  <Carditem 
                  src="img-3.jpg"
                  text="this is app 3"
                  label='Application'
                  path='/services'
                  />
                  </ul> 
            </div>
        </div>
    )
}

export default Cards
