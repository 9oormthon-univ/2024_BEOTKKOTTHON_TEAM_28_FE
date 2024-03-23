import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../stores/userStore';

const useRedirectMain = () => {
  const { memberId } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!memberId) {
      navigate('/login');
    }
  }, [memberId, navigate]);
};

export default useRedirectMain;
