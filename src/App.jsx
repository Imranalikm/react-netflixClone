
import React  from 'react'
import {action,originals,comedy, horror, romance} from "./constants/urls"
import './App.css'
import NavBar from './Components/navBar/NavBar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/RowPost/Rowpost'

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={originals}  title="Netflix Originals"/>
      <Rowpost url={action} title="Action" isSmall/>
      <Rowpost url={comedy} title="Comedy" isSmall/>
      <Rowpost url={romance} title="Romance" isSmall/>
      <Rowpost url={horror} title="Horror" isSmall/>
      
      
    </div>
  )
}

export default App
