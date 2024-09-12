import React from 'react'
import '../styles/homepage.css'
import background from './background.jpg'


const Homepage = () => {
  return (
    <div className="container" id='home'>
        <div className="content">
            <h1>Welcome to Philippine Delicacies</h1>
            <p>Discover the rich and diverse flavors of <br />
                 the Philippines, where every region offers <br />
                  a unique taste experience. From savory <br />
                  classics to sweet treats, this site will guide <br />
                  you through the delicious and vibrant world of <br />
                  Filipino cuisine. Dive in and explore the dishes <br />
                  that make the Philippines a true food lover’s paradise!</p>
        </div>
        <div className="content">
            <img src={background} alt="" />
        </div>
    </div>
  )
}

export default Homepage