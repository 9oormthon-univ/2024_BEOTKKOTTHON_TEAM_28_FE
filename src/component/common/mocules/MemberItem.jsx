import { Flex, ListItem } from '@chakra-ui/react';

import { PartTag } from '../atoms';

const MemberItem = () => {
  return (
    <ListItem>
      <Flex>
        <div>이미지</div>
        <div>정아현</div>
        <PartTag part='프론트엔드' active={false} />
      </Flex>
    </ListItem>
  );
};

export default MemberItem;
