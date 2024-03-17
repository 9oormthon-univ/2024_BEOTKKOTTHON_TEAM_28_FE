import { create } from 'zustand';

const useToastStore = create((set) => ({
  isShowToast: false,
  toastMessage: '',
  handleShowToastMessage: (message) => set({ isShowToast: true, toastMessage: message }),
  handleHideToast: () => set({ isShowToast: false, message: '' }),
}));

export default useToastStore;
