import PropTypes from 'prop-types';
import ableLeft from '../../assets/icons/ableLeft.png';
import ableRight from '../../assets/icons/ableRight.png';
import disableLeft from '../../assets/icons/disableLeft.png';
import disableRight from '../../assets/icons/disableRight.png';

const ArrowIcon = ({ id, isActive, direction, style, onClick }) => {
  if (isActive && direction === 'left')
    return (
      <img id={id} style={style} src={ableLeft} onClick={onClick} alt='clickable next button' />
    );
  if (isActive && direction === 'right')
    return (
      <img id={id} style={style} src={ableRight} onClick={onClick} alt='clickable next button' />
    );
  if (!isActive && direction === 'left')
    return (
      <img id={id} style={style} src={disableLeft} onClick={onClick} alt='clickable next button' />
    );
  if (!isActive && direction === 'right')
    return (
      <img id={id} style={style} src={disableRight} onClick={onClick} alt='clickable next button' />
    );
};

ArrowIcon.propTypes = {
  isActive: PropTypes.bool,
  direction: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
export default ArrowIcon;
