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
import { loginUser, loginCreds } from '../../store/reducers/userReducer';
import { useAppDispatch } from '../../hooks/dispatch';

// let username: string;
// let password: string;
// LOGIN REFERENCE ??

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useAppDispatch();
  //<HTMLInputElement>

  // const handleLogin = async (
  //   e: React.MouseEvent<HTMLButtonElement>,
  //   username: string,
  //   password: string
  // ) => {
  //   e.preventDefault();
  //   username = usernameRef?.current?.value;
  //   password = passwordRef?.current?.value;
  //   console.log('inside login', username, password);
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

  const handleLogin = async (e: any, username: string, password: string) => {
    e.preventDefault();

    const creds: loginCreds = {
      username: username,
      password: password,
    };

    try {
      console.log('insideHL', creds);
      dispatch(loginUser(creds));
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
            <Button
              onClick={(e) =>
                handleLogin(
                  e,
                  usernameRef?.current?.value,
                  passwordRef?.current?.value
                )
              }
            >
              Submit
            </Button>
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
