import { Button, Divider, Flex, Input } from '@chakra-ui/react';
import { ContentBox, TitleProfile } from '../common/mocules';

import { useState } from 'react';

const WorkItem = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <Flex
      direction='column'
      gap='20px'
      paddingY='24px'
      onClick={() => {
        setIsShowForm((prev) => !prev);
      }}
    >
      <TitleProfile />
      <ContentBox />
      {isShowForm && (
        <Flex gap='12px'>
          <Input placeholder='오늘은 어떤 작업을 진행하셨나요?' />
          <Button background='#059669' color='white'>
            전송
          </Button>
        </Flex>
      )}
      <Divider />
    </Flex>
  );
};

export default WorkItem;
