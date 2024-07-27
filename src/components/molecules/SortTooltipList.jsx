import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SortTooltip from '../atoms/SortTooltip';

const SortTooltipList = ({ sorts, handleCurrentSort, currentSort }) => {
  return (
    <Flex gap='12px'>
      {sorts.map((sort) => (
        <SortTooltip
          key={sort.label}
          sort={sort.label}
          isSelected={sort.value === currentSort.value}
          onSelect={() => handleCurrentSort(sort)}
        />
      ))}
    </Flex>
  );
};

SortTooltipList.propTypes = {
  sorts: PropTypes.array,
  currentSort: PropTypes.string,
  handleCurrentSort: PropTypes.func,
};
export default SortTooltipList;
