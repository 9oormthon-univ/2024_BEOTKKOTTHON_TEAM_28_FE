import PropTypes from 'prop-types';

const ToggleIcon = ({ isToggled = false }) => {
  if (isToggled)
    return (
      <svg
        width='28'
        height='28'
        viewBox='0 0 28 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='icon / minus'>
          <path
            id='Vector'
            d='M7.19434 14H20.8054'
            stroke='#059669'
            strokeWidth='1.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </svg>
    );
  return (
    <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='icon / chevron-down'>
        <path
          id='Vector'
          d='M8.16675 11.0833L14.0001 16.9167L19.8334 11.0833'
          stroke='#059669'
          strokeWidth='1.66667'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

ToggleIcon.propTypes = {
  isToggled: PropTypes.bool,
};
export default ToggleIcon;
