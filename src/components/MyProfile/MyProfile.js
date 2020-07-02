import React, { Component } from 'react'

class MyProfile extends Component {
    render() {
        return (
            <section>
                <section id="books-to-read">
                    <h1>Books I want to read</h1>
                </section>
                <section id="books-read">
                    <h1>
                        Books I already read
                    </h1>
                </section>
            </section>
        )
    }
}

export default MyProfile;