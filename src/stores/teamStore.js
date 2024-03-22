import { create } from 'zustand';

const useTeamStore = create((set) => ({
  teamId: 0,
  teamName: '',
  handleTeamId: (number, string) => set({ teamId: number, teamName: string }),
}));

export default useTeamStore;
