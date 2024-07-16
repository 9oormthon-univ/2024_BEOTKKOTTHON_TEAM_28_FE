import { Box, Flex, Image } from '@chakra-ui/react';

const getProfileItem = (profile) => {
  switch (profile) {
    case 'BLUEBERRY':
      return { textColor: '#1E40AF', badgeColor: '#053FBF', profileUrl: '/blueberry.png' };
    case 'CABBAGE':
      return '/cabbage.png';
    case 'CARROT':
      return '/carrot.png';
    case 'CUCUMBER':
      return '/cucumber.png';
    case 'STRAWBERRY':
      return '/strawberry.png';
    default:
      return '/tomato.png';
  }
};

const Card = () => {
  const { textColor, badgeColor, profileUrl } = getProfileItem('BLUEBERRY');
  return (
    <Flex position='relative' width='224px'>
      <Flex direction='column' position='absolute'>
        <Box backgroundColor={badgeColor} textColor='white'>
          업무를 가장 많이 했어요
        </Box>
        <Box textColor={textColor}>186시간</Box>
        <Flex>
          <Image src={profileUrl} width={26.7} borderRadius={50} />
          <Box>최정흠</Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
