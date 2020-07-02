import React, { Component } from 'react'
import './booklist.css'
import axios from 'axios'
import GenerateBooks from '../generateBooks/GenerateBooks'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: " ",
            result: [],
            apiKey: "AIzaSyBkreKlZWUTi1ZdZFijpy1MNZye0nyY-KY"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const book = event.target.value;
        this.setState({ book: book });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.book !== " ") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.book}&key=${this.state.apiKey}&maxResults=40`)
                .then(data => {
                    this.setState({ result: data.data.items })
                    console.log(this.state.result);
                })
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <section id="books">
                    <GenerateBooks />
                </section>
                <section id="search" className="container-fluid">
                    <form onSubmit={this.handleSubmit}>
                        <div className="search-bar">
                            <label htmlFor="search">Search and browse books</label>
                            <input
                                className="form-control"
                                type="text" onChange={this.handleChange}
                                placeholder="Search by book's title"
                                name="search"
                            />
                        </div>
                        <button type="submit" className=" btn btn-secondary">Search</button>
                    </form>
                    <section>
                        {
                            this.state.result.map(book => (
                                <a href={book.volumeInfo.previewLink}>
                                    <h5>{book.volumeInfo.title}</h5>
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                                </a>
                            ))
                        }
                    </section>
                </section>
            </div>
        )
    }
}

export default Footer;