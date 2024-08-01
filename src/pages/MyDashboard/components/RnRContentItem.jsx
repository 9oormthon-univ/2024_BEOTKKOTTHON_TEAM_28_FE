import { Divider, Flex, Textarea } from '@chakra-ui/react';

import MemberItem from '../../../components/molecules/MemberItem';
import PropTypes from 'prop-types';
import RnRStatusTag from './RnRStatusTag';
import ToggleIcon from '../../../components/atoms/ToggleIcon';
import { useState } from 'react';

const RnRContentItem = ({
  memberRnR,
  onChange,
  nickname,
  part,
  memberId,
  profileImage,
  onIsDoneChange,
}) => {
  const [text, setText] = useState(memberRnR[0].content);
  const [isToggled, setIsToggled] = useState(false);

  const handleOnChange = (e) => {
    const val = e.target.value;
    const isDone = new TextEncoder().encode(val).length >= 50;
    onIsDoneChange(memberId, isDone);
    setText(val);
    onChange(memberId, val);
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
            isDisableMove
            active={true}
            memberId={memberId}
            nickname={nickname}
            part={part}
            profileImage={profileImage}
          />
        </Flex>
        <RnRStatusTag isDone={new TextEncoder().encode(text).length >= 50} />
      </Flex>
      {isToggled && (
        <Flex direction='column' alignItems='flex-end' gap='12px'>
          <Textarea
            placeholder={`${nickname}님과의 협업은 어땠나요?`}
            resize='none'
            background='#F0F2F4'
            border='1px solid #CCD6E3'
            onClick={(e) => e.stopPropagation()}
            onChange={handleOnChange}
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
  onIsDoneChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  memberRnR: PropTypes.object,
};

export default RnRContentItem;
