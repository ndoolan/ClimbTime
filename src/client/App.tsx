import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './pages/Login';
import Metrics from './pages/Metrics';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Logs from './pages/Logs';

const Layout = () => {
  return (
    <>
      <NavBar />
      <h1>You are Here</h1>
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/logs" element={<Logs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
