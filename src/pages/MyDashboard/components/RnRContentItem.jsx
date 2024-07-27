import { Divider, Flex, Textarea } from '@chakra-ui/react';

import MemberItem from '../../../components/molecules/MemberItem';
import RnRStatusTag from './RnRStatusTag';
import ToggleIcon from '../../../components/atoms/ToggleIcon';
import { useState } from 'react';
import PropTypes from 'prop-types';

const RnRContentItem = ({ nickname, part, memberId, profileImage }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [text, setText] = useState('');
  const [isDone, setIsDone] = useState(false);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setText(value);
    if (new TextEncoder().encode(value).length >= 50) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }
  };

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
          <MemberItem
            active={true}
            memberId={memberId}
            nickname={nickname}
            part={part}
            profileImage={profileImage}
          />
        </Flex>
        <RnRStatusTag isDone={isDone} />
      </Flex>
      {isToggled && (
        <Flex direction='column' alignItems='flex-end' gap='12px'>
          <Textarea
            placeholder={`${nickname}님과의 협업은 어땠나요?`}
            resize='none'
            background='#F0F2F4'
            border='1px solid #CCD6E3'
            onClick={(e) => e.stopPropagation()}
            onChange={handleTextChange}
            value={text}
          />
        </Flex>
      )}
      <Divider />
    </Flex>
  );
};

RnRContentItem.propTypes = {
  nickname: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
  memberId: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
};

export default RnRContentItem;
