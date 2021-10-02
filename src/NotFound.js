import { Link } from "react-router-dom"
import logo from './logo.png';


const NotFound = () => {
    return ( 
        <div className="not-found">
            <Link to="/"><img src={logo} alt="Logo" className="notfound-logo bounce rotate" /></Link>
            <h2>Whoops!!!</h2>
            <p>This page cannot be found</p>
            <Link to='/'>Click here to return to homepage...</Link>
        </div>
     );
}
 
export default NotFound;