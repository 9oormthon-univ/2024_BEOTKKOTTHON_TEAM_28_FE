import Paths from '../constants/Paths';
import { getMemberList } from '../api/taskhistory';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CheckTeamMember = ({ children }) => {
  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchMembersData = async () => {
      const response = await getMemberList(id);

      return response?.memberList;
    };

    const fetchMyMemberId = async () => {
      const response = await getMemberList(id);

      return response?.memberList;
    };

    if (id) {
      const members = fetchMembersData();
      const myMemberId = fetchMyMemberId();

      if (members.every((member) => member.memberId !== myMemberId)) {
        navigator(Paths.Landing);
        return null;
      }
    }
  }, [id, navigator]);

  return children;
};

export default CheckTeamMember;
