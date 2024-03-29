import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const submitQuickLog = async (data: any) => {
  console.log(data);
  try {
    axios.post('logs/quickLog', data).then((data) => console.log(data));
    // reset();
  } catch (error) {
    console.log(`Error sending form to Sever. Error: ${error}`);
  }
};

const QuickLogForm = () => {
  const {
    register,
    handleSubmit,
    // reset, // reset form method, scoping issue
    // formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => submitQuickLog(data))}>
      <Flex direction="column" gap={6}>
        <Heading>Quick Log</Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Climb Name" {...register('name')} />
        </FormControl>
        <Select placeholder="Grade" {...register('grade')}>
          <option value={0}>{0}</option>
          <option value={1}>{1}</option>
          <option value={2}>{2}</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
        </Select>
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input type="text" placeholder="Location" {...register('location')} />
        </FormControl>
        <Checkbox {...register('flash')}>Flash?</Checkbox>
        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
};

export default QuickLogForm;
