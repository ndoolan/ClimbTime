import { Flex } from '@chakra-ui/react';
import QuickLogForm from '../components/QuickLogForm/QuickLogForm';
import LogDisplay from '../components/LogDisplay/LogDisplay';
// import axios from 'axios';

const Logs = () => {
  return (
    <Flex direction="row" justifyContent="center" gap={400}>
      <QuickLogForm />
      <LogDisplay />
    </Flex>
  );
};

export default Logs;
