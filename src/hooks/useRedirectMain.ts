import Paths from '../constants/Paths';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../stores/userStore';

const useRedirectMain = () => {
  const { memberId } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!memberId) {
      navigate(Paths.Login);
    }
  }, [memberId, navigate]);
};

export default useRedirectMain;
