import { Box, Flex } from '@chakra-ui/react';

import BackLogModal from '../../../components/organisms/BackLogModal';
import MyRoleModal from './MyRoleModal';
import Paths from '../../../constants/Paths';
import PropTypes from 'prop-types';
import RnRModal from './RnRModal';
import StatusTag from '../../../components/atoms/StatusTag';
import no_team_profile from '../../../assets/images/no_team_profile.png';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ProjectItem = ({
  isPublic,
  memberId,
  teamId,
  name,
  summary,
  profileImage,
  startAt,
  endAt,
  status,
}) => {
  const location = useLocation();

  const currentPath = location.pathname;

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
      {(currentPath === Paths.MyDashboard || isPublic) && isBackLogOpen && (
        <BackLogModal
          memberId={memberId}
          teamId={teamId}
          id={teamId}
          isPublic={isPublic}
          isOpen={isBackLogOpen}
          onClose={() => {
            setIsBackLogOpen(false);
            window.location.reload();
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
          background={isPublic ? '#F0F2F4' : '#fffff'}
          alignItems='center'
          paddingY='24px'
          paddingX='32px'
          gap='20px'
          borderRadius='12px'
          border='1px solid #CCD6E3'
          cursor={(currentPath === Paths.MyDashboard || isPublic) && 'pointer'}
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
            <Flex alignItems='center' gap='10px'>
              <Box className='Headline-lg'>{name}</Box>
              {!isPublic && <span className='SubHead-sm'>비공개</span>}
            </Flex>
            <div>
              {summaryContent ?? '해당 프로젝트에서 무슨 업무를 했는지 요약해서 적어주세요!'}
            </div>
          </Flex>
          <Flex direction='column' alignItems='center' gap='6px'>
            <StatusTag
              status={status}
              onClick={(e) => {
                e.stopPropagation();
                if (currentPath === Paths.MyDashboard && status === 'PEER_REVIEW') {
                  setIsRnRModalOpen(true);
                }
              }}
            />
            <MyRoleModal
              teamId={teamId}
              summaryContent={summaryContent}
              handleSummary={handleSummary}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

ProjectItem.propTypes = {
  updateProjects: PropTypes.func,
  name: PropTypes.string,
  summary: PropTypes.string,
  profileImage: PropTypes.string,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
  status: PropTypes.string,
  teamId: PropTypes.number,
  isPublic: PropTypes.bool,
  memberId: PropTypes.number,
};

export default ProjectItem;
