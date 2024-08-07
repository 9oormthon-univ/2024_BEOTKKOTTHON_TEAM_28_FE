import PropTypes from 'prop-types';

const BalloonSVG = ({ isLong, ...props }) => {
  return (
    <svg
      width='118'
      height='71'
      viewBox={isLong ? '0 0 120 47' : '0 0 118 71'}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d={
          isLong
            ? 'M0 15C0 12.7909 1.79086 11 4 11H116C118.209 11 120 12.7909 120 15V43C120 45.2091 118.209 47 116 47H4C1.79086 47 0 45.2091 0 43V15Z'
            : 'M0 4C0 1.79086 1.79086 0 4 0H114C116.209 0 118 1.79086 118 4V56C118 58.2091 116.209 60 114 60H4C1.79086 60 0 58.2091 0 56V4Z'
        }
        fill='#1E293B'
      />
      <path
        d={
          isLong
            ? 'M20.2103 1.82123C19.4317 0.536959 17.5683 0.536957 16.7897 1.82122L11.2477 10.9632C10.4397 12.2961 11.3993 14 12.958 14L24.042 14C25.6007 14 26.5603 12.2961 25.7523 10.9632L20.2103 1.82123Z'
            : 'M16.7897 69.1788C17.5683 70.463 19.4317 70.463 20.2103 69.1788L25.7523 60.0368C26.5603 58.7039 25.6007 57 24.042 57H12.958C11.3993 57 10.4397 58.7039 11.2477 60.0368L16.7897 69.1788Z'
        }
        fill='#1E293B'
      />
    </svg>
  );
};

BalloonSVG.propTypes = {
  isLong: PropTypes.bool,
};

export default BalloonSVG;
