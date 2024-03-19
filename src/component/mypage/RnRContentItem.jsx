import { Button, Divider, Flex, Textarea } from '@chakra-ui/react';

import MemberItem from '../common/mocules/MemberItem';
import RnRStatusTag from './RnRStatusTag';
import { ToggleIcon } from '../common/atoms';
import { useState } from 'react';

const RnRContentItem = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Flex
      direction='column'
      gap='20px'
      paddingX='24px'
      paddingY='16px'
      borderRadius='8px'
      width='560px'
      onClick={() => {
        setIsToggled((prev) => !prev);
      }}
    >
      <Flex justifyContent='space-between' alignItems='center'>
        <Flex alignItems='center' gap='10px'>
          <ToggleIcon isToggled={isToggled} />
          <MemberItem active={true} />
        </Flex>
        <RnRStatusTag />
      </Flex>
      {isToggled && (
        <Flex direction='column' alignItems='flex-end' gap='12px'>
          <Textarea
            placeholder={`정아현님과의 협업은 어땠나요?`}
            resize='none'
            background='#F0F2F4'
            border='1px solid #CCD6E3'
          />
          <Button
            background='transparent'
            border='1px solid #CCD6E3'
            className='SubHead-md'
            color='#94A3B8'
          >
            작성 완료
          </Button>
        </Flex>
      )}
      <Divider />
    </Flex>
  );
};

export default RnRContentItem;
