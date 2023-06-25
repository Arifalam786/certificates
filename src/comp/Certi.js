import React from 'react'
import { products } from './products'
import { Item } from './Item'
import './Certi.css'


export const Certi = () => {
    const product = products.map((item)=>{
        return(
            <Item image={item.img} title={item.title} desc={item.description}/>
        )
    })
  return (
    <div className='bod'>
       
         {product}
    </div>
  )
}
