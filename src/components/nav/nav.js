import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '../../../config/index';

import './nav.scss';

const Nav = () => {
  console.log(navLinks);
  return (
    <div className="nav">
      <div className="link-section">
        <div className="link-list">
          {navLinks.map(({ name, url }) => (
            <li className="list-item">
              <Link className="item-link">
                {name}
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Nav;