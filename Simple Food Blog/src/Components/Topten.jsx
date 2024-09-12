import React from 'react';
import fooddata from '../fooddata.json'; 
import '../styles/topten.css'

const Topten = () => {
    const top10 = fooddata.filter(item => item.id <= 5);

  return ( 
    <div id='foods' className='top-ten-wrapper'>
        <div className="header">
  <h1>Top 5 Best Dishes in Philippines</h1></div>
 <div className="topten-container">
   
      {top10.length > 0 ? (
        top10.map(item => (
          <div key={item.id} className="item-card"> 
          <h1>{item.name}</h1>
            <div className="image-container">
              <img src={item.img} alt={item.name} className="item-image" />
              <div className="description-overlay">
                <p>{item.description}</p>
              </div>
            </div>
           
          </div>
        ))
      ) : (
        <p>No items found</p>
      )}
    </div></div>
  )
}

export default Topten
