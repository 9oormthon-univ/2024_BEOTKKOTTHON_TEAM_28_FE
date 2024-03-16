import { Tab, TabList, Tabs } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const TabBar = ({ tabs }) => {
  return (
    <Tabs colorScheme='successBold'>
      <TabList>
        {tabs.map((tab) => (
          <Tab key={tab}>{tab}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

TabBar.propTypes = {
  tabs: PropTypes.array,
};

export default TabBar;
