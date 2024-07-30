import { Box, Flex, Text } from '@chakra-ui/react';

import BackLogModal from '../../../components/organisms/BackLogModal';
import MyRoleModal from './MyRoleModal';
import PropTypes from 'prop-types';
import RnRModal from './RnRModal';
import StatusTag from '../../../components/atoms/StatusTag';
import no_team_profile from '../../../assets/images/no_team_profile.png';
import { useState } from 'react';

const ProjectItem = ({ teamId, name, summary, profileImage, startAt, endAt, status }) => {
  const [isRnRModalOpen, setIsRnRModalOpen] = useState(false);
  const [isBackLogOpen, setIsBackLogOpen] = useState(false);
  const [summaryContent, setSummaryContent] = useState(summary);

  const closeRnRModalOpen = () => {
    setIsRnRModalOpen(false);
  };

  const handleSummary = (content) => {
    setSummaryContent(content);
  };

  return (
    <>
      {isBackLogOpen && (
        <BackLogModal
          teamId={teamId}
          id={teamId}
          isOpen={isBackLogOpen}
          onClose={() => {
            setIsBackLogOpen(false);
          }}
        />
      )}
      {isRnRModalOpen && (
        <RnRModal
          teamName={name}
          teamId={teamId}
          isOpen={isRnRModalOpen}
          onClose={closeRnRModalOpen}
        />
      )}
      <Flex direction='column' gap='12px'>
        <Box className='SubHead-xl' color='brandBold'>
          {startAt} - {endAt}
        </Box>
        <Flex
          w='100%'
          background='#F0F2F4'
          alignItems='center'
          paddingY='24px'
          paddingX='32px'
          gap='20px'
          borderRadius='12px'
          border='1px solid #CCD6E3'
          onClick={() => {
            setIsBackLogOpen(true);
          }}
        >
          <img
            src={profileImage ?? no_team_profile}
            alt={`${name}의 팀프로필`}
            width='80px'
            height='80px'
          />
          <Flex flex='1' direction='column' gap='18px'>
            <Text className='Headline-lg'>{name}</Text>
            <div>{summaryContent ?? '아직 요약이 없어요!'}</div>
          </Flex>
          <Flex direction='column' alignItems='center' gap='6px'>
            <StatusTag
              status={status}
              onClick={(e) => {
                e.stopPropagation();
                if (status === 'PEER_REVIEW') {
                  setIsRnRModalOpen(true);
                }
              }}
            />
            {status === 'IN_PROGRESS' && (
              <MyRoleModal
                teamId={teamId}
                summaryContent={summaryContent}
                handleSummary={handleSummary}
              />
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

ProjectItem.propTypes = {
  name: PropTypes.string,
  summary: PropTypes.string,
  profileImage: PropTypes.string,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
  status: PropTypes.string,
  teamId: PropTypes.number,
};

export default ProjectItem;
