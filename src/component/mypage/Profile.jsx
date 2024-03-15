import { Box } from '@chakra-ui/react';
import ProfileEditModal from './ProfileEditModal';
import tomato from '../../assets/tomato.png';

const Profile = () => {
  return (
    <Box>
      <img src={tomato} alt={tomato} />
      <div>유저 이름</div>
      <ProfileEditModal />
    </Box>
  );
};

export default Profile;
