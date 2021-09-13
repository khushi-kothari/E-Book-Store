import React, {Component } from 'react'
import Book from './Book'
import '../index.css'

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoaded: false,
        };
    }
/*
    componentDidMount() {
            fetch("https://google-books.p.rapidapi.com/volumes?key=AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d63de63fb3msh3ebb1948e34b61fp1ab337jsna64ecfd18b48",
		"x-rapidapi-host": "google-books.p.rapidapi.com"
	}
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                books: json,
            })
        })
        .catch(err => {
            console.error(err);
        });
    }*/

    render() {
        /*var { isLoaded, books } = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>;
        }

        else {*/
        return (
        <section className="booklist">
            <h1> Store </h1>
            {books.map((book=><Book book={book}></Book>))}
        </section>);
    }
}
//}

const books = [
    {
        img: 'data:image/jpeg;base64,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',
        title: 'The Richest Man in Babylon',
        author: 'George S. Clason',
        download: '#'
    },
    {
        img: 'data:image/jpeg;base64,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',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        download: '#'
    },
    {
        img: 'data:image/jpeg;base64,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',
        title: 'The Psychology of Money',
        author: 'Morgan Housel',
        download: '#'
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg',
        title: 'Ikigai: The Japanese secret to a long and happy life',
        author: 'Héctor García',
        download: '#'
    },
    {
        img: 'https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg',
        title: 'Rich Dad Poor Dad',
        author: 'Robert T. Kiyosaki',
        download: '#'
    },
    ];


export default BookList
