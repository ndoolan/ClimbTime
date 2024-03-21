import './NavBar.scss';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navWrapper">
      <nav className="main-nav">
        <p>Home</p>
        <button onClick={() => navigate('/logs')}>Logs</button>
        <button onClick={() => navigate('/metrics')}>Metrics</button>
        <button onClick={() => navigate('/register')}>Register</button>
        <button>Login</button>
        <p>Contact</p>
      </nav>
    </div>
  );
};

export default NavBar;
