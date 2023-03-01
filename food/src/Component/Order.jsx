import React from 'react'
import { NavLink } from 'react-router-dom'
const Order = (props) => {
console.log(props)


  return (
   <>

   <div className='order'>
    <div className='summray'>
        <h4>order summary</h4>
        {/* <h5>{props.img.name}</h5> */}

        <button className='btnhome'><NavLink to="/Details" style={isActive => ({
    color: isActive ? "white" : "blue"

  })}>checkout </NavLink></button>
    </div>
   </div>
   </>
  )
}

export default Order