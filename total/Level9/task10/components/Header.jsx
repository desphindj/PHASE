import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = memo(() => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/about">About</Link>
  </nav>
));

export default Header;
