import { Box, Button, Flex } from '@chakra-ui/react';

import { MemberItem } from '../mocules';
import PropTypes from 'prop-types';
import { getMemberList } from '../../../api/taskhistory';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const MemberList = ({ isWhite }) => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMemberList(id);

      setData(response?.memberList ?? []);
    };

    fetchData();
  }, [id]);

  return (
    <Flex direction='column' gap='12px'>
      {isWhite ? (
        <Flex direction='column'>
          <Box>스타트업 밸리팀</Box>
          <Box>멤버들의 스크럼을 확인해보세요!</Box>
        </Flex>
      ) : (
        <Box className='SubHead-xl'>스타트업 밸리의 멤버</Box>
      )}
      <Flex
        direction='column'
        gap='12px'
        width='276px'
        marginBottom='12px'
        background={isWhite ? 'transparent' : '#F0F2F4'}
        border={isWhite && '1px solid #CCD6E3'}
        padding='12px'
        borderRadius='12px'
      >
        {data?.map((el) => (
          <MemberItem
            key={el.nickname}
            memberId={el.memberId}
            part={el.part}
            profileImage={el.profileImage}
            nickname={el.nickname}
          />
        ))}
      </Flex>
      <Button
        onClick={() => {
          navigate('/3/manage');
        }}
        width='100%'
        background='#475569'
        color='white'
      >
        팀원 관리
      </Button>
    </Flex>
  );
};

MemberList.propTypes = { isWhite: PropTypes.bool };

export default MemberList;
