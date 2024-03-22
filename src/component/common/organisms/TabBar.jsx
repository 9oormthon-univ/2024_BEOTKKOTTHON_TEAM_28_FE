import { Tab, TabList, Tabs } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

const TabBar = ({ tabs, currentTap, handleCurrentTap }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const index = tabs.indexOf(currentTap);

    if (index !== -1) {
      setSelectedIndex(index);
    }
  }, [currentTap, selectedIndex, tabs]);

  return (
    <Tabs
      index={selectedIndex}
      onChange={(index) => {
        handleCurrentTap(tabs[index]);
      }}
    >
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

  currentTap: PropTypes.string,
  handleCurrentTap: PropTypes.func,
};

export default TabBar;
