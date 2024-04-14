import { Flex, Grid, Text, useBreakpointValue } from '@chakra-ui/react';

const Members = ['김영원', '안재윤', '박소현', '정아현', '임정우', '최정흠'];

const Footer = () => {
  const paddingX = useBreakpointValue({ base: '10px', md: '188px' });
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const gap = useBreakpointValue({ base: '10px', md: '0' });
  const width = useBreakpointValue({ base: '320px', md: '700px' });

  return (
    <footer>
      <Flex
        direction={flexDirection}
        justifyContent='space-between'
        alignItems='center'
        p={`16px ${paddingX}`}
        bg='#F0F2F4'
        width='100%'
        gap={gap}
      >
        <Flex direction='column' width='full'>
          <Text>Check our Notion</Text>
          <Text>
            저희의 협업 이야기를 알고 싶으신가요?{useBreakpointValue({ base: <br />, md: '' })}{' '}
            저희의 노션을 방문해보세요
          </Text>
          <Text mt='8px'>@2024 startupvally.all rights reserved</Text>
        </Flex>

        <Text
          className='Body-lg'
          textAlign='left'
          width={useBreakpointValue({ base: '100%', md: '200px' })}
        >
          Team AGRI
        </Text>
        <Grid templateColumns={`repeat(${useBreakpointValue({ base: 4, md: 6 })}, 1fr)`} w={width}>
          {Members.map((member, index) => (
            <Text key={index} className='Body-lg'>
              {member}
            </Text>
          ))}
        </Grid>
      </Flex>
    </footer>
  );
};

export default Footer;
