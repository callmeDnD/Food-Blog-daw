import React from 'react'
import fooddata from '../fooddata.json';


const Allfood = () => {
  return (
    <div>
    {fooddata.map((item) => (
      <div key={item.id}>
        <h1>{item.name}</h1>
        <img src={item.img} alt={item.name} />
        <p>{item.description}</p>
        <p>Recipe: {item.recipe}</p>
      </div>
    ))}
  </div>
  )
}

export default Allfood