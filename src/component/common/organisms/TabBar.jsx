import { Tab, TabList, Tabs } from '@chakra-ui/react';

const TabBar = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>기획</Tab>
        <Tab>백엔드</Tab>
        <Tab>프론트엔드</Tab>
      </TabList>
    </Tabs>
  );
};

export default TabBar;
