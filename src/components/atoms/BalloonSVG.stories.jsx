import BalloonSVG from './BalloonSVG';

export default {
  title: 'Atoms/Balloon',
  component: BalloonSVG,
};

const Template = (args) => <BalloonSVG {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Long = Template.bind({});
Long.args = {
  isLong: true,
};
