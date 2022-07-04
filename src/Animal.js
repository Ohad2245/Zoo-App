import React from 'react'

export default function Animal({ category, existsInIsrael, img, name,numOfLegs }) {
  return (
    <div className='alert'>
        <h3>{category}</h3>
        <p>{name}</p>
        <p>{existsInIsrael}</p>
    </div>
  )
}