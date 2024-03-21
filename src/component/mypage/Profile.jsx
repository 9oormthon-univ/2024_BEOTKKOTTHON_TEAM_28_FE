import { Box, Image } from '@chakra-ui/react';

import ProfileEditModal from './ProfileEditModal';
import getUserInfo from '../../api/dashboard/getUserInfo';
import { returnProfileImg } from '../../lips/returnProfile';
import { useEffect } from 'react';
import { useState } from 'react';

const Profile = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUserInfo();
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <Box w='292px' position='fixed' top='138px'>
      <Image src={returnProfileImg(data?.profileImage)} alt='프로필' width='120px' />
      <Box className='SubHead-xl' marginTop='19px' marginBottom='13px'>
        {data?.nickname}
      </Box>
      <ProfileEditModal />
    </Box>
  );
};

export default Profile;
