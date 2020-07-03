import React, { Component } from 'react'
// import usersData from '../usersData'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
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
        const user = {
            email: this.state.email,
            password: this.state.password,
            booksToRead: []
        }
        if (localStorage.getItem(this.state.email) === null && this.state.password.length >= 5) {
            localStorage.setItem(this.state.email, JSON.stringify(user));
            alert("You have successfully registered for Goodreads! Welcome!")
            console.log(localStorage);
        }
        else {
            if(this.state.password.length < 5) alert("Password must be at least 5 symbols!")
            else{
                alert("Email already exists");
                this.setState({ email: "" });
                this.setState({ password: "" });
            }
        }
    }
    render() {
        return (
            this.props.loggedInStatus === "not_logged_in" ?
                <form onSubmit={this.handleSubmit}>
                    <p>New here? Create an account.</p>
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
                        required 
                        />
                    <button className="btn btn-secondary" type="submit">Sign up</button>
                </form>
                :
                null
                // <h5>Here are some suggestions for you</h5>
        )
    }
}

export default Register;
