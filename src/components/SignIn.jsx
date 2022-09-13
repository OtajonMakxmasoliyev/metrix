import React, { useState } from 'react'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


// import images
import Lock from "../images/icons/Lock.png"
import Logo from "../images/LogoMetrix.png"
import Message from "../images/icons/Message.png"
import Profile from "../images/icons/Profile.png"


const SignIn = (props) => {
    const [change, setChange] = useState(false)
    const [showHide, setShowHide] = useState(false)
    return (
        <div className="Login_form">
            <img src={Logo} alt="Metrix Logo" />
            <div className="Login_form_title">
                <p className='title'>Welcome back!</p>
                <p className='info'>Login to your account</p>
            </div>
            <div className="Login_form_submitForm">
                <div> <img src={Message} /><input type="email" name="email" placeholder='Email Address' onChange={props.onChange} /></div>
                <div> <img src={Lock} /><input type={change ? "password" : "text"} name="password" placeholder='Password' onChange={props.onChange} /> <button onClick={() => setChange(!change)}><i>{change ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</i></button></div>
                <button>Recover Password</button>

            </div>
            <p>Don’t have an account? <button onClick={props.chaqir}>Sign Up</button></p>
            <button className='Submit' onClick={props.Submit} >submit</button>

        </div>
    )
}




const SignUp = (props) => {
    const [change, setChange] = useState(false)
    const [showHide, setShowHide] = useState(false)
    return (
        <div className="Login_form">
            <img src={Logo} alt="Metrix Logo" />
            <div className="Login_form_title">
                <p className='title'>Get Started with <span>Metrix</span></p>
                <p className='info'>Create your free account</p>
            </div>
            <div className="Login_form_submitForm">
                <div> <img src={Profile} /><input type="text" name="fullName" placeholder='Your Full Name' onChange={props.onChange} /></div>
                <div> <img src={Message} /><input type="email" name="email" placeholder='Your Email Address' onChange={props.onChange} /></div>
                <div> <img src={Lock} /><input type={showHide ? "password" : "text"} name="password" placeholder='Create a Strong Password' onChange={props.onChange} /> <button onClick={() => setChange(!change)}><i>{change ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</i></button></div>
                <button>Recover Password</button>

            </div>
            <p>Already have an account? <button onClick={props.chaqir}>Login</button></p>
            <button className='Submit' onClick={props.Submit} >submit</button>

        </div>
    )
}

export { SignIn, SignUp }