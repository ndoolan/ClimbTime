import { Card, CardBody, Text, Button } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

interface QuickLogProps {
  name: string;
  location: string;
  grade: number;
  flash: boolean;
  _id: string;
}
// : JSX.Element
const QuickLog: React.FC<QuickLogProps> = ({
  name,
  location,
  grade,
  flash,
  _id,
}) => {
  const deleteLog = async () => {
    try {
      const res = await axios.post('/logs/remove', { _id: _id });
      setRemove(res.data);
    } catch (error) {
      console.log('Error deleting log:', error);
    }
  };
  const [remove, setRemove] = useState(false);

  if (remove) {
    return <Text>Deleted</Text>;
  }

  return (
    <Card>
      <CardBody>
        <Text>Name: {name}</Text>
        <Text>Location: {location}</Text>
        <Text>Grade: {grade}</Text>
        {flash ? <Text>Yes</Text> : <Text>No</Text>}
        <Button onClick={deleteLog}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default QuickLog;
