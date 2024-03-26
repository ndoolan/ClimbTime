import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Metrics from './pages/Metrics';
import NotFound from './pages/NotFound';
import Logs from './pages/Logs';
import Register from './pages/Register';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/logs" element={<Logs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
