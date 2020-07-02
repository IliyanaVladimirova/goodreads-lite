import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            user:""
        }
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangePassword(event) {
        const password = event.target.value;
        this.setState({ password: password });
        console.log(password);

    }
    handleChangeEmail(event) {
        const email = event.target.value;
        this.setState({ email: email });
        console.log(email);
    }
    handleSubmit(event) {
        event.preventDefault();

        //check for password should be added
        if (localStorage.getItem(this.state.email) === null) {
            alert("The username you entered is incorrect");
            this.setState({ email: "" });
            this.setState({ password: "" });
        }
        else {
            console.log("you have successfully signed in");
            this.props.handler();
            var currentUser = JSON.parse(localStorage.getItem(this.state.email," "));
            console.log(currentUser)
            this.setState({user: currentUser})
            this.props.getUser()
        }
    }
    render() {
        return (
            this.props.loggedInStatus === "not_logged_in" ?
                <form id="sign-in" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChangeEmail}
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={this.state.email}
                        required
                    />
                    <input onChange={this.handleChangePassword}
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        required />
                    <button className="btn btn-secondary" type="submit">Sign in</button>
                </form>
                :
                <div id="profile-link">
                    <Link to="/myProfile" className="nav-item nav-link">My Profile</Link>
                    <button className="btn btn-secondary" onClick={this.props.logout}>Sign out</button>
                </div>
        )
    }
}

export default SignIn;