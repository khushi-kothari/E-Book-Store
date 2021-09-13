import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const Book = (props) => {
    console.log(props)
    //const {imageLinks , title, authors, description, download} = props.book;
    const {img, author, title, download} = props.book;
    return ( 
    <article className="book">
        <img src={img} alt="" className = "image"/>
        <div className="details">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque delectus accusamus, minima eos facere dolore. Praesentium, similique? Cum odio nihil commodi dolor accusamus itaque sunt distinctio cumque, laborum vero sapiente?</p>
        <Button variant="info" href={download}>Download</Button>
        </div>
    </article>
    );
};

export default Book