import { create } from 'zustand';

const useUserStore = create((set) => ({
  profile: '',
  userId: '',
  userName: '',
  handleProfile: ({ profile, userId, userName }) => set({ profile, userId, userName }),
}));

export default useUserStore;
