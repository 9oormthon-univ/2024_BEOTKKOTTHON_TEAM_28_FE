import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer>
      <Flex justify='space-between' p='4' bg='#F0F2F4'>
        <Flex direction='column'>
          <Text>Check our Notion</Text>
          <Text>저희의 협업 이야기를 알고 싶으신가요? 저희의 노션을 방문해보세요</Text>
          <Text>@2024 startupvally.all rights reserved</Text>
        </Flex>
        <Flex direction='column' p='14px 0'>
          <Text fontSize='sm'>Team 000</Text>
          <Flex>
            <Text fontSize='sm'>김영원</Text>
            <Text fontSize='sm'>안재윤</Text>
            <Text fontSize='sm'>박소현</Text>
            <Text fontSize='sm'>정아현</Text>
            <Text fontSize='sm'>임정우</Text>
            <Text fontSize='sm'>최정흠</Text>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
