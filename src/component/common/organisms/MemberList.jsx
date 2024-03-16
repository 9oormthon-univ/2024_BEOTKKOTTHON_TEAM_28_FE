import { Button, Flex } from '@chakra-ui/react';

import { LeftContainer } from '../atoms';
import { MemberItem } from '../mocules';

const MemberList = () => {
  return (
    <LeftContainer title='답변을 기다리는 요청사항'>
      <Flex direction='column' gap='20px'>
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
      </Flex>
      <Button width='100%'>팀원 관리</Button>
    </LeftContainer>
  );
};

export default MemberList;
