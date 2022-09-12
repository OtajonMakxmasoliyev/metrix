import React, { Component } from 'react'


//  import images
import Logo from "../images/LogoMetrix.png"

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: "",
            password: "",
        };
    }

    onChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })

        console.log(this.state.email);
        console.log(this.state.password);
    }
    submitForm = () => {
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


    render() {
        return (
            <div className='Login'>
                <div className="Login_top">
                    <img src={Logo} alt="Metrix Logo" />
                </div>

                <div className="Login_form">
                    <img src={Logo} alt="Metrix Logo" />
                    <p>Welcome back!</p>
                    <p>Login to your account</p>
                    <div className="Login_form_submitForm">
                        <input type="email" name="email" placeholder='Email Address' onChange={this.onChangeHandler} />
                        <input type="password" name="password" placeholder='Password' onChange={this.onChangeHandler} />
                        <button onClick={this.submitForm} >submit</button>

                    </div>

                </div>
            </div>
        )
    }
}
