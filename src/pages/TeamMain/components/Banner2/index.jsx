import { Box, Flex, Image } from '@chakra-ui/react';

import Card from './Card';
import ContentCard from './ContentCard';
import PropTypes from 'prop-types';
import getMemberRanking from '../../../../api/team/getTeamRanking';
import no_team_select from '../../../../assets/images/no_connected.png';
import { returnProfileImg } from '../../../../lips/returnProfile';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CARD_TYPES = ['LONGEST_WORK', 'MOST_WORK', 'MOST_QUESTION', 'FASTEST_ANSWER', 'MOST_DETAIL'];

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
        <Flex gap='16px'>
          <Card
            cardType={CARD_TYPES[0]}
            content={`${rankingInfo.workedDate[0].number}일`}
            profile={returnProfileImg(rankingInfo.workedDate[0].memberInfo.profileImage)}
            card={`-10px ${getProfilePositionX(rankingInfo.workedDate[0].memberInfo.profileImage)}`}
            username={rankingInfo.workedDate[0].memberInfo.nickname}
            nextContent={`${rankingInfo.workedDate[1]?.number}일`}
            nextUsername={rankingInfo.workedDate[1]?.memberInfo.nickname}
            nextUserProfile={returnProfileImg(rankingInfo.workedDate[1]?.memberInfo.profileImage)}
          />
          <Card
            cardType={CARD_TYPES[1]}
            content={`${rankingInfo.workedTime[0].number}시간`}
            card={`-250px ${getProfilePositionX(rankingInfo.workedTime[0].memberInfo.profileImage)}`}
            profile={returnProfileImg(rankingInfo.workedTime[0].memberInfo.profileImage)}
            username={rankingInfo.workedTime[0].memberInfo.nickname}
            nextContent={`${rankingInfo.workedTime[1]?.number}시간`}
            nextUsername={rankingInfo.workedTime[1]?.memberInfo.nickname}
            nextUserProfile={returnProfileImg(rankingInfo.workedTime[1]?.memberInfo.profileImage)}
          />
          <Card
            cardType={CARD_TYPES[2]}
            content={`${rankingInfo.questionTimes[0].number}회`}
            card={`-490px ${getProfilePositionX(rankingInfo.questionTimes[0].memberInfo.profileImage)}`}
            profile={returnProfileImg(rankingInfo.questionTimes[0].memberInfo.profileImage)}
            username={rankingInfo.questionTimes[0].memberInfo.nickname}
            nextContent={`${rankingInfo.questionTimes[1]?.number}회`}
            nextUsername={rankingInfo.questionTimes[1]?.memberInfo.nickname}
            nextUserProfile={returnProfileImg(
              rankingInfo.questionTimes[1]?.memberInfo.profileImage,
            )}
          />
          <Card
            cardType={CARD_TYPES[3]}
            content={`평균 ${rankingInfo.fastAnswered[0].number}회`}
            card={`-730px ${getProfilePositionX(rankingInfo.fastAnswered[0].memberInfo.profileImage)}`}
            profile={returnProfileImg(rankingInfo.fastAnswered[0].memberInfo.profileImage)}
            username={rankingInfo.fastAnswered[0].memberInfo.nickname}
            nextContent={`${rankingInfo.fastAnswered[1]?.number}회`}
            nextUsername={rankingInfo.fastAnswered[1]?.memberInfo.nickname}
            nextUserProfile={returnProfileImg(rankingInfo.fastAnswered[1]?.memberInfo.profileImage)}
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

function getProfilePositionX(profile) {
  switch (profile) {
    case 'BLUEBERRY': // 280
      return `-280px`;
    case 'CABBAGE': // 1390
      return '-490px';
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
