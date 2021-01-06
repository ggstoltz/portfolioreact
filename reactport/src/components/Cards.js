import React from 'react'
import Carditem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Apps</h1>
            <div classname='cards__container'>
              <ul className='cards__items' >
                  <Carditem 
                  src='images/img-1.png'
                  text="this is app 1"
                  label='Weather'
                  path='/services'
                  />
                  <Carditem 
                  src='images/img-2.png'
                  text="this is app 2"
                  label='Password'
                  path='/services'
                  />
                  <Carditem 
                  src='images/img-3.png'
                  text="this is app 3"
                  label='Hobby'
                  path='/services'
                  />
                  </ul> 
            </div>
        </div>
    )
}

export default Cards;
