import { Box, Image } from '@chakra-ui/react';

import ProfileEditModal from './ProfileEditModal';
import PropTypes from 'prop-types';
import getUserInfo from '../../api/dashboard/getUserInfo';
import { returnProfileImg } from '../../lips/returnProfile';
import { useEffect } from 'react';
import { useState } from 'react';

//import { useParams } from 'react-router-dom';

const Profile = ({ isOther }) => {
  const [data, setData] = useState();
  // TODO
  // const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      if (isOther) {
        const response = await getUserInfo();
        setData(response);
      } else {
        const response = await getUserInfo();
        setData(response);
      }
    };

    fetchData();
  }, [isOther]);

  return (
    <Box w='292px' position='fixed' top='138px'>
      <Image src={returnProfileImg(data?.profileImage)} alt='프로필' width='120px' />
      <Box className='SubHead-xl' marginTop='19px' marginBottom='13px'>
        {data?.nickname}
      </Box>
      {!isOther && <ProfileEditModal data={data} />}
    </Box>
  );
};

Profile.propTypes = {
  isOther: PropTypes.bool,
};

export default Profile;
