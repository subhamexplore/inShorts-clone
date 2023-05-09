import React from 'react'
import TemporaryDrawer from './TemporaryDrawer'
import "./Navbar.css"

const Navbar = ({setCategory}) => {
  return (
<>
    <div className="nav">
        <div className="icon"><TemporaryDrawer setCategory = {setCategory}/></div>
        <img src="/inshort-logo.png" style={{cursor: "pointer"}} height="35px" alt="logo" />
    </div>
</>
  )
}

export default Navbar