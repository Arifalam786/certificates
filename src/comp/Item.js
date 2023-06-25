import React from 'react'
import './Item.css'
export const Item = (props) => {
  return (
    <div>
        <div className='items'>
            <img src={props.image} alt='img'></img>
            <div className='des'>
              <h1>{props.title}</h1>
              <p>{props.desc}</p>
            </div>
            <hr className='hr1'></hr>
        </div>
    </div>
  )
}
