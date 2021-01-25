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
                  src="/images/img-1.png"
                  text="Forcast"
                  label='Weather'
                  path='/Portfolio'
                  button="ExtLink"
                  />
                  <Carditem 
                  src="/images/img-2.png"
                  text="Secure Password Generator"
                  label='Password'
                  path='/Portfolio'
                  />
                  <Carditem 
                  src='/images/img-3.png'
                  text="Hobby tracker"
                  label='Hobby'
                  path='/Portfolio'
                  />
                  <Carditem 
                  src='/images/img-4.png'
                  text="Park Finder"
                  label='Parks'
                  path='/Portfolio'
                  button="ExtLink"
                  />
                  <Carditem 
                  src='/images/img-5.png'
                  text="Activity Tracker"
                  label='Fitness'
                  path='/Portfolio'
                  />
                  <Carditem 
                  src='/images/img-6.png'
                  text="Knowledge Quiz"
                  label='Quiz'
                  path='/Portfolio'
                  />
                  </ul> 
            </div>
        </div>
    )
}

export default Cards;
