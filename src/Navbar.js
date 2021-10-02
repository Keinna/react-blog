import { Link } from 'react-router-dom';
import logo from './logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
           
           <Link to="/"><img src={logo} alt="Logo" className="navbar-logo" /></Link>
           <Link to="/"><h1>A Simple React Blog</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;