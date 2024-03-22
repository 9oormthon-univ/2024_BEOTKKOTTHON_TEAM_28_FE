import { Box, Divider, Flex } from '@chakra-ui/react';

import { ContributionModal } from '../questionlist';
import PropTypes from 'prop-types';
import { TitleProfile } from '../common/mocules';

const TaskItem = ({ content, startAt, endAt, workList }) => {
  return (
    <Flex direction='column' gap='20px'>
      <TitleProfile isNoTime={true} right={<ContributionModal />} />
      <Flex
        direction='column'
        gap='24px'
        paddingX='32px'
        paddingY='24px'
        background='gray.100'
        borderRadius='12px'
      >
        <Flex gap='16px' alignItems='center'>
          <Box className='Headline-md' color='brandBold'>
            {startAt} - {endAt}
          </Box>
          <Box
            background='#ECFDF5'
            color='successBold'
            paddingX='8px'
            paddingY='4px'
            borderRadius='14px'
          >
            NN 시간
          </Box>
        </Flex>
        <Flex direction='column' gap='24px' className='Body-lg'>
          <Box>{content}</Box>
          <Divider />
          <Flex direction='column' gap='12px'>
            {workList?.map((el) => (
              <Flex
                key={el}
                direction='column'
                background='white'
                paddingX='24px'
                paddingY='16px'
                gap='10px'
                borderRadius='4px'
              >
                <Box className='Body-lg'>{el.content}</Box>
              </Flex>
            ))}
          </Flex>
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
};

export default TaskItem;
