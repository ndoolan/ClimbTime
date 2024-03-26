import QuickLog from '../QuickLog/QuickLog';
import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface quickLogData {
  name: string;
  location: string;
  grade: number;
  flash: boolean;
  _id: string;
}

const LogDisplay = () => {
  // Update to useEffect
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
  const [logs, setLogs] = useState<quickLogData[]>([]);
  console.log('log from', logs);

  return (
    <Flex direction="column" alignItems="center">
      <button onClick={getLogs}>Get Logs</button>
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
    </Flex>
  );
};

export default LogDisplay;
