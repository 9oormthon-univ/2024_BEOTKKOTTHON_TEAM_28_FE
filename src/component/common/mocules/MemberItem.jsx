import { Flex } from '@chakra-ui/react';
import { PartTag } from '../atoms';
import tomato from '../../../assets/tomato.png';

const MemberItem = () => {
  return (
    <Flex gap='8px' alignItems='center'>
      <img src={tomato} alt='프로필' width='48px' />
      <div>정아현</div>
      <PartTag part='프론트엔드' active={false} />
    </Flex>
  );
};

export default MemberItem;
