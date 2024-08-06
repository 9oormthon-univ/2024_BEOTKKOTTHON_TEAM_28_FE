import { useEffect, useState } from 'react';

import Paths from '../constants/Paths';
import PropTypes from 'prop-types';
import getMyMemberId from '../api/team/getMyMemberId';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const CheckTeamMember = ({ children }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isValidMember, setIsValidMember] = useState(null); // State to manage validation

  useEffect(() => {
    const fetchMyMemberId = async () => {
      try {
        const myMemberId = await getMyMemberId(id);

        if (myMemberId) {
          setIsValidMember(true);
        } else {
          navigate(Paths.Landing);
        }
      } catch (error) {
        navigate(Paths.Landing);
      }
    };

    if (id) {
      fetchMyMemberId();
    }
  }, [id, navigate]);

  if (isValidMember === null) {
    return null; // or some loading indicator
  }

  return isValidMember ? children : null;
};
CheckTeamMember.propTypes = {
  children: PropTypes.node,
};

export default CheckTeamMember;
