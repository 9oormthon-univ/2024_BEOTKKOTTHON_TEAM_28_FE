import { Box, Flex, Image } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const getCardType = (type) => {
  switch (type) {
    case 'LONGEST_WORK':
      return { color: '#065F46', label: '꾸준히 업무했어요' };
    case 'MOST_WORK':
      return { color: '#1E40AF', label: '업무를 가장 많이 했어요' };
    case 'MOST_QUESTION':
      return { color: '#A04F04', label: '질문을 가장 많이 했어요' };
    case 'FASTEST_ANSWER':
      return { color: '#940C0C', label: '가장 빠르게 답변했어요' };
    case 'MOST_DETAIL':
      return { color: '#270B79', label: '백로그를 자세히 남겨요' };
    default:
      return { color: '#065F46', label: '꾸준히 업무했어요' };
  }
};

const Card = ({
  card,
  cardType,
  content,
  profile,
  username,
  nextUsername,
  nextUserProfile,
  nextContent,
}) => {
  const { color, label } = getCardType(cardType);
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
          backgroundPosition={card}
          width='224px'
          height='260px'
          borderRadius={8.9}
        />
        <Flex
          direction='column'
          position='absolute'
          paddingY='11.86px'
          paddingX='11.87px'
          gap='10px'
        >
          <Box
            backgroundColor={color}
            textColor='white'
            paddingY='6px'
            paddingX='9px'
            borderRadius='5.932px'
            sx={{
              fontFamily: 'Pretendard',
              fontSize: '11.865px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '19.28px',
              letterSpacing: '0.445px',
            }}
          >
            {label}
          </Box>
          <Box
            textColor={color}
            sx={{
              fontSize: '26.696px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '26.696px',
              letterSpacing: '0.148px',
            }}
          >
            {content}
          </Box>
          <Flex gap='6px'>
            <Image src={profile} width={26.7} borderRadius={50} />
            <Box>{username}</Box>
          </Flex>
        </Flex>
      </Flex>
      <Box
        position='absolute'
        borderRadius={10}
        bottom='4px'
        left='0'
        right='4px'
        border='1px #E0E7EE solid'
        padding='11px'
      >
        <Flex justifyContent='space-between' alignItems='center' paddingTop='20px'>
          <Flex gap='4px' alignItems='center'>
            <Image src={nextUserProfile} width='32px' borderRadius={50} />
            <Flex direction='column'>
              <Box
                sx={{
                  fontFamily: 'Pretendard',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '16px',
                  letterSpacing: '0.2px',
                }}
                color='#64748B'
              >
                다음 MVP는?
              </Box>
              <Box
                sx={{
                  fontFamily: 'Pretendard',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '16px',
                  letterSpacing: '0.2px',
                }}
              >
                {nextUsername}
              </Box>
            </Flex>
          </Flex>
          <Box className='SubHead-lg' color={color}>
            {nextContent}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

Card.propTypes = {
  cardType: PropTypes.string,
  content: PropTypes.string,
  profile: PropTypes.string,
  username: PropTypes.string,
  card: PropTypes.string,
  nextUsername: PropTypes.string,
  nextUserProfile: PropTypes.string,
  nextContent: PropTypes.string,
};

export default Card;
