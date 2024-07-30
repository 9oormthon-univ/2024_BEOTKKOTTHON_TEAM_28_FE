import { CalendarHeatmap } from 'react-custom-calendar-heatmap';
import HeatmapElement from '../atoms/CommitSVG';
import PropTypes from 'prop-types';

const CommitBox = ({ values }) => {
  return (
    <div style={{ width: '800px' }}>
      <CalendarHeatmap
        depth={4}
        size={15}
        weekType='koShort'
        colorSet={['#E0E7EE', '#FDDDB8', '#FFC07F', '#FFA55C', '#FF7A35']}
        values={values}
        SvgComponent={HeatmapElement}
      />
    </div>
  );
};

CommitBox.propTypes = { values: PropTypes.array };

export default CommitBox;
