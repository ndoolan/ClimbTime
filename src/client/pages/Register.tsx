import {
  Flex,
  FormControl,
  FormLabel,
  // FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../hooks/dispatch';
import { registerUser, registerForm } from '../store/reducers/userReducer';

export const Register = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerForm>();

  const submitForm = async (registerForm: registerForm) => {
    try {
      dispatch(registerUser(registerForm));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
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
