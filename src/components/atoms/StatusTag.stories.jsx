import StatusTag from './StatusTag';

export default {
  title: 'atom/StatusTag',
  component: StatusTag,
};

const Template = (args) => <StatusTag {...args} />;

export const InProgress = Template.bind({});
InProgress.args = {
  status: 'IN_PROGRESS',
};

export const PeerReview = Template.bind({});
PeerReview.args = {
  status: 'PEER_REVIEW',
};

export const Complete = Template.bind({});
Complete.args = {};
