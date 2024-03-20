import { Flex, Image } from '@chakra-ui/react';

import { PartTag } from '../atoms';
import PropTypes from 'prop-types';
import tomato from '../../../assets/tomato.png';

const MemberItem = ({ active }) => {
  return (
    <Flex gap='8px' alignItems='center'>
      <Image borderRadius='50%' src={tomato} alt='프로필' width='48px' />
      <div>정아현</div>
      <PartTag part='프론트엔드' active={active ?? false} />
    </Flex>
  );
};

MemberItem.propTypes = {
  active: PropTypes.bool,
};

export default MemberItem;
