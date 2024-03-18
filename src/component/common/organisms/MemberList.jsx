import { Box, Button, Flex } from '@chakra-ui/react';

import { MemberItem } from '../mocules';
import { useNavigate } from 'react-router-dom';

const MemberList = ({ isSticky }) => {
  const navigate = useNavigate();
  return (
    <Flex direction='column' gap='16px' position={isSticky ? 'sticky' : 'static'} top='450px'>
      <Box className='SubHead-xl'>스타트업 밸리의 멤버</Box>
      <Flex
        direction='column'
        gap='12px'
        width='276px'
        marginBottom='12px'
        background='#F0F2F4'
        padding='12px'
        borderRadius='12px'
      >
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
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

MemberList.propTypes = { isSticky: Boolean };

export default MemberList;
