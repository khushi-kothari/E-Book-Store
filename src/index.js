import React from 'react'
import ReactDom from 'react-dom'
import BookList from './Components/Booklist'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import './index.css'

function Store() {
    return (
        <div>
            <Navbar />
            <div className = "flex">
            <Sidebar/>
            <BookList />
            </div>
        </div>
    );
}

ReactDom.render(<Store />, document.getElementById('root'));
