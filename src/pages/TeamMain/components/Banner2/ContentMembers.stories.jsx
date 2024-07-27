import ContentMember from './ContentMember';
import { Flex } from '@chakra-ui/react';

export default {
  title: 'molecules/ContentMembers',
  component: ContentMember,
};

const Template = (args) => (
  <Flex gap='10px'>
    {args.members.map((arg) => (
      <ContentMember key={arg.username} {...arg} />
    ))}
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  members: [
    {
      profile: '/carrot.png',
      username: '정아현',
      part: '프론트엔드',
    },
    {
      profile: '/blueberry.png',
      username: '최정흠',
      part: '백엔드',
    },
    {
      profile: '/tomato.png',
      username: '안재윤',
      part: '디자이너',
    },
    {
      profile: '/cabbage.png',
      username: '김영원',
      part: 'PM',
    },
    {
      profile: '/cucumber.png',
      username: '박소현',
      part: '프론트엔드',
    },
  ],
};
