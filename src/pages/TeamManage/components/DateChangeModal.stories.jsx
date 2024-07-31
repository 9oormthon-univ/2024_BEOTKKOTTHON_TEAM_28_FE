import DateChangeModal from './DateChangeModal';

export default {
  title: 'TEMPLATE/DateChangeModal',
  component: DateChangeModal,
};

export const Default = {
  args: {
    content: '시간변경 UI 인터렉션 확인',
    updateTaskItems: () => {
      console.log('하이');
    },
    currentUser: '정아현',
    id: 2,
    startAt: '2024-07-25T22:48',
    endAt: '2024-07-26T03:48',
  },
};
