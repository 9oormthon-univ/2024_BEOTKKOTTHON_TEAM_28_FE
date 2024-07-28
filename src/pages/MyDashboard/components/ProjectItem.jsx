import { Box, Flex, Text } from '@chakra-ui/react';

import MyRoleModal from './MyRoleModal';
import PropTypes from 'prop-types';
import RnRModal from './RnRModal';
import StatusTag from '../../../components/atoms/StatusTag';
import { useState } from 'react';

const ProjectItem = ({ teamId, name, summary, profileImage, startAt, endAt, status }) => {
  const [isRnRModalOpen, setIsRnRModalOpen] = useState(false);

  const closeRnRModalOpen = () => {
    setIsRnRModalOpen(false);
  };
  return (
    <>
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
        >
          <img
            src={profileImage ?? '/tomato.png'}
            alt={`${name}의 팀프로필`}
            width='80px'
            height='80px'
          />
          <Flex flex='1' direction='column' gap='18px'>
            <Text className='Headline-lg'>{name}</Text>
            <div>{summary ?? '아직 요약이 없어요!'}</div>
          </Flex>
          <Flex direction='column' alignItems='center' gap='6px'>
            <StatusTag
              status={status}
              onClick={() => {
                if (status === 'PEER_REVIEW') {
                  setIsRnRModalOpen(true);
                }
              }}
            />
            <MyRoleModal teamId={teamId} />
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
