import './NavBar.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import {
  Flex,
  Stack,
  Box,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const handleLogout = async () => {
  try {
    axios.post('auth/logout').then((data) => console.log(data));
  } catch (error) {
    console.log(`Error logging out. Error: ${error}`);
  }
};

const NavBar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.300', 'black.800'); // plug in new Light Mode Color?

  return (
    <Box bg={bgColor}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Button onClick={() => navigate('/logs')}>Logs</Button>
        <Button onClick={() => navigate('/metrics')}>Metrics</Button>
        <Button onClick={() => navigate('/register')}>Register</Button>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>

        <Flex>
          <Login />
          <Button onClick={handleLogout}>Logout</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
