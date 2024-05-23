import { Image, useColorMode } from '@chakra-ui/react';

const Home = () => {
  const { colorMode } = useColorMode()
  console.log(colorMode)
  return (
    // <Box justifyContent="center" alignItems="center">
    //   <Flex>
    <>
    {colorMode === "light" ? <Image src="./Joes_Justin_459kB.jpg" alt="Climbing Photo"></Image> : <Image src="./Joes_Carson_435kB.jpg" alt="Climbing Photo"></Image> }
    </>
    //   </Flex>
    // </Box>
  );
};

export default Home;
