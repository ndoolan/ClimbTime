import { Image, useColorMode } from '@chakra-ui/react';

const Home = (): JSX.Element => {
  const { colorMode } = useColorMode()
  return (

    <>
    {colorMode === "light" ? <Image src="./Joes_Justin_459kB.jpg" alt="Climbing Photo"></Image> : <Image src="./Joes_Carson_435kB.jpg" alt="Climbing Photo"></Image> }
    </>
  );
};

export default Home;
