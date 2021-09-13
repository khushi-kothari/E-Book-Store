import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX

// Readable
function Greeting() {
  return (
      <div>
  <Person />
  <Message />
  </div>);
}

// Not so readable.. and it gets more messier

// const Greeting= () => {
//     return React.createElement('div', {}, React.createElement('h1', {}, 'hello world'));
// };

const Person = () => <h2> John doe</h2>;
const Message = () => {
  return <p> This is my message</p>
};

//ReactDom.render(<Greeting />, document.getElementById('root'));

// JSX Rules
// return single element
// div / section / article or Fragment
// className instead of class
// close every element
// formating
