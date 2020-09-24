import React from 'react'
import Logo from '../hookup.png'
import './signin.css'


const signIn = ()=>{
    return(
        <div>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div>
            <form>
                <label>Name</label>
                <input type='text' placeholder="Enter User Name/Email" /><br />
                <label>Password</label>
                <input typw="password" placeholder="******" />
            </form>
            </div>
            
        </div>
    )
}
export default signIn