import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

const Navbar = () => {
    return (
        <nav>
            <img src="https://cdn2.vectorstock.com/i/1000x1000/71/51/logo-e-book-on-a-computer-screen-vector-4227151.jpg" alt = ""height="110px" width="100px" className = "img_logo"></img>
                <input type="text" name="" id="" placeholder="Search.." className="search"/>
                    <button type="submit" className = "search_btn"> <FontAwesomeIcon  icon={faSearch}/></button>
            <a href="www.google.com" className="link">Authors</a>
            <a href="www.google.com" className="link">Readers</a>
            <a href="www.google.com" className="link">About Us</a>
            <a href="www.google.com" className="link">Login / SignUp</a>
        </nav>
    );
}

export default Navbar