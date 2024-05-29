import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import type { RootState } from '../store';
import NoUser from '../components/NoUser';

const Metrics = (): JSX.Element => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  if (!currentUser) {
    return <NoUser />;
  }

  return (
    <Flex p={10}>
  <div>Metrics are here buddy, you are great</div>;
    </Flex>
  )
};

export default Metrics;
