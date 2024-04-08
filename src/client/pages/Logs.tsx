import { Flex, Switch, FormLabel, Spinner } from '@chakra-ui/react';
import QuickLogForm from '../components/QuickLogForm/QuickLogForm';
import LogDisplay from '../components/LogDisplay/LogDisplay';
import LogForm from '../components/LogForm/LogForm';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import NoUser from '../components/NoUser/NoUser';

const Logs = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const isLoading = useSelector((state: RootState) => state.user.isLoading);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    console.log(toggle);
    setToggle(!toggle);
  };

  if (!currentUser) {
    return <NoUser />;
  }

  // if(isLoading){
  //   return <Spinner/>
  // }

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
