import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';
// import axios from 'axios';
import { loginUser, loginCreds } from '../../store/reducers/userReducer';
import { useAppDispatch } from '../../hooks/dispatch';

// const handleLogin = async (
//   e: React.MouseEvent<HTMLButtonElement>,
//   username: string,
//   password: string
// ) => {
//   e.preventDefault();
//   username = usernameRef?.current?.value;
//   password = passwordRef?.current?.value;
//   console.log(username, password);
//   //   console.log(usernameRef?.current?.value, passwordRef?.current?.value);
//   try {
//     axios
//       .post(
//         'auth/login',
//         { username: username, password: password },
//         { withCredentials: true }
//       )
//       .then((data) => console.log(data));
//   } catch (error) {
//     console.log(`Error sending form to Sever. Error: ${error}`);
//   }
// };
// let username: string;
// let password: string;

const Login = () => {
  const dispatch = useAppDispatch();
  const usernameRef = useRef<string>('');
  const passwordRef = useRef<string>('');

  // Temp Fix for Obj Param
  const loginCreds: loginCreds = {
    username: usernameRef?.current?.value,
    password: passwordRef?.current?.value,
  };

  const handleLogin = async (e: any, loginCreds: loginCreds) => {
    e.preventDefault();
    console.log('presend', loginCreds);
    // console.log();
    // e.preventDefault()
    try {
      console.log('insideHL', loginCreds);
      dispatch(loginUser(loginCreds));
    } catch (error) {
      console.log(error);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type="text" placeholder="username" ref={usernameRef} />
            <Input type="password" placeholder="password" ref={passwordRef} />
            <Button onClick={(e) => handleLogin(e, loginCreds)}>Submit</Button>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
