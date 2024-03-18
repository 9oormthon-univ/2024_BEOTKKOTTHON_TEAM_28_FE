import { Box, Image } from '@chakra-ui/react';

import ProfileEditModal from './ProfileEditModal';
import tomato from '../../assets/tomato.png';

const Profile = () => {
  return (
    <Box w='292px' position='fixed' top='138px'>
      <Image src={tomato} alt='프로필' width='120px' />
      <Box className='SubHead-xl' marginTop='19px' marginBottom='13px'>
        유저 이름
      </Box>
      <ProfileEditModal />
    </Box>
  );
};

export default Profile;
