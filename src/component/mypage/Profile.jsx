import { Box } from '@chakra-ui/react';
import ProfileEditModal from './ProfileEditModal';
import tomato from '../../assets/tomato.png';

const Profile = () => {
  return (
    <Box w='292px' position='fixed' top='100px'>
      <img src={tomato} alt={tomato} width={120} height={120} />
      <Box className='SubHead-xl' marginTop='19px' marginBottom='13px'>
        유저 이름
      </Box>
      <ProfileEditModal />
    </Box>
  );
};

export default Profile;
