import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import SortTooltip from '../atoms/SortTooltip';
import { useState } from 'react';

const SortTooltipList = ({ sorts }) => {
  const [selectedSort, setSelectedSort] = useState('전체');

  return (
    <Flex gap='12px'>
      {sorts.map((sort) => (
        <SortTooltip
          key={sort}
          sort={sort}
          isSelected={sort === selectedSort}
          onSelect={() => setSelectedSort(sort)}
        />
      ))}
    </Flex>
  );
};

SortTooltipList.propTypes = {
  sorts: PropTypes.array,
};
export default SortTooltipList;
