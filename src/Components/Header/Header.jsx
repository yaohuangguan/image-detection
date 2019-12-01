import React from "react";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p className="f3 link dim underline pa3 pointer">
        <Link to='/signin' >Sign in</Link>
      </p>
    </nav>
  );
};
export default Header;
