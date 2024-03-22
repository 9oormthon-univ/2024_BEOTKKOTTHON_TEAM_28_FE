import { Tab, TabList, Tabs } from '@chakra-ui/react';

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

const TabBar = ({ tabs, currentTap, handleCurrentTap }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 현재 탭이 변경되면 선택된 탭을 업데이트합니다.
  // tabs 배열에서 현재 탭의 인덱스를 찾아 setSelectedIndex를 호출하여 선택된 탭을 업데이트합니다.
  useEffect(() => {
    const index = tabs.indexOf(currentTap);
    console.log(index);
    if (index !== -1) {
      setSelectedIndex(index);
      console.log(index);
    }
  }, [currentTap, selectedIndex, tabs]);

  return (
    <Tabs index={selectedIndex} onChange={(index) => handleCurrentTap(tabs[index])}>
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
