import { Button, Flex, Image, Img, Text, useBreakpointValue } from '@chakra-ui/react';

import { discordBotUrl } from '../../constants';
import landing1 from '../../assets/landing1.png';
import landing2 from '../../assets/landing2.png';
import landing3 from '../../assets/landing3.png';
import landing4 from '../../assets/landing4.png';
import landing5 from '../../assets/landing5.png';
import text_logo from '../../assets/text_logo.png';

const Landing = () => {
  const mainImgWidth = { base: '320px', md: '422.158px', lg: '571.63px' };
  const flexDirection = { base: 'column', md: 'row' };
  const align = { base: 'center', md: 'end' };
  const padding = { base: '0px', md: '0' };
  const gap = { base: '50px', md: '0' };

  const title_lg = useBreakpointValue({ base: 'Headline-lg', md: 'Display-lg' });

  return (
    <main style={{ paddingBottom: '150px' }}>
      <Flex w='100%' justify='center' align='center' direction='column' width='100%'>
        <Flex
          bg='#ECFDF5'
          direction='column'
          pt='91px'
          pb='101px'
          justify='center'
          align='center'
          width='100%'
          gap='28px'
        >
          <Image src={text_logo} width='131px' height='21px' alt='스타트업밸리 로고' />
          <Text className={title_lg} textAlign='center'>
            팀원들이{' '}
            <Text as='span' color='#648B7B'>
              별 일
            </Text>{' '}
            없는지,
            <br />
            스타트업{' '}
            <Text as='span' color='#648B7B'>
              밸리
            </Text>
            로 확인하세요!
          </Text>
          <Button
            bg='#059669'
            color='white'
            w='252px'
            h='50px'
            onClick={() => {
              window.open(discordBotUrl, '_blank');
            }}
          >
            디스코드 봇 추가하기
          </Button>
        </Flex>
        <Flex mt='120px' mb='158.59px'>
          <Flex direction={flexDirection} align={'center'} gap={{ base: '', md: '24px' }}>
            <Flex
              direction='column'
              padding={padding}
              gap='28px'
              justify='center'
              align={{ base: 'left', md: 'center' }}
            >
              <Text
                className={useBreakpointValue({
                  base: 'Headline-md',
                  md: 'Display-sm',
                  lg: 'Display-md',
                })}
              >
                <Text as='span' color='#648B7B'>
                  매번, 팀원의 작업을
                  {useBreakpointValue({ base: '', md: <br /> })}
                  번거롭게 확인하지 말고
                  <br />
                </Text>
                스타트업밸리를 통해서
                {useBreakpointValue({ base: '', md: <br /> })}
                작업을 기록해보세요
              </Text>
              <Text className='Subline-xl' textColor='#334155'>
                팀원 뿐만 아니라, 여러분들의 작업 기록 또한
                <br />
                AI를 통해 요약해 줄거에요!
              </Text>
            </Flex>
            <Img w={mainImgWidth} src={landing1} />
          </Flex>
        </Flex>
        <Flex direction='column' gap='48px'>
          <Text
            className={useBreakpointValue({ base: 'Headline-md', md: 'Display-lg' })}
            textAlign='center'
          >
            <Text as='span' color='#648B7B'>
              업무에 메인 사람이 아니라 <br />{' '}
            </Text>
            메인 업무에만 집중하실 수 있도록 {useBreakpointValue({ base: <br />, md: '' })}이런
            기능을 제공해요!
          </Text>
          <Flex direction={flexDirection} align={align} justify='center' gap={gap}>
            <Img
              mr={{ base: '', md: '32.27px' }}
              w={{ base: '267.7px', md: '302.942px' }}
              h={{ base: '266.64px', md: '301.732px' }}
              src={landing2}
            />
            <Img
              w={{ base: '292.28px', md: '349.112px' }}
              h={{ base: '296.39px', md: '335.412px' }}
              src={landing3}
            />
            <Img
              ml={{ base: '', md: '-12px' }}
              mb={{ base: '', md: '-14.34px' }}
              w={{ base: '308.5px', md: '349.112px' }}
              h={{ base: '279.32px', md: '316.072px' }}
              src={landing4}
            />
            <Img
              w={{ base: '271.39px', md: '307.113px' }}
              h={{ base: '271.26px', md: '301.732px' }}
              src={landing5}
            />
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default Landing;
