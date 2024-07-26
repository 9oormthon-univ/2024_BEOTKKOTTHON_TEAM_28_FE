import { Box, Flex, Image } from '@chakra-ui/react';

import Card from './Card';
import ContentCard from './ContentCard';
import PropTypes from 'prop-types';
import no_team_select from '../../../../assets/images/no_connected.png';
import { returnProfileImg } from '../../../../lips/returnProfile';

const CARD_TYPES = ['LONGEST_WORK', 'MOST_WORK', 'MOST_QUESTION', 'FASTEST_ANSWER', 'MOST_DETAIL'];

const Banner2 = ({ isTeamId = false }) => {
  return (
    <Flex gap='24px' margin={'65px auto auto auto'}>
      <ContentCard isConnected={false} />
      {!isTeamId ? (
        <Box position='relative' width={953}>
          <Image position='absolute' src={no_team_select} width={953} />
          <Flex position='absolute' left='50%' transform='translate(-50%, -50%)' top='50%'>
            <Box
              padding='24px'
              borderRadius={8}
              border='2px solid #A6A6A6'
              textColor='white'
              backgroundColor='rgba(55, 55, 55, 0.85)'
              backdropBlur='blur(2px)'
            >
              디스코드 서버에 봇을 연결하여
              <br />
              팀의 성장을 함께 해보세요!
            </Box>
          </Flex>
        </Box>
      ) : (
        <Flex gap='16px'>
          <Card
            cardType={CARD_TYPES[0]}
            content='14일'
            profile={returnProfileImg('TOMATO')}
            part='DESIGN'
            card='-10px -10px'
            username='안재윤'
            nextUsername='정아현'
            nextUserProfile={returnProfileImg('CARROT')}
          />
          <Card
            cardType={CARD_TYPES[1]}
            content='186시간'
            profile={returnProfileImg('BLUEBERRY')}
            part='DESIGN'
            card='-250px -280px'
            username='최정흠'
            nextUserProfile={returnProfileImg('CARROT')}
            nextUsername='정아현'
          />
          <Card
            cardType={CARD_TYPES[2]}
            content='32회'
            profile={returnProfileImg('CABBAGE')}
            part='DESIGN'
            card='-490px -550px'
            username='김영원'
            nextUsername='정아현'
            nextUserProfile={returnProfileImg('CARROT')}
          />
          <Card
            cardType={CARD_TYPES[3]}
            content='36회'
            profile={returnProfileImg('CUCUMBER')}
            part='DESIGN'
            card='-730px -830px'
            username='박소현'
            nextUserProfile={returnProfileImg('CARROT')}
            nextUsername='정아현'
          />
        </Flex>
      )}
    </Flex>
  );
};

Banner2.propTypes = {
  isTeamId: PropTypes.bool,
};

export default Banner2;
