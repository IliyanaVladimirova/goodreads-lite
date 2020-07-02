import React, { Component } from 'react'
import axios from 'axios'
import './generate-books.css'

class GenerateBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randBooksList: [],
            apiKey: "AIzaSyBkreKlZWUTi1ZdZFijpy1MNZye0nyY-KY",
            isClicked: false
        }
        this.showDetails = this.showDetails.bind(this);
    }
    componentDidMount() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry&key=${this.state.apiKey}&maxResults=9`)
            .then(data => {
                this.setState({ randBooksList: data.data.items })
                console.log(this.state.randBooksList)
            })
    }
    showDetails(event) {
        let clickedid = document.querySelector(`#${event.target.id}`);
        console.log(clickedid.id);

        let par = document.querySelector(`#${clickedid.id}+.hidden`);
    
        this.setState(prevState => {
            return {
                isClicked: !prevState.isClicked
            }
        })
        !this.state.isClicked ? par.style.display = "block" : par.style.display = "none"
    }

    render() {
        return (
            <div className="books-container container-fluid">
                {
                    this.state.randBooksList.map((randbook, i) => (
                        <div className="basis container-fluid">
                            <h5>{randbook.volumeInfo.title}</h5>
                            <img id={`num${i}`} onClick={this.showDetails}
                                src={randbook.volumeInfo.imageLinks.thumbnail}
                                alt={randbook.title}
                            />
                            <div className="hidden">
                                <p>{randbook.volumeInfo.description}</p>
                                <button className="btn btn-secondary">Add to "Want to read"</button>
                                <button className="btn btn-secondary">Add to "Read"</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default GenerateBooks;