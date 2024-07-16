import Mobile from '.';

export default {
  title: 'TEMPLATE/Mobile',
  component: Mobile,
  parameters: {
    viewport: {
      defaultViewport: '500px',
    },
  },
};

export const Default = {
  args: { isMobile: true },
};
