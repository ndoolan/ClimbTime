import { Flex, Switch, FormLabel } from '@chakra-ui/react';
import QuickLogForm from '../components/QuickLogForm/QuickLogForm';
import LogDisplay from '../components/LogDisplay/LogDisplay';
import LogForm from '../components/LogForm/LogForm';
import { useState } from 'react';
// import axios from 'axios';

const Logs = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  return (
    <Flex direction="row" justifyContent="center" gap={400}>
      <Flex direction="column">
        <Switch onChange={handleToggle} />
        {toggle ? <QuickLogForm /> : <LogForm />}
        <FormLabel>Form Toggle</FormLabel>
      </Flex>
      <LogDisplay />
    </Flex>
  );
};

export default Logs;
