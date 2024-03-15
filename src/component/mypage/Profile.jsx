import { Box } from '@chakra-ui/react';
import ProfileEditModal from './ProfileEditModal';
import tomato from '../../assets/tomato.png';

const Profile = () => {
  return (
    <Box w='292px'>
      <img src={tomato} alt={tomato} width={120} height={120} />
      <div>유저 이름</div>
      <ProfileEditModal />
    </Box>
  );
};

export default Profile;
