import React from 'react';
import './components.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <ul className="navbar">
        <li>ABOUT // </li>
        <li>WORK // </li>
        <li>CONTACT</li>
      </ul>
    );
  }
}

export default NavigationBar;