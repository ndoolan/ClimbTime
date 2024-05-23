import { Image, useColorMode } from '@chakra-ui/react';

const Home = () => {
  const { colorMode } = useColorMode()
  console.log(colorMode)
  return (
    // <Box justifyContent="center" alignItems="center">
    //   <Flex>
    <>
    {colorMode === "light" ? <Image src="./Joes_Justin.jpg" alt="Climbing Photo"></Image> : <Image src="./Joes_Carson.jpg" alt="Climbing Photo"></Image> }
    </>
    //   </Flex>
    // </Box>
  );
};

export default Home;
