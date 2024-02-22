import './NavBar.scss';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navWrapper">
      <nav className="main-nav">
        <p>Home</p>
        <button onClick={() => navigate('/metrics')}>Metrics</button>
        <button onClick={() => navigate('/logs')}>Logs</button>
        <p>Contact</p>
      </nav>
    </div>
  );
};

export default NavBar;
