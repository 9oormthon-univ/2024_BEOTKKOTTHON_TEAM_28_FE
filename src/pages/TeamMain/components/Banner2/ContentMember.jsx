import { Box, Flex, Image } from '@chakra-ui/react';

import BalloonSVG from '../../../../components/atoms/BalloonSVG';
import PropTypes from 'prop-types';
import { getPartName } from '../../../../lips/getPartName';

const ContentMember = ({ profile, username, part }) => {
  return (
    <Box position='relative' role='group'>
      <Image src={profile} width='32px' height='32px' borderRadius='50px' />
      <Flex
        position='absolute'
        gap='8px'
        width='118px'
        justifyContent='center'
        alignItems='center'
        top='60px'
        zIndex={99}
        display='none'
        _groupHover={{ display: 'flex' }}
      >
        <Box className='Body-lg' textColor='#ffffff'>
          {username}
        </Box>
        <Box className='SubHead-sm' textColor='#64748B'>
          {getPartName(part)}
        </Box>
      </Flex>
      <Box position='absolute' display='none' _groupHover={{ display: 'block' }}>
        <BalloonSVG isLong />
      </Box>
    </Box>
  );
};

ContentMember.propTypes = {
  profile: PropTypes.string,
  username: PropTypes.string,
  part: PropTypes.string,
};

export default ContentMember;
