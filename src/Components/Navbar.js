import React from 'react';
import { useLocation } from 'react-router';

import { NavList, LinkStyled } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/Starred', text: 'Starred' },
];

function Navbar() {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {LINKS.map(item => {
          return (
            <li key={item.to}>
              <LinkStyled
                to={item.to}
                className={item.to === location.pathname ? 'active' : ''}
              >
                {item.text}
              </LinkStyled>
            </li>
          );
        })}
      </NavList>
    </div>
  );
}

export default Navbar;
