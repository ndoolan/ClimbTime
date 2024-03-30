import {
  Flex,
  FormControl,
  FormLabel,
  // FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const submitForm = async (data: any) => {
  try {
    axios.post('auth/register', data).then((data) => console.log(data));
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
      <Flex direction="column" p={4} gap={4}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            placeholder="username"
            {...register('username', { required: true })}
          />
          {errors.username && (
            <span style={{ color: 'red' }} role="alert">
              Username is required
            </span>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="password"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <span style={{ color: 'red' }} role="alert">
              Password is required
            </span>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="sample@sample.com"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span style={{ color: 'red' }} role="alert">
              Email is required
            </span>
          )}
        </FormControl>
        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
};

export default Register;
