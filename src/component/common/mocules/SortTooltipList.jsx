import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { SortTooltip } from '../atoms';

const SortTooltipList = ({ sorts }) => {
  return (
    <Flex gap='12px'>
      {sorts.map((sort) => (
        <SortTooltip key={sort} sort={sort} />
      ))}
    </Flex>
  );
};

SortTooltipList.propTypes = {
  sorts: PropTypes.array,
};
export default SortTooltipList;
