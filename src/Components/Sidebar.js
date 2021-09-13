import React from 'react'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const lists = [
    {name: 'Fantasy'},
    {name: 'Adventure'},
    {name: 'Romance'},
    {name: 'Contemporary'},
    {name: 'Dystopian'},
    {name: 'Mystery'},
    {name: 'Horror'},
    {name: 'Thriller'},
    {name: 'Paranormal'},
    {name: 'Science Fiction'},
    {name: 'Historical fiction'},
    {name: 'Memoir'},
    {name: 'Cooking'},
    {name: 'Art'},
    {name: 'Self-help / Personal'},
    {name: 'Motivational'},
    {name: 'Development'},
    {name: 'Health'},
    {name: 'History'},
    {name: 'Travel'},
    {name: 'Guide / How-to'},
    {name: 'Families & Relationships'},
    {name: 'Humor'},
    {name: 'Children’s'},
];

const Sidebar = () => {
    return (
        <div className = "sidebar">
            <h3>Categories</h3>
            <br/>
            <ul>
            {lists.map((list=><li><a href="#">{list.name}</a></li>))}
            </ul>
        </div>
    );
}
        /*
        <ul>
        <li>Fantasy</li>
        <li>Adventure</li>
        <li>Romance</li>
        <li>Porta ac consectetur ac</li>
        <li>Vestibulum at eros</li>
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Morbi leo risus</li>
        <li>Porta ac consectetur ac</li>
        <li>Vestibulum at eros</li>
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Morbi leo risus</li>
        <li>Porta ac consectetur ac</li>
        <li>Vestibulum at eros</li>
        <li>Cras justo odio</li>
        <li>Dapibus ac facilisis in</li>
        <li>Morbi leo risus</li>
        <li>Porta ac consectetur ac</li>
        <li>Vestibulum at eros</li>
        </ul>
 */
        

export default Sidebar