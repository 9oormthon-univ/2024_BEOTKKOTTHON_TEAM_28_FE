import { Box, Flex, Image } from '@chakra-ui/react';

import { PartTag } from '../atoms';
import PropTypes from 'prop-types';
import tomato from '../../../assets/tomato.png';

const TitleProfile = ({ isNoTime = false, right }) => {
  return (
    <Flex justifyContent='space-between' alignItems='center'>
      <Flex gap='8px' alignItems='center'>
        <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
        <Flex direction='column'>
          <Flex gap='8px'>
            <Box className='Headline-lg'>안재윤</Box>
            <PartTag part='디자인' active={true} />
          </Flex>
          {!isNoTime && <Box className='Body-md'>nn 시간 전</Box>}
        </Flex>
      </Flex>
      {right ?? null}
    </Flex>
  );
};

TitleProfile.propTypes = {
  right: PropTypes.node,
  isNoTime: PropTypes.bool,
};
export default TitleProfile;
