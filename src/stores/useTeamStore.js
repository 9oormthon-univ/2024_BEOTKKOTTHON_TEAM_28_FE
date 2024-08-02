import { create } from 'zustand';

const useTeamStore = create((set) => ({
  isOpenTeamSelectModal: false,
  openTeamSelectModal: () => set({ isOpenTeamSelectModal: true }),
  closeTeamSelectModal: () => set({ isOpenTeamSelectModal: false }),
  teamId: 0,
  teamName: '',
  handleTeamId: (newTeamId, newTeamName) => set({ teamId: +newTeamId, teamName: newTeamName }),
}));

export default useTeamStore;
