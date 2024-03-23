import { Flex } from '@chakra-ui/react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
import { getProjectList } from '../../api/dashboard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useUserStore from '../../stores/userStore';

const GardenList = ({ sort }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const { userId } = useUserStore();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getProjectList(id ?? userId, sort);
      setData(response);
    };

    fetchData();
  }, [id, userId, sort]);

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

GardenList.propTypes = {
  sort: PropTypes.string,
};

export default GardenList;
