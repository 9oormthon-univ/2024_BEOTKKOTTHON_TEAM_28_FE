import PropTypes from 'prop-types';
import mobile from '../../assets/images/mobile.webp';

const Mobile = ({ children, isMobile }) => {
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
