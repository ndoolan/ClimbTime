import {
  Box,
  Flex,
  Image,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Logo Icons
import instagramIcon from '../../assets/Instagram.png';
import xIcon from '../../assets/X.png';
import facebookIcon from '../../assets/Facebook.png';
import tiktokIcon from '../../assets/Tiktok.png';

// map off array of icons

const Footer = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.300', 'blackAlpha.700');

  return (
    <Box bg={bgColor} px={4}>
      <Flex
        id="iconsContainer"
        h={24}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <HStack spacing={4} justifySelf="center">
          <Image
            boxSize="2em"
            src={instagramIcon}
            alt="Instagram Icon"
            id="instagram"
          ></Image>
          <Image
            boxSize="2em"
            src={xIcon}
            alt="X (formerly Twitter) Icon"
            id="x"
          ></Image>
          <Image
            boxSize="2em"
            src={facebookIcon}
            alt="Facebook Icon"
            id="facebook"
          ></Image>
          <Image
            boxSize="2em"
            src={tiktokIcon}
            alt="Tiktok Icon"
            id="tiktok"
          ></Image>
        </HStack>
        <Text>Copyright @ 2024 Metrics R Us. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
