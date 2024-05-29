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



const Login = (): JSX.Element => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useAppDispatch();
  // const successfulLogin = useSelector((state: RootState) => state.user.success);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log('checkMeOut', isOpen);

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

  // if (successfulLogin) {
  //   onClose();
  // }

  return (
    <>
      <Button bg="transparent" onClick={onOpen}>
        Login
      </Button>

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
