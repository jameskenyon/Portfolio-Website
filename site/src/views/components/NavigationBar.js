import React from 'react';
import './components.css';

class NavigationBar extends React.Component {
  render() {
    return (
      <ul className="navbar">
        <li id='nav_li'>ABOUT // </li>
        <li id='nav_li'>WORK // </li>
        <li id='nav_li'>CONTACT</li>
      </ul>
    );
  }
}

export default NavigationBar;