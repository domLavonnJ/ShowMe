import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Contact = () => {
  return (
    <div>
        <h1>Contact</h1>

        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>



       <div style={{backgroundColor: 'red'}}>
           <Outlet />
       </div>





    </div>
  )
}

export default Contact