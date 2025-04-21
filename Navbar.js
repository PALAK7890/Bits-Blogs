const Navbar = () => {
    return ( 
        <>
        <nav className="navbar">
        <div className="logo">
            <img src="https://i.pinimg.com/474x/f7/5a/66/f75a6651a79a613ccf335fe6e08e329c.jpg" alt='logo' style={{height:'50px',width:'50px', marginRight: '10px'}}></img>
        </div>

        <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
        </ul>

        <div className="search-auth">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="signin-btn">Sign In</button>
            <button className="signup-btn">Sign Up</button>
        </div>
        </nav>
        </>
     );
}
 
export default Navbar; 