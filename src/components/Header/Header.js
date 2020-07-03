import React, { Component } from 'react'
import './header.css'
import SignIn from '../SignIn/SignIn'
import Register from '../Register/Register'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInStatus: "not_logged_in",
        }
        this.handler = this.handler.bind(this)
        this.logout = this.logout.bind(this)
    }
    handler() {
        this.setState({
            loggedInStatus: "logged_in"
        })
    }
    logout() {
        this.setState({
            loggedInStatus: "not_logged_in"
        })
    }
    render() {
        return (
            <header className="container-fluid">
                <div className="header">
                    <figure id="logo">goodreads lite</figure>
                    <SignIn
                        logout={this.logout}
                        handler={this.handler}
                        loggedInStatus={this.state.loggedInStatus}
                    />
                </div>
                <section className="container-fluid">
                    <div className="registration">
                        <h1>Meet your next favourite book!</h1>
                        <Register 
                        loggedInStatus={this.state.loggedInStatus} 
                        />
                    </div>
                </section>
            </header>
        )
    }
}

export default Header;