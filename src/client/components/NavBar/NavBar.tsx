import './NavBar.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';

const handleLogout = async () => {
  try {
    axios.post('auth/logout').then((data) => console.log(data));
  } catch (error) {
    console.log(`Error logging out. Error: ${error}`);
  }
};

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navWrapper">
      <nav className="main-nav">
        <p>Home</p>
        <button onClick={() => navigate('/logs')}>Logs</button>
        <button onClick={() => navigate('/metrics')}>Metrics</button>
        <button onClick={() => navigate('/register')}>Register</button>
        <Login />
        <button onClick={handleLogout}>Logout</button>
        <p>Contact</p>
      </nav>
    </div>
  );
};

export default NavBar;
