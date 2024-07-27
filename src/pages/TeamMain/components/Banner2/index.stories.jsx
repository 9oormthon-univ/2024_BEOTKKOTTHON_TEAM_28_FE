import Banner2 from '.';

export default {
  title: 'Organisms/Banner2',
  component: Banner2,
};

export const NoConnected = {
  args: {
    isTeamId: false,
  },
};

export const Connected = {
  args: {
    isTeamId: true,
  },
};
