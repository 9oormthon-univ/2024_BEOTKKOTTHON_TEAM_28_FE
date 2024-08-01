import { CalendarHeatmap } from 'react-custom-calendar-heatmap';
import HeatmapElement from '../atoms/CommitSVG';
import PropTypes from 'prop-types';

const combineValues = (values) => {
  const combined = values.reduce((acc, val) => {
    const { date, value } = val;
    if (acc[date]) {
      acc[date].value += value;
    } else {
      acc[date] = { date, value };
    }
    return acc;
  }, {});

  return Object.values(combined);
};

const CommitBox = ({ values }) => {
  // TODO: api 이슈로 인한 우선 처리
  const combinedValues = combineValues(values);

  return (
    <div style={{ width: '800px' }}>
      <CalendarHeatmap
        depth={4}
        size={15}
        weekType='koShort'
        colorSet={['#E0E7EE', '#FDDDB8', '#FFC07F', '#FFA55C', '#FF7A35']}
        values={combinedValues}
        SvgComponent={HeatmapElement}
        HoverComponent={<div></div>}
      />
    </div>
  );
};

CommitBox.propTypes = { values: PropTypes.array };

export default CommitBox;
