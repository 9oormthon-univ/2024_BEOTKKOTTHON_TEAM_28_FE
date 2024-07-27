import { Box, Flex } from '@chakra-ui/react';

import ContentMember from './ContentMember';

const MOCK = [
  {
    profile: '/carrot.png',
    username: '정아현',
    part: '프론트엔드',
  },
  {
    profile: '/blueberry.png',
    username: '최정흠',
    part: '백엔드',
  },
  {
    profile: '/tomato.png',
    username: '안재윤',
    part: '디자이너',
  },
  {
    profile: '/cabbage.png',
    username: '김영원',
    part: 'PM',
  },
  {
    profile: '/cucumber.png',
    username: '박소현',
    part: '프론트엔드',
  },
];

const ContentMembers = () => {
  return (
    <Flex direction='column' gap='14px' marginTop='30px'>
      <Box className='SubHead-lg'>
        현재 업무 진행중인 멤버 <span style={{ color: '#065F46' }}>3</span>
      </Box>
      <Flex gap='10px'>
        {MOCK.map((arg) => (
          <ContentMember key={arg.username} {...arg} />
        ))}
      </Flex>
    </Flex>
  );
};
export default ContentMembers;
