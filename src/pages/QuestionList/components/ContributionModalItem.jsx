import { Box, Divider, Flex } from '@chakra-ui/react';

const ContributionModalItem = () => {
  return (
    <Flex direction='column' gap='20px'>
      <Flex
        direction='column'
        gap='24px'
        paddingX='32px'
        paddingY='24px'
        background='gray.100'
        borderRadius='12px'
      >
        <Flex gap='16px' alignItems='center'>
          <Box className='Headline-md' color='brandBold'>
            2024. 03. 13 - 2024. 03. 17
          </Box>
          <Box
            background='#ECFDF5'
            color='successBold'
            paddingX='8px'
            paddingY='4px'
            borderRadius='14px'
          >
            NN 시간
          </Box>
        </Flex>
        <Flex direction='column' gap='24px' className='Body-lg'>
          <Box>
            요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다요약문입니다
          </Box>
          <Divider />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContributionModalItem;
