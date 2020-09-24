import React from 'react'
import {Link} from 'react-router-dom'


import './nav.css'

const nav =()=>{
    return (
        <div className="navdiv">
            <div>
                <h1>HOOK UP</h1>
            </div>
            <div className="navdiv2">
            <Link to='/signin'><button className="signButton ">SignIn</button></Link>
            <Link to='/signup'><button className="signButton ">SignUP</button></Link>
            </div>
           

        </div>
    )
}
export default nav