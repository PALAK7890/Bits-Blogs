const Navbar = ({ onSignInClick }) => {
    return ( 
      <nav className="navbar">
        <div className="logo">Bits & Blog</div>
  
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Our Blog</a></li>
        </ul>
  
        <div className="search-auth">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="signin-btn" onClick={onSignInClick}>Sign In</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  