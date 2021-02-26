import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link>
        <li>Home</li>
      </Link>
      <Link>
        <li>About</li>
      </Link>
    </nav>
  );
}

export default Nav;
