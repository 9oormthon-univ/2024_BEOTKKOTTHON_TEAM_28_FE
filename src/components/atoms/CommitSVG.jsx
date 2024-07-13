const HeatmapElement = ({ ...props }) => {
  return (
    <svg viewBox='0 0 10 10' width={10} height={10} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M0 4C0 1.79086 1.79086 0 4 0H6C8.20914 0 10 1.79086 10 4V6C10 8.20914 8.20914 10 6 10H4C1.79086 10 0 8.20914 0 6V4Z'
        fill='current'
      />
    </svg>
  );
};

export default HeatmapElement;
