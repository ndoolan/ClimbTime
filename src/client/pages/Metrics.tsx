import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import NoUser from '../components/NoUser';

const Metrics = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  if (!currentUser) {
    return <NoUser />;
  }

  return <div>Metrics are here buddy, you are great</div>;
};

export default Metrics;
