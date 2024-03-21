import { create } from 'zustand';
import { returnProfileImg } from '../lips/returnProfile';

const useUserStore = create((set) => ({
  profile: '',
  handleProfile: (string) => set({ profile: returnProfileImg(string) }),
}));

export default useUserStore;
