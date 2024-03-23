import { Flex, Text, Img } from '@chakra-ui/react';
import nonexistence from '../../../assets/nonexistence.svg';

const NonData = () => {
  return (
    <Flex>
      <Img src={nonexistence} />
      <Text>nnn이 존재하지 않아요.</Text>
      <Text>
        오늘의 작업을 입력해서
        <br />
        팀원들에게 공유해주세요!
      </Text>
    </Flex>
  );
};

export default NonData;
