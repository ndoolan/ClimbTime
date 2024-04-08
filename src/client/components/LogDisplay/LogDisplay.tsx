import QuickLog from '../QuickLog/QuickLog';
import { Flex, Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { useEffect } from 'react';

interface quickLogData {
  name: string;
  location: string;
  grade: number;
  flash: boolean;
  _id: string;
}

const LogDisplay = () => {
  const isLoading = useSelector((state: RootState) => state.user.isLoading);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [logs, setLogs] = useState<quickLogData[]>([]);
  // Update to useEffect
  // const getLogs = async () => {
  //   try {
  //     const res: AxiosResponse<quickLogData[]> = await axios.get(
  //       'logs/getlogs'
  //     );
  //     console.log(res.data);
  //     setLogs(res.data);
  //     console.log('hi', logs);
  //   } catch (error) {
  //     console.log(`Error getting logs from Sever. Error: ${error}`);
  //   }
  // };

  if (currentUser) {
    useEffect(() => {
      const getLogs = async () => {
        try {
          const res: AxiosResponse<quickLogData[]> = await axios.get(
            'logs/getlogs'
          );
          console.log(res.data);
          setLogs(res.data);
          console.log('hi', logs);
        } catch (error) {
          console.log(`Error getting logs from Sever. Error: ${error}`);
        }
      };
      getLogs();
    }, []);
  }

  return (
    <Flex direction="column" alignItems="center">
      {isLoading && <Spinner />}
      {!isLoading && (
        <div>
          {logs.map((log) => {
            return (
              <QuickLog
                name={log.name}
                grade={log.grade}
                location={log.location}
                flash={log.flash}
                _id={log._id}
                key={log._id}
              />
            );
          })}
        </div>
      )}
    </Flex>
  );
};

export default LogDisplay;
