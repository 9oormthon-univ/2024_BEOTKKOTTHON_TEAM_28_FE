import { Flex, Grid, Text, useBreakpointValue } from '@chakra-ui/react';

const Members = ['김영원', '안재윤', '박소현', '정아현', '임정우', '최정흠'];

const Footer = () => {
  const paddingX = useBreakpointValue({ base: '10px', md: '188px' });
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const gap = useBreakpointValue({ base: '10px', md: '0' });
  const textAlign = useBreakpointValue({ base: 'left', md: 'right' });

  return (
    <footer>
      <Flex
        direction={flexDirection}
        justifyContent='space-between'
        alignItems='center'
        p={`16px ${paddingX}`}
        bg='#F0F2F4'
        gap={gap}
      >
        <Flex direction='column' width='full' p='8px'>
          <Text>Check our Notion</Text>
          <Text>저희의 협업 이야기를 알고 싶으신가요? 저희의 노션을 방문해보세요</Text>
          <Text mt='8px'>@2024 startupvally.all rights reserved</Text>
        </Flex>
        <Flex direction='column' justifyContent='center' gap='10px'>
          <Grid templateColumns='repeat(5, 1fr)' gap='15px' width='510px'>
            <Text fontSize='sm' textAlign={textAlign}>
              Team 28
            </Text>
          </Grid>
          <Grid templateColumns='repeat(6, 1fr)' gap='15px' width='500px'>
            {Members.map((member) => (
              <Text key={member} textAlign={textAlign} fontSize='sm'>
                {member}
              </Text>
            ))}
          </Grid>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
