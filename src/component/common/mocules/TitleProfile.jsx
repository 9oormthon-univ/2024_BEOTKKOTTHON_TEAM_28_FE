import { Box, Flex } from '@chakra-ui/react';

import { PartTag } from '../atoms';
import PropTypes from 'prop-types';
import tomato from '../../../assets/tomato.png';

const TitleProfile = ({ right }) => {
  return (
    <Flex justifyContent='space-between'>
      <Flex gap='8px'>
        <img src={tomato} alt='안재윤의 작업' width='48px' />
        <Flex direction='column'>
          <Flex gap='8px'>
            <Box>안재윤</Box>
            <PartTag part='디자인' active={true} />
          </Flex>
          <Box>nn 시간 전</Box>
        </Flex>
      </Flex>
      {right ?? null}
    </Flex>
  );
};

TitleProfile.propTypes = {
  right: PropTypes.node.isRequired,
};
export default TitleProfile;
