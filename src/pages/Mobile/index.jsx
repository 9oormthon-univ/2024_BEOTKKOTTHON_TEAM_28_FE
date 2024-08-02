import Paths from '../../constants/Paths';
import PropTypes from 'prop-types';
import mobile from '../../assets/images/mobile.webp';
import { useNavigate } from 'react-router-dom';

const Mobile = ({ children, isMobile }) => {
  const navigator = useNavigate();

  if (isMobile) {
    navigator(Paths.Landing);
  }

  return isMobile ? (
    <img src={mobile} style={{ width: '100vw' }} alt='온라인으로 이용해주세요' />
  ) : (
    children
  );
};

Mobile.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool,
};

export default Mobile;
