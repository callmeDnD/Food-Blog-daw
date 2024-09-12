import React from 'react'
import fooddata from '../fooddata.json'; 
import '../styles/otherfood.css'
import { Link } from 'react-router-dom';



const idKulapo = [6, 7, 8, 9, 10]
const otherfood = fooddata.filter(item => idKulapo.includes(item.id));
const Otherfood = () => {
  return (
    <div className="container">
  <div className='other-food-wrapper'>
        <div className="header">
  <h1>These are the other goodshit food in philippines</h1>
  </div>
 <div className="otherfood-container">
   
      {otherfood.length > 0 ? (
        otherfood.map(item => (
          <div key={item.id} className="other-food-card"> 
          <div className="other-food-img-container"> 
            <img src={item.img} alt={item.name} className="other-food-image" />
            </div>
            <div className="other-food-description">
              <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>  
              
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div>
    </div>
    
      
    </div>
  )
}

export default Otherfood