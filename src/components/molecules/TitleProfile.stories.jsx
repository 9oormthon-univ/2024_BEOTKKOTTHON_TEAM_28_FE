import TitleProfile from './TitleProfile';

export default {
  title: 'Molecules/TitleProfile',
  component: TitleProfile,
};

export const FRONTEND = {
  args: {
    part: 'FRONTEND',
    createdAt: new Date(),
    profileImage: 'CARROT',
    nickname: '정아현',
    isNoTime: false,
  },
};

export const DESIGNER = {
  args: {
    part: 'DESIGN',
    createdAt: (() => {
      const twoHoursAgo = new Date();
      twoHoursAgo.setHours(twoHoursAgo.getHours() - 2);
      return twoHoursAgo;
    })(),
    profileImage: 'TOMATO',
    nickname: '안재윤',
    isNoTime: false,
  },
};
