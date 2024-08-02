import { Box, Divider, Flex } from '@chakra-ui/react';

import ContributionModal from '../../QuestionList/components/ContributionModal';
import PropTypes from 'prop-types';
import { TitleProfile } from '../../../components/molecules';

const TaskItem = ({ currentUser, content, startAt, endAt, workList }) => {
  return (
    <Flex direction='column' gap='20px' width='full'>
      {currentUser && (
        <TitleProfile
          isNoTime={true}
          right={<ContributionModal id={currentUser.memberId} />}
          part={currentUser.part}
          profileImage={currentUser.profile}
          nickname={currentUser.name}
        />
      )}
      <Flex
        direction='column'
        gap='24px'
        paddingX='32px'
        paddingY='24px'
        background='#E0E7EE'
        borderRadius='12px'
        border='1px solid #CCD6E3'
      >
        <Flex gap='16px' alignItems='center'>
          <Box className='Headline-md' color='brandBold'>
            {startAt} - {endAt}
          </Box>
          {/* <Box
            background='#ECFDF5'
            color='successBold'
            paddingX='8px'
            paddingY='4px '
            borderRadius='14px'
          >
            NN 시간
          </Box> */}
        </Flex>
        <Flex direction='column' gap='24px' className='Body-lg'>
          <Box>{content}</Box>
          <Divider />
          {workList && (
            <Flex direction='column' gap='12px'>
              {workList?.map((el) => (
                <Flex
                  key={el.id}
                  direction='column'
                  background='white'
                  paddingX='24px'
                  paddingY='16px'
                  gap='10px'
                  borderRadius='4px'
                  border='1px solid #E0E7EE'
                >
                  <Box className='Body-lg'>{el.content}</Box>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

TaskItem.propTypes = {
  content: PropTypes.string,
  startAt: PropTypes.string,
  endAt: PropTypes.string,
  workList: PropTypes.array,
  currentUser: PropTypes.object,
};

export default TaskItem;
