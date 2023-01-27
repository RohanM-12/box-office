import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/Starred', text: 'Starred' },
];

function Navbar() {
  return (
    <div>
      <ul>
        {LINKS.map(item => {
          return (
            <li>
              <Link to={item.to}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
