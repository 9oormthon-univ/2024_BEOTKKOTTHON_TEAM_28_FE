import { Button, Flex, Image, Input } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import tomato from '../../assets/tomato.png';
import { useState } from 'react';

const Note = ({ onSubmit, placeholder = '오늘은 어떤 작업을 기록하시나요?' }) => {
  const [content, setContent] = useState('');

  onSubmit;
  return (
    <Flex gap='16px' alignItems='center'>
      <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
      <Input
        paddingY='12px'
        paddingX='16px'
        width='100%'
        alignItems='center'
        border='1px solid #CCD6E3'
        borderRadius='8px'
        placeholder={placeholder}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button
        variant='greenWhite'
        onClick={() => {
          onSubmit(content);
        }}
        sx={{
          fontFamily: 'Pretendard',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '28px',
          letterSpacing: '0.2px',
        }}
      >
        작성
      </Button>
    </Flex>
  );
};

Note.propTypes = {
  placeholder: PropTypes.string,
  mb: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Note;
