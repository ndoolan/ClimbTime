import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const submitForm = async (data: any) => {
  try {
    console.log('inside form', data);
    axios.post('auth/register', data).then((data) => console.log(data));
    console.log('Successful Registration');
  } catch (error) {
    console.log(`Error sending form to Sever. Error: ${error}`);
  }
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => submitForm(data))}>
      <Flex direction="column">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" placeholder="username" {...register('username')} />
          <FormHelperText>Select a username</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="password"
            {...register('password')}
          />
          <FormHelperText>Select a password</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="sample@sample.com"
            {...register('email')}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
};

export default Register;
