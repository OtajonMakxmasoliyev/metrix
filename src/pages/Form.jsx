import React, { Component } from 'react'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { SignIn, SignUp } from "../components/SignIn"
//  import images
import Logo from "../images/LogoMetrix.png"
import Message from "../images/icons/Message.png"
import Lock from "../images/icons/Lock.png"

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: "",
            password: "",
            fullName: "",
            showHide: true,
            signIn: true
        };
    }

    onChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })

        console.log(this.state.email);
        console.log(this.state.password);
    }
    submitIn = () => {
        const url = `https://url`
        const { email, password } = this.state;
        alert("Jo'natilishga tayyor")
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => console.log(res))
            .then(response => console.log(response))
            .catch(err => console.log(err))
        console.log({ email, password });
    }
    submitUp = () => {
        const url = `https://url`
        const { email, password, fullName } = this.state;
        alert("Jo'natilishga tayyor")
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => console.log(res))
            .then(response => console.log(response))
            .catch(err => console.log(err))
        console.log({ email, password, fullName });
    }

    chaqir = () => {
        this.setState({ signIn: !this.state.signIn })
    }

    render() {
        return (
            <div className='Login'>
                <div className="Login_top">
                    <img src={Logo} alt="Metrix Logo" />
                </div>
                {
                    this.state.signIn ? <SignIn onChange={this.onChangeHandler} chaqir={this.chaqir} Submit={this.submitIn} /> : <SignUp onChange={this.onChangeHandler} chaqir={this.chaqir} Submit={this.submitUp} />
                }
                {/* <div className="Login_form">
                    <img src={Logo} alt="Metrix Logo" />
                    <div className="Login_form_title">
                        <p className='title'>Welcome back!</p>
                        <p className='info'>Login to your account</p>
                    </div>
                    <div className="Login_form_submitForm">
                        <div> <img src={Message} /><input type="email" name="email" placeholder='Email Address' onChange={this.onChangeHandler} /></div>
                        <div> <img src={Lock} /><input type={this.state.showHide ? "password" : "text"} name="password" placeholder='Password' onChange={this.onChangeHandler} /> <button onClick={() => this.setState({ showHide: !this.state.showHide })}><i>{this.state.showHide ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}</i></button></div>
                        <button>Recover Password</button>

                    </div>
                    <p>Don’t have an account? <button>Sign Up</button></p>
                    <button className='Submit' onClick={this.submitForm} >submit</button>

                </div> */}
            </div >
        )
    }
}
