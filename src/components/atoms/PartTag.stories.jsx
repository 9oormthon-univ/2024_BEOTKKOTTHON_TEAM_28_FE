import PartTag from './PartTag';

export default {
  title: 'Atoms/PartTag',
  component: PartTag,
  argTypes: {
    active: { control: 'boolean' },
  },
};

const Template = (args) => <PartTag {...args} />;

export const Designer = Template.bind({});
Designer.args = {
  part: 'DESIGN',
  active: true,
};

export const PM = Template.bind({});
PM.args = {
  part: 'PM',
  active: true,
};

export const FrontEnd = Template.bind({});
FrontEnd.args = {
  part: 'FRONTEND',
  active: true,
};

export const Backend = Template.bind({});
Backend.args = {
  part: 'BACKEND',
  active: true,
};
