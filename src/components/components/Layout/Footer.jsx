import { Flex, Grid, Text, useBreakpointValue } from '@chakra-ui/react';

const Members = ['김영원', '안재윤', '박소현', '정아현', '임정우', '최정흠'];

const Footer = () => {
  return (
    <footer>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        alignItems='center'
        p={{ base: '16px 10px', md: '16px 64px', xl: '16px 188px' }}
        bg='#F0F2F4'
        width='100%'
        gap={{ base: '10px', md: '0' }}
      >
        <Flex direction='column' w='full' textColor='#475569'>
          <Text minWidth='360px'>Check our Notion</Text>
          <Text>
            저희의 협업 이야기를 알고 싶으신가요?{useBreakpointValue({ base: <br />, md: '' })}{' '}
            저희의 노션을 방문해보세요
          </Text>
          <Text className='copyright' mt='8px'>
            @2024 startupvalley.all rights reserved
          </Text>
        </Flex>
        <Flex direction='column' width='full'>
          <Text
            className='Body-lg'
            textAlign='left'
            textColor='#475569'
            width={{ base: '100%', md: '200px' }}
          >
            Team AGRI
          </Text>
          <Grid
            templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)' }}
            w={{ base: '320px', md: '700px' }}
          >
            {Members.map((member, index) => (
              <Text key={index} className='Body-lg' textColor='#475569'>
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
