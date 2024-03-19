import { Box, Button, Flex, Image } from '@chakra-ui/react';

import tomato from '../../assets/tomato.png';

const ProfileEditModalUserItem = () => {
  return (
    <Flex direction='column' gap='12px' alignItems='flex-start'>
      <Flex gap='8px'>
        <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
        <Flex>
          <Box>김새싹</Box>
        </Flex>
      </Flex>
      <Button className='SubHead-lg' paddingX='16px' variant='grayWhite'>
        권한 위임
      </Button>
    </Flex>
  );
};

export default ProfileEditModalUserItem;
