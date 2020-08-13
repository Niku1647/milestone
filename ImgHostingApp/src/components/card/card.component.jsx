import React from 'react';




import Likes from './like'
import './card.styles.css'
import Toggle from '../toggle/toggle'



export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>

    <p> {props.monster.email} </p>

    <div className="like-comment">

        <div >
            <Likes />
        </div>

        <div >
              <Toggle />
        </div>

    </div>
    
      
    
  </div>
);