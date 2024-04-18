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
  const bgColor = useColorModeValue('gray.300', 'black.800');

  return (
    <Box bg={bgColor} px={4} mx={10}>
      <Flex id="iconsContainer" h={16} flex="row" justifyContent="center">
        <HStack spacing={4}>
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
        <Text justifySelf="center">
          Copyright @ 2024 Metrics R Us. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
