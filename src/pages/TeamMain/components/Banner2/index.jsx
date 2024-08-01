import { Box, Flex, Image } from '@chakra-ui/react';

import ArrowIcon from '../../../../components/atoms/ArrowIcon';
import Card from './Card';
import ContentCard from './ContentCard';
import PropTypes from 'prop-types';
import getMemberRanking from '../../../../api/team/getTeamRanking';
import no_team_select from '../../../../assets/images/no_connected.png';
import { returnProfileImg } from '../../../../lips/returnProfile';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CARD_TYPES = ['LONGEST_WORK', 'MOST_WORK', 'MOST_QUESTION', 'FASTEST_ANSWER', 'MOST_DETAIL'];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Banner2 = ({ isTeamId = false }) => {
  const { id } = useParams();

  const [rankingInfo, setRankingInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const rankingResponse = await getMemberRanking(id);
      setRankingInfo(rankingResponse);
    };

    if (isTeamId) {
      fetchData();
    }
  }, [isTeamId, id]);

  const cardsData = useMemo(
    () => [
      {
        cardType: CARD_TYPES[0],
        content: (rankingInfo) => `${rankingInfo.workedDate[0].number}일`,
        profile: (rankingInfo) =>
          returnProfileImg(rankingInfo.workedDate[0].memberInfo.profileImage),
        card: (rankingInfo) =>
          `-10px ${getProfilePositionX(rankingInfo.workedDate[0].memberInfo.profileImage)}`,
        username: (rankingInfo) => rankingInfo.workedDate[0].memberInfo.nickname,
        nextContent: (rankingInfo) => `${rankingInfo.workedDate[1]?.number}일`,
        nextUsername: (rankingInfo) => rankingInfo.workedDate[1]?.memberInfo.nickname,
        nextUserProfile: (rankingInfo) =>
          returnProfileImg(rankingInfo.workedDate[1]?.memberInfo.profileImage),
      },
      {
        cardType: CARD_TYPES[1],
        content: (rankingInfo) => `${Math.floor(rankingInfo.workedTime[0].number / 60)}시간`,
        card: (rankingInfo) =>
          `-250px ${getProfilePositionX(rankingInfo.workedTime[0].memberInfo.profileImage)}`,
        profile: (rankingInfo) =>
          returnProfileImg(rankingInfo.workedTime[0].memberInfo.profileImage),
        username: (rankingInfo) => rankingInfo.workedTime[0].memberInfo.nickname,
        nextContent: (rankingInfo) => `${Math.floor(rankingInfo.workedTime[1]?.number / 60)}시간`,
        nextUsername: (rankingInfo) => rankingInfo.workedTime[1]?.memberInfo.nickname,
        nextUserProfile: (rankingInfo) =>
          returnProfileImg(rankingInfo.workedTime[1]?.memberInfo.profileImage),
      },
      {
        cardType: CARD_TYPES[2],
        content: (rankingInfo) => `${rankingInfo.questionTimes[0].number}회`,
        card: (rankingInfo) =>
          `-490px ${getProfilePositionX(rankingInfo.questionTimes[0].memberInfo.profileImage)}`,
        profile: (rankingInfo) =>
          returnProfileImg(rankingInfo.questionTimes[0].memberInfo.profileImage),
        username: (rankingInfo) => rankingInfo.questionTimes[0].memberInfo.nickname,
        nextContent: (rankingInfo) => `${rankingInfo.questionTimes[1]?.number}회`,
        nextUsername: (rankingInfo) => rankingInfo.questionTimes[1]?.memberInfo.nickname,
        nextUserProfile: (rankingInfo) =>
          returnProfileImg(rankingInfo.questionTimes[1]?.memberInfo.profileImage),
      },
      {
        cardType: CARD_TYPES[3],
        isAvg: true,
        content: (rankingInfo) => `${rankingInfo.fastAnswered[0].number}분`,
        card: (rankingInfo) =>
          `-730px ${getProfilePositionX(rankingInfo.fastAnswered[0].memberInfo.profileImage)}`,
        profile: (rankingInfo) =>
          returnProfileImg(rankingInfo.fastAnswered[0].memberInfo.profileImage),
        username: (rankingInfo) => rankingInfo.fastAnswered[0].memberInfo.nickname,
        nextContent: (rankingInfo) => `${rankingInfo.fastAnswered[1]?.number}분`,
        nextUsername: (rankingInfo) => rankingInfo.fastAnswered[1]?.memberInfo.nickname,
        nextUserProfile: (rankingInfo) =>
          returnProfileImg(rankingInfo.fastAnswered[1]?.memberInfo.profileImage),
      },
      {
        cardType: CARD_TYPES[4],
        isAvg: true,
        content: (rankingInfo) => `${rankingInfo.detailedBacklog[0].number}byte`,
        card: (rankingInfo) =>
          `-970px ${getProfilePositionX(rankingInfo.detailedBacklog[0].memberInfo.profileImage)}`,
        profile: (rankingInfo) =>
          returnProfileImg(rankingInfo.detailedBacklog[0].memberInfo.profileImage),
        username: (rankingInfo) => rankingInfo.detailedBacklog[0].memberInfo.nickname,
        nextContent: (rankingInfo) => `${rankingInfo.detailedBacklog[1]?.number}byte`,
        nextUsername: (rankingInfo) => rankingInfo.detailedBacklog[1]?.memberInfo.nickname,
        nextUserProfile: (rankingInfo) =>
          returnProfileImg(rankingInfo.detailedBacklog[1]?.memberInfo.profileImage),
      },
    ],
    [],
  );

  const shuffledCards = useMemo(() => shuffleArray([...cardsData]), [cardsData]);

  const [firstCardIndex, setFirstCardIndex] = useState(shuffledCards.length ?? 0);
  return (
    <Flex gap='24px' margin={'65px auto auto auto'}>
      <ContentCard isConnected={false} />
      {!isTeamId || !rankingInfo ? (
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
        <Flex gap='16px' position='relative'>
          {firstCardIndex === shuffleArray.length - 1 && (
            <ArrowIcon
              isActive={true}
              direction='right'
              onClick={() => {
                setFirstCardIndex(shuffleArray.length);
              }}
              alt='Next'
              style={{
                position: 'absolute',
                zIndex: '99',
                top: '40%',
                right: '-30px',
                width: '68px',
                height: '68px',
                cursor: 'pointer',
              }}
            />
          )}
          {[
            shuffledCards[firstCardIndex % 5],
            shuffledCards[(firstCardIndex + 1) % 5],
            shuffledCards[(firstCardIndex + 2) % 5],
            shuffledCards[(firstCardIndex + 3) % 5],
          ].map((card, index) => (
            <Card
              key={index}
              cardType={card.cardType}
              content={card.content(rankingInfo)}
              profile={card.profile(rankingInfo)}
              card={card.card(rankingInfo)}
              username={card.username(rankingInfo)}
              nextContent={card.nextContent(rankingInfo)}
              nextUsername={card.nextUsername(rankingInfo)}
              nextUserProfile={card.nextUserProfile(rankingInfo)}
              isAvg={card.isAvg}
            />
          ))}
          {firstCardIndex === shuffleArray.length && (
            <ArrowIcon
              isActive={true}
              direction='left'
              onClick={() => {
                setFirstCardIndex(shuffleArray.length - 1);
              }}
              className='swiper-button-next'
              alt='Next'
              style={{
                position: 'absolute',
                top: '40%',
                zIndex: '99',
                left: '-35px',
                width: '68px',
                height: '68px',
                cursor: 'pointer',
              }}
            />
          )}
        </Flex>
      )}
    </Flex>
  );
};

Banner2.propTypes = {
  isTeamId: PropTypes.bool,
};

export default Banner2;

function getProfilePositionX(profile) {
  switch (profile) {
    case 'BLUEBERRY': // 280
      return `-280px`;
    case 'CABBAGE': // 1390
      return '-1390px';
    case 'CARROT':
      return '-550px';
    case 'CUCUMBER': // 1110
      return '-1110px';
    case 'STRAWBERRY': // 830
      return '-830px';
    default:
      return '-10px';
  }
}
