import { CalendarHeatmap } from 'react-custom-calendar-heatmap';
import HeatmapElement from '../atoms/CommitSVG';
import PropTypes from 'prop-types';

const CommitBox = ({ values }) => {
  return (
    <div style={{ width: '800px' }}>
      <CalendarHeatmap weekType='koShort' values={values} SvgComponent={HeatmapElement} />
    </div>
  );
};

CommitBox.propTypes = { values: PropTypes.array };

export default CommitBox;
