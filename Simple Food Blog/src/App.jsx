import './App.css'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Topten from './Components/Topten';
import Otherfood from './Components/otherfood';


function App() {
  

  return (
    <>
    <div className="navcontent">
   <Navbar/>
   <Homepage />
   </div>
   <Topten/>
   <Otherfood />
   
   
   </>
    
  )
}

export default App
