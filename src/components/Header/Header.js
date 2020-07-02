import React, { Component } from 'react'
import './header.css'
import SignIn from '../SignIn/SignIn'
import Register from '../Register/Register'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            loggedInStatus: "not_logged_in",
        }
        this.handler = this.handler.bind(this)
        this.logout = this.logout.bind(this)
        this.getUser = this.getUser.bind(this)
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
    getUser(){
        // let userObj = JSON.parse(this.props.user) 
        this.setState({
            user: this.props.user
        })
        console.log(this.props.user)
        console.log(this.state.user);
    }
    render() {
        return (
            <header className="container-fluid">
                <div className="header">
                    <figure id="logo">goodreads lite</figure>
                    <SignIn
                        logout={this.logout}
                        handler={this.handler}
                        getUser={this.getUser}
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