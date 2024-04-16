import { Box, Flex } from '@chakra-ui/react';

// Logo Icons
import instagramIcon from '../../assets/Instagram_Glyph_Gradient.png';
// import xIcon from '../../assets/X.png';
// import facebookIcon from './assets/Facebook_Logo_Primary.png';
// import tiktok from './assets/Tiktok.png';

const Footer = () => {
  return (
    <Box>
      <Flex id="iconsContainer" flex="row">
        <img src={instagramIcon} alt="Instagram Icon" id="instagram"></img>
        {/* <img src={xIcon} alt="X (formerly Twitter) Icon" id="x"></img>
        <img src={facebookIcon} alt="Facebook Icon" id="facebook"></img>
        <img src={tiktok} alt="Tiktok Icon" id="tiktok"></img> */}
      </Flex>
    </Box>
  );
};

export default Footer;
