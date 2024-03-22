import { Flex } from '@chakra-ui/react';
import ProjectItem from './ProjectItem';
import { getProjectList } from '../../api/dashboard';
import { useEffect } from 'react';
import { useState } from 'react';

const GardenList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectList();
      setData(response);
    };

    fetchData();
  }, []);
  return (
    <Flex direction='column' gap='40px'>
      {data?.map((el) => (
        <ProjectItem
          key={el.id}
          name={el.name}
          summary={el.summary}
          profileImage={el.profileImage}
          startAt={el.startAt}
          endAt={el.endAt}
          status={el.status}
        />
      ))}
    </Flex>
  );
};

export default GardenList;
