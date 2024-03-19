import { Tab, TabList, Tabs } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const TabBar = ({ tabs }) => {
  return (
    <Tabs>
      <TabList>
        {tabs.map((tab) => (
          <Tab key={tab} _selected={{ color: 'successBold', borderColor: 'successBold' }}>
            {tab}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

TabBar.propTypes = {
  tabs: PropTypes.array,
};

export default TabBar;
