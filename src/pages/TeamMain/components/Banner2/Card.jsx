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
    <Flex direction='column' position='relative'>
      <Flex
        zIndex={10}
        width='224px'
        transition='transform 0.3s ease-in-out'
        _hover={{
          transform: 'translateY(-56px)',
        }}
      >
        <Box
          as='div'
          backgroundImage={`url(/banner_imgs.png)`}
          backgroundPosition='-10px -10px'
          width='224px'
          height='260px'
          borderRadius={8.9}
        />
        <Flex direction='column' position='absolute' paddingY='11.86px' paddingX='11.87px'>
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
      <Box
        position='absolute'
        borderRadius={10}
        bottom='-5px'
        left='0'
        right='4px'
        border='1px #E0E7EE solid'
        padding='11px'
      >
        <Flex justifyContent='space-between' alignItems='center'>
          <Flex gap='4px' alignItems='center'>
            <Image src={profileUrl} width='32px' borderRadius={50} />
            <Flex direction='column'>
              <Box>다음 MVP는?</Box>
              <Box>안재윤</Box>
            </Flex>
          </Flex>
          <Box className='SubHead-lg'>12일</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Card;
